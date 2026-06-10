// C:\Users\u s u á r i o\Documents\Portfólio\src\data\portfolio.ts
// O que é: Repositório central de dados estáticos do portfólio.
// Por que escolhi assim: Cumpre a regra de separar a camada de dados da UI. Se você quiser buscar isso de um CMS ou API no futuro, basta alterar aqui, sem tocar em nenhum componente visual.
import { Project } from "@/core/types";

export const projectsData: Project[] = [
  {
    id: "sigma-q",
    title: "SIGMA-Q: Plataforma Inteligente de Qualidade",
    problem: "Engenharia gastava horas consolidando planilhas, gerando gráficos e cruzando dados manualmente para investigar falhas.",
    solution: "Plataforma analítica baseada em PPM com dashboards dinâmicos, FMEA integrado e diagnóstico assistido por IA.",
    technologies: ["React", "TypeScript", "Python", "IA Semântica", "Dashboards Analíticos"],
    results: [
      "Redução drástica do tempo de análise",
      "Centralização operacional completa",
      "Análise dinâmica em tempo real",
      "Priorização inteligente de falhas"
    ],
    featured: true
  },
  {
    id: "visionx-neural",
    title: "VisionX Neural",
    problem: "Falsos positivos e limitações de sensibilidade em sistemas tradicionais de inspeção óptica (AOI).",
    solution: "Sistema de Visão Computacional com arquitetura híbrida e múltiplos motores especializados.",
    technologies: ["Mixture of Experts", "Semantic DNA", "Embeddings", "OCR Híbrido", "Hard Negative Mining"],
    results: [
      "Redução de falsos positivos sem comprometer sensibilidade",
      "Comunicação fluida com AOI",
      "Aprendizado contínuo através de IA híbrida"
    ],
    featured: true
  }
];