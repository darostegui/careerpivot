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

    // Integrate with Resend API directly via HTTP fetch
    if (process.env.RESEND_API_KEY) {
      try {
        if (process.env.RESEND_AUDIENCE_ID) {
          const resendResponse = await fetch(`https://api.resend.com/audiences/${process.env.RESEND_AUDIENCE_ID}/contacts`, {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email: email.toLowerCase().trim(),
              unsubscribed: false,
            })
          });

          if (!resendResponse.ok) {
            console.warn("Resend audience push failed", await resendResponse.text());
          }
        }

        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            from: "CareerPivot <hello@careerpivot.me>",
            to: [email.toLowerCase().trim()],
            subject: "Welcome to CareerPivot! Your free playbook is inside.",
            html: `
              <h2>Welcome to CareerPivot!</h2>
              <p>Thanks for subscribing to our newsletter. As promised, here is your free guide:</p>
              <p><a href="https://careerpivot.me/downloads/30-Day-Tech-Pivot-Playbook.pdf" style="display:inline-block;padding:12px 24px;background-color:#10b981;color:white;text-decoration:none;border-radius:6px;font-weight:bold;">Download The 30-Day Tech Pivot Playbook (PDF)</a></p>
              <p>We'll be sending you weekly tips on how to translate your skills into a thriving tech career.</p>
              <br/>
              <p>Best,<br/>The CareerPivot Team</p>
            `
          })
        });
        
        if (!emailResponse.ok) {
           console.error("Resend email send failed:", await emailResponse.text());
        }
      } catch (emailErr) {
        console.error("Resend API error:", emailErr);
        // We still return success to the user because their email is safely in our Supabase DB
      }
    }

    return NextResponse.json({ success: true, message: "Subscribed successfully" });
  } catch (error) {
    console.error("Newsletter API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
