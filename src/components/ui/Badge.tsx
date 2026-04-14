import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "neutral" | "evergreen" | "highlight" | "royal" | "outline" | "dark";
const toneClasses: Record<Tone, string> = {
  neutral: "bg-gray-100 text-gray-700 ring-1 ring-inset ring-gray-200",
  evergreen: "bg-evergreen-50 text-evergreen-700 ring-1 ring-inset ring-evergreen-200",
  highlight: "bg-highlight-100 text-highlight-800 ring-1 ring-inset ring-highlight-300",
  royal: "bg-royal-50 text-royal-700 ring-1 ring-inset ring-royal-200",
  outline: "bg-transparent text-cv-black/70 ring-1 ring-inset ring-cv-black/15",
  dark: "bg-white/10 text-white ring-1 ring-inset ring-white/20 backdrop-blur-sm",
};

type BadgeProps = {
  tone?: Tone;
  className?: string;
  children: ReactNode;
};

export function Badge({ tone = "neutral", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
