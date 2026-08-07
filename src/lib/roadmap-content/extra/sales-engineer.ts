import type { RoadmapContent } from "../types";

export const salesEngineerContent: RoadmapContent = {
  roleSlug: "sales-engineer",
  roleTitle: "Sales Engineer",
  topics: [
    {
      id: "discovery-and-qualification",
      title: "Technical discovery and qualification",
      outcome:
        "Lead a structured discovery conversation that uncovers business pain, technical constraints, stakeholders, success measures, and a credible next step.",
      studyPlan: [
        "Separate symptoms, root problems, desired outcomes, current workflow, and cost of inaction before discussing features.",
        "Prepare open questions about users, architecture, security, integrations, data, procurement, timeline, and decision criteria.",
        "Practice reflective listening and qualification; label assumptions and distinguish a champion's view from verified requirements.",
        "Convert notes into a mutual action plan with owners, evidence needed, decision date, risks, and an exit condition.",
      ],
      project:
        "Run a recorded mock discovery for a fictional SaaS buyer, then deliver a one-page account brief, MEDDPICC-style qualification map, requirements list, and mutual action plan.",
      resources: [
        {
          title: "SPIN Selling question framework",
          provider: "Huthwaite International",
          url: "https://www.huthwaiteinternational.com/spin-selling/",
          access: "Free",
          format: "Documentation",
          note: "Use situation, problem, implication, and need-payoff questions without turning discovery into an interrogation.",
        },
        {
          title: "MEDDPICC framework",
          provider: "MEDDICC",
          url: "https://meddicc.com/meddpicc",
          access: "Free",
          format: "Documentation",
          note: "Use the framework as a checklist for evidence, not as a reason to invent deal certainty.",
        },
        {
          title: "The Mom Test",
          provider: "Rob Fitzpatrick",
          url: "https://www.momtestbook.com/",
          access: "Free",
          format: "Documentation",
          note: "Practice asking about real past behavior rather than collecting polite hypothetical opinions.",
        },
      ],
      checkpoint:
        "A reviewer can identify the buyer's measurable problem, technical requirements, decision process, evidence gaps, and next meeting owner from your brief alone.",
    },
    {
      id: "solution-architecture",
      title: "Solution architecture and integration",
      outcome:
        "Translate qualified requirements into a feasible solution design that explains data flow, dependencies, security boundaries, and trade-offs.",
      studyPlan: [
        "Learn to read API, identity, network, data, deployment, and integration requirements without overpromising unsupported behavior.",
        "Draw a context and component diagram, then trace one user action through systems, data transformations, permissions, and failure paths.",
        "Compare a minimum viable architecture with a scale or compliance variant; record assumptions, risks, and non-goals.",
        "Validate the design with product, security, implementation, and customer stakeholders before turning it into proposal language.",
      ],
      project:
        "Create a solution brief for integrating a fictional SaaS product with an existing CRM and identity provider, including architecture diagrams, API sequence, data map, security controls, and risks.",
      resources: [
        {
          title: "C4 model",
          provider: "Simon Brown",
          url: "https://c4model.com/",
          access: "Free",
          format: "Documentation",
          note: "Use context, container, component, and code views to keep technical storytelling legible.",
        },
        {
          title: "OpenAPI Specification",
          provider: "OpenAPI Initiative",
          url: "https://spec.openapis.org/oas/latest.html",
          access: "Free",
          format: "Documentation",
          note: "Read and annotate an API contract before claiming integration feasibility.",
        },
        {
          title: "AWS Well-Architected Framework",
          provider: "AWS",
          url: "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html",
          access: "Free",
          format: "Documentation",
          note: "Use the reliability, security, cost, and operational-excellence questions as design prompts.",
        },
      ],
      checkpoint:
        "Your design identifies every external dependency and failure boundary, and a technical reviewer can challenge one trade-off without finding an unexplained assumption.",
    },
    {
      id: "demo-engineering",
      title: "Demo engineering and storytelling",
      outcome:
        "Deliver a role-specific, evidence-led demo that connects a buyer's workflow to outcomes instead of reciting a feature list.",
      studyPlan: [
        "Choose one audience, one painful workflow, and three proof points; remove features that do not advance the decision.",
        "Build a demo environment with realistic but synthetic data, a reset path, preflight checklist, and a backup recording or screenshots.",
        "Script a narrative of before, intervention, after, and measurable result; plan questions and checkpoints for audience participation.",
        "Rehearse timing, accessibility, failure recovery, and technical handoff; capture objections and revise the flow.",
      ],
      project:
        "Produce a 12-minute recorded demo for two stakeholder personas, with a discovery-derived script, synthetic dataset, annotated architecture slide, objection log, and fallback path.",
      resources: [
        {
          title: "Presentation Zen principles",
          provider: "Garr Reynolds",
          url: "https://www.presentationzen.com/",
          access: "Free",
          format: "Documentation",
          note: "Use the visual and narrative principles to reduce slide clutter and keep attention on the decision.",
        },
        {
          title: "Storytelling with data",
          provider: "Cole Nussbaumer Knaflic",
          url: "https://www.storytellingwithdata.com/",
          access: "Free",
          format: "Practice",
          note: "Apply annotation and audience-focused visual choices to outcome evidence.",
        },
        {
          title: "WCAG 2.2 quick reference",
          provider: "W3C",
          url: "https://www.w3.org/WAI/WCAG22/quickref/",
          access: "Free",
          format: "Documentation",
          note: "Use it to check contrast, captions, keyboard access, and readable demo materials.",
        },
      ],
      checkpoint:
        "A viewer can state the buyer problem, see the relevant workflow, and name the next decision after watching your demo; the fallback path works without live improvisation.",
    },
    {
      id: "proof-of-concept-and-evaluation",
      title: "Proof of concept and technical evaluation",
      outcome:
        "Plan and run a bounded proof of concept with explicit hypotheses, acceptance tests, evidence, and a recommendation that can be trusted.",
      studyPlan: [
        "Define the decision, success criteria, baseline, scope, timebox, data boundaries, owners, and out-of-scope requests.",
        "Translate requirements into testable scenarios and gather representative synthetic or approved sample data.",
        "Track setup blockers, results, performance, security questions, and deviations in an evaluation log.",
        "Close with a scorecard, evidence links, unresolved risks, implementation estimate, and go/no-go recommendation.",
      ],
      project:
        "Run a two-week fictional POC plan for an API or analytics product: create an evaluation charter, test matrix, sample payloads, results dashboard, risk register, and executive readout.",
      resources: [
        {
          title: "Google Cloud Architecture Framework",
          provider: "Google Cloud",
          url: "https://cloud.google.com/architecture/framework",
          access: "Free",
          format: "Documentation",
          note: "Use reliability, security, cost, and operations questions when defining evaluation evidence.",
        },
        {
          title: "OWASP API Security Top 10",
          provider: "OWASP",
          url: "https://owasp.org/API-Security/editions/2023/en/0x11-t10/",
          access: "Free",
          format: "Documentation",
          note: "Turn likely API risks into POC questions and safe test cases.",
        },
        {
          title: "NIST Cybersecurity Framework 2.0",
          provider: "NIST",
          url: "https://www.nist.gov/cyberframework",
          access: "Free",
          format: "Documentation",
          note: "Use the framework to organize security evidence without presenting it as a certification.",
        },
      ],
      checkpoint:
        "Your scorecard ties every pass/fail result to a stated acceptance test, records open risks and owners, and supports a recommendation without cherry-picked evidence.",
    },
    {
      id: "commercial-and-technical-proposals",
      title: "Proposals, value, and competitive positioning",
      outcome:
        "Write a technically accurate proposal that quantifies value, distinguishes fit from gaps, handles competitors fairly, and supports implementation.",
      studyPlan: [
        "Convert discovery outcomes into a current-state, future-state, scope, assumptions, success metrics, and adoption plan.",
        "Build a simple value model with transparent inputs, sensitivity cases, implementation effort, and a statement of what is not included.",
        "Create a capability comparison based on verified requirements and public evidence; avoid unsupported competitor claims.",
        "Review the proposal with delivery and legal stakeholders, then prepare an executive summary and technical appendix.",
      ],
      project:
        "Author a complete fictional proposal: executive summary, requirements traceability matrix, architecture, implementation phases, security answers, ROI model, risks, and fair competitive comparison.",
      resources: [
        {
          title: "Value Selling Framework",
          provider: "Salesforce",
          url: "https://www.salesforce.com/resources/",
          access: "Free",
          format: "Documentation",
          note: "Use value hypotheses and customer outcomes rather than feature-count comparisons.",
        },
        {
          title: "Total Cost of Ownership",
          provider: "FinOps Foundation",
          url: "https://www.finops.org/framework/",
          access: "Free",
          format: "Documentation",
          note: "Use transparent cost categories and assumptions when discussing cloud or platform economics.",
        },
        {
          title: "RFP response best practices",
          provider: "Loopio",
          url: "https://www.loopio.com/resources",
          access: "Free",
          format: "Documentation",
          note: "Use the response-structure ideas, then validate every claim with a product or delivery owner.",
        },
      ],
      checkpoint:
        "A delivery reviewer can trace each promise to a requirement or verified capability, and a buyer can see assumptions, value inputs, implementation owners, and known gaps.",
    },
  ],
};
