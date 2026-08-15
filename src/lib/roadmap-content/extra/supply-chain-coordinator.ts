import type { RoadmapContent } from "../types";

export const supplyChainCoordinatorContent: RoadmapContent = {
  roleSlug: "supply-chain-coordinator",
  roleTitle: "Supply Chain Coordinator",
  topics: [
    {
      id: "planning-and-forecasting",
      title: "Demand and supply planning",
      outcome:
        "Convert demand signals into a feasible replenishment plan that balances service, inventory, capacity, and supplier constraints.",
      studyPlan: [
        "Define planning grain, demand signal, lead-time uncertainty, service, and cadence.",
        "Compare baseline forecast with planner overrides and explain exceptions.",
        "Convert net requirements into feasible orders with constraints visible."
      ],
      project:
        "Complete the scenario as a exception-led planning book and supplier call sheet; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "Supply Chain Management",
          provider: "MIT OpenCourseWare",
          url: "https://ocw.mit.edu/search/?q=supply+chain+management",
          access: "Free",
          format: "Course",
          note: "Open lectures and assignments covering forecasting, inventory, sourcing, and network decisions.",
        },
        {
          title: "Forecasting: Principles and Practice",
          provider: "Hyndman and Athanasopoulos",
          url: "https://otexts.com/fpp3/",
          access: "Free",
          format: "Documentation",
          note: "Free reference for seasonal demand, forecast accuracy, and uncertainty.",
        },
        {
          title: "Supply Chain Planning",
          provider: "ASCM",
          url: "https://www.ascm.org/topics/supply-chain-planning/",
          access: "Free",
          format: "Documentation",
          note: "Professional overview of planning processes, trade-offs, and terminology.",
        },
      ],
      checkpoint:
        "Orders trace to demand and constraints, with unresolved exceptions owned and dated.",
    },
    {
      id: "inventory-control",
      title: "Inventory control",
      outcome:
        "Set and monitor inventory policies that reduce stockouts and excess while preserving traceability for every adjustment.",
      studyPlan: [
        "Segment by value, variability, criticality, shelf life, and count risk.",
        "Reconcile counts to system stock and investigate variances.",
        "Tune policy with service, expiry, carrying cost, and working capital."
      ],
      project:
        "Complete the scenario as a ABC/XYZ analysis, count calendar, and variance case files; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "Inventory Management",
          provider: "MIT OpenCourseWare",
          url: "https://ocw.mit.edu/search/?q=operations+management",
          access: "Free",
          format: "Course",
          note: "Open operations material with inventory, service, and process analysis foundations.",
        },
        {
          title: "Inventory Management: Principles and Practices",
          provider: "ASCM",
          url: "https://www.ascm.org/topics/inventory-management/",
          access: "Free",
          format: "Documentation",
          note: "Industry-oriented reference for inventory accuracy, policy, and performance metrics.",
        },
        {
          title: "Cycle Counting",
          provider: "Oracle",
          url: "https://docs.oracle.com/en/cloud/saas/supply-chain-and-manufacturing/",
          access: "Free",
          format: "Documentation",
          note: "System documentation that makes cycle-count controls and adjustment workflows concrete.",
        },
      ],
      checkpoint:
        "Criticality and value change policy, and every stock adjustment has evidence and a reason.",
    },
    {
      id: "supplier-coordination",
      title: "Supplier coordination",
      outcome:
        "Manage supplier commitments, changes, and performance with clear evidence, escalation paths, and commercially useful communication.",
      studyPlan: [
        "Read commitments, tolerances, terms, and change windows first.",
        "Track requested, confirmed, shipped, received, blocked, and closed.",
        "Escalate with OTIF and root-cause evidence plus alternatives."
      ],
      project:
        "Complete the scenario as a supplier call agenda, scorecard, and shortage escalation; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "Supplier Relationship Management",
          provider: "CIPS",
          url: "https://www.cips.org/knowledge/procurement-topics-and-skills/supplier-relationship-management",
          access: "Free",
          format: "Documentation",
          note: "Practical guidance for supplier performance, collaboration, and escalation.",
        },
        {
          title: "Incoterms Rules",
          provider: "International Chamber of Commerce",
          url: "https://iccwbo.org/business-solutions/incoterms-rules/",
          access: "Free",
          format: "Documentation",
          note: "Reference for responsibilities, costs, and risk transfer in international shipments.",
        },
        {
          title: "Procurement and Sourcing",
          provider: "Coursera / Rutgers University",
          url: "https://www.coursera.org/specializations/procurement-sourcing",
          access: "Free audit",
          format: "Course",
          note: "Optional structured learning for sourcing, negotiation, and supplier management.",
        },
      ],
      checkpoint:
        "The escalation distinguishes supplier, internal, and transport causes with next checkpoints.",
    },
    {
      id: "logistics-and-warehouse-flow",
      title: "Logistics and warehouse flow",
      outcome:
        "Coordinate physical flow from dock to customer while finding bottlenecks in receiving, storage, picking, packing, and transport.",
      studyPlan: [
        "Map physical and information flow with scan points and exception queues.",
        "Use timestamps to separate wait, travel, batching, handling, and carrier delay.",
        "Test a small layout or cutoff change with guardrails."
      ],
      project:
        "Complete the scenario as a bottleneck storyboard, slotting trial, and standard-work card; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "Warehousing and Distribution",
          provider: "MHI",
          url: "https://www.mhi.org/fundamentals/warehousing",
          access: "Free",
          format: "Documentation",
          note: "Accessible overview of warehouse activities, technologies, and operating measures.",
        },
        {
          title: "Supply Chain Analytics",
          provider: "Coursera / Rutgers University",
          url: "https://www.coursera.org/specializations/supply-chain-analytics",
          access: "Free audit",
          format: "Course",
          note: "Optional practice connecting operational data to inventory, logistics, and network decisions.",
        },
        {
          title: "Freight Management",
          provider: "U.S. Department of Transportation",
          url: "https://www.transportation.gov/freight",
          access: "Free",
          format: "Documentation",
          note: "Public reference for freight systems, constraints, and transportation context.",
        },
      ],
      checkpoint:
        "The experiment targets measured delay and reports service or safety side effects.",
    },
    {
      id: "quality-traceability",
      title: "Quality and traceability",
      outcome:
        "Maintain product and shipment traceability while coordinating nonconformances, recalls, corrective actions, and compliance evidence.",
      studyPlan: [
        "Define lot, batch, expiry, location, supplier, and shipment links.",
        "Practice quarantine, notification, reconciliation, and evidence retention.",
        "Close CAPA only after an effectiveness check."
      ],
      project:
        "Complete the scenario as a trace table, containment notice, and CAPA review; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "Food Traceability Final Rule",
          provider: "U.S. Food and Drug Administration",
          url: "https://www.fda.gov/food",
          access: "Free",
          format: "Documentation",
          note: "Concrete example of traceability data, records, and supply-chain responsibilities.",
        },
        {
          title: "ISO 9001 Quality Management",
          provider: "ISO",
          url: "https://www.iso.org/iso-9001-quality-management.html",
          access: "Free",
          format: "Documentation",
          note: "Overview of quality-system principles, documented information, and continual improvement.",
        },
        {
          title: "Corrective and Preventive Action",
          provider: "U.S. FDA",
          url: "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations",
          access: "Free",
          format: "Documentation",
          note: "Official reference for CAPA thinking, evidence, and effectiveness checks.",
        },
      ],
      checkpoint:
        "The recall accounts for every affected unit and the CAPA has an effectiveness measure.",
    },
  ],
};
