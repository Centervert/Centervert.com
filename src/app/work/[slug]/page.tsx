import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Quote } from "lucide-react";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { Badge } from "@/components/ui/Badge";
import { MeshGradient } from "@/components/marketing/MeshGradient";
import { caseStudies, caseStudyBySlug } from "@/lib/case-studies";
import { lifecycleLabels, routes } from "@/lib/routes";
import { servicesBySlug } from "@/lib/services";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudyBySlug[slug];
  if (!cs) return { title: "Case Study | Centervert" };
  return {
    title: `${cs.title} | Centervert`,
    description: cs.summary,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const cs = caseStudyBySlug[slug];
  if (!cs) notFound();

  const otherStudies = caseStudies.filter((c) => c.slug !== cs.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-smoke">
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative -mt-16 overflow-hidden pt-16 md:-mt-20 md:pt-20">
          <MeshGradient tone="light" />
          <Container size="wide">
            <div className="relative py-24 md:py-32">
              <Link
                href={routes.work}
                className="inline-flex items-center gap-2 text-[13.5px] font-medium text-cv-black/60 transition-colors hover:text-cv-black"
              >
                <ArrowLeft className="h-4 w-4" />
                All case studies
              </Link>
              <div className="mt-8 flex flex-wrap items-center gap-2">
                {cs.lifecycle.map((s) => (
                  <Badge key={s} tone="evergreen" className="text-[10.5px]">
                    {lifecycleLabels[s]}
                  </Badge>
                ))}
                <span className="text-[12px] uppercase tracking-[0.14em] text-cv-black/40">
                  {cs.industry} &middot; {cs.location} &middot; {cs.year}
                </span>
              </div>
              <Heading as="h1" size="display-xl" className="mt-6 max-w-4xl">
                {cs.title}
              </Heading>
              <Text size="lg" tone="muted" className="mt-6 max-w-2xl">
                {cs.summary}
              </Text>
            </div>
          </Container>
        </section>

        {/* Metrics */}
        <Section tone="white" padding="sm" bordered>
          <ul className="grid gap-4 sm:grid-cols-3">
            {cs.metrics.map((m) => (
              <li
                key={m.label}
                className="rounded-2xl border border-cv-black/5 bg-smoke/60 p-6 text-center sm:p-8"
              >
                <div className="font-sans text-[2.5rem] font-medium leading-none tracking-tight text-evergreen sm:text-[3rem] lg:text-[3.25rem]">
                  {m.value}
                </div>
                <p className="mt-3 text-[13px] leading-snug text-cv-black/55 sm:text-[13.5px]">
                  {m.label}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Narrative: Challenge / Approach / Systems / Outcomes */}
        <Section tone="white" padding="lg" ariaLabelledBy="narrative-heading">
          <h2 id="narrative-heading" className="sr-only">
            Story
          </h2>
          <div className="grid gap-16 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-4">
              <div className="sticky top-28 space-y-8">
                <div>
                  <Eyebrow>The Client</Eyebrow>
                  <p className="mt-3 font-sans text-[1.25rem] font-medium text-cv-black">
                    {cs.client}
                  </p>
                  <p className="mt-2 text-[13.5px] text-cv-black/55">
                    {cs.industry} &middot; {cs.location}
                  </p>
                </div>
                <div>
                  <Eyebrow>Capabilities</Eyebrow>
                  <ul className="mt-3 space-y-2">
                    {cs.services.map((slug) => {
                      const s = servicesBySlug[slug];
                      if (!s) return null;
                      return (
                        <li key={slug}>
                          <Link
                            href={s.href}
                            className="text-[14px] font-medium text-evergreen underline decoration-evergreen/30 underline-offset-4 hover:decoration-evergreen"
                          >
                            {s.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <div className="md:col-span-8">
              <div className="prose-like space-y-14">
                <div>
                  <Eyebrow>The Challenge</Eyebrow>
                  <Heading as="h3" size="h2" className="mt-4">
                    Where they started.
                  </Heading>
                  <Text size="lg" tone="muted" className="mt-5">
                    {cs.challenge}
                  </Text>
                </div>

                <div>
                  <Eyebrow>The Approach</Eyebrow>
                  <Heading as="h3" size="h2" className="mt-4">
                    How we worked.
                  </Heading>
                  <ul className="mt-6 space-y-4">
                    {cs.approach.map((step, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-evergreen font-mono text-[11px] font-semibold text-highlight">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <Text size="md" tone="muted" className="flex-1">
                          {step}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Eyebrow>What We Delivered</Eyebrow>
                  <Heading as="h3" size="h2" className="mt-4">
                    The systems that went live.
                  </Heading>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {cs.systemsDelivered.map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-3 rounded-xl border border-cv-black/5 bg-white p-4"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-evergreen" />
                        <span className="text-[14px] leading-snug text-cv-black/75">
                          {s}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Eyebrow>Outcomes</Eyebrow>
                  <Heading as="h3" size="h2" className="mt-4">
                    What changed.
                  </Heading>
                  <ul className="mt-6 space-y-3">
                    {cs.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-evergreen" />
                        <Text size="md" tone="muted" className="flex-1">
                          {o}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quote */}
                <figure className="relative rounded-3xl border border-cv-black/5 bg-evergreen p-10 text-white shadow-[var(--shadow-3)]">
                  <Quote className="h-8 w-8 text-highlight/70" />
                  <blockquote className="font-quote mt-4 text-[1.5rem] font-normal leading-tight text-white text-balance md:text-[1.75rem]">
                    &ldquo;{cs.quote.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 text-[13.5px] text-white/70">
                    {cs.quote.name} &middot; {cs.quote.role}
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </Section>

        {/* More work */}
        {otherStudies.length > 0 ? (
          <Section tone="smoke" padding="lg" bordered ariaLabelledBy="more-work-heading">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <Heading as="h2" size="h1" id="more-work-heading">
                More work.
              </Heading>
              <Link
                href={routes.work}
                className="inline-flex items-center gap-2 text-[14px] font-medium text-evergreen underline decoration-evergreen/30 underline-offset-4 hover:decoration-evergreen"
              >
                All case studies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="mt-10 grid gap-6 md:grid-cols-2">
              {otherStudies.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={routes.caseStudy(o.slug)}
                    className="group flex h-full flex-col gap-4 rounded-2xl border border-cv-black/5 bg-white p-8 transition-all hover:-translate-y-0.5 hover:border-cv-black/15 hover:shadow-[var(--shadow-3)]"
                  >
                    <div className="flex flex-wrap gap-2">
                      {o.lifecycle.map((s) => (
                        <Badge key={s} tone="outline" className="text-[10.5px]">
                          {lifecycleLabels[s]}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="font-sans text-[1.5rem] font-medium leading-tight text-cv-black">
                      {o.title}
                    </h3>
                    <p className="text-[14px] text-cv-black/55">{o.summary}</p>
                    <div className="mt-auto inline-flex items-center gap-2 pt-2 text-[13px] font-medium text-evergreen">
                      Read the story
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
        ) : null}

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
