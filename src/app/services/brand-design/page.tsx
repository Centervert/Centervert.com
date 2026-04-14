import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/ServicePage";
import { servicesBySlug } from "@/lib/services";

const service = servicesBySlug["brand-design"];

export const metadata: Metadata = {
  title: `${service.title} | Centervert`,
  description: service.description,
};

const faqs = [
  {
    question: "Is a rebrand always the right move?",
    answer:
      "No. A lot of businesses do not need a rebrand. They need a brand that has been applied consistently. Our discovery distinguishes between those two, and we will tell you which you actually need.",
  },
  {
    question: "Can you work with a brand we already have?",
    answer:
      "Yes. Refreshes and system extensions are some of our favorite engagements, especially when the original brand is strong but the applications have drifted.",
  },
  {
    question: "Do you design the website too?",
    answer:
      "When it fits, yes. Brand and site work well when they come from the same team that built the system underneath them.",
  },
];

export default function Page() {
  return <ServicePage service={service} faqs={faqs} />;
}
