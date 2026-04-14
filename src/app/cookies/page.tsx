import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy | Centervert",
  description:
    "How Centervert uses cookies and similar technologies on its website.",
};

export default function Page() {
  return (
    <LegalPage
      title="Cookie Policy"
      summary="How we use cookies and similar technologies to make the website work and to understand how it is used."
      lastUpdated="March 2026"
      sections={[
        {
          title: "What cookies are",
          body: (
            <p>
              Cookies are small text files stored on your device that help
              websites remember information about your visit. They can be set by
              the site you are visiting (first-party cookies) or by other
              providers (third-party cookies).
            </p>
          ),
        },
        {
          title: "How we use cookies",
          body: (
            <p>
              We use a small set of cookies to make our website work, to
              remember your preferences, and to understand how visitors use our
              site so we can improve it. We do not use cookies to profile you or
              to sell your personal data.
            </p>
          ),
        },
        {
          title: "Types of cookies we use",
          body: (
            <div className="space-y-3">
              <p>
                <strong className="font-semibold text-cv-black">
                  Strictly necessary:
                </strong>{" "}
                required for the site to work. These cannot be disabled.
              </p>
              <p>
                <strong className="font-semibold text-cv-black">
                  Analytics:
                </strong>{" "}
                help us understand which pages are popular and how visitors move
                through the site. Aggregated and anonymous.
              </p>
              <p>
                <strong className="font-semibold text-cv-black">
                  Preferences:
                </strong>{" "}
                remember your choices like theme or recently viewed content.
              </p>
            </div>
          ),
        },
        {
          title: "Managing cookies",
          body: (
            <p>
              You can control cookies through your browser settings. Most
              browsers let you view, delete, and block cookies. Blocking some
              categories of cookies may affect how the site works.
            </p>
          ),
        },
        {
          title: "Changes",
          body: (
            <p>
              We may update this Cookie Policy from time to time. Changes take
              effect when posted on this page.
            </p>
          ),
        },
        {
          title: "Contact",
          body: (
            <p>
              Questions about how we use cookies? Email{" "}
              <a
                href="mailto:connect@centervert.com"
                className="text-evergreen underline decoration-evergreen/30 underline-offset-4 hover:decoration-evergreen"
              >
                connect@centervert.com
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
