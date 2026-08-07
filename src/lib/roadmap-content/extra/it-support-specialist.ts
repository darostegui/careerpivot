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
        "Learn incident, request, problem, impact, urgency, priority, SLA, escalation, workaround, and root-cause terminology.",
        "Turn vague reports into a timeline with device, account, location, recent change, exact error, scope, and business impact.",
        "Use a layered workflow from physical connection through identity, endpoint, network, application, and service dependencies.",
        "Write a concise resolution note that records commands, evidence, user confirmation, and a prevention or knowledge-base update.",
      ],
      project:
        "Create a six-ticket troubleshooting portfolio using safe virtual machines or mock cases: include intake questions, hypotheses, evidence, resolution, user-facing updates, and escalation decisions.",
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
        "A reviewer can follow each ticket from symptom to verified resolution, and you can explain why one case was escalated instead of guessed at.",
    },
    {
      id: "endpoints-and-operating-systems",
      title: "Endpoint and operating-system administration",
      outcome:
        "Provision, secure, diagnose, and recover Windows and Linux endpoints using repeatable, least-privilege procedures.",
      studyPlan: [
        "Set up disposable Windows and Linux VMs; learn users, groups, services, processes, filesystems, updates, logs, and recovery options.",
        "Practice PowerShell and shell commands for inventory, process inspection, disk/network checks, permissions, and service control.",
        "Apply baseline configuration, patching, screen lock, encryption awareness, malware-response boundaries, and backup verification.",
        "Break a service, fill a disk, remove a permission, or misconfigure a startup item; restore it and preserve diagnostic output.",
      ],
      project:
        "Build an endpoint onboarding and recovery lab: produce a checklist, inventory script, baseline report, one safe failure injection, and a recovery record for both operating systems.",
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
        "A fresh VM can be provisioned from your checklist, your script produces a readable inventory, and your failure drill includes before/after evidence without risking a real device.",
    },
    {
      id: "identity-and-access",
      title: "Identity, access, and productivity tools",
      outcome:
        "Resolve common account and access problems while respecting approval, least privilege, MFA, privacy, and audit requirements.",
      studyPlan: [
        "Learn directory users, groups, roles, authentication, authorization, MFA, SSO, password resets, provisioning, and deprovisioning.",
        "Map a joiner-mover-leaver workflow with approvals, ownership, evidence, and a clear offboarding deadline.",
        "Practice diagnosing lockouts, group membership, expired credentials, stale sessions, and application permission mismatches in a lab tenant or mock directory.",
        "Write user instructions that never request passwords or secrets and explain how to verify identity before sensitive changes.",
      ],
      project:
        "Design a least-privilege access workflow for a fictional company: include an access matrix, request form, approval trail, onboarding/offboarding checklist, and five safe troubleshooting cases.",
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
        "Your workflow rejects unapproved privilege changes, records an auditable owner and reason, and resolves the five cases without handling real credentials.",
    },
    {
      id: "network-and-device-support",
      title: "Network, printing, and device support",
      outcome:
        "Diagnose endpoint connectivity and peripheral issues across physical, link, IP, name-resolution, application, and policy layers.",
      studyPlan: [
        "Learn Ethernet/Wi-Fi basics, DHCP, DNS, gateways, VPN concepts, ports, print queues, drivers, and device enrollment.",
        "Use ipconfig/ifconfig, ping, tracert/traceroute, nslookup/dig, route, netstat/ss, and event logs to establish a baseline.",
        "Create an isolated lab with a router or simulator, a printer emulator or shared queue, and a documented support topology.",
        "Inject a wrong DNS server, expired lease, blocked port, bad driver, or queue failure; isolate the fault and verify the fix.",
      ],
      project:
        "Publish a device-support runbook with a topology diagram, command decision tree, printer or peripheral checklist, and evidence-backed resolutions for four injected lab faults.",
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
        "For each fault, your notes identify the failing layer, include command output or logs, and show a successful retest from the affected client.",
    },
    {
      id: "automation-and-knowledge",
      title: "Automation, documentation, and security",
      outcome:
        "Reduce repetitive support work with safe scripts and knowledge articles that are testable, reversible, accessible, and security-conscious.",
      studyPlan: [
        "Identify repetitive, low-risk tasks and define inputs, outputs, permissions, logging, dry-run behavior, and rollback before scripting.",
        "Write a small PowerShell or Python tool for inventory, disk checks, or log collection using validation and clear error handling.",
        "Test it on disposable endpoints with normal, missing, and malformed inputs; redact secrets and minimize collected data.",
        "Turn the result into a knowledge article with prerequisites, screenshots or sample output, escalation boundaries, and a review date.",
      ],
      project:
        "Create a signed-off support utility that gathers non-sensitive diagnostics and a companion article; include unit or fixture tests, sample redacted output, and a rollback or uninstall procedure.",
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
        "A teammate can run the tool from your article, inspect its redacted output, reproduce its tests, and understand exactly when not to use it.",
    },
  ],
};
