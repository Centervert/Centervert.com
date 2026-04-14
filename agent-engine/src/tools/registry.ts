import type { ToolDefinition } from "../llm/types.js";
import type { Tool, ToolContext } from "./types.js";
import { orderTools } from "./orders.js";
import { utilityTools } from "./utility.js";

export type { ToolContext } from "./types.js";

const allTools: Tool[] = [...orderTools, ...utilityTools];

const toolMap = new Map<string, Tool>();
for (const tool of allTools) {
  toolMap.set(tool.name, tool);
}

export function getToolDefinitions(): ToolDefinition[] {
  return allTools.map((t) => ({
    name: t.name,
    description: t.description,
    input_schema: t.inputSchema,
  }));
}

export async function executeTool(
  name: string,
  input: Record<string, unknown>,
  context: ToolContext
): Promise<unknown> {
  const tool = toolMap.get(name);
  if (!tool) {
    throw new Error(`Unknown tool: ${name}`);
  }
  return tool.handler(input, context);
}
