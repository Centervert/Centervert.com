import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

/* -------------------------------------------------------------------------
   Eyebrow: small, uppercase, tracked section label.
   ------------------------------------------------------------------------- */

type EyebrowProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export function Eyebrow({ as: Tag = "p", className, children }: EyebrowProps) {
  return (
    <Tag
      className={cn(
        "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-cv-black/40",
        className
      )}
    >
      {children}
    </Tag>
  );
}

/* -------------------------------------------------------------------------
   Heading: editorial display (Recia serif) at display sizes, Effra sans at
   h3+. Override family via `font="serif"` or `font="sans"`.
   ------------------------------------------------------------------------- */

type HeadingLevel = 1 | 2 | 3 | 4;
type HeadingSize =
  | "display-2xl"
  | "display-xl"
  | "display-lg"
  | "h1"
  | "h2"
  | "h3"
  | "h4";

const sizeClasses: Record<HeadingSize, string> = {
  "display-2xl":
    "text-[clamp(3.5rem,8vw,5.5rem)] leading-[1.04] tracking-[-0.02em] font-medium",
  "display-xl":
    "text-[clamp(3rem,6vw,4.5rem)] leading-[1.04] tracking-[-0.02em] font-medium",
  "display-lg":
    "text-[clamp(2.5rem,5vw,3.75rem)] leading-[1.06] tracking-[-0.02em] font-medium",
  h1: "text-[clamp(2rem,4vw,3rem)] leading-[1.08] tracking-[-0.02em] font-medium",
  h2: "text-[clamp(1.75rem,3vw,2.25rem)] leading-[1.15] tracking-[-0.015em] font-semibold",
  h3: "text-[1.5rem] md:text-[1.75rem] leading-[1.25] font-semibold tracking-tight",
  h4: "text-[1.25rem] md:text-[1.375rem] leading-[1.3] font-semibold tracking-tight",
};

const serifSizes: HeadingSize[] = ["display-2xl", "display-xl", "display-lg", "h1", "h2"];

type HeadingProps = {
  as?: `h${HeadingLevel}` | "p" | "span" | "div";
  size?: HeadingSize;
  font?: "serif" | "sans";
  balance?: boolean;
  className?: string;
  children: ReactNode;
  id?: string;
};

export function Heading({
  as: Tag = "h2",
  size = "h2",
  font,
  balance = true,
  className,
  children,
  id,
}: HeadingProps) {
  const useSerif = font ? font === "serif" : serifSizes.includes(size);
  return (
    <Tag
      id={id}
      className={cn(
        sizeClasses[size],
        useSerif ? "font-serif" : "font-sans",
        balance && "text-balance",
        className
      )}
    >
      {children}
    </Tag>
  );
}

/* -------------------------------------------------------------------------
   Text: body copy helper with consistent sizes.
   ------------------------------------------------------------------------- */

type TextSize = "lg" | "md" | "sm";
const textSizes: Record<TextSize, string> = {
  lg: "text-[1.125rem] leading-[1.6]",
  md: "text-[1rem] leading-[1.6]",
  sm: "text-[0.875rem] leading-[1.5]",
};

type Tone = "default" | "muted" | "subtle" | "inverse" | "inverse-muted";
const toneClasses: Record<Tone, string> = {
  default: "text-cv-black",
  muted: "text-cv-black/60",
  subtle: "text-cv-black/40",
  inverse: "text-white",
  "inverse-muted": "text-white/70",
};

type TextProps = {
  as?: ElementType;
  size?: TextSize;
  tone?: Tone;
  balance?: boolean;
  pretty?: boolean;
  className?: string;
  children: ReactNode;
};

export function Text({
  as: Tag = "p",
  size = "md",
  tone = "muted",
  balance,
  pretty = true,
  className,
  children,
}: TextProps) {
  return (
    <Tag
      className={cn(
        textSizes[size],
        toneClasses[tone],
        balance && "text-balance",
        pretty && "text-pretty",
        className
      )}
    >
      {children}
    </Tag>
  );
}
