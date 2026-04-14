import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/marketing/Marquee";

const tools = [
  "React",
  "Next.js",
  "Supabase",
  "PostgreSQL",
  "n8n",
  "Zapier",
  "Make",
  "OpenAI",
  "Microsoft 365",
  "Google Workspace",
  "Slack",
  "HubSpot",
  "Salesforce",
  "Go High Level",
  "ClickUp",
  "UniFi",
];

export function LogoMarquee() {
  return (
    <section
      aria-label="Tools and platforms Centervert works with"
      className="border-y border-cv-black/5 bg-white py-14"
    >
      <Container size="wide">
        <p className="mb-8 text-center text-[12px] font-semibold uppercase tracking-[0.18em] text-cv-black/40">
          Built for the tools your business already runs on
        </p>
      </Container>
      <Marquee
        speed={45}
        items={tools.map((tool) => (
          <div
            key={tool}
            className="mx-4 inline-flex h-14 min-w-[180px] items-center justify-center rounded-xl border border-cv-black/5 bg-smoke px-6 text-[14px] font-medium text-cv-black/60"
          >
            {tool}
          </div>
        ))}
      />
    </section>
  );
}
