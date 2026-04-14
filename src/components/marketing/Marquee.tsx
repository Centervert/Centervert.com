import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type MarqueeProps = {
  items: ReactNode[];
  /** Duration in seconds for one full cycle. */
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
  /** Adds gradient fade masks at edges. */
  fade?: boolean;
};

/**
 * Simple infinite-scroll marquee. Renders children twice for seamless loop.
 * Respects prefers-reduced-motion via the global CSS rule.
 */
export function Marquee({
  items,
  speed = 40,
  pauseOnHover = true,
  className,
  fade = true,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group relative w-full overflow-hidden",
        fade && "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
