import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { Badge } from "@/components/ui/Badge";
import { MeshGradient } from "@/components/marketing/MeshGradient";
import { posts } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return { title: "News" };
  }
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-smoke">
      <Nav />
      <main>
        <section className="relative -mt-16 overflow-hidden pt-16 md:-mt-20 md:pt-20">
          <MeshGradient tone="light" />
          <Container size="readable">
            <div className="relative py-16 md:py-24">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-evergreen transition-colors hover:text-cv-black"
              >
                <ArrowLeft className="h-4 w-4" />
                All news
              </Link>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
                <Badge
                  tone={post.category === "Announcement" ? "highlight" : "outline"}
                  className="text-[10.5px]"
                >
                  {post.category}
                </Badge>
                <span className="text-[13px] text-cv-black/45">
                  {formatDate(post.date)} · {post.readTime}
                </span>
              </div>
              <Heading as="h1" size="display-lg" className="mt-6 max-w-3xl">
                {post.title}
              </Heading>
            </div>
          </Container>
        </section>

        <Section tone="white" padding="lg" bordered ariaLabelledBy="post-body">
          <Container size="readable">
            <div id="post-body" className="prose prose-neutral max-w-none">
              <Text size="lg" tone="muted" className="leading-relaxed">
                {post.excerpt}
              </Text>
              <Text size="md" tone="muted" className="mt-8 leading-relaxed">
                Full articles are coming soon. For now, this page confirms the
                story you selected from the news index. Want to go deeper on a
                topic? Book a strategy call and we will point you to the right
                conversation on the team.
              </Text>
            </div>
          </Container>
        </Section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
