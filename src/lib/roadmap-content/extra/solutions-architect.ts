import type { RoadmapContent } from "../types";

export const solutionsArchitectContent: RoadmapContent = {
  roleSlug: "solutions-architect",
  roleTitle: "Solutions Architect",
  topics: [
    {
      id: "system-design",
      title: "System design and architecture discovery",
      outcome: "Translate business goals, user journeys, constraints, and existing-system realities into a bounded architecture problem with measurable success criteria.",
      studyPlan: [
        "Interview stakeholders and capture journeys, constraints, and non-goals.",
        "Turn quality attributes into measurable scenarios.",
        "Record assumptions before drawing a preferred design."
      ],
      project: "Frame an architecture for a regional healthcare scheduling platform: stakeholder map, context diagram, quality-attribute scenarios, assumptions log, and a prioritized list of open design questions.",
      resources: [
        { title: "C4 model", provider: "Simon Brown", url: "https://c4model.com/", access: "Free", format: "Documentation", note: "Use context and container views to make architecture discussions concrete at the right level of detail." },
        { title: "AWS Well-Architected Framework", provider: "AWS", url: "https://aws.amazon.com/architecture/well-architected/", access: "Free", format: "Documentation", note: "Use the pillars as prompts while eliciting non-functional requirements and trade-offs." },
        { title: "Quality attribute workshops", provider: "SEI", url: "https://www.sei.cmu.edu/library/quality-attribute-workshops/", access: "Free", format: "Documentation", note: "Practice turning vague goals like reliability or security into testable scenarios." },
      ],
      checkpoint: "A stakeholder can review your discovery packet and see the top quality attributes, the system boundaries, and the unresolved assumptions that could still change the design.",
    },
    {
      id: "cloud-architecture",
      title: "Cloud architecture and landing-zone choices",
      outcome: "Choose platform components and environment boundaries that support reliability, security, cost governance, and team ownership from day one.",
      studyPlan: [
        "Compare boundaries, identity, failure domains, and managed services.",
        "Model recovery, quota, residency, and cost constraints.",
        "Record a rejected option and its revisit condition."
      ],
      project: "Design a landing zone and reference workload for a B2B SaaS product with separate environments, centralized observability, IAM guardrails, backup strategy, and a monthly cost baseline.",
      resources: [
        { title: "Google Cloud Architecture Framework", provider: "Google Cloud", url: "https://cloud.google.com/architecture/framework", access: "Free", format: "Documentation", note: "Use the framework to connect platform choices to reliability, security, and operations." },
        { title: "Cloud Adoption Framework", provider: "Microsoft", url: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/", access: "Free", format: "Documentation", note: "Helpful for landing-zone thinking, governance, and platform standardization." },
        { title: "AWS Pricing Calculator", provider: "AWS", url: "https://calculator.aws/", access: "Free", format: "Practice", note: "Build transparent cost assumptions while comparing platform options and growth scenarios." },
      ],
      checkpoint: "Your design states the cloud boundaries, service choices, recovery targets, and cost assumptions clearly enough that another architect could challenge or extend it.",
    },
    {
      id: "integration",
      title: "Integration patterns and data contracts",
      outcome: "Design dependable connections between systems with explicit ownership, versioning, failure handling, and support expectations.",
      studyPlan: [
        "Map systems of record, consumers, latency, and ownership.",
        "Specify idempotency, versioning, retries, poison handling, and reconciliation.",
        "Walk duplicate and incompatible-message sequences."
      ],
      project: "Architect a CRM-to-billing integration with sequence diagrams, API or event contracts, reconciliation logic, support runbooks, and a clear ownership matrix across teams.",
      resources: [
        { title: "Enterprise Integration Patterns", provider: "Message Solutions", url: "https://www.enterpriseintegrationpatterns.com/", access: "Free", format: "Documentation", note: "Use the named patterns to describe and compare integration decisions precisely." },
        { title: "AsyncAPI documentation", provider: "AsyncAPI Initiative", url: "https://www.asyncapi.com/docs", access: "Free", format: "Documentation", note: "Document event-driven channels and payload contracts clearly enough for implementation and support." },
        { title: "OpenAPI specification", provider: "OpenAPI Initiative", url: "https://spec.openapis.org/oas/latest.html", access: "Free", format: "Documentation", note: "Use a formal API contract to reduce ambiguity across producers, consumers, and reviewers." },
      ],
      checkpoint: "An implementer can handle a duplicate, delayed, or incompatible message from your contract and support notes without improvising missing behavior.",
    },
    {
      id: "security",
      title: "Security architecture and compliance evidence",
      outcome: "Make identity, data protection, threat reduction, and compliance evidence part of the solution design instead of a late approval checkpoint.",
      studyPlan: [
        "Trace data classification and trust zones through user journeys.",
        "Threat-model abuse cases with controls and validation evidence.",
        "State residual risk and exception approval."
      ],
      project: "Threat-model a document-sharing platform handling customer records and produce a data-flow diagram, control matrix, IAM model, evidence checklist, and prioritized remediation plan.",
      resources: [
        { title: "OWASP Threat Modeling", provider: "OWASP", url: "https://owasp.org/www-community/Threat_Modeling", access: "Free", format: "Documentation", note: "Use the repeatable threat-model structure to keep security design practical." },
        { title: "NIST Cybersecurity Framework 2.0", provider: "NIST", url: "https://www.nist.gov/cyberframework", access: "Free", format: "Documentation", note: "Map architecture choices to identify, protect, detect, respond, and recover outcomes." },
        { title: "OAuth 2.0 security best current practice", provider: "IETF", url: "https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics", access: "Free", format: "Documentation", note: "Useful when your design includes delegated authorization, tokens, or third-party integrations." },
      ],
      checkpoint: "Every high-priority threat in your model has a mitigation, an owner, and a clear explanation of how authentication, authorization, and auditability work across the system.",
    },
    {
      id: "communication",
      title: "Communication for architecture decisions",
      outcome: "Present recommendations in a way that helps executives, engineers, and operators understand options, trade-offs, and implementation consequences.",
      studyPlan: [
        "Write one recommendation for four audiences.",
        "Expose trade-offs and rejected options in a decision matrix.",
        "Run a review with decision rights and handoff actions."
      ],
      project: "Present three architecture options for an enterprise reporting platform, including an executive one-pager, technical deep-dive deck, decision matrix, and implementation handoff packet.",
      resources: [
        { title: "MADR", provider: "ADR GitHub", url: "https://adr.github.io/madr/", access: "Free", format: "Documentation", note: "Use a durable ADR structure to record decisions, alternatives, and consequences." },
        { title: "Arc42", provider: "arc42", url: "https://arc42.org/", access: "Free", format: "Documentation", note: "Helpful for organizing architecture communication across different stakeholder concerns." },
        { title: "Atlassian DACI play", provider: "Atlassian", url: "https://www.atlassian.com/team-playbook/plays/daci", access: "Free", format: "Practice", note: "Use DACI when architecture choices need explicit recommendation, approval, and contributor roles." },
      ],
      checkpoint: "A technical and a non-technical stakeholder can each explain your recommendation, the biggest trade-off, and what happens next after reading your materials.",
    },
    {
      id: "trade-offs",
      title: "Trade-offs, migration sequencing, and cost modeling",
      outcome: "Recommend an architecture path that is technically credible, financially legible, and staged so the organization can learn and reverse course safely.",
      studyPlan: [
        "Compare at least two viable architectures using criteria derived from quality attributes, team capability, migration risk, and cost drivers.",
        "Estimate workload assumptions, unit economics, and performance bottlenecks transparently enough that finance and engineering can both critique them.",
        "Choose a migration approach, define reversible slices, and set validation and rollback gates for each phase.",
        "Update the recommendation after a load, failover, or cost exercise instead of treating the first design document as final truth.",
      ],
      project: "Create a migration plan from a monolithic reporting service to a modern event-aware platform, including phased rollout, rollback gates, validation criteria, cost comparison, and a business-case summary.",
      resources: [
        { title: "Strangler Fig application", provider: "Martin Fowler", url: "https://martinfowler.com/bliki/StranglerFigApplication.html", access: "Free", format: "Documentation", note: "Use incremental replacement patterns to keep migration risk explicit and reversible." },
        { title: "Google Cloud cost optimization framework", provider: "Google Cloud", url: "https://cloud.google.com/architecture/framework/cost-optimization", access: "Free", format: "Documentation", note: "Balance efficiency, utilization, and governance while comparing architecture paths." },
        { title: "AWS Well-Architected Labs", provider: "AWS", url: "https://wellarchitectedlabs.com/", access: "Free", format: "Practice", note: "Use the labs to pressure-test architecture choices with hands-on operational and cost scenarios." },
      ],
      checkpoint: "Your proposal includes measurable trade-off criteria, a phased migration plan with rollback points, and a cost model that names its uncertain assumptions.",
    },
  ],
};
