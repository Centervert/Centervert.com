import { ArrowRight, Phone } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";

export function FinalCTA() {
  return (
    <Section
      id="connect"
      tone="smoke"
      padding="lg"
      bordered
      ariaLabelledBy="final-cta-heading"
      className="isolate"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(at 50% 100%, rgba(192,255,0,0.22), transparent 60%), radial-gradient(at 0% 0%, rgba(36,84,255,0.10), transparent 50%)",
        }}
      />
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>Get Started</Eyebrow>
        <Heading
          as="h2"
          size="display-xl"
          id="final-cta-heading"
          className="mt-5"
        >
          Pick a time.{" "}
          <span className="text-cv-black/35">We skip the deck.</span>
        </Heading>
        <Text size="lg" tone="muted" className="mx-auto mt-6 max-w-xl">
          Thirty minutes on the calendar. No commitment, no slide stack, just a
          straight conversation about where you are and what is actually broken.
        </Text>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button
            href={routes.book}
            variant="primary"
            size="lg"
            trailingIcon={<ArrowRight className="h-4 w-4" />}
          >
            Book a Strategy Call
          </Button>
          <Button
            href={routes.contactPhone}
            variant="ghost"
            size="lg"
            leadingIcon={<Phone className="h-4 w-4" />}
          >
            Call {routes.phoneDisplay}
          </Button>
        </div>
        <p className="mt-6 text-[12.5px] text-cv-black/40">
          Free strategy call. Cancel if your calendar shifts.
        </p>
      </div>
    </Section>
  );
}
