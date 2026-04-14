import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Monitor, Lock, Wifi, Camera } from "lucide-react";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Low Voltage & AV Systems",
  description:
    "Conference room AV, access control, surveillance, digital signage, and networking. Crestron, Accusis, and VIXIS certified. Serving church, hospitality, government, and corporate.",
};

const services = [
  {
    icon: Monitor,
    title: "Conference Room AV",
    description:
      "Fully integrated meeting rooms with cameras, microphones, displays, and control systems that just work.",
    bullets: [
      "PTZ cameras and ceiling microphone arrays",
      "Large format displays and video walls",
      "Control systems (Crestron, Extron, Atlona)",
      "Microsoft Teams and Zoom Room integrations",
      "Remote management and monitoring",
    ],
  },
  {
    icon: Lock,
    title: "Access Control & Surveillance",
    description:
      "Enterprise security systems that protect your people and your assets - installed and integrated with your IT.",
    bullets: [
      "Card reader and keypad access control systems",
      "IP camera networks and NVR setup",
      "Intercom and visitor management systems",
      "Cloud-managed video storage and review",
      "Integration with existing security infrastructure",
    ],
  },
  {
    icon: Monitor,
    title: "Digital Signage",
    description:
      "Managed digital signage networks for lobbies, restaurants, retail floors, and event spaces.",
    bullets: [
      "Commercial display procurement and mounting",
      "Content management system setup",
      "Scheduled and triggered content playback",
      "Remote update and monitoring capabilities",
      "POS display and menu board installation",
    ],
  },
  {
    icon: Wifi,
    title: "Networking & Wi-Fi",
    description:
      "Structured cabling and wireless infrastructure built for reliability - not just coverage.",
    bullets: [
      "Structured cabling (Cat6/Cat6A)",
      "Enterprise Wi-Fi (UniFi, Cisco Meraki, Aruba)",
      "Network switching and routing",
      "VLAN segmentation and network security",
      "Site surveys and coverage planning",
    ],
  },
];

const verticals = [
  {
    name: "Church & House of Worship",
    description:
      "Sanctuary AV, streaming systems, broadcast-quality audio, and lobby displays - designed for your congregation and your budget.",
  },
  {
    name: "Hospitality",
    description:
      "Hotel common area AV, in-room systems, digital signage, and property-wide networking for guests and operations.",
  },
  {
    name: "Government & Municipal",
    description:
      "Council chambers, courtrooms, public safety facilities, and municipal buildings - compliant, reliable, and built to last.",
  },
  {
    name: "Corporate",
    description:
      "Executive boardrooms, training facilities, all-hands spaces, and distributed office AV - integrated with your IT stack.",
  },
];

const certifications = [
  "Crestron Certified",
  "Accusis Certified",
  "VIXIS Certified",
  "UniFi Certified",
  "Dante Audio Certified",
];

const steps = [
  {
    step: "1",
    title: "Site Assessment",
    description:
      "We walk the space, understand your use case, and design a system that fits your room, your workflow, and your budget.",
  },
  {
    step: "2",
    title: "Design & Procurement",
    description:
      "We spec the right equipment, handle procurement, and coordinate with your GC or facilities team on scheduling.",
  },
  {
    step: "3",
    title: "Installation & Integration",
    description:
      "We install, configure, and integrate with your IT environment. We don&apos;t leave until everything works the way it should.",
  },
];

export default function LowVoltagePage() {
  return (
    <div className="min-h-screen bg-smoke">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-32 pb-12 text-center md:pt-40 md:pb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
          Low Voltage & AV
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-cv-black md:text-[3.25rem] md:leading-[1.15]">
          AV and Security Systems That Actually Work
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cv-black/60 md:text-lg">
          Conference rooms, surveillance, digital signage, and structured
          cabling - installed by certified technicians and integrated with your
          IT infrastructure.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="/book"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-highlight px-6 py-3 text-sm font-semibold text-cv-black transition-all hover:bg-highlight/90 hover:shadow-lg"
          >
            Request a Site Assessment
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-cv-black/5 bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-cv-black/40">
              What We Install
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-cv-black md:text-[2.5rem]">
              The full low voltage stack.
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="flex flex-col rounded-2xl border border-cv-black/10 bg-white p-6 md:p-8"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-evergreen/10">
                    <Icon className="h-5 w-5 text-evergreen" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-cv-black">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cv-black/60">
                    {svc.description}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {svc.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-3 text-sm leading-relaxed text-cv-black/80"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-evergreen" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
            Verticals
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-cv-black md:text-[2.5rem]">
            We know your industry.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-cv-black/50">
            AV isn&apos;t one-size-fits-all. We work across four major verticals and
            understand the specific requirements, workflows, and compliance
            considerations each one brings.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {verticals.map((v) => (
              <div
                key={v.name}
                className="rounded-2xl border border-cv-black/10 bg-white p-6"
              >
                <h3 className="text-base font-bold text-cv-black">{v.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cv-black/60">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="border-y border-cv-black/5 bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
            Certifications
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-cv-black md:text-[2.5rem]">
            Certified where it counts.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-cv-black/50">
            Our technicians carry manufacturer certifications so your warranty
            is valid, your installation is supported, and your system is
            configured correctly from day one.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="rounded-full border border-evergreen/20 bg-evergreen/5 px-5 py-2.5 text-sm font-medium text-evergreen"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-cv-black md:text-[2.5rem]">
            From assessment to operational.
          </h2>
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step} className="relative">
                <span className="text-4xl font-bold text-evergreen/20">
                  {s.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-cv-black">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cv-black/60">
                  {s.description}
                </p>
                {s.step !== "3" && (
                  <div className="absolute -right-5 top-8 hidden text-cv-black/15 sm:block">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-cv-black/5 bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-cv-black md:text-[2rem]">
            Ready to upgrade your space?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cv-black/60">
            Whether you&apos;re building a new conference room, expanding a security
            system, or upgrading your network - we start with a free on-site
            assessment.
          </p>
          <a
            href="/book"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-highlight px-8 py-4 text-sm font-semibold text-cv-black transition-all hover:bg-highlight/90 hover:shadow-lg"
          >
            Request a Site Assessment
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cv-black/5 bg-smoke px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-5">
            <div className="md:col-span-2">
              <Image
                src="/images/centervert-logo-black.png"
                alt="Centervert"
                width={160}
                height={40}
                className="h-7 w-auto"
              />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-cv-black/50">
                AI, software, branding, AV, and managed IT - one team that
                builds, connects, and runs your entire tech stack.
              </p>
              <div className="mt-4 flex flex-col gap-1.5 text-sm text-cv-black/50">
                <a
                  href="mailto:connect@centervert.com"
                  className="transition-colors hover:text-cv-black"
                >
                  connect@centervert.com
                </a>
                <a
                  href="tel:8649878282"
                  className="transition-colors hover:text-cv-black"
                >
                  (864) 987-8282
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-cv-black">Services</h4>
              <ul className="mt-4 space-y-2.5 text-sm text-cv-black/50">
                {[
                  { label: "AI & Automation", href: "/services/ai-automation" },
                  { label: "Custom Software", href: "/services/custom-software" },
                  { label: "Web Design", href: "/services/web-development" },
                  { label: "Brand Design", href: "/services/brand-design" },
                  { label: "Low Voltage & AV", href: "/services/low-voltage" },
                  { label: "Managed IT", href: "/services/managed-it" },
                ].map((s) => (
                  <li key={s.label}>
                    <Link
                      href={s.href}
                      className="transition-colors hover:text-cv-black"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-cv-black">Company</h4>
              <ul className="mt-4 space-y-2.5 text-sm text-cv-black/50">
                {[
                  { label: "About", href: "/about" },
                  { label: "Clients", href: "/#services" },
                  { label: "Careers", href: "/about" },
                  { label: "News", href: "/news" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-cv-black"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-cv-black">Legal</h4>
              <ul className="mt-4 space-y-2.5 text-sm text-cv-black/50">
                {[
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Terms of Service", href: "/terms" },
                  { label: "Cookie Policy", href: "/cookies" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-cv-black"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-cv-black/5 pt-8 text-xs text-cv-black/30 sm:flex-row">
            <p>&copy; 2026 Centervert. All rights reserved.</p>
            <p>Greenville, SC</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
