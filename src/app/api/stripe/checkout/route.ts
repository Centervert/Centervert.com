import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createCheckoutSession } from "@/lib/stripe";
import { services } from "@/lib/marketplace";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { customerEmail, customerName, serviceType, description, priceCents } =
      body;

    if (!customerEmail || !serviceType || !description || !priceCents) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const service = services.find((s) => s.id === serviceType);
    if (!service) {
      return NextResponse.json(
        { error: "Invalid service type" },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert({
        customer_email: customerEmail,
        customer_name: customerName || null,
        service_type: serviceType,
        description,
        price_cents: priceCents,
        status: "pending_payment",
      })
      .select()
      .single();

    if (orderError || !order) {
      return NextResponse.json(
        { error: "Failed to create order" },
        { status: 500 }
      );
    }

    const session = await createCheckoutSession({
      orderId: order.id,
      serviceName: service.name,
      priceCents,
      customerEmail,
    });

    await supabase
      .from("orders")
      .update({ stripe_session_id: session.id })
      .eq("id", order.id);

    return NextResponse.json({
      checkoutUrl: session.url,
      orderId: order.id,
      sessionId: session.id,
    });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
