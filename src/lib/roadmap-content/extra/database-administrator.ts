import type { RoadmapContent } from "../types";

export const databaseAdministratorContent: RoadmapContent = {
  roleSlug: "database-administrator",
  roleTitle: "Database Administrator",
  topics: [
    {
      id: "sql-and-relational-design",
      title: "SQL and relational design",
      outcome:
        "Design normalized relational schemas and write predictable SQL for joins, aggregation, constraints, transactions, and safe changes.",
      studyPlan: [
        "Model entities, keys, cardinality, nullability, and functional dependencies from a written business scenario.",
        "Practice SELECT, joins, grouping, window functions, CTEs, constraints, views, and parameterized statements.",
        "Compare normalization with deliberate denormalization, recording the read, write, and integrity trade-offs.",
        "Use transactions and isolation examples to explain dirty reads, lost updates, and repeatable reads.",
      ],
      project:
        "Build a PostgreSQL schema for a small library or inventory service with migrations, seed data, constraints, 15 representative queries, and a transaction-concurrency demonstration.",
      resources: [
        {
          title: "PostgreSQL Tutorial",
          provider: "PostgreSQL Global Development Group",
          url: "https://www.postgresql.org/docs/current/tutorial.html",
          access: "Free",
          format: "Course",
          note: "Complete the SQL, joins, transactions, and window-function sections against a local instance.",
        },
        {
          title: "SQLBolt",
          provider: "SQLBolt",
          url: "https://sqlbolt.com/",
          access: "Free",
          format: "Practice",
          note: "Use the short interactive lessons for query fluency before working on your schema.",
        },
        {
          title: "Use The Index, Luke!",
          provider: "Markus Winand",
          url: "https://use-the-index-luke.com/",
          access: "Free",
          format: "Documentation",
          note: "Read the relational and indexing chapters alongside query experiments.",
        },
      ],
      checkpoint:
        "A reviewer can recreate the database from an empty instance, run your query suite, and see constraints reject at least three invalid records.",
    },
    {
      id: "backup-and-recovery",
      title: "Backup, restore, and disaster recovery",
      outcome:
        "Choose backup methods from recovery objectives, execute restores in a disposable environment, and prove that recovered data is usable.",
      studyPlan: [
        "Define RPO, RTO, retention, consistency, encryption, and the difference between logical, physical, full, and incremental backups.",
        "Run PostgreSQL logical and physical backup exercises on local containers or VMs; record duration and artifact size.",
        "Delete or corrupt data in the lab, restore to a new instance, and validate row counts, constraints, application queries, and timestamps.",
        "Write a recovery runbook with prerequisites, secrets handling, escalation points, verification, and a rollback or quarantine step.",
      ],
      project:
        "Create a scheduled backup and restore drill for the portfolio database, including encrypted-at-rest test artifacts, a recovery log, measured RPO/RTO, and a gap list.",
      resources: [
        {
          title: "PostgreSQL SQL Dump documentation",
          provider: "PostgreSQL",
          url: "https://www.postgresql.org/docs/current/backup-dump.html",
          access: "Free",
          format: "Documentation",
          note: "Practice pg_dump and pg_restore with a non-production dataset.",
        },
        {
          title: "PostgreSQL Continuous Archiving",
          provider: "PostgreSQL",
          url: "https://www.postgresql.org/docs/current/continuous-archiving.html",
          access: "Free",
          format: "Documentation",
          note: "Learn WAL archiving and point-in-time recovery concepts before automating them.",
        },
        {
          title: "Database Reliability Engineering",
          provider: "O'Reilly",
          url: "https://sre.google/sre-book/table-of-contents/",
          access: "Free",
          format: "Documentation",
          note: "Use the availability and recovery principles to frame operational trade-offs.",
        },
      ],
      checkpoint:
        "You can restore the latest backup to a clean instance within your stated RTO and produce checks proving the application can read the recovered data.",
    },
    {
      id: "performance-and-query-tuning",
      title: "Performance and query tuning",
      outcome:
        "Diagnose slow queries with plans and measurements, then improve indexes or SQL without trading correctness for speed.",
      studyPlan: [
        "Learn selectivity, sequential versus index scans, joins, statistics, buffers, locks, and why latency percentiles matter.",
        "Generate representative data at a realistic scale and capture baseline latency, rows, buffers, and plan output.",
        "Use EXPLAIN ANALYZE safely, test one index or query rewrite at a time, and compare cold and warm cache behavior.",
        "Check write amplification, index size, maintenance cost, and regression risk before recommending a change.",
      ],
      project:
        "Tune three intentionally slow queries in the portfolio database; publish before/after plans, p50/p95 timings, index rationale, and a regression test script.",
      resources: [
        {
          title: "Using EXPLAIN",
          provider: "PostgreSQL",
          url: "https://www.postgresql.org/docs/current/using-explain.html",
          access: "Free",
          format: "Documentation",
          note: "Run plans on a copy or transaction-wrapped lab, never against an unknown production workload.",
        },
        {
          title: "PostgreSQL Performance Tips",
          provider: "PostgreSQL",
          url: "https://www.postgresql.org/docs/current/performance-tips.html",
          access: "Free",
          format: "Documentation",
          note: "Use it to connect planner behavior, statistics, and configuration.",
        },
        {
          title: "Use The Index, Luke!",
          provider: "Markus Winand",
          url: "https://use-the-index-luke.com/sql/where-clause",
          access: "Free",
          format: "Course",
          note: "Practice index design and query patterns with measured examples.",
        },
      ],
      checkpoint:
        "Each optimization includes a reproducible benchmark, a plan diff, correctness checks, and a quantified latency or buffer improvement.",
    },
    {
      id: "security-and-access",
      title: "Database security and access control",
      outcome:
        "Apply least privilege, secure connections, secrets hygiene, auditing, and safe data-handling practices to a database service.",
      studyPlan: [
        "Map human, application, migration, reporting, and backup identities to the minimum operations each needs.",
        "Configure roles, schemas, row or object privileges, TLS in a local lab, and password or certificate rotation procedures.",
        "Test both positive and negative access cases, including injection-resistant parameterized queries and restricted catalog access.",
        "Create an audit and incident workflow that records access changes without copying sensitive data into tickets or logs.",
      ],
      project:
        "Harden the portfolio database with separate runtime, migration, read-only, and backup roles; demonstrate denied operations, TLS settings, audit events, and a secret-rotation checklist.",
      resources: [
        {
          title: "PostgreSQL Roles and Privileges",
          provider: "PostgreSQL",
          url: "https://www.postgresql.org/docs/current/user-manag.html",
          access: "Free",
          format: "Documentation",
          note: "Use role inheritance and privilege examples in a disposable database.",
        },
        {
          title: "OWASP SQL Injection Prevention Cheat Sheet",
          provider: "OWASP",
          url: "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html",
          access: "Free",
          format: "Documentation",
          note: "Use parameterization and allow-list guidance when reviewing application queries.",
        },
        {
          title: "PostgreSQL SSL Support",
          provider: "PostgreSQL",
          url: "https://www.postgresql.org/docs/current/ssl-tcp.html",
          access: "Free",
          format: "Documentation",
          note: "Configure certificates only in a local lab and document trust assumptions.",
        },
      ],
      checkpoint:
        "A permissions test script shows each role's allowed and denied actions, and no application credential or sensitive row appears in repository files or logs.",
    },
    {
      id: "operations-and-observability",
      title: "Database operations and observability",
      outcome:
        "Operate a database with health checks, capacity signals, maintenance routines, change controls, and evidence-based incident response.",
      studyPlan: [
        "Track connections, transactions, locks, replication lag, cache hit ratio, bloat, disk growth, errors, and query latency.",
        "Learn vacuum, analyze, checkpoint, connection pooling, migrations, and the difference between symptoms and causes.",
        "Set practical alerts with runbooks and test them using a local container or VM rather than a shared service.",
        "Rehearse a lock incident, connection exhaustion, disk threshold, or failed migration and write a blameless timeline.",
      ],
      project:
        "Instrument the portfolio database with a dashboard and runbooks; inject a blocked transaction and connection spike, capture evidence, resolve safely, and document prevention.",
      resources: [
        {
          title: "PostgreSQL Monitoring Database Activity",
          provider: "PostgreSQL",
          url: "https://www.postgresql.org/docs/current/monitoring.html",
          access: "Free",
          format: "Documentation",
          note: "Use pg_stat_activity and related views to build diagnostic queries.",
        },
        {
          title: "PostgreSQL Monitoring with Prometheus",
          provider: "Prometheus Community",
          url: "https://github.com/prometheus-community/postgres_exporter",
          access: "Free",
          format: "Practice",
          note: "Run the exporter locally and choose a small, explainable metric set.",
        },
        {
          title: "Google SRE Workbook",
          provider: "Google",
          url: "https://sre.google/workbook/alerting-on-slos/",
          access: "Free",
          format: "Documentation",
          note: "Adapt SLO and alerting ideas to database availability and latency.",
        },
      ],
      checkpoint:
        "Your dashboard detects the injected incident, your runbook identifies the blocking session or resource, and the postmortem links evidence to a preventive change.",
    },
  ],
};
