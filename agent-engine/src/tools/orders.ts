import type { Tool } from "./types.js";

export const readOrder: Tool = {
  name: "read_order",
  description:
    "Get full details of the current order including description, service type, and any client messages.",
  inputSchema: {
    type: "object",
    properties: {},
  },
  handler: async (_input, ctx) => {
    const { data: order } = await ctx.supabase
      .from("orders")
      .select("*")
      .eq("id", ctx.orderId)
      .single();

    const { data: messages } = await ctx.supabase
      .from("messages")
      .select("*")
      .eq("order_id", ctx.orderId)
      .order("created_at", { ascending: true });

    return { order, messages: messages || [] };
  },
};

export const submitDeliverable: Tool = {
  name: "submit_deliverable",
  description:
    "Submit the completed deliverable for the current order. The deliverable should be complete, polished Markdown.",
  inputSchema: {
    type: "object",
    properties: {
      deliverable: {
        type: "string",
        description: "The complete deliverable in Markdown format.",
      },
    },
    required: ["deliverable"],
  },
  handler: async (input, ctx) => {
    const { error } = await ctx.supabase
      .from("orders")
      .update({
        deliverable: input.deliverable as string,
        status: "review",
        agent_id: ctx.agentId,
      })
      .eq("id", ctx.orderId);

    if (error) throw new Error(`Failed to submit deliverable: ${error.message}`);

    return { success: true, status: "review" };
  },
};

export const sendMessage: Tool = {
  name: "send_message",
  description:
    "Send a message to the client. Use this to ask clarifying questions or provide status updates.",
  inputSchema: {
    type: "object",
    properties: {
      message: {
        type: "string",
        description: "The message to send to the client.",
      },
    },
    required: ["message"],
  },
  handler: async (input, ctx) => {
    const { error } = await ctx.supabase.from("messages").insert({
      order_id: ctx.orderId,
      sender: "agent",
      content: input.message as string,
    });

    if (error) throw new Error(`Failed to send message: ${error.message}`);

    return { success: true };
  },
};

export const updateOrderStatus: Tool = {
  name: "update_order_status",
  description:
    "Update the status of the current order (e.g., to 'in_progress' when starting work).",
  inputSchema: {
    type: "object",
    properties: {
      status: {
        type: "string",
        enum: ["assigned", "in_progress", "review"],
        description: "The new status for the order.",
      },
    },
    required: ["status"],
  },
  handler: async (input, ctx) => {
    const { error } = await ctx.supabase
      .from("orders")
      .update({ status: input.status as string, agent_id: ctx.agentId })
      .eq("id", ctx.orderId);

    if (error) throw new Error(`Failed to update status: ${error.message}`);

    return { success: true, status: input.status };
  },
};

export const orderTools: Tool[] = [
  readOrder,
  submitDeliverable,
  sendMessage,
  updateOrderStatus,
];
