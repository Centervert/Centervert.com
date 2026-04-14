import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "horizontal" | "icon" | "vertical";
type Color = "black" | "evergreen" | "highlight" | "royal" | "smoke" | "white";

type LogoProps = {
  variant?: Variant;
  color?: Color;
  /** If true, wrap in a Link to "/". Defaults to true. */
  link?: boolean;
  className?: string;
  /** Pixel height of the rendered logo. */
  height?: number;
  /** Accessible label, default "Centervert". */
  label?: string;
};

const dimensions: Record<Variant, { w: number; h: number }> = {
  horizontal: { w: 720, h: 160 },
  icon: { w: 240, h: 240 },
  vertical: { w: 480, h: 480 },
};

export function Logo({
  variant = "horizontal",
  color = "evergreen",
  link = true,
  className,
  height = 32,
  label = "Centervert",
}: LogoProps) {
  const src = `/brand/logos/centervert.logo.${variant}.${color}.png`;
  const { w, h } = dimensions[variant];
  const img = (
    <Image
      src={src}
      alt={label}
      width={w}
      height={h}
      style={{ height: `${height}px`, width: "auto" }}
      className={cn("block", className)}
      priority={link}
    />
  );
  if (!link) return img;
  return (
    <Link href="/" aria-label={label} className="inline-flex items-center">
      {img}
    </Link>
  );
}
