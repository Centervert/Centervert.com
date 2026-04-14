import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { FAQItem } from "@/components/ui/FAQItem";

export type FAQ = { question: string; answer: string };

const defaultFaqs: FAQ[] = [
  {
    question: "What makes Centervert different from a typical IT company?",
    answer:
      "We work across the full lifecycle of the systems businesses run on. Software, platforms, infrastructure, and managed support all from one team that understands how they connect. Most IT companies stop at the wires. Most dev shops stop at the code. We do both.",
  },
  {
    question: "Can you work with our existing tools and platforms?",
    answer:
      "Yes. Many clients do not need a full rebuild. They need the tools they already have to work properly. We specialize in Salesforce, HubSpot, ClickUp, Monday, Go High Level, Microsoft 365, Google Workspace, and most common SaaS platforms.",
  },
  {
    question: "Do you work with startups or only larger companies?",
    answer:
      "Both. Many of our clients are small and mid-sized businesses that need enterprise-grade thinking without building a full internal team. Our approach scales to your size and budget.",
  },
  {
    question: "What does a typical engagement look like?",
    answer:
      "It starts with a strategy call. We scope one focused plan, execute, and stay involved as the systems evolve. Most clients start with one capability and expand as they see results.",
  },
  {
    question: "How do you handle security and compliance?",
    answer:
      "Security is part of the build, not an afterthought. Enterprise-grade cybersecurity on the network layer, secure code practices in development, and advisory support for HIPAA, SOC 2, and GDPR where relevant.",
  },
];

export function FAQSection({ faqs = defaultFaqs, id = "faq" }: { faqs?: FAQ[]; id?: string }) {
  return (
    <Section id={id} tone="white" padding="lg" ariaLabelledBy="faq-heading">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <Eyebrow>Frequently asked</Eyebrow>
          <Heading as="h2" size="display-lg" id="faq-heading" className="mt-5">
            Questions, answered.
          </Heading>
          <Text size="lg" tone="muted" className="mx-auto mt-6 max-w-xl">
            If something is not here, book a strategy call and ask directly.
          </Text>
        </div>
        <div className="mt-14 divide-y divide-cv-black/10">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </Section>
  );
}
