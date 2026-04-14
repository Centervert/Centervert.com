"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "AI Marketplace", href: "/marketplace" },
  { label: "FAQ", href: "#faq" },
  { label: "Connect", href: "#connect" },
  { label: "News", href: "/news" },
];

function scrollToSection(href: string) {
  if (href.startsWith("#")) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed left-1/2 top-6 z-50 w-[95%] max-w-4xl -translate-x-1/2">
      <div
        className="flex items-center justify-between rounded-full border border-white/10 bg-slate-950/80 px-6 py-3 shadow-2xl backdrop-blur-md"
        style={{
          WebkitBackdropFilter: "blur(12px)",
          backdropFilter: "blur(12px)",
        }}
      >
        <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
          <Image
            src="/images/centervert-logo-white.png"
            alt="Centervert"
            width={160}
            height={40}
            className="h-[34px] w-auto"
            priority
          />
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden md:block">
          <Link
            href="/book"
            className="rounded-full bg-highlight px-5 py-2.5 text-sm font-semibold text-cv-black transition-all hover:bg-highlight/90 hover:shadow-lg"
          >
            Book A Call
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="mt-2 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-2xl backdrop-blur-md md:hidden"
          style={{
            WebkitBackdropFilter: "blur(12px)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="flex flex-col gap-1 px-6 py-6">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileOpen(false);
                    scrollToSection(link.href);
                  }}
                  className="py-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="py-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/book"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-highlight px-5 py-2.5 text-sm font-semibold text-cv-black transition-all hover:bg-highlight/90"
            >
              Book A Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
