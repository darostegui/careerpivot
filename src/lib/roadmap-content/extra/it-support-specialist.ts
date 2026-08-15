import type { RoadmapContent } from "../types";

export const itSupportSpecialistContent: RoadmapContent = {
  roleSlug: "it-support-specialist",
  roleTitle: "IT Support Specialist",
  topics: [
    {
      id: "support-fundamentals",
      title: "Support practice and troubleshooting",
      outcome:
        "Triage user-reported issues, ask efficient questions, reproduce safely, communicate clearly, and close tickets with evidence.",
      studyPlan: [
        "Turn vague reports into impact, scope, timeline, change, and reproduction.",
        "Test hypotheses from endpoint through identity, network, and application.",
        "Write user-readable resolution and escalation notes."
      ],
      project:
        "Complete the scenario as a intake transcripts, decision trees, and closure notes; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "ITIL 4 Foundation overview",
          provider: "PeopleCert",
          url: "https://www.peoplecert.org/",
          access: "Free",
          format: "Documentation",
          note: "Use the service-management vocabulary; the certification is optional.",
        },
        {
          title: "CompTIA Troubleshooting Methodology",
          provider: "CompTIA",
          url: "https://www.comptia.org/blog/troubleshooting-methodology",
          access: "Free",
          format: "Documentation",
          note: "Practice the identify, theory, test, plan, verify, and document sequence.",
        },
        {
          title: "Microsoft Learn troubleshooting",
          provider: "Microsoft",
          url: "https://learn.microsoft.com/en-us/troubleshoot/",
          access: "Free",
          format: "Documentation",
          note: "Compare platform-specific diagnostic workflows and evidence collection.",
        },
      ],
      checkpoint:
        "Each ticket ends with user confirmation or a justified escalation and never requests a secret.",
    },
    {
      id: "endpoints-and-operating-systems",
      title: "Endpoint and operating-system administration",
      outcome:
        "Provision, secure, diagnose, and recover Windows and Linux endpoints using repeatable, least-privilege procedures.",
      studyPlan: [
        "Provision disposable Windows and Linux baselines.",
        "Break one service, permission, startup item, or disk condition.",
        "Compare recovery by data risk, downtime, and reversibility."
      ],
      project:
        "Complete the scenario as a provisioning card, inventory output, and recovery report; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "Windows client troubleshooting",
          provider: "Microsoft Learn",
          url: "https://learn.microsoft.com/en-us/troubleshoot/windows-client/",
          access: "Free",
          format: "Documentation",
          note: "Use the event, networking, update, and startup troubleshooting articles.",
        },
        {
          title: "Linux Documentation",
          provider: "The Linux Kernel Archives",
          url: "https://www.kernel.org/doc/html/latest/",
          access: "Free",
          format: "Documentation",
          note: "Reference kernel, filesystem, and administrator-facing concepts while practicing in a VM.",
        },
        {
          title: "PowerShell documentation",
          provider: "Microsoft",
          url: "https://learn.microsoft.com/en-us/powershell/",
          access: "Free",
          format: "Course",
          note: "Learn command discovery, objects, remoting concepts, and safe scripting.",
        },
      ],
      checkpoint:
        "A technician can rebuild the lab and recover each fault without losing evidence.",
    },
    {
      id: "identity-and-access",
      title: "Identity, access, and productivity tools",
      outcome:
        "Resolve common account and access problems while respecting approval, least privilege, MFA, privacy, and audit requirements.",
      studyPlan: [
        "Map joiner, mover, leaver, reset, and exception approvals.",
        "Diagnose lockout, stale session, group, MFA, and role symptoms.",
        "Practice refusing unsafe requests and recording identity checks."
      ],
      project:
        "Complete the scenario as a access decision cards and anonymized case resolutions; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "Microsoft Entra fundamentals",
          provider: "Microsoft Learn",
          url: "https://learn.microsoft.com/en-us/training/",
          access: "Free",
          format: "Course",
          note: "Study identity, authentication, authorization, and governance concepts.",
        },
        {
          title: "NIST Digital Identity Guidelines",
          provider: "NIST",
          url: "https://pages.nist.gov/800-63-3/",
          access: "Free",
          format: "Documentation",
          note: "Use the assurance and authenticator guidance to frame safe support decisions.",
        },
        {
          title: "OWASP Authentication Cheat Sheet",
          provider: "OWASP",
          url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html",
          access: "Free",
          format: "Documentation",
          note: "Reference secure reset, session, and authentication support practices.",
        },
      ],
      checkpoint:
        "The case notes show identity verification, approval, least privilege, and a safe refusal where needed.",
    },
    {
      id: "network-and-device-support",
      title: "Network, printing, and device support",
      outcome:
        "Diagnose endpoint connectivity and peripheral issues across physical, link, IP, name-resolution, application, and policy layers.",
      studyPlan: [
        "Use a layer-by-layer decision tree for Wi-Fi, DNS, DHCP, VPN, print, and enrollment.",
        "Compare affected and known-good devices before changing shared settings.",
        "Retest from the user perspective and record support boundaries."
      ],
      project:
        "Complete the scenario as a field-support command cards and fault reports; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "Networking basics",
          provider: "Cisco Networking Academy",
          url: "https://www.netacad.com/courses/networking-basics",
          access: "Free",
          format: "Course",
          note: "Study addressing, protocols, and troubleshooting before touching shared equipment.",
        },
        {
          title: "Windows network troubleshooting",
          provider: "Microsoft Learn",
          url: "https://learn.microsoft.com/en-us/troubleshoot/",
          access: "Free",
          format: "Documentation",
          note: "Use the command and event-log guidance for endpoint diagnosis.",
        },
        {
          title: "CUPS documentation",
          provider: "OpenPrinting",
          url: "https://openprinting.github.io/cups/",
          access: "Free",
          format: "Documentation",
          note: "Run a local print-service lab and keep it off production networks.",
        },
      ],
      checkpoint:
        "Each fault report names the failing layer and verifies recovery from the user perspective.",
    },
    {
      id: "automation-and-knowledge",
      title: "Automation, documentation, and security",
      outcome:
        "Reduce repetitive support work with safe scripts and knowledge articles that are testable, reversible, accessible, and security-conscious.",
      studyPlan: [
        "Choose automation by risk and frequency.",
        "Test dry-run, redaction, malformed inputs, and rollback on disposable endpoints.",
        "Observe a colleague using the article and revise ambiguity."
      ],
      project:
        "Complete the scenario as a fixture tests, redacted sample output, and knowledge article; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "PowerShell scripting guide",
          provider: "Microsoft Learn",
          url: "https://learn.microsoft.com/en-us/powershell/scripting/overview",
          access: "Free",
          format: "Course",
          note: "Use parameter validation, structured output, and error handling in your utility.",
        },
        {
          title: "Python Tutorial",
          provider: "Python Software Foundation",
          url: "https://docs.python.org/3/tutorial/",
          access: "Free",
          format: "Course",
          note: "Choose Python if it better matches your support environment and automation goals.",
        },
        {
          title: "OWASP Logging Cheat Sheet",
          provider: "OWASP",
          url: "https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html",
          access: "Free",
          format: "Documentation",
          note: "Use the guidance to avoid logging passwords, tokens, or unnecessary personal data.",
        },
      ],
      checkpoint:
        "The utility is safe to run, redacts sensitive output, and states exactly when to escalate.",
    },
  ],
};
