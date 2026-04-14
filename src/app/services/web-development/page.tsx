import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/ServicePage";
import { servicesBySlug } from "@/lib/services";

const service = servicesBySlug["web-development"];

export const metadata: Metadata = {
  title: `${service.title} | Centervert`,
  description: service.description,
};

const faqs = [
  {
    question: "Can you migrate us off our current CMS or platform?",
    answer:
      "Yes. We routinely migrate from WordPress, Squarespace, Wix, Webflow, and custom legacy stacks onto a platform that fits the business better.",
  },
  {
    question: "Will the new site actually rank?",
    answer:
      "SEO is built in from the architecture stage. Semantic markup, fast Core Web Vitals, clean structured data, sitemap and robots handling, and a content plan aligned to buyer intent. No secret sauce. Just doing the work.",
  },
  {
    question: "Do you handle hosting and domains too?",
    answer:
      "Yes, through our managed services layer. One bill, one point of contact, and no finger-pointing when something breaks.",
  },
];

export default function Page() {
  return <ServicePage service={service} faqs={faqs} />;
}
