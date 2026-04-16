import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/Button";
import { MeshGradient } from "@/components/marketing/MeshGradient";
import { routes } from "@/lib/routes";
import {
  listEventsForCity,
  findNextEventForCity,
  scaleUpEvents,
} from "@/lib/scale-up-events";

type PageParams = { city: string };

const cityCopy: Record<string, { name: string; description: string; tagline: string }> = {
  greenville: {
    name: "Greenville",
    tagline: "Scale Up in the Upstate",
    description:
      "Workshops, roundtables, and working sessions in Greenville, SC. Hosted by the Centervert team that also builds the software and runs IT for local businesses.",
  },
};

export function generateStaticParams(): PageParams[] {
  const cities = Array.from(new Set(scaleUpEvents.map((e) => e.city)));
  return cities.map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { city } = await params;
  const copy = cityCopy[city];
  if (!copy) return { title: "Scale Up" };

  return {
    title: `Scale Up ${copy.name}`,
    description: copy.description,
    alternates: { canonical: `https://www.centervert.com/scaleup/${city}` },
    openGraph: {
      type: "website",
      title: `Scale Up ${copy.name} | Centervert`,
      description: copy.description,
      url: `https://www.centervert.com/scaleup/${city}`,
    },
  };
}

export default async function ScaleUpCityPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { city } = await params;
  const copy = cityCopy[city];
  if (!copy) notFound();

  const events = listEventsForCity(city);
  const next = findNextEventForCity(city);

  return (
    <div className="min-h-screen bg-smoke">
      <Nav />
      <main>
        <section className="relative -mt-16 overflow-hidden pt-16 md:-mt-20 md:pt-20">
          <MeshGradient tone="light" />
          <Container size="wide">
            <div className="relative mx-auto max-w-3xl py-24 text-center md:py-32">
              <Eyebrow>{copy.tagline}</Eyebrow>
              <Heading as="h1" size="display-lg" className="mt-5 text-balance">
                Scale Up {copy.name}
              </Heading>
              <Text size="lg" tone="muted" className="mx-auto mt-6 max-w-2xl">
                {copy.description}
              </Text>
              {next ? (
                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button
                    href={routes.scaleUpEvent(next.city, next.slug)}
                    variant="primary"
                    size="lg"
                    trailingIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    RSVP: {next.date.display}
                  </Button>
                  <Button href={routes.book} variant="ghost" size="lg">
                    Host a private session
                  </Button>
                </div>
              ) : (
                <div className="mt-10">
                  <Button
                    href={routes.contactEmail}
                    variant="primary"
                    size="lg"
                    trailingIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    Get notified for the next one
                  </Button>
                </div>
              )}
            </div>
          </Container>
        </section>

        {next ? (
          <Section tone="white" padding="lg" bordered ariaLabelledBy="next-heading">
            <div className="mx-auto max-w-5xl">
              <Eyebrow as="h2" id="next-heading">
                Next session
              </Eyebrow>
              <div className="mt-6 overflow-hidden rounded-3xl border border-cv-black/8 bg-smoke shadow-[var(--shadow-1)]">
                <div className="grid gap-0 md:grid-cols-12">
                  <div className="relative aspect-[4/3] md:col-span-5 md:aspect-auto">
                    <Image
                      src={next.venue.heroImage}
                      alt={next.venue.heroImageAlt}
                      fill
                      sizes="(min-width: 768px) 40vw, 100vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-highlight px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cv-black">
                      Upcoming
                    </div>
                  </div>
                  <div className="p-8 md:col-span-7 md:p-10">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cv-black/45">
                      {next.audienceLabel}
                    </p>
                    <h3 className="mt-3 font-sans text-[1.75rem] font-semibold leading-tight text-cv-black md:text-[2rem]">
                      {next.headline.lead}
                      <span className="italic text-evergreen">
                        {next.headline.highlight}
                      </span>
                      {next.headline.tail}
                    </h3>
                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-[14px] text-cv-black/70">
                      <span className="inline-flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-evergreen" />
                        {next.date.display}, {next.date.year} · {next.time}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-evergreen" />
                        {next.venue.name}
                      </span>
                    </div>
                    <div className="mt-8">
                      <Button
                        href={routes.scaleUpEvent(next.city, next.slug)}
                        variant="primary"
                        size="md"
                        trailingIcon={<ArrowRight className="h-4 w-4" />}
                      >
                        View event and RSVP
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        ) : null}

        {events.length > 1 ? (
          <Section tone="smoke" padding="lg" ariaLabelledBy="archive-heading">
            <div className="mx-auto max-w-5xl">
              <Eyebrow as="h2" id="archive-heading">
                All sessions
              </Eyebrow>
              <ul className="mt-6 divide-y divide-cv-black/8 overflow-hidden rounded-2xl border border-cv-black/8 bg-white">
                {events.map((e) => (
                  <li key={e.slug}>
                    <Link
                      href={routes.scaleUpEvent(e.city, e.slug)}
                      className="flex flex-col gap-1 px-6 py-5 transition-colors hover:bg-smoke md:flex-row md:items-center md:justify-between md:px-8"
                    >
                      <div>
                        <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-evergreen">
                          {e.date.display}, {e.date.year}
                        </p>
                        <p className="mt-1 font-sans text-[1.1rem] font-semibold text-cv-black">
                          {e.venue.name}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-cv-black/60">
                        {e.status === "upcoming" ? "RSVP open" : "Recap"}
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        ) : null}

        <Section tone="white" padding="lg" bordered ariaLabelledBy="about-heading">
          <div className="mx-auto max-w-3xl">
            <Eyebrow as="h2" id="about-heading">
              Why Centervert runs this
            </Eyebrow>
            <Heading as="p" size="display-lg" className="mt-5">
              Same team in the room. Same team after.
            </Heading>
            <Text size="lg" tone="muted" className="mt-6">
              Scale Up is not a side brand. When you meet Luke and the Centervert
              team at a session, those are the same engineers and IT staff who
              would handle your software build, infrastructure, or help desk if
              you ever decide to work together.
            </Text>
            <div className="mt-8">
              <Button href={routes.scaleUp} variant="ghost" size="md">
                About Scale Up
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
