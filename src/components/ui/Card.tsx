import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "default" | "bordered" | "elevated" | "gradient" | "dark";

const variantClasses: Record<Variant, string> = {
  default: "bg-white ring-1 ring-inset ring-cv-black/5",
  bordered: "bg-white ring-1 ring-inset ring-gray-200",
  elevated: "bg-white shadow-[var(--shadow-2)] ring-1 ring-inset ring-cv-black/5",
  gradient:
    "bg-white ring-1 ring-inset ring-cv-black/5 before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:p-px before:bg-gradient-to-br before:from-highlight-300/50 before:via-transparent before:to-royal-300/50",
  dark: "bg-evergreen-900 ring-1 ring-inset ring-white/10 text-white",
};

type CardProps = {
  variant?: Variant;
  href?: string;
  interactive?: boolean;
  className?: string;
  children: ReactNode;
};

export function Card({
  variant = "default",
  href,
  interactive,
  className,
  children,
}: CardProps) {
  const isInteractive = interactive || Boolean(href);
  const classes = cn(
    "relative rounded-2xl p-6 transition-all duration-300 ease-out",
    variantClasses[variant],
    isInteractive &&
      "hover:-translate-y-0.5 hover:shadow-[var(--shadow-3)] hover:ring-cv-black/10",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return <div className={classes}>{children}</div>;
}
