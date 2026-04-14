import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { AgentConfig } from "./config.js";
import type { LLMProvider } from "./llm/types.js";
import { runAgentLoop } from "./loop/index.js";
import { runStudySession } from "./loop/study.js";
import { addFeedback } from "./memory/feedback.js";
import { logActivity } from "./memory/log.js";
import type { ToolContext } from "./tools/types.js";

interface OrderRow {
  id: string;
  service_type: string;
  description: string;
  price_cents: number;
  status: string;
  customer_name: string | null;
  customer_email: string;
}

export class Heartbeat {
  private config: AgentConfig;
  private llm: LLMProvider;
  private supabase: SupabaseClient;
  private processing = new Set<string>();
  private pollTimer: ReturnType<typeof setInterval> | null = null;
  private studyTimer: ReturnType<typeof setInterval> | null = null;

  constructor(config: AgentConfig, llm: LLMProvider) {
    this.config = config;
    this.llm = llm;
    this.supabase = createClient(config.supabase.url, config.supabase.anonKey);
  }

  start(): void {
    logActivity("Heartbeat started", `polling every ${this.config.polling.intervalMs}ms`);
    console.log(`[heartbeat] Agent ${this.config.agentId} starting...`);
    console.log(`[heartbeat] Polling every ${this.config.polling.intervalMs / 1000}s`);
    console.log(`[heartbeat] Study sessions every ${this.config.studyIntervalMs / 60000}min`);

    this.poll();
    this.pollTimer = setInterval(
      () => this.poll(),
      this.config.polling.intervalMs
    );

    if (this.config.learningEnabled) {
      this.studyTimer = setInterval(
        () => this.study(),
        this.config.studyIntervalMs
      );
    }
  }

  stop(): void {
    if (this.pollTimer) clearInterval(this.pollTimer);
    if (this.studyTimer) clearInterval(this.studyTimer);
    logActivity("Heartbeat stopped");
    console.log("[heartbeat] Stopped.");
  }

  private async poll(): Promise<void> {
    try {
      // Fetch orders that need work: paid (new) or revision (redo)
      const { data: orders, error } = await this.supabase
        .from("orders")
        .select("*")
        .in("status", ["paid", "revision"])
        .order("created_at", { ascending: true });

      if (error) {
        console.error("[heartbeat] Poll error:", error.message);
        return;
      }

      if (!orders || orders.length === 0) return;

      console.log(`[heartbeat] Found ${orders.length} order(s) to process`);

      for (const order of orders as OrderRow[]) {
        if (this.processing.has(order.id)) continue;
        if (this.processing.size >= this.config.maxConcurrentTasks) break;

        this.processOrder(order);
      }

      // Also check for completed orders with new feedback to ingest
      await this.ingestFeedback();
    } catch (err) {
      console.error("[heartbeat] Poll error:", err);
    }
  }

  private async processOrder(order: OrderRow): Promise<void> {
    this.processing.add(order.id);
    console.log(`[agent] Processing order ${order.id} (${order.service_type})`);
    logActivity("Processing order", `${order.id} — ${order.service_type}`);

    // Mark as in_progress
    await this.supabase
      .from("orders")
      .update({ status: "in_progress", agent_id: this.config.agentId })
      .eq("id", order.id);

    const toolContext: ToolContext = {
      orderId: order.id,
      agentId: this.config.agentId,
      supabase: this.supabase,
    };

    const taskDescription = [
      `Service: ${order.service_type}`,
      `Customer: ${order.customer_name || order.customer_email}`,
      `Price: $${(order.price_cents / 100).toFixed(2)}`,
      "",
      order.description,
    ].join("\n");

    try {
      const result = await runAgentLoop(
        this.config,
        this.llm,
        order.id,
        taskDescription,
        toolContext
      );

      console.log(
        `[agent] Order ${order.id} ${result.success ? "completed" : "hit max turns"} in ${result.turns} turns`
      );
      console.log(
        `[agent] Tokens: ${result.totalInputTokens} in, ${result.totalOutputTokens} out`
      );

      logActivity(
        "Order processed",
        `${order.id} — turns: ${result.turns}, tokens: ${result.totalInputTokens + result.totalOutputTokens}`
      );
    } catch (err) {
      console.error(`[agent] Error processing order ${order.id}:`, err);
      logActivity(
        "Order processing error",
        `${order.id}: ${err instanceof Error ? err.message : "Unknown"}`
      );
    } finally {
      this.processing.delete(order.id);
    }
  }

  private async ingestFeedback(): Promise<void> {
    const { data: feedbackRows } = await this.supabase
      .from("feedback")
      .select("*, orders(description, service_type)")
      .order("created_at", { ascending: false })
      .limit(10);

    if (!feedbackRows) return;

    for (const row of feedbackRows) {
      const order = row.orders as { description: string; service_type: string } | null;
      if (!order) continue;

      try {
        addFeedback({
          orderId: row.order_id,
          taskDescription: `${order.service_type}: ${order.description.slice(0, 200)}`,
          score: row.score,
          comments: row.comments || "",
        });
      } catch {
        // duplicate — already ingested
      }
    }
  }

  private async study(): Promise<void> {
    if (this.processing.size > 0) {
      console.log("[study] Skipping — agent is busy with tasks");
      return;
    }

    console.log("[study] Starting study session...");
    const entry = await runStudySession(this.config, this.llm);

    if (entry) {
      console.log(`[study] New insight (${entry.topic}): ${entry.insight.slice(0, 80)}...`);
    }
  }
}
