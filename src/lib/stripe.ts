import Stripe from "stripe";

let stripeClient: Stripe | undefined;

export function getStripeClient() {
  if (stripeClient) return stripeClient;

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error("Stripe server credentials are not configured.");
  }

  stripeClient = new Stripe(secretKey);
  return stripeClient;
}
