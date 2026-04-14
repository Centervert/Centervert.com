import { readFileSync, writeFileSync, existsSync, renameSync } from "fs";
import { join } from "path";
import { randomUUID } from "crypto";
import { getDataDir } from "../config.js";

export interface KnowledgeEntry {
  id: string;
  topic: "feedback_analysis" | "specialty_research" | "task_simulation";
  specialty: string;
  insight: string;
  source: string;
  timestamp: number;
}

const MAX_ENTRIES = 50;

function getPath(): string {
  return join(getDataDir(), "knowledge.json");
}

export function loadKnowledge(): KnowledgeEntry[] {
  const path = getPath();
  if (!existsSync(path)) return [];
  try {
    return JSON.parse(readFileSync(path, "utf-8"));
  } catch {
    return [];
  }
}

export function saveKnowledge(entries: KnowledgeEntry[]): void {
  const path = getPath();
  const trimmed = entries.slice(-MAX_ENTRIES);
  const tmp = `${path}.${randomUUID()}.tmp`;
  writeFileSync(tmp, JSON.stringify(trimmed, null, 2));
  renameSync(tmp, path);
}

export function addKnowledge(entry: Omit<KnowledgeEntry, "id" | "timestamp">): KnowledgeEntry {
  const entries = loadKnowledge();
  const newEntry: KnowledgeEntry = {
    ...entry,
    id: randomUUID(),
    timestamp: Date.now(),
  };
  entries.push(newEntry);
  saveKnowledge(entries);
  return newEntry;
}

export function getTopicCounts(): Record<KnowledgeEntry["topic"], number> {
  const entries = loadKnowledge();
  return {
    feedback_analysis: entries.filter((e) => e.topic === "feedback_analysis").length,
    specialty_research: entries.filter((e) => e.topic === "specialty_research").length,
    task_simulation: entries.filter((e) => e.topic === "task_simulation").length,
  };
}
