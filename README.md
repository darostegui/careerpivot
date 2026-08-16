# CareerPivot.me

CareerPivot.me is an AI-powered career transition coach built for the **Google Cloud XPRIZE Hackathon**. 

It empowers individuals transitioning from non-traditional roles (e.g., teaching, retail, healthcare) into the tech sector. Users can upload a resume or complete a manual chat interview to receive a personalized, dynamic career roadmap and a 30-day transition playbook—all generated and orchestrated by Gemini AI.

## Key Hackathon Features

*   **Gemini 1.5 Pro AI Engine:** Deeply analyzes non-traditional resumes to translate past experience into industry-standard tech competencies.
*   **Prompt Injection Defense:** Hardened system architecture utilizing strict XML isolation tags (XPIA protection) to prevent malicious users from overriding the system persona.
*   **Dynamic ReactFlow Roadmaps:** Visualizes complex career paths as an interactive node graph, highlighting core skills, portfolio projects, and interview preparation.
*   **Automated Content Generation:** Programmatically builds a deeply-researched, 30-page (12,000+ words) PDF playbook for users using `reportlab`.
*   **Intelligent Drip Campaigns:** Features an automated 4-week email drip campaign (triggered via Google Cloud Scheduler and Resend API). The content dynamically adapts based on whether the user has purchased the premium Blueprint or not.
*   **Stripe Monetization:** Fully integrated with Stripe Live mode, supporting Beta pricing, Managed Payments, and custom promotion codes (e.g., `EMAIL25`).
*   **CAN-SPAM Compliant:** Built-in automated one-click unsubscribe routes integrated with Supabase and Resend.

## Stack

- Next.js 15 (App Router), TypeScript, and Tailwind CSS
- Google Cloud (Cloud Run, Cloud Build, Secret Manager, Cloud Scheduler)
- AI: `@google/genai` (Gemini)
- Database: Supabase (PostgreSQL, Auth, and Edge Storage)
- Payments: Stripe (Checkout & Webhooks)
- Email: Resend API
- Visualization: React Flow

## Local setup

Requirements: Node.js 20+ and npm.

```bash
git clone https://github.com/darostegui/careerpivot.git
cd careerpivot
npm install
cp .env.example .env.local
```

Set the values in `.env.local`:

```env
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-1.5-pro
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_publishable_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
RESEND_API_KEY=your_resend_api_key
RESEND_AUDIENCE_ID=your_resend_audience_id
CRON_SECRET=your_cron_secret
```

Never commit `.env.local`, API keys, service-role keys, or other credentials. 

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Supabase Deployment & Migrations

The database migrations are located in `supabase/migrations/`. 
To deploy them to your remote Supabase instance:

```bash
npx supabase login
npx supabase link --project-ref your-project-ref
npx supabase db push
```

*Note: Ensure Email/Password authentication is enabled in your Supabase Auth settings for Magic Link sign-in.*

## Production Deployment (Google Cloud)

This project uses Cloud Build to securely deploy a containerized Next.js application to Google Cloud Run.

Prerequisites:
1. Enable Cloud Run, Cloud Build, Artifact Registry, and Secret Manager APIs.
2. Create the required secrets in Google Secret Manager:
   `careerpivot-gemini-api-key`, `careerpivot-supabase-url`, `careerpivot-supabase-anon-key`, `careerpivot-supabase-service-role-key`, `careerpivot-stripe-secret-key`, `careerpivot-stripe-webhook-secret`, `careerpivot-resend-api-key`, and `careerpivot-resend-audience-id`.

Deploy from the repository root:

```bash
gcloud builds submit --config cloudbuild.yaml .
```

## Drip Campaign Automation (Google Cloud Scheduler)

The automated 4-week email drip campaign requires a daily trigger. Set up a Google Cloud Scheduler job pointing to your Cloud Run endpoint:

```bash
gcloud scheduler jobs create http careerpivot-newsletter-drip \
  --schedule="0 9 * * *" \
  --uri="https://your-cloud-run-url.run.app/api/cron/newsletter-drip" \
  --http-method=GET \
  --headers="Authorization=Bearer YOUR_CRON_SECRET"
```

## Routes

- `/` — Landing page
- `/upload` — AI resume parsing experience
- `/interview` — Manual skill extraction chat
- `/roadmap` — Interactive roadmap generation and checkout
- `/api/subscribe` — Lead capture & welcome email
- `/api/cron/newsletter-drip` — Automated daily drip campaign evaluation
- `/api/unsubscribe` — CAN-SPAM compliant unsubscribe handler

## License and XPRIZE Usage

This software is released under the **MIT License**. See [LICENSE](./LICENSE).

**XPRIZE Hackathon Note:** All code, PDF content (`pdf_content/`), generation scripts (`generate_playbook_reportlab.py`), and documentation within this repository were created specifically for the Google Cloud XPRIZE Hackathon submission. The content provided in the playbook is informational. Do not use user resumes for model training without explicit consent.
