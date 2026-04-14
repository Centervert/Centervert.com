import type { AgentConfig } from "../config.js";
import type {
  LLMProvider,
  LLMMessage,
  LLMResponse,
  ToolDefinition,
  ContentBlock,
} from "./types.js";

class AnthropicProvider implements LLMProvider {
  private apiKey: string;
  private model: string;

  constructor(apiKey: string, model: string) {
    this.apiKey = apiKey;
    this.model = model;
  }

  async chat(
    systemPrompt: string,
    messages: LLMMessage[],
    tools?: ToolDefinition[]
  ): Promise<LLMResponse> {
    const body: Record<string, unknown> = {
      model: this.model,
      max_tokens: 4096,
      system: systemPrompt,
      messages: messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    };

    if (tools && tools.length > 0) {
      body.tools = tools;
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Anthropic API error ${response.status}: ${err}`);
    }

    const data = await response.json();

    return {
      content: data.content as ContentBlock[],
      stopReason: data.stop_reason === "tool_use" ? "tool_use" : "end_turn",
      usage: {
        inputTokens: data.usage?.input_tokens ?? 0,
        outputTokens: data.usage?.output_tokens ?? 0,
      },
    };
  }
}

class OpenAIProvider implements LLMProvider {
  private apiKey: string;
  private model: string;
  private baseUrl: string;

  constructor(apiKey: string, model: string, baseUrl?: string) {
    this.apiKey = apiKey;
    this.model = model;
    this.baseUrl = baseUrl || "https://api.openai.com/v1";
  }

  async chat(
    systemPrompt: string,
    messages: LLMMessage[],
    tools?: ToolDefinition[]
  ): Promise<LLMResponse> {
    const oaiMessages = [
      { role: "system", content: systemPrompt },
      ...messages.map((m) => ({
        role: m.role,
        content:
          typeof m.content === "string"
            ? m.content
            : m.content
                .filter((b) => b.type === "text")
                .map((b) => (b as { type: "text"; text: string }).text)
                .join("\n"),
      })),
    ];

    const body: Record<string, unknown> = {
      model: this.model,
      max_tokens: 4096,
      messages: oaiMessages,
    };

    if (tools && tools.length > 0) {
      body.tools = tools.map((t) => ({
        type: "function",
        function: {
          name: t.name,
          description: t.description,
          parameters: t.input_schema,
        },
      }));
    }

    const response = await fetch(`${this.baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`OpenAI API error ${response.status}: ${err}`);
    }

    const data = await response.json();
    const choice = data.choices?.[0];

    const content: ContentBlock[] = [];
    if (choice?.message?.content) {
      content.push({ type: "text", text: choice.message.content });
    }
    if (choice?.message?.tool_calls) {
      for (const tc of choice.message.tool_calls) {
        content.push({
          type: "tool_use",
          id: tc.id,
          name: tc.function.name,
          input: JSON.parse(tc.function.arguments || "{}"),
        });
      }
    }

    const hasToolUse = content.some((b) => b.type === "tool_use");

    return {
      content,
      stopReason: hasToolUse ? "tool_use" : "end_turn",
      usage: {
        inputTokens: data.usage?.prompt_tokens ?? 0,
        outputTokens: data.usage?.completion_tokens ?? 0,
      },
    };
  }
}

export function createLLMProvider(config: AgentConfig): LLMProvider {
  switch (config.llm.provider) {
    case "anthropic":
      return new AnthropicProvider(config.llm.apiKey, config.llm.model);
    case "openai":
      return new OpenAIProvider(config.llm.apiKey, config.llm.model);
    case "openrouter":
      return new OpenAIProvider(
        config.llm.apiKey,
        config.llm.model,
        "https://openrouter.ai/api/v1"
      );
    default:
      throw new Error(`Unknown LLM provider: ${config.llm.provider}`);
  }
}
