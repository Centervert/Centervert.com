"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Clock, Mail, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import { getService } from "@/lib/marketplace";

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || "ord_DEMO";
  const serviceId = searchParams.get("service") || "";
  const price = searchParams.get("price") || "0";
  const service = getService(serviceId);

  return (
    <div className="min-h-screen bg-smoke">
      <Navbar />

      <div className="mx-auto max-w-2xl px-6 pt-32 pb-20 md:pt-40">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-cv-black md:text-[2.5rem]">
            Order Confirmed
          </h1>
          <p className="mt-3 text-base text-cv-black/50">
            Your payment of{" "}
            <span className="font-semibold text-evergreen">${price}</span> was
            processed successfully.
          </p>
        </div>

        {/* Order details card */}
        <div className="mt-10 rounded-2xl border border-cv-black/5 bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-cv-black">
              Order Details
            </h2>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
              Paid
            </span>
          </div>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-cv-black/50">Order ID</span>
              <span className="font-mono text-xs font-medium text-cv-black">
                {orderId}
              </span>
            </div>
            {service && (
              <div className="flex justify-between">
                <span className="text-cv-black/50">Service</span>
                <span className="font-medium text-cv-black">
                  {service.name}
                </span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-cv-black/50">Amount</span>
              <span className="font-medium text-cv-black">${price}</span>
            </div>
            {service && (
              <div className="flex justify-between">
                <span className="text-cv-black/50">Estimated Delivery</span>
                <span className="font-medium text-cv-black">
                  {service.turnaround}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* What happens next */}
        <div className="mt-8 rounded-2xl border border-cv-black/5 bg-white p-6">
          <h2 className="text-sm font-semibold text-cv-black">
            What Happens Next
          </h2>
          <div className="mt-4 space-y-5">
            {[
              {
                icon: Clock,
                title: "Agent Assigned",
                desc: "Our AI agent picks up your order within minutes and begins working.",
              },
              {
                icon: MessageSquare,
                title: "Work In Progress",
                desc: "The agent may send clarifying questions. You'll be notified by email.",
              },
              {
                icon: Mail,
                title: "Deliverable Sent",
                desc: "You'll receive your completed work via email and can view it on the status page.",
              },
            ].map((step) => (
              <div key={step.title} className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-evergreen/5 text-evergreen">
                  <step.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-cv-black">
                    {step.title}
                  </p>
                  <p className="mt-0.5 text-xs text-cv-black/50">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/marketplace/status/${orderId}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-highlight px-6 py-3.5 text-sm font-semibold text-cv-black transition-all hover:bg-highlight/90"
          >
            Track Your Order
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/marketplace"
            className="flex flex-1 items-center justify-center rounded-full border border-cv-black/10 px-6 py-3.5 text-sm font-semibold text-cv-black transition-all hover:border-cv-black/20"
          >
            Back to Marketplace
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense>
      <SuccessContent />
    </Suspense>
  );
}
