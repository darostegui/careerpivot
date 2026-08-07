# CareerPivot.me

CareerPivot.me is an AI career transition coach. Users can upload a LinkedIn PDF or answer a short manual interview, then receive personalized pivot-role suggestions and a visual learning roadmap powered by Gemini.

## Stack

- Next.js App Router, TypeScript, and Tailwind CSS
- Gemini via `@google/genai`
- Supabase Auth and PostgreSQL
- React Flow for roadmap visualization

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
GEMINI_MODEL=gemini-3-flash-preview
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_publishable_key
MARKET_DATA_PROVIDER_URL=optional_provider_endpoint
MARKET_DATA_API_KEY=optional_provider_key
```

Market data does not require another provider key: `/api/market-data?slug=...` uses
curated role metadata by default. If `MARKET_DATA_PROVIDER_URL` is configured, the
provider response is used only when it passes validation; otherwise the response
explicitly reports `fallback: true`.

Never commit `.env.local`, API keys, service-role keys, or other credentials. Environment files are ignored by `.gitignore`.

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Supabase deployment

The database migration is in `supabase/migrations/`. To deploy it, install or run the Supabase CLI with the public npm registry, authenticate, link the project, and push:

```bash
npm_config_registry=https://registry.npmjs.org npx supabase@latest login
npm_config_registry=https://registry.npmjs.org npx supabase@latest link --project-ref your-project-ref
npm_config_registry=https://registry.npmjs.org npx supabase@latest db push
```

Enable Email authentication in Supabase. Google and Facebook sign-in require configuring their OAuth credentials in Supabase Authentication settings.

## Production deployment

The project includes a production Docker image and a Cloud Build configuration for
Cloud Run. The default service is configured to scale to zero, use one vCPU and
512 MiB memory, and limit instances to two to keep a small deployment inexpensive.

Prerequisites:

1. Install and authenticate the Google Cloud CLI.
2. Select a Google Cloud project and enable Cloud Run, Cloud Build, Artifact Registry,
   and Secret Manager APIs.
3. Create the six Secret Manager secrets referenced by `cloudbuild.yaml`:
   `careerpivot-gemini-api-key`, `careerpivot-supabase-url`,
   `careerpivot-supabase-anon-key`, `careerpivot-supabase-service-role-key`,
   `careerpivot-stripe-secret-key`, and `careerpivot-stripe-webhook-secret`.
4. Grant the Cloud Build service account permission to push to Artifact Registry,
   deploy Cloud Run services, and access the secrets.

One-time project setup:

```bash
gcloud config set project YOUR_PROJECT_ID
gcloud services enable run.googleapis.com cloudbuild.googleapis.com \
  artifactregistry.googleapis.com secretmanager.googleapis.com

for secret in careerpivot-gemini-api-key careerpivot-supabase-url \
  careerpivot-supabase-anon-key careerpivot-supabase-service-role-key \
  careerpivot-stripe-secret-key careerpivot-stripe-webhook-secret; do
  gcloud secrets create "$secret" --replication-policy=automatic
done
```

Add each secret value using a file or stdin. Do not put credentials in
`cloudbuild.yaml` or commit them:

```bash
printf '%s' "$GEMINI_API_KEY" | gcloud secrets versions add careerpivot-gemini-api-key --data-file=-
printf '%s' "$NEXT_PUBLIC_SUPABASE_URL" | gcloud secrets versions add careerpivot-supabase-url --data-file=-
printf '%s' "$NEXT_PUBLIC_SUPABASE_ANON_KEY" | gcloud secrets versions add careerpivot-supabase-anon-key --data-file=-
printf '%s' "$SUPABASE_SERVICE_ROLE_KEY" | gcloud secrets versions add careerpivot-supabase-service-role-key --data-file=-
printf '%s' "$STRIPE_SECRET_KEY" | gcloud secrets versions add careerpivot-stripe-secret-key --data-file=-
printf '%s' "$STRIPE_WEBHOOK_SECRET" | gcloud secrets versions add careerpivot-stripe-webhook-secret --data-file=-
```

The roadmap checkout uses Stripe-hosted Checkout in payment mode. Configure a
Stripe webhook endpoint at:

```text
https://careerpivot.me/api/stripe/webhook
```

Subscribe it to `checkout.session.completed` and
`checkout.session.async_payment_succeeded`, then store the endpoint signing
secret as `STRIPE_WEBHOOK_SECRET`. The app records paid blueprint purchases in
the `purchases` table and unlocks the roadmap only after the verified webhook
arrives. The Stripe publishable key is not required for this server-created
Checkout flow.

Create the Artifact Registry repository once:

```bash
gcloud artifacts repositories create careerpivot \
  --repository-format=docker \
  --location=us-central1
```

Deploy from the repository root:

```bash
gcloud builds submit \
  --config cloudbuild.yaml \
  --substitutions=_SERVICE=careerpivot,_REGION=us-central1
```

The command prints the public Cloud Run URL. The application health endpoint is
available at `/api/health`.

## Resume privacy model

Resume PDFs are stored in a private Supabase Storage bucket under the authenticated user's ID. The application stores the file only after explicit storage consent, keeps training consent disabled by default, and records a one-year retention deadline. Users can request deletion through the authenticated resume deletion endpoint.

This implementation is a technical privacy baseline, not legal advice or a complete privacy notice. Before accepting real users in the United States or European Union, have counsel review the terms, privacy notice, lawful basis, retention schedule, deletion workflows, processor agreements, regional data transfers, cookie consent, and user rights procedures. Do not use resumes for model training without a separate, specific opt-in.

## Routes

- `/` — product landing page
- `/upload` — resume upload experience
- `/interview` — manual skill extraction chat
- `/roadmap` — interactive roadmap preview
- `/login` — Supabase email magic-link sign-in

## License

This project is released under the MIT License. See [LICENSE](./LICENSE).
