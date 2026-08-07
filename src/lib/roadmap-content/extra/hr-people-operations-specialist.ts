import type { RoadmapContent } from "../types";

export const hrPeopleOperationsSpecialistContent: RoadmapContent = {
  roleSlug: "hr-people-operations-specialist",
  roleTitle: "HR / People Operations Specialist",
  topics: [
    {
      id: "employee-lifecycle",
      title: "Employee lifecycle operations",
      outcome: "Design consistent, human-centered lifecycle workflows from hiring through departure with clear ownership and controls.",
      studyPlan: [
        "Map hire, onboarding, changes, leave, development, and offboarding events with employee and manager needs.",
        "Define inputs, approvals, service levels, systems of record, handoffs, and exception paths for each workflow.",
        "Create inclusive communications and checklists that distinguish required policy steps from helpful guidance.",
        "Pilot one workflow with fictional records, measure rework and delays, and revise based on user feedback.",
      ],
      project: "Build a hire-to-onboarding service blueprint for a 100-person nonprofit, including RACI, ticket templates, employee communications, SLA, and exception runbook.",
      resources: [
        { title: "People Operations Resources", provider: "CIPD", url: "https://www.cipd.org/en/knowledge/factsheets/", access: "Free", format: "Documentation", note: "Use the factsheets to ground lifecycle practices in evidence and professional standards." },
        { title: "HR Service Delivery", provider: "SHRM", url: "https://www.shrm.org/topics-tools/topics/hr-technology", access: "Free", format: "Documentation", note: "Reference workflow, technology, and employee-service considerations." },
      ],
      checkpoint: "A new coordinator can run the workflow from your documentation, identify every handoff, and find the safe escalation route for an exception.",
    },
    {
      id: "hris-and-data",
      title: "HRIS and people data",
      outcome: "Maintain accurate, minimal, and appropriately protected people data while supporting reliable reporting and employee service.",
      studyPlan: [
        "Create a data dictionary for people, position, event, and compensation fields; mark source, owner, and sensitivity.",
        "Map role-based access, correction requests, retention, audit logs, exports, and vendor boundaries.",
        "Practice validation rules, duplicate detection, reconciliation, and change control with synthetic records only.",
        "Document a safe reporting workflow that aggregates where possible and explains limitations to decision-makers.",
      ],
      project: "Design a privacy-conscious HRIS operating model with a sample schema, access matrix, data-quality checks, correction workflow, retention schedule, and monthly headcount report.",
      resources: [
        { title: "UK GDPR guidance", provider: "ICO", url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/", access: "Free", format: "Documentation", note: "Apply purpose limitation, minimization, accuracy, security, and accountability." },
        { title: "NIST Privacy Framework", provider: "NIST", url: "https://www.nist.gov/privacy-framework", access: "Free", format: "Documentation", note: "Use the framework to structure privacy risk identification and controls." },
        { title: "HR Data and Analytics", provider: "AIHR", url: "https://www.aihr.com/blog/hr-analytics/", access: "Free", format: "Documentation", note: "Use the examples to connect people questions to responsible measures." },
      ],
      checkpoint: "Your model documents who can access each sensitive field, how corrections are verified, and how a report avoids exposing unnecessary individual data.",
    },
    {
      id: "employee-relations",
      title: "Employee relations",
      outcome: "Handle workplace concerns with empathy, consistency, confidentiality boundaries, and fair process.",
      studyPlan: [
        "Learn the difference between listening, documenting, investigating, advising, and deciding; know when to escalate to qualified counsel.",
        "Practice neutral intake questions, fact chronology, evidence handling, confidentiality limits, and anti-retaliation communication.",
        "Create an investigation plan that considers conflicts, accessibility, language, representation, and due process.",
        "Write outcome communications that separate findings, actions, support resources, and appeal or follow-up routes.",
      ],
      project: "Create a fictional concern-intake and investigation toolkit: intake form, triage matrix, interview plan, evidence log, communication templates, and quality checklist.",
      resources: [
        { title: "Workplace Investigations", provider: "Acas", url: "https://www.acas.org.uk/disciplinary-procedure-step-by-step", access: "Free", format: "Documentation", note: "Use the fair-process guidance and adapt it to local policy and qualified advice." },
        { title: "EEOC laws and guidance", provider: "U.S. EEOC", url: "https://www.eeoc.gov/laws", access: "Free", format: "Documentation", note: "Study anti-discrimination and retaliation guidance; jurisdiction-specific legal advice remains necessary." },
      ],
      checkpoint: "A reviewer can follow the process from intake to closure and see where confidentiality is limited, conflicts are managed, and support is offered.",
    },
    {
      id: "performance-and-development",
      title: "Performance and development",
      outcome: "Support clear expectations, useful feedback, and equitable growth conversations without turning ratings into a substitute for management.",
      studyPlan: [
        "Define role outcomes and observable behaviors with employees; distinguish performance support from disciplinary action.",
        "Practice specific, timely feedback using evidence, impact, curiosity, and an agreed next step.",
        "Design development plans with capability, opportunity, support, practice, and review evidence.",
        "Audit a sample process for consistency, accessibility, bias risks, calibration quality, and employee voice.",
      ],
      project: "Create a performance-and-development toolkit for a customer-support team, including expectations rubric, manager guide, growth plan, check-in template, and calibration exercise.",
      resources: [
        { title: "Performance Management", provider: "CIPD", url: "https://www.cipd.org/en/knowledge/factsheets/performance-factsheet/", access: "Free", format: "Documentation", note: "Use evidence-based principles for continuous performance conversations." },
        { title: "Inclusive Design Principles", provider: "Microsoft", url: "https://www.microsoft.com/design/inclusive/", access: "Free", format: "Documentation", note: "Apply inclusive design thinking to forms, meetings, feedback, and development access." },
      ],
      checkpoint: "Two managers can use your toolkit consistently, and your audit names at least one bias risk plus a concrete mitigation and review measure.",
    },
    {
      id: "people-analytics",
      title: "People analytics",
      outcome: "Answer a people question with transparent, privacy-conscious analysis that supports action without reducing employees to numbers.",
      studyPlan: [
        "Frame a decision question and define population, timeframe, outcome, comparison, and ethical constraints.",
        "Clean synthetic data, check missingness and representation, and document exclusions and assumptions.",
        "Use descriptive statistics and careful segmentation; avoid publishing small-cell or sensitive results.",
        "Present findings with uncertainty, context, recommended action, owner, and a plan to check for unintended effects.",
      ],
      project: "Analyze a synthetic onboarding survey and retention dataset, produce a privacy-safe brief with three visuals, limitations, and a 60-day improvement experiment.",
      resources: [
        { title: "People Analytics", provider: "Google re:Work", url: "https://rework.withgoogle.com/subjects/people-analytics/", access: "Free", format: "Documentation", note: "Learn how to connect people questions, evidence, and action." },
        { title: "Responsible Data Science", provider: "Data & Society", url: "https://datasociety.net/library/", access: "Free", format: "Documentation", note: "Use the library to think critically about power, bias, and harm in data work." },
      ],
      checkpoint: "Your brief states what the data can and cannot show, protects small groups, and links each recommendation to an owner and follow-up measure.",
    },
  ],
};
