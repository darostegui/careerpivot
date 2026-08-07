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
        "Learn item, location, calendar, lead-time, safety-stock, MOQ, and service-level fields; document the planning grain.",
        "Clean historical demand, identify seasonality and promotions, and compare a simple baseline forecast with planner judgment.",
        "Translate the forecast into net requirements using on-hand, scheduled receipts, open orders, and lead-time offsets.",
        "Run supply reviews with exceptions, constraints, scenario assumptions, owners, and a dated decision log.",
      ],
      project:
        "Build a 12-week replenishment plan for a fictional outdoor retailer with seasonal SKUs, supplier MOQs, container lead times, promotions, and store-level service targets.",
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
        "A documented planning workbook with item-level assumptions, forecast accuracy comparison, net requirements, exception flags, and a signed-off weekly plan.",
    },
    {
      id: "inventory-control",
      title: "Inventory control",
      outcome:
        "Set and monitor inventory policies that reduce stockouts and excess while preserving traceability for every adjustment.",
      studyPlan: [
        "Classify items by value, variability, criticality, shelf life, and demand pattern rather than treating every SKU identically.",
        "Calculate reorder points, safety stock, order-up-to levels, days of supply, turns, fill rate, and aged or obsolete inventory.",
        "Reconcile system on-hand to cycle counts, investigate variances, and record approved adjustments with reason codes.",
        "Review policy performance by segment and tune parameters using service, carrying-cost, expiry, and working-capital evidence.",
      ],
      project:
        "Design an ABC/XYZ inventory policy for a fictional medical-supplies distributor, including cycle-count schedule, expiry controls, reorder parameters, and an excess-stock action list.",
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
        "An inventory policy workbook with ABC/XYZ segmentation, formulas for reorder points and safety stock, count results, variance reasons, and a prioritized excess list.",
    },
    {
      id: "supplier-coordination",
      title: "Supplier coordination",
      outcome:
        "Manage supplier commitments, changes, and performance with clear evidence, escalation paths, and commercially useful communication.",
      studyPlan: [
        "Read purchase orders and supplier terms for quantities, dates, tolerances, Incoterms, quality requirements, and change windows.",
        "Maintain an order tracker that distinguishes requested, confirmed, shipped, received, blocked, and closed quantities.",
        "Measure on-time in-full, lead-time adherence, defect rate, responsiveness, and root causes using agreed definitions.",
        "Run a supplier review with corrective actions, capacity risks, backup options, and a record of commercial decisions.",
      ],
      project:
        "Coordinate a quarter of inbound orders for a fictional electronics assembler: create a PO tracker, supplier scorecard, shortage escalation, corrective-action request, and meeting minutes.",
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
        "A live-style supplier tracker and scorecard covering at least 30 orders, with evidence-backed OTIF, open escalations, root causes, owners, and next review dates.",
    },
    {
      id: "logistics-and-warehouse-flow",
      title: "Logistics and warehouse flow",
      outcome:
        "Coordinate physical flow from dock to customer while finding bottlenecks in receiving, storage, picking, packing, and transport.",
      studyPlan: [
        "Map inbound and outbound flows, locations, handling units, scan points, cutoffs, carrier handoffs, and exception queues.",
        "Calculate dock-to-stock, pick rate, order cycle time, fill rate, utilization, damage, and freight cost per unit.",
        "Analyze a day of timestamps to identify batching, congestion, travel, late waves, and carrier constraints.",
        "Propose a small layout, wave, slotting, or carrier experiment with safety, service, and cost guardrails.",
      ],
      project:
        "Analyze a fictional warehouse's two-week event log, redesign fast-mover slotting, compare carrier cutoffs, and produce a standard work sheet for receiving exceptions.",
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
        "An event-log analysis with baseline flow metrics, a bottleneck diagnosis, a tested layout or cutoff change, and a one-page standard-work artifact.",
    },
    {
      id: "quality-traceability",
      title: "Quality and traceability",
      outcome:
        "Maintain product and shipment traceability while coordinating nonconformances, recalls, corrective actions, and compliance evidence.",
      studyPlan: [
        "Define lot, serial, batch, expiry, supplier, location, and shipment relationships required to trace a unit backward and forward.",
        "Learn receiving inspection, quarantine, release, nonconformance, disposition, and change-control records.",
        "Practice containment and recall simulation using a clear affected-population query, notification list, and reconciliation count.",
        "Close corrective actions with root cause, evidence, effectiveness check, and controlled retention of records.",
      ],
      project:
        "Run a mock lot recall for a food distributor: build a traceability table, quarantine notice, customer contact list, reconciliation sheet, CAPA record, and after-action review.",
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
        "A completed recall drill that traces affected units end to end, reconciles quantities, documents notifications, and closes a CAPA with an effectiveness check.",
    },
  ],
};
