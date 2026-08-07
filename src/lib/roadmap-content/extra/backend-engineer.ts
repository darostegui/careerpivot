import type { RoadmapContent } from "../types";

export const backendEngineerContent: RoadmapContent = {
  roleSlug: "backend-engineer",
  roleTitle: "Backend Engineer",
  topics: [
    {
      id: "api-design",
      title: "API design",
      outcome:
        "Design an API with stable contracts, useful errors, clear pagination, and behavior that clients can depend on.",
      studyPlan: [
        "Model resources, commands, identifiers, validation rules, status codes, and error shapes from concrete use cases.",
        "Choose REST or another interface style deliberately and document filtering, sorting, pagination, and versioning decisions.",
        "Implement authentication, authorization, idempotency, rate limits, and safe handling of malformed input.",
        "Publish an executable contract and test both successful and failure paths from a client's point of view.",
      ],
      project:
        "Build a reservations API for a community workshop with availability checks, idempotent booking requests, role-based cancellation, pagination, and an OpenAPI contract.",
      resources: [
        {
          title: "OpenAPI Specification",
          provider: "OpenAPI Initiative",
          url: "https://spec.openapis.org/oas/latest.html",
          access: "Free",
          format: "Documentation",
          note: "Stable reference for describing HTTP APIs and generating useful tooling.",
        },
        {
          title: "REST API Design Rulebook",
          provider: "Microsoft",
          url: "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design",
          access: "Free",
          format: "Documentation",
          note: "Practical guidance for resource design, errors, security, and evolvability.",
        },
        {
          title: "Postman Learning Center",
          provider: "Postman",
          url: "https://learning.postman.com/docs/getting-started/introduction/",
          access: "Free",
          format: "Practice",
          note: "Use collections and scripted checks to exercise a contract from a client perspective.",
        },
      ],
      checkpoint:
        "A documented API passes contract tests for validation, authorization, pagination, duplicate requests, and at least two meaningful error responses.",
    },
    {
      id: "data-modeling",
      title: "Data modeling and SQL",
      outcome:
        "Choose schemas, constraints, indexes, and transactions that preserve business invariants while keeping common queries understandable and fast.",
      studyPlan: [
        "Translate domain rules into entities, relationships, keys, nullability, uniqueness, and lifecycle states.",
        "Normalize the core model, then identify measured cases where denormalization or derived data is justified.",
        "Use query plans, indexes, transactions, isolation, and migrations to reason about correctness under concurrency.",
        "Seed realistic data, benchmark a hot query, and document rollback or forward-only migration choices.",
      ],
      project:
        "Design the persistence layer for a multi-location equipment-lending service, including overdue rules, concurrent checkout protection, indexes, and a migration history.",
      resources: [
        {
          title: "PostgreSQL Documentation",
          provider: "PostgreSQL",
          url: "https://www.postgresql.org/docs/current/",
          access: "Free",
          format: "Documentation",
          note: "Authoritative reference for SQL, constraints, transactions, indexes, and administration.",
        },
        {
          title: "Use The Index, Luke!",
          provider: "Markus Winand",
          url: "https://use-the-index-luke.com/",
          access: "Free",
          format: "Documentation",
          note: "Clear, database-agnostic explanations of indexing and query performance.",
        },
        {
          title: "SQLBolt",
          provider: "SQLBolt",
          url: "https://sqlbolt.com/",
          access: "Free",
          format: "Practice",
          note: "Short interactive exercises for reinforcing query and relational thinking.",
        },
      ],
      checkpoint:
        "The repository contains a schema diagram, migrations, constraints for three business invariants, a concurrency test, and an explain-plan comparison for one optimized query.",
    },
    {
      id: "distributed-systems",
      title: "Distributed systems",
      outcome:
        "Make sensible consistency, retry, timeout, and failure decisions when a backend spans processes, queues, or regions.",
      studyPlan: [
        "Learn latency, partial failure, clocks, replication, leader election, consistency models, and why network calls need budgets.",
        "Design request deadlines, bounded retries with jitter, idempotency keys, circuit breaking, and dead-letter handling.",
        "Compare synchronous calls, events, queues, and scheduled work for a workflow with explicit delivery guarantees.",
        "Simulate duplicate delivery and a dependency outage, then document what the system guarantees and what it cannot guarantee.",
      ],
      project:
        "Implement an order-to-notification workflow with an outbox, worker retries, deduplication, dead-letter review, and a small failure-injection script.",
      resources: [
        {
          title: "Designing Data-Intensive Applications Notes",
          provider: "Martin Kleppmann",
          url: "https://dataintensive.net/",
          access: "Free",
          format: "Documentation",
          note: "Book companion site with chapters and resources for distributed data systems.",
        },
        {
          title: "Distributed Systems for Fun and Profit",
          provider: "Mikito Takada",
          url: "https://book.mixu.net/distsys/",
          access: "Free",
          format: "Documentation",
          note: "Concise conceptual guide to time, replication, consistency, and coordination.",
        },
        {
          title: "AWS Builders' Library",
          provider: "AWS",
          url: "https://aws.amazon.com/builders-library/",
          access: "Free",
          format: "Documentation",
          note: "Production-oriented essays on retries, timeouts, queues, and resilient services.",
        },
      ],
      checkpoint:
        "A failure report demonstrates duplicate delivery and a dependency timeout, records observed behavior, and links each mitigation to an explicit delivery or consistency guarantee.",
    },
    {
      id: "security",
      title: "Backend security",
      outcome:
        "Reduce common application risks by protecting identities, inputs, secrets, data access, and operational interfaces from the start.",
      studyPlan: [
        "Map assets, actors, trust boundaries, abuse cases, and authorization decisions for one service.",
        "Practice parameterized queries, output encoding, secure sessions or tokens, password handling, CSRF defenses, and safe file processing.",
        "Add secret management, dependency updates, audit events, least-privilege service accounts, and privacy-conscious logging.",
        "Run a focused threat review, fix findings, and explain residual risk rather than claiming absolute security.",
      ],
      project:
        "Harden the reservations API with role-based authorization, secure session handling, input validation, dependency scanning, audit events, and a threat-model document.",
      resources: [
        {
          title: "OWASP Top 10",
          provider: "OWASP",
          url: "https://owasp.org/www-project-top-ten/",
          access: "Free",
          format: "Documentation",
          note: "A practical risk vocabulary for prioritizing common web application weaknesses.",
        },
        {
          title: "OWASP Application Security Verification Standard",
          provider: "OWASP",
          url: "https://owasp.org/www-project-application-security-verification-standard/",
          access: "Free",
          format: "Documentation",
          note: "Detailed, testable requirements for authentication, access control, and data protection.",
        },
        {
          title: "PortSwigger Web Security Academy",
          provider: "PortSwigger",
          url: "https://portswigger.net/web-security",
          access: "Free",
          format: "Practice",
          note: "Interactive labs for understanding and safely reproducing web vulnerabilities.",
        },
      ],
      checkpoint:
        "A security review records at least five threats, fixes three in code, and includes automated checks showing unauthorized access and unsafe input are rejected.",
    },
    {
      id: "observability-operations",
      title: "Observability and operations",
      outcome:
        "Operate a backend with enough evidence to detect user impact, diagnose failures, and improve it after incidents.",
      studyPlan: [
        "Define service-level indicators for latency, errors, saturation, throughput, and important business outcomes.",
        "Add structured logs, request IDs, metrics, traces, health checks, and redaction for sensitive values.",
        "Create alerts with ownership, thresholds, links to runbooks, and protection against noisy low-value signals.",
        "Run a controlled incident, record a timeline and customer impact, and turn one lesson into a concrete engineering change.",
      ],
      project:
        "Instrument the order workflow with traces across API and worker boundaries, build a small dashboard, alert on stuck work, and write a blameless post-incident review.",
      resources: [
        {
          title: "OpenTelemetry Documentation",
          provider: "OpenTelemetry",
          url: "https://opentelemetry.io/docs/",
          access: "Free",
          format: "Documentation",
          note: "Vendor-neutral guidance for metrics, logs, traces, and context propagation.",
        },
        {
          title: "Google SRE Workbook",
          provider: "Google",
          url: "https://sre.google/workbook/table-of-contents/",
          access: "Free",
          format: "Documentation",
          note: "Practical exercises for SLOs, alerting, incident response, and reliability work.",
        },
        {
          title: "Prometheus Documentation",
          provider: "Prometheus",
          url: "https://prometheus.io/docs/",
          access: "Free",
          format: "Documentation",
          note: "Reference for metrics, queries, exporters, and alert rules.",
        },
      ],
      checkpoint:
        "A simulated outage produces one actionable alert, a traceable request path, a linked runbook, and a post-incident action with an owner and due date.",
    },
  ],
};
