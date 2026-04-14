import Image from "next/image";
import { CheckCircle2, Rocket } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";

const topics = [
  "Prompt Engineering",
  "AI Tool Selection",
  "Workflow Automation",
  "Team Implementation",
];

export function AITrainingCallout() {
  return (
    <Section tone="dark" padding="lg" ariaLabelledBy="ai-training-heading" className="isolate">
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
          <Eyebrow className="text-white/60">AI In Person</Eyebrow>
          <Heading
            as="h2"
            size="display-lg"
            id="ai-training-heading"
            className="mt-5 text-white"
          >
            Teach your team to{" "}
            <span className="text-white/50">actually use AI.</span>
          </Heading>
          <Text size="lg" tone="inverse-muted" className="mt-6 max-w-lg">
            Hands-on sessions for your business. Prompting, tool selection, workflow
            automation, and real implementation. Not theory.
          </Text>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              href={routes.bookTraining}
              variant="primary"
              size="md"
              leadingIcon={<Rocket className="h-4 w-4" />}
            >
              Join a session
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
          <ul className="grid grid-cols-2 gap-4">
            {topics.map((topic) => (
              <li
                key={topic}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors hover:bg-white/[0.06]"
              >
                <CheckCircle2 className="h-5 w-5 text-highlight" />
                <p className="mt-4 font-medium text-white">{topic}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
