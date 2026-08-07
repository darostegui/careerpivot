import type { RoadmapContent } from "../types";

export const customerSuccessManagerContent: RoadmapContent = {
  roleSlug: "customer-success-manager",
  roleTitle: "Customer Success Manager",
  topics: [
    {
      id: "customer-onboarding",
      title: "Customer onboarding",
      outcome: "Move new customers from signed agreement to first meaningful value with a clear, inclusive, and measurable onboarding experience.",
      studyPlan: [
        "Map the first 30 days from the customer's goals, stakeholders, technical prerequisites, and likely moments of confusion.",
        "Define activation as a customer behavior tied to value, not merely a completed training or login.",
        "Create a kickoff agenda, mutual action plan, enablement sequence, and escalation path with named owners.",
        "Review onboarding evidence with a peer and remove steps that do not help the customer reach the agreed outcome.",
      ],
      project: "Design a 30-day onboarding plan for a fictional nonprofit adopting a volunteer-management platform, including a success plan, email sequence, meeting agendas, and activation criteria.",
      resources: [
        { title: "Customer Success Foundations", provider: "Gainsight", url: "https://www.gainsight.com/customer-success/", access: "Free", format: "Documentation", note: "Use the articles to compare onboarding, adoption, and value-delivery practices." },
        { title: "Customer success resources", provider: "Gainsight", url: "https://www.gainsight.com/resources/", access: "Free", format: "Documentation", note: "Reference journey mapping, success plans, and customer-centered operating habits." },
      ],
      checkpoint: "A reviewer can identify the customer's desired outcome, first-value event, owner for every onboarding action, and the evidence that would show progress.",
    },
    {
      id: "adoption-and-value",
      title: "Adoption and value realization",
      outcome: "Turn product usage and customer conversations into ethical interventions that help customers achieve their stated goals.",
      studyPlan: [
        "Separate activity, adoption, outcome, and sentiment signals; document what each can and cannot prove.",
        "Segment customers by use case, lifecycle stage, role, and access needs before choosing an intervention.",
        "Design a targeted playbook with a helpful message, learning offer, owner, timing, and opt-out or escalation route.",
        "Measure whether the intervention changed behavior or progress toward value, and record confounding factors.",
      ],
      project: "Build an adoption playbook for three customer segments using synthetic product data, with trigger rules, outreach templates, enablement assets, and an experiment readout.",
      resources: [
        { title: "Customer Success Metrics", provider: "Gainsight", url: "https://www.gainsight.com/customer-success-metrics/", access: "Free", format: "Documentation", note: "Use as a starting vocabulary, then define measures around customer outcomes." },
        { title: "Product Analytics Guide", provider: "Amplitude", url: "https://amplitude.com/product-analytics", access: "Free", format: "Documentation", note: "Learn event, funnel, cohort, and retention concepts without treating clicks as value by default." },
      ],
      checkpoint: "Your playbook includes a baseline, a success measure, a comparison or holdout approach, and a plain-language limitation for each segment.",
    },
    {
      id: "health-and-risk",
      title: "Account health and risk",
      outcome: "Assess account health consistently and intervene early without relying on opaque scores or manipulative retention tactics.",
      studyPlan: [
        "Define health dimensions such as outcomes, adoption, relationship, support experience, and commercial context.",
        "Choose observable inputs, weights, confidence notes, and review cadence; avoid inferring intent from sensitive personal data.",
        "Create risk tiers with helpful next actions, customer-consented outreach, and clear escalation ownership.",
        "Calibrate the model against a small synthetic portfolio and investigate false positives and false negatives.",
      ],
      project: "Create a transparent health model for 20 fictional accounts, including a data dictionary, scoring sheet, intervention playbooks, and a calibration memo.",
      resources: [
        { title: "Customer success resources", provider: "Totango", url: "https://www.totango.com/resources", access: "Free", format: "Documentation", note: "Compare health-score inputs and connect them to action rather than labels alone." },
        { title: "NIST AI Risk Management Framework", provider: "NIST", url: "https://www.nist.gov/itl/ai-risk-management-framework", access: "Free", format: "Documentation", note: "Apply transparency, measurement, and harm-awareness when using automated signals." },
      ],
      checkpoint: "Another CSM can reproduce three account scores from your definitions and explain why a score is uncertain and what customer-helpful action follows.",
    },
    {
      id: "renewals-and-expansion",
      title: "Renewals and expansion",
      outcome: "Support informed renewal and growth conversations by connecting commercial timing to documented customer value.",
      studyPlan: [
        "Map the renewal timeline, buying committee, success outcomes, contractual boundaries, and customer decision criteria.",
        "Build an outcome recap with baseline, progress, evidence, unresolved risks, and the customer's own language.",
        "Practice discovery for expansion: identify a new problem and fit before proposing a larger purchase.",
        "Run a forecast review that distinguishes confirmed evidence, assumptions, customer sentiment, and next commitments.",
      ],
      project: "Prepare a renewal business review for a fictional education customer, including an outcome summary, risk plan, stakeholder map, ethical expansion hypothesis, and forecast notes.",
      resources: [
        { title: "Inbound sales course", provider: "HubSpot Academy", url: "https://academy.hubspot.com/courses/inbound-sales", access: "Free", format: "Course", note: "Practice discovery, value framing, and helpful conversations rather than feature pitching." },
        { title: "Customer Success Renewal Strategy", provider: "ChurnZero", url: "https://churnzero.com/blog/customer-renewal-strategy/", access: "Free", format: "Documentation", note: "Use the timeline ideas while keeping the customer's decision and consent central." },
      ],
      checkpoint: "Your review identifies at least two evidenced outcomes, one unresolved risk, a customer-owned next step, and a forecast confidence rationale.",
    },
    {
      id: "voice-of-customer",
      title: "Voice of the customer",
      outcome: "Collect, synthesize, and communicate customer feedback in a way that preserves context, consent, and representative nuance.",
      studyPlan: [
        "Write neutral interview questions that explore goals, barriers, workarounds, and impact without leading the participant.",
        "Capture consent, provenance, audience, and sensitivity for each note; separate observation from interpretation.",
        "Cluster feedback by job-to-be-done, segment, frequency, severity, and evidence strength.",
        "Close the loop by sharing what changed, what did not, and why, without promising every request.",
      ],
      project: "Conduct five consent-based interviews using fictional or volunteer participants, produce an anonymized insight report, prioritize themes, and draft a customer follow-up.",
      resources: [
        { title: "User interview methods", provider: "Nielsen Norman Group", url: "https://www.nngroup.com/articles/user-interviews/", access: "Free", format: "Documentation", note: "Use practical guidance for interviews, synthesis, and inclusive research." },
        { title: "Service Design Tools", provider: "Service Design Tools", url: "https://servicedesigntools.org/", access: "Free", format: "Practice", note: "Choose journey-map and research-synthesis techniques that make customer context visible." },
      ],
      checkpoint: "Your report traces every priority theme to anonymized evidence, states sampling limits, and includes a documented response or rationale.",
    },
  ],
};
