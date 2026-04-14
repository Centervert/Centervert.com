"use client";

import { ArrowUpRight, Cable, Code2, Cpu, Globe, Palette, Shield } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { Badge } from "@/components/ui/Badge";
import { services } from "@/lib/services";
import { lifecycleLabels } from "@/lib/routes";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/motion";

const iconMap = { Cpu, Code2, Globe, Palette, Cable, Shield };

export function CapabilitiesGrid() {
  return (
    <Section id="services" tone="white" padding="lg" bordered ariaLabelledBy="capabilities-heading">
      <div className="max-w-3xl">
        <Eyebrow>What We Deliver</Eyebrow>
        <Heading as="h2" size="display-lg" id="capabilities-heading" className="mt-5">
          Six capabilities. <span className="text-cv-black/35">One connected system.</span>
        </Heading>
        <Text size="lg" tone="muted" className="mt-6 max-w-xl">
          Each capability is tagged to the stages of the lifecycle where it lives.
          Most engagements touch more than one.
        </Text>
      </div>

      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service) => {
          const Icon = iconMap[service.iconName];
          return (
            <motion.li key={service.slug} variants={fadeInUp}>
              <Link
                href={service.href}
                className="group relative flex h-full flex-col gap-5 rounded-2xl border border-cv-black/5 bg-smoke/60 p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-cv-black/15 hover:bg-white hover:shadow-[var(--shadow-3)]"
              >
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-evergreen text-highlight transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-cv-black/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-evergreen" />
                </div>
                <div>
                  <h3 className="font-serif text-[1.5rem] font-medium leading-tight text-cv-black">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-cv-black/55">
                    {service.tagline}
                  </p>
                </div>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {service.lifecycle.map((stage) => (
                    <Badge key={stage} tone="outline" className="text-[10px]">
                      {lifecycleLabels[stage]}
                    </Badge>
                  ))}
                </div>
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    </Section>
  );
}
