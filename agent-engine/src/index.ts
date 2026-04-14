import { loadConfig } from "./config.js";
import { createLLMProvider } from "./llm/index.js";
import { Heartbeat } from "./heartbeat.js";
import { logActivity } from "./memory/log.js";

console.log("╔══════════════════════════════════════╗");
console.log("║   Centervert Agent Engine v0.1.0     ║");
console.log("╚══════════════════════════════════════╝");

const config = loadConfig();

if (!config.llm.apiKey) {
  console.error(
    "[error] No LLM API key configured. Set ANTHROPIC_API_KEY env var or edit ~/.centervert-agent/config.json"
  );
  process.exit(1);
}

if (!config.supabase.url || !config.supabase.anonKey) {
  console.error(
    "[error] Supabase not configured. Set SUPABASE_URL and SUPABASE_ANON_KEY env vars or edit ~/.centervert-agent/config.json"
  );
  process.exit(1);
}

console.log(`[config] Agent ID: ${config.agentId}`);
console.log(`[config] LLM: ${config.llm.provider} / ${config.llm.model}`);
console.log(`[config] Specialties: ${config.specialties.join(", ")}`);
console.log(`[config] Max concurrent: ${config.maxConcurrentTasks}`);
console.log(`[config] Self-learning: ${config.learningEnabled ? "ON" : "OFF"}`);

logActivity("Agent engine started", `ID: ${config.agentId}, model: ${config.llm.model}`);

const llm = createLLMProvider(config);
const heartbeat = new Heartbeat(config, llm);

heartbeat.start();

process.on("SIGINT", () => {
  console.log("\n[shutdown] Received SIGINT, stopping...");
  heartbeat.stop();
  logActivity("Agent engine stopped", "SIGINT");
  process.exit(0);
});

process.on("SIGTERM", () => {
  console.log("\n[shutdown] Received SIGTERM, stopping...");
  heartbeat.stop();
  logActivity("Agent engine stopped", "SIGTERM");
  process.exit(0);
});
