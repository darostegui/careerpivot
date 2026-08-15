import type { RoadmapContent } from "../types";

export const projectCoordinatorContent: RoadmapContent = {
  roleSlug: "project-coordinator",
  roleTitle: "Project Coordinator",
  topics: [
    {
      id: "project-planning",
      title: "Project planning",
      outcome: "Turn a defined goal into an organized plan with deliverables, owners, dates, dependencies, and practical acceptance criteria.",
      studyPlan: [
        "Write a brief with audience, outcome, non-goals, constraints, owner, and evidence of done.",
        "Sequence work around dependencies, lead times, buffers, accessibility, and approvals.",
        "Review with contributors and log changes."
      ],
      project: "Plan a six-week community workshop series: create the brief, work breakdown, schedule, responsibility matrix, materials checklist, and acceptance criteria.",
      resources: [
        { title: "Project Management Basics", provider: "Atlassian", url: "https://www.atlassian.com/project-management", access: "Free", format: "Documentation", note: "Use the practical guides for scope, planning, collaboration, and delivery." },
        { title: "Google Project Management", provider: "Coursera", url: "https://www.coursera.org/professional-certificates/google-project-management", access: "Free audit", format: "Course", note: "Audit planning and execution modules; the certificate is optional." },
        { title: "Work Breakdown Structure", provider: "PMI", url: "https://www.pmi.org/standards/work-breakdown-structures", access: "Free", format: "Documentation", note: "Reference for decomposing outcomes into deliverable-focused work." },
      ],
      checkpoint: "A contributor can use your plan to identify their work, due date, dependency, definition of done, and escalation path without a live explanation.",
    },
    {
      id: "coordination-and-follow-through",
      title: "Coordination and follow-through",
      outcome: "Keep cross-functional work moving by making commitments, blockers, decisions, and next actions visible.",
      studyPlan: [
        "Capture owner, commitment, due date, blocker, and completion evidence.",
        "Facilitate check-ins for decisions and asks, then publish notes.",
        "Close loops by verifying outcomes and updating the source of truth."
      ],
      project: "Coordinate a simulated volunteer event with 12 contributors: run three check-ins, maintain an action log, publish decision notes, and deliver a completion report.",
      resources: [
        { title: "Meeting Facilitation", provider: "Atlassian", url: "https://www.atlassian.com/team-playbook/plays/standups", access: "Free", format: "Practice", note: "Adapt standup and working-session practices to the team's actual coordination need." },
        { title: "Leadership resources", provider: "Center for Creative Leadership", url: "https://www.ccl.org/articles/leading-effectively-articles/", access: "Free", format: "Documentation", note: "Use the guidance to make meetings purposeful, inclusive, and action-oriented." },
      ],
      checkpoint: "Your action log shows no ownerless or undated work, and meeting notes let an absent contributor understand decisions and next steps.",
    },
    {
      id: "risk-and-issue-management",
      title: "Risk and issue management",
      outcome: "Spot uncertainty early, distinguish risks from issues, and coordinate proportionate responses before delivery is compromised.",
      studyPlan: [
        "Run a premortem across schedule, vendor, safety, accessibility, budget, and communication.",
        "Separate risks, issues, assumptions, dependencies, and decisions.",
        "Escalate with impact, urgency, options, and a decision request."
      ],
      project: "Build a risk and issue register for a public-facing training event, including a premortem, severe-weather contingency, vendor fallback, and escalation messages.",
      resources: [
        { title: "Risk Management in Projects", provider: "PMI", url: "https://www.pmi.org/learning/library/project-risk-management-9340", access: "Free", format: "Documentation", note: "Use the lifecycle of identifying, analyzing, responding to, and monitoring risk." },
        { title: "Project Risk Management", provider: "Association for Project Management", url: "https://www.apm.org.uk/resources/find-a-resource/risk-management/", access: "Free", format: "Documentation", note: "Compare practical risk principles and response planning." },
      ],
      checkpoint: "The top five entries have owners, triggers, dated reviews, and a realistic response; one scenario has been rehearsed and documented.",
    },
    {
      id: "budget-and-resources",
      title: "Budget and resource coordination",
      outcome: "Track project resources responsibly and provide early, decision-ready visibility into cost, capacity, and trade-offs.",
      studyPlan: [
        "Build a baseline from assumptions, approvals, commitments, actuals, forecast, and contingency.",
        "Track people, equipment, vendors, and access as capacity constraints.",
        "Explain variance and cost-saving options through delivery impact."
      ],
      project: "Manage a fictional $25,000 community conference budget: create the baseline, procurement tracker, variance report, staffing plan, and two cost-saving scenarios.",
      resources: [
        { title: "Project Cost Management", provider: "PMI", url: "https://www.pmi.org/learning/library/project-cost-management-9947", access: "Free", format: "Documentation", note: "Study estimating, budgeting, and controlling costs across a project." },
        { title: "Nonprofit Finance Fund Resources", provider: "NFF", url: "https://nff.org/resources", access: "Free", format: "Documentation", note: "Use practical nonprofit budgeting and financial decision-making resources." },
      ],
      checkpoint: "Your report reconciles baseline, actuals, commitments, forecast, and variance, and clearly states which decision each scenario enables.",
    },
    {
      id: "project-communications",
      title: "Project communications",
      outcome: "Create timely, accessible project communication that gives each audience the context and action they need.",
      studyPlan: [
        "Map stakeholders by impact, influence, rights, channel, cadence, and accessibility.",
        "Draft updates with outcome, progress, risk, decision, change, and ask.",
        "Test one message with an unfamiliar reader and revise."
      ],
      project: "Run a simulated project communications cycle: create a stakeholder map, launch note, two weekly updates, meeting pack, decision log, and closeout summary.",
      resources: [
        { title: "Project Communication Management", provider: "PMI", url: "https://www.pmi.org/learning/library/project-communication-management-communicating-project-success-9941", access: "Free", format: "Documentation", note: "Use stakeholder needs and project phase to design a useful communication plan." },
        { title: "Plain Language Guidelines", provider: "PlainLanguage.gov", url: "https://www.plainlanguage.gov/", access: "Free", format: "Documentation", note: "Make updates scannable, direct, and understandable to busy readers." },
        { title: "Accessible Communications", provider: "W3C WAI", url: "https://www.w3.org/WAI/tips/writing/", access: "Free", format: "Documentation", note: "Apply accessible writing and document practices to project materials." },
      ],
      checkpoint: "Your communication pack includes audience, channel, cadence, owner, and action; an unfamiliar reader can identify the current decision and next deadline.",
    },
  ],
};
