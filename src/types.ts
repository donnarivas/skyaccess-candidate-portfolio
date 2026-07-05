export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  metrics: { label: string; value: string; description?: string }[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  period: string;
  details: string;
  gpa?: string;
  highlights?: string[];
}

export interface Project {
  id: string;
  title: string;
  role: string;
  period: string;
  description: string;
  bullets: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface VideoSegment {
  timeStart: string;
  timeEnd: string;
  title: string;
  text: string;
  relatedExpId?: string; // Links segment to a specific resume experience
  iconName: string;
}

export interface JDRequirementMatch {
  requirement: string;
  category: 'do' | 'look'; // "What you'll do" vs "What we're looking for"
  howDonnaMatches: string;
  donnaEvidence: string;
  iconName: string;
}
