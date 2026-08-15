import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { getStripeClient } from "@/lib/stripe";

function getAccessToken(request: Request) {
  const authorization = request.headers.get("authorization");
  return authorization?.startsWith("Bearer ")
    ? authorization.slice("Bearer ".length)
    : null;
}

function productLabel(productKey: string) {
  return productKey === "roadmap_blueprint" ? "CareerPivot Full Blueprint" : productKey;
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const accessToken = getAccessToken(request);
    if (!accessToken) return NextResponse.json({ error: "Sign in to view this invoice." }, { status: 401 });

    const admin = getSupabaseAdmin();
    const { data: authData, error: authError } = await admin.auth.getUser(accessToken);
    if (authError || !authData.user) return NextResponse.json({ error: "Your session has expired. Sign in again." }, { status: 401 });

    const { id } = await params;
    const { data: purchase, error: purchaseError } = await admin
      .from("purchases")
      .select("id, product_key, amount_cents, currency, status, purchased_at, created_at, stripe_checkout_session_id, stripe_payment_intent_id")
      .eq("id", id)
      .eq("user_id", authData.user.id)
      .maybeSingle();
    if (purchaseError) throw purchaseError;
    if (!purchase) return NextResponse.json({ error: "Purchase not found." }, { status: 404 });
    if (purchase.status !== "paid") return NextResponse.json({ error: "An invoice is available only for paid purchases." }, { status: 400 });

    let hostedInvoiceUrl: string | null = null;
    let invoicePdfUrl: string | null = null;
    let receiptUrl: string | null = null;
    let invoiceNumber: string | null = null;

    try {
      const stripe = getStripeClient();
      const session = await stripe.checkout.sessions.retrieve(purchase.stripe_checkout_session_id);
      if (typeof session.invoice === "string") {
        const invoice = await stripe.invoices.retrieve(session.invoice);
        hostedInvoiceUrl = invoice.hosted_invoice_url ?? null;
        invoicePdfUrl = invoice.invoice_pdf ?? null;
        invoiceNumber = invoice.number ?? null;
      }
      const paymentIntentId = purchase.stripe_payment_intent_id
        ?? (typeof session.payment_intent === "string" ? session.payment_intent : null);
      if (paymentIntentId) {
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId, { expand: ["latest_charge"] });
        const charge = paymentIntent.latest_charge;
        if (charge && typeof charge !== "string") receiptUrl = charge.receipt_url ?? null;
      }
    } catch (stripeError) {
      console.warn("Unable to load Stripe invoice links:", stripeError);
    }

    return NextResponse.json({
      id: purchase.id,
      invoiceNumber: invoiceNumber ?? `INV-${purchase.id.slice(0, 8).toUpperCase()}`,
      status: purchase.status,
      product: productLabel(purchase.product_key),
      productKey: purchase.product_key,
      amountCents: purchase.amount_cents,
      currency: purchase.currency,
      purchasedAt: purchase.purchased_at ?? purchase.created_at,
      email: authData.user.email ?? null,
      hostedInvoiceUrl,
      invoicePdfUrl,
      receiptUrl,
    });
  } catch (error) {
    console.error("Invoice lookup error:", error);
    return NextResponse.json({ error: "Unable to load this invoice." }, { status: 500 });
  }
}
