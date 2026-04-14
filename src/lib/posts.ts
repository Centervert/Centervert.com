export type PostCategory = "Article" | "Announcement";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: PostCategory;
  readTime: string;
}

export const posts: Post[] = [
  {
    slug: "centervert-launches-managed-it-services",
    title: "Centervert Launches Managed IT Services",
    excerpt:
      "We're expanding our service stack with a full managed IT offering - endpoint management, help desk, cybersecurity, and cloud management for businesses across the Southeast.",
    date: "2026-03-01",
    category: "Announcement",
    readTime: "2 min read",
  },
  {
    slug: "how-ai-phone-assistants-are-changing-small-business",
    title: "How AI Phone Assistants Are Changing Small Business",
    excerpt:
      "Your receptionist doesn't need to be a person anymore. We break down how AI phone agents handle calls, book appointments, and update your CRM - without missing a beat.",
    date: "2026-02-20",
    category: "Article",
    readTime: "5 min read",
  },
  {
    slug: "why-your-business-needs-one-technology-partner",
    title: "Why Your Business Needs One Technology Partner",
    excerpt:
      "Juggling an IT vendor, a dev shop, a marketing agency, and a freelance designer? Here's why consolidating under one partner saves money, time, and sanity.",
    date: "2026-02-12",
    category: "Article",
    readTime: "4 min read",
  },
  {
    slug: "new-partnership-crestron-certified-installations",
    title: "New Partnership: Crestron Certified Installations",
    excerpt:
      "Centervert is now a Crestron certified installer. Conference rooms, control systems, and AV infrastructure - designed, installed, and integrated with your IT stack.",
    date: "2026-02-05",
    category: "Announcement",
    readTime: "2 min read",
  },
  {
    slug: "5-signs-your-business-is-ready-for-automation",
    title: "5 Signs Your Business Is Ready for Automation",
    excerpt:
      "Still copying data between spreadsheets? Manually sending follow-up emails? If any of these five signs sound familiar, it's time to automate.",
    date: "2026-01-28",
    category: "Article",
    readTime: "6 min read",
  },
  {
    slug: "centervert-expands-to-greenville-office",
    title: "Centervert Opens Greenville, SC Headquarters",
    excerpt:
      "Our new office in downtown Greenville is officially open. A dedicated space for our growing team to build, consult, and support clients across the region.",
    date: "2026-01-15",
    category: "Announcement",
    readTime: "2 min read",
  },
];
