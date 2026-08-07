import { careerRoles } from "@/lib/career-data";
import { cloudDevopsEngineerContent } from "./cloud-devops-engineer";
import { siteReliabilityEngineerContent } from "./site-reliability-engineer";
import { securityAnalystContent } from "./security-analyst";
import { qaAutomationEngineerContent } from "./qa-automation-engineer";
import { dataAnalystContent } from "./data-analyst";
import { technicalProjectManagerContent } from "./technical-project-manager";
import type { RoadmapContent } from "./types";
import type { LearningResource, RoadmapTopic } from "./types";
import { backendEngineerContent } from "./extra/backend-engineer";
import { customerSuccessManagerContent } from "./extra/customer-success-manager";
import { dataEngineerContent } from "./extra/data-engineer";
import { databaseAdministratorContent } from "./extra/database-administrator";
import { digitalMarketingSpecialistContent } from "./extra/digital-marketing-specialist";
import { financialAnalystContent } from "./extra/financial-analyst";
import { frontendEngineerContent } from "./extra/frontend-engineer";
import { healthcareAdministratorContent } from "./extra/healthcare-administrator";
import { hrPeopleOperationsSpecialistContent } from "./extra/hr-people-operations-specialist";
import { itSupportSpecialistContent } from "./extra/it-support-specialist";
import { machineLearningEngineerContent } from "./extra/machine-learning-engineer";
import { networkAdministratorContent } from "./extra/network-administrator";
import { operationsAnalystContent } from "./extra/operations-analyst";
import { productManagerContent } from "./extra/product-manager";
import { projectCoordinatorContent } from "./extra/project-coordinator";
import { renewableEnergyTechnicianContent } from "./extra/renewable-energy-technician";
import { salesEngineerContent } from "./extra/sales-engineer";
import { solutionsArchitectContent } from "./extra/solutions-architect";
import { supplyChainCoordinatorContent } from "./extra/supply-chain-coordinator";
import { technicalWriterContent } from "./extra/technical-writer";
import { uxDesignerContent } from "./extra/ux-ui-designer";

const contentBySlug: Record<string, RoadmapContent> = {
  "cloud-devops-engineer": cloudDevopsEngineerContent,
  "site-reliability-engineer": siteReliabilityEngineerContent,
  "security-analyst": securityAnalystContent,
  "qa-automation-engineer": qaAutomationEngineerContent,
  "data-analyst": dataAnalystContent,
  "technical-project-manager": technicalProjectManagerContent,
  "frontend-engineer": frontendEngineerContent,
  "backend-engineer": backendEngineerContent,
  "data-engineer": dataEngineerContent,
  "machine-learning-engineer": machineLearningEngineerContent,
  "ux-ui-designer": uxDesignerContent,
  "product-manager": productManagerContent,
  "technical-writer": technicalWriterContent,
  "solutions-architect": solutionsArchitectContent,
  "network-administrator": networkAdministratorContent,
  "database-administrator": databaseAdministratorContent,
  "it-support-specialist": itSupportSpecialistContent,
  "sales-engineer": salesEngineerContent,
  "customer-success-manager": customerSuccessManagerContent,
  "digital-marketing-specialist": digitalMarketingSpecialistContent,
  "hr-people-operations-specialist": hrPeopleOperationsSpecialistContent,
  "project-coordinator": projectCoordinatorContent,
  "financial-analyst": financialAnalystContent,
  "operations-analyst": operationsAnalystContent,
  "supply-chain-coordinator": supplyChainCoordinatorContent,
  "healthcare-administrator": healthcareAdministratorContent,
  "renewable-energy-technician": renewableEnergyTechnicianContent,
};

const roleAliases: Record<string, string> = {
  "enterprise-solutions-architect": "solutions-architect",
  "solutions-architect": "solutions-architect",
  "cloud-infrastructure-engineer": "cloud-devops-engineer",
  "devops-engineer": "cloud-devops-engineer",
  "cloud-devops-engineer": "cloud-devops-engineer",
  "site-reliability-engineer": "site-reliability-engineer",
  sre: "site-reliability-engineer",
  "security-analyst": "security-analyst",
  "cybersecurity-analyst": "security-analyst",
  "qa-engineer": "qa-automation-engineer",
  "quality-assurance-engineer": "qa-automation-engineer",
  "automation-qa-engineer": "qa-automation-engineer",
  "qa-automation-engineer": "qa-automation-engineer",
  "data-analytics-analyst": "data-analyst",
  "technical-program-manager": "technical-project-manager",
  tpm: "technical-project-manager",
  "people-operations-specialist": "hr-people-operations-specialist",
  "hr-people-operations-specialist": "hr-people-operations-specialist",
  "ui-ux-designer": "ux-ui-designer",
  "ux-designer": "ux-ui-designer",
};

const freeResources: Record<string, LearningResource[]> = {
  analytics: [
    { title: "Google Data Analytics foundations", provider: "Google", url: "https://www.coursera.org/professional-certificates/google-data-analytics", access: "Free audit", format: "Course", note: "Practice framing questions, cleaning data, and communicating findings; the certificate is optional." },
    { title: "Looker Studio learning center", provider: "Google", url: "https://support.google.com/looker-studio/", access: "Free", format: "Documentation", note: "Build a small dashboard from a sample dataset and explain each metric." },
  ],
  people: [
    { title: "Leadership and management courses", provider: "Coursera", url: "https://www.coursera.org/browse/business/leadership-and-management", access: "Free audit", format: "Course", note: "Choose a leadership course, audit the learning materials, and apply one model to a practical scenario." },
    { title: "SHRM competency resources", provider: "SHRM", url: "https://www.shrm.org/topics-tools", access: "Free", format: "Documentation", note: "Use the topic guides to build a vocabulary for ethical, evidence-based people practices." },
  ],
  technical: [
    { title: "The Missing Semester", provider: "MIT", url: "https://missing.csail.mit.edu/", access: "Free", format: "Course", note: "Learn the command line, version control, debugging, and automation through practical exercises." },
    { title: "freeCodeCamp practice library", provider: "freeCodeCamp", url: "https://www.freecodecamp.org/learn/", access: "Free", format: "Practice", note: "Choose a focused path and finish the exercises by building something you can show." },
  ],
  operations: [
    { title: "Operations and process improvement courses", provider: "Coursera", url: "https://www.coursera.org/browse/business", access: "Free audit", format: "Course", note: "Select a process or operations course, audit the materials, and apply the methods to a real workflow." },
    { title: "Project management basics", provider: "Google", url: "https://www.coursera.org/professional-certificates/google-project-management", access: "Free audit", format: "Course", note: "Use the planning and risk modules to structure the project deliverable for this topic." },
  ],
};

function topicPlaybook(skill: string, roleTitle: string, index: number): RoadmapTopic {
  const normalized = skill.toLowerCase();
  if (normalized.includes("roi") || normalized.includes("measurement") || normalized.includes("metric")) {
    return {
      id: `custom-topic-${index}`,
      title: skill,
      outcome: "Connect a learning or business activity to observable behavior, performance, and organizational outcomes.",
      studyPlan: [
        "Define the decision this measurement must support and separate activity metrics from outcome metrics.",
        "Choose a baseline, a target, and a collection method; document what would count as misleading evidence.",
        "Compare a simple before/after view with a segmented view by team, cohort, or job role.",
        "Present the result as a short recommendation rather than a dashboard full of unprioritized numbers.",
      ],
      project: "Create an L&D measurement scorecard for one program: define success, create sample data, calculate three meaningful measures, and write a recommendation.",
      resources: [...freeResources.analytics, { title: "Evaluation planning guide", provider: "CDC", url: "https://www.cdc.gov/evaluation/", access: "Free", format: "Documentation", note: "Use the evaluation cycle to make assumptions, measures, and limitations explicit." }],
      checkpoint: "A reviewer can trace each metric from the original question to a decision, and you can explain one limitation without hiding it.",
    };
  }
  if (normalized.includes("hris") || normalized.includes("human resource") || normalized.includes("people")) {
    return {
      id: `custom-topic-${index}`,
      title: skill,
      outcome: "Understand how employee lifecycle data, permissions, workflows, and integrations fit together in a people system.",
      studyPlan: [
        "Map hire-to-retire lifecycle events and identify the system of record for each piece of information.",
        "Sketch a data model for people, positions, teams, events, and approvals without using real personal data.",
        "Define role-based access, retention, auditability, and a safe process for correcting records.",
        "Document an integration flow with inputs, validation, retries, ownership, and failure notifications.",
      ],
      project: "Design a privacy-conscious onboarding workflow: produce a process map, sample data dictionary, access matrix, and integration failure runbook.",
      resources: [...freeResources.people, { title: "Privacy principles", provider: "European Commission", url: "https://commission.europa.eu/law/law-topic/data-protection/data-protection-eu_en", access: "Free", format: "Documentation", note: "Use the principles as a checklist for minimizing and protecting employee data." }],
      checkpoint: "Your workflow makes ownership, access, data quality, and failure recovery visible without exposing real employee information.",
    };
  }
  if (normalized.includes("leadership") || normalized.includes("facilitation") || normalized.includes("coaching")) {
    return {
      id: `custom-topic-${index}`,
      title: skill,
      outcome: "Design and facilitate a development experience that turns a stated capability gap into observable practice.",
      studyPlan: [
        "Identify the audience, job behaviors, constraints, and evidence that would show improvement.",
        "Choose a learning method that fits the behavior: practice, feedback, coaching, shadowing, or guided reference.",
        "Write a session plan with inclusive participation, realistic scenarios, and a transfer-to-work step.",
        "Collect feedback and revise one activity based on what participants actually struggled with.",
      ],
      project: "Create a 60-minute development workshop with a facilitator guide, participant exercise, feedback form, and 30-day follow-through plan.",
      resources: [...freeResources.people, { title: "Universal design for learning guidelines", provider: "CAST", url: "https://udlguidelines.cast.org/", access: "Free", format: "Documentation", note: "Use the guidelines to make participation and materials more accessible." }],
      checkpoint: "A colleague can run your session from the guide, complete the exercise, and describe the behavior they will apply afterward.",
    };
  }
  if (normalized.includes("sql") || normalized.includes("data") || normalized.includes("analysis") || normalized.includes("dashboard")) {
    return {
      id: `custom-topic-${index}`,
      title: skill,
      outcome: "Turn a practical question into a reliable analysis with clear assumptions, useful visuals, and an actionable conclusion.",
      studyPlan: [
        "Translate the business question into definitions, dimensions, measures, and a decision threshold.",
        "Inspect the data for missing values, duplicates, inconsistent categories, and sampling bias.",
        "Build one reproducible analysis and validate the result with a second check.",
        "Present the smallest visual set that supports the decision and state what the data cannot prove.",
      ],
      project: "Analyze a public dataset, publish a short data brief with three visuals, and include a reproducible query or notebook plus limitations.",
      resources: freeResources.analytics,
      checkpoint: "Someone unfamiliar with the dataset can reproduce your main number and understand what action you recommend.",
    };
  }
  if (normalized.includes("cloud") || normalized.includes("software") || normalized.includes("technical") || normalized.includes("system") || normalized.includes("integration")) {
    return {
      id: `custom-topic-${index}`,
      title: skill,
      outcome: `Apply ${skill} in a small, documented system rather than only describing the concept.`,
      studyPlan: [
        "Learn the vocabulary, common components, and failure modes behind the skill.",
        "Follow one guided exercise, then rebuild it from a blank project without copying the solution.",
        "Add a test, health check, or validation step that catches the most likely failure.",
        "Document the design trade-offs, setup steps, and a safe way to undo or recover from changes.",
      ],
      project: `Build a small portfolio system that demonstrates ${skill}, include a short architecture or workflow diagram, and document one failure you tested.`,
      resources: freeResources.technical,
      checkpoint: "A reviewer can run the artifact from your instructions and see evidence that you tested a realistic failure case.",
    };
  }
  return {
    id: `custom-topic-${index}`,
    title: skill,
    outcome: `Build practical capability in ${skill} and connect it to the responsibilities of a ${roleTitle}.`,
    studyPlan: [
      `Define what good ${skill.toLowerCase()} looks like in a real work situation.`,
      "Study two contrasting examples and write down the decision criteria they use.",
      "Practice the skill on a small, realistic scenario with a clear constraint.",
      "Ask for feedback, revise the artifact, and record the reasoning behind the changes.",
    ],
    project: `Create a realistic ${skill.toLowerCase()} work sample for a ${roleTitle}, including assumptions, decisions, and a short handoff note.`,
    resources: freeResources.operations,
    checkpoint: "Your work sample is understandable without a live explanation and includes evidence of feedback and revision.",
  };
}

function generatedContent(roleSlug: string, title: string, skills?: string[]): RoadmapContent | undefined {
  const role = careerRoles.find((candidate) => candidate.slug === roleSlug);
  const topicSkills = skills?.length ? skills : role?.skills;
  if (!topicSkills?.length) return undefined;
  return {
    roleSlug,
    roleTitle: title,
    topics: topicSkills.map((skill, index) => topicPlaybook(skill, title, index)),
  };
}

function normalizeRoleTitle(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function normalizeRoleSlug(title: string) {
  return normalizeRoleTitle(title).replaceAll(" ", "-");
}

function resolveCuratedSlug(title: string) {
  const normalizedSlug = normalizeRoleSlug(title);
  return roleAliases[normalizedSlug] ?? contentBySlug[normalizedSlug]?.roleSlug;
}

function resolveRole(title: string) {
  const normalizedTitle = normalizeRoleTitle(title);
  const aliasedSlug = resolveCuratedSlug(title);
  if (aliasedSlug) return careerRoles.find((candidate) => candidate.slug === aliasedSlug);

  const exactMatch = careerRoles.find((candidate) => normalizeRoleTitle(candidate.title) === normalizedTitle);
  if (exactMatch) return exactMatch;

  return careerRoles.find((candidate) => {
    const normalizedCandidate = normalizeRoleTitle(candidate.title);
    return normalizedTitle.includes(normalizedCandidate) || normalizedCandidate.includes(normalizedTitle);
  });
}

export function getRoadmapContent(title: string, skills?: string[]) {
  const curatedSlug = resolveCuratedSlug(title);
  if (curatedSlug && contentBySlug[curatedSlug]) return contentBySlug[curatedSlug];

  const role = resolveRole(title);
  return role
    ? contentBySlug[role.slug] ?? generatedContent(role.slug, role.title, skills) ?? contentBySlug["cloud-devops-engineer"]
    : generatedContent(`custom-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`, title, skills) ?? contentBySlug["cloud-devops-engineer"];
}
