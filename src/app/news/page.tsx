"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { Badge } from "@/components/ui/Badge";
import { MeshGradient } from "@/components/marketing/MeshGradient";
import { posts, type PostCategory } from "@/lib/posts";
import { cn } from "@/lib/cn";

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
      <Nav />
      <main>
        <section className="relative -mt-16 overflow-hidden pt-16 md:-mt-20 md:pt-20">
          <MeshGradient tone="light" />
          <Container size="wide">
            <div className="relative py-24 md:py-32">
              <Eyebrow>News</Eyebrow>
              <Heading as="h1" size="display-xl" className="mt-5 max-w-3xl">
                Company updates and{" "}
                <span className="text-cv-black/35">fieldnotes from the team.</span>
              </Heading>
              <Text size="lg" tone="muted" className="mt-6 max-w-2xl">
                Announcements, project retrospectives, and practical essays on
                systems thinking, AI, and the work of running a modern business.
              </Text>

              <div className="mt-10 flex flex-wrap items-center gap-2">
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActive(f)}
                    className={cn(
                      "rounded-full px-5 py-2 text-[13px] font-medium transition-all",
                      active === f
                        ? "bg-cv-black text-white shadow-[var(--shadow-1)]"
                        : "bg-white text-cv-black/70 ring-1 ring-inset ring-cv-black/10 hover:bg-gray-50"
                    )}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <Section tone="white" padding="lg" bordered ariaLabel="News posts">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-cv-black/5 bg-smoke p-12 text-center">
              <Text tone="muted">No posts yet in this category. Check back soon.</Text>
            </div>
          ) : (
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/news/${p.slug}`}
                    className="group flex h-full flex-col gap-5 rounded-2xl border border-cv-black/5 bg-smoke/60 p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-cv-black/15 hover:bg-white hover:shadow-[var(--shadow-2)]"
                  >
                    <div className="flex items-center justify-between">
                      <Badge
                        tone={p.category === "Announcement" ? "highlight" : "outline"}
                        className="text-[10.5px]"
                      >
                        {p.category}
                      </Badge>
                      <span className="text-[12px] text-cv-black/40">{p.readTime}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-sans text-[1.375rem] font-medium leading-tight text-cv-black">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-[14px] leading-relaxed text-cv-black/55">
                        {p.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-3 text-[13px]">
                      <span className="text-cv-black/40">{formatDate(p.date)}</span>
                      <span className="inline-flex items-center gap-1 font-medium text-evergreen">
                        Read
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
