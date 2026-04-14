import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type Tone = "smoke" | "white" | "evergreen" | "dark" | "mesh-light" | "mesh-dark";

const toneStyles: Record<Tone, string> = {
  smoke: "bg-smoke text-cv-black",
  white: "bg-white text-cv-black",
  evergreen: "bg-evergreen text-white",
  dark: "bg-cv-black text-white",
  "mesh-light": "bg-mesh-light text-cv-black",
  "mesh-dark": "bg-mesh-dark text-white",
};

type Padding = "sm" | "md" | "lg" | "xl";
const paddingStyles: Record<Padding, string> = {
  sm: "py-16 md:py-20",
  md: "py-20 md:py-28",
  lg: "py-24 md:py-32",
  xl: "py-28 md:py-40",
};

type SectionProps = {
  id?: string;
  tone?: Tone;
  padding?: Padding;
  bordered?: boolean;
  containerSize?: "readable" | "wide" | "full";
  className?: string;
  children: ReactNode;
  /** Aria label for screen readers when there is no visible heading. */
  ariaLabel?: string;
  ariaLabelledBy?: string;
};

export function Section({
  id,
  tone = "smoke",
  padding = "md",
  bordered,
  containerSize = "wide",
  className,
  children,
  ariaLabel,
  ariaLabelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "relative w-full overflow-hidden",
        toneStyles[tone],
        paddingStyles[padding],
        bordered && "border-y border-cv-black/5",
        className
      )}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
