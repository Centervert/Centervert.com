import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/ServicePage";
import { servicesBySlug } from "@/lib/services";

const service = servicesBySlug["managed-it"];

export const metadata: Metadata = {
  title: `${service.title} | Centervert`,
  description: service.description,
};

const faqs = [
  {
    question: "Do you operate a 24/7 help desk?",
    answer:
      "Yes. Critical severity issues are answered around the clock. Standard issues are handled during business hours with a same-day response target.",
  },
  {
    question: "Can you take over from our current MSP?",
    answer:
      "Yes. We routinely onboard teams inheriting systems from other MSPs. The first 30 days are a stabilization and audit pass before we start proposing any changes.",
  },
  {
    question: "What makes Centervert different from a standard MSP?",
    answer:
      "We understand the code, the platforms, and the infrastructure, not just the endpoints. That means support tickets rarely turn into finger-pointing between vendors, because we built most of what we support.",
  },
];

export default function Page() {
  return <ServicePage service={service} faqs={faqs} />;
}
