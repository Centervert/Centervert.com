import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description:
    "Schedule a free strategy call with Centervert. Pick a time that works for you – we’ll send a calendar invite. Greenville, SC.",
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
