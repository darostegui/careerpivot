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
        "Translate an operational process into events, entities, grain, dimensions, measures, and slowly changing attributes.",
        "Compare normalized source models with dimensional marts and choose the simplest shape for each analytical question.",
        "Define keys, null behavior, late-arriving data, deduplication, and metric ownership in a data contract.",
        "Build a small star schema and validate totals against the source before publishing it for analysis.",
      ],
      project:
        "Model a bike-share warehouse with trips, stations, weather, and membership history, including a documented grain and reproducible daily and monthly metrics.",
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
        "A schema diagram and data dictionary state the grain for every table, while reconciliation queries explain any difference between source and warehouse totals.",
    },
    {
      id: "batch-pipelines",
      title: "Batch pipelines",
      outcome:
        "Build repeatable batch ingestion and transformation jobs that are incremental, observable, restartable, and safe to rerun.",
      studyPlan: [
        "Separate extract, validate, transform, load, and publish stages with explicit inputs and outputs.",
        "Implement watermarks, partitioning, retries, backfills, idempotency, and quarantine handling for malformed records.",
        "Add row-count, freshness, uniqueness, and referential checks before downstream tables become visible.",
        "Schedule a realistic workload, inspect its logs and timing, then recover from a failed middle step.",
      ],
      project:
        "Create a daily pipeline for public transit data that downloads source files, validates them, loads partitioned tables, supports a date-range backfill, and records run metadata.",
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
        "A scheduled run produces a metadata record, rejects bad input without hiding it, can be rerun without duplicates, and completes a documented backfill for at least seven dates.",
    },
    {
      id: "streaming",
      title: "Streaming data",
      outcome:
        "Reason about event streams, partitions, ordering, delivery, and state well enough to build a small system with honest guarantees.",
      studyPlan: [
        "Learn topics, partitions, offsets, consumer groups, retention, replay, ordering boundaries, and delivery semantics.",
        "Design an event envelope with identifiers, timestamps, schema version, producer, and privacy classification.",
        "Implement a consumer with checkpoints, bounded retries, deduplication, and a dead-letter path for poison messages.",
        "Replay a historical window and compare event-time results with processing-time behavior under late or duplicated events.",
      ],
      project:
        "Build a real-time station-occupancy pipeline that consumes trip events, maintains rolling availability, handles duplicates and late events, and exposes a replayable output.",
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
        "A replay test documents ordering and delivery assumptions, processes duplicate and late events correctly, and reports consumer lag plus dead-letter counts.",
    },
    {
      id: "cloud-data-platforms",
      title: "Cloud data platforms",
      outcome:
        "Assemble a cost-conscious data platform with appropriate storage, compute, access boundaries, and lifecycle policies.",
      studyPlan: [
        "Compare object storage, relational warehouses, lakehouses, query engines, catalogs, and orchestration by workload.",
        "Design zones for raw, validated, curated, and serving data with ownership, retention, and schema expectations.",
        "Apply partitioning, file formats, compression, workload isolation, least privilege, encryption, and audit logging.",
        "Estimate storage and query cost, then document what can be ephemeral, cached, sampled, or deleted.",
      ],
      project:
        "Design and deploy a small lakehouse-style platform for the transit pipeline, including raw and curated storage, catalog metadata, access roles, retention, and a monthly cost estimate.",
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
        "An architecture diagram includes data zones, identities, retention, failure recovery, and a cost model with at least three explicit workload assumptions.",
    },
    {
      id: "quality-governance",
      title: "Data quality and governance",
      outcome:
        "Make data products trustworthy by detecting bad inputs, documenting meaning, protecting sensitive fields, and assigning ownership.",
      studyPlan: [
        "Define freshness, completeness, validity, uniqueness, consistency, and accuracy checks for one data product.",
        "Create contracts, lineage notes, business definitions, ownership, SLAs, and a process for changing schemas safely.",
        "Classify sensitive data, minimize collection, mask or restrict access, and prevent secrets or personal data in logs.",
        "Publish quality results and run a controlled incident from detection through communication, correction, and prevention.",
      ],
      project:
        "Create a governed data product for transit reliability with a catalog page, lineage diagram, quality dashboard, access matrix, and incident playbook.",
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
        "The product has named owners, documented definitions, automated checks for four quality dimensions, a visible freshness result, and a tested response to one failed check.",
    },
  ],
};
