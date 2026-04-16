/**
 * Scale Up by Centervert: event surfaces by location.
 * Replace rsvpUrl when Luma/Eventbrite/etc. links are live. Use comingSoon + notify
 * mailto until then.
 */

export type ScaleUpCardTheme = "highlight" | "royal";

export type ScaleUpLocation = {
  id: string;
  /** e.g. "Scale Up by Centervert Greenville" */
  fullName: string;
  description: string;
  upcomingBlurb?: string;
  theme: ScaleUpCardTheme;
  /** Internal hub for this city, e.g. /scaleup/greenville. Preferred when present. */
  cityHref?: string;
  /** Public RSVP (new tab). Ignored when comingSoon is true or cityHref is set. */
  rsvpUrl: string;
  rsvpLabel?: string;
  /** When true, show notify CTA instead of RSVP. */
  comingSoon: boolean;
  /** Used when comingSoon (mailto with subject). */
  notifyEmail?: string;
};

export const scaleUpLocations: ScaleUpLocation[] = [
  {
    id: "greenville",
    fullName: "Scale Up by Centervert Greenville",
    description:
      "In-person workshops, lunch-and-learns, and community sessions in the Upstate. Same people who build software and run IT for Centervert clients.",
    upcomingBlurb: "Next session: Thursday, May 7, 2026 at The City Club.",
    theme: "highlight",
    cityHref: "/scaleup/greenville",
    rsvpUrl: "/scaleup/greenville",
    rsvpLabel: "See Greenville events",
    comingSoon: false,
    notifyEmail: "connect@centervert.com",
  },
  {
    id: "online",
    fullName: "Scale Up Online",
    description:
      "Remote-friendly sessions and, over time, online courses. If you need help after a session, you are already talking to the team that does the work.",
    upcomingBlurb:
      "Join the notify list and we will email when the next online cohort opens.",
    theme: "royal",
    rsvpUrl: "#",
    rsvpLabel: "RSVP",
    comingSoon: true,
    notifyEmail: "connect@centervert.com",
  },
];

export function scaleUpNotifyHref(email: string, locationName: string): string {
  const subject = encodeURIComponent(`Scale Up: ${locationName}`);
  return `mailto:${email}?subject=${subject}`;
}
