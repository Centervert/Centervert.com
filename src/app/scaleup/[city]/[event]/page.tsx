import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import {
  findScaleUpEvent,
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

type PageParams = { city: string; event: string };

export function generateStaticParams(): PageParams[] {
  return scaleUpEvents.map((e) => ({ city: e.city, event: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { city, event: slug } = await params;
  const event = findScaleUpEvent(city, slug);
  if (!event) {
    return { title: "Scale Up event" };
  }
  const title = `Scale Up ${event.cityDisplay}: ${event.date.display}, ${event.date.year}`;
  const url = `https://www.centervert.com/scaleup/${event.city}/${event.slug}`;
  return {
    title,
    description: event.subhead,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description: event.subhead,
      images: event.ogImage ? [{ url: event.ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: event.subhead,
      images: event.ogImage ? [event.ogImage] : undefined,
    },
  };
}

function EventJsonLd({ event }: { event: ScaleUpEvent }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `Scale Up ${event.cityDisplay} — ${event.date.display}, ${event.date.year}`,
    description: event.subhead,
    startDate: event.date.iso,
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
      url: `https://www.centervert.com/scaleup/${event.city}/${event.slug}#rsvp`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function ScaleUpEventPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { city, event: slug } = await params;
  const event = findScaleUpEvent(city, slug);
  if (!event || event.status === "draft") {
    notFound();
  }

  return (
    <div className="min-h-screen bg-smoke">
      <EventJsonLd event={event} />
      <EventMinimalHeader />
      <main>
        <EventHero event={event} />

        <Section tone="white" padding="lg" bordered ariaLabelledBy="video-heading">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow as="h2" id="video-heading">
              A quick look from Luke
            </Eyebrow>
            <Heading as="p" size="display-lg" className="mt-5">
              Ninety seconds on what this morning is, and what it is not.
            </Heading>
          </div>
          <div className="mt-12">
            <EventVideo event={event} />
          </div>
        </Section>

        <Section tone="smoke" padding="lg" ariaLabelledBy="room-heading">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>What happens in the room</Eyebrow>
            <Heading
              as="h2"
              size="display-lg"
              id="room-heading"
              className="mt-5"
            >
              A working session, not a keynote.
            </Heading>
            <div className="mx-auto mt-8 space-y-5">
              {event.room.map((paragraph) => (
                <Text
                  key={paragraph}
                  size="lg"
                  tone="muted"
                  className="mx-auto"
                >
                  {paragraph}
                </Text>
              ))}
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
            <Eyebrow>What we cover</Eyebrow>
            <Heading
              as="h2"
              size="display-lg"
              id="agenda-heading"
              className="mt-5"
            >
              Four things we will actually work on.
            </Heading>
          </div>
          <div className="mx-auto mt-14 max-w-5xl">
            <EventAgenda items={event.agenda} />
          </div>
        </Section>

        <Section tone="smoke" padding="lg" ariaLabelledBy="walkaway-heading">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>What you walk out with</Eyebrow>
            <Heading
              as="h2"
              size="display-lg"
              id="walkaway-heading"
              className="mt-5"
            >
              Not a deck. Something you can use Monday.
            </Heading>
          </div>
          <div className="mx-auto mt-12 max-w-4xl">
            <EventWalkaway items={event.walkaway} />
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
                From clients on the other side of the work
              </Eyebrow>
            </div>
            <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
              {event.testimonials.map((t) => (
                <figure
                  key={t.name}
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
      </main>
      <EventMinimalFooter />
    </div>
  );
}
