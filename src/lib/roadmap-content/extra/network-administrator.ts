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
        "Map a browser request from DNS lookup through TCP or TLS setup, routing, switching, and the server response.",
        "Practice subnetting, CIDR notation, private ranges, default gateways, broadcast domains, and IPv6 address structure.",
        "Build a small isolated topology in Packet Tracer or a network namespace and label every interface and route.",
        "Capture traffic with Wireshark and identify ARP, ICMP, DNS, TCP handshake, retransmission, and HTTP or TLS flows.",
      ],
      project:
        "Design a documented three-subnet lab for users, servers, and management; include an IP plan, topology diagram, routing table, and packet captures proving DNS and HTTP reachability.",
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
        "Given an unseen /24 topology, produce a correct subnet plan in 15 minutes and use a capture to explain one failed connection hop by hop.",
    },
    {
      id: "switching-and-vlans",
      title: "Switching, VLANs, and wireless",
      outcome:
        "Segment a small LAN with VLANs and trunking, configure access controls, and diagnose common wired and wireless connectivity faults.",
      studyPlan: [
        "Learn MAC learning, access ports, 802.1Q tagging, trunks, native VLAN risks, STP, PoE, and basic WLAN terms.",
        "Create user, voice, guest, and management VLANs in an isolated simulator; assign ports and verify MAC tables.",
        "Add inter-VLAN routing and an explicit guest policy, then test allowed and denied paths with ping and TCP checks.",
        "Break one cable, VLAN tag, trunk, or DHCP setting at a time and collect show-command output before changing anything.",
      ],
      project:
        "Build a simulated small-office network with four VLANs, a wireless guest segment, STP root selection, and a troubleshooting runbook containing before/after command output.",
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
        "All four VLANs pass their intended tests, guest clients cannot reach management, and your runbook identifies a deliberately introduced trunk fault from evidence alone.",
    },
    {
      id: "routing-and-firewalls",
      title: "Routing, NAT, and firewalls",
      outcome:
        "Configure and verify static or dynamic routes, NAT, and least-privilege firewall rules while preserving a clear traffic path.",
      studyPlan: [
        "Compare connected, static, default, and dynamic routes; learn longest-prefix matching and asymmetric-routing symptoms.",
        "Configure a routed lab with a default route, a redundant path, and a documented next-hop decision.",
        "Write firewall rules from an allow-list, then add stateful inspection, NAT, logging, and an explicit deny at the end.",
        "Test each rule with source-specific probes and inspect counters, logs, and route tables rather than relying on one ping.",
      ],
      project:
        "Deploy an isolated firewall/router lab for a web server and admin subnet: publish only HTTPS, restrict administration to one source range, and attach logs plus a rollback plan.",
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
        "A test matrix demonstrates every permitted and denied flow, firewall logs show the denied probes, and a second person can restore the rules from your rollback instructions.",
    },
    {
      id: "network-services",
      title: "Core network services",
      outcome:
        "Operate dependable DNS, DHCP, NTP, and IP address management for a small environment with reservations, delegation, and monitoring.",
      studyPlan: [
        "Learn authoritative versus recursive DNS, record types, TTLs, DHCP leases/options, NTP strata, and the purpose of IPAM.",
        "Install a lab DNS and DHCP service using only private addresses; create forward and reverse zones and a reservation.",
        "Simulate an expired lease, stale record, wrong gateway, and time drift; capture client output and server logs for each.",
        "Document naming, lease, change, backup, and recovery procedures, including how to avoid exposing internal zones publicly.",
      ],
      project:
        "Run DNS, DHCP, and NTP for the three-subnet lab; publish a service inventory, sample lease and query logs, backup/restore steps, and a one-page outage timeline.",
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
        "A fresh client receives the correct lease, resolves forward and reverse names, synchronizes time, and you can diagnose one broken service using logs and client commands.",
    },
    {
      id: "monitoring-and-incident-response",
      title: "Monitoring and network incident response",
      outcome:
        "Turn network symptoms into evidence, isolate scope, communicate impact, and document a reversible fix and prevention action.",
      studyPlan: [
        "Define baseline latency, loss, interface utilization, DNS response time, DHCP health, and device availability for the lab.",
        "Set up safe polling and centralized logs; alert on sustained conditions rather than every transient packet loss.",
        "Use a repeatable workflow: confirm symptom, scope clients and paths, compare with baseline, isolate a layer, and preserve evidence.",
        "Write a timeline, customer update, root-cause statement, and follow-up task after each tabletop or lab incident.",
      ],
      project:
        "Create a monitoring dashboard and incident packet for a simulated outage caused by a bad route or saturated interface, including graphs, commands, timeline, and corrective change.",
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
        "Your incident packet lets a reviewer identify impact, affected path, evidence, fix, and prevention within five minutes without guessing from vague notes.",
    },
  ],
};
