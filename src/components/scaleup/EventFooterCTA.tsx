import { ArrowUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { ScaleUpEvent } from "@/lib/scale-up-events";

type Props = {
  event: ScaleUpEvent;
};

export function EventFooterCTA({ event }: Props) {
  return (
    <section className="relative overflow-hidden bg-evergreen text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 20%, rgba(192,255,0,0.22) 0%, rgba(192,255,0,0) 65%)",
        }}
      />
      <Container size="wide">
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center py-20 text-center md:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-highlight">
            {event.footerCta?.eyebrow ?? "Seats are limited"}
          </p>
          <h2 className="mt-4 font-sans text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-tight text-balance">
            {event.footerCta?.title ?? (
              <>
                One morning.{" "}
                <span className="text-white/55">One room.</span>
              </>
            )}
          </h2>
          <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-white/75">
            {event.footerCta?.detailLine ?? (
              <>
                {event.date.display}, {event.date.year} at {event.venue.name}.{" "}
                {event.time}. If your schedule shifts later, just reply to the
                confirmation email and we will hold the seat for the next one.
              </>
            )}
          </p>
          <a
            href="#rsvp"
            className="mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-highlight px-10 text-[15px] font-semibold text-cv-black transition-colors hover:bg-highlight-400"
          >
            <ArrowUp className="h-4 w-4" />
            {event.footerCta?.buttonLabel ?? "RSVP now"}
          </a>
        </div>
      </Container>
    </section>
  );
}
