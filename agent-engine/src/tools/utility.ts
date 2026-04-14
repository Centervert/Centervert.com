import type { Tool } from "./types.js";
import { memorySearch } from "../memory/search.js";
import { loadFeedback } from "../memory/feedback.js";
import { logActivity } from "../memory/log.js";

export const memorySearchTool: Tool = {
  name: "memory_search",
  description:
    "Search your knowledge base and past feedback for relevant information. Use this to recall insights from previous tasks.",
  inputSchema: {
    type: "object",
    properties: {
      query: {
        type: "string",
        description: "Search query to find relevant memories.",
      },
      limit: {
        type: "number",
        description: "Max number of results (default 5).",
      },
    },
    required: ["query"],
  },
  handler: async (input) => {
    const results = memorySearch(
      input.query as string,
      (input.limit as number) || 5
    );
    return { results };
  },
};

export const readFeedbackHistory: Tool = {
  name: "read_feedback_history",
  description: "Read your past client ratings and comments.",
  inputSchema: {
    type: "object",
    properties: {
      limit: {
        type: "number",
        description: "Max number of entries (default 10).",
      },
    },
  },
  handler: async (input) => {
    const all = loadFeedback();
    const limit = (input.limit as number) || 10;
    return { feedback: all.slice(-limit) };
  },
};

export const logActivityTool: Tool = {
  name: "log_activity",
  description: "Write an entry to the daily activity log.",
  inputSchema: {
    type: "object",
    properties: {
      action: { type: "string", description: "What happened." },
      details: {
        type: "string",
        description: "Additional details (optional).",
      },
    },
    required: ["action"],
  },
  handler: async (input) => {
    logActivity(input.action as string, input.details as string | undefined);
    return { logged: true };
  },
};

export const utilityTools: Tool[] = [
  memorySearchTool,
  readFeedbackHistory,
  logActivityTool,
];
