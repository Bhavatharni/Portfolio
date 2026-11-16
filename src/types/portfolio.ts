export interface MiloProject {
  id: string;
  projectNumber: string;
  title: string;
  category: string;
  technologies: string[];
  summary: string;
  keyAreas: string[];
  fullDescription: string;
  architectureDetails: string[];
  image: string;
  links: {
    githubUrl?: string;
    demoUrl?: string;
    caseStudyUrl?: string;
  };
  highlightMetrics?: {
    label: string;
    value: string;
  }[];
}

export interface MiloExperience {
  company: string;
  organizationDivision: string;
  role: string;
  domain: string;
  period: string;
  location: string;
  summary: string;
  contributions: string[];
  toolsUsed: string[];
}

export interface MiloEducation {
  degree: string;
  major: string;
  institution: string;
  duration: string;
  cgpa: string;
  academicFocus: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
  icon: string;
}

export interface InterestArea {
  title: string;
  headline: string;
  description: string;
  tags: string[];
}

export interface MiloProfile {
  name: string;
  greeting: string;
  headline: string;
  heroBio: string;
  availability: string;
  techHighlights: string[];
  email: string;
  github: string;
  linkedin: string;
  aboutHeadline: string;
  aboutParagraphs: string[];
  personalHighlights: {
    label: string;
    detail: string;
  }[];
  leetcodeCount: number;
  cgpa: string;
}
