"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Calendar, Clock, User, Loader2, Mail, Phone } from "lucide-react";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/Button";
import { MeshGradient } from "@/components/marketing/MeshGradient";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";

type Step = "date" | "time" | "details";

function getNextDays(count: number): { date: string; label: string }[] {
  const out: { date: string; label: string }[] = [];
  const today = new Date();
  for (let i = 0; i < count; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() + i);
    const dateStr = d.toISOString().slice(0, 10);
    const label =
      i === 0
        ? "Today"
        : i === 1
          ? "Tomorrow"
          : d.toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
            });
    out.push({ date: dateStr, label });
  }
  return out;
}

function formatSlotTime(iso: string): string {
  return new Date(iso).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export default function BookPage() {
  const [step, setStep] = useState<Step>("date");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [slots, setSlots] = useState<{ start: string; end: string }[]>([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [slotsError, setSlotsError] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<{ start: string; end: string } | null>(null);
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestNotes, setGuestNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const days = getNextDays(14);

  useEffect(() => {
    if (step !== "time" || !selectedDate) return;
    setSlotsLoading(true);
    setSlotsError(null);
    fetch(`/api/book/availability?date=${selectedDate}`)
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to load");
        return data;
      })
      .then((data) => setSlots(data.slots || []))
      .catch((e) => {
        setSlotsError(e.message || "Could not load availability");
        setSlots([]);
      })
      .finally(() => setSlotsLoading(false));
  }, [step, selectedDate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot || !guestEmail.trim()) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          guestName: guestName.trim() || undefined,
          guestEmail: guestEmail.trim(),
          guestNotes: guestNotes.trim() || undefined,
          startAt: selectedSlot.start,
          endAt: selectedSlot.end,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Booking failed");
      window.location.href = `/book/confirm?booking=${data.booking.id}`;
    } catch (e) {
      setSubmitError(e instanceof Error ? e.message : "Booking failed");
    } finally {
      setSubmitting(false);
    }
  };

  const stepIndex = step === "date" ? 0 : step === "time" ? 1 : 2;

  return (
    <div className="min-h-screen bg-smoke">
      <Nav />
      <main>
        <section className="relative -mt-16 overflow-hidden pt-16 md:-mt-20 md:pt-20">
          <MeshGradient tone="light" />
          <Container size="wide">
            <div className="relative mx-auto max-w-2xl py-24 text-center md:py-32">
              <Eyebrow>Book a Strategy Call</Eyebrow>
              <Heading as="h1" size="display-lg" className="mt-5">
                A clear conversation. 30 minutes.
              </Heading>
              <Text size="lg" tone="muted" className="mx-auto mt-6 max-w-md">
                Pick a time that works. We confirm your booking and follow up
                by email. No pitch deck, no BDR queue.
              </Text>
            </div>
          </Container>
        </section>

        <Section tone="white" padding="md" bordered>
          <div className="mx-auto max-w-2xl">
            {/* Step indicator */}
            <ol className="mb-10 flex items-center justify-center gap-2 sm:gap-4">
              {["Day", "Time", "Details"].map((label, i) => (
                <li key={label} className="flex items-center gap-2 sm:gap-4">
                  <span
                    className={cn(
                      "inline-flex h-8 w-8 items-center justify-center rounded-full text-[12px] font-semibold transition-colors",
                      i <= stepIndex
                        ? "bg-evergreen text-highlight"
                        : "bg-cv-black/5 text-cv-black/40"
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "text-[13px] font-medium uppercase tracking-[0.12em]",
                      i <= stepIndex ? "text-cv-black" : "text-cv-black/40"
                    )}
                  >
                    {label}
                  </span>
                  {i < 2 ? (
                    <span className="hidden h-px w-6 bg-cv-black/10 sm:block" />
                  ) : null}
                </li>
              ))}
            </ol>

            <div className="rounded-3xl border border-cv-black/5 bg-smoke/60 p-6 sm:p-10">
              {step === "date" && (
                <div>
                  <h2 className="flex items-center gap-2 font-sans text-[1.375rem] font-medium text-cv-black">
                    <Calendar className="h-5 w-5 text-evergreen" />
                    Choose a day
                  </h2>
                  <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {days.map(({ date, label }) => (
                      <button
                        key={date}
                        type="button"
                        onClick={() => {
                          setSelectedDate(date);
                          setStep("time");
                        }}
                        className="rounded-xl border border-cv-black/10 bg-white py-4 text-[13.5px] font-medium text-cv-black transition-all hover:-translate-y-0.5 hover:border-evergreen/40 hover:shadow-[var(--shadow-1)]"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === "time" && selectedDate && (
                <div>
                  <button
                    type="button"
                    onClick={() => setStep("date")}
                    className="mb-5 text-[13px] text-cv-black/50 transition-colors hover:text-cv-black"
                  >
                    ← Change day
                  </button>
                  <h2 className="flex items-center gap-2 font-sans text-[1.375rem] font-medium text-cv-black">
                    <Clock className="h-5 w-5 text-evergreen" />
                    Available times
                  </h2>
                  {slotsLoading ? (
                    <div className="mt-8 flex items-center justify-center gap-2 text-cv-black/50">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Loading…
                    </div>
                  ) : slotsError ? (
                    <p className="mt-5 text-sm text-red-600">{slotsError}</p>
                  ) : slots.length === 0 ? (
                    <p className="mt-5 text-sm text-cv-black/60">
                      No availability on this day. Try another day.
                    </p>
                  ) : (
                    <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {slots.map((slot) => (
                        <button
                          key={slot.start}
                          type="button"
                          onClick={() => {
                            setSelectedSlot(slot);
                            setStep("details");
                          }}
                          className="rounded-xl border border-cv-black/10 bg-white py-4 text-[13.5px] font-medium text-cv-black transition-all hover:-translate-y-0.5 hover:border-evergreen/40 hover:shadow-[var(--shadow-1)]"
                        >
                          {formatSlotTime(slot.start)}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {step === "details" && selectedSlot && (
                <form onSubmit={handleSubmit}>
                  <button
                    type="button"
                    onClick={() => setStep("time")}
                    className="mb-5 text-[13px] text-cv-black/50 transition-colors hover:text-cv-black"
                  >
                    ← Change time
                  </button>
                  <p className="mb-6 text-[13px] text-cv-black/60">
                    {selectedDate} at {formatSlotTime(selectedSlot.start)}
                  </p>
                  <h2 className="flex items-center gap-2 font-sans text-[1.375rem] font-medium text-cv-black">
                    <User className="h-5 w-5 text-evergreen" />
                    Your details
                  </h2>
                  <div className="mt-6 space-y-5">
                    <Field
                      id="guestName"
                      label="Name"
                      value={guestName}
                      onChange={setGuestName}
                      placeholder="Your name"
                    />
                    <Field
                      id="guestEmail"
                      label="Email"
                      required
                      type="email"
                      value={guestEmail}
                      onChange={setGuestEmail}
                      placeholder="you@company.com"
                    />
                    <div>
                      <label
                        htmlFor="guestNotes"
                        className="block text-[13px] font-medium text-cv-black/70"
                      >
                        Notes <span className="text-cv-black/40">(optional)</span>
                      </label>
                      <textarea
                        id="guestNotes"
                        value={guestNotes}
                        onChange={(e) => setGuestNotes(e.target.value)}
                        rows={4}
                        className="mt-2 w-full rounded-xl border border-cv-black/10 bg-white px-4 py-3 text-[15px] text-cv-black placeholder:text-cv-black/30 focus:border-evergreen focus:outline-none focus:ring-2 focus:ring-evergreen/20"
                        placeholder="What would you like to discuss?"
                      />
                    </div>
                  </div>
                  {submitError && (
                    <p className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      {submitError}
                    </p>
                  )}
                  <Button
                    type="submit"
                    disabled={submitting || !guestEmail.trim()}
                    variant="primary"
                    size="lg"
                    leadingIcon={submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : undefined}
                    trailingIcon={!submitting ? <ArrowRight className="h-4 w-4" /> : undefined}
                    className="mt-8 w-full sm:w-auto"
                  >
                    {submitting ? "Booking…" : "Confirm booking"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </Section>

        <Section tone="smoke" padding="sm">
          <div className="mx-auto max-w-xl text-center">
            <Text size="sm" tone="muted">
              Prefer to email or call?
            </Text>
            <div className="mt-3 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-6">
              <a
                href={routes.contactEmail}
                className="inline-flex items-center gap-2 text-[14px] font-medium text-evergreen underline decoration-evergreen/30 underline-offset-4 hover:decoration-evergreen"
              >
                <Mail className="h-4 w-4" />
                {routes.emailDisplay}
              </a>
              <a
                href={routes.contactPhone}
                className="inline-flex items-center gap-2 text-[14px] font-medium text-evergreen underline decoration-evergreen/30 underline-offset-4 hover:decoration-evergreen"
              >
                <Phone className="h-4 w-4" />
                {routes.phoneDisplay}
              </a>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] font-medium text-cv-black/70">
        {label}
        {required ? <span className="text-evergreen"> *</span> : null}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-cv-black/10 bg-white px-4 py-3 text-[15px] text-cv-black placeholder:text-cv-black/30 focus:border-evergreen focus:outline-none focus:ring-2 focus:ring-evergreen/20"
        placeholder={placeholder}
      />
    </div>
  );
}
