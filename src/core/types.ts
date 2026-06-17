// src\core\types.ts
export type ProjectStatus = "Em produção" | "Protótipo aprovado" | "Em evolução";

export type Project = {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  status: ProjectStatus;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  highlights: string[];
  repoUrl: string;
  demoUrl?: string;
  accent: string;
  thumbnailUrl?: string;
  coverUrl?: string;
  galleryUrls?: string[];
};

export type Service = {
  title: string;
  description: string;
  tags: string[];
};

export type AboutEducation = {
  title: string;
  institution: string;
  period: string;
  description: string;
};

export type AboutExperience = {
  company: string;
  role: string;
  period: string;
  description: string;
};

export type AboutTechnicalBase = {
  title: string;
  description: string;
};

export type AboutProfile = {
  name: string;
  role: string;
  location: string;
  image: string;
  summary: string;
  education: AboutEducation[];
  deliveries: string[];
  experiences: AboutExperience[];
  technicalBase: AboutTechnicalBase[];
};

export type StackTechnology = {
  name: string;
  badge: string;
  usage: string;
};

export type StackGroup = {
  title: string;
  description: string;
  technologies: StackTechnology[];
};

export type CommercialService = {
  id:
    | "sistemas-gestao"
    | "dashboards"
    | "visao-computacional"
    | "presenca-digital";
  title: string;
  description: string;
  deliverables: string[];
  tags: string[];
};

export type ServiceProcessStep = {
  number: string;
  title: string;
  description: string;
};