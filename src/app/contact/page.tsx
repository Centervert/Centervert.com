import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/Button";
import { MeshGradient } from "@/components/marketing/MeshGradient";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Contact | Centervert",
  description:
    "Talk to Centervert. Email, phone, and a direct booking link for a 30-minute strategy call. Based in Greenville, SC.",
};

const channels = [
  {
    Icon: Mail,
    label: "Email",
    value: routes.emailDisplay,
    href: routes.contactEmail,
    description: "For project inquiries, partnerships, or press.",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: routes.phoneDisplay,
    href: routes.contactPhone,
    description: "Mon through Fri, 9am to 5pm ET. After hours for managed clients.",
  },
  {
    Icon: MapPin,
    label: "Office",
    value: "Greenville, SC",
    description: "We serve clients across the Southeast and remote nationwide.",
  },
  {
    Icon: Clock,
    label: "Response time",
    value: "Within one business day",
    description: "Most new inquiries get a same-day reply during business hours.",
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
              <div className="max-w-3xl">
                <Eyebrow>Contact</Eyebrow>
                <Heading as="h1" size="display-xl" className="mt-5">
                  Talk to us.{" "}
                  <span className="text-cv-black/35">
                    We reply quickly.
                  </span>
                </Heading>
                <Text size="lg" tone="muted" className="mt-6 max-w-2xl">
                  The fastest path to a clear answer is usually a 30-minute
                  strategy call. If you prefer to write, email works too.
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
                  <Button
                    href={routes.contactEmail}
                    variant="ghost"
                    size="lg"
                    leadingIcon={<Mail className="h-4 w-4" />}
                  >
                    Email the team
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <Section tone="white" padding="lg" bordered ariaLabelledBy="channels-heading">
          <div className="grid gap-14 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-4">
              <Eyebrow>Channels</Eyebrow>
              <Heading as="h2" size="h1" id="channels-heading" className="mt-4">
                Pick whichever is easiest.
              </Heading>
              <Text size="md" tone="muted" className="mt-5 max-w-sm">
                We read every inquiry. No BDR queue, no gated demos. A person
                from our team will respond.
              </Text>
            </div>
            <div className="md:col-span-8">
              <ul className="grid gap-4 sm:grid-cols-2">
                {channels.map((c) => {
                  const inner = (
                    <>
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-evergreen text-highlight">
                        <c.Icon className="h-5 w-5" />
                      </span>
                      <div className="mt-5">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cv-black/40">
                          {c.label}
                        </div>
                        <div className="mt-2 font-sans text-[1.25rem] font-medium leading-tight text-cv-black">
                          {c.value}
                        </div>
                        <p className="mt-3 text-[14px] leading-relaxed text-cv-black/55">
                          {c.description}
                        </p>
                      </div>
                    </>
                  );
                  const classes =
                    "block rounded-2xl border border-cv-black/5 bg-smoke/60 p-7 transition-all hover:-translate-y-0.5 hover:border-cv-black/15 hover:bg-white hover:shadow-[var(--shadow-2)]";
                  return (
                    <li key={c.label}>
                      {c.href ? (
                        <Link href={c.href} className={classes}>
                          {inner}
                        </Link>
                      ) : (
                        <div className={classes}>{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
