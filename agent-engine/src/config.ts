import { readFileSync, writeFileSync, existsSync, mkdirSync, renameSync } from "fs";
import { join } from "path";
import { randomUUID } from "crypto";

export interface AgentConfig {
  agentId: string;
  llm: {
    provider: "anthropic" | "openai" | "openrouter";
    model: string;
    apiKey: string;
  };
  supabase: {
    url: string;
    anonKey: string;
  };
  polling: {
    intervalMs: number;
    urgentIntervalMs: number;
  };
  specialties: string[];
  maxConcurrentTasks: number;
  learningEnabled: boolean;
  studyIntervalMs: number;
  personality: {
    tone: string;
    responseStyle: string;
  };
}

const CONFIG_DIR =
  process.env.AGENT_DATA_DIR || join(process.env.HOME || "~", ".centervert-agent");
const CONFIG_PATH = join(CONFIG_DIR, "config.json");

const DEFAULT_CONFIG: AgentConfig = {
  agentId: `agent_${randomUUID().slice(0, 8)}`,
  llm: {
    provider: "anthropic",
    model: "claude-opus-4-6",
    apiKey: process.env.ANTHROPIC_API_KEY || "",
  },
  supabase: {
    url: process.env.SUPABASE_URL || "",
    anonKey: process.env.SUPABASE_ANON_KEY || "",
  },
  polling: {
    intervalMs: 30000,
    urgentIntervalMs: 10000,
  },
  specialties: ["content", "code-review", "seo", "research", "email"],
  maxConcurrentTasks: 3,
  learningEnabled: true,
  studyIntervalMs: 1800000, // 30 min
  personality: {
    tone: "professional",
    responseStyle: "balanced",
  },
};

export function loadConfig(): AgentConfig {
  if (!existsSync(CONFIG_DIR)) {
    mkdirSync(CONFIG_DIR, { recursive: true });
  }

  if (existsSync(CONFIG_PATH)) {
    const raw = readFileSync(CONFIG_PATH, "utf-8");
    return { ...DEFAULT_CONFIG, ...JSON.parse(raw) };
  }

  saveConfig(DEFAULT_CONFIG);
  return DEFAULT_CONFIG;
}

export function saveConfig(config: AgentConfig): void {
  if (!existsSync(CONFIG_DIR)) {
    mkdirSync(CONFIG_DIR, { recursive: true });
  }
  const tmp = `${CONFIG_PATH}.${randomUUID()}.tmp`;
  writeFileSync(tmp, JSON.stringify(config, null, 2));
  renameSync(tmp, CONFIG_PATH);
}

export function getDataDir(): string {
  if (!existsSync(CONFIG_DIR)) {
    mkdirSync(CONFIG_DIR, { recursive: true });
  }
  return CONFIG_DIR;
}
