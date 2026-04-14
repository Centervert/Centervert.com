import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Palette, Layers, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Design & Identity",
  description:
    "Visual identity including logo, and full brand strategy. Pitch decks, social media design, and UX/UI consultation.",
};

const packages = [
  {
    name: "Visual Identity",
    tagline: "A complete brand kit, ready to deploy.",
    badge: "Most Popular",
    includes: "Includes logo and core brand system:",
    features: [
      "Primary logo mark and wordmark",
      "Color palette (primary + secondary, hex/CMYK/Pantone)",
      "Full typography system (headings, body, accent)",
      "Logo usage guidelines and final files (SVG, PNG, PDF)",
      "Brand pattern and texture elements",
      "Business card and letterhead design",
      "Social media profile and cover templates",
      "Brand mockups for presentations",
    ],
    footnote: null,
  },
  {
    name: "Full Brand Strategy",
    tagline: "Identity plus the story behind it.",
    badge: null,
    includes: "Everything in Visual Identity, plus:",
    features: [
      "Brand positioning and competitive analysis",
      "Tagline and messaging framework",
      "Mission, vision, and company voice guide",
      "Social media content design templates",
      "Pitch deck or proposal design",
      "Brand strategy presentation",
    ],
    footnote: null,
  },
];

const addOns = [
  {
    icon: FileText,
    title: "Pitch Decks & Proposals",
    description:
      "Investor decks, partnership proposals, and sales presentations designed to make a strong first impression.",
  },
  {
    icon: Layers,
    title: "UX/UI Consultation",
    description:
      "We review your product or site and give you actionable feedback on layout, hierarchy, and user experience.",
  },
  {
    icon: Palette,
    title: "Social Media Design",
    description:
      "Ongoing content design for Instagram, LinkedIn, and other platforms - built to your brand system.",
  },
];

const steps = [
  {
    step: "1",
    title: "Brand Discovery",
    description:
      "We learn your business, your audience, and what you want to stand for. We ask the hard questions before we touch a single pixel.",
  },
  {
    step: "2",
    title: "Concepts & Refinement",
    description:
      "We present initial concepts, gather feedback, and refine until the direction is right. No endless revision loops - focused, intentional iterations.",
  },
  {
    step: "3",
    title: "Delivery & Handoff",
    description:
      "You receive all files, guidelines, and templates. Everything is organized and ready for your team or any future vendor to use.",
  },
];

export default function BrandDesignPage() {
  return (
    <div className="min-h-screen bg-smoke">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-32 pb-12 text-center md:pt-40 md:pb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
          Brand Design
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-cv-black md:text-[3.25rem] md:leading-[1.15]">
          Identities That Make You Impossible to Ignore
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cv-black/60 md:text-lg">
          Visual identity that includes your logo, or a full brand strategy with
          positioning and messaging - we build the identity that makes your
          business look like it belongs at the top.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="/book"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-highlight px-6 py-3 text-sm font-semibold text-cv-black transition-all hover:bg-highlight/90 hover:shadow-lg"
          >
            Start a Brand Project
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Packages */}
      <section className="border-y border-cv-black/5 bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-cv-black/40">
              Packages
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-cv-black md:text-[2.5rem]">
              Two levels. One consistent standard.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-cv-black/50">
              Every package is built with care. Visual Identity includes your
              logo and full brand system; Full Brand Strategy adds positioning,
              messaging, and strategy.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
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
                  <Palette className="h-5 w-5 text-evergreen" />
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

      {/* Add-Ons */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
            Additional Services
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-cv-black md:text-[2.5rem]">
            More ways we can help.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {addOns.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-cv-black/10 bg-white p-6"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-evergreen/10">
                    <Icon className="h-5 w-5 text-evergreen" />
                  </div>
                  <h3 className="text-base font-bold text-cv-black">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cv-black/60">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-y border-cv-black/5 bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-cv-black md:text-[2.5rem]">
            From blank page to brand.
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
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-cv-black md:text-[2rem]">
            Your brand should look the part.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cv-black/60">
            Whether you&apos;re starting from nothing or refreshing something that
            no longer fits, we&apos;ll build an identity worth being proud of. Let&apos;s
            talk.
          </p>
          <a
            href="/book"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-highlight px-8 py-4 text-sm font-semibold text-cv-black transition-all hover:bg-highlight/90 hover:shadow-lg"
          >
            Start a Brand Project
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
