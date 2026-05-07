"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Calendar, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";
import type { ScaleUpEvent } from "@/lib/scale-up-events";

type Props = {
  pastEvent: ScaleUpEvent;
  nextEvent: ScaleUpEvent | null;
};

export function PastEventOverlay({ pastEvent, nextEvent }: Props) {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="past-event-heading"
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-cv-black/85 p-4 backdrop-blur-sm sm:p-6"
    >
      <div className="relative my-auto w-full max-w-xl rounded-3xl bg-white p-8 shadow-[var(--shadow-2)] md:p-10">
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Close"
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-cv-black/45 transition-colors hover:bg-smoke hover:text-cv-black"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cv-black/45">
          This event has passed
        </p>
        <h2
          id="past-event-heading"
          className="mt-4 font-sans text-[1.75rem] font-semibold leading-tight text-cv-black md:text-[2rem]"
        >
          We missed you on {pastEvent.date.display}.
        </h2>

        {nextEvent ? (
          <>
            <p className="mt-5 text-[15.5px] leading-relaxed text-cv-black/65">
              Our next Scale Up {nextEvent.cityDisplay} session is coming up.
              Same working format, new room, fresh seats.
            </p>

            <div className="mt-7 rounded-2xl border border-cv-black/8 bg-smoke p-5">
              <div className="flex flex-col gap-3 text-[14px] text-cv-black/75">
                <span className="inline-flex items-start gap-2">
                  <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-evergreen" />
                  <span>
                    <span className="font-semibold text-cv-black">
                      {nextEvent.date.display}, {nextEvent.date.year}
                    </span>
                    <br />
                    <span className="text-cv-black/65">{nextEvent.time}</span>
                  </span>
                </span>
                <span className="inline-flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-evergreen" />
                  <span>
                    <span className="font-semibold text-cv-black">
                      {nextEvent.venue.name}
                    </span>
                    <br />
                    <span className="text-cv-black/65">
                      {nextEvent.venue.address}
                    </span>
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Button
                href={routes.scaleUpEvent(nextEvent.city, nextEvent.slug)}
                variant="primary"
                size="lg"
                trailingIcon={<ArrowRight className="h-4 w-4" />}
              >
                Reserve my seat
              </Button>
              <button
                type="button"
                onClick={() => setDismissed(true)}
                className="text-[14px] font-semibold text-cv-black/55 underline-offset-4 transition-colors hover:text-cv-black hover:underline"
              >
                View past event details
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="mt-5 text-[15.5px] leading-relaxed text-cv-black/65">
              We will announce the next Greenville session soon. Reach out and
              we will make sure you are on the list.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Button
                href={routes.contactEmail}
                variant="primary"
                size="lg"
                trailingIcon={<ArrowRight className="h-4 w-4" />}
              >
                Get notified
              </Button>
              <button
                type="button"
                onClick={() => setDismissed(true)}
                className="text-[14px] font-semibold text-cv-black/55 underline-offset-4 transition-colors hover:text-cv-black hover:underline"
              >
                View past event details
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
