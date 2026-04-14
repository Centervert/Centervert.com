"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CreditCard,
  FileText,
  PenLine,
  BookOpen,
  Code2,
  Search,
  TrendingUp,
  Mail,
  Share2,
  type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { services, getService } from "@/lib/marketplace";

const iconMap: Record<string, LucideIcon> = {
  FileText,
  PenLine,
  BookOpen,
  Code2,
  Search,
  TrendingUp,
  Mail,
  Share2,
};

function OrderFormContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const preselected = searchParams.get("service") || "";

  const [selectedService, setSelectedService] = useState(preselected);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tier, setTier] = useState<"min" | "max">("min");

  useEffect(() => {
    if (preselected) setSelectedService(preselected);
  }, [preselected]);

  const service = getService(selectedService);
  const price = service
    ? tier === "min"
      ? service.priceRange.min
      : service.priceRange.max
    : 0;

  const [submitting, setSubmitting] = useState(false);

  const canSubmit =
    selectedService && description.trim().length >= 20 && name && email && !submitting;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || !service) return;
    setSubmitting(true);

    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerEmail: email,
          customerName: name,
          serviceType: selectedService,
          description,
          priceCents: price * 100,
        }),
      });

      const data = await res.json();

      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        router.push(
          `/marketplace/success?orderId=${data.orderId || "demo"}&service=${selectedService}&price=${price}`
        );
      }
    } catch {
      router.push(
        `/marketplace/success?orderId=demo&service=${selectedService}&price=${price}`
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-smoke">
      <Navbar />

      <div className="mx-auto max-w-3xl px-6 pt-28 pb-20 md:pt-36">
        <Link
          href="/marketplace"
          className="inline-flex items-center gap-1.5 text-sm text-cv-black/40 transition-colors hover:text-cv-black"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Marketplace
        </Link>

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-cv-black md:text-[2.5rem]">
          Place an Order
        </h1>
        <p className="mt-2 text-sm text-cv-black/50">
          Select a service, describe what you need, and checkout. Our AI agent
          will get to work immediately.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-8">
          {/* ── Service Selection ── */}
          <div>
            <label className="text-sm font-semibold text-cv-black">
              1. Choose a Service
            </label>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {services.map((s) => {
                const Icon = iconMap[s.iconName] ?? FileText;
                const isSelected = selectedService === s.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedService(s.id)}
                    className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-all ${
                      isSelected
                        ? "border-evergreen bg-evergreen/5 shadow-sm"
                        : "border-cv-black/5 bg-white hover:border-cv-black/10"
                    }`}
                  >
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                        isSelected
                          ? "bg-evergreen text-white"
                          : "bg-smoke text-cv-black/30"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p
                        className={`text-sm font-semibold ${isSelected ? "text-evergreen" : "text-cv-black"}`}
                      >
                        {s.name}
                      </p>
                      <p className="mt-0.5 text-xs text-cv-black/40">
                        ${s.priceRange.min}–${s.priceRange.max} &middot;{" "}
                        {s.turnaround}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Pricing Tier ── */}
          {service && (
            <div>
              <label className="text-sm font-semibold text-cv-black">
                2. Select Package
              </label>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setTier("min")}
                  className={`rounded-xl border p-4 text-left transition-all ${
                    tier === "min"
                      ? "border-evergreen bg-evergreen/5"
                      : "border-cv-black/5 bg-white hover:border-cv-black/10"
                  }`}
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-cv-black/40">
                    Standard
                  </p>
                  <p className="mt-1 text-2xl font-bold text-evergreen">
                    ${service.priceRange.min}
                  </p>
                  <p className="mt-1 text-xs text-cv-black/40">
                    {service.deliverable}
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => setTier("max")}
                  className={`rounded-xl border p-4 text-left transition-all ${
                    tier === "max"
                      ? "border-evergreen bg-evergreen/5"
                      : "border-cv-black/5 bg-white hover:border-cv-black/10"
                  }`}
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-cv-black/40">
                    Premium
                  </p>
                  <p className="mt-1 text-2xl font-bold text-evergreen">
                    ${service.priceRange.max}
                  </p>
                  <p className="mt-1 text-xs text-cv-black/40">
                    Extended scope + priority delivery
                  </p>
                </button>
              </div>
            </div>
          )}

          {/* ── Description ── */}
          <div>
            <label
              htmlFor="description"
              className="text-sm font-semibold text-cv-black"
            >
              {service ? "3" : "2"}. Describe What You Need
            </label>
            <p className="mt-1 text-xs text-cv-black/40">
              The more detail you provide, the better the output. Include target
              audience, tone, specific requirements, and any reference material.
            </p>
            <textarea
              id="description"
              rows={6}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={
                service
                  ? `Describe your ${service.name.toLowerCase()} needs in detail...`
                  : "Select a service above first..."
              }
              className="mt-3 w-full rounded-xl border border-cv-black/10 bg-white px-4 py-3 text-sm text-cv-black placeholder:text-cv-black/25 focus:border-evergreen focus:ring-1 focus:ring-evergreen focus:outline-none"
            />
            <p
              className={`mt-1 text-xs ${description.length >= 20 ? "text-cv-black/30" : "text-red-400"}`}
            >
              {description.length}/20 minimum characters
            </p>
          </div>

          {/* ── Customer Info ── */}
          <div>
            <label className="text-sm font-semibold text-cv-black">
              {service ? "4" : "3"}. Your Information
            </label>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className="rounded-xl border border-cv-black/10 bg-white px-4 py-3 text-sm text-cv-black placeholder:text-cv-black/25 focus:border-evergreen focus:ring-1 focus:ring-evergreen focus:outline-none"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="rounded-xl border border-cv-black/10 bg-white px-4 py-3 text-sm text-cv-black placeholder:text-cv-black/25 focus:border-evergreen focus:ring-1 focus:ring-evergreen focus:outline-none"
              />
            </div>
          </div>

          {/* ── Summary + Submit ── */}
          {service && (
            <div className="rounded-2xl border border-cv-black/5 bg-white p-6">
              <h3 className="text-sm font-semibold text-cv-black">
                Order Summary
              </h3>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-cv-black/50">Service</span>
                  <span className="font-medium text-cv-black">
                    {service.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cv-black/50">Package</span>
                  <span className="font-medium text-cv-black">
                    {tier === "min" ? "Standard" : "Premium"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cv-black/50">Estimated Delivery</span>
                  <span className="font-medium text-cv-black">
                    {service.turnaround}
                  </span>
                </div>
                <div className="border-t border-cv-black/5 pt-2">
                  <div className="flex justify-between">
                    <span className="font-semibold text-cv-black">Total</span>
                    <span className="text-xl font-bold text-evergreen">
                      ${price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={!canSubmit}
            className={`flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition-all ${
              canSubmit
                ? "bg-highlight text-cv-black hover:bg-highlight/90 hover:shadow-lg"
                : "cursor-not-allowed bg-cv-black/10 text-cv-black/30"
            }`}
          >
            <CreditCard className="h-4 w-4" />
            {submitting
              ? "Redirecting to Stripe..."
              : canSubmit
                ? `Pay $${price} & Submit Order`
                : "Fill out all fields to continue"}
            {canSubmit && <ArrowRight className="h-4 w-4" />}
          </button>

          <p className="text-center text-xs text-cv-black/30">
            Payments secured by Stripe &middot; Satisfaction guaranteed &middot;
            Revisions included
          </p>
        </form>
      </div>
    </div>
  );
}

export default function OrderPage() {
  return (
    <Suspense>
      <OrderFormContent />
    </Suspense>
  );
}
