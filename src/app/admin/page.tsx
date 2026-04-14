"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  DollarSign,
  Package,
  CheckCircle2,
  Clock,
  Bot,
  Brain,
  Activity,
  ExternalLink,
  Filter,
  Loader2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import {
  mockOrders,
  mockFeedback,
  services,
  STATUS_LABELS,
  STATUS_COLORS,
  type Order,
  type Feedback,
  type OrderStatus,
} from "@/lib/marketplace";

type FilterStatus = "all" | OrderStatus;

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

export default function AdminDashboard() {
  const [statusFilter, setStatusFilter] = useState<FilterStatus>("all");
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [allFeedback, setAllFeedback] = useState<Feedback[]>(mockFeedback);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const res = await fetch("/api/orders?limit=100");
        if (res.ok) {
          const data = await res.json();
          if (data.orders && data.orders.length > 0) {
            setOrders(data.orders.map(camelizeOrder));
          }
        }
      } catch {
        // keep mock data
      }
      setLoaded(true);
    }
    fetchOrders();
  }, []);

  const filteredOrders =
    statusFilter === "all"
      ? orders
      : orders.filter((o) => o.status === statusFilter);

  const totalRevenue = orders
    .filter((o) => o.status === "completed")
    .reduce((sum, o) => sum + o.priceCents, 0);

  const activeOrders = orders.filter(
    (o) => o.status === "in_progress" || o.status === "assigned"
  ).length;

  const completedOrders = orders.filter(
    (o) => o.status === "completed"
  ).length;

  const pendingOrders = orders.filter(
    (o) => o.status === "paid" || o.status === "review"
  ).length;

  const avgRating =
    allFeedback.length > 0
      ? (
          allFeedback.reduce((sum, f) => sum + f.score, 0) /
          allFeedback.length
        ).toFixed(1)
      : "N/A";

  const filterOptions: { value: FilterStatus; label: string }[] = [
    { value: "all", label: "All Orders" },
    { value: "paid", label: "Paid" },
    { value: "in_progress", label: "In Progress" },
    { value: "review", label: "Under Review" },
    { value: "completed", label: "Completed" },
    { value: "cancelled", label: "Cancelled" },
  ];

  return (
    <div className="min-h-screen bg-smoke">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 md:pt-36">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-cv-black md:text-3xl">
              Admin Dashboard
            </h1>
            <p className="mt-1 text-sm text-cv-black/40">
              Agent marketplace overview and order management
            </p>
          </div>
          <Link
            href="/marketplace"
            className="hidden items-center gap-1.5 rounded-full border border-cv-black/10 px-4 py-2 text-sm font-medium text-cv-black transition-all hover:border-cv-black/20 sm:flex"
          >
            View Marketplace
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* ── Stats Cards ── */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: DollarSign,
              label: "Total Revenue",
              value: `$${(totalRevenue / 100).toFixed(2)}`,
              sub: `${completedOrders} completed orders`,
              color: "bg-green-100 text-green-600",
            },
            {
              icon: Package,
              label: "Active Orders",
              value: activeOrders.toString(),
              sub: `${pendingOrders} pending review`,
              color: "bg-blue-100 text-blue-600",
            },
            {
              icon: CheckCircle2,
              label: "Avg Rating",
              value: avgRating,
              sub: `${mockFeedback.length} reviews`,
              color: "bg-yellow-100 text-yellow-600",
            },
            {
              icon: Bot,
              label: "Agent Status",
              value: "Online",
              sub: "Opus 4.6 - 3 task capacity",
              color: "bg-purple-100 text-purple-600",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-cv-black/5 bg-white p-5"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.color}`}
                >
                  <stat.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-cv-black/40">
                    {stat.label}
                  </p>
                  <p className="text-xl font-bold text-cv-black">
                    {stat.value}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-xs text-cv-black/40">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* ── Agent Card ── */}
        <div className="mt-6 rounded-2xl border border-cv-black/5 bg-white p-6">
          <h2 className="flex items-center gap-2 text-sm font-semibold text-cv-black">
            <Brain className="h-4 w-4 text-evergreen" />
            Agent: Centervert Opus
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-smoke p-4">
              <p className="text-xs font-medium text-cv-black/40">Model</p>
              <p className="mt-1 text-sm font-semibold text-cv-black">
                Anthropic Opus 4.6
              </p>
            </div>
            <div className="rounded-xl bg-smoke p-4">
              <p className="text-xs font-medium text-cv-black/40">
                Specialties
              </p>
              <div className="mt-1 flex flex-wrap gap-1">
                {["content", "code-review", "seo", "research"].map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-evergreen/10 px-2 py-0.5 text-xs font-medium text-evergreen"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-smoke p-4">
              <p className="text-xs font-medium text-cv-black/40">
                Self-Learning
              </p>
              <div className="mt-1 flex items-center gap-2">
                <Activity className="h-4 w-4 text-green-500" />
                <span className="text-sm font-semibold text-cv-black">
                  Active
                </span>
                <span className="text-xs text-cv-black/40">
 -  47 knowledge entries
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Orders Table ── */}
        <div className="mt-6 rounded-2xl border border-cv-black/5 bg-white">
          <div className="flex flex-col gap-3 border-b border-cv-black/5 p-5 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-sm font-semibold text-cv-black">
              Orders ({filteredOrders.length})
            </h2>
            <div className="flex items-center gap-2">
              <Filter className="h-3.5 w-3.5 text-cv-black/30" />
              <div className="flex gap-1">
                {filterOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setStatusFilter(opt.value)}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                      statusFilter === opt.value
                        ? "bg-evergreen text-white"
                        : "text-cv-black/40 hover:bg-smoke hover:text-cv-black"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-cv-black/5 text-left text-xs font-medium uppercase tracking-wider text-cv-black/40">
                  <th className="px-5 py-3">Order</th>
                  <th className="px-5 py-3">Customer</th>
                  <th className="px-5 py-3">Service</th>
                  <th className="px-5 py-3">Amount</th>
                  <th className="px-5 py-3">Status</th>
                  <th className="px-5 py-3">Date</th>
                  <th className="px-5 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-cv-black/5">
                {filteredOrders.map((order) => {
                  const svc = services.find(
                    (s) => s.id === order.serviceType
                  );
                  return (
                    <tr
                      key={order.id}
                      className="transition-colors hover:bg-smoke/50"
                    >
                      <td className="px-5 py-4 font-mono text-xs text-cv-black/60">
                        {order.id.slice(0, 16)}...
                      </td>
                      <td className="px-5 py-4">
                        <p className="text-sm font-medium text-cv-black">
                          {order.customerName}
                        </p>
                        <p className="text-xs text-cv-black/40">
                          {order.customerEmail}
                        </p>
                      </td>
                      <td className="px-5 py-4 text-sm text-cv-black/70">
                        {svc?.name ?? order.serviceType}
                      </td>
                      <td className="px-5 py-4 text-sm font-medium text-cv-black">
                        ${(order.priceCents / 100).toFixed(2)}
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${STATUS_COLORS[order.status]}`}
                        >
                          {STATUS_LABELS[order.status]}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-xs text-cv-black/40">
                        {new Date(order.createdAt).toLocaleDateString(
                          "en-US",
                          { month: "short", day: "numeric" }
                        )}
                      </td>
                      <td className="px-5 py-4">
                        <Link
                          href={`/marketplace/status/${order.id}`}
                          className="text-xs font-medium text-evergreen transition-colors hover:text-evergreen/70"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {filteredOrders.length === 0 && (
            <div className="px-5 py-12 text-center">
              <Clock className="mx-auto h-8 w-8 text-cv-black/15" />
              <p className="mt-2 text-sm text-cv-black/40">
                No orders match this filter.
              </p>
            </div>
          )}
        </div>

        {/* ── Revenue by Service ── */}
        <div className="mt-6 rounded-2xl border border-cv-black/5 bg-white p-6">
          <h2 className="text-sm font-semibold text-cv-black">
            Revenue by Service
          </h2>
          <div className="mt-4 space-y-3">
            {services
              .map((svc) => {
                const svcOrders = orders.filter(
                  (o) =>
                    o.serviceType === svc.id && o.status === "completed"
                );
                const revenue = svcOrders.reduce(
                  (sum, o) => sum + o.priceCents,
                  0
                );
                return { ...svc, revenue, count: svcOrders.length };
              })
              .filter((s) => s.count > 0)
              .sort((a, b) => b.revenue - a.revenue)
              .map((svc) => (
                <div key={svc.id} className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-cv-black">
                        {svc.name}
                      </p>
                      <p className="text-sm font-semibold text-evergreen">
                        ${(svc.revenue / 100).toFixed(2)}
                      </p>
                    </div>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-cv-black/5">
                      <div
                        className="h-full rounded-full bg-evergreen"
                        style={{
                          width: `${totalRevenue > 0 ? (svc.revenue / totalRevenue) * 100 : 0}%`,
                        }}
                      />
                    </div>
                    <p className="mt-1 text-xs text-cv-black/30">
                      {svc.count} order{svc.count !== 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
              ))}
            {totalRevenue === 0 && (
              <p className="text-sm text-cv-black/40">
                No completed orders yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
