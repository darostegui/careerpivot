export type Certification = {
  name: string;
  provider: string;
  url: string;
  why: string;
};

const certificationsBySlug: Record<string, Certification[]> = {
  "cloud-devops-engineer": [
    { name: "AWS Certified Cloud Practitioner", provider: "AWS", url: "https://aws.amazon.com/certification/certified-cloud-practitioner/", why: "Useful baseline when cloud concepts are new." },
    { name: "Certified Kubernetes Application Developer (CKAD)", provider: "CNCF", url: "https://www.cncf.io/training/certification/ckad/", why: "Helpful after you can deploy and troubleshoot containerized applications." },
  ],
  "site-reliability-engineer": [
    { name: "Google Cloud Professional Cloud DevOps Engineer", provider: "Google Cloud", url: "https://cloud.google.com/learn/certification/cloud-devops-engineer", why: "Relevant for production reliability, observability, and delivery practices." },
    { name: "AWS Certified Solutions Architect – Associate", provider: "AWS", url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/", why: "Validates architecture fundamentals that support reliability decisions." },
  ],
  "security-analyst": [
    { name: "CompTIA Security+", provider: "CompTIA", url: "https://www.comptia.org/certifications/security", why: "Common entry credential for security operations and controls." },
    { name: "GIAC Certified Incident Handler (GCIH)", provider: "GIAC", url: "https://www.giac.org/certifications/certified-incident-handler-gcih/", why: "A deeper option after hands-on incident response practice." },
  ],
  "qa-automation-engineer": [
    { name: "ISTQB Certified Tester Foundation Level", provider: "ISTQB", url: "https://www.istqb.org/certifications/certified-tester-foundation-level", why: "Useful vocabulary and test-design baseline for QA roles." },
  ],
  "data-analyst": [
    { name: "Microsoft Office Specialist: Excel Associate", provider: "Microsoft", url: "https://learn.microsoft.com/en-us/credentials/certifications/mos-excel-associate-m365-apps/", why: "Helpful when spreadsheet fluency is central to the target role." },
    { name: "PCAP: Certified Associate Python Programmer", provider: "Python Institute", url: "https://pythoninstitute.org/pcap", why: "Optional evidence of practical Python foundations." },
  ],
  "technical-project-manager": [
    { name: "Project Management Professional (PMP)", provider: "PMI", url: "https://www.pmi.org/certifications/project-management-pmp", why: "Strong mid-career credential after documented project experience." },
    { name: "Professional Scrum Master I (PSM I)", provider: "Scrum.org", url: "https://www.scrum.org/assessments/professional-scrum-master-i-certification", why: "Useful for teams using Scrum; not a substitute for delivery evidence." },
  ],
  "frontend-engineer": [
    { name: "AWS Certified Developer – Associate", provider: "AWS", url: "https://aws.amazon.com/certification/certified-developer-associate/", why: "Optional when frontend work includes cloud-backed application delivery." },
  ],
  "backend-engineer": [
    { name: "AWS Certified Developer – Associate", provider: "AWS", url: "https://aws.amazon.com/certification/certified-developer-associate/", why: "Useful evidence of cloud application fundamentals." },
    { name: "Microsoft Certified: Azure Developer Associate", provider: "Microsoft", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-developer/", why: "Relevant when the target environment uses Azure." },
  ],
  "data-engineer": [
    { name: "Google Cloud Professional Data Engineer", provider: "Google Cloud", url: "https://cloud.google.com/learn/certification/data-engineer", why: "Useful for validating production data-platform concepts." },
    { name: "AWS Certified Data Engineer – Associate", provider: "AWS", url: "https://aws.amazon.com/certification/certified-data-engineer-associate/", why: "Relevant when building pipelines on AWS." },
  ],
  "machine-learning-engineer": [
    { name: "Google Cloud Professional Machine Learning Engineer", provider: "Google Cloud", url: "https://cloud.google.com/learn/certification/machine-learning-engineer", why: "Useful after you have deployed and monitored real models." },
  ],
  "ux-ui-designer": [
    { name: "NN/g UX Certification", provider: "Nielsen Norman Group", url: "https://www.nngroup.com/ux-certification/", why: "Optional structured credential; a strong case-study portfolio matters more." },
  ],
  "product-manager": [
    { name: "Product Owner / Product Manager credentials", provider: "Scrum.org", url: "https://www.scrum.org/professional-training/product-owner-training", why: "Useful for product roles in Scrum environments." },
  ],
  "technical-writer": [
    { name: "Certified Professional Technical Communicator", provider: "STC", url: "https://www.stc.org/certification/", why: "Optional credential for technical communication specialists." },
  ],
  "solutions-architect": [
    { name: "AWS Certified Solutions Architect – Associate", provider: "AWS", url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/", why: "Common validation of cloud architecture fundamentals." },
    { name: "Microsoft Certified: Azure Solutions Architect Expert", provider: "Microsoft", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-solutions-architect/", why: "Relevant for Azure-focused architecture roles." },
  ],
  "network-administrator": [
    { name: "Cisco Certified Network Associate (CCNA)", provider: "Cisco", url: "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/associate/ccna/index.html", why: "Directly aligned with routing, switching, and network fundamentals." },
    { name: "CompTIA Network+", provider: "CompTIA", url: "https://www.comptia.org/certifications/network", why: "Vendor-neutral networking foundation for early-career candidates." },
  ],
  "database-administrator": [
    { name: "EDB PostgreSQL Associate Certification", provider: "EDB", url: "https://www.enterprisedb.com/training/postgres-certification", why: "Relevant when PostgreSQL administration is part of the target environment." },
    { name: "Oracle Database SQL Certified Associate", provider: "Oracle", url: "https://education.oracle.com/oracle-database-sql/trackp_457", why: "Useful for Oracle-heavy organizations and SQL validation." },
  ],
  "it-support-specialist": [
    { name: "CompTIA A+", provider: "CompTIA", url: "https://www.comptia.org/certifications/a", why: "Recognized entry credential for support and endpoint fundamentals." },
    { name: "ITIL 4 Foundation", provider: "PeopleCert", url: "https://www.peoplecert.org/certifications/it-governance-and-service-management/ITIL-1/itil-4-foundation-2696", why: "Helpful for service-desk and structured IT operations environments." },
  ],
  "sales-engineer": [
    { name: "AWS Certified Cloud Practitioner", provider: "AWS", url: "https://aws.amazon.com/certification/certified-cloud-practitioner/", why: "Useful technical baseline for cloud product conversations." },
  ],
  "customer-success-manager": [
    { name: "Certified Customer Success Manager", provider: "SuccessCOACHING", url: "https://successcoaching.co/certified-customer-success-manager/", why: "Optional structured credential; measurable customer outcomes remain more important." },
  ],
  "digital-marketing-specialist": [
    { name: "Google Ads certifications", provider: "Google Skillshop", url: "https://skillshop.withgoogle.com/googleads", why: "Free platform credential for paid-search fundamentals." },
    { name: "HubSpot Content Marketing Certification", provider: "HubSpot Academy", url: "https://academy.hubspot.com/courses/content-marketing", why: "Useful for content strategy and campaign measurement." },
  ],
  "hr-people-operations-specialist": [
    { name: "SHRM-CP", provider: "SHRM", url: "https://www.shrm.org/credentials/certification", why: "Relevant generalist credential after building HR operations experience." },
    { name: "PHR", provider: "HRCI", url: "https://www.hrci.org/certifications/individual-certifications/phr", why: "Useful for US-focused HR practice and policy knowledge." },
  ],
  "project-coordinator": [
    { name: "Certified Associate in Project Management (CAPM)", provider: "PMI", url: "https://www.pmi.org/certifications/certified-associate-capm", why: "Accessible project credential before the experience required for PMP." },
    { name: "Project Management Professional (PMP)", provider: "PMI", url: "https://www.pmi.org/certifications/project-management-pmp", why: "Longer-term option after documenting project leadership experience." },
  ],
  "financial-analyst": [
    { name: "CFA Program", provider: "CFA Institute", url: "https://www.cfainstitute.org/programs/cfa-program", why: "Strong finance credential for investment and analytical career tracks." },
    { name: "FP&A Certification", provider: "AFP", url: "https://www.financialprofessionals.org/certification", why: "Useful for planning, budgeting, and corporate finance paths." },
  ],
  "operations-analyst": [
    { name: "Lean Six Sigma Green Belt", provider: "ASQ", url: "https://asq.org/cert/quality-engineer", why: "Useful when process improvement and quality are central to the role." },
  ],
  "supply-chain-coordinator": [
    { name: "ASCM Certified Supply Chain Professional (CSCP)", provider: "ASCM", url: "https://www.ascm.org/learning-development/certifications-credentials/cscp/", why: "Broad supply-chain credential after foundational experience." },
    { name: "Certified in Planning and Inventory Management (CPIM)", provider: "ASCM", url: "https://www.ascm.org/learning-development/certifications-credentials/cpim/", why: "More focused option for planning and inventory roles." },
  ],
  "healthcare-administrator": [
    { name: "Certified Professional in Healthcare Quality (CPHQ)", provider: "NAHQ", url: "https://nahq.org/individuals/cphq-certification/", why: "Useful for healthcare quality and performance-improvement paths." },
  ],
  "renewable-energy-technician": [
    { name: "NABCEP PV Associate", provider: "NABCEP", url: "https://www.nabcep.org/certifications/pv-associate/", why: "Entry credential for photovoltaic concepts before advanced field credentials." },
    { name: "NABCEP PV Installation Professional", provider: "NABCEP", url: "https://www.nabcep.org/certifications/pv-installation-professional/", why: "Advanced option requiring appropriate training and field experience." },
  ],
};

export function getCertifications(roleTitle: string) {
  const slug = roleTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return certificationsBySlug[slug] ?? [];
}
