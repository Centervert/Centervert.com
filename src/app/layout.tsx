import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.centervert.com"),
  icons: {
    icon: "/icon.png",
  },
  title: {
    default: "Centervert | The systems your business runs on.",
    template: "%s | Centervert",
  },
  description:
    "Centervert helps businesses plan, build, implement, and support the systems they rely on to operate. AI, software, infrastructure, and managed services from one Greenville, SC team.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.centervert.com",
    siteName: "Centervert",
    title: "Centervert | The systems your business runs on.",
    description:
      "Plan, build, implement, and support the systems your business runs on. One Greenville, SC team.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Centervert | The systems your business runs on.",
    description:
      "Plan, build, implement, and support the systems your business runs on. One Greenville, SC team.",
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
