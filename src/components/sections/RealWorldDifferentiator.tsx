import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";

const proofPoints = [
  "Software and infrastructure planned as one system, not two vendors",
  "Networking, cabling, AV, and control systems we install and support",
  "A support layer that understands the code on top of the wires",
  "Clients across churches, schools, government, hospitality, and growing businesses",
];

export function RealWorldDifferentiator() {
  return (
    <Section tone="white" padding="lg" bordered ariaLabelledBy="real-world-heading">
      <div className="grid gap-14 md:grid-cols-12 md:gap-16 md:items-center">
        <div className="md:col-span-6">
          <Eyebrow>Why Centervert</Eyebrow>
          <Heading as="h2" size="display-lg" id="real-world-heading" className="mt-5">
            Software lives in a <span className="text-cv-black/35">real environment.</span>
          </Heading>
          <Text size="lg" tone="muted" className="mt-6 max-w-lg">
            Most modern software partners stop at the code. Most IT vendors stop at
            the wires. Centervert does both. That is the difference between a
            product that looks good in a demo and a system that works in your
            building on a Monday morning.
          </Text>
          <div className="mt-10">
            <Button href={routes.about} variant="dark" size="md">
              See our approach
            </Button>
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="relative rounded-3xl border border-cv-black/5 bg-gradient-to-br from-evergreen via-evergreen-800 to-evergreen-950 p-8 text-white shadow-[var(--shadow-4)] md:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-3xl opacity-25"
              style={{
                backgroundImage:
                  "radial-gradient(at 20% 0%, rgba(192,255,0,0.4), transparent 60%), radial-gradient(at 80% 100%, rgba(36,84,255,0.4), transparent 60%)",
              }}
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white/80 backdrop-blur-sm">
                The full ecosystem
              </div>
              <h3 className="mt-6 font-serif text-[1.75rem] font-medium leading-tight md:text-[2rem]">
                From the browser to the breaker room.
              </h3>
              <ul className="mt-6 space-y-3">
                {proofPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[14.5px] text-white/80">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-highlight" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
