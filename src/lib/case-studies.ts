import type { LifecycleStage } from "./routes";

export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  client: string;
  industry: string;
  location: string;
  year: string;
  lifecycle: LifecycleStage[];
  services: string[]; // service slugs
  heroTone: "light" | "dark";
  challenge: string;
  approach: string[];
  systemsDelivered: string[];
  outcomes: string[];
  metrics: CaseStudyMetric[];
  quote: {
    text: string;
    name: string;
    role: string;
  };
};

/**
 * Case studies. Each entry shows up on the /work index and as a detail page
 * at /work/[slug]. Narratives are anonymized composites until real clients
 * approve their names; rewrite in place once that happens.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "operations-rebuild",
    title: "Four vendors retired. One partner. One connected system.",
    summary:
      "An Upstate SC operations team replaced a disconnected IT vendor, dev shop, marketing agency, and freelance designer with Centervert. We rebuilt their tooling, networking, and support as one system.",
    client: "Operations Leader, Professional Services",
    industry: "Professional services",
    location: "Greenville, SC",
    year: "2025",
    lifecycle: ["plan", "build", "implement", "support"],
    services: ["ai-automation", "custom-software", "managed-it", "low-voltage"],
    heroTone: "light",
    challenge:
      "The team was running four vendors who did not talk to each other. An IT provider that took days to return tickets. A dev shop that disappeared after launch. A marketing agency siloed from the product data. And a freelance designer chasing all three.",
    approach: [
      "Plan: three weeks of discovery to map how work actually flowed, where data lived, and which handoffs were breaking.",
      "Build: custom internal portal replacing two aging SaaS tools, plus automated lead routing into the CRM.",
      "Implement: network and AV refresh across two offices so the new tools had a reliable environment.",
      "Support: ongoing managed IT, security monitoring, and a monthly optimization cadence.",
    ],
    systemsDelivered: [
      "Custom internal portal on Next.js and Supabase",
      "Automated lead capture, routing, and follow-up through n8n",
      "New network topology with UniFi across two locations",
      "Managed endpoint and identity through Microsoft 365",
      "24/7 help desk and security monitoring",
    ],
    outcomes: [
      "Help desk ticket volume dropped by 58% in the first 90 days.",
      "Lead response time fell from hours to under five minutes.",
      "Four separate vendor contracts consolidated into one relationship.",
      "The CEO now spends a meaningful amount less time fighting technology.",
    ],
    metrics: [
      { value: "4", label: "Vendors retired" },
      { value: "58%", label: "Help desk ticket reduction" },
      { value: "18wk", label: "From kickoff to full cutover" },
    ],
    quote: {
      text: "It was the first time our technology felt like it was on our side. We stopped juggling vendors and started running our business.",
      name: "VP of Operations",
      role: "Upstate SC professional services firm",
    },
  },
  {
    slug: "ai-ops-leverage",
    title: "AI that replaced the inbox, not the people.",
    summary:
      "A growing services firm deployed AI email and phone agents to absorb the routine queue. The team moved up the value chain, response times collapsed, and nobody got replaced.",
    client: "Managing Partner, Services Firm",
    industry: "Professional services",
    location: "Greenville, SC",
    year: "2025",
    lifecycle: ["plan", "build", "support"],
    services: ["ai-automation", "custom-software", "managed-it"],
    heroTone: "light",
    challenge:
      "Inbound volume had doubled year-over-year. The team was drowning in repetitive email and phone triage that blocked the work that actually moved the business forward.",
    approach: [
      "Plan: audit of inbound volume by type, identifying which tiers were safely automatable and which required human judgment.",
      "Build: AI email assistant with full Microsoft 365 scope plus an AI phone agent that books appointments and updates the CRM.",
      "Support: ongoing tuning, prompt refinement, and guardrails review on a monthly cadence.",
    ],
    systemsDelivered: [
      "AI email triage and draft layer on the team's primary inbox",
      "AI phone agent handling 40% of inbound calls end-to-end",
      "CRM automation piping captured data into HubSpot",
      "Human escalation rules with full audit trail",
    ],
    outcomes: [
      "Routine email triage time dropped by roughly 70%.",
      "Average phone answer time fell to under 10 seconds.",
      "The team reinvested hours into work the business actually sells.",
      "Zero staff reductions. The leverage went to the humans.",
    ],
    metrics: [
      { value: "70%", label: "Less time on email triage" },
      { value: "< 10s", label: "Average phone answer" },
      { value: "0", label: "Roles eliminated" },
    ],
    quote: {
      text: "We did not want AI to replace our team. We wanted it to stop burning our team on work a machine should do. That is exactly what we got.",
      name: "Managing Partner",
      role: "Greenville services firm",
    },
  },
];

export const caseStudyBySlug: Record<string, CaseStudy> = Object.fromEntries(
  caseStudies.map((cs) => [cs.slug, cs])
);
