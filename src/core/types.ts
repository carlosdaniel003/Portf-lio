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
};

export type Service = {
  title: string;
  description: string;
  tags: string[];
};
