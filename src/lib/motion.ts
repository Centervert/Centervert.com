import type { Variants, Transition } from "framer-motion";

/**
 * Shared framer-motion variants. All respect prefers-reduced-motion at the
 * CSS level via globals.css. Additionally, consumers can gate animation with
 * the `useReducedMotion` hook from framer-motion for finer-grained control.
 */

const easeOutExpo: Transition["ease"] = [0.16, 1, 0.3, 1];

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

/**
 * Default viewport config for scroll-triggered reveals. `once: true` avoids
 * re-triggering, and `margin` starts the animation slightly before the
 * element enters the viewport.
 */
export const viewportOnce = {
  once: true,
  margin: "0px 0px -10% 0px",
} as const;
