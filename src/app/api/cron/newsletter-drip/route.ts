import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export async function GET(request: Request) {
  // In a real production app, verify a CRON_SECRET header here to prevent unauthorized access
  const authHeader = request.headers.get("authorization");
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Resend API key missing" }, { status: 500 });
  }

  try {
    const admin = getSupabaseAdmin();
    
    // Fetch all subscribers
    const { data: subscribers, error } = await admin
      .from("newsletter_subscribers")
      .select("email, created_at");

    if (error || !subscribers) {
      throw error || new Error("No subscribers found");
    }

    const now = new Date();
    let emailsSent = 0;

    for (const sub of subscribers) {
      const createdDate = new Date(sub.created_at);
      const diffTime = Math.abs(now.getTime() - createdDate.getTime());
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      let subject = "";
      let html = "";

      // Drip Campaign Logic
      if (diffDays === 7) {
        // Week 1 Email
        subject = "Week 1: Translating your past experience into Tech Speak";
        html = `
          <h2>Welcome to Week 1 of your Pivot!</h2>
          <p>Hi there,</p>
          <p>The biggest mistake career pivoters make is using the jargon from their old industry on their new resume. Tech recruiters don't know what a "Shift Lead" or a "Floor Manager" does.</p>
          <p><strong>Your goal this week:</strong> Translate your responsibilities into impact.</p>
          <ul>
            <li>Instead of "Managed schedule", use <em>"Optimized resource allocation for a 15-person team."</em></li>
            <li>Instead of "Handled customer complaints", use <em>"De-escalated critical client issues, improving retention."</em></li>
          </ul>
          <p>Use your <a href="https://careerpivot.me/downloads/30-Day-Tech-Pivot-Playbook.pdf">30-Day Playbook</a> to rewrite 3 bullet points on your resume today.</p>
          <br/>
          <p>Best,<br/>The CareerPivot Team</p>
        `;
      } else if (diffDays === 14) {
        // Week 2 Email
        subject = "Week 2: The 'Show, Don't Tell' Portfolio Strategy";
        html = `
          <h2>Welcome to Week 2!</h2>
          <p>If you don't have the job title yet, you need to prove you can do the job.</p>
          <p>This week, build a micro-portfolio project. You don't need to write code. If you want to be a Product Manager, write a 2-page PRD (Product Requirements Document) for a feature missing from your favorite app. If you want to be in Customer Success, write an onboarding email sequence.</p>
          <p>Upload it to a public Google Doc or Notion page, and link it on your resume.</p>
          <br/>
          <p>Keep pushing,<br/>The CareerPivot Team</p>
        `;
      } else if (diffDays === 21) {
        // Week 3 Email
        subject = "Week 3: Acing the Tech Interview without a Tech Background";
        html = `
          <h2>Week 3 is here! Let's talk interviews.</h2>
          <p>When interviewing in tech without a tech background, your secret weapon is the <strong>STAR Method</strong> (Situation, Task, Action, Result).</p>
          <p>Tech companies value structured thinking. When asked a behavioral question, don't ramble. Give them the context, exactly what you were tasked with, the specific action YOU took, and the measurable result.</p>
          <p>Head over to <a href="https://careerpivot.me">CareerPivot.me</a> and review your custom roadmap's checkpoints to see exactly what hiring managers are looking for in your target role.</p>
          <br/>
          <p>You've got this,<br/>The CareerPivot Team</p>
        `;
      }

      // If a matching day was found, send the email
      if (subject && html) {
        try {
          await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              from: "CareerPivot <hello@careerpivot.me>",
              to: [sub.email],
              subject: subject,
              html: html
            })
          });
          emailsSent++;
        } catch (emailErr) {
          console.error(\`Failed to send drip email to \${sub.email}:\`, emailErr);
        }
      }
    }

    return NextResponse.json({ success: true, emailsSent });
  } catch (error) {
    console.error("Cron API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
