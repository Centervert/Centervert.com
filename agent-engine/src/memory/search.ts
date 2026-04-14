import MiniSearch from "minisearch";
import { loadKnowledge, type KnowledgeEntry } from "./knowledge.js";
import { loadFeedback, type FeedbackEntry } from "./feedback.js";

interface SearchDocument {
  id: string;
  text: string;
  type: "knowledge" | "feedback";
  timestamp: number;
}

const DECAY_HALF_LIFE_MS = 30 * 24 * 60 * 60 * 1000; // 30 days
const LAMBDA = Math.LN2 / DECAY_HALF_LIFE_MS;

let index: MiniSearch<SearchDocument> | null = null;
let indexedCount = 0;

function buildIndex(): MiniSearch<SearchDocument> {
  const ms = new MiniSearch<SearchDocument>({
    fields: ["text"],
    storeFields: ["type", "timestamp"],
    searchOptions: {
      boost: { text: 1 },
      fuzzy: 0.2,
      prefix: true,
    },
  });

  const knowledge = loadKnowledge();
  const feedback = loadFeedback();

  const docs: SearchDocument[] = [
    ...knowledge.map((k: KnowledgeEntry) => ({
      id: `k_${k.id}`,
      text: `${k.topic} ${k.specialty} ${k.insight}`,
      type: "knowledge" as const,
      timestamp: k.timestamp,
    })),
    ...feedback.map((f: FeedbackEntry) => ({
      id: `f_${f.id}`,
      text: `${f.taskDescription} score:${f.score} ${f.comments}`,
      type: "feedback" as const,
      timestamp: f.timestamp,
    })),
  ];

  ms.addAll(docs);
  indexedCount = docs.length;
  return ms;
}

function ensureIndex(): MiniSearch<SearchDocument> {
  const knowledge = loadKnowledge();
  const feedback = loadFeedback();
  const totalDocs = knowledge.length + feedback.length;

  if (!index || totalDocs < indexedCount) {
    index = buildIndex();
  } else if (totalDocs > indexedCount) {
    // incremental: add only new entries
    const newKnowledge = knowledge.slice(indexedCount - feedback.length);
    for (const k of newKnowledge) {
      index.add({
        id: `k_${k.id}`,
        text: `${k.topic} ${k.specialty} ${k.insight}`,
        type: "knowledge",
        timestamp: k.timestamp,
      });
    }
    indexedCount = totalDocs;
  }

  return index;
}

export interface SearchResult {
  id: string;
  text: string;
  type: "knowledge" | "feedback";
  score: number;
}

export function memorySearch(query: string, limit = 5): SearchResult[] {
  const ms = ensureIndex();
  const now = Date.now();

  const results = ms.search(query);

  return results
    .map((r) => {
      const ageMs = now - ((r as unknown as SearchDocument).timestamp || now);
      const decayFactor = Math.exp(-LAMBDA * ageMs);
      return {
        id: r.id,
        text: r.match ? Object.keys(r.match).join(" ") : "",
        type: (r as unknown as SearchDocument).type,
        score: r.score * decayFactor,
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

export function rebuildIndex(): void {
  index = buildIndex();
}
