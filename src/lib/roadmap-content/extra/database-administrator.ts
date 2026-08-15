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
        "Start from transaction stories and invariants, not tables.",
        "Test constraints, isolation, migration compatibility, and representative queries.",
        "Measure normalized and read-optimized alternatives."
      ],
      project:
        "Complete the scenario as a migration set, invariant test suite, and transaction trace; make assumptions, decisions, and verification evidence explicit.",
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
        "Invalid state transitions fail at the database boundary and the concurrency trace explains the observed isolation.",
    },
    {
      id: "backup-and-recovery",
      title: "Backup, restore, and disaster recovery",
      outcome:
        "Choose backup methods from recovery objectives, execute restores in a disposable environment, and prove that recovered data is usable.",
      studyPlan: [
        "Translate RPO, RTO, retention, and restore validation into a drill.",
        "Recover logically and to a point in time in disposable instances.",
        "Detect and quarantine a bad backup artifact."
      ],
      project:
        "Complete the scenario as a recovery evidence log and executive gap memo; make assumptions, decisions, and verification evidence explicit.",
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
        "The recovery log proves both restored data and application behavior, not merely a successful command.",
    },
    {
      id: "performance-and-query-tuning",
      title: "Performance and query tuning",
      outcome:
        "Diagnose slow queries with plans and measurements, then improve indexes or SQL without trading correctness for speed.",
      studyPlan: [
        "Classify latency complaints as query, lock, I/O, or capacity symptoms.",
        "Change one variable at a time and compare plans and percentiles.",
        "Add regression guards before approving an optimization."
      ],
      project:
        "Complete the scenario as a query-plan comparison and rollback SQL card; make assumptions, decisions, and verification evidence explicit.",
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
        "The plan diff, benchmark, and regression query support the chosen change and its rollback.",
    },
    {
      id: "security-and-access",
      title: "Database security and access control",
      outcome:
        "Apply least privilege, secure connections, secrets hygiene, auditing, and safe data-handling practices to a database service.",
      studyPlan: [
        "Map identities to actions and sensitivity, then remove permissions until a task fails.",
        "Test rotation, TLS, audit events, and injection-resistant access.",
        "Decide ownership and expiry for one ambiguous service account."
      ],
      project:
        "Complete the scenario as a access matrix and denied-action test transcript; make assumptions, decisions, and verification evidence explicit.",
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
        "Denied-action tests and expiry dates make every privilege exception reviewable.",
    },
    {
      id: "operations-and-observability",
      title: "Database operations and observability",
      outcome:
        "Operate a database with health checks, capacity signals, maintenance routines, change controls, and evidence-based incident response.",
      studyPlan: [
        "Map user symptoms to a small diagnostic signal set.",
        "Rehearse lock, connection, and disk incidents with safe mitigations.",
        "Separate recovery, prevention, and ownership in the learning review."
      ],
      project:
        "Complete the scenario as a incident timeline and diagnostic query cards; make assumptions, decisions, and verification evidence explicit.",
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
        "Diagnostic cards lead from symptom to evidence to safe mitigation and a preventive owner.",
    },
  ],
};
