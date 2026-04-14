// ── Types ────────────────────────────────────────────────────────────────────

export type OrderStatus =
  | "pending_payment"
  | "paid"
  | "assigned"
  | "in_progress"
  | "review"
  | "revision"
  | "completed"
  | "cancelled";

export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  priceRange: { min: number; max: number };
  deliverable: string;
  turnaround: string;
  iconName: string;
}

export interface Order {
  id: string;
  customerEmail: string;
  customerName: string;
  serviceType: string;
  description: string;
  priceCents: number;
  status: OrderStatus;
  agentId: string | null;
  deliverable: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Feedback {
  id: string;
  orderId: string;
  score: number;
  comments: string;
  createdAt: string;
}

export interface Message {
  id: string;
  orderId: string;
  sender: "customer" | "agent";
  content: string;
  createdAt: string;
}

// ── Service Catalog ──────────────────────────────────────────────────────────

export const services: Service[] = [
  {
    id: "landing-page-copy",
    name: "Landing Page Copy",
    tagline: "High-converting copy, written by AI",
    description:
      "Full page copy with headlines, CTAs, benefit sections, and social proof blocks - optimized for conversion and tailored to your brand voice.",
    priceRange: { min: 29, max: 79 },
    deliverable: "Full page copy with headlines, CTAs, sections",
    turnaround: "24–48 hours",
    iconName: "FileText",
  },
  {
    id: "blog-post",
    name: "Blog Posts & Articles",
    tagline: "SEO-optimized content that ranks",
    description:
      "500–2,000 word articles with keyword research, meta descriptions, internal linking suggestions, and a structure built to rank on search.",
    priceRange: { min: 15, max: 49 },
    deliverable: "500–2,000 word articles with SEO optimization",
    turnaround: "24–48 hours",
    iconName: "PenLine",
  },
  {
    id: "technical-docs",
    name: "Technical Documentation",
    tagline: "Docs your developers will actually read",
    description:
      "API documentation, README files, user guides, and onboarding docs - structured for clarity with code examples and consistent formatting.",
    priceRange: { min: 39, max: 99 },
    deliverable: "API docs, README files, user guides",
    turnaround: "48–72 hours",
    iconName: "BookOpen",
  },
  {
    id: "code-review",
    name: "Code Review",
    tagline: "Expert eyes on your codebase",
    description:
      "Detailed code review with actionable suggestions, bug identification, performance insights, and refactoring recommendations.",
    priceRange: { min: 19, max: 59 },
    deliverable: "Detailed review with suggestions and fixes",
    turnaround: "24–48 hours",
    iconName: "Code2",
  },
  {
    id: "seo-audit",
    name: "SEO Audit",
    tagline: "Find out why you're not ranking",
    description:
      "Comprehensive site analysis covering technical SEO, on-page optimization, content gaps, and a prioritized action plan to improve rankings.",
    priceRange: { min: 29, max: 79 },
    deliverable: "Site analysis with actionable recommendations",
    turnaround: "48–72 hours",
    iconName: "Search",
  },
  {
    id: "market-research",
    name: "Market Research",
    tagline: "Know your market before you move",
    description:
      "Competitive landscape analysis, industry trends, target audience profiling, and opportunity mapping - delivered as a structured report.",
    priceRange: { min: 39, max: 99 },
    deliverable: "Competitive analysis, industry overview",
    turnaround: "48–72 hours",
    iconName: "TrendingUp",
  },
  {
    id: "email-sequences",
    name: "Email Sequences",
    tagline: "Drip campaigns that convert",
    description:
      "3–5 email drip campaigns with subject lines, body copy, CTAs, and send-timing recommendations - designed around your customer journey.",
    priceRange: { min: 19, max: 49 },
    deliverable: "3–5 email drip campaigns",
    turnaround: "24–48 hours",
    iconName: "Mail",
  },
  {
    id: "social-media-content",
    name: "Social Media Content",
    tagline: "A week of posts, ready to schedule",
    description:
      "Platform-specific posts for LinkedIn, X, Instagram, and Facebook - with captions, hashtags, and posting schedule recommendations.",
    priceRange: { min: 9, max: 29 },
    deliverable: "Posts for multiple platforms (1 week)",
    turnaround: "24 hours",
    iconName: "Share2",
  },
];

// ── Status helpers ───────────────────────────────────────────────────────────

export const STATUS_LABELS: Record<OrderStatus, string> = {
  pending_payment: "Pending Payment",
  paid: "Paid",
  assigned: "Assigned",
  in_progress: "In Progress",
  review: "Under Review",
  revision: "Revision Requested",
  completed: "Completed",
  cancelled: "Cancelled",
};

export const STATUS_COLORS: Record<OrderStatus, string> = {
  pending_payment: "bg-yellow-100 text-yellow-800",
  paid: "bg-blue-100 text-blue-800",
  assigned: "bg-indigo-100 text-indigo-800",
  in_progress: "bg-purple-100 text-purple-800",
  review: "bg-orange-100 text-orange-800",
  revision: "bg-red-100 text-red-800",
  completed: "bg-green-100 text-green-800",
  cancelled: "bg-gray-100 text-gray-500",
};

export const ORDER_FLOW: OrderStatus[] = [
  "pending_payment",
  "paid",
  "assigned",
  "in_progress",
  "review",
  "completed",
];

// ── Mock Orders ──────────────────────────────────────────────────────────────

export const mockOrders: Order[] = [
  {
    id: "ord_01HQXG7F9T3M",
    customerEmail: "sarah@greenvillelaw.com",
    customerName: "Sarah Chen",
    serviceType: "landing-page-copy",
    description:
      "Need landing page copy for our personal injury practice. Target audience is accident victims in Greenville, SC. Tone should be empathetic but authoritative.",
    priceCents: 4900,
    status: "completed",
    agentId: "agent_opus_01",
    deliverable:
      "# Greenville Personal Injury Attorneys\n\n## Hero Section\n**You didn't ask for this. But you deserve someone who fights like you did.**\n\nAfter an accident, the last thing you need is another runaround. At Greenville Law, we handle the insurance companies, the paperwork, and the courtroom - so you can focus on getting better.\n\n[Get Your Free Case Review →]\n\n---\n\n## The Problem\nInsurance companies have teams of lawyers working to pay you less. You need someone in your corner who knows their playbook.\n\n## Why Greenville Law\n- **$12M+ recovered** for Greenville accident victims\n- **No fee unless we win** - zero upfront cost\n- **24-hour response** on every case\n- **Local team** - we know Greenville courts\n\n## How It Works\n1. **Free Consultation** - Tell us what happened. We'll tell you what your case is worth.\n2. **We Handle Everything** - Medical records, insurance negotiations, court filings.\n3. **You Get Paid** - Average settlement in 90 days.\n\n## Testimonials\n> \"They got me $340,000 after a rear-end collision. I never stepped foot in a courtroom.\" - James R.\n\n> \"Responsive, honest, and relentless. Exactly what I needed.\" - Maria T.\n\n## CTA\n**Don't wait. The clock is ticking on your claim.**\nSouth Carolina has a 3-year statute of limitations. Every day you wait is leverage the insurance company gains.\n\n[Schedule Your Free Case Review →]\n[Call (864) 555-0192 →]",
    createdAt: "2026-03-10T14:30:00Z",
    updatedAt: "2026-03-11T09:15:00Z",
  },
  {
    id: "ord_01HQXG8K2N7P",
    customerEmail: "mike@brewhaus.co",
    customerName: "Mike Torres",
    serviceType: "blog-post",
    description:
      "Write a blog post about craft beer trends for 2026. We're a local brewery in Greenville. Should mention hazy IPAs falling off, lager resurgence, and low-ABV options.",
    priceCents: 2900,
    status: "in_progress",
    agentId: "agent_opus_01",
    deliverable: null,
    createdAt: "2026-03-12T10:00:00Z",
    updatedAt: "2026-03-12T10:30:00Z",
  },
  {
    id: "ord_01HQXG9R5M4Q",
    customerEmail: "lisa@techstartup.io",
    customerName: "Lisa Park",
    serviceType: "code-review",
    description:
      "Need a review of our Next.js API routes. About 15 files in src/app/api/. Looking for security issues, performance problems, and best practice violations.",
    priceCents: 5900,
    status: "review",
    agentId: "agent_opus_01",
    deliverable:
      "# Code Review: Next.js API Routes\n\n## Summary\nReviewed 15 API route files. Found 3 critical issues, 7 moderate issues, and 12 suggestions.\n\n## Critical Issues\n\n### 1. SQL Injection in `/api/users/[id]/route.ts`\nLine 23: User input is interpolated directly into a SQL query string.\n```\n// BEFORE (vulnerable)\nconst result = await db.query(`SELECT * FROM users WHERE id = '${params.id}'`);\n\n// AFTER (parameterized)\nconst result = await db.query('SELECT * FROM users WHERE id = $1', [params.id]);\n```\n\n### 2. Missing Auth Check in `/api/admin/stats/route.ts`\nThis route returns sensitive business metrics but has no authentication middleware.\n\n### 3. Unbounded Query in `/api/orders/route.ts`\nGET handler returns all orders with no pagination. Will become a performance issue at scale.\n\n## Moderate Issues\n...(7 additional items with code examples and fixes)",
    createdAt: "2026-03-11T16:45:00Z",
    updatedAt: "2026-03-12T08:00:00Z",
  },
  {
    id: "ord_01HQXGAT8K2R",
    customerEmail: "james@realestate.com",
    customerName: "James Wright",
    serviceType: "email-sequences",
    description:
      "Need a 5-email nurture sequence for new leads who download our home buyer guide. Real estate in Greenville SC market.",
    priceCents: 3900,
    status: "paid",
    agentId: null,
    deliverable: null,
    createdAt: "2026-03-13T08:00:00Z",
    updatedAt: "2026-03-13T08:00:00Z",
  },
  {
    id: "ord_01HQXGBV3N8S",
    customerEmail: "anna@fitzone.com",
    customerName: "Anna Kim",
    serviceType: "social-media-content",
    description:
      "One week of social media content for our gym. Focus on membership promos, workout tips, and community events. Platforms: Instagram, Facebook, X.",
    priceCents: 1900,
    status: "completed",
    agentId: "agent_opus_01",
    deliverable:
      "# FitZone - Social Media Content (1 Week)\n\n## Monday\n**Instagram:** Transformation Tuesday teaser - \"Before the results, there's the decision. Tag someone who's ready.\"\n**Facebook:** Share Monday class schedule with CTA to book a free trial.\n**X:** \"Your Monday excuse is someone else's warm-up. See you at 6AM. 💪\"\n\n## Tuesday\n**Instagram:** Member spotlight carousel (3 slides)...\n\n...(full week of content for all 3 platforms)",
    createdAt: "2026-03-08T12:00:00Z",
    updatedAt: "2026-03-09T14:30:00Z",
  },
];

export const mockFeedback: Feedback[] = [
  {
    id: "fb_01",
    orderId: "ord_01HQXG7F9T3M",
    score: 5,
    comments:
      "Exactly what we needed. The copy was on-brand and the CTA structure was excellent. Already seeing better conversion.",
    createdAt: "2026-03-11T10:00:00Z",
  },
  {
    id: "fb_02",
    orderId: "ord_01HQXGBV3N8S",
    score: 4,
    comments:
      "Good variety and tone. Would have liked a few more hashtag options but overall solid work.",
    createdAt: "2026-03-09T15:00:00Z",
  },
];

export const mockMessages: Message[] = [
  {
    id: "msg_01",
    orderId: "ord_01HQXG9R5M4Q",
    sender: "agent",
    content:
      "I've completed the review of all 15 API route files. Found 3 critical security issues that should be addressed immediately. Full report is attached as the deliverable.",
    createdAt: "2026-03-12T08:00:00Z",
  },
  {
    id: "msg_02",
    orderId: "ord_01HQXG9R5M4Q",
    sender: "customer",
    content:
      "Thanks for the thorough review. Can you also check the middleware files in src/middleware.ts? I want to make sure our auth layer is solid.",
    createdAt: "2026-03-12T09:30:00Z",
  },
  {
    id: "msg_03",
    orderId: "ord_01HQXG9R5M4Q",
    sender: "agent",
    content:
      "Absolutely. I'll review the middleware and update the deliverable with those findings.",
    createdAt: "2026-03-12T09:45:00Z",
  },
];

// ── Lookup helpers ───────────────────────────────────────────────────────────

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export function getOrder(id: string): Order | undefined {
  return mockOrders.find((o) => o.id === id);
}

export function getOrderFeedback(orderId: string): Feedback | undefined {
  return mockFeedback.find((f) => f.orderId === orderId);
}

export function getOrderMessages(orderId: string): Message[] {
  return mockMessages.filter((m) => m.orderId === orderId);
}
