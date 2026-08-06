# Build with Gemini XPRIZE: AI Career Pivot Coach Master Plan

## 1. Product Requirements (PRD)

### Core Value Proposition
An AI-driven platform that analyzes a user's resume and provides a highly visual, actionable roadmap to pivot into a new tech or professional career. Designed to replace expensive career coaches by providing immediate, personalized, and data-backed guidance.

### User Flow
1. **Data Ingestion:** User uploads their LinkedIn PDF or standard resume.
2. **AI Analysis & Suggestion:** Gemini 1.5 analyzes the user's background and suggests 3 highly achievable "Pivot Roles" where their existing skills overlap. A "Custom Role" input is also provided.
3. **Registration Wall:** To view the results, the user is required to register via Google, Facebook, or Email (Lead capture).
4. **The Hook (Free Tier):**
   * **Executive Summary:** An encouraging AI-generated summary explaining *why* the pivot is achievable.
   * **Market Data:** Salary projections and estimated time-to-pivot.
   * **Skill Gap Visual:** A progress bar (e.g., "You already have 40% of the required skills!").
5. **The Paywall ($49 One-Time):** User is prompted to buy the full blueprint, backed by a "Trust-by-Default Money-Back Guarantee" (e.g., "If you didn't find this useful in landing an interview within 6 months, simply email us for a full refund, no questions asked").
6. **The Blueprint (Paid Tier):** Unlocks an interactive, `roadmap.sh`-style node graph. Each node contains specific, vetted free resources (Google Courses, API credits, tutorials) tailored to bridge their specific skill gaps.

## 2. Architecture & Tech Stack

### Frontend & UI
* **Framework:** Next.js (App Router) for Server-Side Rendering (SSR) to ensure fast load times, excellent SEO, and seamless API route integration.
* **Design System & Styling:** Tailwind CSS combined with shadcn/ui. The visual design will avoid generic SaaS templates. We will employ a distinct, editorial, and industrial aesthetic—using a muted palette with one stark accent color, brutalist typography (e.g., Space Grotesk for display, Inter for body), and highly intentional spacing. 
* **Interactive Visualization:** `React Flow` to render the `roadmap.sh`-style interactive node graph, ensuring it is fully responsive and touch-friendly for mobile users.

### Backend & Data
* **Database & Auth:** Supabase (PostgreSQL) for rapid deployment. It provides secure Row Level Security (RLS) and handles out-of-the-box OAuth (Google, Facebook) and email registration to support the lead-capture flow.
* **AI Integration:** Google Cloud Vertex AI using the **Gemini 1.5 Pro** model. Its massive context window is utilized to ingest the user's PDF resume and output structured JSON, mapping their existing skills to the required nodes of the pivot roadmap.

### Operations & Payments
* **Payments:** Stripe API for handling the $49 one-time blueprint paywall.
* **Monitoring & Observability:** Splunk will be integrated for advanced logging, monitoring, and tracing to ensure high reliability and immediate error detection, leveraging enterprise-grade observability practices.

## 3. Data Strategy

### Roadmap & Skill Generation (Hybrid Approach)
* **Base Templates:** Core role roadmaps will be seeded by scraping/hardcoding established paths from sources like `roadmap.sh`. These baseline graphs provide a guaranteed high-quality structure.
* **AI Personalization:** Gemini 1.5 Pro will ingest the base template and the user's resume, performing a "delta analysis." It will dynamically improve the template and mark which nodes the user has already mastered, creating a personalized skill-gap graph.

### Salary & Market Data
* **Live & Cached Data:** We will use a hybrid model combining Gemini's internal knowledge with a scheduled scraping engine (or job board API) to pull live salary bands and market demand. 
* **Data Freshness:** Scraped data will be cached in Supabase to ensure the Free Tier's Executive Summary provides highly accurate, up-to-date financial motivation without unnecessary API latency.

### Resource & Certification Database
* **Curated Content DB:** Supabase will house a relational database linking specific roadmap nodes (skills) to vetted learning materials.
* **Monetization & Trust:** The database will feature a mix of free resources (Google courses, YouTube) and premium courses with affiliate links to generate secondary revenue. 
* **Certifications:** Key nodes will explicitly promote recognized industry certifications (e.g., CCNA, PMP, AWS Solutions Architect).
* **Future-Proofing:** The data schema will be designed to support future "community curation," allowing users to submit and upvote the best resources for specific skills.

## 4. Economics & Go-to-Market (GTM)

### Revenue Model
* **Core Product:** $49 one-time purchase for the complete, personalized Career Pivot Blueprint (interactive roadmap, resource links, skills gap analysis).
* **Secondary Revenue:** Affiliate commissions from recommended premium courses and certifications (e.g., Coursera, Udemy, specialized bootcamps).
* **Future Upsells:**
  * **AI Mock Interviews:** $99 add-on for a 30-minute voice-based technical/behavioral interview powered by Gemini's multimodal capabilities.
  * **Community Access:** $9/month subscription for access to a private Discord/Slack of other career pivoters and curated job board access.

### Cost Structure & Margins
* **Infrastructure:** Supabase, Vercel (Next.js), and Splunk will operate well within free/low-cost tiers during the 90-day sprint.
* **AI Costs:** Gemini 1.5 Pro API calls for resume parsing and roadmap generation are estimated at < $0.50 to $1.00 per user (depending on input token length).
* **Gross Margin:** Highly scalable software economics. Projected gross margin on the $49 core product is ~98%.

### Go-to-Market Strategy (90-Day Sprint)
To meet the XPRIZE requirement of real revenue and users within 90 days, we will focus on low-CAC (Customer Acquisition Cost) growth engines. Because the free tier incurs a ~$0.50 Gemini compute cost per user, our organic viral coefficient must be strong enough to offset this baseline cost:
1. **Viral Engineering (Product-Led Growth):** Built-in virality loops. The full interactive graph is locked behind the paywall, but users can unlock a "teaser" premium node or specific resource by sharing their "Free Executive Pivot Summary" on LinkedIn or X (Twitter). This organically targets our demographic.
2. **Content Marketing & SEO:** Rapidly generate and publish high-quality, programmatic SEO articles (e.g., "How to pivot from QA to DevOps in 2026", "Retail to Tech roadmap"). These will serve as top-of-funnel landing pages that drive users directly into the free resume-upload tool.