import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/ServicePage";
import { servicesBySlug } from "@/lib/services";

const service = servicesBySlug["low-voltage"];

export const metadata: Metadata = {
  title: `${service.title} | Centervert`,
  description: service.description,
};

const faqs = [
  {
    question: "Are you licensed and insured for low voltage work?",
    answer:
      "Yes. South Carolina low voltage licensed, fully insured, and certified on Crestron, Accusis, and VIXIS platforms where applicable.",
  },
  {
    question: "Do you handle new construction, retrofits, or both?",
    answer:
      "Both. We work alongside general contractors on new builds and are often brought in to retrofit aging infrastructure in working facilities without disrupting operations.",
  },
  {
    question: "Can the infrastructure you install connect into the software side?",
    answer:
      "That is why infrastructure sits inside Centervert. Access control that syncs with HR. Digital signage driven by the CMS. Networking configured for the apps that run on it. Software and hardware planned together.",
  },
];

export default function Page() {
  return <ServicePage service={service} faqs={faqs} />;
}
