import Image from "next/image";
import Link from "next/link";
import { Check, Shield, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Managed IT Services",
  description:
    "Enterprise-grade endpoint management, cybersecurity, help desk, and cloud management for small business. Three packages: Essential, Professional, and Elite.",
};

const packages = [
  {
    name: "Essential",
    tagline: "You're protected.",
    badge: null,
    features: [
      "Remote monitoring, patching & device management",
      "Next-gen AI endpoint protection & antivirus",
      "Dual-layer email security - blocks spam, phishing, malware & impersonation attacks",
      "Password management & secure credential vault",
      "Proactive background maintenance",
    ],
    footnote: "Break-fix support available separately.",
  },
  {
    name: "Professional",
    tagline: "You're protected and your data is safe.",
    badge: "Most Popular",
    includes: "Everything in Essential, plus:",
    features: [
      "DNS & web filtering - blocks malicious and high-risk websites",
      "Cloud email & productivity backup & recovery (Microsoft 365 and Google Workspace)",
      "Endpoint backup & disaster recovery",
      "Help desk remote support included",
    ],
    footnote: null,
  },
  {
    name: "Elite",
    tagline: "We're your full IT department.",
    badge: null,
    includes: "Everything in Professional, plus:",
    features: [
      "Compliance-ready email archiving (HIPAA, SOX, GDPR, FINRA)",
      "Security awareness training & simulated phishing campaigns",
      "Annual technology vendor review",
      "Annual IT budget & purchase forecasting",
      "Quarterly business reviews",
      "Annual onsite visit",
      "Priority response SLA",
    ],
    footnote: null,
  },
];

const steps = [
  {
    step: "1",
    title: "Free Assessment",
    description:
      "We review your current environment, identify gaps, and recommend the right package for your team size and risk profile. No obligation.",
  },
  {
    step: "2",
    title: "Onboarding",
    description:
      "We deploy and configure your tools, get your devices enrolled, and make sure everything is running before we hand off.",
  },
  {
    step: "3",
    title: "Ongoing Management",
    description:
      "We monitor, patch, and protect your environment every day - so you can focus on running your business, not your IT.",
  },
];

export default function ManagedITPage() {
  return (
    <div className="min-h-screen bg-smoke">
      <Navbar />

      {/* Section Header */}
      <section className="mx-auto max-w-4xl px-6 pt-32 pb-12 text-center md:pt-40 md:pb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
          Managed IT Services
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-cv-black md:text-[3.25rem] md:leading-[1.15]">
          Enterprise-Grade IT Protection Built for Small Business
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cv-black/60 md:text-lg">
          Three flexible packages designed to meet your business where it is  - 
          and grow with you as your needs evolve.
        </p>
      </section>

      {/* Packages */}
      <section className="border-y border-cv-black/5 bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col rounded-2xl border p-6 md:p-8 ${
                  pkg.badge
                    ? "border-evergreen/30 bg-evergreen/5 shadow-lg ring-1 ring-evergreen/10"
                    : "border-cv-black/10 bg-white"
                }`}
              >
                {pkg.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-evergreen px-4 py-1 text-xs font-semibold text-white">
                    {pkg.badge}
                  </span>
                )}
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-evergreen/10">
                  <Shield className="h-5 w-5 text-evergreen" />
                </div>
                <h2 className="text-xl font-bold tracking-tight text-cv-black md:text-2xl">
                  {pkg.name}
                </h2>
                <p className="mt-2 text-sm font-medium text-evergreen">
                  {pkg.tagline}
                </p>
                {pkg.includes && (
                  <p className="mt-4 text-sm font-medium text-cv-black/70">
                    {pkg.includes}
                  </p>
                )}
                <ul className="mt-4 flex-1 space-y-3">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm leading-relaxed text-cv-black/80"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-evergreen" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {pkg.footnote && (
                  <p className="mt-4 border-t border-cv-black/5 pt-4 text-xs italic text-cv-black/50">
                    {pkg.footnote}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-cv-black md:text-[2.5rem]">
            From assessment to ongoing support.
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

      {/* Bottom CTA */}
      <section className="border-t border-cv-black/5 bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-cv-black md:text-[2rem]">
            Not sure which plan is right for you?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cv-black/60">
            We&apos;ll assess your current environment and recommend the right
            fit - no pressure, no obligation.
          </p>
          <a
            href="/book"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-highlight px-8 py-4 text-sm font-semibold text-cv-black transition-all hover:bg-highlight/90 hover:shadow-lg"
          >
            Schedule a Free Assessment
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
