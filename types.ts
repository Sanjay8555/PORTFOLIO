export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  images?: string[]; // Additional images for a gallery
  github: string;
  demo: string;
  category: 'web' | 'mobile' | 'ai' | 'tool';
}

export interface Skill {
  name: string;
  level: number; // 1-100
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link: string;
}