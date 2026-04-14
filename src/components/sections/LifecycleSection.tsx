import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { LifecycleDiagram } from "@/components/marketing/LifecycleDiagram";

export function LifecycleSection() {
  return (
    <Section id="lifecycle" tone="smoke" padding="lg" ariaLabelledBy="lifecycle-heading">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>How Centervert Works</Eyebrow>
        <Heading as="h2" size="display-lg" id="lifecycle-heading" className="mt-5">
          One team across the full lifecycle of your systems.
        </Heading>
        <Text size="lg" tone="muted" className="mx-auto mt-6 max-w-2xl">
          Most businesses juggle a consultant, a dev shop, an IT vendor, and an
          installer. Centervert combines all four into one partner that plans,
          builds, implements, and supports the technology you depend on.
        </Text>
      </div>
      <div className="mt-16 md:mt-20">
        <LifecycleDiagram />
      </div>
    </Section>
  );
}
