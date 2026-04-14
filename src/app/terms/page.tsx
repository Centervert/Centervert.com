import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | Centervert",
  description:
    "The terms that apply when you use Centervert's website and services. Based in Greenville, SC.",
};

export default function Page() {
  return (
    <LegalPage
      title="Terms of Service"
      summary="The agreement between you and Centervert when you use our website and services."
      lastUpdated="March 2026"
      sections={[
        {
          title: "Acceptance",
          body: (
            <p>
              By using the Centervert website or engaging our services, you
              agree to these Terms of Service. If you do not agree, do not use
              our website or services.
            </p>
          ),
        },
        {
          title: "Services",
          body: (
            <p>
              Centervert provides technology services including AI and
              automation, custom software, web development, brand design, low
              voltage and AV, and managed IT. Specific deliverables, timelines,
              and fees are set out in individual engagement agreements.
            </p>
          ),
        },
        {
          title: "Fees and payment",
          body: (
            <p>
              Fees are described in the relevant proposal or order form. Unless
              stated otherwise, invoices are due within 15 days of the invoice
              date. Late payments may incur interest at the lesser of 1.5% per
              month or the maximum rate permitted by law.
            </p>
          ),
        },
        {
          title: "Intellectual property",
          body: (
            <p>
              Upon full payment, you own the custom deliverables created
              specifically for you under an engagement, except for underlying
              tools, libraries, and know-how that Centervert retains for reuse.
              Open-source components are governed by their own licenses.
            </p>
          ),
        },
        {
          title: "Confidentiality",
          body: (
            <p>
              Both parties agree to keep each other&apos;s non-public information
              confidential and to use it only for the purposes of the
              engagement. This obligation continues after the engagement ends.
            </p>
          ),
        },
        {
          title: "Warranties and disclaimers",
          body: (
            <p>
              We warrant that services will be performed in a professional and
              workmanlike manner. Except as expressly stated, the website and
              services are provided &ldquo;as is&rdquo; without warranties of any kind, to
              the fullest extent permitted by law.
            </p>
          ),
        },
        {
          title: "Limitation of liability",
          body: (
            <p>
              To the fullest extent permitted by law, Centervert&apos;s total
              liability arising out of or relating to the services will not
              exceed the fees paid by you for the relevant services in the
              twelve months preceding the claim. We will not be liable for
              indirect, incidental, special, or consequential damages.
            </p>
          ),
        },
        {
          title: "Governing law",
          body: (
            <p>
              These Terms are governed by the laws of the State of South
              Carolina, without regard to conflict of laws principles. Any
              disputes will be brought in the state or federal courts located
              in Greenville County, South Carolina.
            </p>
          ),
        },
        {
          title: "Changes",
          body: (
            <p>
              We may update these Terms from time to time. Changes take effect
              when posted on this page. Continued use of our website or
              services constitutes acceptance of the updated Terms.
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
              .
            </p>
          ),
        },
      ]}
    />
  );
}
