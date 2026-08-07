import type { RoadmapContent } from "./types";

export const siteReliabilityEngineerContent: RoadmapContent = {
  roleSlug: "site-reliability-engineer",
  roleTitle: "Site Reliability Engineer",
  topics: [
    {
      id: "linux",
      title: "Linux debugging for production systems",
      outcome:
        "Use Linux as a production investigation surface: isolate faults quickly, understand resource behavior, and capture evidence that survives handoff.",
      studyPlan: [
        "Practice the core incident commands for processes, memory, disk, networking, cgroups, and journald until you can explain what a healthy host should look like.",
        "Reproduce failures such as file-descriptor exhaustion, stuck processes, OOM kills, runaway logs, and disk pressure on a disposable VM.",
        "Turn one-off fixes into permanent guardrails with service units, limits, log rotation, health checks, and baseline hardening.",
        "Write incident notes that distinguish symptoms, hypotheses, verified cause, and what should be observable next time.",
      ],
      project:
        "Create a lab with a Linux-hosted service and inject CPU, memory, disk, and networking issues; produce a diagnosis notebook, recovery commands, and permanent remediations.",
      resources: [
        {
          title: "Introduction to Linux",
          provider: "Linux Foundation",
          url: "https://training.linuxfoundation.org/resources/free-courses/introduction-to-linux/",
          access: "Free",
          format: "Course",
          note: "Use this as the baseline for command-line fluency before you move into production incident drills.",
        },
        {
          title: "The Linux Command Line",
          provider: "William Shotts",
          url: "https://linuxcommand.org/tlcl.php",
          access: "Free",
          format: "Documentation",
          note: "Free reference for shell behavior, text processing, scripts, and system exploration.",
        },
        {
          title: "systemd documentation",
          provider: "systemd",
          url: "https://systemd.io/",
          access: "Free",
          format: "Documentation",
          note: "Focus on units, restart semantics, resource limits, timers, and logs for real service ownership.",
        },
      ],
      checkpoint:
        "You can diagnose a degraded host from command output alone, explain why the signal matters, and show the automation or config change that prevents repeat toil.",
    },
    {
      id: "programming",
      title: "Programming for reliability automation",
      outcome:
        "Write small but durable tools that reduce toil, surface health, and fail safely in production-style environments.",
      studyPlan: [
        "Choose Go or Python and learn the subset SREs use constantly: CLI parsing, files, HTTP clients, concurrency, timeouts, retries, logging, and tests.",
        "Model error handling explicitly—retriable versus terminal errors, exit codes, timeouts, and idempotent reruns.",
        "Emit structured logs and metrics from your tool so it behaves like an operable service rather than a throwaway script.",
        "Package, version, and document the tool with CI and example invocations so another responder could trust it during an incident.",
      ],
      project:
        "Build a service-dependency probe that checks HTTP, DNS, and TCP targets, enforces deadlines, emits Prometheus metrics, and has tests for timeouts and partial failure.",
      resources: [
        {
          title: "A Tour of Go",
          provider: "Go",
          url: "https://go.dev/tour/",
          access: "Free",
          format: "Course",
          note: "Great for learning concurrency, types, and tooling for small operational binaries.",
        },
        {
          title: "Python tutorial",
          provider: "Python Software Foundation",
          url: "https://docs.python.org/3/tutorial/",
          access: "Free",
          format: "Documentation",
          note: "A dependable reference for functions, modules, errors, files, and interfaces used in automation tooling.",
        },
        {
          title: "Exercism",
          provider: "Exercism",
          url: "https://exercism.org/",
          access: "Free",
          format: "Practice",
          note: "Use mentored exercises to make your code clearer and more maintainable before you automate production tasks.",
        },
      ],
      checkpoint:
        "Your tool is tested, observable, and documented well enough that another engineer could run it during an incident without asking you what it does.",
    },
    {
      id: "distributed-systems",
      title: "Distributed systems failure analysis",
      outcome:
        "Reason about partial failure, retries, idempotency, backpressure, and consistency well enough to predict how a service behaves under stress.",
      studyPlan: [
        "Trace a multi-service request and identify every timeout, retry, queue, cache, and ownership boundary where failures can amplify.",
        "Compare synchronous calls, async queues, replication, leader election, and partition handling using concrete trade-offs rather than slogans.",
        "Run controlled experiments for node loss, packet delay, dropped messages, and dependency slowness while capturing what users observe.",
        "Write explicit guarantees: what stays available, what becomes stale, what may be duplicated, and what manual recovery is required.",
      ],
      project:
        "Build or adapt a small replicated service, inject node and network faults, and publish a failure matrix covering availability, correctness, retry behavior, and operator actions.",
      resources: [
        {
          title: "MIT 6.5840 Distributed Systems",
          provider: "MIT",
          url: "https://pdos.csail.mit.edu/6.824/",
          access: "Free",
          format: "Course",
          note: "Use the lectures and labs to move from theory to implementation thinking.",
        },
        {
          title: "Jepsen analyses",
          provider: "Jepsen",
          url: "https://jepsen.io/analyses",
          access: "Free",
          format: "Documentation",
          note: "Study real-world failure investigations to sharpen your reliability instincts.",
        },
        {
          title: "Designing Data-Intensive Applications",
          provider: "Martin Kleppmann",
          url: "https://dataintensive.net/",
          access: "Paid",
          format: "Course",
          note: "Optional deeper reference for replication, consistency, storage, and stream-processing trade-offs.",
        },
      ],
      checkpoint:
        "You can describe what a user sees during at least three fault modes and back your explanation with experiment evidence instead of theory alone.",
    },
    {
      id: "incident-response",
      title: "Incident response and post-incident learning",
      outcome:
        "Coordinate clear, evidence-driven response from first alert through mitigation, stakeholder updates, and follow-up actions that actually reduce repeat risk.",
      studyPlan: [
        "Define severity, roles, escalation triggers, incident channels, and decision checkpoints for mitigation versus rollback.",
        "Practice triage under pressure: state impact, establish time bounds, gather recent changes, test the safest hypothesis first, and avoid premature certainty.",
        "Write concise internal and external updates with current impact, what changed, next checkpoint, and any customer workarounds.",
        "Run blameless reviews that convert timeline evidence into owned actions, missing signals, automation opportunities, and design follow-ups.",
      ],
      project:
        "Run a game day for a broken service, appoint an incident commander, capture stakeholder updates every 15 minutes, restore service, and publish a blameless review with tracked remediation.",
      resources: [
        {
          title: "Site Reliability Engineering book",
          provider: "Google",
          url: "https://sre.google/sre-book/table-of-contents/",
          access: "Free",
          format: "Documentation",
          note: "Use the incident management chapters to structure response roles, command, and communication.",
        },
        {
          title: "Google SRE workbook: Incident response",
          provider: "Google",
          url: "https://sre.google/workbook/incident-response/",
          access: "Free",
          format: "Documentation",
          note: "Practical companion for game days, postmortems, and operational learning loops.",
        },
        {
          title: "Learning from incidents",
          provider: "Learning From Incidents",
          url: "https://learningfromincidents.io/",
          access: "Free",
          format: "Documentation",
          note: "Use these essays and examples to improve the quality of your review process beyond blame-free templates.",
        },
      ],
      checkpoint:
        "Your incident packet shows clear command, useful updates, a defensible timeline, and follow-up actions tied to observed failure modes rather than vague process debt.",
    },
    {
      id: "observability",
      title: "Observability, SLOs, and alert quality",
      outcome:
        "Design telemetry around user journeys and service objectives so alerts are actionable, noise stays low, and diagnosis starts with evidence.",
      studyPlan: [
        "Define SLIs, SLOs, and error budgets for one critical path before you decide which dashboards or alerts to build.",
        "Instrument metrics, logs, traces, and correlation IDs so a responder can move from symptom to narrowed cause without guessing.",
        "Tune alerts around symptoms, ownership, urgency, and runbook links; explicitly retire or rewrite noisy alerts.",
        "Test telemetry during controlled failures and compare what the tools say with what the user actually experiences.",
      ],
      project:
        "Instrument a demo service with OpenTelemetry and Prometheus, set SLOs for availability and latency, create two symptom-based alerts, and prove they fire during a latency and error-budget burn scenario.",
      resources: [
        {
          title: "OpenTelemetry documentation",
          provider: "OpenTelemetry",
          url: "https://opentelemetry.io/docs/",
          access: "Free",
          format: "Documentation",
          note: "Use the semantic conventions and instrumentation guides to create telemetry that supports root-cause analysis.",
        },
        {
          title: "Prometheus documentation",
          provider: "Prometheus",
          url: "https://prometheus.io/docs/",
          access: "Free",
          format: "Documentation",
          note: "Build practical skill with exporters, recording rules, alerting, and PromQL.",
        },
        {
          title: "Google SRE workbook: Monitoring distributed systems",
          provider: "Google",
          url: "https://sre.google/workbook/monitoring/",
          access: "Free",
          format: "Documentation",
          note: "Connect SLO thinking to dashboards, paging, dependency health, and ongoing alert refinement.",
        },
      ],
      checkpoint:
        "A reviewer can inspect your telemetry, see which user journey it protects, and follow the alert through dashboard to diagnosis with minimal ambiguity.",
    },
    {
      id: "automation",
      title: "Automation for toil reduction and safe operations",
      outcome:
        "Replace recurring manual work with observable, auditable automation that reduces responder load without hiding operational risk.",
      studyPlan: [
        "Measure toil before automating it: frequency, duration, error rate, coordination cost, and customer impact.",
        "Design automation with dry runs, approvals, concurrency controls, rollback, audit logging, and post-run verification.",
        "Use infrastructure and configuration tools to make environment changes reproducible rather than ticket-driven.",
        "Review every automation as if it could fail at 3 a.m.—what breaks, who is paged, and how a human takes control again.",
      ],
      project:
        "Automate a routine operational workflow such as certificate rotation, config rollout, or dependency restart using CI plus infrastructure tooling, then demonstrate a safe dry run and a rollback.",
      resources: [
        {
          title: "Terraform tutorials",
          provider: "HashiCorp",
          url: "https://developer.hashicorp.com/terraform/tutorials",
          access: "Free",
          format: "Course",
          note: "Apply the workflow and state-management concepts to safe infrastructure automation.",
        },
        {
          title: "Ansible documentation",
          provider: "Red Hat",
          url: "https://docs.ansible.com/ansible/latest/index.html",
          access: "Free",
          format: "Documentation",
          note: "Good fit for idempotent configuration tasks and procedural operational playbooks.",
        },
        {
          title: "GitHub Actions documentation",
          provider: "GitHub",
          url: "https://docs.github.com/en/actions",
          access: "Free",
          format: "Documentation",
          note: "Use reusable workflows, environments, artifacts, and approvals to make automation visible and controlled.",
        },
      ],
      checkpoint:
        "Your automation has clear entry conditions, logs, rollback, and proof that it saves operator time without creating hidden failure modes.",
    },
    {
      id: "cloud-architecture",
      title: "Cloud architecture for reliability and capacity",
      outcome:
        "Design platforms around explicit reliability targets, capacity assumptions, and recovery objectives instead of default cloud settings.",
      studyPlan: [
        "Translate SLOs, RTO, and RPO into topology, redundancy, scaling policy, backup design, and failover expectations.",
        "Model regional risk, dependency quotas, stateful versus stateless recovery paths, and graceful degradation options.",
        "Estimate capacity and cost under normal traffic, peak events, and one bad day scenario such as dependency slowdown or zone loss.",
        "Run a tabletop or lab recovery drill and update the design, ownership map, and operational runbook from the results.",
      ],
      project:
        "Design and deploy a multi-zone service with autoscaling, backups, dashboards, and a disaster-recovery playbook, then run a failover or restore drill and record the measured gaps.",
      resources: [
        {
          title: "AWS Well-Architected Framework",
          provider: "AWS",
          url: "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html",
          access: "Free",
          format: "Documentation",
          note: "Use the reliability pillar to connect redundancy, recovery, and operational readiness.",
        },
        {
          title: "Google Cloud Architecture Framework",
          provider: "Google Cloud",
          url: "https://cloud.google.com/architecture/framework",
          access: "Free",
          format: "Documentation",
          note: "Helpful for combining platform design with practical guidance on operations, cost, and security.",
        },
        {
          title: "Google SRE workbook: Capacity planning",
          provider: "Google",
          url: "https://sre.google/workbook/capacity-planning/",
          access: "Free",
          format: "Documentation",
          note: "Use it to move from intuitive scaling to explicit capacity and growth reasoning.",
        },
      ],
      checkpoint:
        "Your architecture names its assumptions, shows how capacity and failure were tested, and gives operators a concrete recovery story instead of a diagram alone.",
    },
  ],
};
