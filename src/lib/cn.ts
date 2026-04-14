import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names safely: clsx for conditional composition,
 * tailwind-merge for resolving conflicts (e.g. px-4 vs px-6).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
