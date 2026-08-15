import type { RoadmapContent } from "./types";

export const technicalProjectManagerContent: RoadmapContent = {
  roleSlug: "technical-project-manager",
  roleTitle: "Technical Project Manager",
  topics: [
    {
      id: "planning",
      title: "Planning technical scope and dependencies",
      outcome:
        "Turn ambiguous technical work into a delivery plan with explicit scope, assumptions, dependencies, owners, and decision gates.",
      studyPlan: [
        "Write a one-page brief that covers the problem, users, success measures, non-goals, constraints, and what must be true for delivery to count as done.",
        "Break the work into milestones, work packages, interface touchpoints, and dependency chains rather than a flat task list.",
        "Estimate with ranges, confidence notes, and sequencing assumptions so stakeholders can see what would move the date or scope.",
        "Review the plan with engineering, product, and operations to surface hidden dependencies, approvals, and environment readiness work.",
      ],
      project:
        "Plan a six-week API or data-platform migration with a project brief, milestone plan, dependency map, RACI, assumptions log, and a decision calendar for major delivery gates.",
      resources: [
        {
          title: "Google Project Management certificate overview",
          provider: "Google",
          url: "https://www.coursera.org/professional-certificates/google-project-management",
          access: "Free audit",
          format: "Course",
          note: "Audit the planning, estimation, and stakeholder modules for a structured refresher on delivery mechanics.",
        },
        {
          title: "Atlassian estimation guide",
          provider: "Atlassian",
          url: "https://www.atlassian.com/agile/project-management/estimation",
          access: "Free",
          format: "Documentation",
          note: "Useful for discussing relative estimation, capacity, and forecast confidence with engineering teams.",
        },
        {
          title: "Work breakdown structures practice standard",
          provider: "PMI",
          url: "https://www.pmi.org/standards/work-breakdown-structures",
          access: "Free",
          format: "Documentation",
          note: "Use it to decompose scope into reviewable deliverables instead of vague activity buckets.",
        },
      ],
      checkpoint:
        "To prove mastery, your portfolio project must provide concrete evidence for this skill. A hiring manager evaluating your work will check if: An engineer and a stakeholder can both explain what is shipping, what depends on what, and which assumptions would force the plan to change. Your artifact must explicitly demonstrate this to show you can apply the skill to real-world scenarios rather than just theoretical exercises.",
    },
    {
      id: "risk-management",
      title: "Risk management and change control",
      outcome:
        "Make delivery risk visible early, reduce it deliberately, and manage scope or technical change without losing control of timeline and quality.",
      studyPlan: [
        "Create a risk register that separates risks, issues, assumptions, and dependencies, each with triggers, owners, mitigation, and contingency.",
        "Run a premortem for architecture, rollout, security, vendor, data, and capacity failure modes before execution is far underway.",
        "Define a lightweight change-control path for new requirements, date pressure, and technical discoveries so decisions are explicit instead of accidental.",
        "Review the top risks weekly with trend, exposure, decision needed, and next mitigation—not just a status color.",
      ],
      project:
        "Operate a live risk register for a third-party integration or infrastructure migration, including a premortem, rollback trigger, vendor-failure contingency, and approved change log.",
      resources: [
        {
          title: "NIST Risk Management Framework",
          provider: "NIST",
          url: "https://csrc.nist.gov/projects/risk-management/about-rmf",
          access: "Free",
          format: "Documentation",
          note: "Provides a disciplined way to think about risk decisions, controls, and lifecycle review even outside federal projects.",
        },
        {
          title: "Risk management in Scrum",
          provider: "Scrum.org",
          url: "https://www.scrum.org/resources/blog/risk-management-scrum",
          access: "Free",
          format: "Documentation",
          note: "Helpful for tying risk review to iterative delivery rather than a separate project-management ceremony.",
        },
        {
          title: "Project risk management resources",
          provider: "PMI",
          url: "https://www.pmi.org/learning/library",
          access: "Free",
          format: "Documentation",
          note: "Search the library for case studies and templates that show how mature teams monitor risk over time.",
        },
      ],
      checkpoint:
        "To prove mastery, your portfolio project must provide concrete evidence for this skill. A hiring manager evaluating your work will check if: Your top risks have owners, dated triggers, mitigations already underway, and a documented path for approving scope or rollout changes. Your artifact must explicitly demonstrate this to show you can apply the skill to real-world scenarios rather than just theoretical exercises.",
    },
    {
      id: "stakeholder-communication",
      title: "Stakeholder communication and decision cadence",
      outcome:
        "Give each audience the right level of technical and business context while keeping project health, trade-offs, and decisions visible.",
      studyPlan: [
        "Map stakeholders by influence, impact, information need, decision rights, and preferred communication channel.",
        "Write weekly updates that lead with outcome, status movement, blockers, decisions needed, and whether forecast changed.",
        "Facilitate decision meetings with a pre-read, owner, options, trade-offs, and a durable decision record.",
        "Translate engineering constraints into customer, cost, reliability, and timeline implications without distorting the technical reality.",
      ],
      project:
        "Run a simulated release-governance cycle with product, engineering, support, and leadership: send three status updates, facilitate one scope trade-off decision, and maintain a searchable decision log.",
      resources: [
        {
          title: "Atlassian DACI play",
          provider: "Atlassian",
          url: "https://www.atlassian.com/team-playbook/plays/daci",
          access: "Free",
          format: "Practice",
          note: "Use DACI to make ownership and recommendation paths explicit in cross-functional decisions.",
        },
        {
          title: "Status report templates",
          provider: "Atlassian",
          url: "https://www.atlassian.com/software/confluence/templates",
          access: "Free",
          format: "Practice",
          note: "Adapt a template into a short decision-oriented update rather than a generic activity summary.",
        },
        {
          title: "Project communication resources",
          provider: "PMI",
          url: "https://www.pmi.org/learning/library",
          access: "Free",
          format: "Documentation",
          note: "Search for communication-management examples that show how reporting changes across audiences and phases.",
        },
      ],
      checkpoint:
        "To prove mastery, your portfolio project must provide concrete evidence for this skill. A hiring manager evaluating your work will check if: A stakeholder can open your update trail and see what changed, what decision was made, who made it, and what the team is doing next. Your artifact must explicitly demonstrate this to show you can apply the skill to real-world scenarios rather than just theoretical exercises.",
    },
    {
      id: "agile-delivery",
      title: "Agile delivery and release coordination",
      outcome:
        "Help teams ship in small, testable increments with disciplined backlog flow, release readiness, and feedback loops that improve the next iteration.",
      studyPlan: [
        "Use Scrum or Kanban mechanics intentionally: decide which ceremonies, artifacts, and WIP limits reduce risk for this team.",
        "Refine epics into thin vertical slices with acceptance criteria, dependencies, rollout notes, and a definition of done.",
        "Coordinate sprint planning, daily blocker clearing, review, and retrospective so each meeting produces a decision or an action.",
        "Build release checklists covering feature flags, comms, monitoring, rollback, support readiness, and post-release verification.",
      ],
      project:
        "Coordinate a four-sprint launch for a customer-facing feature, including backlog refinement, release checklists, demo notes, blocker tracking, and a retrospective action plan with owners.",
      resources: [
        {
          title: "The Scrum Guide",
          provider: "Scrum Guides",
          url: "https://scrumguides.org/scrum-guide.html",
          access: "Free",
          format: "Documentation",
          note: "Read the official guide to distinguish useful Scrum mechanics from local ritual.",
        },
        {
          title: "Agile project management",
          provider: "Atlassian",
          url: "https://www.atlassian.com/agile/project-management",
          access: "Free",
          format: "Course",
          note: "Practical reference for backlog work, iterative planning, and team flow.",
        },
        {
          title: "Kanban guide",
          provider: "Kanban University",
          url: "https://kanban.university/kanban-guide/",
          access: "Free",
          format: "Documentation",
          note: "Useful when your team manages mixed interrupt work and needs flow discipline more than sprint theater.",
        },
      ],
      checkpoint:
        "To prove mastery, your portfolio project must provide concrete evidence for this skill. A hiring manager evaluating your work will check if: Your delivery artifacts show how work moved from idea to release, what blockers changed the plan, and how the team learned from the release afterward. Your artifact must explicitly demonstrate this to show you can apply the skill to real-world scenarios rather than just theoretical exercises.",
    },
    {
      id: "technical-literacy",
      title: "Technical literacy for delivery trade-offs",
      outcome:
        "Participate credibly in architecture, rollout, and incident conversations by understanding the systems and constraints that shape delivery.",
      studyPlan: [
        "Trace a request through API, service, database, queue, third-party dependency, deployment system, and monitoring stack.",
        "Learn enough of HTTP, databases, cloud environments, CI/CD, logging, and infrastructure diagrams to ask sharp questions and detect hidden work.",
        "Use Git, an API client, dashboards, and logs at a basic level so you can verify facts independently rather than relay second-hand summaries.",
        "Practice summarizing a technical design in business language without erasing the underlying trade-offs or risks.",
      ],
      project:
        "Document a small production-like system with an architecture walkthrough, dependency inventory, rollout checklist, failure-mode review, and one recommendation that improves reliability or delivery speed.",
      resources: [
        {
          title: "MDN HTTP overview",
          provider: "MDN",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview",
          access: "Free",
          format: "Documentation",
          note: "Build a request/response mental model that helps you follow engineering conversations about APIs and failures.",
        },
        {
          title: "About Git",
          provider: "GitHub",
          url: "https://docs.github.com/en/get-started/using-git/about-git",
          access: "Free",
          format: "Documentation",
          note: "Learn enough version-control behavior to follow release branches, pull requests, and rollback discussions.",
        },
        {
          title: "Introduction to DevOps",
          provider: "Google Cloud",
          url: "https://www.coursera.org/learn/intro-to-devops",
          access: "Free audit",
          format: "Course",
          note: "Audit modules on delivery automation and reliability if you want a structured overview of modern software operations.",
        },
      ],
      checkpoint:
        "To prove mastery, your portfolio project must provide concrete evidence for this skill. A hiring manager evaluating your work will check if: You can explain one system’s request flow, deployment path, and top delivery risks clearly enough that engineering agrees you captured the important parts. Your artifact must explicitly demonstrate this to show you can apply the skill to real-world scenarios rather than just theoretical exercises.",
    },
    {
      id: "metrics",
      title: "Metrics and forecast confidence",
      outcome:
        "Measure delivery health with trustworthy definitions, interpret trends responsibly, and turn metrics into better planning and risk decisions.",
      studyPlan: [
        "Define what decision each metric should inform before you build a dashboard: forecast confidence, bottlenecks, release health, or outcome impact.",
        "Calculate cycle time, throughput, work in progress, deployment frequency, change failure rate, and time to restore from raw sample data.",
        "Pair quantitative metrics with narrative context so outliers, scope shifts, or major incidents do not become misleading scorecards.",
        "Run one improvement experiment, predict the expected metric movement, and evaluate whether the change actually helped delivery.",
      ],
      project:
        "Build a delivery-health dashboard from sample backlog, deployment, and incident data, then publish a one-page readout explaining forecast confidence, bottleneck hypothesis, and the next experiment.",
      resources: [
        {
          title: "DORA capabilities",
          provider: "Google Cloud",
          url: "https://cloud.google.com/devops/capabilities",
          access: "Free",
          format: "Documentation",
          note: "Use the delivery metrics as conversation starters, not team grades, and connect them to capabilities that improve outcomes.",
        },
        {
          title: "Evidence-Based Management guide",
          provider: "Scrum.org",
          url: "https://www.scrum.org/resources/evidence-based-management-guide",
          access: "Free",
          format: "Documentation",
          note: "Helpful for framing delivery metrics alongside value and capability rather than raw output alone.",
        },
        {
          title: "Accelerate State of DevOps resources",
          provider: "Google Cloud",
          url: "https://cloud.google.com/devops/state-of-devops",
          access: "Free",
          format: "Documentation",
          note: "Use the reports to connect delivery patterns, organizational habits, and measurable performance.",
        },
      ],
      checkpoint:
        "To prove mastery, your portfolio project must provide concrete evidence for this skill. A hiring manager evaluating your work will check if: Your dashboard definitions are explicit, your interpretation acknowledges uncertainty, and your recommended action follows logically from the data shown. Your artifact must explicitly demonstrate this to show you can apply the skill to real-world scenarios rather than just theoretical exercises.",
    },
  ],
};
