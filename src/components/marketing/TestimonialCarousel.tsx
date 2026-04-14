"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { cn } from "@/lib/cn";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
};

type CarouselProps = {
  testimonials: Testimonial[];
  interval?: number;
  className?: string;
};

export function TestimonialCarousel({
  testimonials,
  interval = 6500,
  className,
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, interval);
    return () => clearInterval(id);
  }, [paused, testimonials.length, interval]);

  const active = testimonials[index];

  return (
    <div
      className={cn("relative mx-auto max-w-4xl", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Quote
        aria-hidden
        className="absolute -top-6 left-0 h-14 w-14 text-highlight/50 md:-left-6"
      />
      <div className="min-h-[240px]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <p className="font-serif text-[1.5rem] leading-[1.3] tracking-tight text-white text-balance md:text-[2rem]">
              &ldquo;{active.quote}&rdquo;
            </p>
            <footer className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-evergreen text-[13px] font-bold text-highlight ring-1 ring-white/15">
                {active.initials}
              </div>
              <div>
                <div className="text-sm font-medium text-white">{active.name}</div>
                <div className="text-[13px] text-white/60">
                  {active.role} &middot; {active.company}
                </div>
              </div>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="mt-10 flex items-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial ${i + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === index ? "w-10 bg-highlight" : "w-5 bg-white/20 hover:bg-white/40"
            )}
          />
        ))}
      </div>
    </div>
  );
}
