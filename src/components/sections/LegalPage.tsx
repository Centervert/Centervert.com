import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { MeshGradient } from "@/components/marketing/MeshGradient";

export type LegalSection = {
  title: string;
  body: ReactNode;
};

type LegalPageProps = {
  title: string;
  summary: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export function LegalPage({ title, summary, lastUpdated, sections }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-smoke">
      <Nav />
      <main>
        <section className="relative -mt-16 overflow-hidden pt-16 md:-mt-20 md:pt-20">
          <MeshGradient tone="light" />
          <Container size="wide">
            <div className="relative py-24 md:py-32">
              <div className="max-w-3xl">
                <Eyebrow>Legal</Eyebrow>
                <Heading as="h1" size="display-xl" className="mt-5">
                  {title}
                </Heading>
                <Text size="lg" tone="muted" className="mt-6 max-w-2xl">
                  {summary}
                </Text>
                <p className="mt-6 text-[13px] text-cv-black/40">
                  Last updated: {lastUpdated}
                </p>
              </div>
            </div>
          </Container>
        </section>

        <Section tone="white" padding="lg" bordered containerSize="readable">
          <div className="space-y-12">
            {sections.map((s, i) => (
              <section key={s.title}>
                <Heading as="h2" size="h3">
                  <span className="mr-3 font-mono text-[13px] font-semibold tracking-[0.1em] text-cv-black/35">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.title}
                </Heading>
                <div className="mt-4 space-y-4 text-[15.5px] leading-[1.7] text-cv-black/70">
                  {s.body}
                </div>
              </section>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
