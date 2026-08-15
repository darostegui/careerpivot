import type { RoadmapContent } from "../types";

export const healthcareAdministratorContent: RoadmapContent = {
  roleSlug: "healthcare-administrator",
  roleTitle: "Healthcare Administrator",
  topics: [
    {
      id: "healthcare-operations",
      title: "Healthcare operations",
      outcome:
        "Coordinate patient-facing operations so access, capacity, handoffs, and service quality are visible and improvable.",
      studyPlan: [
        "Map patient access, handoffs, queues, and safety boundaries with frontline staff.",
        "Stratify demand, no-shows, wait, capacity, and continuity.",
        "Pilot one change and review balancing measures with the care team."
      ],
      project:
        "Complete the scenario as a patient-journey map, huddle card, and scheduling experiment; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "Operations Management in Health Care",
          provider: "MIT OpenCourseWare",
          url: "https://ocw.mit.edu/search/?q=operations+management",
          access: "Free",
          format: "Course",
          note: "Operations foundations that transfer to capacity, queues, flow, and service delivery.",
        },
        {
          title: "Quality Improvement Essentials Toolkit",
          provider: "Institute for Healthcare Improvement",
          url: "https://www.ihi.org/resources/tools/quality-improvement-essentials-toolkit",
          access: "Free",
          format: "Practice",
          note: "Templates for charters, process maps, run charts, and PDSA improvement work.",
        },
        {
          title: "Primary Care Practice Facilitation Curriculum",
          provider: "Agency for Healthcare Research and Quality",
          url: "https://pcmh.ahrq.gov/page/primary-care-practice-facilitation-curriculum",
          access: "Free",
          format: "Documentation",
          note: "Practical materials for workflow improvement and team-based primary care.",
        },
      ],
      checkpoint:
        "Access improves without hiding continuity, staff-load, or safety effects.",
    },
    {
      id: "revenue-cycle",
      title: "Revenue cycle and reimbursement",
      outcome:
        "Follow a patient account from registration through payment, identify preventable leakage, and coordinate compliant corrective action.",
      studyPlan: [
        "Follow a synthetic account from registration through remittance.",
        "Reconcile denials and aging before ranking causes.",
        "Choose a correction that protects patient experience and audit it."
      ],
      project:
        "Complete the scenario as a denial taxonomy, root-cause cases, and compliant action brief; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "Revenue Cycle Management",
          provider: "HFMA",
          url: "https://www.hfma.org/topics/revenue-cycle.html",
          access: "Free",
          format: "Documentation",
          note: "Healthcare-finance reference for revenue-cycle stages, performance, and improvement.",
        },
        {
          title: "Medicare Claims Processing Manual",
          provider: "Centers for Medicare & Medicaid Services",
          url: "https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms",
          access: "Free",
          format: "Documentation",
          note: "Primary-source manual for understanding payer rules and claim-processing evidence.",
        },
        {
          title: "Medical Billing and Coding",
          provider: "Coursera / University of Minnesota",
          url: "https://www.coursera.org/browse/health",
          access: "Free audit",
          format: "Course",
          note: "Optional orientation to terminology, coding workflows, and reimbursement operations.",
        },
      ],
      checkpoint:
        "Denial totals reconcile, causes are quantified, and the intervention includes patient-impact review.",
    },
    {
      id: "healthcare-compliance-and-privacy",
      title: "Healthcare compliance and privacy",
      outcome:
        "Handle protected health information and operational decisions with appropriate access, documentation, training, and escalation.",
      studyPlan: [
        "Map PHI flows, minimum-necessary use, roles, vendors, and retention.",
        "Run a tabletop separating facts, assumptions, notifications, and support.",
        "Assign corrective actions with evidence and verification dates."
      ],
      project:
        "Complete the scenario as a data-flow map, breach tabletop record, and training tracker; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "HIPAA for Professionals",
          provider: "U.S. Department of Health & Human Services",
          url: "https://www.hhs.gov/hipaa/for-professionals/index.html",
          access: "Free",
          format: "Documentation",
          note: "Authoritative privacy, security, breach, and enforcement guidance.",
        },
        {
          title: "Security Risk Assessment Tool",
          provider: "HHS and Office of the National Coordinator",
          url: "https://www.healthit.gov/topic/privacy-security-and-hipaa/security-risk-assessment-tool",
          access: "Free",
          format: "Practice",
          note: "Downloadable assessment workflow for documenting healthcare security risks and safeguards.",
        },
        {
          title: "Healthcare Data Security",
          provider: "Coursera / Johns Hopkins University",
          url: "https://www.coursera.org/learn/healthcare-data-security",
          access: "Free audit",
          format: "Course",
          note: "Optional structured learning for privacy, security, and health-data governance.",
        },
      ],
      checkpoint:
        "The kit shows minimum-necessary access, escalation, support, and verified corrective work.",
    },
    {
      id: "quality-and-patient-safety",
      title: "Quality and patient safety",
      outcome:
        "Use reliable measures and structured review to reduce harm, improve care processes, and make quality work actionable for teams.",
      studyPlan: [
        "Define outcome, process, balancing, and patient-reported measures.",
        "Analyze de-identified events using just-culture questions.",
        "Run PDSA and check for new risks."
      ],
      project:
        "Complete the scenario as a cause map, run chart, safety brief, and PDSA review; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "Patient Safety Primer",
          provider: "AHRQ PSNet",
          url: "https://psnet.ahrq.gov/",
          access: "Free",
          format: "Documentation",
          note: "Evidence-informed primers on safety science, errors, reporting, and improvement.",
        },
        {
          title: "Quality Improvement Essentials Toolkit",
          provider: "Institute for Healthcare Improvement",
          url: "https://www.ihi.org/resources/tools/quality-improvement-essentials-toolkit",
          access: "Free",
          format: "Practice",
          note: "Reusable templates for aims, measures, cause analysis, and PDSA cycles.",
        },
        {
          title: "Patient Safety and Quality Improvement",
          provider: "Coursera / Johns Hopkins University",
          url: "https://www.coursera.org/browse/health",
          access: "Free audit",
          format: "Course",
          note: "Optional structured grounding in quality methods and safety culture.",
        },
      ],
      checkpoint:
        "The packet supports learning without blame and schedules an effectiveness check.",
    },
    {
      id: "workforce-and-budget",
      title: "Workforce and budget management",
      outcome:
        "Plan staffing and spending around patient demand while explaining variances, labor constraints, and service trade-offs.",
      studyPlan: [
        "Translate volume, acuity, skill mix, coverage, absence, and supplies into a model.",
        "Reconcile actuals to plan and classify variances.",
        "Compare options using access, quality, workload, and finance."
      ],
      project:
        "Complete the scenario as a scenario workbook, manager briefing, and labor-risk plan; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "Healthcare Financial Management",
          provider: "HFMA",
          url: "https://www.hfma.org/",
          access: "Free",
          format: "Documentation",
          note: "Professional overview of budgeting, performance, finance, and healthcare decision support.",
        },
        {
          title: "Healthcare Workforce",
          provider: "Health Resources & Services Administration",
          url: "https://bhw.hrsa.gov/health-workforce-analysis",
          access: "Free",
          format: "Documentation",
          note: "Public workforce data and context for supply, demand, and workforce planning.",
        },
        {
          title: "Healthcare Finance",
          provider: "Coursera / University of Pennsylvania",
          url: "https://www.coursera.org/browse/health",
          access: "Free audit",
          format: "Course",
          note: "Optional grounding in healthcare payment, costs, budgets, and financial decisions.",
        },
      ],
      checkpoint:
        "The recommendation states access, quality, workload, and financial trade-offs plus a revision trigger.",
    },
  ],
};
