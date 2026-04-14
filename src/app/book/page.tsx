"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";

type Step = "date" | "time" | "details";

const SLOT_DURATION_MIN = 30;

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
          : d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
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

  return (
    <div className="min-h-screen bg-smoke">
      <Navbar />

      <section className="mx-auto max-w-2xl px-6 pt-32 pb-12 md:pt-40 md:pb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-evergreen">
          Book a Call
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-cv-black md:text-[3.25rem]">
          Strategy Call
        </h1>
        <p className="mt-5 text-base leading-relaxed text-cv-black/60">
          Pick a time that works. We’ll confirm your booking and follow up by email.
        </p>
      </section>

      <section className="border-t border-cv-black/5 bg-white px-6 py-12 md:py-16">
        <div className="mx-auto max-w-xl">
          <>
              {/* Step: Date */}
              {step === "date" && (
                <div>
                  <h2 className="flex items-center gap-2 text-lg font-semibold text-cv-black">
                    <Calendar className="h-5 w-5 text-evergreen" />
                    Choose a day
                  </h2>
                  <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {days.map(({ date, label }) => (
                      <button
                        key={date}
                        type="button"
                        onClick={() => {
                          setSelectedDate(date);
                          setStep("time");
                        }}
                        className="rounded-xl border border-cv-black/10 bg-smoke py-3 text-sm font-medium text-cv-black transition-colors hover:border-evergreen/50 hover:bg-evergreen/5"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step: Time */}
              {step === "time" && selectedDate && (
                <div>
                  <button
                    type="button"
                    onClick={() => setStep("date")}
                    className="mb-4 text-sm text-cv-black/50 hover:text-cv-black"
                  >
                    ← Change day
                  </button>
                  <h2 className="flex items-center gap-2 text-lg font-semibold text-cv-black">
                    <Clock className="h-5 w-5 text-evergreen" />
                    Available times
                  </h2>
                  {slotsLoading ? (
                    <div className="mt-6 flex items-center justify-center gap-2 text-cv-black/50">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Loading…
                    </div>
                  ) : slotsError ? (
                    <p className="mt-4 text-sm text-red-600">{slotsError}</p>
                  ) : slots.length === 0 ? (
                    <p className="mt-4 text-sm text-cv-black/60">
                      No availability on this day. Try another day.
                    </p>
                  ) : (
                    <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {slots.map((slot) => (
                        <button
                          key={slot.start}
                          type="button"
                          onClick={() => {
                            setSelectedSlot(slot);
                            setStep("details");
                          }}
                          className="rounded-xl border border-cv-black/10 bg-smoke py-3 text-sm font-medium text-cv-black transition-colors hover:border-evergreen/50 hover:bg-evergreen/5"
                        >
                          {formatSlotTime(slot.start)}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Step: Details */}
              {step === "details" && selectedSlot && (
                <form onSubmit={handleSubmit}>
                  <button
                    type="button"
                    onClick={() => setStep("time")}
                    className="mb-4 text-sm text-cv-black/50 hover:text-cv-black"
                  >
                    ← Change time
                  </button>
                  <p className="mb-6 text-sm text-cv-black/60">
                    {selectedDate} at {formatSlotTime(selectedSlot.start)}
                  </p>
                  <h2 className="flex items-center gap-2 text-lg font-semibold text-cv-black">
                    <User className="h-5 w-5 text-evergreen" />
                    Your details
                  </h2>
                  <div className="mt-4 space-y-4">
                    <div>
                      <label htmlFor="guestName" className="block text-sm font-medium text-cv-black/70">
                        Name
                      </label>
                      <input
                        id="guestName"
                        type="text"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        className="mt-1 w-full rounded-xl border border-cv-black/10 bg-white px-4 py-3 text-cv-black"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="guestEmail" className="block text-sm font-medium text-cv-black/70">
                        Email *
                      </label>
                      <input
                        id="guestEmail"
                        type="email"
                        required
                        value={guestEmail}
                        onChange={(e) => setGuestEmail(e.target.value)}
                        className="mt-1 w-full rounded-xl border border-cv-black/10 bg-white px-4 py-3 text-cv-black"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="guestNotes" className="block text-sm font-medium text-cv-black/70">
                        Notes (optional)
                      </label>
                      <textarea
                        id="guestNotes"
                        value={guestNotes}
                        onChange={(e) => setGuestNotes(e.target.value)}
                        rows={3}
                        className="mt-1 w-full rounded-xl border border-cv-black/10 bg-white px-4 py-3 text-cv-black"
                        placeholder="What would you like to discuss?"
                      />
                    </div>
                  </div>
                  {submitError && (
                    <p className="mt-4 text-sm text-red-600">{submitError}</p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting || !guestEmail.trim()}
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-highlight px-8 py-4 text-sm font-semibold text-cv-black transition-all hover:bg-highlight/90 disabled:opacity-50 sm:w-auto"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Booking…
                      </>
                    ) : (
                      <>
                        Confirm booking
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
          </>
        </div>
      </section>

      <section className="border-t border-cv-black/5 px-6 py-12">
        <div className="mx-auto max-w-xl text-center text-sm text-cv-black/50">
          <p>Prefer to email or call?</p>
          <a href="mailto:connect@centervert.com" className="text-evergreen hover:underline">
            connect@centervert.com
          </a>
          {" · "}
          <a href="tel:8649878282" className="text-evergreen hover:underline">
            (864) 987-8282
          </a>
        </div>
      </section>

      <footer className="border-t border-cv-black/5 bg-smoke px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-cv-black/30 sm:flex-row">
          <p>&copy; 2026 Centervert. All rights reserved.</p>
          <Link href="/" className="hover:text-cv-black">
            Back to home
          </Link>
        </div>
      </footer>
    </div>
  );
}
