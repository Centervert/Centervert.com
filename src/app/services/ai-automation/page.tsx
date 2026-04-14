import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/ServicePage";
import { servicesBySlug } from "@/lib/services";

const service = servicesBySlug["ai-automation"];

export const metadata: Metadata = {
  title: `${service.title} | Centervert`,
  description: service.description,
};

const faqs = [
  {
    question: "Will AI actually save our team time?",
    answer:
      "When it is pointed at the right problem, yes. The discipline is refusing to build AI where a simpler tool would work better. Our scoping process starts by finding the workflow AI will clearly improve, not forcing AI into places it does not belong.",
  },
  {
    question: "Do you work with OpenAI, Anthropic, or both?",
    answer:
      "Both, plus Microsoft Copilot, and several open-source models where a private deployment makes more sense. We pick the model that fits the job, the budget, and the security posture.",
  },
  {
    question: "How do you handle data privacy with AI tools?",
    answer:
      "Every engagement starts with a data scope: what the AI can see, where it runs, how long outputs are retained. For sensitive data we use enterprise tenancy, bring-your-own-keys, or on-prem deployments as needed.",
  },
];

export default function Page() {
  return <ServicePage service={service} faqs={faqs} />;
}
