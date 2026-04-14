import type { SupabaseClient } from "@supabase/supabase-js";

export interface ToolContext {
  orderId: string;
  agentId: string;
  supabase: SupabaseClient;
}

export type ToolHandler = (
  input: Record<string, unknown>,
  context: ToolContext
) => Promise<unknown>;

export interface Tool {
  name: string;
  description: string;
  inputSchema: {
    type: "object";
    properties: Record<string, unknown>;
    required?: string[];
  };
  handler: ToolHandler;
}
