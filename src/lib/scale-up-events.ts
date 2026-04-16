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
};

export const scaleUpEvents: ScaleUpEvent[] = [
  {
    city: "greenville",
    cityDisplay: "Greenville",
    slug: "may-7-2026",
    status: "upcoming",

    audienceLabel: "For Greenville business owners",
    headline: {
      lead: "What if your business ran on systems that ",
      highlight: "actually scaled",
      tail: " with you?",
    },
    subhead:
      "Practical AI, automation, and better systems for business owners. One morning at The City Club, hosted by Centervert.",

    date: { iso: "2026-05-07", display: "Thursday, May 7", year: "2026" },
    time: "11:30 AM – 1:00 PM",
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

    video: {
      kind: "mov",
      src: "https://vipun5zdihpgupx9.public.blob.vercel-storage.com/Scale%20Up%20-%20Thursday%20May%207th%20Event.mov",
      poster: "/scaleup/greenville/may-2026/city-club.jpg",
      label: "Watch the invite",
      autoplayMuted: true,
      aspect: "16/9",
    },

    room: [
      "No slides-at-you keynote. Working session with Centervert owners, engineers, and operators in the room.",
      "You leave with a short list of moves to try on Monday and a clearer sense of what is actually worth building.",
    ],

    agenda: [
      {
        n: "01",
        title: "Where AI is actually useful right now",
        body: "What works on real small-to-mid sized business workflows today, with specific tools and prompts. No hype reels.",
      },
      {
        n: "02",
        title: "Automations that survive your team",
        body: "How to build the kind of automation your staff will still run six months from now. Failure modes we have hit and how we design around them.",
      },
      {
        n: "03",
        title: "The systems behind the software",
        body: "Infrastructure, data, and IT choices that either free you up or quietly cap your growth. Where to invest, where to wait.",
      },
      {
        n: "04",
        title: "Owner Q&A, on the record",
        body: "Bring a live bottleneck. We work through it out loud so the whole room benefits.",
      },
    ],

    walkaway: [
      "Two or three AI moves you can try next week on your actual business",
      "A simple way to evaluate tools before your team is already paying for four",
      "A clearer read on which of your systems are ready to scale and which are not",
      "Direct contact with the Centervert team if you want help afterward",
    ],

    testimonials: [
      {
        quote: "Replaced four vendors with one team.",
        name: "Sarah C.",
        role: "VP Operations, anchor client",
      },
    ],

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
