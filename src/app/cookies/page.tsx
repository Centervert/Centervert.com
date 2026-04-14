import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Centervert uses cookies and similar technologies on our website. Greenville, SC.",
};

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-smoke">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-32 pb-12 text-center md:pt-40 md:pb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
          Legal
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-cv-black md:text-[3.25rem] md:leading-[1.15]">
          Cookie Policy
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cv-black/60 md:text-lg">
          How we use cookies and similar technologies when you visit
          centervert.com.
        </p>
        <p className="mt-4 text-sm text-cv-black/40">
          Last updated: March 2026
        </p>
      </section>

      {/* Content */}
      <section className="border-y border-cv-black/5 bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-cv-black md:text-2xl">
                1. What are cookies?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-cv-black/70">
                Cookies are small text files that a website stores on your
                device when you visit. They help the site remember your
                preferences, keep you signed in, and understand how the site is
                used. We may also use similar technologies such as local
                storage, pixels, or scripts. In this policy we use
                &quot;cookies&quot; to refer to these technologies collectively.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight text-cv-black md:text-2xl">
                2. How we use cookies
              </h2>
              <p className="mt-3 text-base leading-relaxed text-cv-black/70">
                We use cookies to make our website function properly (e.g.,
                security, load balancing), to remember your choices and settings,
                and to analyze how visitors use our site so we can improve it.
                We do not use cookies to track you across third-party sites for
                advertising in a way that identifies you personally, unless you
                have consented or we have a legitimate interest and have
                disclosed it in our Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight text-cv-black md:text-2xl">
                3. Types of cookies we use
              </h2>
              <ul className="mt-3 list-inside list-disc space-y-2 text-base leading-relaxed text-cv-black/70">
                <li>
                  <strong className="text-cv-black">Strictly necessary:</strong>{" "}
                  Required for the site to work (e.g., security, routing). These
                  generally do not require consent under applicable law.
                </li>
                <li>
                  <strong className="text-cv-black">Functional:</strong> Remember
                  your preferences (e.g., region, language) to improve your
                  experience.
                </li>
                <li>
                  <strong className="text-cv-black">Analytics:</strong> Help us
                  understand how many people visit, which pages are viewed, and
                  how the site performs. We may use first-party or third-party
                  tools; where we use third parties, we require them to use data
                  only to provide and improve our services.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight text-cv-black md:text-2xl">
                4. Your choices
              </h2>
              <p className="mt-3 text-base leading-relaxed text-cv-black/70">
                Most browsers let you block or delete cookies through their
                settings. Blocking all cookies may affect how the site works.
                Where we use optional (non–strictly necessary) cookies, we will
                respect your consent choices. You can also contact us at{" "}
                <a
                  href="mailto:connect@centervert.com"
                  className="text-evergreen underline hover:no-underline"
                >
                  connect@centervert.com
                </a>{" "}
                with questions about our use of cookies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight text-cv-black md:text-2xl">
                5. Updates
              </h2>
              <p className="mt-3 text-base leading-relaxed text-cv-black/70">
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or in law. We will post the revised
                policy on this page and update the &quot;Last updated&quot; date. We
                encourage you to review this page periodically.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight text-cv-black md:text-2xl">
                6. More information
              </h2>
              <p className="mt-3 text-base leading-relaxed text-cv-black/70">
                For details on how we collect, use, and protect your personal
                information, see our{" "}
                <Link
                  href="/privacy"
                  className="text-evergreen underline hover:no-underline"
                >
                  Privacy Policy
                </Link>
                . For general terms of use, see our{" "}
                <Link
                  href="/terms"
                  className="text-evergreen underline hover:no-underline"
                >
                  Terms of Service
                </Link>
                . Contact: Centervert LLC, 2 W Washington St, Suite 200,
                Greenville, SC 29601;{" "}
                <a
                  href="mailto:connect@centervert.com"
                  className="text-evergreen underline hover:no-underline"
                >
                  connect@centervert.com
                </a>
                ; (864) 987-8282.
              </p>
            </div>
          </div>
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
                {legalLinks.map((item) => (
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
