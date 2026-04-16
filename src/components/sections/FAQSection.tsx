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
      "Both. A lot of our work is with small and mid-sized teams that want serious systems discipline without hiring a full bench in-house. Scope follows your size and budget.",
  },
  {
    question: "What does a typical engagement look like?",
    answer:
      "It starts with a strategy call. We scope one focused plan, execute, and stay involved as the systems evolve. Most clients start with one capability and expand as they see results.",
  },
  {
    question: "How do you handle security and compliance?",
    answer:
      "Security is part of the build, not a bolt-on later. We harden networks, treat code review seriously, and bring in HIPAA, SOC 2, or GDPR guidance when your situation calls for it.",
  },
];

export function FAQSection({ faqs = defaultFaqs, id = "faq" }: { faqs?: FAQ[]; id?: string }) {
  return (
    <Section id={id} tone="white" padding="lg" ariaLabelledBy="faq-heading">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <Eyebrow>Frequently asked</Eyebrow>
          <Heading as="h2" size="display-lg" id="faq-heading" className="mt-5">
            What people ask before they hire us
          </Heading>
          <Text size="lg" tone="muted" className="mx-auto mt-6 max-w-xl">
            If it is not here, book a call and ask in plain language.
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
