import { appendFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";
import { getDataDir } from "../config.js";

function getLogDir(): string {
  const dir = join(getDataDir(), "logs");
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  return dir;
}

function todayFile(): string {
  const date = new Date().toISOString().slice(0, 10);
  return join(getLogDir(), `${date}.md`);
}

export function logActivity(action: string, details?: string): void {
  const time = new Date().toISOString().slice(11, 19);
  const line = details
    ? `- **${time}** ${action}: ${details}\n`
    : `- **${time}** ${action}\n`;
  appendFileSync(todayFile(), line);
}
