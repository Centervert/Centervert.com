import type { Metadata } from "next";
import { ArrowRight, MapPin, Monitor, Users } from "lucide-react";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/Button";
import { MeshGradient } from "@/components/marketing/MeshGradient";
import { routes } from "@/lib/routes";
import {
  scaleUpLocations,
  scaleUpNotifyHref,
  type ScaleUpCardTheme,
} from "@/lib/scale-up-locations";
import { cn } from "@/lib/cn";

const positioningShort =
  "Practical workshops and events on AI, automation, and the systems your business runs on. Hosted by Centervert in Greenville and online.";

export const metadata: Metadata = {
  title: "Scale Up by Centervert",
  description: positioningShort,
  openGraph: {
    title: "Scale Up by Centervert | Centervert",
    description: positioningShort,
    url: "https://www.centervert.com/scaleup",
  },
};

const includes = [
  "Free and paid workshops you can actually use",
  "Owner roundtables and lunch-and-learns",
  "Local talks and community training in the Upstate",
  "Private workshops for your team",
  "Online courses over time as we add them",
];

function cardThemeClasses(theme: ScaleUpCardTheme): string {
  if (theme === "highlight") {
    return cn(
      "border border-highlight/40 bg-gradient-to-br from-highlight/[0.14] via-white to-smoke",
      "shadow-[var(--shadow-2)] ring-1 ring-highlight/15"
    );
  }
  return cn(
    "border border-royal/30 bg-gradient-to-br from-royal/[0.12] via-white to-smoke",
    "shadow-[var(--shadow-2)] ring-1 ring-royal/10"
  );
}

export default function ScaleUpPage() {
  return (
    <div className="min-h-screen bg-smoke">
      <Nav />
      <main>
        <section className="relative -mt-16 overflow-hidden pt-16 md:-mt-20 md:pt-20">
          <MeshGradient tone="light" />
          <Container size="wide">
            <div className="relative mx-auto max-w-3xl py-24 text-center md:py-32">
              <Eyebrow>Workshops and events</Eyebrow>
              <Heading as="h1" size="display-lg" className="mt-5 text-balance">
                Scale Up by Centervert
              </Heading>
              <Text size="lg" tone="muted" className="mx-auto mt-6 max-w-2xl text-balance">
                {positioningShort}
              </Text>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  href={routes.scaleUpEvents}
                  variant="primary"
                  size="lg"
                  trailingIcon={<ArrowRight className="h-4 w-4" />}
                >
                  RSVP to an event
                </Button>
                <Button href={routes.book} variant="ghost" size="lg">
                  Book a private workshop
                </Button>
              </div>
            </div>
          </Container>
        </section>

        <Section tone="white" padding="lg" bordered ariaLabelledBy="what-heading">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>What you will find here</Eyebrow>
            <Heading as="h2" size="display-lg" id="what-heading" className="mt-5">
              Learn in the room. Build when it makes sense.
            </Heading>
            <Text size="lg" tone="muted" className="mt-6">
              You get straight talk, working sessions, and space to ask blunt
              questions. When you are ready for a full project, you are already
              talking to the same Centervert team. Scale Up is run by Centervert, not
              a separate company.
            </Text>
            <ul className="mt-10 space-y-3 text-[15px] leading-relaxed text-cv-black/70">
              {includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-evergreen" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section tone="smoke" padding="lg" ariaLabelledBy="fit-heading">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>If you want more than a session</Eyebrow>
            <Heading as="h2" size="display-lg" id="fit-heading" className="mt-5">
              When you are ready to go deeper
            </Heading>
            <Text size="lg" tone="muted" className="mt-6">
              You might start at a Scale Up event. If you need software builds,
              integrations, infrastructure, or ongoing IT support afterward, it is the
              same Centervert team and the same company.
            </Text>
          </div>
        </Section>

        <Section tone="white" padding="lg" bordered ariaLabelledBy="leaders-heading">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Who is in the room</Eyebrow>
            <Heading as="h2" size="display-lg" id="leaders-heading" className="mt-5">
              Who leads sessions and who backs the work
            </Heading>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div className="rounded-2xl border border-cv-black/5 bg-smoke/80 p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-evergreen/10 text-evergreen">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-sans text-[1.25rem] font-semibold text-cv-black">
                  Luke Pauldine
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-cv-black/55">
                  Hosts Scale Up workshops and public events.
                </p>
              </div>
              <div className="rounded-2xl border border-cv-black/5 bg-smoke/80 p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-evergreen/10 text-evergreen">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-sans text-[1.25rem] font-semibold text-cv-black">
                  Tyler Amos
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-cv-black/55">
                  Founder of Centervert. The engineers and IT staff you would work with
                  on a client project are the same company behind these events.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="events"
          tone="smoke"
          padding="lg"
          ariaLabelledBy="events-heading"
          className="scroll-mt-24"
        >
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Events by location</Eyebrow>
            <Heading as="h2" size="display-lg" id="events-heading" className="mt-5">
              Pick Greenville or online
            </Heading>
            <Text size="lg" tone="muted" className="mx-auto mt-6 max-w-xl">
              Open dates and registration links will appear here as soon as each
              session is scheduled.
            </Text>
          </div>
          <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-2">
            {scaleUpLocations.map((loc) => {
              const Icon = loc.id === "online" ? Monitor : MapPin;
              const notify = loc.notifyEmail
                ? scaleUpNotifyHref(loc.notifyEmail, loc.fullName)
                : routes.contactEmail;
              return (
                <article
                  key={loc.id}
                  className={cn(
                    "flex flex-col rounded-3xl p-8 md:p-10",
                    cardThemeClasses(loc.theme)
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cv-black/[0.06] text-evergreen">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-6 font-sans text-[1.35rem] font-semibold leading-snug text-cv-black md:text-[1.5rem]">
                    {loc.fullName}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-cv-black/60">
                    {loc.description}
                  </p>
                  {loc.upcomingBlurb ? (
                    <p className="mt-4 text-[13px] leading-relaxed text-cv-black/45">
                      {loc.upcomingBlurb}
                    </p>
                  ) : null}
                  <div className="mt-8">
                    {loc.cityHref ? (
                      <Button
                        href={loc.cityHref}
                        variant="primary"
                        size="md"
                        trailingIcon={<ArrowRight className="h-4 w-4" />}
                      >
                        {loc.rsvpLabel ?? "See events"}
                      </Button>
                    ) : loc.comingSoon ? (
                      <Button href={notify} variant="dark" size="md">
                        Get notified
                      </Button>
                    ) : (
                      <Button
                        href={loc.rsvpUrl}
                        variant="primary"
                        size="md"
                        trailingIcon={<ArrowRight className="h-4 w-4" />}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {loc.rsvpLabel ?? "RSVP"}
                      </Button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </Section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
