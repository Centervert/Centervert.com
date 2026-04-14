import { CheckCircle2, ArrowRight } from "lucide-react";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { Heading, Text, Eyebrow } from "@/components/ui/typography";
import { Button } from "@/components/ui/Button";
import { MeshGradient } from "@/components/marketing/MeshGradient";

export const metadata = {
  title: "Booking confirmed | Centervert",
  description: "Your strategy call with Centervert is confirmed.",
};

export default function BookConfirmPage() {
  return (
    <div className="min-h-screen bg-smoke">
      <Nav />
      <main>
        <section className="relative -mt-16 overflow-hidden pt-16 md:-mt-20 md:pt-20">
          <MeshGradient tone="light" />
          <Container size="wide">
            <div className="relative mx-auto flex max-w-2xl flex-col items-center py-28 text-center md:py-36">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-evergreen text-highlight shadow-[var(--shadow-2)]">
                <CheckCircle2 className="h-9 w-9" />
              </div>
              <Eyebrow className="mt-8">Confirmed</Eyebrow>
              <Heading as="h1" size="display-lg" className="mt-5">
                You are on the calendar.
              </Heading>
              <Text size="lg" tone="muted" className="mt-6 max-w-md">
                We sent a calendar invite to your email. You will get a reminder
                before the call. If you need to reschedule, reply to the invite
                or email{" "}
                <a
                  href="mailto:connect@centervert.com"
                  className="text-evergreen underline decoration-evergreen/30 underline-offset-4 hover:decoration-evergreen"
                >
                  connect@centervert.com
                </a>
                .
              </Text>
              <div className="mt-10">
                <Button
                  href="/"
                  variant="primary"
                  size="lg"
                  trailingIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Back to home
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
