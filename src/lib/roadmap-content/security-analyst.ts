import type { RoadmapContent } from "./types";

export const securityAnalystContent: RoadmapContent = {
  roleSlug: "security-analyst",
  roleTitle: "Security Analyst",
  topics: [
    {
      id: "networking",
      title: "Networking",
      outcome:
        "Explain how hosts and services communicate, then use packet, flow, and DNS evidence to recognize suspicious behavior without disrupting production systems.",
      studyPlan: [
        "Review the OSI and TCP/IP models, addressing, routing, switching, ports, protocols, and common service patterns.",
        "Practice reading DNS, HTTP(S), SSH, DHCP, and TLS connection metadata in a small, isolated lab.",
        "Learn the purpose and limitations of packet captures, NetFlow-style records, firewalls, proxies, and network sensors.",
        "Build a baseline of normal traffic for a sample environment and document anomalies with timestamps and evidence.",
      ],
      project:
        "Create a defensive network-observation lab with two or three local hosts, capture normal traffic, and write a short analyst report comparing expected and unusual connections.",
      resources: [
        {
          title: "Introduction to Networking",
          provider: "Cisco Networking Academy",
          url: "https://www.netacad.com/courses/networking-basics",
          access: "Free",
          format: "Course",
          note: "Foundational networking concepts and terminology.",
        },
        {
          title: "Wireshark User's Guide",
          provider: "Wireshark",
          url: "https://www.wireshark.org/docs/wsug_html_chunked/",
          access: "Free",
          format: "Documentation",
          note: "Use display filters and packet views for lawful, defensive analysis.",
        },
        {
          title: "Network Fundamentals",
          provider: "CompTIA",
          url: "https://www.comptia.org/certifications/network",
          access: "Paid exam",
          format: "Certification",
          note: "Optional Network+ certification path.",
        },
      ],
      checkpoint:
        "To prove mastery, your portfolio project must provide concrete evidence for this skill. A hiring manager evaluating your work will check if: Annotated packet or flow evidence plus a one-page baseline-and-anomaly report that identifies protocols, endpoints, timestamps, and confidence levels. Your artifact must explicitly demonstrate this to show you can apply the skill to real-world scenarios rather than just theoretical exercises.",
    },
    {
      id: "operating-systems",
      title: "Operating systems",
      outcome:
        "Investigate Windows and Linux hosts using processes, users, files, services, permissions, and system logs while preserving reliable evidence.",
      studyPlan: [
        "Learn Windows and Linux process models, users and groups, filesystems, permissions, services, and scheduled task concepts.",
        "Practice safe host triage: record system state, identify persistence-relevant configuration, and avoid changing evidence.",
        "Map common operating-system events to authentication, process, file, service, and configuration activity.",
        "Compare expected administrative behavior with suspicious changes using a repeatable checklist.",
      ],
      project:
        "Build a disposable Windows-and-Linux triage lab, generate benign administrative activity, and produce a host investigation worksheet with evidence, hypotheses, and next steps.",
      resources: [
        {
          title: "Windows Security Auditing",
          provider: "Microsoft Learn",
          url: "https://learn.microsoft.com/en-us/windows/security/threat-protection/auditing/basic-security-audit-policy-settings",
          access: "Free",
          format: "Documentation",
          note: "Understand Windows audit policy and security events.",
        },
        {
          title: "Linux Journey",
          provider: "Linux Journey",
          url: "https://linuxjourney.com/",
          access: "Free",
          format: "Course",
          note: "Accessible Linux fundamentals practice.",
        },
        {
          title: "CompTIA Security+",
          provider: "CompTIA",
          url: "https://www.comptia.org/certifications/security",
          access: "Paid exam",
          format: "Certification",
          note: "Optional broad security foundation certification.",
        },
      ],
      checkpoint:
        "To prove mastery, your portfolio project must provide concrete evidence for this skill. A hiring manager evaluating your work will check if: Completed host-triage worksheet containing an evidence timeline, relevant processes and accounts, file or service observations, and explicitly stated uncertainty. Your artifact must explicitly demonstrate this to show you can apply the skill to real-world scenarios rather than just theoretical exercises.",
    },
    {
      id: "identity",
      title: "Identity",
      outcome:
        "Assess authentication and authorization activity, explain least privilege, and identify account-risk signals across workforce and service identities.",
      studyPlan: [
        "Learn identity lifecycle management, authentication factors, federation, directory services, roles, groups, and service accounts.",
        "Study least privilege, separation of duties, privileged access workflows, and access reviews.",
        "Read sign-in, token, group-membership, password, and administrative audit events.",
        "Practice distinguishing user error, expected automation, and potentially compromised-account indicators.",
      ],
      project:
        "Design a small identity-audit workbook for a fictional organization that reviews joiner/mover/leaver records, privileged groups, sign-in anomalies, and remediation owners.",
      resources: [
        {
          title: "Identity and Access Management",
          provider: "Microsoft Learn",
          url: "https://learn.microsoft.com/en-us/training/",
          access: "Free",
          format: "Course",
          note: "Practical identity and access management fundamentals.",
        },
        {
          title: "NIST Digital Identity Guidelines",
          provider: "NIST",
          url: "https://pages.nist.gov/800-63-4/",
          access: "Free",
          format: "Documentation",
          note: "Authoritative guidance for digital identity assurance.",
        },
        {
          title: "SC-900: Security, Compliance, and Identity Fundamentals",
          provider: "Microsoft",
          url: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/",
          access: "Paid exam",
          format: "Certification",
          note: "Optional entry-level identity and security certification.",
        },
      ],
      checkpoint:
        "To prove mastery, your portfolio project must provide concrete evidence for this skill. A hiring manager evaluating your work will check if: An access-review report with a small risk-ranked findings table, supporting audit events, least-privilege recommendations, and owner/date fields. Your artifact must explicitly demonstrate this to show you can apply the skill to real-world scenarios rather than just theoretical exercises.",
    },
    {
      id: "threat-modeling",
      title: "Threat modeling",
      outcome:
        "Turn system context into prioritized, testable security risks and select proportionate mitigations using a repeatable defensive method.",
      studyPlan: [
        "Define assets, trust boundaries, users, data flows, assumptions, and security objectives for a simple application.",
        "Learn STRIDE or a comparable threat-modeling approach and distinguish threats from vulnerabilities and controls.",
        "Rank risks using likelihood, impact, exposure, and evidence rather than alarming language.",
        "Convert findings into requirements, monitoring ideas, owners, and verification criteria.",
      ],
      project:
        "Threat-model a fictional customer portal, draw its data-flow diagram, record risks in a structured register, and propose mitigations that can be verified in design review.",
      resources: [
        {
          title: "Threat Modeling Tool",
          provider: "Microsoft",
          url: "https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool",
          access: "Free",
          format: "Practice",
          note: "Guided tool and methodology for defensive design analysis.",
        },
        {
          title: "Threat Modeling Manifesto",
          provider: "Threat Modeling Manifesto",
          url: "https://www.threatmodelingmanifesto.org/",
          access: "Free",
          format: "Documentation",
          note: "Principles for collaborative, risk-focused threat modeling.",
        },
        {
          title: "Application Security Knowledge Framework",
          provider: "OWASP",
          url: "https://owasp.org/www-project-top-ten/",
          access: "Free",
          format: "Practice",
          note: "Security requirements and verification knowledge for applications.",
        },
      ],
      checkpoint:
        "To prove mastery, your portfolio project must provide concrete evidence for this skill. A hiring manager evaluating your work will check if: Data-flow diagram and threat register with at least five risks, rationale for prioritization, mapped mitigations, and verification questions. Your artifact must explicitly demonstrate this to show you can apply the skill to real-world scenarios rather than just theoretical exercises.",
    },
    {
      id: "log-analysis",
      title: "Log analysis",
      outcome:
        "Normalize and correlate security-relevant logs into clear timelines, useful detections, and evidence-backed analyst conclusions.",
      studyPlan: [
        "Identify useful fields, timestamps, severity, event types, source context, and retention requirements in common logs.",
        "Practice filtering, aggregation, joins, and time-window correlation with a small synthetic dataset.",
        "Learn the difference between an event, an alert, a finding, and an incident; document detection assumptions and gaps.",
        "Tune a small set of high-signal detections and measure false positives using benign test activity.",
      ],
      project:
        "Ingest synthetic authentication, endpoint, and network logs into a local analysis tool, create three defensive detections, and write an investigation timeline for a simulated account anomaly.",
      resources: [
        {
          title: "Introduction to Cybersecurity Log Analysis",
          provider: "CyberDefenders",
          url: "https://cyberdefenders.org/blueteam-ctf-challenges/",
          access: "Free",
          format: "Practice",
          note: "Defensive investigation exercises using provided challenge data.",
        },
        {
          title: "Sigma Rule Specification",
          provider: "SigmaHQ",
          url: "https://sigmahq.io/docs/basics/rules.html",
          access: "Free",
          format: "Documentation",
          note: "Portable, readable format for defensive log detections.",
        },
        {
          title: "Splunk Fundamentals 1",
          provider: "Splunk",
          url: "https://www.splunk.com/en_us/training/free-courses/splunk-fundamentals-1.html",
          access: "Free",
          format: "Course",
          note: "Optional free introduction to search and event analysis.",
        },
      ],
      checkpoint:
        "To prove mastery, your portfolio project must provide concrete evidence for this skill. A hiring manager evaluating your work will check if: A reproducible analysis notebook or query set, three detection examples, a false-positive note, and a timestamped incident timeline. Your artifact must explicitly demonstrate this to show you can apply the skill to real-world scenarios rather than just theoretical exercises.",
    },
    {
      id: "incident-response",
      title: "Incident response",
      outcome:
        "Triage, contain, investigate, recover from, and learn from security incidents using documented roles, evidence handling, and business-aware communication.",
      studyPlan: [
        "Learn incident categories, severity, roles, escalation paths, communications, and decision authority.",
        "Practice a tabletop from alert validation through scoping, containment, recovery, and lessons learned.",
        "Study evidence preservation, chain of custody, timelines, and the distinction between facts, assumptions, and hypotheses.",
        "Write concise stakeholder updates and a post-incident review with measurable corrective actions.",
      ],
      project:
        "Run a tabletop for a simulated suspicious sign-in and data-access alert, producing an incident record, decision log, stakeholder updates, and an improvement backlog.",
      resources: [
        {
          title: "Computer Security Incident Handling Guide",
          provider: "NIST",
          url: "https://csrc.nist.gov/pubs/sp/800/61/r3/final",
          access: "Free",
          format: "Documentation",
          note: "Foundational incident-response guidance and lifecycle.",
        },
        {
          title: "Incident Response",
          provider: "CISA",
          url: "https://www.cisa.gov/topics/cyber-threats-and-advisories",
          access: "Free",
          format: "Documentation",
          note: "Public-sector guidance, playbooks, and reporting resources.",
        },
        {
          title: "GCIH Certification",
          provider: "GIAC",
          url: "https://www.giac.org/certifications/certified-incident-handler-gcih/",
          access: "Paid exam",
          format: "Certification",
          note: "Optional intermediate incident-handler certification.",
        },
      ],
      checkpoint:
        "To prove mastery, your portfolio project must provide concrete evidence for this skill. A hiring manager evaluating your work will check if: A complete tabletop packet containing severity rationale, timeline, evidence list, containment decisions, communications, recovery checks, and lessons learned. Your artifact must explicitly demonstrate this to show you can apply the skill to real-world scenarios rather than just theoretical exercises.",
    },
    {
      id: "security-controls",
      title: "Security controls",
      outcome:
        "Evaluate preventive, detective, and corrective controls against risk, verify their operation, and communicate gaps without overstating assurance.",
      studyPlan: [
        "Learn control objectives, control owners, implementation evidence, compensating controls, and the difference between design and operating effectiveness.",
        "Map common controls for access, endpoint protection, backups, vulnerability management, logging, change management, and incident response.",
        "Practice writing test procedures with scope, sample, evidence request, expected result, and exception handling.",
        "Prioritize remediation by risk, dependency, feasibility, and residual exposure, then define follow-up measurements.",
      ],
      project:
        "Create a lightweight control-assessment workbook for a fictional SaaS team, test six controls using supplied evidence, and present a risk-ranked remediation plan.",
      resources: [
        {
          title: "Cybersecurity Framework 2.0",
          provider: "NIST",
          url: "https://www.nist.gov/cyberframework",
          access: "Free",
          format: "Documentation",
          note: "Risk-management outcomes for organizing and communicating controls.",
        },
        {
          title: "CIS Critical Security Controls",
          provider: "Center for Internet Security",
          url: "https://www.cisecurity.org/controls",
          access: "Free",
          format: "Documentation",
          note: "Prioritized safeguards and implementation guidance.",
        },
        {
          title: "Security+ Certification",
          provider: "CompTIA",
          url: "https://www.comptia.org/certifications/security",
          access: "Paid exam",
          format: "Certification",
          note: "Optional certification covering controls and security operations.",
        },
      ],
      checkpoint:
        "To prove mastery, your portfolio project must provide concrete evidence for this skill. A hiring manager evaluating your work will check if: Control-assessment workbook with six test procedures, evidence references, pass/exception decisions, residual-risk statements, and accountable remediation owners. Your artifact must explicitly demonstrate this to show you can apply the skill to real-world scenarios rather than just theoretical exercises.",
    },
  ],
};
