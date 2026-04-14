import { cn } from "@/lib/cn";

type DividerProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function Divider({ tone = "light", className }: DividerProps) {
  return (
    <hr
      className={cn(
        "border-0 h-px w-full",
        tone === "light" ? "bg-cv-black/8" : "bg-white/15",
        className
      )}
    />
  );
}
