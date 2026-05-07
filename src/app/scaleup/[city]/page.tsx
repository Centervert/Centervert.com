import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";
import {
  findNextEventForCity,
  listEventsForCity,
  scaleUpEvents,
  type ScaleUpEvent,
} from "@/lib/scale-up-events";
import { EventMinimalHeader } from "@/components/scaleup/EventMinimalHeader";
import { EventMinimalFooter } from "@/components/scaleup/EventMinimalFooter";
import { EventHero } from "@/components/scaleup/EventHero";
import { EventVideo } from "@/components/scaleup/EventVideo";
import { EventAgenda } from "@/components/scaleup/EventAgenda";
import { EventWalkaway } from "@/components/scaleup/EventWalkaway";
import { EventRSVPForm } from "@/components/scaleup/EventRSVPForm";
import { EventFooterCTA } from "@/components/scaleup/EventFooterCTA";
import { EventWalkawayProse } from "@/components/scaleup/EventWalkawayProse";
import { InlineBoldText } from "@/components/scaleup/InlineBoldText";

type PageParams = { city: string };

const cityCopy: Record<string, { name: string; description: string }> = {
  greenville: {
    name: "Greenville",
    description:
      "Working sessions in Greenville, SC. Hosted by the Centervert team that also builds the software and runs IT for local businesses.",
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

  const next = findNextEventForCity(city);
  const url = `https://www.centervert.com/scaleup/${city}`;

  if (next) {
    const title = `Scale Up ${copy.name}: ${next.date.display}, ${next.date.year}`;
    return {
      title,
      description: next.subhead,
      alternates: { canonical: url },
      openGraph: {
        type: "website",
        url,
        title,
        description: next.subhead,
        images: next.ogImage ? [{ url: next.ogImage }] : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title,
        description: next.subhead,
        images: next.ogImage ? [next.ogImage] : undefined,
      },
    };
  }

  return {
    title: `Scale Up ${copy.name}`,
    description: copy.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `Scale Up ${copy.name} | Centervert`,
      description: copy.description,
    },
  };
}

function EventJsonLd({ event, cityUrl }: { event: ScaleUpEvent; cityUrl: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `Scale Up ${event.cityDisplay} — ${event.date.display}, ${event.date.year}`,
    description: event.subhead,
    startDate: event.schemaStartAt ?? `${event.date.iso}T12:00:00`,
    ...(event.schemaEndAt ? { endDate: event.schemaEndAt } : {}),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.venue.name,
      address: event.venue.address,
    },
    organizer: {
      "@type": "Organization",
      name: "Centervert",
      url: "https://www.centervert.com",
    },
    image: event.ogImage
      ? [`https://www.centervert.com${event.ogImage}`]
      : undefined,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${cityUrl}#rsvp`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function PastSessions({ items }: { items: ScaleUpEvent[] }) {
  if (items.length === 0) return null;
  return (
    <Section tone="smoke" padding="lg" ariaLabelledBy="past-sessions-heading">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow as="h2" id="past-sessions-heading">
            Previous sessions
          </Eyebrow>
          <Heading as="p" size="display-lg" className="mt-5">
            A look at the rooms we have already run.
          </Heading>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map((e) => (
            <li
              key={e.slug}
              className="overflow-hidden rounded-2xl border border-cv-black/8 bg-white shadow-[var(--shadow-1)]"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={e.venue.heroImage}
                  alt={e.venue.heroImageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-evergreen">
                  {e.date.display}, {e.date.year}
                </p>
                <p className="mt-2 font-sans text-[1.05rem] font-semibold text-cv-black">
                  {e.venue.name}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default async function ScaleUpCityPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { city } = await params;
  const copy = cityCopy[city];
  if (!copy) notFound();

  const event = findNextEventForCity(city);
  const pastEvents = listEventsForCity(city)
    .filter((e) => e.status === "past")
    .sort((a, b) => (a.date.iso < b.date.iso ? 1 : -1));
  const cityUrl = `https://www.centervert.com/scaleup/${city}`;

  if (!event) {
    return (
      <div className="min-h-screen bg-smoke">
        <EventMinimalHeader />
        <main>
          <Section tone="white" padding="lg">
            <div className="mx-auto max-w-2xl py-16 text-center md:py-24">
              <Eyebrow>Scale Up {copy.name}</Eyebrow>
              <Heading as="h1" size="display-lg" className="mt-5">
                The next session is on the way.
              </Heading>
              <Text size="lg" tone="muted" className="mx-auto mt-6 max-w-xl">
                We are finalizing the date and venue for the next Scale Up{" "}
                {copy.name} working session. Email us and we will hold a seat for
                you the moment it is confirmed.
              </Text>
              <div className="mt-10">
                <Button href={routes.contactEmail} variant="primary" size="lg">
                  Email connect@centervert.com
                </Button>
              </div>
            </div>
          </Section>
          <PastSessions items={pastEvents} />
        </main>
        <EventMinimalFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-smoke">
      <EventJsonLd event={event} cityUrl={cityUrl} />
      <EventMinimalHeader />
      <main>
        <EventHero event={event} />

        <Section tone="white" padding="lg" bordered ariaLabelledBy="video-heading">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow as="h2" id="video-heading">
              {event.videoIntro?.eyebrow ?? "A quick look from Luke"}
            </Eyebrow>
            {event.videoIntro?.title ? (
              <Heading as="p" size="display-lg" className="mt-5">
                {event.videoIntro.title}
              </Heading>
            ) : event.videoIntro ? null : (
              <Heading as="p" size="display-lg" className="mt-5">
                Ninety seconds on what this morning is, and what it is not.
              </Heading>
            )}
          </div>
          <div className="mt-12">
            <EventVideo event={event} />
          </div>
        </Section>

        <Section tone="smoke" padding="lg" ariaLabelledBy="room-heading">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>
              {event.roomSection?.eyebrow ?? "What happens in the room"}
            </Eyebrow>
            <Heading
              as="h2"
              size="display-lg"
              id="room-heading"
              className="mt-5"
            >
              {event.roomSection?.title ?? "A working session, not a keynote."}
            </Heading>
            <div className="mx-auto mt-8 space-y-5 text-left md:text-center">
              {event.roomSection ? (
                event.roomSection.paragraphs.map((paragraph) => (
                  <Text
                    key={paragraph}
                    size="lg"
                    tone="muted"
                    className="mx-auto max-w-2xl md:text-center"
                  >
                    <InlineBoldText text={paragraph} />
                  </Text>
                ))
              ) : (
                event.room.map((paragraph) => (
                  <Text
                    key={paragraph}
                    size="lg"
                    tone="muted"
                    className="mx-auto"
                  >
                    {paragraph}
                  </Text>
                ))
              )}
            </div>
            {event.venue.logo ? (
              <div className="mt-12 flex flex-col items-center gap-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cv-black/45">
                  Hosted at
                </p>
                <Image
                  src={event.venue.logo}
                  alt={`${event.venue.name} logo`}
                  width={457}
                  height={162}
                  className="h-auto w-[90px] md:w-[110px] opacity-80"
                />
              </div>
            ) : null}
          </div>
        </Section>

        <Section tone="white" padding="lg" bordered ariaLabelledBy="agenda-heading">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>
              {event.agendaIntro?.eyebrow ?? "What we cover"}
            </Eyebrow>
            <Heading
              as="h2"
              size="display-lg"
              id="agenda-heading"
              className="mt-5"
            >
              {event.agendaIntro?.title ?? "Four things we will actually work on."}
            </Heading>
          </div>
          <div className="mx-auto mt-14 max-w-5xl">
            <EventAgenda items={event.agenda} />
          </div>
        </Section>

        <Section tone="smoke" padding="lg" ariaLabelledBy="walkaway-heading">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>
              {event.walkawayProse?.eyebrow ?? "What you walk out with"}
            </Eyebrow>
            <Heading
              as="h2"
              size="display-lg"
              id="walkaway-heading"
              className="mt-5"
            >
              {event.walkawayProse?.title ??
                "Not a deck. Something you can use Monday."}
            </Heading>
          </div>
          <div className="mx-auto mt-12 max-w-4xl">
            {event.walkawayProse ? (
              <EventWalkawayProse paragraphs={event.walkawayProse.paragraphs} />
            ) : (
              <EventWalkaway items={event.walkaway} />
            )}
          </div>
        </Section>

        {event.testimonials && event.testimonials.length > 0 ? (
          <Section
            tone="dark"
            padding="md"
            ariaLabelledBy="proof-heading"
          >
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow className="text-white/50" as="h2" id="proof-heading">
                {event.testimonialsIntro?.eyebrow ??
                  "From clients on the other side of the work"}
              </Eyebrow>
              {event.testimonialsIntro ? (
                <Heading
                  as="p"
                  size="display-lg"
                  className="mt-5 text-white"
                >
                  {event.testimonialsIntro.title}
                </Heading>
              ) : null}
            </div>
            <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
              {event.testimonials.map((t, i) => (
                <figure
                  key={`${t.name}-${i}`}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm"
                >
                  <blockquote className="font-quote text-[1.25rem] font-normal leading-snug text-white md:text-[1.5rem]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 text-[13px] text-white/55">
                    {t.name} · {t.role}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Section>
        ) : null}

        <section id="rsvp" className="scroll-mt-24 bg-white">
          <Container size="wide">
            <div className="mx-auto max-w-3xl py-24 text-center md:py-32">
              <Eyebrow>RSVP</Eyebrow>
              <Heading as="h2" size="display-lg" className="mt-5">
                Save a seat for{" "}
                <span className="text-cv-black/35">{event.date.display}</span>
              </Heading>
              <Text size="lg" tone="muted" className="mx-auto mt-6 max-w-xl">
                {event.subhead}
              </Text>

              <dl className="mx-auto mt-10 flex flex-col items-center justify-center gap-6 text-[14px] sm:flex-row sm:gap-10">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cv-black/45">
                    When
                  </dt>
                  <dd className="mt-1 font-semibold text-cv-black">
                    {event.date.display}, {event.date.year}
                    <br />
                    <span className="font-normal text-cv-black/65">
                      {event.time}
                    </span>
                  </dd>
                </div>
                <div
                  aria-hidden
                  className="hidden h-10 w-px bg-cv-black/10 sm:block"
                />
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cv-black/45">
                    Where
                  </dt>
                  <dd className="mt-1 font-semibold text-cv-black">
                    {event.venue.name}
                    <br />
                    <span className="font-normal text-cv-black/65">
                      {event.venue.address}
                    </span>
                  </dd>
                </div>
              </dl>

              <div className="mx-auto mt-12 text-left">
                <EventRSVPForm event={event} tone="light" />
              </div>
            </div>
          </Container>
        </section>

        <EventFooterCTA event={event} />

        <PastSessions items={pastEvents} />
      </main>
      <EventMinimalFooter />
    </div>
  );
}
