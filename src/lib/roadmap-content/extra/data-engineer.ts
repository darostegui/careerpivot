import type { RoadmapContent } from "../types";

export const dataEngineerContent: RoadmapContent = {
  roleSlug: "data-engineer",
  roleTitle: "Data Engineer",
  topics: [
    {
      id: "data-modeling",
      title: "Analytical data modeling",
      outcome:
        "Shape trustworthy analytical tables whose grain, history, keys, and business definitions remain clear to downstream users.",
      studyPlan: [
        "Start with stakeholder questions and state grain, time zone, and freshness.",
        "Profile keys, duplicates, late arrivals, and changing dimensions before tables.",
        "Reconcile metrics against a hand-counted sample and publish a contract."
      ],
      project:
        "Complete the scenario as a grain memo, schema sketch, and reconciliation notebook; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "Data Warehouse Toolkit Companion",
          provider: "Kimball Group",
          url: "https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/",
          access: "Free",
          format: "Documentation",
          note: "Practical articles on dimensional modeling, facts, dimensions, and grain.",
        },
        {
          title: "dbt Learn",
          provider: "dbt Labs",
          url: "https://learn.getdbt.com/",
          access: "Free",
          format: "Course",
          note: "Free lessons connecting transformation, testing, documentation, and analytics engineering.",
        },
        {
          title: "The Data Warehouse Toolkit Resources",
          provider: "Ralph Kimball Group",
          url: "https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/books/",
          access: "Free",
          format: "Documentation",
          note: "Optional reference for deeper dimensional design patterns and trade-offs.",
        },
      ],
      checkpoint:
        "The five questions return reproducible answers and every mismatch has a documented grain or source explanation.",
    },
    {
      id: "batch-pipelines",
      title: "Batch pipelines",
      outcome:
        "Build repeatable batch ingestion and transformation jobs that are incremental, observable, restartable, and safe to rerun.",
      studyPlan: [
        "Validate schema, date coverage, encoding, and duplicate keys before loading.",
        "Test watermarks, quarantine, idempotency, and partial-failure recovery.",
        "Compare replay cost and downstream effects before backfilling."
      ],
      project:
        "Complete the scenario as a run ledger, rejected-row bundle, and replay transcript; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "Apache Airflow Documentation",
          provider: "Apache Software Foundation",
          url: "https://airflow.apache.org/docs/",
          access: "Free",
          format: "Documentation",
          note: "Reference for DAGs, scheduling, retries, sensors, and operational patterns.",
        },
        {
          title: "Data Engineering Zoomcamp",
          provider: "DataTalks.Club",
          url: "https://github.com/DataTalksClub/data-engineering-zoomcamp",
          access: "Free",
          format: "Course",
          note: "Project-based pathway covering ingestion, orchestration, warehousing, and infrastructure.",
        },
        {
          title: "Great Expectations Documentation",
          provider: "Great Expectations",
          url: "https://docs.greatexpectations.io/",
          access: "Free",
          format: "Practice",
          note: "Optional tool reference for expressing and running data quality expectations.",
        },
      ],
      checkpoint:
        "A replay produces identical partitions without duplicate rows, while quarantined input remains inspectable.",
    },
    {
      id: "streaming",
      title: "Streaming data",
      outcome:
        "Reason about event streams, partitions, ordering, delivery, and state well enough to build a small system with honest guarantees.",
      studyPlan: [
        "Define event questions and windows before choosing stream mechanics.",
        "Test ordering, duplicates, late events, and schema versions with a generator.",
        "Measure lag and result error under restart and replay."
      ],
      project:
        "Complete the scenario as a event-window specification and replay experiment report; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "Kafka Documentation",
          provider: "Apache Software Foundation",
          url: "https://kafka.apache.org/documentation/",
          access: "Free",
          format: "Documentation",
          note: "Authoritative reference for topics, partitions, producers, consumers, and delivery behavior.",
        },
        {
          title: "Streaming Systems Resources",
          provider: "Google Cloud",
          url: "https://developers.google.com/machine-learning/crash-course",
          access: "Free",
          format: "Course",
          note: "Free material on event time, windows, triggers, and streaming design.",
        },
        {
          title: "Redpanda Tutorials",
          provider: "Redpanda",
          url: "https://docs.redpanda.com/current/get-started/",
          access: "Free",
          format: "Practice",
          note: "Local-friendly exercises for experimenting with Kafka-compatible streaming concepts.",
        },
      ],
      checkpoint:
        "A restart and late-event test show the stated event-time guarantee and expose lag evidence.",
    },
    {
      id: "cloud-data-platforms",
      title: "Cloud data platforms",
      outcome:
        "Assemble a cost-conscious data platform with appropriate storage, compute, access boundaries, and lifecycle policies.",
      studyPlan: [
        "Compare storage and compute by query shape, retention, residency, and ownership.",
        "Draw raw, accepted, and serving zones with deletion decisions.",
        "Estimate cost from workload measurements and state redesign thresholds."
      ],
      project:
        "Complete the scenario as a architecture review board and cost sensitivity worksheet; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "AWS Analytics Lens",
          provider: "AWS",
          url: "https://docs.aws.amazon.com/wellarchitected/latest/analytics-lens/",
          access: "Free",
          format: "Documentation",
          note: "Architecture guidance for reliable, secure, performant, and cost-aware analytics workloads.",
        },
        {
          title: "Delta Lake Documentation",
          provider: "Delta Lake",
          url: "https://docs.delta.io/latest/",
          access: "Free",
          format: "Documentation",
          note: "Reference for open table formats, transactions, schema evolution, and time travel.",
        },
        {
          title: "Google Cloud Data Engineering Learning Path",
          provider: "Google Cloud",
          url: "https://www.cloudskillsboost.google/paths/16",
          access: "Free",
          format: "Course",
          note: "Optional structured material on ingestion, processing, warehousing, and governance.",
        },
      ],
      checkpoint:
        "A reviewer can trace one dataset through zones, identities, retention, and cost assumptions.",
    },
    {
      id: "quality-governance",
      title: "Data quality and governance",
      outcome:
        "Make data products trustworthy by detecting bad inputs, documenting meaning, protecting sensitive fields, and assigning ownership.",
      studyPlan: [
        "Interview consumers about what “wrong” means in their decisions.",
        "Turn freshness, completeness, validity, and ownership into checks.",
        "Run an incident and write the consumer update before fixing it."
      ],
      project:
        "Complete the scenario as a catalog entry, lineage map, and incident communication; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "Data Management Body of Knowledge",
          provider: "DAMA International",
          url: "https://www.dama.org/",
          access: "Free",
          format: "Documentation",
          note: "Useful overview of governance, quality, metadata, architecture, and stewardship disciplines.",
        },
        {
          title: "Data Quality Dimensions",
          provider: "Great Expectations",
          url: "https://docs.greatexpectations.io/",
          access: "Free",
          format: "Documentation",
          note: "Practical framing for turning vague trust concerns into testable expectations.",
        },
        {
          title: "GDPR Principles",
          provider: "European Commission",
          url: "https://commission.europa.eu/law/law-topic/data-protection/data-protection-eu_en",
          access: "Free",
          format: "Documentation",
          note: "Reference for purpose limitation, minimization, retention, and protected handling of personal data.",
        },
      ],
      checkpoint:
        "A consumer can see the failed check, impact, owner, and prevention action in the published record.",
    },
  ],
};
