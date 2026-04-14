"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatedOrb } from "@/components/marketing/AnimatedOrb";
import { routes } from "@/lib/routes";
import { fadeInUp, staggerContainerSlow } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative -mt-16 overflow-hidden bg-smoke pt-16 md:-mt-20 md:pt-20">
      {/* Base wash: soft vertical gradient so top nav stays legible */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-white via-smoke to-smoke"
      />

      {/* Animated orb behind everything */}
      <AnimatedOrb tone="brand" speed={36} blur={70} opacity={0.75} scale={1.7} />

      {/* Fine dotted grid — Linear-style texture over the orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(15,15,15,0.18) 1px, transparent 0)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse at 50% 55%, black 35%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 55%, black 35%, transparent 80%)",
        }}
      />

      {/* Readability veil — keeps the headline black and legible */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-smoke/35 via-smoke/0 to-smoke/85"
      />

      {/* Bottom hairline to hand off to the logo marquee below */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cv-black/10 to-transparent"
      />

      <Container size="wide">
        <div className="relative flex min-h-[92vh] flex-col items-center justify-center px-2 pt-24 pb-20 text-center md:min-h-[88vh] md:pt-36 md:pb-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainerSlow}
            className="flex max-w-4xl flex-col items-center"
          >
            <motion.div variants={fadeInUp} className="max-w-full">
              <Link
                href={routes.work}
                className="group inline-flex max-w-full items-center gap-2 rounded-full border border-cv-black/10 bg-white/80 px-3 py-1.5 text-[11.5px] font-medium text-cv-black/75 shadow-[var(--shadow-1)] backdrop-blur-md transition-all hover:border-cv-black/25 hover:bg-white sm:px-4 sm:text-[12.5px]"
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
              className="mt-10 font-serif text-[clamp(2.75rem,10vw,6.5rem)] font-medium leading-[0.98] tracking-[-0.03em] text-cv-black text-balance"
            >
              The systems your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic">business</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-[0.08em] -z-0 h-[0.35em] bg-highlight/70"
                />
              </span>
              <br />
              <span className="text-cv-black/35">runs on.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-8 max-w-2xl text-[17px] leading-[1.6] text-cv-black/65 md:text-[19px]"
            >
              Centervert helps businesses plan, build, implement, and support the
              technology they rely on to operate. Software, infrastructure,
              automation, and managed services, from one Greenville team.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
            >
              <Button
                href={routes.book}
                variant="primary"
                size="lg"
                trailingIcon={<ArrowRight className="h-4 w-4" />}
              >
                Book a Strategy Call
              </Button>
              <Button href="#lifecycle" variant="ghost" size="lg">
                See how we work
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-14 flex max-w-full items-center gap-3 rounded-full border border-cv-black/10 bg-white/80 py-2.5 pl-2.5 pr-4 shadow-[var(--shadow-1)] backdrop-blur-md sm:mt-16 sm:pr-5"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-evergreen text-[10px] font-bold text-highlight">
                SC
              </div>
              <p className="text-left text-[12.5px] leading-snug text-cv-black/80 sm:text-[13.5px]">
                <span className="font-semibold text-cv-black">
                  &ldquo;Replaced four vendors with one team.&rdquo;
                </span>{" "}
                <span className="text-cv-black/50">Sarah C., VP Ops</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
