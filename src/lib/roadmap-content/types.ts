export type LearningResource = {
  title: string;
  provider: string;
  url: string;
  access: "Free" | "Free audit" | "Paid exam" | "Paid";
  format: "Course" | "Documentation" | "Practice" | "Certification";
  note: string;
};

export type RoadmapTopic = {
  id: string;
  title: string;
  outcome: string;
  studyPlan: string[];
  project: string;
  resources: LearningResource[];
  checkpoint: string;
};

export type RoadmapContent = {
  roleSlug: string;
  roleTitle: string;
  topics: RoadmapTopic[];
};
