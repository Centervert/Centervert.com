"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatedOrb } from "@/components/marketing/AnimatedOrb";
import { routes } from "@/lib/routes";
import { fadeInUp, staggerContainerSlow } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative -mt-16 overflow-hidden bg-evergreen-950 pt-16 md:-mt-20 md:pt-20">
      {/* Full-bleed backdrop photo */}
      <Image
        src="/brand/space/centervert.spacex.hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 z-0 object-cover object-[50%_40%]"
      />

      {/* Warm tint blend over the photo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(1,26,16,0.55) 0%, rgba(1,26,16,0.35) 35%, rgba(1,26,16,0.6) 70%, rgba(15,15,15,0.92) 100%)",
          mixBlendMode: "multiply",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(36,84,255,0.22), transparent 55%), radial-gradient(ellipse at 75% 60%, rgba(192,255,0,0.15), transparent 50%)",
        }}
      />

      {/* Animated orb layered subtly on top of the photo */}
      <div className="absolute inset-0 z-[2]">
        <AnimatedOrb tone="brand" speed={42} blur={90} opacity={0.35} scale={1.8} />
      </div>

      {/* Fine dotted grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[3] opacity-[0.22]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%)",
        }}
      />

      {/* Film grain for texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[4] opacity-[0.18] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E\")",
          backgroundSize: "180px 180px",
        }}
      />

      {/* Bottom fade to smoke so the next section hands off cleanly */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-40 bg-gradient-to-b from-transparent to-smoke"
      />

      <Container size="wide">
        <div className="relative z-10 flex min-h-[92vh] flex-col items-center justify-center px-2 pt-24 pb-32 text-center md:min-h-[88vh] md:pt-36 md:pb-40">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainerSlow}
            className="flex max-w-4xl flex-col items-center"
          >
            <motion.div variants={fadeInUp} className="max-w-full">
              <Link
                href={routes.work}
                className="group inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11.5px] font-medium text-white/85 shadow-[var(--shadow-1)] backdrop-blur-md transition-all hover:border-white/35 hover:bg-white/15 sm:px-4 sm:text-[12.5px]"
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
              className="mt-10 font-serif text-[clamp(2.75rem,10vw,6.5rem)] font-medium leading-[0.98] tracking-[-0.03em] text-white text-balance [text-shadow:0_2px_40px_rgba(0,0,0,0.5)]"
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
              <span className="text-white/55">runs on.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-8 max-w-2xl text-[17px] leading-[1.6] text-white/80 md:text-[19px] [text-shadow:0_1px_20px_rgba(0,0,0,0.4)]"
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
              <Button
                href="#lifecycle"
                variant="ghost"
                size="lg"
                className="border-white/25 bg-white/5 text-white hover:border-white/45 hover:bg-white/10"
              >
                See how we work
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-14 flex max-w-full items-center gap-3 rounded-full border border-white/20 bg-white/10 py-2.5 pl-2.5 pr-4 shadow-[var(--shadow-1)] backdrop-blur-md sm:mt-16 sm:pr-5"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-evergreen text-[10px] font-bold text-highlight ring-1 ring-white/20">
                SC
              </div>
              <p className="text-left text-[12.5px] leading-snug text-white/85 sm:text-[13.5px]">
                <span className="font-semibold text-white">
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
