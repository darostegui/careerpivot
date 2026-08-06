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
```

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

Deploy the Next.js app to Vercel or another Node-compatible host. Configure the same environment variables in the host's project settings, then build with:

```bash
npm run build
npm run start
```

The application health endpoint is available at `/api/health`.

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
