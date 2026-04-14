"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/cn";

type StatCounterProps = {
  value: number;
  /** Optional prefix like "$". */
  prefix?: string;
  /** Optional suffix like "%" or "+". */
  suffix?: string;
  /** Duration of the counter animation in ms. */
  duration?: number;
  className?: string;
  /** Whether to format with commas. */
  comma?: boolean;
};

export function StatCounter({
  value,
  prefix,
  suffix,
  duration = 1400,
  className,
  comma = true,
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const progress = Math.min(1, (t - start) / duration);
      // ease-out-expo
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.round(value * eased));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  const formatted = comma ? display.toLocaleString("en-US") : display.toString();
  return (
    <motion.span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {formatted}
      {suffix}
    </motion.span>
  );
}
