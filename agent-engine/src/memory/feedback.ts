import { readFileSync, writeFileSync, existsSync, renameSync } from "fs";
import { join } from "path";
import { randomUUID } from "crypto";
import { getDataDir } from "../config.js";

export interface FeedbackEntry {
  id: string;
  orderId: string;
  taskDescription: string;
  score: number;
  comments: string;
  timestamp: number;
}

const MAX_ENTRIES = 100;

function getPath(): string {
  return join(getDataDir(), "feedback.json");
}

export function loadFeedback(): FeedbackEntry[] {
  const path = getPath();
  if (!existsSync(path)) return [];
  try {
    return JSON.parse(readFileSync(path, "utf-8"));
  } catch {
    return [];
  }
}

export function saveFeedback(entries: FeedbackEntry[]): void {
  const path = getPath();
  const trimmed = entries.slice(-MAX_ENTRIES);
  const tmp = `${path}.${randomUUID()}.tmp`;
  writeFileSync(tmp, JSON.stringify(trimmed, null, 2));
  renameSync(tmp, path);
}

export function addFeedback(
  entry: Omit<FeedbackEntry, "id" | "timestamp">
): FeedbackEntry {
  const entries = loadFeedback();
  const newEntry: FeedbackEntry = {
    ...entry,
    id: randomUUID(),
    timestamp: Date.now(),
  };
  entries.push(newEntry);
  saveFeedback(entries);
  return newEntry;
}

export function getAverageScore(): number | null {
  const entries = loadFeedback();
  if (entries.length === 0) return null;
  return entries.reduce((sum, e) => sum + e.score, 0) / entries.length;
}
