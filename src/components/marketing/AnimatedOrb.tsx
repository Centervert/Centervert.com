"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type Tone = "brand" | "warm" | "cool";

const toneGradients: Record<Tone, string> = {
  brand:
    "conic-gradient(from 0deg at 50% 50%, #C0FF00 0%, #2454FF 22%, #013220 48%, #2454FF 72%, #C0FF00 100%)",
  warm:
    "conic-gradient(from 0deg at 50% 50%, #FF7A00 0%, #FF3366 25%, #8A2BE2 50%, #2454FF 75%, #FF7A00 100%)",
  cool:
    "conic-gradient(from 0deg at 50% 50%, #2454FF 0%, #013220 25%, #C0FF00 50%, #013220 75%, #2454FF 100%)",
};

type AnimatedOrbProps = {
  tone?: Tone;
  /** Rotation period in seconds. */
  speed?: number;
  /** Blur radius in px. Larger = more diffuse. */
  blur?: number;
  /** Opacity 0-1. */
  opacity?: number;
  /** Scale factor; 1.0 fills parent. */
  scale?: number;
  /** Additional class names on the outer wrapper. */
  className?: string;
};

/**
 * Stripe-style rotating gradient orb. A conic gradient on a large blurred
 * blob that slowly rotates and subtly morphs. Respects prefers-reduced-motion
 * by rendering a static snapshot. Animates the `transform` property only so
 * the blur layer stays composited on the GPU.
 */
export function AnimatedOrb({
  tone = "brand",
  speed = 38,
  blur = 70,
  opacity = 0.7,
  scale = 1.6,
  className,
}: AnimatedOrbProps) {
  const reduce = useReducedMotion();
  const background = toneGradients[tone];

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <motion.div
        className="absolute left-1/2 top-1/2 aspect-square w-[130vmin] -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{ opacity }}
        animate={
          reduce
            ? undefined
            : {
                rotate: [0, 360],
                scale: [scale, scale * 1.06, scale * 0.98, scale],
              }
        }
        transition={
          reduce
            ? undefined
            : {
                rotate: {
                  duration: speed,
                  ease: "linear",
                  repeat: Infinity,
                },
                scale: {
                  duration: speed / 2.2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                },
              }
        }
      >
        <div
          className="absolute inset-0"
          style={{
            background,
            filter: `blur(${blur}px) saturate(1.15)`,
            borderRadius: "46% 54% 61% 39% / 52% 41% 59% 48%",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 50%, black 45%, transparent 78%)",
            maskImage:
              "radial-gradient(circle at 50% 50%, black 45%, transparent 78%)",
          }}
        />
      </motion.div>

      {/* Secondary counter-rotating orb for depth */}
      <motion.div
        className="absolute left-1/2 top-1/2 aspect-square w-[85vmin] -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{ opacity: opacity * 0.65 }}
        animate={reduce ? undefined : { rotate: [360, 0] }}
        transition={
          reduce
            ? undefined
            : { duration: speed * 1.5, ease: "linear", repeat: Infinity }
        }
      >
        <div
          className="absolute inset-0"
          style={{
            background,
            filter: `blur(${blur * 1.1}px) saturate(1.1)`,
            borderRadius: "60% 40% 44% 56% / 45% 60% 40% 55%",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 50%, black 42%, transparent 74%)",
            maskImage:
              "radial-gradient(circle at 50% 50%, black 42%, transparent 74%)",
          }}
        />
      </motion.div>
    </div>
  );
}
