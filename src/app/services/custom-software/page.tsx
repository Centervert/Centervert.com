import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/ServicePage";
import { servicesBySlug } from "@/lib/services";

const service = servicesBySlug["custom-software"];

export const metadata: Metadata = {
  title: `${service.title} | Centervert`,
  description: service.description,
};

const faqs = [
  {
    question: "When does custom software make sense over a SaaS tool?",
    answer:
      "When the business has outgrown what the market offers, when the workflow is a real differentiator, or when integration cost of piecing SaaS tools together is higher than a focused build. When a SaaS tool already fits well, we will tell you.",
  },
  {
    question: "What stack do you build on?",
    answer:
      "React and Next.js for web, React Native or Expo for mobile, Supabase and PostgreSQL for most data layers, and a few other tools where they fit. We are opinionated but not religious.",
  },
  {
    question: "Do you handle long-term maintenance after launch?",
    answer:
      "Yes. Our managed services layer covers hosting, monitoring, and ongoing feature work. A custom build without a maintenance plan is a liability waiting to happen.",
  },
];

export default function Page() {
  return <ServicePage service={service} faqs={faqs} />;
}
