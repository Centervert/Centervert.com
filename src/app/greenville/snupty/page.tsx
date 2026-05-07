import type { Metadata } from "next";
import { Calendar, CheckCircle2, MapPin } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/Button";
import { EventMinimalHeader } from "@/components/scaleup/EventMinimalHeader";
import { EventMinimalFooter } from "@/components/scaleup/EventMinimalFooter";
import { findNextEventForCity } from "@/lib/scale-up-events";
import { MetaPixel } from "@/components/marketing/MetaPixel";
import { routes } from "@/lib/routes";

const CITY = "greenville";

export const metadata: Metadata = {
  title: "You are on the list | Scale Up Greenville",
  description:
    "Thanks for reserving your seat at Scale Up Greenville. We will email confirmation and venue details ahead of the session.",
  robots: { index: false, follow: false },
};

export default function GreenvilleSnuptyPage() {
  const event = findNextEventForCity(CITY);

  return (
    <div className="min-h-screen bg-smoke">
      <MetaPixel event="Lead" />
      <EventMinimalHeader />
      <main>
        <Section tone="white" padding="lg">
          <Container size="wide">
            <div className="mx-auto max-w-2xl py-16 text-center md:py-24">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-evergreen text-white">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <Eyebrow className="mt-8">RSVP confirmed</Eyebrow>
              <Heading as="h1" size="display-lg" className="mt-5">
                You are on the list.
              </Heading>
              <Text size="lg" tone="muted" className="mx-auto mt-6 max-w-xl">
                Thanks for reserving your seat. We will email a calendar invite
                and final venue details the week of the session. If anything
                changes, just reply to that email.
              </Text>

              {event ? (
                <div className="mx-auto mt-12 rounded-2xl border border-cv-black/8 bg-smoke p-6 text-left md:p-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cv-black/45">
                    Your session
                  </p>
                  <h2 className="mt-3 font-sans text-[1.5rem] font-semibold leading-tight text-cv-black">
                    Scale Up {event.cityDisplay}
                  </h2>
                  <dl className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div className="flex items-start gap-3">
                      <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-evergreen" />
                      <div>
                        <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cv-black/45">
                          When
                        </dt>
                        <dd className="mt-1 text-[14.5px] font-semibold text-cv-black">
                          {event.date.display}, {event.date.year}
                          <br />
                          <span className="font-normal text-cv-black/65">
                            {event.time}
                          </span>
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-evergreen" />
                      <div>
                        <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cv-black/45">
                          Where
                        </dt>
                        <dd className="mt-1 text-[14.5px] font-semibold text-cv-black">
                          {event.venue.name}
                          <br />
                          <span className="font-normal text-cv-black/65">
                            {event.venue.address}
                          </span>
                        </dd>
                      </div>
                    </div>
                  </dl>
                </div>
              ) : null}

              <div className="mt-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cv-black/45">
                  While you wait
                </p>
                <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                  <Button href={routes.home} variant="primary" size="md">
                    Explore Centervert
                  </Button>
                  <Button href={routes.scaleUp} variant="ghost" size="md">
                    About Scale Up
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <EventMinimalFooter />
    </div>
  );
}
