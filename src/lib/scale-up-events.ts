/**
 * Scale Up events: city + event-slug addressable, config-driven.
 *
 * Event landing pages are rendered from these records at
 * /scaleup/[city]/[slug]. Add a new event by pushing a new object. Each city's
 * hub (/scaleup/[city]) surfaces the next `upcoming` event.
 *
 * Notes:
 * - `status: "upcoming"` is what shows on city hubs and enables RSVP.
 * - `rsvpMode: "native-form"` renders the in-page form. When Luma/Eventbrite
 *   go live for a given event, switch to `"external-url"` and set `rsvpUrl`.
 * - `video` is optional; when omitted the event page renders a placeholder.
 * - `kind: "mov"` uses the same HTML5 player as mp4 (QuickTime/H.264 in .mov).
 */

export type ScaleUpCitySlug = "greenville";

export type ScaleUpVideoKind = "mp4" | "mov" | "vimeo" | "youtube";

export type ScaleUpEventVideo = {
  kind: ScaleUpVideoKind;
  src: string;
  /** Optional extra source (e.g. WebM fallback) for self-hosted MP4. */
  srcWebm?: string;
  poster: string;
  label?: string;
  /** Autoplay muted and loop on view; user can tap for sound. Defaults to true for mp4. */
  autoplayMuted?: boolean;
  /** Aspect ratio override. Defaults to 16/9. Use "9/16" for portrait invites. */
  aspect?: "16/9" | "4/5" | "1/1" | "9/16";
};

export type ScaleUpAgendaItem = {
  n: string;
  title: string;
  body: string;
};

export type ScaleUpTestimonial = {
  quote: string;
  name: string;
  role: string;
};

export type ScaleUpRsvpField =
  | "name"
  | "email"
  | "company"
  | "source"
  | "focusArea";

export type ScaleUpEvent = {
  city: ScaleUpCitySlug;
  cityDisplay: string;
  slug: string;
  status: "upcoming" | "past" | "draft";

  audienceLabel: string;
  headline: { lead: string; highlight: string; tail: string };
  subhead: string;

  date: { iso: string; display: string; year: string };
  time: string;
  venue: {
    name: string;
    address: string;
    mapsUrl: string;
    logo?: string;
    heroImage: string;
    heroImageAlt: string;
  };

  seats: { cap: number; remaining?: number };
  host: { name: string; role: string };

  video?: ScaleUpEventVideo;

  room: string[];
  agenda: ScaleUpAgendaItem[];
  walkaway: string[];
  testimonials?: ScaleUpTestimonial[];

  rsvp:
    | {
        mode: "native-form";
        fields: ScaleUpRsvpField[];
        successTitle: string;
        successMessage: string;
      }
    | { mode: "external-url"; rsvpUrl: string; rsvpLabel?: string };

  ogImage?: string;

  /** Hero: format + duration (keep consistent with `time`, e.g. 2 hours for 11am–1pm). */
  sessionCaption?: string;
  /** Hero primary CTA label; EventHero defaults to "Reserve my seat". */
  heroCtaLabel?: string;
  /** JSON-LD Event `startDate` / `endDate` (ISO 8601, include timezone). */
  schemaStartAt?: string;
  schemaEndAt?: string;

  /** VSL block: eyebrow + optional title under hero. */
  videoIntro?: { eyebrow: string; title?: string };
  /** Replaces default "What happens" copy when set. Use **text** for bold segments. */
  roomSection?: { eyebrow: string; title: string; paragraphs: string[] };
  /** Replaces default agenda section intro. */
  agendaIntro?: { eyebrow: string; title: string };
  /** Replaces bullet walkaway when set. Use **text** for bold segments. */
  walkawayProse?: { eyebrow: string; title: string; paragraphs: string[] };
  /** Replaces default testimonial section labels. */
  testimonialsIntro?: { eyebrow: string; title: string };
  /** Bottom evergreen CTA strip before minimal footer. */
  footerCta?: { eyebrow: string; title: string; buttonLabel: string; detailLine: string };
};

export const scaleUpEvents: ScaleUpEvent[] = [
  {
    city: "greenville",
    cityDisplay: "Greenville",
    slug: "may-7-2026",
    status: "upcoming",

    audienceLabel: "ATTN: Greenville business owners",
    headline: {
      lead: "Are You Ready to ",
      highlight: "Automate",
      tail: " and Scale Your Business?",
    },
    subhead:
      "Without staying trapped as the person your business can't run without.",

    date: { iso: "2026-05-07", display: "Thursday, May 7", year: "2026" },
    time: "11:00 AM – 1:00 PM",
    venue: {
      name: "The City Club",
      address: "55 Beattie Pl, Floor 17, Greenville, SC 29601",
      mapsUrl: "https://maps.apple.com/?q=The+City+Club+of+Greenville+55+Beattie+Pl+Greenville+SC",
      logo: "/scaleup/greenville/city-club-logo.svg",
      heroImage: "/scaleup/greenville/may-2026/city-club.jpg",
      heroImageAlt:
        "Guests gathered at The City Club of Greenville with balloon arch and gold-lit bar in the background",
    },

    seats: { cap: 100 },
    host: { name: "Luke Pauldine", role: "Scale Up host, Centervert" },

    sessionCaption: "Live in-person working session · 2 hours",
    heroCtaLabel: "I'm ready to scale",
    schemaStartAt: "2026-05-07T11:00:00-04:00",
    schemaEndAt: "2026-05-07T13:00:00-04:00",

    videoIntro: {
      eyebrow: "Watch this first before you register",
    },

    video: {
      kind: "mov",
      src: "https://vipun5zdihpgupx9.public.blob.vercel-storage.com/Scale%20Up%20-%20Thursday%20May%207th%20Event.mov",
      poster: "/scaleup/greenville/may-2026/city-club.jpg",
      label: "Watch this first before you register",
      autoplayMuted: true,
      aspect: "16/9",
    },

    roomSection: {
      eyebrow: "What to expect",
      title: "What actually happens in the room",
      paragraphs: [
        "This isn't a seminar. **There are no motivational talks.**",
        "It's a working session. We map your business live: your bottlenecks, your manual processes, where your time is leaking. Then we build a real automation plan around what we find.",
        "You'll leave with something specific to your business. **Not a template. Not homework. An actual plan.**",
      ],
    },

    room: [
      "It's a working session. We map your business live, then build a real automation plan around what we find.",
      "You'll leave with something specific to your business. Not a template. An actual plan.",
    ],

    agendaIntro: {
      eyebrow: "Agenda",
      title: "What we cover",
    },

    agenda: [
      {
        n: "01",
        title:
          "Why You're the Bottleneck and the Exact Systems to Get Out of That Position",
        body: "If you're stuck because the business was built around you instead of around systems, we show you exactly where that's happening and how to fix it.",
      },
      {
        n: "02",
        title: "How to Build a Business That Generates Revenue When You Step Away",
        body: "If you're the key man risk in your business, this is what needs to exist inside your business so it can run without you.",
      },
      {
        n: "03",
        title: "We Map Your Bottlenecks Live in the Room",
        body: "Your biggest constraints, your highest-leverage automation opportunities, and actionable next steps specific to you that you can take.",
      },
      {
        n: "04",
        title: "Real Automation Examples Across Multiple Industries",
        body: "You'll see where automation actually exists in business: across sales, operations, fulfillment, and marketing, so you can see exactly where it fits yours.",
      },
      {
        n: "05",
        title: "The Tools Worth Your Time and the Ones to Ignore",
        body: "There's an overwhelming amount of tools. We cut through it and show you what's actually working right now.",
      },
    ],

    walkawayProse: {
      eyebrow: "The deliverable",
      title: "What you walk away with",
      paragraphs: [
        "A custom automation plan built around your business: your bottlenecks identified, your top 3 to 5 highest-leverage automation opportunities prioritized, and your next steps clear.",
        "**Not general advice. Not a worksheet to fill out later. A plan you helped build in the room.**",
      ],
    },

    walkaway: [
      "A prioritized automation plan built in the room with next steps you can use.",
    ],

    testimonialsIntro: {
      eyebrow: "What people are saying",
      title: "Hear from business owners",
    },

    testimonials: [
      {
        quote:
          "It was the first time our technology felt like it was on our side. We stopped juggling vendors and started running our business.",
        name: "VP of Operations",
        role: "Upstate SC professional services firm",
      },
      {
        quote:
          "We did not want AI to replace our team. We wanted it to stop burning our team on work a machine should do. That is exactly what we got.",
        name: "Managing Partner",
        role: "Greenville services firm",
      },
    ],

    footerCta: {
      eyebrow: "Seats are limited",
      title: "Click below to secure your seat",
      buttonLabel: "I'm ready to scale",
      detailLine:
        "Thursday, May 7, 2026 · 11:00 AM – 1:00 PM · The City Club, Greenville, SC",
    },

    rsvp: {
      mode: "native-form",
      fields: ["name", "email", "company", "source", "focusArea"],
      successTitle: "You are on the list",
      successMessage:
        "We will email a calendar invite and venue details as the date gets closer. If plans change, just reply to that email.",
    },

    ogImage: "/scaleup/greenville/may-2026/city-club.jpg",
  },
];

export function findScaleUpEvent(
  city: string,
  slug: string
): ScaleUpEvent | undefined {
  return scaleUpEvents.find((e) => e.city === city && e.slug === slug);
}

export function findNextEventForCity(city: string): ScaleUpEvent | undefined {
  return scaleUpEvents.find((e) => e.city === city && e.status === "upcoming");
}

export function listEventsForCity(city: string): ScaleUpEvent[] {
  return scaleUpEvents.filter((e) => e.city === city);
}
