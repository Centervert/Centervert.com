"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Circle,
  Clock,
  MessageSquare,
  Star,
  Send,
  RotateCcw,
  Download,
  Loader2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import {
  getOrder,
  getService,
  getOrderFeedback,
  getOrderMessages,
  ORDER_FLOW,
  STATUS_LABELS,
  STATUS_COLORS,
  mockOrders,
  type Order,
  type Feedback,
  type Message,
  type OrderStatus,
} from "@/lib/marketplace";

function StatusTimeline({ current }: { current: OrderStatus }) {
  const currentIdx = ORDER_FLOW.indexOf(
    current === "revision" ? "in_progress" : current
  );

  return (
    <div className="flex items-center gap-0">
      {ORDER_FLOW.map((status, i) => {
        const isComplete = i < currentIdx;
        const isCurrent = i === currentIdx;
        return (
          <div key={status} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${
                  isComplete
                    ? "bg-green-100 text-green-600"
                    : isCurrent
                      ? "bg-evergreen text-white"
                      : "bg-cv-black/5 text-cv-black/30"
                }`}
              >
                {isComplete ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  <Circle className="h-3 w-3" />
                )}
              </div>
              <p
                className={`mt-2 text-center text-[10px] leading-tight font-medium ${
                  isComplete || isCurrent
                    ? "text-cv-black"
                    : "text-cv-black/30"
                }`}
              >
                {STATUS_LABELS[status]}
              </p>
            </div>
            {i < ORDER_FLOW.length - 1 && (
              <div
                className={`mx-1 mb-5 h-0.5 w-6 sm:w-10 ${
                  i < currentIdx ? "bg-green-300" : "bg-cv-black/10"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function camelizeOrder(row: Record<string, unknown>): Order {
  return {
    id: row.id as string,
    customerEmail: row.customer_email as string,
    customerName: row.customer_name as string,
    serviceType: row.service_type as string,
    description: row.description as string,
    priceCents: row.price_cents as number,
    status: row.status as OrderStatus,
    agentId: (row.agent_id as string) || null,
    deliverable: (row.deliverable as string) || null,
    createdAt: row.created_at as string,
    updatedAt: row.updated_at as string,
  };
}

export default function OrderStatusPage() {
  const params = useParams();
  const orderId = params.id as string;

  const [order, setOrder] = useState<Order | null>(null);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrder() {
      try {
        const res = await fetch(`/api/orders/${orderId}`);
        if (res.ok) {
          const data = await res.json();
          setOrder(camelizeOrder(data.order));
          if (data.feedback) {
            setFeedback({
              id: data.feedback.id,
              orderId: data.feedback.order_id,
              score: data.feedback.score,
              comments: data.feedback.comments,
              createdAt: data.feedback.created_at,
            });
          }
          if (data.messages) {
            setMessages(
              data.messages.map((m: Record<string, unknown>) => ({
                id: m.id as string,
                orderId: m.order_id as string,
                sender: m.sender as "customer" | "agent",
                content: m.content as string,
                createdAt: m.created_at as string,
              }))
            );
          }
          setLoading(false);
          return;
        }
      } catch {
        // fall through to mock data
      }

      const mockOrder = getOrder(orderId) ?? mockOrders[0];
      setOrder(mockOrder);
      setFeedback(getOrderFeedback(mockOrder.id) ?? null);
      setMessages(getOrderMessages(mockOrder.id));
      setLoading(false);
    }

    fetchOrder();
  }, [orderId]);

  const [newMessage, setNewMessage] = useState("");
  const [revisionNote, setRevisionNote] = useState("");
  const [showRevisionForm, setShowRevisionForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [ratingComment, setRatingComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (loading || !order) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-smoke">
        <Navbar />
        <Loader2 className="h-6 w-6 animate-spin text-evergreen" />
      </div>
    );
  }

  const service = getService(order.serviceType);

  const isDelivered =
    order.status === "review" || order.status === "completed";

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

        {/* ── Header ── */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-cv-black md:text-3xl">
              Order Status
            </h1>
            <p className="mt-1 font-mono text-xs text-cv-black/40">
              {order.id}
            </p>
          </div>
          <span
            className={`inline-flex self-start rounded-full px-3 py-1 text-xs font-medium ${STATUS_COLORS[order.status]}`}
          >
            {STATUS_LABELS[order.status]}
          </span>
        </div>

        {/* ── Timeline ── */}
        <div className="mt-8 overflow-x-auto rounded-2xl border border-cv-black/5 bg-white p-6">
          <StatusTimeline current={order.status} />
        </div>

        {/* ── Order Details ── */}
        <div className="mt-6 rounded-2xl border border-cv-black/5 bg-white p-6">
          <h2 className="text-sm font-semibold text-cv-black">
            Order Details
          </h2>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-cv-black/50">Service</span>
              <span className="font-medium text-cv-black">
                {service?.name ?? order.serviceType}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-cv-black/50">Customer</span>
              <span className="font-medium text-cv-black">
                {order.customerName}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-cv-black/50">Amount</span>
              <span className="font-medium text-cv-black">
                ${(order.priceCents / 100).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-cv-black/50">Ordered</span>
              <span className="font-medium text-cv-black">
                {new Date(order.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-cv-black/50">Last Updated</span>
              <span className="font-medium text-cv-black">
                {new Date(order.updatedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </span>
            </div>
            <div className="border-t border-cv-black/5 pt-3">
              <p className="text-cv-black/50">Description</p>
              <p className="mt-1 leading-relaxed text-cv-black/70">
                {order.description}
              </p>
            </div>
          </div>
        </div>

        {/* ── Deliverable ── */}
        {isDelivered && order.deliverable && (
          <div className="mt-6 rounded-2xl border border-evergreen/20 bg-evergreen/[0.02] p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-cv-black">
                Deliverable
              </h2>
              <button className="flex items-center gap-1.5 text-xs font-medium text-evergreen transition-colors hover:text-evergreen/70">
                <Download className="h-3.5 w-3.5" />
                Download
              </button>
            </div>
            <div className="prose prose-sm mt-4 max-w-none">
              <pre className="max-h-96 overflow-auto whitespace-pre-wrap rounded-xl border border-cv-black/5 bg-white p-4 text-xs leading-relaxed text-cv-black/70">
                {order.deliverable}
              </pre>
            </div>

            {/* Accept / Revise buttons */}
            {order.status === "review" && !showRevisionForm && (
              <div className="mt-5 flex gap-3">
                <button className="flex items-center gap-2 rounded-full bg-highlight px-6 py-2.5 text-sm font-semibold text-cv-black transition-all hover:bg-highlight/90">
                  <CheckCircle2 className="h-4 w-4" />
                  Accept Delivery
                </button>
                <button
                  onClick={() => setShowRevisionForm(true)}
                  className="flex items-center gap-2 rounded-full border border-cv-black/10 px-6 py-2.5 text-sm font-semibold text-cv-black transition-all hover:border-cv-black/20"
                >
                  <RotateCcw className="h-4 w-4" />
                  Request Revision
                </button>
              </div>
            )}

            {/* Revision form */}
            {showRevisionForm && (
              <div className="mt-5 rounded-xl border border-cv-black/10 bg-white p-4">
                <p className="text-sm font-medium text-cv-black">
                  What needs to change?
                </p>
                <textarea
                  rows={3}
                  value={revisionNote}
                  onChange={(e) => setRevisionNote(e.target.value)}
                  placeholder="Describe the changes you'd like..."
                  className="mt-2 w-full rounded-lg border border-cv-black/10 px-3 py-2 text-sm placeholder:text-cv-black/25 focus:border-evergreen focus:ring-1 focus:ring-evergreen focus:outline-none"
                />
                <div className="mt-3 flex gap-2">
                  <button className="rounded-full bg-highlight px-5 py-2 text-xs font-semibold text-cv-black transition-all hover:bg-highlight/90">
                    Submit Revision Request
                  </button>
                  <button
                    onClick={() => setShowRevisionForm(false)}
                    className="rounded-full border border-cv-black/10 px-5 py-2 text-xs font-semibold text-cv-black transition-all hover:border-cv-black/20"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── Messages ── */}
        {messages.length > 0 && (
          <div className="mt-6 rounded-2xl border border-cv-black/5 bg-white p-6">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-cv-black">
              <MessageSquare className="h-4 w-4 text-cv-black/30" />
              Messages
            </h2>
            <div className="mt-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "customer" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      msg.sender === "customer"
                        ? "bg-evergreen text-white"
                        : "bg-smoke text-cv-black"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                    <p
                      className={`mt-1 text-[10px] ${
                        msg.sender === "customer"
                          ? "text-white/50"
                          : "text-cv-black/30"
                      }`}
                    >
                      {msg.sender === "agent" ? "AI Agent" : "You"} &middot;{" "}
                      {new Date(msg.createdAt).toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message input */}
            <div className="mt-4 flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Send a message..."
                className="flex-1 rounded-full border border-cv-black/10 bg-smoke px-4 py-2.5 text-sm placeholder:text-cv-black/25 focus:border-evergreen focus:ring-1 focus:ring-evergreen focus:outline-none"
              />
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-highlight text-cv-black transition-all hover:bg-highlight/90">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* ── Rating ── */}
        {order.status === "completed" && !feedback && !submitted && (
          <div className="mt-6 rounded-2xl border border-cv-black/5 bg-white p-6">
            <h2 className="text-sm font-semibold text-cv-black">
              Rate This Order
            </h2>
            <p className="mt-1 text-xs text-cv-black/40">
              Your feedback helps our AI agent improve.
            </p>
            <div className="mt-4 flex gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  onClick={() => setRating(n)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`h-7 w-7 ${
                      n <= rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-cv-black/15"
                    }`}
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <>
                <textarea
                  rows={2}
                  value={ratingComment}
                  onChange={(e) => setRatingComment(e.target.value)}
                  placeholder="Any comments? (optional)"
                  className="mt-3 w-full rounded-xl border border-cv-black/10 px-4 py-2.5 text-sm placeholder:text-cv-black/25 focus:border-evergreen focus:ring-1 focus:ring-evergreen focus:outline-none"
                />
                <button
                  onClick={() => setSubmitted(true)}
                  className="mt-3 rounded-full bg-highlight px-5 py-2.5 text-sm font-semibold text-cv-black transition-all hover:bg-highlight/90"
                >
                  Submit Rating
                </button>
              </>
            )}
          </div>
        )}

        {/* Existing feedback display */}
        {(feedback || submitted) && (
          <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">
            <h2 className="text-sm font-semibold text-green-800">
              Your Rating
            </h2>
            <div className="mt-2 flex gap-0.5">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star
                  key={n}
                  className={`h-5 w-5 ${
                    n <= (feedback?.score ?? rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-cv-black/15"
                  }`}
                />
              ))}
            </div>
            {(feedback?.comments || ratingComment) && (
              <p className="mt-2 text-sm text-green-700">
                &ldquo;{feedback?.comments ?? ratingComment}&rdquo;
              </p>
            )}
          </div>
        )}

        {/* ── Waiting state for non-delivered orders ── */}
        {!isDelivered && order.status !== "completed" && (
          <div className="mt-6 rounded-2xl border border-cv-black/5 bg-white p-8 text-center">
            <Clock className="mx-auto h-8 w-8 text-cv-black/20" />
            <p className="mt-3 text-sm font-medium text-cv-black">
              {order.status === "paid"
                ? "Your order is in the queue. An AI agent will pick it up shortly."
                : order.status === "assigned"
                  ? "An AI agent has been assigned and will begin working soon."
                  : order.status === "in_progress"
                    ? "Your AI agent is actively working on this order."
                    : "Your order is being processed."}
            </p>
            <p className="mt-1 text-xs text-cv-black/40">
              You&apos;ll receive an email when your deliverable is ready.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
