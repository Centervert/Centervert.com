"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MeshGradient } from "@/components/marketing/MeshGradient";
import { AnimatedOrb } from "@/components/marketing/AnimatedOrb";
import { routes } from "@/lib/routes";
import { fadeInUp, staggerContainerSlow } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative -mt-16 overflow-hidden pt-16 md:-mt-20 md:pt-20">
      <MeshGradient tone="light" grain={false} />
      <AnimatedOrb tone="brand" speed={50} blur={120} opacity={0.42} scale={1.5} />
      {/* Soft readability veil over the orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-smoke/40 via-smoke/10 to-smoke/70"
      />
      <Container size="wide">
        <div className="relative flex min-h-[88vh] flex-col items-center justify-center px-2 pt-20 pb-16 text-center sm:min-h-[86vh] md:pt-32 md:pb-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainerSlow}
            className="flex max-w-4xl flex-col items-center"
          >
            <motion.div variants={fadeInUp}>
              <Link
                href={routes.work}
                className="group inline-flex items-center gap-2 rounded-full border border-cv-black/10 bg-white/70 px-4 py-1.5 text-[12.5px] font-medium text-cv-black/70 backdrop-blur-sm transition-all hover:border-cv-black/20 hover:bg-white"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-highlight text-cv-black">
                  <Sparkles className="h-3 w-3" />
                </span>
                New case study: One partner, four vendors retired
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mt-8 font-serif text-[clamp(2.5rem,8vw,5.5rem)] font-medium leading-[1.02] tracking-[-0.025em] text-cv-black text-balance"
            >
              The systems your business
              <br />
              <span className="text-cv-black/35">runs on.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-8 max-w-2xl text-[17px] leading-[1.6] text-cv-black/60 md:text-[19px]"
            >
              Centervert helps businesses plan, build, implement, and support the
              technology they rely on to operate. Software, infrastructure, automation,
              and managed services, from one Greenville team.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
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
              className="mt-14 inline-flex items-center gap-3 rounded-full border border-cv-black/10 bg-white/70 py-2.5 pl-2.5 pr-5 shadow-[var(--shadow-1)] backdrop-blur-sm"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-evergreen text-[10px] font-bold text-highlight">
                SC
              </div>
              <p className="text-[13.5px] text-cv-black/75">
                <span className="font-semibold text-cv-black">
                  &ldquo;Replaced four vendors with one team.&rdquo;
                </span>{" "}
                <span className="text-cv-black/50">Sarah C., VP Operations</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
