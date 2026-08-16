import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request: Request) {
  try {
    const { email, source, notifyOnSignup = false } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const admin = getSupabaseAdmin();
    
    // Store in our local table for now
    const { error } = await admin
      .from("newsletter_subscribers")
      .upsert({ 
        id: email.toLowerCase().trim(),
        email: email.toLowerCase().trim(),
        source: source || "website"
      }, { onConflict: "email" });

    if (error) {
      console.error("Newsletter DB error:", error);
      return NextResponse.json({ error: "Failed to save subscription" }, { status: 500 });
    }

    // TODO: In production, integrate with Brevo or Resend here.
    // Example Brevo integration:
    // await fetch("https://api.brevo.com/v3/contacts", {
    //   method: "POST",
    //   headers: {
    //     "accept": "application/json",
    //     "content-type": "application/json",
    //     "api-key": process.env.BREVO_API_KEY!
    //   },
    //   body: JSON.stringify({ email, listIds: [2] }) // Add to specific list
    // });

    return NextResponse.json({ success: true, message: "Subscribed successfully" });
  } catch (error) {
    console.error("Newsletter API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
