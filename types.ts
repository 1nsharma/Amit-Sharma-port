// FIX: Added NavLink interface, which was missing and caused an import error in constants.ts.
export interface NavLink {
  id: string;
  title: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  details: string[];
}

export interface Project {
  id: string;
  icon: string;
  title:string;
  description: string;
  tech: string[];
  link: string;
  imageUrl: string;
}

export interface Insight {
  title: string;
  description: string;
  linkId: string;
}

export interface AITool {
  name: string;
  description: string;
  freeTier: string;
  useCase: string;
  link: string;
}

export interface AIToolCategory {
  title: string;
  tools: AITool[];
}

export interface WorkshopIdea {
    title: string;
    description: string;
}

export interface WorkshopLevel {
    title: string;
    ideas: WorkshopIdea[];
}

// FIX: Added WorkshopSummary interface, which was missing and caused an import error in constants.ts.
export interface WorkshopSummary {
  level: string;
  ideas: string;
  groupSize: string;
  cost: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface ServiceItem {
  icon: 'sparkles' | 'code' | 'academic_cap';
  title: string;
  description: string;
}

export interface EducationItem {
  title: string;
  institution: string;
  period: string;
}

export interface LanguageItem {
  name: string;
  proficiency: string;
}