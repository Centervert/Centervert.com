/**
 * Single source of truth for canonical routes. Every nav, footer, CTA, and
 * inline link imports from here. If a route is referenced but not in this
 * file, that's the signal to either create the page or remove the link.
 */

export const routes = {
  home: "/",
  about: "/about",
  work: "/work",
  caseStudy: (slug: string) => `/work/${slug}`,
  careers: "/careers",
  contact: "/contact",
  news: "/news",
  book: "/book",
  bookTraining: "/book?type=training",
  marketplace: "/marketplace",
  services: {
    index: "/#services",
    aiAutomation: "/services/ai-automation",
    customSoftware: "/services/custom-software",
    webDevelopment: "/services/web-development",
    brandDesign: "/services/brand-design",
    lowVoltage: "/services/low-voltage",
    managedIt: "/services/managed-it",
  },
  legal: {
    privacy: "/privacy",
    terms: "/terms",
    cookies: "/cookies",
  },
  contactEmail: "mailto:connect@centervert.com",
  contactPhone: "tel:8649878282",
  phoneDisplay: "(864) 987-8282",
  emailDisplay: "connect@centervert.com",
} as const;

export const lifecycleStages = ["plan", "build", "implement", "support"] as const;
export type LifecycleStage = (typeof lifecycleStages)[number];

export const lifecycleLabels: Record<LifecycleStage, string> = {
  plan: "Plan",
  build: "Build",
  implement: "Implement",
  support: "Support",
};
