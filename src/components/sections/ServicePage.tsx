import { ArrowRight, Cable, Code2, Cpu, Globe, Palette, Shield, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { FAQSection } from "./FAQSection";
import { FinalCTA } from "./FinalCTA";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MeshGradient } from "@/components/marketing/MeshGradient";
import { services, type Service } from "@/lib/services";
import { lifecycleLabels, routes } from "@/lib/routes";

const iconMap = { Cpu, Code2, Globe, Palette, Cable, Shield };

type ServicePageProps = {
  service: Service;
  /** Optional override FAQs per service. */
  faqs?: { question: string; answer: string }[];
};

export function ServicePage({ service, faqs }: ServicePageProps) {
  const Icon = iconMap[service.iconName];
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-smoke">
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative -mt-16 overflow-hidden pt-16 md:-mt-20 md:pt-20">
          <MeshGradient tone="light" />
          <Container size="wide">
            <div className="relative grid gap-12 py-24 md:grid-cols-12 md:gap-14 md:py-32">
              <div className="md:col-span-7">
                <div className="flex flex-wrap items-center gap-2">
                  {service.lifecycle.map((stage) => (
                    <Badge key={stage} tone="evergreen" className="text-[10.5px]">
                      {lifecycleLabels[stage]}
                    </Badge>
                  ))}
                </div>
                <Heading as="h1" size="display-xl" className="mt-6">
                  {service.title}
                </Heading>
                <Text size="lg" tone="muted" className="mt-6 max-w-xl">
                  {service.description}
                </Text>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Button
                    href={routes.book}
                    variant="primary"
                    size="lg"
                    trailingIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    Book a Strategy Call
                  </Button>
                  <Button href={routes.work} variant="ghost" size="lg">
                    See related work
                  </Button>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="relative rounded-3xl border border-cv-black/5 bg-white p-8 shadow-[var(--shadow-3)] md:p-10">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-evergreen text-highlight">
                    <Icon className="h-7 w-7" />
                  </span>
                  <p className="mt-6 font-serif text-[1.25rem] font-medium leading-snug text-cv-black md:text-[1.375rem]">
                    {service.tagline}
                  </p>
                  <p className="mt-3 text-[14px] text-cv-black/55">
                    Lives inside the {service.lifecycle.map((s) => lifecycleLabels[s]).join(" + ")} stage
                    {service.lifecycle.length > 1 ? "s" : ""} of your engagement.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* What's included */}
        <Section tone="white" padding="lg" bordered ariaLabelledBy="included-heading">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <Eyebrow>What&apos;s Included</Eyebrow>
              <Heading as="h2" size="display-lg" id="included-heading" className="mt-5">
                What this{" "}
                <span className="text-cv-black/35">actually looks like.</span>
              </Heading>
              <Text size="lg" tone="muted" className="mt-6 max-w-md">
                Every engagement is scoped to what you need. Here are the
                capabilities we commonly deliver inside {service.title.toLowerCase()}.
              </Text>
            </div>
            <div className="md:col-span-7">
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 rounded-2xl border border-cv-black/5 bg-smoke/60 p-5 transition-colors hover:border-cv-black/10 hover:bg-white"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-evergreen" />
                    <span className="text-[14.5px] leading-snug text-cv-black/75">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* How it fits the lifecycle */}
        <Section tone="smoke" padding="md" ariaLabelledBy="fits-heading">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Inside the Lifecycle</Eyebrow>
            <Heading as="h2" size="h1" id="fits-heading" className="mt-5">
              How it fits the systems we build.
            </Heading>
            <Text size="lg" tone="muted" className="mx-auto mt-6 max-w-xl">
              Centervert works across the full lifecycle of the systems a
              business runs on. {service.title} lives in{" "}
              {service.lifecycle.map((s) => lifecycleLabels[s]).join(", ")}.
              It rarely stands alone.
            </Text>
            <div className="mt-8">
              <Link
                href={`${routes.home}#lifecycle`}
                className="inline-flex items-center gap-2 text-[14px] font-medium text-evergreen underline decoration-evergreen/30 underline-offset-4 hover:decoration-evergreen"
              >
                See the full lifecycle
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Section>

        {/* Related services */}
        <Section tone="white" padding="md" bordered ariaLabelledBy="related-heading">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Related Capabilities</Eyebrow>
              <Heading as="h2" size="h1" id="related-heading" className="mt-4">
                Keep exploring.
              </Heading>
            </div>
            <Link
              href={routes.services.index}
              className="inline-flex items-center gap-2 text-[14px] font-medium text-evergreen underline decoration-evergreen/30 underline-offset-4 hover:decoration-evergreen"
            >
              All capabilities
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {related.map((r) => {
              const RIcon = iconMap[r.iconName];
              return (
                <li key={r.slug}>
                  <Link
                    href={r.href}
                    className="group flex h-full flex-col gap-4 rounded-2xl border border-cv-black/5 bg-smoke/60 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-cv-black/15 hover:bg-white hover:shadow-[var(--shadow-2)]"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-evergreen text-highlight">
                      <RIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-serif text-[1.25rem] font-medium leading-tight text-cv-black">
                        {r.title}
                      </h3>
                      <p className="mt-2 text-[14px] text-cv-black/55">{r.tagline}</p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Section>

        {faqs && faqs.length > 0 ? <FAQSection faqs={faqs} id={`faq-${service.slug}`} /> : null}

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
