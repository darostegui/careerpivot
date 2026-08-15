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
        "Observe queues, handoffs, exceptions, and rework before mapping.",
        "Validate the current state with operators and timestamps.",
        "Design a future state around one measurable bottleneck."
      ],
      project:
        "Complete the scenario as a observation notes, swim lanes, and operator feedback; make assumptions, decisions, and verification evidence explicit.",
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
        "Operators validate the map, and the pilot names the bottleneck, measure, owner, and review date.",
    },
    {
      id: "kpi-and-operational-metrics",
      title: "KPIs and operational metrics",
      outcome:
        "Build a metric system that distinguishes activity from outcomes and lets operators act on performance before targets are missed.",
      studyPlan: [
        "Start with a service decision and smallest useful measures.",
        "Reconcile each KPI to a source sample and document grain.",
        "Turn movement into a hypothesis and action, not a prettier chart."
      ],
      project:
        "Complete the scenario as a metric dictionary, annotated charts, and action decisions; make assumptions, decisions, and verification evidence explicit.",
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
        "Every KPI reconciles to source data and the review ends with a concrete decision.",
    },
    {
      id: "capacity-and-workforce-planning",
      title: "Capacity and workforce planning",
      outcome:
        "Match forecast demand to people, hours, equipment, and service constraints while making assumptions and trade-offs explicit.",
      studyPlan: [
        "Collect interval demand and separate productive time, shrinkage, skills, and buffers.",
        "Model staffing choices and backlog, cost, and service consequences.",
        "Set forecast-error review and escalation triggers."
      ],
      project:
        "Complete the scenario as a scenario workbook, staffing roster, and recommendation letter; make assumptions, decisions, and verification evidence explicit.",
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
        "The selected staffing option states its assumptions and the trigger for revisiting it.",
    },
    {
      id: "continuous-improvement",
      title: "Continuous improvement",
      outcome:
        "Run a measurable improvement cycle that identifies root causes, tests a change safely, and sustains gains with process ownership.",
      studyPlan: [
        "Frame a defect with baseline, target, impact, and scope.",
        "Stratify cases and test causes with observation.",
        "Measure guardrails and standardize only after evidence."
      ],
      project:
        "Complete the scenario as a PDSA poster and revised standard work; make assumptions, decisions, and verification evidence explicit.",
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
        "The experiment separates cause evidence from correlation and includes a sustainment check.",
    },
    {
      id: "operations-governance",
      title: "Operations governance",
      outcome:
        "Create repeatable operating controls for access, incidents, vendors, records, and decisions without slowing routine work unnecessarily.",
      studyPlan: [
        "Inventory controls, records, vendors, and silent failure points.",
        "Define owners, evidence, thresholds, and retention.",
        "Audit samples and verify closure, not just logged actions."
      ],
      project:
        "Complete the scenario as a control register, sample audit, and corrective-action letter; make assumptions, decisions, and verification evidence explicit.",
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
        "Every material exception has severity, owner, deadline, and verification evidence.",
    },
  ],
};
