import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Centervert collects, uses, and protects your information. Based in Greenville, SC.",
};

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-smoke">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-32 pb-12 text-center md:pt-40 md:pb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
          Legal
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-cv-black md:text-[3.25rem] md:leading-[1.15]">
          Privacy Policy
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cv-black/60 md:text-lg">
          How we collect, use, and protect your information when you use our
          website and services.
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
                1. Who we are
              </h2>
              <p className="mt-3 text-base leading-relaxed text-cv-black/70">
                Centervert LLC (&quot;Centervert,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is a
                technology company based in Greenville, South Carolina. We
                provide AI, software, branding, AV, and managed IT services. This
                policy describes how we handle personal information when you
                visit our website, contact us, or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight text-cv-black md:text-2xl">
                2. Information we collect
              </h2>
              <p className="mt-3 text-base leading-relaxed text-cv-black/70">
                We may collect information you provide directly (name, email,
                phone, company, and message content when you contact us or request
                a call), information from your use of our site (IP address,
                browser type, pages visited, and similar usage data), and
                information from cookies and similar technologies as described
                in our Cookie Policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight text-cv-black md:text-2xl">
                3. How we use your information
              </h2>
              <p className="mt-3 text-base leading-relaxed text-cv-black/70">
                We use the information we collect to respond to your inquiries,
                provide and improve our services, send relevant updates or
                marketing (where you have agreed), analyze site usage, and
                comply with legal obligations. We do not sell your personal
                information to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight text-cv-black md:text-2xl">
                4. Sharing and disclosure
              </h2>
              <p className="mt-3 text-base leading-relaxed text-cv-black/70">
                We may share information with service providers who assist us
                (e.g., hosting, email, analytics), when required by law, or to
                protect our rights and safety. We require these parties to
                protect your information consistent with this policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight text-cv-black md:text-2xl">
                5. Security and retention
              </h2>
              <p className="mt-3 text-base leading-relaxed text-cv-black/70">
                We use reasonable technical and organizational measures to
                protect your information. We retain your information only as
                long as needed for the purposes described in this policy or as
                required by law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight text-cv-black md:text-2xl">
                6. Your rights
              </h2>
              <p className="mt-3 text-base leading-relaxed text-cv-black/70">
                Depending on where you live, you may have rights to access,
                correct, delete, or restrict use of your personal information, or
                to object to certain processing. To exercise these rights or ask
                questions about this policy, contact us at{" "}
                <a
                  href="mailto:connect@centervert.com"
                  className="text-evergreen underline hover:no-underline"
                >
                  connect@centervert.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight text-cv-black md:text-2xl">
                7. Changes
              </h2>
              <p className="mt-3 text-base leading-relaxed text-cv-black/70">
                We may update this policy from time to time. We will post the
                revised policy on this page and update the &quot;Last updated&quot; date.
                Continued use of our site or services after changes constitutes
                acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight text-cv-black md:text-2xl">
                8. Contact
              </h2>
              <p className="mt-3 text-base leading-relaxed text-cv-black/70">
                Centervert LLC, 2 W Washington St, Suite 200, Greenville, SC
                29601. Email:{" "}
                <a
                  href="mailto:connect@centervert.com"
                  className="text-evergreen underline hover:no-underline"
                >
                  connect@centervert.com
                </a>
                . Phone: (864) 987-8282.
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
