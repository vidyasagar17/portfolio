// Every text field is required; an empty string ("") or empty array hides it.

export interface Links {
  email: string;
  linkedin: string;
  github: string;
  website: string;
}

/**
 * One field the hero "extracts" from the bio. `span` must appear verbatim
 * in `hero.source`; it gets highlighted and its `value` fills the record.
 */
export interface ExtractedField {
  key: string;
  span: string;
  value: string | number;
}

export interface Job {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
  tech: string[];
}

export interface Project {
  title: string;
  context: string;
  description: string;
  tech: string[];
  link: string;
  repo: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  detail: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  link: string;
}

export interface Portfolio {
  name: string;
  role: string;
  location: string;
  tagline: string;
  resume: string;
  links: Links;
  hero: {
    source: string;
    fields: ExtractedField[];
  };
  about: string[];
  experience: Job[];
  projects: Project[];
  skills: Record<string, string[]>;
  education: Education[];
  certifications: Certification[];
  contactNote: string;
}
