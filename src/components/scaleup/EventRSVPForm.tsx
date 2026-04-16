"use client";

import { useId, useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, ExternalLink, Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";
import type { ScaleUpEvent, ScaleUpRsvpField } from "@/lib/scale-up-events";

type Props = {
  event: ScaleUpEvent;
  /** Render on a dark hero or on a light section. Defaults to "light". */
  tone?: "light" | "dark";
};

type SubmitState =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "error"; message: string }
  | { kind: "success" };

const sources = [
  "LinkedIn",
  "Instagram",
  "Referral from a friend",
  "Google search",
  "Centervert client",
  "Other",
];

export function EventRSVPForm({ event, tone = "light" }: Props) {
  const headingId = useId();
  const [state, setState] = useState<SubmitState>({ kind: "idle" });

  if (event.rsvp.mode === "external-url") {
    return (
      <div className="flex flex-col items-start gap-3">
        <Button
          href={event.rsvp.rsvpUrl}
          variant="primary"
          size="lg"
          trailingIcon={<ArrowRight className="h-4 w-4" />}
          target="_blank"
          rel="noopener noreferrer"
        >
          {event.rsvp.rsvpLabel ?? "RSVP"}
        </Button>
      </div>
    );
  }

  const fields = new Set<ScaleUpRsvpField>(event.rsvp.fields);
  const isDark = tone === "dark";

  const labelClass = cn(
    "block text-[12.5px] font-semibold uppercase tracking-[0.12em]",
    isDark ? "text-white/65" : "text-cv-black/55"
  );
  const inputClass = cn(
    "mt-2 block w-full rounded-xl border px-4 py-3 text-[15px] shadow-none transition-colors",
    "focus:outline-none focus:ring-2",
    isDark
      ? "border-white/15 bg-white/5 text-white placeholder:text-white/35 focus:border-highlight/60 focus:ring-highlight/40"
      : "border-cv-black/10 bg-white text-cv-black placeholder:text-cv-black/35 focus:border-evergreen focus:ring-evergreen/20"
  );
  const selectClass = cn(inputClass, "appearance-none pr-10");
  const helperClass = cn(
    "mt-2 text-[12.5px]",
    isDark ? "text-white/55" : "text-cv-black/45"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setState({ kind: "submitting" });

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          city: event.city,
          eventSlug: event.slug,
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          company: String(data.get("company") ?? ""),
          source: String(data.get("source") ?? ""),
          focusArea: String(data.get("focusArea") ?? ""),
        }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        setState({
          kind: "error",
          message:
            payload?.error ??
            "Something went wrong submitting your RSVP. Please try again.",
        });
        return;
      }

      form.reset();
      setState({ kind: "success" });
    } catch {
      setState({
        kind: "error",
        message:
          "We could not reach our server. Check your connection and try again.",
      });
    }
  }

  if (state.kind === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className={cn(
          "flex flex-col items-center gap-5 rounded-2xl border p-8 text-center md:p-10",
          isDark
            ? "border-highlight/30 bg-highlight/[0.08] text-white"
            : "border-evergreen/20 bg-evergreen/[0.06] text-cv-black"
        )}
      >
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full",
            isDark ? "bg-highlight text-cv-black" : "bg-evergreen text-white"
          )}
        >
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="font-sans text-[1.5rem] font-semibold">
          {event.rsvp.successTitle}
        </h3>
        <p
          className={cn(
            "max-w-md text-[15px] leading-relaxed",
            isDark ? "text-white/75" : "text-cv-black/65"
          )}
        >
          {event.rsvp.successMessage}
        </p>
        <div className="mt-2 flex flex-col items-center gap-3">
          <p
            className={cn(
              "text-[12.5px] font-semibold uppercase tracking-[0.14em]",
              isDark ? "text-white/50" : "text-cv-black/45"
            )}
          >
            While you wait
          </p>
          <a
            href={routes.home}
            className={cn(
              "inline-flex items-center gap-2 text-[14.5px] font-semibold underline-offset-4 transition-colors hover:underline",
              isDark ? "text-highlight" : "text-evergreen"
            )}
          >
            Learn more about Centervert
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby={headingId}
      className={cn(
        "rounded-2xl border p-6 md:p-8",
        isDark
          ? "border-white/10 bg-white/[0.04] backdrop-blur-sm"
          : "border-cv-black/10 bg-white shadow-[var(--shadow-1)]"
      )}
    >
      <div className="mb-6 text-center">
        <h3
          id={headingId}
          className={cn(
            "font-sans text-[1.5rem] font-semibold",
            isDark ? "text-white" : "text-cv-black"
          )}
        >
          RSVP for {event.cityDisplay}
        </h3>
        <p className={cn(helperClass, "mt-2")}>
          We will confirm by email and send venue details the week of.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {fields.has("name") ? (
          <div className="sm:col-span-1">
            <label htmlFor="rsvp-name" className={labelClass}>
              Full name
            </label>
            <input
              id="rsvp-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Alex Morgan"
              className={inputClass}
            />
          </div>
        ) : null}

        {fields.has("email") ? (
          <div className="sm:col-span-1">
            <label htmlFor="rsvp-email" className={labelClass}>
              Email
            </label>
            <input
              id="rsvp-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className={inputClass}
            />
          </div>
        ) : null}

        {fields.has("company") ? (
          <div className="sm:col-span-1">
            <label htmlFor="rsvp-company" className={labelClass}>
              Company
            </label>
            <input
              id="rsvp-company"
              name="company"
              type="text"
              required
              autoComplete="organization"
              placeholder="Your company"
              className={inputClass}
            />
          </div>
        ) : null}

        {fields.has("source") ? (
          <div className="sm:col-span-1">
            <label htmlFor="rsvp-source" className={labelClass}>
              How did you hear about us?
            </label>
            <select
              id="rsvp-source"
              name="source"
              defaultValue=""
              className={selectClass}
            >
              <option value="" disabled>
                Pick one
              </option>
              {sources.map((src) => (
                <option key={src} value={src}>
                  {src}
                </option>
              ))}
            </select>
          </div>
        ) : null}

        {fields.has("focusArea") ? (
          <div className="sm:col-span-2">
            <label htmlFor="rsvp-focus" className={labelClass}>
              Optional: where could AI help you most?
            </label>
            <textarea
              id="rsvp-focus"
              name="focusArea"
              rows={3}
              placeholder="A pain point you want to fix, a process that eats your time, or an area of the business you want to scale."
              className={cn(inputClass, "resize-y")}
            />
            <p className={helperClass}>
              We use real examples from the room. If you share one, Luke may work
              through it live. Completely optional.
            </p>
          </div>
        ) : null}
      </div>

      {state.kind === "error" ? (
        <p
          role="alert"
          className={cn(
            "mt-5 rounded-lg px-4 py-3 text-[13.5px]",
            isDark
              ? "bg-red-500/15 text-red-100"
              : "bg-red-50 text-red-700"
          )}
        >
          {state.message}
        </p>
      ) : null}

      <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={state.kind === "submitting"}
          trailingIcon={
            state.kind === "submitting" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <ArrowRight className="h-4 w-4" />
            )
          }
        >
          {state.kind === "submitting" ? "Saving your seat" : "Reserve my seat"}
        </Button>
        <p className={helperClass}>
          No pitch deck. No spam. We email once to confirm, once the week of.
        </p>
      </div>
    </form>
  );
}
