import type { RoadmapContent } from "../types";

export const digitalMarketingSpecialistContent: RoadmapContent = {
  roleSlug: "digital-marketing-specialist",
  roleTitle: "Digital Marketing Specialist",
  topics: [
    {
      id: "audience-and-positioning",
      title: "Audience and positioning",
      outcome: "Translate a real audience problem into differentiated, evidence-informed positioning and message pillars.",
      studyPlan: [
        "Define the audience's job, context, constraints, alternatives, and desired change without inventing demographic stereotypes.",
        "Review interviews, reviews, search language, and competitor claims; label evidence versus assumptions.",
        "Write a positioning statement, three message pillars, proof points, and an explicit non-audience.",
        "Test the message with a small qualitative review and revise for clarity, accessibility, and truthful claims.",
      ],
      project: "Create a positioning brief for a low-cost community solar program, including audience segments, evidence table, message hierarchy, FAQ, and claims review.",
      resources: [
        { title: "Market Research and Competitive Analysis", provider: "U.S. Small Business Administration", url: "https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis", access: "Free", format: "Documentation", note: "Use the questions to structure evidence gathering before writing copy." },
        { title: "Content Design", provider: "GOV.UK", url: "https://www.gov.uk/guidance/content-design", access: "Free", format: "Documentation", note: "Apply user-needs, plain-language, and evidence-led content principles." },
      ],
      checkpoint: "A reviewer can distinguish sourced insight, hypothesis, promise, and proof point in your brief and understand why the message is different.",
    },
    {
      id: "content-and-seo",
      title: "Content and SEO",
      outcome: "Plan useful, discoverable content that answers a real question and earns trust rather than chasing keywords or misleading clicks.",
      studyPlan: [
        "Build a topic map from audience questions, intent, existing content gaps, and the stage of the decision.",
        "Research search terms and competitors, then prioritize by usefulness, feasibility, and opportunity—not volume alone.",
        "Draft an accessible brief with purpose, outline, internal links, sources, author expertise, and a clear next action.",
        "Review for accuracy, originality, readability, accessibility, and search snippets that match the page honestly.",
      ],
      project: "Produce a six-week content plan and one fully sourced guide for a public library digital-literacy program, including an SEO brief and measurement plan.",
      resources: [
        { title: "SEO Starter Guide", provider: "Google Search Central", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide", access: "Free", format: "Documentation", note: "Focus on helpful structure, crawlability, and user experience over tricks." },
        { title: "Content Strategy Guide", provider: "Content Marketing Institute", url: "https://contentmarketinginstitute.com/what-is-content-marketing/", access: "Free", format: "Documentation", note: "Use it to connect audience needs, editorial planning, and outcomes." },
        { title: "Google Search Console", provider: "Google", url: "https://search.google.com/search-console/about", access: "Free", format: "Practice", note: "Optional free tool for inspecting queries, indexing, and page performance." },
      ],
      checkpoint: "Your published draft answers one defined audience question, cites sources, passes a readability/accessibility review, and has a baseline plus target.",
    },
    {
      id: "paid-campaigns",
      title: "Paid campaigns",
      outcome: "Design and evaluate a small paid campaign with disciplined targeting, transparent claims, budget controls, and learning goals.",
      studyPlan: [
        "Define the business objective, conversion event, audience exclusions, landing-page promise, and acceptable cost range.",
        "Create a test matrix for message, creative, audience, and placement while changing one meaningful variable at a time.",
        "Set a capped budget, naming convention, tracking plan, frequency guardrail, and pause criteria before launch.",
        "Analyze results with uncertainty and segment context, then recommend a next test rather than overclaiming causality.",
      ],
      project: "Build a simulated $1,000 campaign for a food-rescue nonprofit: produce creative variants, landing-page copy, tracking map, budget pacing sheet, and post-test analysis from synthetic data.",
      resources: [
        { title: "Google Ads Skillshop", provider: "Google", url: "https://skillshop.withgoogle.com/googleads", access: "Free", format: "Course", note: "Study campaign structure, measurement, and policy fundamentals; certification is optional." },
        { title: "Meta Ads Guide", provider: "Meta", url: "https://www.facebook.com/business/ads-guide", access: "Free", format: "Documentation", note: "Reference creative specifications and format choices without assuming every placement fits." },
        { title: "Advertising Policies", provider: "FTC", url: "https://www.ftc.gov/business-guidance/advertising-marketing", access: "Free", format: "Documentation", note: "Check truthfulness, disclosures, endorsements, and substantiation obligations." },
      ],
      checkpoint: "Your plan has a predeclared success metric, budget cap, tracking QA, audience safeguards, and a decision rule for each test outcome.",
    },
    {
      id: "analytics-and-attribution",
      title: "Analytics and attribution",
      outcome: "Measure the marketing journey with consistent definitions and communicate what the data supports, including attribution limits.",
      studyPlan: [
        "Map the funnel from exposure to qualified action and define events, dimensions, owners, and data-quality checks.",
        "Implement or simulate UTM conventions, consent-aware collection, conversion tracking, and a source-of-truth table.",
        "Compare first-touch, last-touch, and experiment-based evidence; explain why no single model proves incremental impact.",
        "Build a decision dashboard with annotations, segments, refresh cadence, and a short interpretation.",
      ],
      project: "Create an analytics measurement plan and dashboard for a fictional online course launch, including event taxonomy, UTM standard, QA checklist, synthetic report, and caveats.",
      resources: [
        { title: "Google Analytics Academy", provider: "Google", url: "https://analytics.google.com/analytics/academy/", access: "Free", format: "Course", note: "Learn event, audience, and reporting concepts through free lessons." },
        { title: "Analytics learning library", provider: "MeasureSchool", url: "https://measureschool.com/", access: "Free", format: "Practice", note: "Use the learning library to connect business questions to events and dimensions." },
        { title: "UK GDPR guidance", provider: "ICO", url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/", access: "Free", format: "Documentation", note: "Keep collection necessary, transparent, accurate, and appropriately retained." },
      ],
      checkpoint: "A teammate can reproduce your headline metric from the event definitions and see which claims are descriptive versus causal.",
    },
    {
      id: "conversion-optimization",
      title: "Conversion optimization",
      outcome: "Improve a user journey through research, accessible design, and measured experiments rather than dark patterns.",
      studyPlan: [
        "Map the journey and identify friction using analytics, support questions, usability observation, and accessibility review.",
        "Form a falsifiable hypothesis that names the user problem, proposed change, metric, guardrail, and expected direction.",
        "Design an experiment or staged comparison with a predeclared sample, duration, and stop conditions.",
        "Interpret results with practical significance, uncertainty, segment effects, and an explicit decision to ship, revise, or stop.",
      ],
      project: "Audit and redesign the donation flow for a fictional climate charity, including an annotated journey, accessible prototype, test plan, results from synthetic data, and recommendation.",
      resources: [
        { title: "Web Content Accessibility Guidelines", provider: "W3C", url: "https://www.w3.org/WAI/standards-guidelines/wcag/", access: "Free", format: "Documentation", note: "Use WCAG as a baseline for perceivable, operable, understandable experiences." },
        { title: "A/B Testing Guide", provider: "Optimizely", url: "https://www.optimizely.com/optimization-glossary/ab-testing/", access: "Free", format: "Documentation", note: "Review experiment setup, metrics, and common interpretation errors." },
      ],
      checkpoint: "Your experiment names a primary metric and guardrail, includes accessibility evidence, and reports a decision without hiding an adverse segment result.",
    },
  ],
};
