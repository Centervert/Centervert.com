import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Centervert",
  description:
    "Centervert is a Greenville, SC technology company. One team of 18 delivering AI, custom software, web development, brand design, low voltage AV, and managed IT - replacing 4-5 vendors with a single partner.",
};

const values = [
  {
    title: "Resourcefulness",
    description:
      "We find a way. Budget constraints, tight timelines, technical debt - we work with what exists and build what doesn't.",
  },
  {
    title: "Ownership",
    description:
      "We don't pass the buck. When something is ours, we own it completely - the outcome, the timeline, and the quality.",
  },
  {
    title: "No-Fluff Execution",
    description:
      "We skip the decks full of buzzwords and the meetings that should have been emails. We move fast and build things that work.",
  },
];

const capabilities = [
  "AI & Workflow Automation",
  "Custom Web & Mobile Apps",
  "SaaS Platform Development",
  "Web Design & Development",
  "Brand Identity & Strategy",
  "Low Voltage & AV Installation",
  "Managed IT & Cybersecurity",
  "Microsoft 365 & Google Workspace",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-smoke">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-32 pb-12 text-center md:pt-40 md:pb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
          About Centervert
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-cv-black md:text-[3.25rem] md:leading-[1.15]">
          The Center of Vertical Growth
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cv-black/60 md:text-lg">
          One Greenville, SC technology team. Six service verticals: AI &
          automation, custom software, web development, brand design, low
          voltage AV, and managed IT. No gaps between vendors - just one
          partner that builds, connects, and runs it all.
        </p>
      </section>

      {/* Story */}
      <section className="border-y border-cv-black/5 bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
                Our Story
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-cv-black md:text-[2.5rem] md:leading-[1.15]">
                One team that talks to itself.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-cv-black/60">
                Centervert was founded in Greenville, South Carolina with a
                straightforward premise: most businesses pay for four or five
                vendors who never talk to each other. Managed IT doesn&apos;t know
                what the dev shop is building. The branding agency has no idea
                what the website stack looks like. The result is gaps,
                miscommunication, and wasted budget.
              </p>
              <p className="mt-4 text-base leading-relaxed text-cv-black/60">
                Centervert is the alternative. One technology team that
                handles AI & automation, custom software, web development, brand
                design, low voltage AV, and managed IT - working together from
                day one. No handoffs. No finger-pointing. No vendor blame
                games.
              </p>
              <p className="mt-4 text-base leading-relaxed text-cv-black/60">
                Today our team of 18 serves clients across the US and
                internationally - from corporate offices and churches in
                Greenville and the Carolinas to growing SaaS companies
                nationwide.
              </p>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl border border-cv-black/10 bg-smoke p-6 md:p-8">
                <p className="text-4xl font-bold tracking-tight text-evergreen">
                  18
                </p>
                <p className="mt-1 text-sm font-medium text-cv-black/50">
                  Team Members (US + International)
                </p>
              </div>
              <div className="rounded-2xl border border-cv-black/10 bg-smoke p-6 md:p-8">
                <p className="text-4xl font-bold tracking-tight text-evergreen">
                  6
                </p>
                <p className="mt-1 text-sm font-medium text-cv-black/50">
                  Service Verticals Under One Roof
                </p>
              </div>
              <div className="rounded-2xl border border-cv-black/10 bg-smoke p-6 md:p-8">
                <p className="text-4xl font-bold tracking-tight text-evergreen">
                  1
                </p>
                <p className="mt-1 text-sm font-medium text-cv-black/50">
                  Relationship. One Team. One Point of Contact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
            How We Work
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-cv-black md:text-[2.5rem]">
            Three things we don&apos;t compromise on.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-cv-black/10 bg-white p-6 md:p-8"
              >
                <CheckCircle2 className="h-5 w-5 text-evergreen" />
                <h3 className="mt-4 text-xl font-bold tracking-tight text-cv-black">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cv-black/60">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-cv-black/5 bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-cv-black md:text-[2.5rem]">
            Every layer of your tech stack.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-cv-black/50">
            AI & workflow automation, custom web and mobile apps, SaaS
            development, web design, brand identity, low voltage and AV
            installation, managed IT and cybersecurity - one Greenville-based
            team instead of four or five vendors.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {capabilities.map((cap) => (
              <div
                key={cap}
                className="flex items-center gap-2 rounded-xl border border-cv-black/5 bg-smoke px-4 py-3 text-sm font-medium text-cv-black/70"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-evergreen" />
                {cap}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
                Based In
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-cv-black md:text-[2.5rem] md:leading-[1.15]">
                Greenville, SC
              </h2>
              <p className="mt-4 text-base leading-relaxed text-cv-black/60">
                Centervert is headquartered in downtown Greenville, South
                Carolina - one of the fastest-growing cities in the Southeast.
                We serve clients across Greenville, the Carolinas, and
                nationally, with in-person capabilities for managed IT, low
                voltage AV, and on-site strategy.
              </p>
              <address className="mt-6 not-italic space-y-1 text-sm text-cv-black/50">
                <p>2 W Washington St, Suite 200</p>
                <p>Greenville, SC 29601</p>
                <a
                  href="tel:8649878282"
                  className="mt-2 block transition-colors hover:text-cv-black"
                >
                  (864) 987-8282
                </a>
                <a
                  href="mailto:connect@centervert.com"
                  className="block transition-colors hover:text-cv-black"
                >
                  connect@centervert.com
                </a>
              </address>
            </div>
            <div className="rounded-2xl border border-cv-black/10 bg-white p-8">
              <p className="text-sm font-medium text-cv-black/70">
                &ldquo;Replaced 4 vendors with one team. Our IT, software, and
                branding are finally aligned.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-evergreen text-[10px] font-bold text-white">
                  SC
                </div>
                <p className="text-sm font-medium text-cv-black">
                  Sarah C., VP Operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-cv-black/5 bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-cv-black md:text-[2rem]">
            Ready to work with one team?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cv-black/60">
            Start with a strategy call. We&apos;ll learn your business, identify the
            gaps, and show you what&apos;s possible when everything works together.
          </p>
          <a
            href="/book"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-highlight px-8 py-4 text-sm font-semibold text-cv-black transition-all hover:bg-highlight/90 hover:shadow-lg"
          >
            Book a Strategy Call
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cv-black/5 bg-smoke px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-5">
            <div className="md:col-span-2">
              <Image
                src="/images/centervert-logo-black.png"
                alt="Centervert"
                width={160}
                height={40}
                className="h-7 w-auto"
              />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-cv-black/50">
                AI, software, branding, AV, and managed IT - one team that
                builds, connects, and runs your entire tech stack.
              </p>
              <div className="mt-4 flex flex-col gap-1.5 text-sm text-cv-black/50">
                <a
                  href="mailto:connect@centervert.com"
                  className="transition-colors hover:text-cv-black"
                >
                  connect@centervert.com
                </a>
                <a
                  href="tel:8649878282"
                  className="transition-colors hover:text-cv-black"
                >
                  (864) 987-8282
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-cv-black">Services</h4>
              <ul className="mt-4 space-y-2.5 text-sm text-cv-black/50">
                {[
                  { label: "AI & Automation", href: "/services/ai-automation" },
                  { label: "Custom Software", href: "/services/custom-software" },
                  { label: "Web Design", href: "/services/web-development" },
                  { label: "Brand Design", href: "/services/brand-design" },
                  { label: "Low Voltage & AV", href: "/services/low-voltage" },
                  { label: "Managed IT", href: "/services/managed-it" },
                ].map((s) => (
                  <li key={s.label}>
                    <Link
                      href={s.href}
                      className="transition-colors hover:text-cv-black"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-cv-black">Company</h4>
              <ul className="mt-4 space-y-2.5 text-sm text-cv-black/50">
                {[
                  { label: "About", href: "/about" },
                  { label: "Clients", href: "/#services" },
                  { label: "Careers", href: "/about" },
                  { label: "News", href: "/news" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-cv-black"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-cv-black">Legal</h4>
              <ul className="mt-4 space-y-2.5 text-sm text-cv-black/50">
                {[
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Terms of Service", href: "/terms" },
                  { label: "Cookie Policy", href: "/cookies" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-cv-black"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-cv-black/5 pt-8 text-xs text-cv-black/30 sm:flex-row">
            <p>&copy; 2026 Centervert. All rights reserved.</p>
            <p>Greenville, SC</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
