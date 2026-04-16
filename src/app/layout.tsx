import type { Metadata, Viewport } from "next";
import { effra, recia } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.centervert.com"),
  icons: {
    icon: "/brand/logos/centervert.logo.icon.smoke.png",
  },
  title: {
    default: "Centervert | The systems your business runs on.",
    template: "%s | Centervert",
  },
  description:
    "Software, infrastructure, automation, and managed support from one Greenville, SC team. Planning through rollout, with people who answer after go-live.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.centervert.com",
    siteName: "Centervert",
    title: "Centervert | The systems your business runs on.",
    description:
      "One partner for the systems you run on: apps, wiring, automation, and the help desk behind them. Based in Greenville, SC.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Centervert | The systems your business runs on.",
    description:
      "Greenville, SC team for software, low voltage, automation, and managed IT without juggling four vendors.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F7F2" },
    { media: "(prefers-color-scheme: dark)", color: "#013220" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Centervert LLC",
  description:
    "Centervert helps businesses plan, build, implement, and support the systems they rely on to operate.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Greenville",
    addressRegion: "SC",
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
    <html
      lang="en"
      className={`${effra.variable} ${recia.variable}`}
      data-scroll-behavior="smooth"
    >
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
