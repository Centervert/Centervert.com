import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Bot,
  FileText,
  PenLine,
  BookOpen,
  Code2,
  Search,
  TrendingUp,
  Mail,
  Share2,
  Sparkles,
  Clock,
  type LucideIcon,
} from "lucide-react";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { services } from "@/lib/marketplace";

const iconMap: Record<string, LucideIcon> = {
  FileText,
  PenLine,
  BookOpen,
  Code2,
  Search,
  TrendingUp,
  Mail,
  Share2,
};

export const metadata = {
  title: "AI Marketplace | Centervert",
  description:
    "AI-powered services delivered in hours - landing page copy, blog posts, code reviews, SEO audits, and more. Pay once, get results.",
};

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-smoke">
      <Nav />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-evergreen/[0.03] to-transparent" />
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 pt-32 pb-4 text-center md:pt-40 md:pb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-evergreen/10 bg-evergreen/5 px-4 py-1.5">
            <Bot className="h-3.5 w-3.5 text-evergreen" />
            <span className="text-xs font-semibold text-evergreen">
              AI Agent Marketplace
            </span>
          </div>
          <h1 className="mt-6 font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-cv-black text-balance">
            AI-powered work.{" "}
            <span className="text-cv-black/35">Delivered in hours.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cv-black/50 md:text-[1.05rem]">
            Our autonomous AI agents handle freelance work - content, code
            reviews, research, and more. Describe what you need, pay once, and
            get results delivered to your inbox.
          </p>
          <div className="mt-8 flex items-center gap-6 text-sm text-cv-black/40">
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-evergreen" />
              Powered by Opus 4.6
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-evergreen" />
              24–72 hour delivery
            </span>
          </div>
        </div>
      </section>

      {/* ===== SERVICE GRID ===== */}
      <section className="px-6 pt-8 pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = iconMap[service.iconName] ?? FileText;
              return (
                <Link
                  key={service.id}
                  href={`/marketplace/order?service=${service.id}`}
                  className="group flex flex-col rounded-2xl border border-cv-black/5 bg-white p-6 transition-all hover:border-cv-black/10 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-evergreen text-white transition-colors group-hover:bg-evergreen/90">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-cv-black">
                    {service.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-cv-black/40">
                    {service.tagline}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-cv-black/50">
                    {service.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-cv-black/5 pt-4">
                    <div>
                      <p className="text-lg font-bold text-evergreen">
                        ${service.priceRange.min}
                        <span className="text-sm font-normal text-cv-black/30">
                          {" "}
                          – ${service.priceRange.max}
                        </span>
                      </p>
                      <p className="mt-0.5 text-xs text-cv-black/30">
                        {service.turnaround}
                      </p>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-smoke text-cv-black/30 transition-all group-hover:bg-evergreen group-hover:text-white">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="border-y border-cv-black/5 bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-cv-black md:text-[2.5rem]">
            Three steps.{" "}
            <span className="text-cv-black/30">Zero hassle.</span>
          </h2>
          <div className="mt-14 grid gap-10 text-left sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Choose a Service",
                desc: "Pick from our catalog of AI-powered services. Each one has clear pricing and a defined deliverable.",
              },
              {
                step: "02",
                title: "Describe Your Needs",
                desc: "Tell our agent what you need - the more detail, the better the output. Pay securely via Stripe.",
              },
              {
                step: "03",
                title: "Get Your Deliverable",
                desc: "Our AI agent works on your order and delivers results to your inbox. Request revisions if needed.",
              },
            ].map((item) => (
              <div key={item.step}>
                <span className="text-4xl font-bold text-cv-black/[0.06]">
                  {item.step}
                </span>
                <h3 className="mt-2 text-base font-semibold text-cv-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cv-black/50">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="grain relative overflow-hidden bg-evergreen px-6 py-20 md:py-28">
        <Image
          src="/brand/space/centervert.space.overlay.3.jpg"
          alt=""
          fill
          className="pointer-events-none absolute inset-0 object-cover opacity-25 mix-blend-lighten"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-[2.5rem]">
            Ready to put AI to work?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-white/60">
            Pick a service above and get started in minutes. No meetings, no
            contracts, no waiting.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/marketplace/order"
              className="inline-flex items-center gap-2 rounded-full bg-highlight px-8 py-4 text-sm font-semibold text-cv-black transition-all hover:bg-highlight/90"
            >
              Place an Order
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/40"
            >
              Need Something Custom?
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
