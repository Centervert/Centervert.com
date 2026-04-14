"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { posts, type PostCategory } from "@/lib/posts";

type Filter = "All" | PostCategory;

const filters: Filter[] = ["All", "Article", "Announcement"];

function formatDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function NewsPage() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-smoke">
      <Navbar />

      {/* Header */}
      <section className="mx-auto max-w-4xl px-6 pt-32 pb-12 text-center md:pt-40 md:pb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-cv-black/40">
          Centervert
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-cv-black md:text-[3.25rem]">
          News
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-cv-black/50">
          Company updates, insights, and articles from the Centervert team.
        </p>

        {/* Filter pills */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                active === f
                  ? "bg-highlight text-cv-black"
                  : "border border-cv-black/10 bg-white text-cv-black/60 hover:border-cv-black/20 hover:text-cv-black"
              }`}
            >
              {f === "All" ? "All" : `${f}s`}
            </button>
          ))}
        </div>
      </section>

      {/* Post list */}
      <section className="mx-auto max-w-3xl px-6 pb-20 md:pb-28">
        <div className="space-y-6">
          {filtered.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl border border-cv-black/5 bg-white p-6 transition-all hover:border-cv-black/10 hover:shadow-lg md:p-8"
            >
              <div className="flex items-center gap-3 text-xs">
                <span
                  className={`rounded-full px-2.5 py-1 font-medium ${
                    post.category === "Announcement"
                      ? "bg-highlight/15 text-evergreen"
                      : "bg-royal/10 text-royal"
                  }`}
                >
                  {post.category}
                </span>
                <span className="text-cv-black/35">{formatDate(post.date)}</span>
                <span className="text-cv-black/35">&middot;</span>
                <span className="text-cv-black/35">{post.readTime}</span>
              </div>
              <h2 className="mt-3 text-xl font-bold tracking-tight text-cv-black md:text-2xl">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-cv-black/50 md:text-base">
                {post.excerpt}
              </p>
              <a
                href={`/news/${post.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-evergreen transition-colors hover:text-evergreen/70"
              >
                Read more
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-16 text-center text-sm text-cv-black/40">
            No posts in this category yet.
          </p>
        )}
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
