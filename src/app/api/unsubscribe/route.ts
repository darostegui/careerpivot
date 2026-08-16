import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const admin = getSupabaseAdmin();
    
    // Update in our local table
    const { error } = await admin
      .from("newsletter_subscribers")
      .update({ unsubscribed: true })
      .eq("email", email.toLowerCase().trim());

    if (error) {
      console.error("Newsletter DB error:", error);
      return NextResponse.json({ error: "Failed to process unsubscribe" }, { status: 500 });
    }

    // Integrate with Resend API directly to unsubscribe them in the audience too
    if (process.env.RESEND_API_KEY && process.env.RESEND_AUDIENCE_ID) {
      try {
        await fetch(`https://api.resend.com/audiences/${process.env.RESEND_AUDIENCE_ID}/contacts/${email.toLowerCase().trim()}`, {
          method: "PATCH",
          headers: {
            "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            unsubscribed: true,
          })
        });
      } catch (err) {
        console.error("Resend API unsubscribe error:", err);
      }
    }

    // Return a simple HTML response saying they've been unsubscribed
    return new NextResponse(`
      <html>
        <head>
          <title>Unsubscribed</title>
          <style>
            body { font-family: system-ui, -apple-system, sans-serif; text-align: center; padding-top: 50px; color: #333; }
            .container { max-width: 500px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
            h1 { color: #10b981; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>You have been unsubscribed</h1>
            <p>We're sorry to see you go! You will no longer receive newsletter emails from CareerPivot.me.</p>
          </div>
        </body>
      </html>
    `, {
      headers: { "Content-Type": "text/html" }
    });
  } catch (error) {
    console.error("Unsubscribe API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
