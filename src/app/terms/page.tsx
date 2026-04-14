import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing your use of Centervert's website and services. Greenville, SC.",
};

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-smoke">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-32 pb-12 text-center md:pt-40 md:pb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
          Legal
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-cv-black md:text-[3.25rem] md:leading-[1.15]">
          Terms of Service
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cv-black/60 md:text-lg">
          Terms governing your use of our website and the services we provide.
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
                1. Agreement to terms
              </h2>
              <p className="mt-3 text-base leading-relaxed text-cv-black/70">
                By accessing or using the Centervert website or our services,
                you agree to be bound by these Terms of Service and our Privacy
                Policy. If you do not agree, do not use our site or services.
                Centervert LLC is located at 2 W Washington St, Suite 200,
                Greenville, SC 29601.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight text-cv-black md:text-2xl">
                2. Our services
              </h2>
              <p className="mt-3 text-base leading-relaxed text-cv-black/70">
                Centervert provides technology services including AI and
                automation, custom software development, web design and
                development, brand design, low voltage and AV systems, and managed
                IT. Specific deliverables, timelines, and fees are set out in
                separate agreements, statements of work, or order forms. These
                Terms apply to the extent not superseded by a signed agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight text-cv-black md:text-2xl">
                3. Use of the website
              </h2>
              <p className="mt-3 text-base leading-relaxed text-cv-black/70">
                You may use our website for lawful purposes only. You may not
                attempt to gain unauthorized access to our systems or data,
                transmit malware, scrape or harvest data in violation of our
                robots or usage policies, or use the site in any way that could
                harm Centervert or third parties. We reserve the right to
                suspend or terminate access if we believe you have violated
                these terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight text-cv-black md:text-2xl">
                4. Intellectual property
              </h2>
              <p className="mt-3 text-base leading-relaxed text-cv-black/70">
                The website and its content (including text, graphics, logos,
                and design) are owned by Centervert or our licensors and are
                protected by copyright and other intellectual property laws. You
                may not copy, modify, or distribute our materials without
                written permission. Work product and IP rights for client
                projects are addressed in the applicable project or service
                agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight text-cv-black md:text-2xl">
                5. Disclaimers
              </h2>
              <p className="mt-3 text-base leading-relaxed text-cv-black/70">
                Our website and general descriptions of services are provided
                &quot;as is.&quot; We do not warrant that the site will be
                uninterrupted or error-free. Specific service levels and
                warranties are set out in your service agreement. Nothing on
                this site constitutes professional legal, tax, or financial
                advice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight text-cv-black md:text-2xl">
                6. Limitation of liability
              </h2>
              <p className="mt-3 text-base leading-relaxed text-cv-black/70">
                To the fullest extent permitted by law, Centervert is not
                liable for any indirect, incidental, special, or consequential
                damages arising from your use of the website or our services.
                Our total liability for claims related to the website is
                limited to the amount you paid us, if any, in the twelve months
                before the claim. These limits apply even if we have been advised
                of the possibility of such damages. Some jurisdictions do not
                allow certain limitations; in such cases our liability is limited
                to the maximum permitted by law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight text-cv-black md:text-2xl">
                7. Indemnification
              </h2>
              <p className="mt-3 text-base leading-relaxed text-cv-black/70">
                You agree to indemnify and hold harmless Centervert and its
                officers, directors, and employees from any claims, damages, or
                expenses (including reasonable attorneys&apos; fees) arising from
                your use of the website or services or your violation of these
                Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight text-cv-black md:text-2xl">
                8. Changes
              </h2>
              <p className="mt-3 text-base leading-relaxed text-cv-black/70">
                We may update these Terms from time to time. We will post the
                revised Terms on this page and update the &quot;Last updated&quot; date.
                Your continued use of the website or services after changes
                constitutes acceptance of the updated Terms. Material changes may
                be communicated by email or notice on the site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight text-cv-black md:text-2xl">
                9. General
              </h2>
              <p className="mt-3 text-base leading-relaxed text-cv-black/70">
                These Terms are governed by the laws of the State of South
                Carolina without regard to conflict of law principles. Any
                dispute shall be resolved in the state or federal courts located
                in Greenville County, South Carolina. If any provision is found
                unenforceable, the remaining provisions remain in effect. Our
                failure to enforce a right does not waive that right.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight text-cv-black md:text-2xl">
                10. Contact
              </h2>
              <p className="mt-3 text-base leading-relaxed text-cv-black/70">
                Questions about these Terms? Contact us at{" "}
                <a
                  href="mailto:connect@centervert.com"
                  className="text-evergreen underline hover:no-underline"
                >
                  connect@centervert.com
                </a>{" "}
                or (864) 987-8282. Centervert LLC, 2 W Washington St, Suite
                200, Greenville, SC 29601.
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
