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
        "Map a patient journey from scheduling through follow-up, naming queues, handoffs, failure points, and accountable roles.",
        "Measure access, wait, throughput, no-show, room utilization, staffing, and patient-experience signals by clinic or service line.",
        "Use daily huddles and escalation rules to manage capacity while protecting safety, privacy, and continuity of care.",
        "Pilot one workflow change, compare baseline and post-change results, and document the standard work that should persist.",
      ],
      project:
        "Improve access for a fictional primary-care clinic by analyzing appointment demand, no-shows, room capacity, referral queues, and a redesigned scheduling workflow.",
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
        "A clinic operations dashboard and improvement brief with baseline access metrics, a validated process map, pilot results, and updated standard work.",
    },
    {
      id: "revenue-cycle",
      title: "Revenue cycle and reimbursement",
      outcome:
        "Follow a patient account from registration through payment, identify preventable leakage, and coordinate compliant corrective action.",
      studyPlan: [
        "Learn eligibility, authorization, charge capture, coding handoff, claim submission, remittance, denial, and patient-balance stages.",
        "Map front-end and back-end failure reasons, separating missing information, payer rules, clinical documentation, and workflow defects.",
        "Build an aging and denial workbook with clean definitions for clean-claim rate, days in A/R, denial rate, and appeal yield.",
        "Prioritize a fix with owners, training, audit samples, payer communication, and a measure of financial and patient impact.",
      ],
      project:
        "Analyze 150 fictional denied claims, classify root causes, build an A/R aging dashboard, redesign registration verification, and prepare a compliant denial-reduction action plan.",
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
        "A denial taxonomy and aging workbook with reconciled totals, top five quantified causes, compliant intervention owners, and a 30-day measurement plan.",
    },
    {
      id: "healthcare-compliance-and-privacy",
      title: "Healthcare compliance and privacy",
      outcome:
        "Handle protected health information and operational decisions with appropriate access, documentation, training, and escalation.",
      studyPlan: [
        "Learn HIPAA privacy, security, minimum-necessary use, business associates, breach response, and patient-rights concepts.",
        "Inventory data flows, roles, systems, vendors, retention, access points, and places where printed or exported data can escape.",
        "Create a risk-control matrix covering access reviews, secure disposal, incident reporting, workforce training, and audit evidence.",
        "Run a tabletop incident, document facts without speculation, escalate through policy, and track corrective actions to verification.",
      ],
      project:
        "Create a privacy-and-security operations pack for a small clinic: data-flow map, role-based access matrix, vendor checklist, incident tabletop, breach log, and training tracker.",
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
        "A completed risk-control matrix and tabletop record with access evidence, incident timeline, required notifications, owners, and verified corrective actions.",
    },
    {
      id: "quality-and-patient-safety",
      title: "Quality and patient safety",
      outcome:
        "Use reliable measures and structured review to reduce harm, improve care processes, and make quality work actionable for teams.",
      studyPlan: [
        "Distinguish outcome, process, balancing, and patient-reported measures; define denominator, exclusions, and reporting period.",
        "Learn event reporting, just culture, root-cause analysis, failure-mode analysis, and the difference between signal and proof.",
        "Build a run chart or control chart and review stratification by unit, shift, population, or pathway without exposing unnecessary identifiers.",
        "Translate findings into a prioritized action plan with owner, due date, safety guardrail, and effectiveness check.",
      ],
      project:
        "Analyze a fictional medication-reconciliation event set, identify contributing factors, create a process measure and balancing measure, and run a PDSA cycle with a safety brief.",
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
        "A de-identified quality-improvement packet with measure definitions, baseline run chart, root-cause evidence, PDSA result, and an effectiveness-review date.",
    },
    {
      id: "workforce-and-budget",
      title: "Workforce and budget management",
      outcome:
        "Plan staffing and spending around patient demand while explaining variances, labor constraints, and service trade-offs.",
      studyPlan: [
        "Translate visit volume, acuity, hours of operation, skill mix, productivity, absence, and coverage rules into a staffing model.",
        "Build a department budget with labor, supplies, purchased services, capital requests, assumptions, and approval thresholds.",
        "Reconcile monthly actuals to budget and prior year; separate volume, rate, mix, timing, vacancy, and one-time variances.",
        "Prepare a decision brief that compares options using access, quality, staff workload, compliance, and financial consequences.",
      ],
      project:
        "Create a budget and staffing plan for a fictional outpatient imaging department, including modality demand, technologist coverage, overtime, supplies, capital replacement, and variance commentary.",
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
        "A staffing and budget workbook with explicit assumptions, reconciled actuals, quantified labor and volume variances, scenario comparison, and a manager-ready recommendation.",
    },
  ],
};
