import Image from "next/image";
import { Rocket } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";

const topics = [
  "Prompting on your real accounts",
  "Picking tools that fit the stack you already pay for",
  "Automation people will run after we leave",
  "Rollout with your team in the room, not a slide tour",
];

export function AITrainingCallout() {
  return (
    <Section tone="dark" padding="lg" ariaLabelledBy="scale-up-heading" className="isolate">
      <Image
        src="/brand/space/centervert.space.overlay.3.jpg"
        alt=""
        fill
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 object-cover opacity-30 mix-blend-lighten"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(at 20% 0%, rgba(36,84,255,0.4), transparent 55%), radial-gradient(at 80% 100%, rgba(192,255,0,0.18), transparent 55%)",
        }}
      />
      <div className="grid gap-12 md:grid-cols-12 md:items-center md:gap-16">
        <div className="md:col-span-6">
          <Eyebrow className="text-white/60">Scale Up by Centervert</Eyebrow>
          <Heading
            as="h2"
            size="display-lg"
            id="scale-up-heading"
            className="mt-5 text-white"
          >
            Teach your team to{" "}
            <span className="text-white/50">actually use AI.</span>
          </Heading>
          <Text size="lg" tone="inverse-muted" className="mt-6 max-w-lg">
            Scale Up is Centervert&apos;s education and outreach initiative. Hands-on
            work on your accounts and workflows. If it feels like a conference
            session, we are doing it wrong.
          </Text>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              href={routes.scaleUpEvents}
              variant="primary"
              size="md"
              leadingIcon={<Rocket className="h-4 w-4" />}
            >
              Events and RSVP
            </Button>
            <Button
              href={routes.book}
              variant="ghost"
              size="md"
              className="border-white/20 text-white hover:border-white/40 hover:bg-white/5"
            >
              Book private training
            </Button>
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm md:p-10">
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white/50">
              What a week often includes
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[14.5px] text-white/85 marker:text-highlight">
              {topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
