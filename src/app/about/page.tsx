import type { Metadata } from "next";
import { ClipboardCheck, Hammer, Cable, LifeBuoy } from "lucide-react";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { MeshGradient } from "@/components/marketing/MeshGradient";

export const metadata: Metadata = {
  title: "About Centervert",
  description:
    "Centervert is a Greenville, SC business technology company helping organizations plan, build, implement, and support the systems they rely on to operate.",
};

const principles = [
  {
    Icon: ClipboardCheck,
    title: "Plan before you build.",
    body: "Most technology fails on diagnosis, not execution. We invest in understanding how a business runs before proposing anything.",
  },
  {
    Icon: Hammer,
    title: "Build around how the business runs.",
    body: "Custom software, AI, and platform work fit to the business. Not the other way around. Opinionated, not religious, about the stack.",
  },
  {
    Icon: Cable,
    title: "Implement in the real world.",
    body: "Software lives in a building, on a network, on someone's phone. We plan the physical layer alongside the digital.",
  },
  {
    Icon: LifeBuoy,
    title: "Stay involved.",
    body: "Most clients start with one engagement and stay for years. That is the support layer doing its job.",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-smoke">
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative -mt-16 overflow-hidden pt-16 md:-mt-20 md:pt-20">
          <MeshGradient tone="light" />
          <Container size="wide">
            <div className="relative py-24 md:py-32">
              <Eyebrow>About Centervert</Eyebrow>
              <Heading as="h1" size="display-xl" className="mt-5 max-w-4xl">
                A Greenville technology company built around{" "}
                <span className="text-cv-black/35">one idea.</span>
              </Heading>
              <Text size="lg" tone="muted" className="mt-6 max-w-2xl">
                Centervert helps businesses plan, build, implement, and support
                the systems they rely on to operate. That covers software,
                platforms, infrastructure, and managed services, all inside
                one team that actually talks to each other.
              </Text>
            </div>
          </Container>
        </section>

        {/* Story */}
        <Section tone="white" padding="lg" bordered ariaLabelledBy="story-heading">
          <div className="grid gap-16 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-4">
              <Eyebrow>Our story</Eyebrow>
              <Heading as="h2" size="h1" id="story-heading" className="mt-4">
                Why Centervert exists.
              </Heading>
            </div>
            <div className="md:col-span-8 space-y-6">
              <Text size="lg" tone="muted">
                Most businesses run on a pile of disconnected tools. An IT vendor
                who does not know the software. A dev shop that disappears after
                launch. A marketing agency with no visibility into the product.
                A freelance designer cycling between the three.
              </Text>
              <Text size="lg" tone="muted">
                Centervert started because the operators we knew needed one
                partner who could cover the full lifecycle. Not a consultant with
                a slide deck. Not a commodity outsourced labor pool. A small,
                capable team that plans, builds, implements, and supports the
                systems their clients depend on.
              </Text>
              <Text size="lg" tone="muted">
                We are intentionally small, intentionally senior, and
                intentionally based in Greenville. The work crosses Upstate SC,
                the Southeast, and remote engagements nationwide.
              </Text>
            </div>
          </div>
        </Section>

        {/* Principles */}
        <Section tone="smoke" padding="lg" ariaLabelledBy="principles-heading">
          <div className="max-w-3xl">
            <Eyebrow>Principles</Eyebrow>
            <Heading as="h2" size="display-lg" id="principles-heading" className="mt-5">
              How we actually work.
            </Heading>
          </div>
          <ul className="mt-14 grid gap-5 md:grid-cols-2">
            {principles.map((p) => (
              <li
                key={p.title}
                className="rounded-2xl border border-cv-black/5 bg-white p-8 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-2)]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-evergreen text-highlight">
                  <p.Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-sans text-[1.5rem] font-medium leading-tight text-cv-black">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-cv-black/60">
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Trust row */}
        <Section tone="evergreen" padding="lg" ariaLabelledBy="trust-heading" className="isolate">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-40"
            style={{
              background:
                "radial-gradient(at 15% 25%, rgba(192,255,0,0.2), transparent 55%), radial-gradient(at 85% 75%, rgba(36,84,255,0.28), transparent 55%)",
            }}
          />
          <div className="max-w-3xl">
            <Eyebrow className="text-white/50">What we will tell you</Eyebrow>
            <Heading as="h2" size="display-lg" id="trust-heading" className="mt-5 text-white">
              The things most vendors will not say out loud.
            </Heading>
          </div>
          <ul className="mt-14 grid gap-4 md:grid-cols-2">
            {[
              "We can often work with what you already have instead of replacing it.",
              "Sometimes the right answer is not a custom build.",
              "We will say no to work that we are not the right partner for.",
              "A project does not end at launch. Support is part of the system.",
              "We focus on solving the real operational problem, not the surface request.",
              "We speak plainly. Jargon exists to hide, and we do not need to hide.",
            ].map((line) => (
              <li
                key={line}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-5 text-[15px] leading-relaxed text-white/80 backdrop-blur-sm"
              >
                {line}
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
