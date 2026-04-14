import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.centervert.com"),
  icons: {
    icon: "/icon.png",
  },
  title: {
    default: "Centervert | AI, Software & Managed IT | Greenville, SC",
    template: "%s | Centervert",
  },
  description:
    "AI, software, branding, AV, and managed IT - one team that builds, connects, and runs your entire tech stack. Based in Greenville, SC.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.centervert.com",
    siteName: "Centervert",
    title: "Centervert | AI, Software & Managed IT | Greenville, SC",
    description:
      "AI, software, branding, AV, and managed IT - one team that builds, connects, and runs your entire tech stack. Based in Greenville, SC.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Centervert | AI, Software & Managed IT | Greenville, SC",
    description:
      "AI, software, branding, AV, and managed IT - one team. Greenville, SC.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Centervert LLC",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2 W Washington St, Suite 200",
    addressLocality: "Greenville",
    addressRegion: "SC",
    postalCode: "29601",
    addressCountry: "US",
  },
  telephone: "(864) 987-8282",
  email: "connect@centervert.com",
  url: "https://www.centervert.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
