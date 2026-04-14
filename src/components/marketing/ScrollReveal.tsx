"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/cn";

type ScrollRevealProps = {
  as?: "div" | "section" | "article" | "ul" | "ol" | "header" | "footer";
  variants?: Variants;
  stagger?: boolean;
  delay?: number;
  className?: string;
  children: ReactNode;
};

/**
 * Wraps children in a viewport-triggered framer-motion container. By default
 * uses `fadeInUp` on entry. Set `stagger` when you want the container to
 * orchestrate the entry of direct-child motion elements via `motion.*`.
 */
export function ScrollReveal({
  as: Tag = "div",
  variants,
  stagger,
  delay,
  className,
  children,
}: ScrollRevealProps) {
  const MotionTag = motion[Tag];
  const chosen = variants ?? (stagger ? staggerContainer : fadeInUp);
  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={chosen}
      transition={delay ? { delay } : undefined}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Single animated child, typically used inside a ScrollReveal(stagger).
 */
export function RevealItem({
  as: Tag = "div",
  variants = fadeInUp,
  className,
  children,
}: {
  as?: "div" | "li" | "p" | "span" | "article";
  variants?: Variants;
  className?: string;
  children: ReactNode;
}) {
  const MotionTag = motion[Tag];
  return (
    <MotionTag variants={variants} className={cn(className)}>
      {children}
    </MotionTag>
  );
}
