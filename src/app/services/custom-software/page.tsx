import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Code2, Layers, Smartphone, Database } from "lucide-react";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Development",
  description:
    "Web apps, mobile apps, SaaS platforms, CRMs, and ERPs built from scratch using React, Next.js, Supabase, and PostgreSQL. Discovery starting at $2,499.",
};

const phases = [
  {
    name: "Crawl",
    tagline: "Discovery & Planning",
    price: "$2,499",
    badge: "Start Here",
    description:
      "Before we write a line of code, we map everything out. You walk away with a complete technical blueprint - no surprises, no scope creep.",
    features: [
      "Requirements gathering and workflow mapping",
      "Wireframes and user flow diagrams",
      "Technical architecture and stack selection",
      "Database schema and API design",
      "Project timeline and phased build plan",
      "Fixed-cost deliverable - own it regardless of what comes next",
    ],
  },
  {
    name: "Walk",
    tagline: "Phase 1 Build",
    price: "Scoped after discovery",
    badge: "Most Common",
    description:
      "We build the core of your product - the features that deliver value on day one. Functional, tested, and ready for real users.",
    features: [
      "Core feature development",
      "Authentication, permissions, and user management",
      "Primary database and API integrations",
      "Responsive UI built on your brand",
      "Testing and QA before handoff",
      "Deployment to staging and production",
    ],
  },
  {
    name: "Run",
    tagline: "Full Build + Launch",
    price: "Scoped after discovery",
    badge: null,
    description:
      "The complete product. Advanced features, third-party integrations, performance optimization, and a launch you can be proud of.",
    features: [
      "Full feature set from the discovery plan",
      "Real-time features: chat, notifications, live updates",
      "Third-party API integrations",
      "Analytics and reporting dashboards",
      "Performance optimization and security hardening",
      "Ongoing support and retainer options",
    ],
  },
];

const deliverables = [
  {
    icon: Code2,
    title: "Web Applications",
    description:
      "Custom web apps built on React and Next.js with Supabase backends. Fast, scalable, and maintainable.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "iOS and Android apps built with React Native and Expo. One codebase, both platforms, shipped faster.",
  },
  {
    icon: Layers,
    title: "SaaS Platforms",
    description:
      "Multi-tenant SaaS products with billing, user management, and the infrastructure to grow.",
  },
  {
    icon: Database,
    title: "CRMs & ERPs",
    description:
      "Custom internal tools - CRMs, ERPs, portals, and dashboards built around how your business actually works.",
  },
];

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "React Native",
  "Expo",
  "Tailwind CSS",
  "Stripe",
  "Resend",
  "Vercel",
  "Railway",
];

const steps = [
  {
    step: "1",
    title: "Discovery",
    description:
      "We scope your project during a paid Discovery phase. You get a full blueprint - architecture, wireframes, and timeline - before any build begins.",
  },
  {
    step: "2",
    title: "Design & Build",
    description:
      "We design the UI, build the backend, and develop features in phases. You see real progress, not just updates.",
  },
  {
    step: "3",
    title: "Launch & Support",
    description:
      "We deploy, test, and hand off. Ongoing support, feature additions, and maintenance retainers available after launch.",
  },
];

export default function CustomSoftwarePage() {
  return (
    <div className="min-h-screen bg-smoke">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-32 pb-12 text-center md:pt-40 md:pb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
          Custom Software Development
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-cv-black md:text-[3.25rem] md:leading-[1.15]">
          Software Built Around How Your Business Works
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cv-black/60 md:text-lg">
          Web apps, mobile apps, SaaS platforms, and internal tools - designed
          from scratch for your exact needs. No off-the-shelf compromises.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="/book"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-highlight px-6 py-3 text-sm font-semibold text-cv-black transition-all hover:bg-highlight/90 hover:shadow-lg"
          >
            Start with Discovery
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Deliverables */}
      <section className="border-y border-cv-black/5 bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-cv-black/40">
              What We Build
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-cv-black md:text-[2.5rem]">
              Real deliverables. Owned by you.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {deliverables.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.title}
                  className="rounded-2xl border border-cv-black/10 bg-white p-6"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-evergreen/10">
                    <Icon className="h-5 w-5 text-evergreen" />
                  </div>
                  <h3 className="text-base font-bold text-cv-black">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cv-black/60">
                    {d.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Crawl/Walk/Run */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
            How We Engage
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-cv-black md:text-[2.5rem]">
            Crawl. Walk. Run.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-cv-black/50">
            Every build starts with Discovery. It gives you a complete blueprint
            before committing to a full build - and protects your budget from
            scope surprises.
          </p>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {phases.map((phase) => (
              <div
                key={phase.name}
                className={`relative flex flex-col rounded-2xl border p-6 md:p-8 ${
                  phase.badge === "Most Common"
                    ? "border-evergreen/30 bg-evergreen/5 shadow-lg ring-1 ring-evergreen/10"
                    : "border-cv-black/10 bg-white"
                }`}
              >
                {phase.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-evergreen px-4 py-1 text-xs font-semibold text-white">
                    {phase.badge}
                  </span>
                )}
                <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
                  {phase.name}
                </p>
                <h3 className="mt-1 text-xl font-bold tracking-tight text-cv-black">
                  {phase.tagline}
                </h3>
                <p className="mt-1 text-sm font-semibold text-cv-black/50">
                  {phase.price}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-cv-black/60">
                  {phase.description}
                </p>
                <ul className="mt-5 flex-1 space-y-3">
                  {phase.features.map((f) => (
                    <li
                      key={f}
                      className="flex gap-3 text-sm leading-relaxed text-cv-black/80"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-evergreen" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="border-y border-cv-black/5 bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
            Our Stack
          </p>
          <h2 className="mt-3 max-w-lg text-3xl font-bold tracking-tight text-cv-black md:text-[2.5rem] md:leading-[1.15]">
            Modern tools.{" "}
            <span className="text-cv-black/30">No legacy baggage.</span>
          </h2>
          <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
            {stack.map((tool) => (
              <div
                key={tool}
                className="flex items-center justify-center rounded-xl border border-cv-black/5 bg-smoke px-4 py-4 text-sm font-medium text-cv-black/70 transition-colors hover:border-cv-black/10 hover:shadow-sm"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-cv-black md:text-[2.5rem]">
            From brief to deployed.
          </h2>
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step} className="relative">
                <span className="text-4xl font-bold text-evergreen/20">
                  {s.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-cv-black">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cv-black/60">
                  {s.description}
                </p>
                {s.step !== "3" && (
                  <div className="absolute -right-5 top-8 hidden text-cv-black/15 sm:block">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-cv-black/5 bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-cv-black md:text-[2rem]">
            Have an idea? Let&apos;s scope it.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cv-black/60">
            Start with a free strategy call. We&apos;ll listen to your idea, ask the
            right questions, and tell you whether Discovery makes sense for your
            project.
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
