import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/Button";
import { MeshGradient } from "@/components/marketing/MeshGradient";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Careers | Centervert",
  description:
    "Join Centervert, a Greenville SC technology company helping businesses plan, build, implement, and support the systems they rely on to operate.",
};

const values = [
  {
    title: "Systems over heroics",
    body: "We build things that work because the architecture is right, not because one person stayed up all night.",
  },
  {
    title: "Own the full outcome",
    body: "Code, hardware, support. We stay with a problem until the client is better off, not until our scope ends.",
  },
  {
    title: "Clear is kind",
    body: "Direct feedback, written decisions, plain language with clients. We do not hide behind jargon or vibes.",
  },
  {
    title: "Build for the long run",
    body: "Our support commitments last years. We design, hire, and document like we plan to be here in a decade.",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-smoke">
      <Nav />
      <main>
        <section className="relative -mt-16 overflow-hidden pt-16 md:-mt-20 md:pt-20">
          <MeshGradient tone="light" />
          <Container size="wide">
            <div className="relative py-24 md:py-32">
              <Eyebrow>Careers</Eyebrow>
              <Heading as="h1" size="display-xl" className="mt-5 max-w-3xl">
                Build the systems{" "}
                <span className="text-cv-black/35">businesses run on.</span>
              </Heading>
              <Text size="lg" tone="muted" className="mt-6 max-w-2xl">
                Centervert is a Greenville, SC technology company. We help growing
                organizations plan, build, implement, and support the technology
                behind how they operate. Small team, senior work, long-term clients.
              </Text>
            </div>
          </Container>
        </section>

        {/* Open roles */}
        <Section tone="white" padding="lg" bordered ariaLabelledBy="open-roles">
          <div className="grid gap-14 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <Eyebrow>Open roles</Eyebrow>
              <Heading as="h2" size="h1" id="open-roles" className="mt-4">
                We are not actively posting right now.
              </Heading>
              <Text size="lg" tone="muted" className="mt-5 max-w-md">
                Centervert hires slowly and deliberately. When roles open, they
                show up here first. If you are a software engineer, systems
                operator, or low-voltage technician who wants to work on real
                systems for real businesses, we want to know you.
              </Text>
            </div>
            <div className="md:col-span-7">
              <div className="rounded-3xl border border-cv-black/5 bg-smoke p-8 md:p-12">
                <Heading as="h3" size="h3">
                  Introduce yourself.
                </Heading>
                <Text size="md" tone="muted" className="mt-4 max-w-lg">
                  Send a short note, a link to your work, and which part of
                  Centervert you would fit inside of. We read everything.
                </Text>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    href={routes.contactEmail}
                    variant="primary"
                    size="md"
                    leadingIcon={<Mail className="h-4 w-4" />}
                  >
                    Email the team
                  </Button>
                  <Link
                    href={routes.contact}
                    className="inline-flex items-center gap-2 text-[14px] font-medium text-cv-black/70 underline decoration-cv-black/20 underline-offset-4 transition-colors hover:text-cv-black hover:decoration-cv-black/60"
                  >
                    Or use the contact form
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Values */}
        <Section tone="smoke" padding="lg" ariaLabelledBy="values-heading">
          <div className="max-w-3xl">
            <Eyebrow>How we work</Eyebrow>
            <Heading as="h2" size="display-lg" id="values-heading" className="mt-5">
              The values we actually hire for.
            </Heading>
          </div>
          <ul className="mt-14 grid gap-6 md:grid-cols-2">
            {values.map((v) => (
              <li
                key={v.title}
                className="rounded-2xl border border-cv-black/5 bg-white p-8"
              >
                <h3 className="font-sans text-[1.5rem] font-medium leading-tight text-cv-black">
                  {v.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-cv-black/60">
                  {v.body}
                </p>
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
