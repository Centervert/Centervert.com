import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
  typescript: true,
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
  const session = await stripe.checkout.sessions.create({
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
  return stripe.webhooks.constructEvent(
    body,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET!
  );
}
