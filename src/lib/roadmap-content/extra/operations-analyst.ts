import type { RoadmapContent } from "../types";

export const operationsAnalystContent: RoadmapContent = {
  roleSlug: "operations-analyst",
  roleTitle: "Operations Analyst",
  topics: [
    {
      id: "process-mapping",
      title: "Process mapping",
      outcome:
        "Make an operational process visible enough to measure, diagnose, improve, and hand over without relying on tribal knowledge.",
      studyPlan: [
        "Define the customer, start and end events, scope boundary, service promise, and failure conditions.",
        "Observe the work and map roles, systems, queues, handoffs, rework, approvals, and decision rules in swim lanes.",
        "Validate the current-state map with people doing the work and attach evidence for time, volume, defects, and exceptions.",
        "Design a future state with fewer handoffs, explicit controls, ownership, and a pilot measurement plan.",
      ],
      project:
        "Map and redesign a fictional customer-return process, including current-state swim lanes, defect taxonomy, queue inventory, future-state SOP, and pilot plan.",
      resources: [
        {
          title: "Business Process Model and Notation",
          provider: "Object Management Group",
          url: "https://www.omg.org/bpmn/",
          access: "Free",
          format: "Documentation",
          note: "Reference for consistent process notation, events, gateways, and message flows.",
        },
        {
          title: "Value-Stream Mapping",
          provider: "Lean Enterprise Institute",
          url: "https://www.lean.org/",
          access: "Free",
          format: "Documentation",
          note: "Practical lean framing for seeing flow, wait time, and improvement opportunities.",
        },
        {
          title: "Process Mapping",
          provider: "Coursera / University of Minnesota",
          url: "https://www.coursera.org/browse/business",
          access: "Free audit",
          format: "Course",
          note: "Optional guided practice for documenting and improving business processes.",
        },
      ],
      checkpoint:
        "A validated current-state map, future-state map, SOP draft, and baseline table showing volume, cycle time, wait time, and rework.",
    },
    {
      id: "kpi-and-operational-metrics",
      title: "KPIs and operational metrics",
      outcome:
        "Build a metric system that distinguishes activity from outcomes and lets operators act on performance before targets are missed.",
      studyPlan: [
        "Translate a service objective into a small set of outcome, quality, speed, cost, and capacity measures.",
        "Write metric definitions with numerator, denominator, grain, exclusions, owner, source, refresh cadence, and target.",
        "Create a data-quality checklist and reconcile dashboard totals to source systems before discussing performance.",
        "Set alert thresholds and review rituals that connect a metric movement to diagnosis, owner, and next action.",
      ],
      project:
        "Create an operations scorecard for a fictional contact center with service level, abandonment, first-contact resolution, occupancy, quality sampling, and staffing actions.",
      resources: [
        {
          title: "Measuring Performance",
          provider: "Institute for Government",
          url: "https://www.instituteforgovernment.org.uk/",
          access: "Free",
          format: "Documentation",
          note: "Clear guidance on choosing useful performance measures and avoiding perverse incentives.",
        },
        {
          title: "Data Visualization",
          provider: "Datawrapper Academy",
          url: "https://academy.datawrapper.de/",
          access: "Free",
          format: "Course",
          note: "Free lessons for turning operational metrics into readable charts and dashboards.",
        },
        {
          title: "Google Sheets Training",
          provider: "Google Workspace Learning Center",
          url: "https://support.google.com/a/users/answer/9282720",
          access: "Free",
          format: "Course",
          note: "Useful for building a documented KPI workbook with formulas, pivots, and checks.",
        },
      ],
      checkpoint:
        "A metric dictionary and dashboard with at least eight defined KPIs, reconciled totals, alert rules, and a weekly action log tied to metric changes.",
    },
    {
      id: "capacity-and-workforce-planning",
      title: "Capacity and workforce planning",
      outcome:
        "Match forecast demand to people, hours, equipment, and service constraints while making assumptions and trade-offs explicit.",
      studyPlan: [
        "Collect demand by interval, arrival pattern, handling time, shrinkage, skills, availability, and service requirement.",
        "Build a capacity model that separates theoretical hours, productive hours, utilization, buffers, and planned absence.",
        "Test staffing or resource scenarios and quantify backlog, overtime, service risk, cost, and bottleneck movement.",
        "Turn the model into a planning cadence with forecast updates, variance review, escalation triggers, and decision ownership.",
      ],
      project:
        "Plan staffing for a seasonal support team: forecast contacts by half-hour, model shrinkage and skills, compare schedules, and recommend a hiring or overtime plan.",
      resources: [
        {
          title: "Operations Management",
          provider: "MIT OpenCourseWare",
          url: "https://ocw.mit.edu/search/?q=operations+management",
          access: "Free",
          format: "Course",
          note: "Open lectures and materials on capacity, queues, inventory, and operating systems.",
        },
        {
          title: "Workforce Management",
          provider: "NICE",
          url: "https://www.nice.com/",
          access: "Free",
          format: "Documentation",
          note: "Industry reference for forecasting, scheduling, adherence, and service-level trade-offs.",
        },
        {
          title: "Queueing Theory",
          provider: "Wikipedia",
          url: "https://en.wikipedia.org/wiki/Queueing_theory",
          access: "Free",
          format: "Documentation",
          note: "A quick conceptual reference for arrival rates, service rates, utilization, and waiting.",
        },
      ],
      checkpoint:
        "A capacity workbook with interval demand, productive-capacity assumptions, three scenarios, service/cost outputs, and a documented recommendation.",
    },
    {
      id: "continuous-improvement",
      title: "Continuous improvement",
      outcome:
        "Run a measurable improvement cycle that identifies root causes, tests a change safely, and sustains gains with process ownership.",
      studyPlan: [
        "Write a problem statement with baseline, target, customer impact, scope, and a measurable definition of done.",
        "Use Pareto analysis, stratification, 5 Whys, fishbone, and observation to separate symptoms from controllable causes.",
        "Design a small experiment with a change hypothesis, guardrail metrics, owner, timing, and rollback condition.",
        "Standardize the successful change through training, visual controls, audit checks, and a control chart or review cadence.",
      ],
      project:
        "Reduce invoice rework in a fictional shared-services team by analyzing 200 cases, testing an intake checklist, measuring defect rate and cycle time, and writing the updated SOP.",
      resources: [
        {
          title: "Lean Six Sigma Principles",
          provider: "ASQ",
          url: "https://asq.org/quality-resources/lean-six-sigma",
          access: "Free",
          format: "Documentation",
          note: "Practical explanations of waste, flow, problem solving, and improvement methods.",
        },
        {
          title: "The Improvement Guide",
          provider: "Institute for Healthcare Improvement",
          url: "https://www.ihi.org/resources/Pages/HowtoImprove/default.aspx",
          access: "Free",
          format: "Documentation",
          note: "A clear Plan-Do-Study-Act framework that transfers well to many operations settings.",
        },
        {
          title: "Quality Improvement Essentials Toolkit",
          provider: "IHI",
          url: "https://www.ihi.org/resources/tools/quality-improvement-essentials-toolkit",
          access: "Free",
          format: "Practice",
          note: "Downloadable templates for charters, cause analysis, run charts, and PDSA cycles.",
        },
      ],
      checkpoint:
        "An improvement charter with baseline data, root-cause evidence, experiment results, guardrail metrics, updated SOP, and a 30-day sustainment check.",
    },
    {
      id: "operations-governance",
      title: "Operations governance",
      outcome:
        "Create repeatable operating controls for access, incidents, vendors, records, and decisions without slowing routine work unnecessarily.",
      studyPlan: [
        "Inventory operational risks, regulated records, systems, vendors, approvals, and points where work can fail silently.",
        "Define RACI, escalation thresholds, control evidence, retention periods, and a change log for the process.",
        "Practice incident triage, root-cause review, corrective-action tracking, and communication to affected stakeholders.",
        "Audit a sample of cases, report exceptions by severity, and close the loop through owners, due dates, and verification.",
      ],
      project:
        "Build a governance pack for a vendor-managed fulfillment process: RACI, SLA scorecard, incident form, access review, records-retention table, and quarterly audit checklist.",
      resources: [
        {
          title: "COBIT Framework",
          provider: "ISACA",
          url: "https://www.isaca.org/resources/cobit",
          access: "Free",
          format: "Documentation",
          note: "Useful governance concepts for controls, accountability, information, and performance.",
        },
        {
          title: "Incident Management",
          provider: "Atlassian",
          url: "https://www.atlassian.com/incident-management",
          access: "Free",
          format: "Documentation",
          note: "Practical guidance for incident roles, communication, postmortems, and service improvement.",
        },
        {
          title: "NIST Risk Management Framework",
          provider: "National Institute of Standards and Technology",
          url: "https://www.nist.gov/cyberframework",
          access: "Free",
          format: "Documentation",
          note: "Optional reference for a structured risk, control, authorization, and monitoring mindset.",
        },
      ],
      checkpoint:
        "A governance pack with named owners, SLA measures, an incident and corrective-action log, evidence-retention rules, and a completed sample audit.",
    },
  ],
};
