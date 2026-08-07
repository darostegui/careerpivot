import type { RoadmapContent } from "../types";

export const renewableEnergyTechnicianContent: RoadmapContent = {
  roleSlug: "renewable-energy-technician",
  roleTitle: "Renewable Energy Technician",
  topics: [
    {
      id: "safety-and-work-practices",
      title: "Safety and work practices",
      outcome:
        "Recognize electrical, fall, arc-flash, battery, heat, weather, and job-site hazards; select controls and stop work when conditions exceed training or authorization.",
      studyPlan: [
        "Learn the hierarchy of controls, job hazard analysis, lockout/tagout concepts, PPE selection, emergency response, and incident reporting.",
        "Study the specific hazards of rooftops, ladders, energized conductors, batteries, confined areas, weather, and lifting equipment.",
        "Practice a pre-task briefing that identifies boundaries, a qualified supervisor, test-before-touch expectations, rescue planning, and stop-work triggers.",
        "Review manufacturer instructions, local rules, and employer procedures; distinguish classroom knowledge from authorization to perform live or elevated work.",
      ],
      project:
        "Create a simulated job hazard analysis for a ground-mounted PV inspection using photos or a training panel: mark hazards, controls, PPE, exclusion zones, weather limits, emergency contacts, and stop-work decisions. Do not access a roof, open energized equipment, or work near live circuits.",
      resources: [
        {
          title: "Electrical Safety",
          provider: "OSHA",
          url: "https://www.osha.gov/electrical",
          access: "Free",
          format: "Documentation",
          note: "Use the standards and hazard topics as a safety vocabulary; employer training and local requirements still govern work.",
        },
        {
          title: "Electrical Safety in the Workplace",
          provider: "NFPA",
          url: "https://www.nfpa.org/education-and-research",
          access: "Free",
          format: "Documentation",
          note: "Review public electrical-safety guidance and treat NFPA training or credentials as optional, not a license.",
        },
        {
          title: "Fall Protection",
          provider: "OSHA",
          url: "https://www.osha.gov/fall-protection",
          access: "Free",
          format: "Documentation",
          note: "Reference rooftop and elevated-work hazards before any supervised site activity.",
        },
      ],
      checkpoint:
        "A supervisor can approve your hazard analysis because it names at least eight hazards, a control for each, PPE, emergency actions, and three explicit stop-work triggers.",
    },
    {
      id: "electrical-fundamentals",
      title: "Electrical fundamentals",
      outcome:
        "Use voltage, current, resistance, power, energy, series/parallel, AC/DC, polarity, grounding, and basic measurement concepts to explain renewable-energy circuits safely.",
      studyPlan: [
        "Calculate Ohm's law, power, energy, and efficiency; identify units and distinguish nominal, open-circuit, and operating values.",
        "Compare series and parallel circuits, DC and AC behavior, polarity, overcurrent protection, bonding, grounding, and basic conductor sizing concepts.",
        "Read simple schematics and name meter settings, lead placement, measurement limits, and why a circuit must be de-energized unless a qualified person directs otherwise.",
        "Check calculations against a simulation or low-voltage kit, documenting assumptions, expected readings, and uncertainty.",
      ],
      project:
        "Build and document a battery-powered, current-limited low-voltage circuit or use a circuit simulator to compare series and parallel loads. Measure only within the kit's safe limits, never household mains, and have an instructor review connections.",
      resources: [
        {
          title: "Physics: Electrical Circuits",
          provider: "Khan Academy",
          url: "https://www.khanacademy.org/science/physics/circuits-topic",
          access: "Free",
          format: "Course",
          note: "Practice voltage, current, resistance, power, and circuit reasoning.",
        },
        {
          title: "Circuit Construction Kit: DC",
          provider: "PhET Interactive Simulations",
          url: "https://phet.colorado.edu/en/simulations/circuit-construction-kit-dc",
          access: "Free",
          format: "Practice",
          note: "Use the simulator to test circuit behavior without exposure to hazardous voltage.",
        },
        {
          title: "Electrical Measuring Instruments",
          provider: "Fluke",
          url: "https://www.fluke.com/en-us/learn/blog/electrical/how-to-use-a-multimeter",
          access: "Free",
          format: "Documentation",
          note: "Learn meter terminology and safe setup; follow the instrument manual and supervisor direction.",
        },
      ],
      checkpoint:
        "Given five low-voltage circuit scenarios, you calculate expected voltage/current/power within 5%, draw correct series/parallel diagrams, and explain a safe measurement setup.",
    },
    {
      id: "renewable-system-components",
      title: "Renewable-system components",
      outcome:
        "Explain how PV modules, inverters, charge controllers, batteries, racking, disconnects, monitoring, and optional wind or solar-thermal components work together.",
      studyPlan: [
        "Trace energy from resource to load and grid: generation, conversion, protection, storage, metering, monitoring, and shutdown paths.",
        "Compare string, microinverter, and hybrid architectures; identify nameplate ratings, compatibility constraints, efficiency losses, and environmental limits.",
        "Study battery chemistries, battery-management systems, ventilation, thermal risk, state of charge, and manufacturer handling requirements.",
        "Read one-line diagrams, datasheets, manuals, and commissioning requirements, then flag missing information before installation or service.",
      ],
      project:
        "Create a simulated design for a small off-grid cabin using manufacturer-neutral components: produce a one-line diagram, load estimate, component list, energy-loss assumptions, and a safe shutdown sequence. Do not connect hardware or claim code compliance.",
      resources: [
        {
          title: "Solar Photovoltaic Technology Basics",
          provider: "U.S. Department of Energy",
          url: "https://pvpmc.sandia.gov/",
          access: "Free",
          format: "Documentation",
          note: "Understand PV operation, system choices, and factors affecting output.",
        },
        {
          title: "Renewable Energy",
          provider: "U.S. Department of Energy",
          url: "https://pvpmc.sandia.gov/",
          access: "Free",
          format: "Documentation",
          note: "Compare solar, wind, geothermal, and other renewable technologies.",
        },
        {
          title: "PVWatts Calculator",
          provider: "National Renewable Energy Laboratory",
          url: "https://pvpmc.sandia.gov/",
          access: "Free",
          format: "Practice",
          note: "Model expected PV production and state assumptions; results are estimates, not a permit or guarantee.",
        },
      ],
      checkpoint:
        "A reviewer can follow your one-line diagram end to end, match every component to a stated function and rating, and reproduce your estimated daily energy balance.",
    },
    {
      id: "installation-and-inspection",
      title: "Installation and inspection",
      outcome:
        "Support a qualified installation team by interpreting plans, sequencing work, checking workmanship, and documenting inspection evidence without presenting training as licensure.",
      studyPlan: [
        "Learn plan sets, site surveys, orientation and shading, structural attachment concepts, conduit and cable routing, labeling, clearances, and equipment access.",
        "Study an installation sequence from material receiving through mounting, wiring, protection, commissioning, and handover.",
        "Build inspection checklists for visual condition, torque records, polarity, labeling, weather sealing, grounding/bonding evidence, and manufacturer requirements.",
        "Compare observations with approved drawings, applicable code, authority requirements, and the qualified person's sign-off process; record deviations instead of improvising.",
      ],
      project:
        "Use a tabletop training array, mock roof, or annotated installation photos to perform a simulated receiving and inspection walkdown. Record 12 observations, classify each as pass/deficiency/not verifiable, and propose escalation to a qualified lead.",
      resources: [
        {
          title: "Solar Permitting and Inspection",
          provider: "U.S. Department of Energy",
          url: "https://www.nabcep.org/",
          access: "Free",
          format: "Documentation",
          note: "Understand why permitting, inspection, documentation, and local authority requirements matter.",
        },
        {
          title: "Solar Photovoltaic System Design Basics",
          provider: "National Renewable Energy Laboratory",
          url: "https://pvpmc.sandia.gov/",
          access: "Free",
          format: "Documentation",
          note: "Use as a technical reference for design considerations and terminology.",
        },
        {
          title: "PV Installation Professional",
          provider: "NABCEP",
          url: "https://nabcep.org/certifications/pv-installation-professional/",
          access: "Paid exam",
          format: "Certification",
          note: "Optional professional credential; it does not replace local licensing, employer authorization, or supervised experience.",
        },
      ],
      checkpoint:
        "Your inspection packet includes a marked-up plan, 12 traceable observations, photo or drawing references, deficiency severity, corrective action, and qualified-review sign-off fields.",
    },
    {
      id: "maintenance-and-troubleshooting",
      title: "Maintenance and troubleshooting",
      outcome:
        "Use a safe, evidence-led workflow to identify likely causes of underperformance, alarms, and component wear while preserving equipment and escalating hazardous faults.",
      studyPlan: [
        "Learn preventive-maintenance intervals, visual checks, cleaning limits, vegetation and weather effects, thermal concerns, monitoring data, and warranty boundaries.",
        "Create a symptom-to-hypothesis workflow that starts with records and observation before any authorized test or isolation step.",
        "Practice comparing expected production with irradiance, temperature, historical baselines, inverter events, strings, and monitoring gaps.",
        "Document findings, uncertainty, temporary controls, parts, repeat tests, and escalation; never bypass protection or open energized equipment without qualified authorization.",
      ],
      project:
        "Analyze a supplied synthetic monitoring dataset with inverter alarms and weather data. Produce a ranked fault hypothesis, evidence table, safe next-step plan, customer impact statement, and escalation note—no live troubleshooting required.",
      resources: [
        {
          title: "Best Practices in Photovoltaic System Operations and Maintenance",
          provider: "National Renewable Energy Laboratory",
          url: "https://pvpmc.sandia.gov/",
          access: "Free",
          format: "Documentation",
          note: "Reference preventive maintenance, performance, safety, and O&M program practices.",
        },
        {
          title: "PV Performance Modeling Collaborative",
          provider: "National Renewable Energy Laboratory",
          url: "https://pvpmc.sandia.gov/",
          access: "Free",
          format: "Documentation",
          note: "Learn how weather and system factors affect expected PV performance.",
        },
        {
          title: "Solar Photovoltaic Panels",
          provider: "Energy.gov",
          url: "https://pvpmc.sandia.gov/",
          access: "Free",
          format: "Documentation",
          note: "Use the system basics to frame customer-safe observations; escalate equipment faults to qualified service personnel.",
        },
      ],
      checkpoint:
        "For three simulated faults, you produce a reproducible evidence trail, rank hypotheses, identify what is safe to observe, specify an escalation boundary, and choose a measurable verification result.",
    },
    {
      id: "documentation-and-customer-service",
      title: "Professional and customer documentation",
      outcome:
        "Communicate technical work clearly and honestly through service records, commissioning evidence, customer explanations, and handover documents that support safe future operation.",
      studyPlan: [
        "Learn what belongs in a work order, inspection record, commissioning sheet, as-built package, photo log, parts record, and maintenance history.",
        "Practice translating production, alarms, limitations, warranties, and next steps into plain language without promising savings or performance you cannot verify.",
        "Use consistent identifiers, timestamps, units, revision history, privacy-aware photos, and source references so another technician can reproduce the record.",
        "Role-play a customer handover: explain normal indicators, emergency shutdown instructions from the approved manual, service boundaries, and when to contact the provider or emergency services.",
      ],
      project:
        "Assemble a fictional customer handover pack from supplied system data: one-page plain-language summary, annotated equipment map, commissioning checklist, maintenance schedule, issue log, and escalation script. Use no real customer information.",
      resources: [
        {
          title: "Solar Consumer Guide",
          provider: "U.S. Department of Energy",
          url: "https://pvpmc.sandia.gov/",
          access: "Free",
          format: "Documentation",
          note: "Use consumer-facing language to explain system expectations, ownership, and questions to ask providers.",
        },
        {
          title: "PV System Documentation",
          provider: "International Renewable Energy Agency",
          url: "https://www.irena.org/Publications/2017/Jun/End-of-life-management-Solar-Photovoltaic-Panels",
          access: "Free",
          format: "Documentation",
          note: "Use lifecycle context to support accurate maintenance and end-of-life conversations.",
        },
        {
          title: "Technical Writing",
          provider: "Purdue Online Writing Lab",
          url: "https://owl.purdue.edu/owl/subject_specific_writing/professional_technical_writing/index.html",
          access: "Free",
          format: "Documentation",
          note: "Practice scannable, audience-aware technical explanations and records.",
        },
      ],
      checkpoint:
        "A reviewer unfamiliar with the system can use your handover pack to identify equipment, understand normal operation, find maintenance dates, and know exactly when and how to escalate a concern.",
    },
  ],
};
