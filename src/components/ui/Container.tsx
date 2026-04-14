import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Size = "readable" | "wide" | "full";

const sizeStyles: Record<Size, string> = {
  readable: "max-w-3xl",
  wide: "max-w-6xl",
  full: "max-w-[88rem]",
};

type ContainerProps = {
  as?: ElementType;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function Container({
  as: Tag = "div",
  size = "wide",
  className,
  children,
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full px-6 md:px-8", sizeStyles[size], className)}>
      {children}
    </Tag>
  );
}
