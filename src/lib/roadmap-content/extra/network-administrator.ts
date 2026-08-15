import type { RoadmapContent } from "../types";

export const networkAdministratorContent: RoadmapContent = {
  roleSlug: "network-administrator",
  roleTitle: "Network Administrator",
  topics: [
    {
      id: "networking-foundations",
      title: "Networking foundations",
      outcome:
        "Explain how Ethernet, IPv4/IPv6, ARP, DNS, DHCP, TCP, UDP, and routing cooperate to deliver an application request.",
      studyPlan: [
        "Trace a user task hop by hop and label expected evidence.",
        "Solve subnet and route exercises in an isolated topology.",
        "Capture successful and failed flows and identify the first broken hop."
      ],
      project:
        "Complete the scenario as a annotated packet captures and fault-isolation worksheet; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "Introduction to Networking",
          provider: "Cisco Networking Academy",
          url: "https://www.netacad.com/courses/networking-basics",
          access: "Free",
          format: "Course",
          note: "Use the modules on protocols, addressing, and basic troubleshooting.",
        },
        {
          title: "Wireshark User's Guide",
          provider: "Wireshark",
          url: "https://www.wireshark.org/docs/wsug_html/",
          access: "Free",
          format: "Documentation",
          note: "Follow the capture-filter and display-filter examples in your lab.",
        },
        {
          title: "Subnetting practice",
          provider: "Subnetting.net",
          url: "https://www.subnetting.net/",
          access: "Free",
          format: "Practice",
          note: "Generate timed CIDR exercises and record your error patterns.",
        },
      ],
      checkpoint:
        "The packet capture identifies the first broken hop and rules out later-layer guesses.",
    },
    {
      id: "switching-and-vlans",
      title: "Switching, VLANs, and wireless",
      outcome:
        "Segment a small LAN with VLANs and trunking, configure access controls, and diagnose common wired and wireless connectivity faults.",
      studyPlan: [
        "Design segmentation from trust and traffic needs.",
        "Verify MAC learning, trunks, STP, DHCP, and wireless isolation.",
        "Inject a tag or loop fault and preserve before-change evidence."
      ],
      project:
        "Complete the scenario as a topology board, verification transcript, and change ticket; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "Cisco Packet Tracer",
          provider: "Cisco Networking Academy",
          url: "https://www.netacad.com/courses/packet-tracer",
          access: "Free",
          format: "Practice",
          note: "Use the simulator for safe switch, router, and WLAN exercises without touching production gear.",
        },
        {
          title: "VLAN Configuration Guide",
          provider: "Cisco",
          url: "https://www.cisco.com/",
          access: "Free",
          format: "Documentation",
          note: "Reference access/trunk behavior and common verification commands.",
        },
        {
          title: "Wireless LAN fundamentals",
          provider: "Aruba",
          url: "https://www.arubanetworks.com/techdocs/central/latest/content/nms/apps/overview.htm",
          access: "Free",
          format: "Documentation",
          note: "Use the WLAN concepts as a vocabulary reference; keep experiments on your own network.",
        },
      ],
      checkpoint:
        "Verification output proves segmentation and the change ticket contains a reversible fix.",
    },
    {
      id: "routing-and-firewalls",
      title: "Routing, NAT, and firewalls",
      outcome:
        "Configure and verify static or dynamic routes, NAT, and least-privilege firewall rules while preserving a clear traffic path.",
      studyPlan: [
        "Draw expected paths and choose narrow routes and rules.",
        "Test asymmetric paths, NAT, stateful inspection, and denies.",
        "Practice rollback and explain emergency-rule risk."
      ],
      project:
        "Complete the scenario as a firewall test matrix and restored configuration; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "pfSense Documentation",
          provider: "Netgate",
          url: "https://docs.netgate.com/pfsense/en/latest/",
          access: "Free",
          format: "Documentation",
          note: "Use the routing, NAT, firewall, and logging sections in a virtual lab.",
        },
        {
          title: "Routing Information Protocol and static routing",
          provider: "Cisco",
          url: "https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13769-5.html",
          access: "Free",
          format: "Documentation",
          note: "Use it to contrast route selection and verification practices.",
        },
        {
          title: "nftables wiki",
          provider: "Netfilter",
          url: "https://wiki.nftables.org/",
          access: "Free",
          format: "Documentation",
          note: "Practice readable, stateful Linux firewall rules in a disposable VM.",
        },
      ],
      checkpoint:
        "The test matrix covers every path and restored configuration returns the lab to baseline.",
    },
    {
      id: "network-services",
      title: "Core network services",
      outcome:
        "Operate dependable DNS, DHCP, NTP, and IP address management for a small environment with reservations, delegation, and monitoring.",
      studyPlan: [
        "Define naming, leasing, addressing, and time requirements.",
        "Break one service and correlate client output with server logs.",
        "Document safe delegation, backup, and recovery."
      ],
      project:
        "Complete the scenario as a service catalog, recovery cards, and outage chronology; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "BIND 9 Administrator Reference Manual",
          provider: "Internet Systems Consortium",
          url: "https://bind9.readthedocs.io/en/latest/",
          access: "Free",
          format: "Documentation",
          note: "Use the configuration and troubleshooting chapters for an authoritative lab.",
        },
        {
          title: "dnsmasq documentation",
          provider: "Dnsmasq",
          url: "https://thekelleys.org.uk/dnsmasq/doc.html",
          access: "Free",
          format: "Documentation",
          note: "A lightweight option for safe DNS/DHCP experiments on a private interface.",
        },
        {
          title: "NTP Pool documentation",
          provider: "NTP Pool Project",
          url: "https://www.ntppool.org/en/use.html",
          access: "Free",
          format: "Documentation",
          note: "Understand client configuration and avoid creating unnecessary public NTP load.",
        },
      ],
      checkpoint:
        "A fresh client receives address, names, and time; the recovery card identifies the failing service.",
    },
    {
      id: "monitoring-and-incident-response",
      title: "Monitoring and network incident response",
      outcome:
        "Turn network symptoms into evidence, isolate scope, communicate impact, and document a reversible fix and prevention action.",
      studyPlan: [
        "Baseline loss, latency, utilization, DNS time, and availability.",
        "Isolate a route flap or saturated link by scope, path, and layer.",
        "Communicate impact while preserving timestamps and evidence."
      ],
      project:
        "Complete the scenario as a incident timeline, stakeholder updates, and evidence bundle; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "Prometheus documentation",
          provider: "Prometheus",
          url: "https://prometheus.io/docs/introduction/overview/",
          access: "Free",
          format: "Documentation",
          note: "Use the metric and alerting concepts with a local exporter or sample data.",
        },
        {
          title: "Grafana getting started",
          provider: "Grafana Labs",
          url: "https://grafana.com/docs/grafana/latest/getting-started/",
          access: "Free",
          format: "Course",
          note: "Build a small dashboard that distinguishes availability from performance.",
        },
        {
          title: "SRE Workbook: Incident Response",
          provider: "Google",
          url: "https://sre.google/workbook/incident-response/",
          access: "Free",
          format: "Documentation",
          note: "Adapt the incident roles, timeline, and learning-review practices to network work.",
        },
      ],
      checkpoint:
        "The incident record separates impact, cause, mitigation, and prevention with timestamps.",
    },
  ],
};
