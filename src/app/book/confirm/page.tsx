import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Booking confirmed",
  description: "Your strategy call with Centervert is confirmed.",
};

export default function BookConfirmPage() {
  return (
    <div className="min-h-screen bg-smoke">
      <Navbar />

      <section className="mx-auto max-w-xl px-6 pt-32 pb-20 text-center md:pt-40">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-evergreen/10">
          <CheckCircle2 className="h-10 w-10 text-evergreen" />
        </div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-cv-black md:text-4xl">
          You’re on the calendar
        </h1>
        <p className="mt-4 text-base leading-relaxed text-cv-black/60">
          We’ve sent a calendar invite to your email. You’ll get a reminder before the call.
        </p>
        <p className="mt-2 text-sm text-cv-black/50">
          If you need to reschedule or have questions, reply to the invite or email us at{" "}
          <a
            href="mailto:connect@centervert.com"
            className="text-evergreen underline hover:no-underline"
          >
            connect@centervert.com
          </a>
          .
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-highlight px-8 py-4 text-sm font-semibold text-cv-black transition-all hover:bg-highlight/90"
        >
          Back to home
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <footer className="border-t border-cv-black/5 bg-smoke px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-cv-black/30 sm:flex-row">
          <p>&copy; 2026 Centervert. All rights reserved.</p>
          <Link href="/" className="hover:text-cv-black">
            Centervert
          </Link>
        </div>
      </footer>
    </div>
  );
}
