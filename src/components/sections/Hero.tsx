"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { routes } from "@/lib/routes";
import { fadeInUp, staggerContainerSlow } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative -mt-16 overflow-hidden bg-cv-black pt-16 md:-mt-20 md:pt-20">
      <Image
        src="/brand/space/spacex-uj3hvdfQujI-unsplash.jpg"
        alt="SpaceX Falcon 9 at liftoff with exhaust plume and launch tower"
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 z-0 object-cover object-center"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.55) 88%, rgba(0,0,0,0.85) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-full max-w-2xl"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0) 100%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.1] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E\")",
          backgroundSize: "180px 180px",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-32 bg-gradient-to-b from-transparent to-smoke"
      />

      <Container size="wide">
        <div className="relative z-10 flex min-h-[92vh] flex-col items-start justify-end px-2 pt-24 pb-28 text-left md:min-h-[88vh] md:pt-36 md:pb-36">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainerSlow}
            className="flex max-w-3xl flex-col items-start"
          >
            <motion.div variants={fadeInUp} className="max-w-full">
              <Link
                href={routes.work}
                className="group inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-[11.5px] font-medium text-white/90 shadow-[var(--shadow-1)] backdrop-blur-md transition-all hover:border-white/35 hover:bg-black/35 sm:px-4 sm:text-[12.5px]"
              >
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-highlight text-cv-black">
                  <Sparkles className="h-3 w-3" />
                </span>
                <span className="truncate">
                  New case study: four vendors retired
                </span>
                <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mt-8 font-sans text-[clamp(2.75rem,9vw,6rem)] font-bold leading-[0.98] tracking-[-0.03em] text-white text-balance [text-shadow:0_2px_40px_rgba(0,0,0,0.7)]"
            >
              The systems your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic">business</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-[0.08em] -z-0 h-[0.35em] bg-highlight/85"
                />
              </span>
              <br />
              <span className="text-white/60">runs on.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl text-[16px] leading-[1.6] text-white/85 md:text-[18px] [text-shadow:0_1px_24px_rgba(0,0,0,0.8)]"
            >
              Software, infrastructure, automation, and managed support from one
              Greenville team. You get people who plan it, build it, roll it out,
              and answer the phone when it misbehaves.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
            >
              <Button
                href={routes.book}
                variant="primary"
                size="lg"
                trailingIcon={<ArrowRight className="h-4 w-4" />}
              >
                Book a Strategy Call
              </Button>
              <Button
                href="#lifecycle"
                variant="ghost"
                size="lg"
                className="border-white/30 bg-white/5 text-white hover:border-white/50 hover:bg-white/15"
              >
                See how we work
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex max-w-full items-center gap-3 rounded-full border border-white/20 bg-black/25 py-2.5 pl-2.5 pr-4 shadow-[var(--shadow-1)] backdrop-blur-md sm:mt-12 sm:pr-5"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-evergreen text-[10px] font-bold text-highlight ring-1 ring-white/20">
                SC
              </div>
              <p className="text-left text-[12.5px] leading-snug text-white/90 sm:text-[13.5px]">
                <span className="font-quote font-semibold text-white">
                  &ldquo;Replaced four vendors with one team.&rdquo;
                </span>{" "}
                <span className="text-white/55">Sarah C., VP Ops</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
