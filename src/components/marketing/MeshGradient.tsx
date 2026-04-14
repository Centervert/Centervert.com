import { cn } from "@/lib/cn";

type Tone = "light" | "dark";

/**
 * Static (non-animated) mesh gradient using the --gradient-mesh-* tokens
 * plus an optional film-grain overlay. Safe to use behind hero content.
 * Zero JS, respects reduced-motion by being static.
 */
export function MeshGradient({
  tone = "light",
  grain = true,
  className,
}: {
  tone?: Tone;
  grain?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10", className)}
    >
      <div
        className={cn(
          "absolute inset-0",
          tone === "light" ? "bg-mesh-light" : "bg-mesh-dark"
        )}
      />
      {/* Soft orbs for Stripe-style depth */}
      <div
        className={cn(
          "absolute -top-1/3 -left-1/4 h-[60vh] w-[60vh] rounded-full opacity-40 blur-[120px]",
          tone === "light" ? "bg-highlight-200" : "bg-royal-500/40"
        )}
      />
      <div
        className={cn(
          "absolute -bottom-1/4 right-0 h-[55vh] w-[55vh] rounded-full opacity-30 blur-[120px]",
          tone === "light" ? "bg-royal-200" : "bg-highlight-500/30"
        )}
      />
      {grain ? (
        <div
          className="absolute inset-0 opacity-[0.35] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`,
            backgroundSize: "180px 180px",
          }}
        />
      ) : null}
    </div>
  );
}
