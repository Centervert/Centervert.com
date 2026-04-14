import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/Button";
import { StatCounter } from "@/components/marketing/StatCounter";
import { routes } from "@/lib/routes";

const stats = [
  { value: 4, suffix: "", label: "Vendors retired for one anchor client" },
  { value: 120, suffix: "+", label: "Hours automated per month" },
  { value: 24, suffix: "/7", label: "Support coverage, always on" },
];

export function ProofSection() {
  return (
    <Section tone="smoke" padding="lg" ariaLabelledBy="proof-heading">
      <div className="grid gap-14 md:grid-cols-12 md:gap-20">
        <div className="md:col-span-7">
          <Eyebrow>Proof</Eyebrow>
          <Heading as="h2" size="display-lg" id="proof-heading" className="mt-5">
            One partner.{" "}
            <span className="text-cv-black/35">Four vendors retired.</span>{" "}
            A business that actually runs.
          </Heading>
          <Text size="lg" tone="muted" className="mt-6 max-w-xl">
            A Greenville operations team came to us running four disconnected
            vendors. An IT provider nobody liked. A dev shop that disappeared after
            launch. A marketing agency siloed from the product. And a freelance
            designer chasing the other three.
          </Text>
          <Text size="lg" tone="muted" className="mt-4 max-w-xl">
            Eighteen weeks later, one team owned the software, the platforms, the
            network, and the support. Help desk tickets dropped by more than half.
            Lead response time moved from hours to minutes. The CEO called it &ldquo;the
            first time our technology felt like it was on our side.&rdquo;
          </Text>
          <div className="mt-10">
            <Button
              href={routes.work}
              variant="dark"
              size="md"
              trailingIcon={<ArrowRight className="h-4 w-4" />}
            >
              Read more case studies
            </Button>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="sticky top-28 space-y-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-cv-black/5 bg-white p-8 shadow-[var(--shadow-1)]"
              >
                <div className="font-serif text-[3.5rem] font-medium leading-none tracking-tight text-evergreen">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-3 text-[14px] leading-snug text-cv-black/55">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
