import type { AgentConfig } from "../config.js";
import type { LLMProvider } from "../llm/types.js";
import {
  addKnowledge,
  getTopicCounts,
  type KnowledgeEntry,
} from "../memory/knowledge.js";
import { loadFeedback } from "../memory/feedback.js";
import { buildStudyPrompt } from "./prompt.js";
import { logActivity } from "../memory/log.js";

const MAX_STUDY_TURNS = 3;

type StudyTopic = KnowledgeEntry["topic"];

function pickStudyTopic(): StudyTopic {
  const counts = getTopicCounts();
  const feedback = loadFeedback();

  const candidates: { topic: StudyTopic; count: number }[] = [
    { topic: "specialty_research", count: counts.specialty_research },
    { topic: "task_simulation", count: counts.task_simulation },
  ];

  // Only include feedback_analysis if there's actual feedback to analyze
  if (feedback.length > 0) {
    candidates.push({
      topic: "feedback_analysis",
      count: counts.feedback_analysis,
    });
  }

  candidates.sort((a, b) => a.count - b.count);
  return candidates[0].topic;
}

let specialtyIndex = 0;

function pickSpecialty(config: AgentConfig): string {
  const s = config.specialties[specialtyIndex % config.specialties.length];
  specialtyIndex++;
  return s;
}

export async function runStudySession(
  config: AgentConfig,
  llm: LLMProvider
): Promise<KnowledgeEntry | null> {
  if (!config.learningEnabled) return null;

  const topic = pickStudyTopic();
  const specialty = pickSpecialty(config);

  logActivity("Study session started", `topic=${topic}, specialty=${specialty}`);

  const prompt = buildStudyPrompt(config, topic, specialty);

  try {
    const response = await llm.chat(prompt, [
      { role: "user", content: "Begin your study session. Produce a single actionable insight." },
    ]);

    const textBlocks = response.content.filter((b) => b.type === "text");
    const insight = textBlocks
      .map((b) => (b as { type: "text"; text: string }).text)
      .join("\n")
      .trim();

    if (!insight) {
      logActivity("Study session failed", "No insight produced");
      return null;
    }

    const entry = addKnowledge({
      topic,
      specialty,
      insight,
      source: "study_session",
    });

    logActivity(
      "Study session complete",
      `Created knowledge entry: ${entry.id}`
    );

    return entry;
  } catch (err) {
    logActivity(
      "Study session error",
      err instanceof Error ? err.message : "Unknown error"
    );
    return null;
  }
}
