import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description:
    "Company updates, insights, and articles from the Centervert team in Greenville, SC.",
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
