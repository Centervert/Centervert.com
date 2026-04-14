"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/cn";

type NavLink = { label: string; href: string };

const primaryLinks: NavLink[] = [
  { label: "Services", href: routes.services.index },
  { label: "Work", href: routes.work },
  { label: "About", href: routes.about },
  { label: "News", href: routes.news },
  { label: "Contact", href: routes.contact },
];

type NavProps = {
  /**
   * When true, the nav starts transparent with white text so it can sit over
   * a dark hero. Once the user scrolls past the hero, it transitions to the
   * standard light glassy state. Default false (transparent with dark text
   * over a light hero).
   */
  overDark?: boolean;
};

export function Nav({ overDark = false }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isDarkTop = overDark && !scrolled;
  const linkClass = isDarkTop
    ? "text-white/80 hover:text-white"
    : "text-cv-black/70 hover:text-cv-black";
  const iconButtonClass = isDarkTop
    ? "border-white/25 bg-white/10 text-white"
    : "border-cv-black/10 bg-white text-cv-black";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-[var(--shadow-1)]"
          : "bg-transparent"
      )}
    >
      <Container size="full">
        <div className="flex h-16 items-center justify-between md:h-20">
          <div className="flex items-center gap-10">
            <Logo
              variant="horizontal"
              color={isDarkTop ? "smoke" : "evergreen"}
              height={24}
            />
            <nav
              className="hidden items-center gap-7 md:flex"
              aria-label="Primary"
            >
              {primaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[13.5px] font-medium transition-colors",
                    linkClass
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={routes.bookTraining}
              className={cn(
                "hidden text-[13.5px] font-medium transition-colors md:inline-flex",
                linkClass
              )}
            >
              AI Training
            </Link>
            <Button
              href={routes.book}
              size="sm"
              variant="primary"
              trailingIcon={<ArrowRight className="h-4 w-4" />}
              className="hidden md:inline-flex"
            >
              Book a Call
            </Button>
            <button
              type="button"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors md:hidden",
                iconButtonClass
              )}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile sheet */}
      {open ? (
        <div className="md:hidden">
          <div className="border-t border-cv-black/5 bg-white shadow-[var(--shadow-3)]">
            <Container size="full">
              <nav className="flex flex-col gap-1 py-6" aria-label="Mobile">
                {primaryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-medium text-cv-black/80 transition-colors hover:bg-gray-50 hover:text-cv-black"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 flex flex-col gap-2">
                  <Button
                    href={routes.book}
                    variant="primary"
                    size="md"
                    trailingIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    Book a Strategy Call
                  </Button>
                  <Button href={routes.contactPhone} variant="ghost" size="md">
                    Call {routes.phoneDisplay}
                  </Button>
                </div>
              </nav>
            </Container>
          </div>
        </div>
      ) : null}
    </header>
  );
}
