import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { ScaleUpEvent } from "@/lib/scale-up-events";

type Props = {
  event: ScaleUpEvent;
};

export function EventHero({ event }: Props) {
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
        <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-6 px-2 pb-10 pt-24 text-center md:gap-7 md:pb-14 md:pt-28">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/75 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
            {event.audienceLabel}
          </p>

          <h1 className="font-sans text-[clamp(2.25rem,6vw,4.25rem)] font-bold leading-[1.02] tracking-[-0.02em] text-white text-balance [text-shadow:0_2px_40px_rgba(0,0,0,0.6)]">
            {event.headline.lead}
            <span className="relative inline-block">
              <span className="relative z-10 italic text-highlight">
                {event.headline.highlight}
              </span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-[0.08em] -z-0 h-[0.35em] bg-highlight/20"
              />
            </span>
            {event.headline.tail}
          </h1>

          <p className="max-w-xl text-[16px] leading-[1.55] text-white/80 md:text-[17px]">
            {event.subhead}
          </p>

          {event.sessionCaption ? (
            <p className="mt-1 max-w-lg text-[12.5px] font-semibold uppercase tracking-[0.14em] text-white/60">
              {event.sessionCaption}
            </p>
          ) : null}

          <a
            href="#rsvp"
            className="inline-flex h-12 items-center justify-center rounded-full bg-highlight px-9 text-[15px] font-semibold text-cv-black transition-colors hover:bg-highlight-400 md:h-14 md:px-10"
          >
            {event.heroCtaLabel ?? "Reserve my seat"}
          </a>

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
