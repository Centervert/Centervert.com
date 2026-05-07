import type { Metadata } from "next";
import Image from "next/image";
import { Calendar, CheckCircle2, Clock, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/Button";
import { EventMinimalHeader } from "@/components/scaleup/EventMinimalHeader";
import { EventMinimalFooter } from "@/components/scaleup/EventMinimalFooter";
import { findNextEventForCity, type ScaleUpEvent } from "@/lib/scale-up-events";
import { MetaPixel } from "@/components/marketing/MetaPixel";
import { routes } from "@/lib/routes";

const CITY = "greenville";

export const metadata: Metadata = {
  title: "You are on the list | Scale Up Greenville",
  description:
    "Thanks for reserving your seat at Scale Up Greenville. We will email confirmation and venue details ahead of the session.",
  robots: { index: false, follow: false },
};

function ConfirmedHero({ event }: { event: ScaleUpEvent }) {
  return (
    <section className="relative overflow-hidden bg-cv-black text-white">
      <Image
        src={event.venue.heroImage}
        alt={event.venue.heroImageAlt}
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 z-0 object-cover object-center opacity-[0.5]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(1,40,26,0.78) 0%, rgba(15,15,15,0.82) 55%, rgba(15,15,15,0.96) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(55% 55% at 50% 20%, rgba(192,255,0,0.14) 0%, rgba(192,255,0,0) 65%)",
        }}
      />

      <Container size="wide">
        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-3xl flex-col items-center justify-center gap-6 px-2 pb-16 pt-28 text-center md:gap-7 md:pb-20 md:pt-32">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-highlight text-cv-black ring-8 ring-highlight/15">
            <CheckCircle2 className="h-7 w-7" strokeWidth={2.25} />
          </span>

          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/75 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
            RSVP confirmed
          </p>

          <h1 className="font-sans text-[clamp(2.25rem,6vw,4.25rem)] font-bold leading-[1.02] tracking-[-0.02em] text-white text-balance [text-shadow:0_2px_40px_rgba(0,0,0,0.6)]">
            See you at{" "}
            <span className="relative inline-block">
              <span className="relative z-10 italic text-highlight">
                {event.venue.name}.
              </span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-[0.08em] -z-0 h-[0.35em] bg-highlight/20"
              />
            </span>
          </h1>

          <p className="max-w-xl text-[16px] leading-[1.55] text-white/80 md:text-[17px]">
            Your seat is locked in. We will email a calendar invite and final
            venue details the week of the session. If anything changes, just
            reply to that email.
          </p>

          <div className="flex w-full flex-col items-stretch justify-center gap-1 rounded-2xl border border-white/12 bg-cv-black/40 p-1 backdrop-blur-md sm:flex-row sm:gap-0 sm:p-0">
            <MetaItem
              icon={<Calendar className="h-3.5 w-3.5" />}
              label="Date"
              primary={event.date.display}
              secondary={event.date.year}
            />
            <MetaDivider />
            <MetaItem
              icon={<Clock className="h-3.5 w-3.5" />}
              label="Time"
              primary={event.time}
            />
            <MetaDivider />
            <MetaItem
              icon={<MapPin className="h-3.5 w-3.5" />}
              label="Venue"
              primary={event.venue.name}
              secondary={event.venue.address}
              link={event.venue.mapsUrl}
            />
          </div>

          <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-white/55">
            Hosted by{" "}
            <span className="text-white">{event.host.name}</span>
          </p>
        </div>
      </Container>
    </section>
  );
}

function MetaItem({
  icon,
  label,
  primary,
  secondary,
  link,
}: {
  icon: React.ReactNode;
  label: string;
  primary: string;
  secondary?: string;
  link?: string;
}) {
  const primaryEl = link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-highlight hover:text-highlight"
    >
      {primary}
    </a>
  ) : (
    primary
  );

  return (
    <div className="flex flex-1 flex-col items-center gap-1.5 px-4 py-3 text-center sm:py-4">
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-highlight/15 text-highlight">
        {icon}
      </span>
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50">
        {label}
      </p>
      <p className="text-[13.5px] font-semibold leading-snug text-white">
        {primaryEl}
      </p>
      {secondary ? (
        <p className="max-w-[14rem] text-[11.5px] leading-snug text-white/55">
          {secondary}
        </p>
      ) : null}
    </div>
  );
}

function MetaDivider() {
  return (
    <div
      aria-hidden
      className="hidden w-px self-stretch bg-white/10 sm:block"
    />
  );
}

function FallbackHero() {
  return (
    <Section tone="white" padding="lg">
      <Container size="wide">
        <div className="mx-auto max-w-2xl py-16 text-center md:py-24">
          <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-evergreen text-white">
            <CheckCircle2 className="h-7 w-7" />
          </span>
          <Eyebrow className="mt-8">RSVP confirmed</Eyebrow>
          <Heading as="h1" size="display-lg" className="mt-5">
            You are on the list.
          </Heading>
          <Text size="lg" tone="muted" className="mx-auto mt-6 max-w-xl">
            Thanks for reserving your seat. We will email a calendar invite and
            venue details as soon as the next Greenville session is locked in.
          </Text>
        </div>
      </Container>
    </Section>
  );
}

export default function GreenvilleSnuptyPage() {
  const event = findNextEventForCity(CITY);

  return (
    <div className="min-h-screen bg-smoke">
      <MetaPixel event="Lead" />
      <EventMinimalHeader logoHeight={44} />
      <main>
        {event ? <ConfirmedHero event={event} /> : <FallbackHero />}

        <Section tone="white" padding="md" bordered>
          <Container size="wide">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cv-black/45">
                While you wait
              </p>
              <Heading as="h2" size="display-lg">
                Explore the team that runs the room.
              </Heading>
              <Text size="lg" tone="muted" className="max-w-xl">
                Scale Up is hosted by the same Centervert engineers and IT
                staff who would handle your software build, infrastructure, or
                help desk if you decide to work together.
              </Text>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                <Button href={routes.home} variant="primary" size="md">
                  Explore Centervert
                </Button>
                <Button href={routes.scaleUp} variant="ghost" size="md">
                  About Scale Up
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <EventMinimalFooter />
    </div>
  );
}
