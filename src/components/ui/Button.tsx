import Link from "next/link";
import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "link" | "dark";
type Size = "sm" | "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-highlight text-cv-black shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset] hover:bg-highlight-400 active:bg-highlight-500 focus-visible:ring-2 focus-visible:ring-highlight-500",
  secondary:
    "bg-white text-cv-black border border-gray-200 hover:border-gray-300 hover:bg-gray-50 active:bg-gray-100",
  ghost:
    "bg-transparent text-cv-black border border-cv-black/10 hover:border-cv-black/20 hover:bg-cv-black/5",
  link:
    "text-evergreen underline decoration-evergreen/30 underline-offset-4 hover:decoration-evergreen px-0",
  dark:
    "bg-cv-black text-white hover:bg-gray-800 active:bg-gray-900",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: never;
  };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-out outline-none focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap";

export const Button = forwardRef<HTMLElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", leadingIcon, trailingIcon, className, children, ...rest },
  ref
) {
  const classes = cn(
    baseClasses,
    variant !== "link" ? sizeStyles[size] : "",
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {leadingIcon ? <span className="shrink-0">{leadingIcon}</span> : null}
      {children}
      {trailingIcon ? <span className="shrink-0">{trailingIcon}</span> : null}
    </>
  );

  if ("href" in rest && rest.href) {
    const { href, ...anchorProps } = rest as ButtonAsLink;
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (isExternal) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...anchorProps}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        {...(anchorProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
});
