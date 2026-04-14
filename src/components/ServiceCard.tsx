"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Cpu,
  Code2,
  Globe,
  Palette,
  Cable,
  Shield,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  Code2,
  Globe,
  Palette,
  Cable,
  Shield,
};

interface ServiceCardProps {
  iconName: string;
  title: string;
  description: string;
  highlights: string[];
  badge?: string;
  href?: string;
}

export default function ServiceCard({
  iconName,
  title,
  description,
  highlights,
  badge,
  href,
}: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false);
  const Icon = iconMap[iconName] ?? Cpu;

  return (
    <div className="group rounded-2xl border border-cv-black/5 bg-smoke p-6 transition-all hover:border-cv-black/10 hover:shadow-lg md:p-8">
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-evergreen text-white">
          <Icon className="h-5 w-5" />
        </div>
        {badge && (
          <span className="rounded-full bg-highlight/20 px-3 py-1 text-xs font-medium text-evergreen">
            {badge}
          </span>
        )}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-cv-black">
        {href ? (
          <Link
            href={href}
            className="transition-colors hover:text-evergreen hover:underline"
          >
            {title}
          </Link>
        ) : (
          title
        )}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-cv-black/50">
        {description}
      </p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 flex items-center gap-1.5 text-sm font-medium text-evergreen transition-colors hover:text-evergreen/70"
      >
        {expanded ? "Show less" : "What's included"}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          expanded
            ? "mt-4 grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-2 border-t border-cv-black/5 pt-4">
            {highlights.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-cv-black/60"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-evergreen" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {href && (
        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-evergreen transition-colors hover:text-evergreen/70"
        >
          View packages
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </div>
  );
}
