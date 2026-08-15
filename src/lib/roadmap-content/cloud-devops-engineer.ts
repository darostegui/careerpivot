import type { RoadmapContent } from "./types";

export const cloudDevopsEngineerContent: RoadmapContent = {
  roleSlug: "cloud-devops-engineer",
  roleTitle: "Cloud DevOps Engineer",
  topics: [
    {
      id: "linux",
      title: "Linux operations and shell automation",
      outcome:
        "Run cloud hosts like production systems: diagnose quickly, automate safely, and leave behind repeatable operational guardrails.",
      studyPlan: [
        "Operate a Linux VM end to end: users, sudo, packages, services, journald, SSH hardening, cron, and safe patching windows.",
        "Practice the commands you actually need during incidents—ps, top, systemctl, journalctl, ss, lsof, df, du, free, and curl—until you can form a quick hypothesis from symptoms.",
        "Write Bash utilities for bootstrap, backup, and health verification with input validation, logging, and idempotent reruns.",
        "Document a standard host baseline covering access, logging, updates, rollback, and the evidence an on-call engineer needs after a failed deploy.",
      ],
      project:
        "Build a cloud-host bootstrap kit for a public VM: provision the server, lock down SSH, configure a systemd-managed app, add log rotation and backup checks, and publish an operator runbook.",
      resources: [
        {
          title: "Introduction to Linux",
          provider: "Linux Foundation",
          url: "https://training.linuxfoundation.org/resources/free-courses/introduction-to-linux/",
          access: "Free",
          format: "Course",
          note: "Use the command-line, files, processes, and administration sections as your baseline operating vocabulary.",
        },
        {
          title: "Ubuntu Server documentation",
          provider: "Canonical",
          url: "https://documentation.ubuntu.com/server/",
          access: "Free",
          format: "Documentation",
          note: "Reference practical guidance for networking, users, storage, and service administration on a real server distro.",
        },
        {
          title: "systemd documentation",
          provider: "systemd",
          url: "https://systemd.io/",
          access: "Free",
          format: "Documentation",
          note: "Learn how to manage long-running services, logs, timers, and restart policies in a production-friendly way.",
        },
      ],
      checkpoint:
        "To prove mastery, your portfolio project must provide concrete evidence for this skill. A hiring manager evaluating your work will check if: A reviewer can rebuild your host from source-controlled scripts, validate the hardening choices, and follow your runbook through one simulated outage without extra explanation. Your artifact must explicitly demonstrate this to show you can apply the skill to real-world scenarios rather than just theoretical exercises.",
    },
    {
      id: "networking",
      title: "Networking for secure cloud delivery",
      outcome:
        "Trace traffic from internet edge to private workload and explain how DNS, TLS, load balancing, routing, and policy failures show up in production.",
      studyPlan: [
        "Design a small cloud network with CIDR planning, public and private subnets, route tables, NAT or egress strategy, and least-privilege ingress rules.",
        "Follow one request through DNS, TLS, reverse proxy, load balancer, service, and database while capturing what should be observable at each hop.",
        "Practice diagnosing broken DNS, blocked ports, expired certificates, asymmetric routing, and unhealthy targets with dig, curl, traceroute, ss, and packet captures.",
        "Write a network change checklist that covers blast radius, rollback, health checks, and how to verify the change from both inside and outside the network boundary.",
      ],
      project:
        "Design a three-tier cloud network for an internal developer portal with public ingress, private application services, restricted database access, VPN or bastion entry, and a written incident drill for TLS and DNS failure.",
      resources: [
        {
          title: "Amazon VPC user guide",
          provider: "AWS",
          url: "https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html",
          access: "Free",
          format: "Documentation",
          note: "Ground your diagrams in real subnet, route, gateway, and security-group behavior rather than abstract boxes.",
        },
        {
          title: "Learning networking",
          provider: "Cloudflare",
          url: "https://www.cloudflare.com/learning/network-layer/what-is-a-computer-network/",
          access: "Free",
          format: "Documentation",
          note: "Use the articles to sharpen your mental model of DNS, HTTP, TLS, load balancing, and internet routing.",
        },
        {
          title: "Let's Encrypt documentation",
          provider: "Let's Encrypt",
          url: "https://letsencrypt.org/docs/",
          access: "Free",
          format: "Documentation",
          note: "Study certificate issuance and renewal so TLS is treated as an operational system, not a one-time setup step.",
        },
      ],
      checkpoint:
        "To prove mastery, your portfolio project must provide concrete evidence for this skill. A hiring manager evaluating your work will check if: Your architecture diagram shows every trust boundary, and you can prove three failure cases with command output or captured traffic plus a clear remediation path. Your artifact must explicitly demonstrate this to show you can apply the skill to real-world scenarios rather than just theoretical exercises.",
    },
    {
      id: "git",
      title: "Git workflows for infrastructure change",
      outcome:
        "Treat platform changes like product code: reviewable, reversible, traceable, and safe to promote across environments.",
      studyPlan: [
        "Use focused commits, branches, pull requests, tags, changelogs, and release notes to make operational intent visible.",
        "Practice merge, rebase, revert, reflog recovery, and secret-safe repository hygiene with .gitignore, protected branches, and required reviews.",
        "Design a repo structure for app code, infrastructure code, shared modules, and environment overlays that different teams can maintain without confusion.",
        "Capture deployment evidence in pull requests: plan output, screenshots, artifact hashes, change windows, and rollback notes.",
      ],
      project:
        "Set up an infrastructure repository for a multi-environment service with branch protections, pull-request templates, release tags, CODEOWNERS, and one intentionally reverted bad change.",
      resources: [
        {
          title: "Pro Git",
          provider: "Git",
          url: "https://git-scm.com/book/en/v2",
          access: "Free",
          format: "Documentation",
          note: "Use the chapters on branching, history rewriting, remotes, and recovery to build safe operational habits.",
        },
        {
          title: "GitHub Skills",
          provider: "GitHub",
          url: "https://skills.github.com/",
          access: "Free",
          format: "Practice",
          note: "Hands-on labs make it easy to rehearse pull requests, collaboration, and workflow automation in a disposable repo.",
        },
        {
          title: "About protected branches",
          provider: "GitHub",
          url: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches",
          access: "Free",
          format: "Documentation",
          note: "Translate platform risk into repository controls such as approvals, status checks, and merge restrictions.",
        },
      ],
      checkpoint:
        "To prove mastery, your portfolio project must provide concrete evidence for this skill. A hiring manager evaluating your work will check if: Another engineer can inspect the repository history and understand what changed, why it was approved, how it was released, and how to roll it back. Your artifact must explicitly demonstrate this to show you can apply the skill to real-world scenarios rather than just theoretical exercises.",
    },
    {
      id: "cloud-fundamentals",
      title: "Cloud fundamentals and landing zone design",
      outcome:
        "Choose cloud building blocks with explicit trade-offs around identity, isolation, reliability, and cost rather than memorizing vendor menus.",
      studyPlan: [
        "Model accounts or subscriptions, identity boundaries, environments, tagging, logging, budgets, and shared services as part of a landing-zone baseline.",
        "Map compute, storage, databases, queues, secrets, and load-balancing choices to the workload's scale, latency, compliance, and ownership constraints.",
        "Define recovery objectives, quota risks, regional strategy, and operational access before selecting individual services.",
        "Produce a short architecture decision record for each major platform choice, including what would cause a future redesign.",
      ],
      project:
        "Design a landing zone for a two-team SaaS product with separate dev, staging, and prod environments, centralized logging, cost tags, IAM role boundaries, backup requirements, and a monthly spend model.",
      resources: [
        {
          title: "AWS Well-Architected Framework",
          provider: "AWS",
          url: "https://aws.amazon.com/architecture/well-architected/",
          access: "Free",
          format: "Documentation",
          note: "Use the operational excellence, security, reliability, performance, cost, and sustainability lenses to pressure-test design choices.",
        },
        {
          title: "Google Cloud Architecture Framework",
          provider: "Google Cloud",
          url: "https://cloud.google.com/architecture/framework",
          access: "Free",
          format: "Documentation",
          note: "Helpful for translating platform design into concrete guidance around reliability, security, and cost.",
        },
        {
          title: "Cloud Adoption Framework",
          provider: "Microsoft",
          url: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/",
          access: "Free",
          format: "Documentation",
          note: "Use the landing-zone and governance material to think beyond a single workload.",
        },
      ],
      checkpoint:
        "To prove mastery, your portfolio project must provide concrete evidence for this skill. A hiring manager evaluating your work will check if: You can walk a stakeholder through your landing zone, explain each boundary, and defend why the design supports both delivery speed and operational control. Your artifact must explicitly demonstrate this to show you can apply the skill to real-world scenarios rather than just theoretical exercises.",
    },
    {
      id: "containers",
      title: "Containers and Kubernetes workload packaging",
      outcome:
        "Package services into portable artifacts and decide when they belong on a single host, a managed container service, or a Kubernetes platform.",
      studyPlan: [
        "Build minimal Docker images with pinned dependencies, multi-stage builds, non-root execution, health checks, and clear runtime configuration.",
        "Run multi-service workloads locally with Compose, then map the same concepts to deployments, services, config, secrets, probes, and rollouts.",
        "Practice debugging startup failures, crash loops, image pull errors, resource exhaustion, and bad environment configuration.",
        "Compare ECS, Cloud Run, App Service, and Kubernetes against one workload in terms of operability, cost, scaling, and team skill requirements.",
      ],
      project:
        "Containerize a small API plus background worker, publish versioned images, deploy them to a managed container platform or local Kubernetes cluster, and document rollout plus rollback steps.",
      resources: [
        {
          title: "Docker documentation",
          provider: "Docker",
          url: "https://docs.docker.com/",
          access: "Free",
          format: "Documentation",
          note: "Use the build, Compose, security, and registry sections while turning a local service into a portable artifact.",
        },
        {
          title: "Kubernetes Basics",
          provider: "Kubernetes",
          url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/",
          access: "Free",
          format: "Practice",
          note: "Rehearse deployments, services, scaling, probes, and rolling updates with an official hands-on path.",
        },
        {
          title: "OCI image specification",
          provider: "Open Container Initiative",
          url: "https://github.com/opencontainers/image-spec",
          access: "Free",
          format: "Documentation",
          note: "Useful when you want to understand what a container image really is beneath the tooling.",
        },
      ],
      checkpoint:
        "To prove mastery, your portfolio project must provide concrete evidence for this skill. A hiring manager evaluating your work will check if: A reviewer can run your containerized stack, inspect the image and deployment configuration, and observe a successful rollout plus one deliberate failure diagnosis. Your artifact must explicitly demonstrate this to show you can apply the skill to real-world scenarios rather than just theoretical exercises.",
    },
    {
      id: "infrastructure-as-code",
      title: "Infrastructure as code and environment promotion",
      outcome:
        "Express infrastructure changes as validated code with reusable modules, protected state, drift awareness, and a clear promotion path.",
      studyPlan: [
        "Model networks, identity, compute, secrets, and observability resources with variables, outputs, naming standards, and environment separation.",
        "Refactor repeated patterns into modules and decide what should be shared versus environment-specific.",
        "Protect state with locking, remote storage, review gates, and plan output that non-authors can read.",
        "Practice imports, drift correction, policy checks, safe destroy workflows, and how to recover from a partially applied change.",
      ],
      project:
        "Codify the landing zone and service stack from your cloud architecture project using Terraform or OpenTofu, including reusable modules, reviewable plans, and a tested teardown path for non-production.",
      resources: [
        {
          title: "Terraform tutorials",
          provider: "HashiCorp",
          url: "https://developer.hashicorp.com/terraform/tutorials",
          access: "Free",
          format: "Course",
          note: "Use the workflows, modules, and state tutorials as a guided path from basics to reviewable infrastructure changes.",
        },
        {
          title: "Terraform language documentation",
          provider: "HashiCorp",
          url: "https://developer.hashicorp.com/terraform/language",
          access: "Free",
          format: "Documentation",
          note: "Keep it open while deciding how to model variables, data sources, lifecycle settings, and outputs.",
        },
        {
          title: "OpenTofu documentation",
          provider: "OpenTofu",
          url: "https://opentofu.org/docs/",
          access: "Free",
          format: "Documentation",
          note: "Useful if your team prefers an open-source Terraform-compatible workflow.",
        },
      ],
      checkpoint:
        "To prove mastery, your portfolio project must provide concrete evidence for this skill. A hiring manager evaluating your work will check if: Your repo produces a readable plan, documents state safety, isolates environments cleanly, and proves you can recover from drift or a failed apply. Your artifact must explicitly demonstrate this to show you can apply the skill to real-world scenarios rather than just theoretical exercises.",
    },
    {
      id: "ci-cd",
      title: "CI/CD for platform delivery",
      outcome:
        "Automate code-to-cloud delivery with fast feedback, artifact integrity, environment approvals, and a rollback path that is actually tested.",
      studyPlan: [
        "Separate quick pull-request checks from slower integration and deployment stages so the team gets fast signal without weakening release quality.",
        "Build immutable artifacts, publish them once, and promote the same version across environments with traceable metadata.",
        "Add secret handling, environment protection, concurrency controls, deployment approvals, and post-deploy smoke tests.",
        "Practice failing the pipeline on a bad image, a broken infrastructure plan, and a failed smoke test, then document who should act on each signal.",
      ],
      project:
        "Create a delivery pipeline that lints infrastructure, builds and scans an image, runs tests, deploys to staging, executes smoke checks, and promotes the same artifact to production with approval and rollback notes.",
      resources: [
        {
          title: "GitHub Actions documentation",
          provider: "GitHub",
          url: "https://docs.github.com/en/actions",
          access: "Free",
          format: "Documentation",
          note: "Use workflow syntax, artifacts, environments, secrets, and reusable workflows to structure a production-worthy pipeline.",
        },
        {
          title: "OpenGitOps principles",
          provider: "OpenGitOps",
          url: "https://opengitops.dev/",
          access: "Free",
          format: "Documentation",
          note: "Helpful when you want a clean mental model for declarative, versioned, continuously reconciled delivery.",
        },
        {
          title: "Argo CD getting started",
          provider: "Argo Project",
          url: "https://argo-cd.readthedocs.io/en/stable/getting_started/",
          access: "Free",
          format: "Practice",
          note: "Optional next step for teams adopting GitOps promotion and drift reconciliation.",
        },
      ],
      checkpoint:
        "To prove mastery, your portfolio project must provide concrete evidence for this skill. A hiring manager evaluating your work will check if: A pull request links to pipeline evidence that shows build, test, scan, deploy, smoke verification, and an explicit path to revert the release. Your artifact must explicitly demonstrate this to show you can apply the skill to real-world scenarios rather than just theoretical exercises.",
    },
    {
      id: "observability",
      title: "Observability, resilience, and cost control",
      outcome:
        "Operate cloud workloads with the signals, recovery practice, and cost visibility needed to keep services healthy without surprise bills.",
      studyPlan: [
        "Instrument services with structured logs, metrics, traces, dashboards, alerts, and correlation IDs tied to user-impacting journeys.",
        "Define SLOs, backup coverage, recovery steps, scaling signals, and cost guardrails before the first production deployment.",
        "Run a game day for latency spikes, unhealthy dependencies, and runaway spend; record how quickly the team detects, diagnoses, and mitigates the issue.",
        "Review cost drivers such as idle resources, overprovisioned instances, data transfer, and log retention alongside reliability decisions.",
      ],
      project:
        "Add OpenTelemetry and Prometheus-based monitoring to your deployed service, build a cost-and-reliability dashboard, simulate a bad release and a spend anomaly, and update the runbook from what you learned.",
      resources: [
        {
          title: "OpenTelemetry documentation",
          provider: "OpenTelemetry",
          url: "https://opentelemetry.io/docs/",
          access: "Free",
          format: "Documentation",
          note: "Vendor-neutral reference for tracing, metrics, logs, semantic conventions, and collection patterns.",
        },
        {
          title: "Prometheus documentation",
          provider: "Prometheus",
          url: "https://prometheus.io/docs/",
          access: "Free",
          format: "Documentation",
          note: "Use PromQL, alerting, exporters, and service discovery concepts to build actionable operational signal.",
        },
        {
          title: "Google SRE workbook",
          provider: "Google",
          url: "https://sre.google/workbook/table-of-contents/",
          access: "Free",
          format: "Documentation",
          note: "Connect observability to SLOs, paging, capacity, and post-incident learning rather than dashboards alone.",
        },
      ],
      checkpoint:
        "To prove mastery, your portfolio project must provide concrete evidence for this skill. A hiring manager evaluating your work will check if: Your service has live telemetry, clear alert ownership, a tested recovery path, and a cost review that explains which reliability choices are worth their spend. Your artifact must explicitly demonstrate this to show you can apply the skill to real-world scenarios rather than just theoretical exercises.",
    },
  ],
};
