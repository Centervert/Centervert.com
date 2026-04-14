import Image from "next/image";
import Link from "next/link";
import { Check, Zap, ArrowRight, Bot, Mail, BarChart2, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Automation",
  description:
    "AI phone agents, email assistants, chatbots, and workflow automation that replace hours of manual work every day. Built on n8n, Zapier, Make, and OpenAI.",
};

const useCases = [
  {
    icon: Bot,
    title: "AI Phone Answering",
    description:
      "Never miss a call. Our AI phone agents answer inbound calls, qualify leads, book appointments, and update your CRM - around the clock.",
    bullets: [
      "Answers calls 24/7 in your brand voice",
      "Books appointments directly into your calendar",
      "Pushes lead data into your CRM automatically",
      "Escalates complex issues to your team",
    ],
  },
  {
    icon: Mail,
    title: "Automated Email Triage",
    description:
      "Your inbox is a time sink. Our email assistants read, sort, tag, and draft responses - with full access to Microsoft 365 or Google Workspace.",
    bullets: [
      "Categorizes and prioritizes incoming email",
      "Drafts responses in your tone and style",
      "Flags urgent messages for human review",
      "Syncs with your CRM and ticketing system",
    ],
  },
  {
    icon: BarChart2,
    title: "AI Ad Management",
    description:
      "Stop babysitting ad campaigns. Our automation monitors performance, pauses underperformers, scales winners, and reports results weekly.",
    bullets: [
      "Monitors Google, Meta, and LinkedIn campaigns",
      "Automatically pauses low-performing ad sets",
      "Scales budget to top performers in real time",
      "Sends weekly performance summaries to your team",
    ],
  },
  {
    icon: Users,
    title: "Per-Employee AI Agents",
    description:
      "Give every person on your team their own AI assistant - trained on your internal knowledge and connected to your tools.",
    bullets: [
      "Custom agents deployed in Slack or Discord",
      "Trained on your SOPs, playbooks, and FAQs",
      "Connected to your CRM, PM tools, and databases",
      "Works alongside your team without replacing them",
    ],
  },
];

const tools = [
  "n8n",
  "Zapier",
  "Make",
  "OpenAI",
  "OpenClaw",
  "ChatGPT",
  "Copilot",
  "Go High Level",
  "Slack",
  "Microsoft 365",
  "Google Workspace",
  "Airtable",
];

const steps = [
  {
    step: "1",
    title: "Strategy Call",
    description:
      "We map your current workflows, identify the highest-impact automation opportunities, and scope a plan with clear deliverables and ROI.",
  },
  {
    step: "2",
    title: "Build & Test",
    description:
      "Our team builds the automation or AI agent, tests it against real scenarios, and iterates until it performs the way you need.",
  },
  {
    step: "3",
    title: "Deploy & Train",
    description:
      "We deploy to your live environment and walk your team through how it works. Most automations are live within two weeks.",
  },
];

export default function AIAutomationPage() {
  return (
    <div className="min-h-screen bg-smoke">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-32 pb-12 text-center md:pt-40 md:pb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
          AI & Automation
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-cv-black md:text-[3.25rem] md:leading-[1.15]">
          Automate the Work That&apos;s Eating Your Day
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cv-black/60 md:text-lg">
          AI phone agents, email assistants, workflow automation, and custom AI
          tools - built for your specific business, not a generic template.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="/book"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-highlight px-6 py-3 text-sm font-semibold text-cv-black transition-all hover:bg-highlight/90 hover:shadow-lg"
          >
            Book a Strategy Call
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Use Cases */}
      <section className="border-y border-cv-black/5 bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-cv-black/40">
              What We Build
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-cv-black md:text-[2.5rem]">
              Four areas where AI delivers real ROI.
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {useCases.map((uc) => {
              const Icon = uc.icon;
              return (
                <div
                  key={uc.title}
                  className="flex flex-col rounded-2xl border border-cv-black/10 bg-white p-6 md:p-8"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-evergreen/10">
                    <Icon className="h-5 w-5 text-evergreen" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-cv-black">
                    {uc.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cv-black/60">
                    {uc.description}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {uc.bullets.map((b) => (
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

      {/* Tools */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
            Tools & Platforms
          </p>
          <h2 className="mt-3 max-w-lg text-3xl font-bold tracking-tight text-cv-black md:text-[2.5rem] md:leading-[1.15]">
            We build on the tools{" "}
            <span className="text-cv-black/30">you already trust.</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-cv-black/50">
            Pricing is project-based. We scope each engagement based on
            complexity, then build it - no retainer required. Ongoing
            maintenance is available for automations that need it.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
            {tools.map((tool) => (
              <div
                key={tool}
                className="flex items-center justify-center rounded-xl border border-cv-black/5 bg-white px-4 py-4 text-sm font-medium text-cv-black/70 transition-colors hover:border-cv-black/10 hover:shadow-sm"
              >
                {tool}
              </div>
            ))}
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
            From idea to live automation.
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
          <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
            Get Started
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-cv-black md:text-[2rem]">
            Ready to get hours back every week?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cv-black/60">
            Start with a free strategy call. We&apos;ll identify your highest-impact
            automation opportunities and scope a plan - no obligation.
          </p>
          <a
            href="/book"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-highlight px-8 py-4 text-sm font-semibold text-cv-black transition-all hover:bg-highlight/90 hover:shadow-lg"
          >
            Book a Free Strategy Call
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
