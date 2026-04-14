import Stripe from "stripe";

/**
 * Lazy singleton. Constructing the Stripe client at module load fails the
 * Next.js production build because page-data collection runs without the
 * production env. Accessing `getStripe()` at runtime (inside an API handler)
 * keeps the build green while still throwing the same clear error at
 * request time if the env var is missing.
 */
let client: Stripe | null = null;
function getStripe(): Stripe {
  if (client) return client;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error(
      "Stripe is not configured: STRIPE_SECRET_KEY is missing in the environment."
    );
  }
  client = new Stripe(key, {
    apiVersion: "2026-02-25.clover",
    typescript: true,
  });
  return client;
}

export const stripe = new Proxy({} as Stripe, {
  get(_target, prop) {
    const real = getStripe() as unknown as Record<string, unknown>;
    return real[prop as string];
  },
});

export async function createCheckoutSession({
  orderId,
  serviceName,
  priceCents,
  customerEmail,
}: {
  orderId: string;
  serviceName: string;
  priceCents: number;
  customerEmail: string;
}) {
  const session = await getStripe().checkout.sessions.create({
    mode: "payment",
    customer_email: customerEmail,
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: serviceName,
            description: `Centervert AI Marketplace - Order ${orderId}`,
          },
          unit_amount: priceCents,
        },
        quantity: 1,
      },
    ],
    metadata: { orderId },
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/marketplace/success?orderId=${orderId}&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/marketplace/order`,
  });

  return session;
}

export function constructWebhookEvent(
  body: string | Buffer,
  signature: string
) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    throw new Error(
      "Stripe webhook is not configured: STRIPE_WEBHOOK_SECRET is missing."
    );
  }
  return getStripe().webhooks.constructEvent(body, signature, secret);
}
