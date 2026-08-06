export type CareerRole = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  salaryRange: string;
  estimatedMonths: number;
  skills: string[];
  milestones: Array<{
    title: string;
    description: string;
    skills: string[];
  }>;
};

export const careerRoles: CareerRole[] = [
  {
    slug: "cloud-devops-engineer",
    title: "Cloud DevOps Engineer",
    category: "Cloud & infrastructure",
    summary: "Build reliable delivery pipelines and operate cloud services at scale.",
    salaryRange: "$95k–$145k",
    estimatedMonths: 5,
    skills: ["Linux", "Networking", "Git", "Cloud fundamentals", "Containers", "Infrastructure as code", "CI/CD", "Observability"],
    milestones: [
      { title: "Cloud foundations", description: "Understand identity, networking, compute, storage, and cost controls.", skills: ["Cloud fundamentals", "Networking"] },
      { title: "Automation layer", description: "Provision repeatable environments and document the operational contract.", skills: ["Infrastructure as code", "Git"] },
      { title: "Delivery systems", description: "Ship a tested service through a secure, observable deployment pipeline.", skills: ["CI/CD", "Containers", "Observability"] },
    ],
  },
  {
    slug: "site-reliability-engineer",
    title: "Site Reliability Engineer",
    category: "Reliability engineering",
    summary: "Improve availability, performance, and developer velocity through engineering.",
    salaryRange: "$110k–$165k",
    estimatedMonths: 6,
    skills: ["Linux", "Programming", "Distributed systems", "Incident response", "Observability", "Automation", "Cloud architecture"],
    milestones: [
      { title: "Reliability fundamentals", description: "Learn service level objectives, error budgets, and incident practice.", skills: ["Incident response", "Observability"] },
      { title: "Systems engineering", description: "Model failure modes and automate repetitive operational work.", skills: ["Distributed systems", "Automation"] },
      { title: "Production ownership", description: "Design and operate a resilient service with measurable reliability.", skills: ["Cloud architecture", "Programming"] },
    ],
  },
  {
    slug: "security-analyst",
    title: "Cybersecurity Analyst",
    category: "Security",
    summary: "Detect, investigate, and reduce threats across applications and infrastructure.",
    salaryRange: "$75k–$125k",
    estimatedMonths: 5,
    skills: ["Networking", "Operating systems", "Identity", "Threat modeling", "Log analysis", "Incident response", "Security controls"],
    milestones: [
      { title: "Security baseline", description: "Build fluency in identity, protocols, common attack paths, and controls.", skills: ["Networking", "Identity", "Operating systems"] },
      { title: "Detection practice", description: "Turn signals into useful detections and investigate suspicious activity.", skills: ["Log analysis", "Threat modeling"] },
      { title: "Response readiness", description: "Coordinate containment, recovery, and clear post-incident improvements.", skills: ["Incident response", "Security controls"] },
    ],
  },
  {
    slug: "qa-automation-engineer",
    title: "QA Automation Engineer",
    category: "Software quality",
    summary: "Design automated tests that make software releases safer and faster.",
    salaryRange: "$78k–$120k",
    estimatedMonths: 4,
    skills: ["Testing fundamentals", "JavaScript or Python", "API testing", "Browser automation", "CI/CD", "Test design"],
    milestones: [
      { title: "Test strategy", description: "Translate product risks into focused, maintainable test coverage.", skills: ["Testing fundamentals", "Test design"] },
      { title: "Automation systems", description: "Build stable browser and API checks with useful diagnostics.", skills: ["Browser automation", "API testing", "JavaScript or Python"] },
      { title: "Release confidence", description: "Run quality gates in CI and communicate risk clearly.", skills: ["CI/CD"] },
    ],
  },
  {
    slug: "data-analyst",
    title: "Data Analyst",
    category: "Data & decision support",
    summary: "Turn operational data into decisions, forecasts, and measurable outcomes.",
    salaryRange: "$65k–$105k",
    estimatedMonths: 4,
    skills: ["SQL", "Spreadsheets", "Statistics", "Data visualization", "Business communication", "Python basics"],
    milestones: [
      { title: "Data fluency", description: "Query, clean, and validate data from common business systems.", skills: ["SQL", "Spreadsheets"] },
      { title: "Decision models", description: "Use statistics and clear visual narratives to explain what changed.", skills: ["Statistics", "Data visualization"] },
      { title: "Analytical delivery", description: "Automate recurring analysis and recommend measurable actions.", skills: ["Python basics", "Business communication"] },
    ],
  },
  {
    slug: "technical-project-manager",
    title: "Technical Project Manager",
    category: "Product delivery",
    summary: "Coordinate complex technical work from planning through measurable delivery.",
    salaryRange: "$85k–$135k",
    estimatedMonths: 4,
    skills: ["Planning", "Risk management", "Stakeholder communication", "Agile delivery", "Technical literacy", "Metrics"],
    milestones: [
      { title: "Delivery mechanics", description: "Plan milestones, dependencies, ownership, and decision points.", skills: ["Planning", "Agile delivery"] },
      { title: "Risk leadership", description: "Make uncertainty visible and move blockers toward decisions.", skills: ["Risk management", "Stakeholder communication"] },
      { title: "Technical confidence", description: "Connect architecture, trade-offs, and outcomes without losing the team.", skills: ["Technical literacy", "Metrics"] },
    ],
  },
];

export function getCareerRole(slug: string) {
  return careerRoles.find((role) => role.slug === slug);
}
