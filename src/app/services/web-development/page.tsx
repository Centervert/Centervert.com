import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Globe, ShoppingCart, Search, Server } from "lucide-react";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design & Development",
  description:
    "Marketing sites, funnels, e-commerce, and SEO built on Next.js, WordPress, Shopify, and ClickFunnels. Domain management and hosting included.",
};

const services = [
  {
    icon: Globe,
    title: "Marketing Websites",
    description:
      "Fast, polished marketing sites that tell your story and convert visitors. Built on Next.js or WordPress depending on what fits your team.",
    bullets: [
      "Custom design matched to your brand",
      "Mobile-first, performance-optimized builds",
      "CMS setup so your team can update content",
      "Contact forms, lead capture, and CRM integration",
    ],
  },
  {
    icon: ArrowRight,
    title: "Funnels & Landing Pages",
    description:
      "Purpose-built pages designed to convert. Whether you need a lead capture page, a webinar funnel, or a product launch sequence - we build it.",
    bullets: [
      "ClickFunnels, Next.js, or WordPress builds",
      "A/B testing setup and conversion tracking",
      "Email sequence integration",
      "Analytics connected to your ad platforms",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description:
      "Shopify and custom e-commerce stores built for real conversion - not just transactions. Includes product setup, payments, and post-purchase flows.",
    bullets: [
      "Shopify builds and custom theme development",
      "Product catalog setup and optimization",
      "Payment processing and checkout flow",
      "Post-purchase email and upsell sequences",
    ],
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Technical and on-page SEO that actually moves rankings. We fix what&apos;s broken, optimize what exists, and build what&apos;s missing.",
    bullets: [
      "Technical SEO audit and remediation",
      "On-page optimization for target keywords",
      "Schema markup and structured data",
      "Core Web Vitals and performance improvements",
    ],
  },
];

const platforms = [
  "Next.js",
  "WordPress",
  "Shopify",
  "ClickFunnels",
  "Webflow",
  "Vercel",
  "Cloudflare",
  "Google Analytics",
  "Search Console",
  "Ahrefs",
  "Stripe",
  "Mailchimp",
];

const steps = [
  {
    step: "1",
    title: "Discovery Call",
    description:
      "We learn your goals, audience, and existing setup. From there we recommend the right platform, structure, and content approach.",
  },
  {
    step: "2",
    title: "Design & Build",
    description:
      "We design in-browser or from wireframes, build on your chosen platform, and iterate until the site matches your vision.",
  },
  {
    step: "3",
    title: "Launch & Hand Off",
    description:
      "We handle domain, DNS, hosting, and launch. We train your team on the CMS and stay available for post-launch support.",
  },
];

const includes = [
  "Domain registration and management",
  "Hosting setup and configuration",
  "SSL certificate and security setup",
  "DNS management",
  "Performance monitoring",
  "CMS training for your team",
];

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-smoke">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-32 pb-12 text-center md:pt-40 md:pb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
          Web Design & Development
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-cv-black md:text-[3.25rem] md:leading-[1.15]">
          Websites That Work as Hard as You Do
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cv-black/60 md:text-lg">
          Marketing sites, funnels, and e-commerce built to convert visitors
          into customers - and rank on search so they find you first.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="/book"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-highlight px-6 py-3 text-sm font-semibold text-cv-black transition-all hover:bg-highlight/90 hover:shadow-lg"
          >
            Talk to Us About Your Site
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-cv-black/5 bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-cv-black/40">
              What We Build
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-cv-black md:text-[2.5rem]">
              Every type of web project.
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="flex flex-col rounded-2xl border border-cv-black/10 bg-white p-6 md:p-8"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-evergreen/10">
                    <Icon className="h-5 w-5 text-evergreen" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-cv-black">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cv-black/60">
                    {svc.description}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {svc.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-3 text-sm leading-relaxed text-cv-black/80"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-evergreen" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hosting & Domain */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
                Included
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-cv-black md:text-[2.5rem] md:leading-[1.15]">
                Domain, hosting, and everything in between.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-cv-black/50">
                We handle the technical side so you never have to talk to a
                hosting company again. Domains, DNS, SSL, and performance
                monitoring - all managed by our team.
              </p>
              <ul className="mt-6 space-y-3">
                {includes.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-cv-black/80"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-evergreen" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
                Platforms
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-cv-black md:text-[2.5rem] md:leading-[1.15]">
                We work with the tools you know.
              </h2>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {platforms.map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center justify-center rounded-xl border border-cv-black/5 bg-white px-3 py-3 text-sm font-medium text-cv-black/70 transition-colors hover:border-cv-black/10 hover:shadow-sm"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
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
            From brief to live.
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
            Need a new site or a better one?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cv-black/60">
            Tell us where you are and where you want to go. We&apos;ll recommend the
            right approach and scope a project that fits your timeline and
            budget.
          </p>
          <a
            href="/book"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-highlight px-8 py-4 text-sm font-semibold text-cv-black transition-all hover:bg-highlight/90 hover:shadow-lg"
          >
            Start the Conversation
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
