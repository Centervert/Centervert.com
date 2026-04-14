import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Centervert",
  description:
    "How Centervert collects, uses, and protects your information. Based in Greenville, SC.",
};

export default function Page() {
  return (
    <LegalPage
      title="Privacy Policy"
      summary="How we collect, use, and protect your information when you use our website and services."
      lastUpdated="March 2026"
      sections={[
        {
          title: "Who we are",
          body: (
            <p>
              Centervert LLC (&ldquo;Centervert,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a
              technology company based in Greenville, South Carolina. We help
              businesses plan, build, implement, and support the systems they rely
              on to operate. This policy describes how we handle personal
              information when you visit our website, contact us, or use our
              services.
            </p>
          ),
        },
        {
          title: "Information we collect",
          body: (
            <p>
              We may collect information you provide directly (name, email, phone,
              company, and message content when you contact us or request a
              call), information from your use of our site (IP address, browser
              type, pages visited, and similar usage data), and information from
              cookies and similar technologies as described in our Cookie Policy.
            </p>
          ),
        },
        {
          title: "How we use your information",
          body: (
            <p>
              We use the information we collect to respond to your inquiries,
              provide and improve our services, send relevant updates or
              marketing where you have agreed, analyze site usage, and comply
              with legal obligations. We do not sell your personal information
              to third parties.
            </p>
          ),
        },
        {
          title: "Sharing and disclosure",
          body: (
            <p>
              We may share information with service providers who assist us
              (such as hosting, email, and analytics), when required by law, or
              to protect our rights and safety. We require these parties to
              protect your information consistent with this policy.
            </p>
          ),
        },
        {
          title: "Security and retention",
          body: (
            <p>
              We use reasonable technical and organizational measures to protect
              your information. We retain your information only as long as
              needed for the purposes described in this policy or as required
              by law.
            </p>
          ),
        },
        {
          title: "Your rights",
          body: (
            <p>
              Depending on where you live, you may have rights to access,
              correct, delete, or restrict use of your personal information, or
              to object to certain processing. To exercise these rights or ask
              questions about this policy, contact us at{" "}
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
        {
          title: "Changes",
          body: (
            <p>
              We may update this policy from time to time. We will post the
              revised policy on this page and update the &ldquo;Last updated&rdquo; date.
              Continued use of our site or services after changes constitutes
              acceptance of the updated policy.
            </p>
          ),
        },
        {
          title: "Contact",
          body: (
            <p>
              Centervert LLC, Greenville, SC. Email:{" "}
              <a
                href="mailto:connect@centervert.com"
                className="text-evergreen underline decoration-evergreen/30 underline-offset-4 hover:decoration-evergreen"
              >
                connect@centervert.com
              </a>
              . Phone: (864) 987-8282.
            </p>
          ),
        },
      ]}
    />
  );
}
