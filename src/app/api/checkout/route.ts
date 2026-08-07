import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { getStripeClient } from "@/lib/stripe";

function getAccessToken(request: Request) {
  const authorization = request.headers.get("authorization");
  return authorization?.startsWith("Bearer ")
    ? authorization.slice("Bearer ".length)
    : null;
}

export async function POST(request: Request) {
  try {
    const accessToken = getAccessToken(request);
    if (!accessToken) {
      return NextResponse.json({ error: "Sign in before purchasing your blueprint." }, { status: 401 });
    }

    const admin = getSupabaseAdmin();
    const { data, error } = await admin.auth.getUser(accessToken);
    if (error || !data.user) {
      return NextResponse.json({ error: "Your session has expired. Sign in again." }, { status: 401 });
    }

    const stripe = getStripeClient();
    const requestOrigin = new URL(request.url).origin;
    const configuredAppUrl = process.env.NEXT_PUBLIC_APP_URL?.trim();
    const appUrl = configuredAppUrl && !/localhost|127\.0\.0\.1/.test(configuredAppUrl)
      ? configuredAppUrl.replace(/\/$/, "")
      : requestOrigin;
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{
        price_data: {
          currency: "usd",
          unit_amount: 4900,
          product_data: {
            name: "CareerPivot Full Blueprint",
            description: "Your personalized interactive career-pivot roadmap.",
            tax_code: "txcd_10000000", // General digital goods
          },
        },
        quantity: 1,
      }],
      customer_email: data.user.email ?? undefined,
      client_reference_id: data.user.id,
      metadata: { user_id: data.user.id, product_key: "roadmap_blueprint" },
      success_url: `${appUrl}/roadmap?checkout=success`,
      cancel_url: `${appUrl}/roadmap?checkout=cancelled`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json({ error: "Unable to start checkout." }, { status: 500 });
  }
}
