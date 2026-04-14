import type { AgentConfig } from "../config.js";
import type { LLMProvider, LLMMessage, ContentBlock } from "../llm/types.js";
import { buildSystemPrompt } from "./prompt.js";
import { logActivity } from "../memory/log.js";
import { getToolDefinitions, executeTool, type ToolContext } from "../tools/registry.js";

const MAX_TURNS = 10;

export interface AgentLoopResult {
  success: boolean;
  turns: number;
  totalInputTokens: number;
  totalOutputTokens: number;
}

export async function runAgentLoop(
  config: AgentConfig,
  llm: LLMProvider,
  orderId: string,
  taskDescription: string,
  toolContext: ToolContext
): Promise<AgentLoopResult> {
  const systemPrompt = buildSystemPrompt(config, taskDescription);
  const tools = getToolDefinitions();
  const messages: LLMMessage[] = [
    {
      role: "user",
      content: `New order to fulfill:\n\nOrder ID: ${orderId}\n\n${taskDescription}\n\nPlease complete this order. Use the available tools to submit your deliverable when done.`,
    },
  ];

  let totalInputTokens = 0;
  let totalOutputTokens = 0;

  for (let turn = 0; turn < MAX_TURNS; turn++) {
    logActivity("Agent loop turn", `turn=${turn + 1}, orderId=${orderId}`);

    const response = await llm.chat(systemPrompt, messages, tools);
    totalInputTokens += response.usage.inputTokens;
    totalOutputTokens += response.usage.outputTokens;

    messages.push({ role: "assistant", content: response.content });

    if (response.stopReason !== "tool_use") {
      logActivity("Agent loop completed", `turns=${turn + 1}, orderId=${orderId}`);
      return {
        success: true,
        turns: turn + 1,
        totalInputTokens,
        totalOutputTokens,
      };
    }

    // Execute tool calls
    const toolUseBlocks = response.content.filter(
      (b): b is ContentBlock & { type: "tool_use" } => b.type === "tool_use"
    );

    const toolResults: ContentBlock[] = [];
    for (const toolCall of toolUseBlocks) {
      logActivity("Tool call", `${toolCall.name} for order ${orderId}`);

      try {
        const result = await executeTool(
          toolCall.name,
          toolCall.input,
          toolContext
        );
        toolResults.push({
          type: "tool_result",
          tool_use_id: toolCall.id,
          content: typeof result === "string" ? result : JSON.stringify(result),
        });
      } catch (err) {
        toolResults.push({
          type: "tool_result",
          tool_use_id: toolCall.id,
          content: `Error: ${err instanceof Error ? err.message : "Unknown error"}`,
        });
      }
    }

    messages.push({ role: "user", content: toolResults });
  }

  logActivity("Agent loop hit max turns", `orderId=${orderId}`);
  return {
    success: false,
    turns: MAX_TURNS,
    totalInputTokens,
    totalOutputTokens,
  };
}
