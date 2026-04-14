import type { LifecycleStage } from "./routes";

export type ServiceIcon =
  | "Cpu"
  | "Code2"
  | "Globe"
  | "Palette"
  | "Cable"
  | "Shield";

export type Service = {
  slug: string;
  href: string;
  title: string;
  iconName: ServiceIcon;
  /** Lifecycle stages this capability primarily lives inside of. */
  lifecycle: LifecycleStage[];
  /** One-line tagline for cards and meta descriptions. */
  tagline: string;
  /** 2-3 sentence description for hero blocks. */
  description: string;
  /** Shown on the capability card in a bulleted list. */
  highlights: string[];
  /** FAQ entries specific to this service page. */
  faq?: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "ai-automation",
    href: "/services/ai-automation",
    title: "AI & Automation",
    iconName: "Cpu",
    lifecycle: ["plan", "build", "support"],
    tagline: "AI that actually works inside your operation.",
    description:
      "We help businesses use AI and automation to improve workflows, efficiency, and operational performance. AI belongs when it makes a real system stronger, not as buzzword language.",
    highlights: [
      "AI phone assistants that answer calls, book appointments, and update your CRM",
      "AI email assistants with full Microsoft 365 or Google Workspace access",
      "Workflow automation with n8n, Zapier, and Make",
      "AI ad management, pausing losers and scaling winners automatically",
      "Custom AI agents for your team, in Slack, Discord, or per employee",
      "ChatGPT and Copilot implementation plus training",
    ],
  },
  {
    slug: "custom-software",
    href: "/services/custom-software",
    title: "Custom Software",
    iconName: "Code2",
    lifecycle: ["plan", "build"],
    tagline: "Built around how your business actually works.",
    description:
      "We design and build software that fits the way your business operates. When off-the-shelf tools stop fitting, custom software is often the cleanest way to unlock the next stage of growth.",
    highlights: [
      "Web applications on React, Next.js, Supabase, and PostgreSQL",
      "Mobile apps for iOS and Android with React Native or Expo",
      "Custom CRMs, ERPs, and internal SaaS platforms",
      "Client portals and real-time dashboards",
      "API integrations and database design",
      "Real-time features like chat, notifications, and live updates",
    ],
  },
  {
    slug: "web-development",
    href: "/services/web-development",
    title: "Web Design & Development",
    iconName: "Globe",
    lifecycle: ["build"],
    tagline: "From marketing site to the front door of a system.",
    description:
      "Sometimes a website is a clean presence. Sometimes it is the front end of a bigger business system. We build both, and we think about how the site connects into the rest of your operation.",
    highlights: [
      "Marketing websites and landing pages",
      "Lead funnels and capture pages",
      "E-commerce storefronts",
      "SEO and performance optimization",
      "Domain management and hosting",
    ],
  },
  {
    slug: "brand-design",
    href: "/services/brand-design",
    title: "Brand Design",
    iconName: "Palette",
    lifecycle: ["plan", "build"],
    tagline: "Identity that matches the system behind it.",
    description:
      "Strong brand design makes a real business legible. We build visual identity and strategy that stands next to the systems we deliver.",
    highlights: [
      "Visual identity: logo, color, type, mockups",
      "Brand strategy: tagline, mission, positioning",
      "Social media and content design",
      "Pitch decks and proposal design",
      "UX and UI consultation",
    ],
  },
  {
    slug: "low-voltage",
    href: "/services/low-voltage",
    title: "Low Voltage & AV",
    iconName: "Cable",
    lifecycle: ["implement"],
    tagline: "Software lives in a real environment.",
    description:
      "We design and install the physical layer of the systems businesses run on. Networking, cabling, AV, and control systems, integrated with the software side so the whole ecosystem works together.",
    highlights: [
      "Conference room AV: cameras, microphones, displays, control",
      "Access control and surveillance",
      "Digital signage and point-of-sale installation",
      "Networking and Wi-Fi infrastructure",
      "Church, hospitality, and government AV",
      "Crestron, Accusis, and VIXIS certified installations",
    ],
  },
  {
    slug: "managed-it",
    href: "/services/managed-it",
    title: "Managed IT",
    iconName: "Shield",
    lifecycle: ["support"],
    tagline: "Ongoing partnership, not a helpdesk ticket.",
    description:
      "We stay involved after the build. Managed IT covers the ongoing support, security, and optimization layer so the systems we deliver keep working as your business grows.",
    highlights: [
      "Endpoint management and patching",
      "Network monitoring with UniFi and Cisco",
      "24/7 help desk support",
      "Cybersecurity and threat monitoring",
      "Cloud management for Microsoft 365 and Google Workspace",
      "Hardware procurement and integrated software-hardware lifecycle",
    ],
  },
];

export const servicesBySlug: Record<string, Service> = Object.fromEntries(
  services.map((s) => [s.slug, s])
);

export function servicesByStage(stage: LifecycleStage): Service[] {
  return services.filter((s) => s.lifecycle.includes(stage));
}
