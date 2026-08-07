import Stripe from "stripe";
import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { getStripeClient } from "@/lib/stripe";

export async function POST(request: Request) {
  try {
    const signature = request.headers.get("stripe-signature");
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!signature || !webhookSecret) {
      return NextResponse.json({ error: "Stripe webhook is not configured." }, { status: 500 });
    }

    const stripe = getStripeClient();
    const event = stripe.webhooks.constructEvent(await request.text(), signature, webhookSecret);
    if (event.type !== "checkout.session.completed" && event.type !== "checkout.session.async_payment_succeeded") {
      return NextResponse.json({ received: true });
    }

    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session.metadata?.user_id ?? session.client_reference_id;
    if (!userId) {
      throw new Error("Stripe checkout session is missing a user ID.");
    }

    const admin = getSupabaseAdmin();
    const { error } = await admin.from("purchases").upsert({
      user_id: userId,
      product_key: session.metadata?.product_key ?? "roadmap_blueprint",
      stripe_checkout_session_id: session.id,
      stripe_payment_intent_id: typeof session.payment_intent === "string" ? session.payment_intent : null,
      stripe_customer_id: typeof session.customer === "string" ? session.customer : null,
      amount_cents: session.amount_total ?? 4900,
      currency: session.currency ?? "usd",
      status: session.payment_status === "paid" ? "paid" : "pending",
      purchased_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }, { onConflict: "stripe_checkout_session_id" });
    if (error) throw error;

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Stripe webhook error:", error);
    return NextResponse.json({ error: "Invalid Stripe webhook." }, { status: 400 });
  }
}
