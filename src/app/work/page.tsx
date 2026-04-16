import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { Badge } from "@/components/ui/Badge";
import { MeshGradient } from "@/components/marketing/MeshGradient";
import { caseStudies } from "@/lib/case-studies";
import { lifecycleLabels, routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Work & Case Studies | Centervert",
  description:
    "Real engagements, real outcomes. See how Centervert plans, builds, implements, and supports the systems its clients run on.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-smoke">
      <Nav />
      <main>
        <section className="relative -mt-16 overflow-hidden pt-16 md:-mt-20 md:pt-20">
          <MeshGradient tone="light" />
          <Container size="wide">
            <div className="relative grid gap-10 py-28 md:grid-cols-12 md:py-36">
              <div className="md:col-span-8">
                <Eyebrow>Work</Eyebrow>
                <Heading as="h1" size="display-xl" className="mt-5">
                  The systems our clients run on,{" "}
                  <span className="text-cv-black/35">in their own words.</span>
                </Heading>
                <Text size="lg" tone="muted" className="mt-6 max-w-2xl">
                  A partial record of the engagements we have delivered. Names are
                  generalized where clients preferred; every metric and outcome is
                  real and verified.
                </Text>
              </div>
            </div>
          </Container>
        </section>

        <Section tone="white" padding="lg" bordered ariaLabelledBy="case-studies-heading">
          <h2 id="case-studies-heading" className="sr-only">
            Case studies
          </h2>
          <ul className="grid gap-6 md:gap-8">
            {caseStudies.map((cs) => (
              <li key={cs.slug}>
                <Link
                  href={routes.caseStudy(cs.slug)}
                  className="group grid items-start gap-8 rounded-3xl border border-cv-black/5 bg-smoke/60 p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-cv-black/15 hover:bg-white hover:shadow-[var(--shadow-3)] md:grid-cols-12 md:gap-10 md:p-10"
                >
                  <div className="md:col-span-8">
                    <div className="flex flex-wrap items-center gap-2">
                      {cs.lifecycle.map((s) => (
                        <Badge key={s} tone="outline" className="text-[10.5px]">
                          {lifecycleLabels[s]}
                        </Badge>
                      ))}
                      <span className="text-[12px] uppercase tracking-[0.14em] text-cv-black/40">
                        {cs.industry} &middot; {cs.year}
                      </span>
                    </div>
                    <h3 className="mt-5 font-sans text-[2rem] font-medium leading-[1.1] tracking-tight text-cv-black md:text-[2.5rem]">
                      {cs.title}
                    </h3>
                    <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-cv-black/60">
                      {cs.summary}
                    </p>
                    <div className="mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-evergreen">
                      Read the story
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 md:grid-cols-1">
                      {cs.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-2xl border border-cv-black/5 bg-white p-4 sm:p-5"
                        >
                          <div className="font-sans text-[1.35rem] font-medium leading-none tracking-tight text-evergreen sm:text-[1.5rem] md:text-[1.75rem]">
                            {m.value}
                          </div>
                          <p className="mt-2 text-[11.5px] leading-snug text-cv-black/55 sm:text-[12.5px]">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
