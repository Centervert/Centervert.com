"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardCheck,
  Hammer,
  Cable,
  LifeBuoy,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { services } from "@/lib/services";
import { lifecycleStages, lifecycleLabels, type LifecycleStage } from "@/lib/routes";

const stageIcons: Record<LifecycleStage, React.ComponentType<{ className?: string }>> = {
  plan: ClipboardCheck,
  build: Hammer,
  implement: Cable,
  support: LifeBuoy,
};

const stageCopy: Record<LifecycleStage, { headline: string; body: string }> = {
  plan: {
    headline: "Understand the system first.",
    body: "We listen to how the business works, find the bottlenecks, evaluate the tools already in place, and map what should be improved, replaced, or built. Discovery is not a formality. It's the diagnosis that makes every later decision work.",
  },
  build: {
    headline: "Build software that fits how the business actually runs.",
    body: "Custom applications, AI agents, workflow automation, and platform optimization. We pick the right tool for each problem, not a single hammer looking for nails.",
  },
  implement: {
    headline: "Software lives in a real environment.",
    body: "Networking, structured cabling, access control, AV, and deployment. The physical layer of the system has to be as solid as the code on top of it.",
  },
  support: {
    headline: "We stay involved.",
    body: "Managed IT, help desk, security, and ongoing strategy. Systems are not a project. They're a partnership that evolves with the business.",
  },
};

export function LifecycleDiagram() {
  const [active, setActive] = useState<LifecycleStage>("plan");

  return (
    <div className="relative">
      {/* Stage rail */}
      <div
        role="tablist"
        aria-label="Lifecycle of a Centervert engagement"
        className="relative grid grid-cols-2 gap-3 md:grid-cols-4"
      >
        {lifecycleStages.map((stage, index) => {
          const Icon = stageIcons[stage];
          const isActive = active === stage;
          return (
            <button
              key={stage}
              role="tab"
              aria-selected={isActive}
              aria-controls={`lifecycle-panel-${stage}`}
              id={`lifecycle-tab-${stage}`}
              onClick={() => setActive(stage)}
              onMouseEnter={() => setActive(stage)}
              onFocus={() => setActive(stage)}
              className={cn(
                "group relative flex flex-col items-start gap-3 rounded-2xl border p-4 text-left transition-all duration-300 sm:gap-4 sm:p-5 md:p-6",
                isActive
                  ? "border-cv-black/20 bg-white shadow-[var(--shadow-3)]"
                  : "border-cv-black/5 bg-white/60 hover:border-cv-black/10 hover:bg-white"
              )}
            >
              <div className="flex w-full items-center justify-between">
                <span
                  className={cn(
                    "inline-flex h-9 w-9 items-center justify-center rounded-xl transition-colors sm:h-10 sm:w-10",
                    isActive
                      ? "bg-evergreen text-highlight"
                      : "bg-cv-black/5 text-cv-black/60 group-hover:bg-cv-black/10"
                  )}
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
                <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.2em] text-cv-black/40 sm:text-[11px]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <div className="font-sans text-[1.25rem] font-medium leading-tight text-cv-black sm:text-[1.5rem]">
                  {lifecycleLabels[stage]}
                </div>
                <div className="mt-1 text-[12px] text-cv-black/50 sm:text-[13px]">
                  {stage === "plan" && "Discovery & strategy"}
                  {stage === "build" && "Software & automation"}
                  {stage === "implement" && "Infrastructure & AV"}
                  {stage === "support" && "Managed services"}
                </div>
              </div>
              {isActive ? (
                <motion.div
                  layoutId="lifecycle-underline"
                  className="absolute inset-x-5 bottom-0 h-[3px] rounded-full bg-highlight"
                  transition={{ type: "spring", stiffness: 360, damping: 32 }}
                />
              ) : null}
            </button>
          );
        })}
      </div>

      {/* Active panel */}
      <div className="mt-8 overflow-hidden rounded-3xl border border-cv-black/5 bg-white shadow-[var(--shadow-2)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            id={`lifecycle-panel-${active}`}
            role="tabpanel"
            aria-labelledby={`lifecycle-tab-${active}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1.3fr_1fr] md:gap-12 md:p-12"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-evergreen">
                {lifecycleLabels[active]}
              </p>
              <h3 className="mt-3 font-sans text-[1.5rem] font-medium leading-[1.15] tracking-tight text-cv-black sm:text-[1.75rem] md:text-[2.25rem] md:leading-[1.1]">
                {stageCopy[active].headline}
              </h3>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-cv-black/60 md:text-base">
                {stageCopy[active].body}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cv-black/40">
                Capabilities inside this stage
              </p>
              <ul className="mt-4 space-y-2">
                {services
                  .filter((s) => s.lifecycle.includes(active))
                  .map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={s.href}
                        className="group flex items-center justify-between gap-3 rounded-xl border border-cv-black/5 bg-smoke/60 px-4 py-3 transition-all duration-200 hover:border-cv-black/15 hover:bg-white"
                      >
                        <div>
                          <div className="text-sm font-medium text-cv-black">
                            {s.title}
                          </div>
                          <div className="mt-0.5 text-[12.5px] text-cv-black/55">
                            {s.tagline}
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 shrink-0 text-cv-black/30 transition-all group-hover:translate-x-0.5 group-hover:text-evergreen" />
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
