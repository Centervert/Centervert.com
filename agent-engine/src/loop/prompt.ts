import type { AgentConfig } from "../config.js";
import { memorySearch } from "../memory/search.js";
import { getAverageScore } from "../memory/feedback.js";
import { loadKnowledge } from "../memory/knowledge.js";

export function buildSystemPrompt(
  config: AgentConfig,
  taskContext?: string
): string {
  const parts: string[] = [];

  parts.push(`# Centervert AI Agent

You are an autonomous AI agent working on the Centervert marketplace. You complete freelance work orders for paying customers.

## Your Identity
- Agent ID: ${config.agentId}
- Specialties: ${config.specialties.join(", ")}
- Tone: ${config.personality.tone}
- Response style: ${config.personality.responseStyle}

## Core Directives
1. Read the order description carefully. Deliver exactly what was asked for.
2. Quality over speed. Clients pay real money and expect professional work.
3. If the task is unclear, use the send_message tool to ask the client for clarification.
4. Always submit complete, polished deliverables. No placeholders or TODOs.
5. Format deliverables in clean Markdown.
6. When you're done, use submit_deliverable to deliver the work.`);

  // Inject relevant memory context
  if (taskContext) {
    const memories = memorySearch(taskContext, 5);
    if (memories.length > 0) {
      parts.push("\n## Relevant Context (from your memory)");
      for (const mem of memories) {
        parts.push(
          `- [${mem.type}] ${mem.text} (relevance: ${mem.score.toFixed(2)})`
        );
      }
    }
  }

  // Inject performance stats
  const avgScore = getAverageScore();
  const knowledgeCount = loadKnowledge().length;

  parts.push(`\n## Performance Stats
- Average client rating: ${avgScore !== null ? avgScore.toFixed(1) + "/5" : "No ratings yet"}
- Knowledge entries: ${knowledgeCount}
- Self-learning: ${config.learningEnabled ? "Active" : "Disabled"}`);

  return parts.join("\n");
}

export function buildStudyPrompt(
  config: AgentConfig,
  studyType: "feedback_analysis" | "specialty_research" | "task_simulation",
  specialty: string
): string {
  const base = `You are a self-improving AI agent with specialties in: ${config.specialties.join(", ")}.\n\n`;

  switch (studyType) {
    case "feedback_analysis":
      return (
        base +
        `Analyze your recent feedback patterns. What kinds of tasks scored well vs poorly? What specific improvements should you make in your deliverables? Be concrete and actionable. Produce a single concise insight paragraph.`
      );
    case "specialty_research":
      return (
        base +
        `As a specialist in ${specialty}, research and reflect on: common best practices, frequent pitfalls, and patterns that distinguish excellent work from mediocre work in this domain. Produce a single concise insight paragraph.`
      );
    case "task_simulation":
      return (
        base +
        `Generate a realistic ${specialty} task request. Then outline how you would approach it — key decisions, quality checks, deliverable structure, and potential pitfalls. Produce a single concise insight paragraph.`
      );
  }
}
