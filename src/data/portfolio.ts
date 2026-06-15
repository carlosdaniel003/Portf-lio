// src\data\portfolio.ts
import { Project, Service } from "@/core/types";

export const servicesData: Service[] = [
  {
    title: "Sistemas Web Completos",
    description:
      "Dashboards, login, permissões, banco de dados, relatórios, painéis operacionais e fluxos internos sob medida.",
    tags: ["Full Stack", "Dashboards", "RBAC"],
  },
  {
    title: "IA Aplicada à Operação",
    description:
      "Assistentes, diagnóstico técnico, análise de dados e automações inteligentes para acelerar decisões.",
    tags: ["IA", "Análise", "Automação"],
  },
  {
    title: "Visão Computacional",
    description:
      "Inspeção visual, classificação OK/NG, leitura de imagens, análise de LEDs, defeitos e padrões industriais.",
    tags: ["Python", "OpenCV", "AOI"],
  },
  {
    title: "Digitalização Industrial",
    description:
      "Transformação de planilhas, controles manuais e processos repetitivos em plataformas visuais e rastreáveis.",
    tags: ["Processos", "Qualidade", "Produção"],
  },
];

export const projectsData: Project[] = [
  {
    id: "skill-map",
    title: "Skill Map",
    shortTitle: "Skill Map",
    category: "Gestão Operacional",
    status: "Em produção",
    problem:
      "Lideranças precisam entender habilidades, frequência e disponibilidade de operadores sem depender de planilhas dispersas.",
    solution:
      "Sistema web com gestão de operadores, matriz de skills, dashboards, indicadores de assiduidade e apoio à alocação.",
    impact:
      "Ajuda a liderança a tomar decisões mais rápidas sobre treinamento, substituição e distribuição de pessoas por linha.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind", "Recharts", "IA"],
    highlights: [
      "Matriz de habilidades por operador",
      "Dashboards de polivalência e assiduidade",
      "Controle de permissões por perfil",
      "Base para alocação inteligente",
    ],
    repoUrl: "https://github.com/carlosdaniel003/Skill-Map",
    demoUrl: "https://skill-map-sage.vercel.app/",
    accent: "from-emerald-400 to-cyan-400",
    thumbnailUrl: "/images/projects/skill-map/thumb.jpg",
    coverUrl: "/images/projects/skill-map/cover.jpg",
    galleryUrls: [
      "/images/projects/skill-map/01.jpg",
      "/images/projects/skill-map/02.jpg",
      "/images/projects/skill-map/03.jpg",
      "/images/projects/skill-map/04.jpg",
      "/images/projects/skill-map/05.jpg",
      "/images/projects/skill-map/06.jpg",
      "/images/projects/skill-map/07.jpg",
      "/images/projects/skill-map/08.jpg",
      "/images/projects/skill-map/09.jpg",
      "/images/projects/skill-map/10.jpg",
    ],
  },
  {
    id: "sigma-q",
    title: "SIGMA-Q: Plataforma Inteligente de Qualidade",
    shortTitle: "SIGMA-Q",
    category: "Qualidade & Indicadores",
    status: "Em produção",
    problem:
      "Análises de qualidade em planilhas consomem tempo, fragmentam informações e dificultam a identificação rápida das causas críticas.",
    solution:
      "Plataforma analítica com PPM, dashboards dinâmicos, catálogos técnicos, FMEA e diagnóstico assistido por IA.",
    impact:
      "Reduz o tempo de análise e transforma dados de produção em visão técnica para priorização de falhas.",
    technologies: ["Next.js", "TypeScript", "Node", "IA", "Dashboards", "FMEA"],
    highlights: [
      "Indicadores de qualidade e PPM",
      "FMEA integrado ao processo",
      "Diagnóstico assistido por IA",
      "Filtros e gráficos dinâmicos",
    ],
    repoUrl: "https://github.com/carlosdaniel003/sigma-q-v5",
    accent: "from-lime-300 to-emerald-500",
    thumbnailUrl: "/images/projects/sigma-q/thumb.jpg",
    coverUrl: "/images/projects/sigma-q/cover.jpg",
    galleryUrls: ["/images/projects/sigma-q/01.jpg"],
  },
  {
    id: "visionx-neural",
    title: "VisionX Neural",
    shortTitle: "VisionX",
    category: "Visão Computacional Industrial",
    status: "Em produção",
    problem:
      "Operadores e sistemas tradicionais de inspeção visual podem sofrer com fadiga, falsos positivos e baixa rastreabilidade técnica.",
    solution:
      "Pipeline híbrido com visão computacional, comparação de imagens, análise de regiões críticas e suporte a decisão OK/NG.",
    impact:
      "Cria uma camada inteligente de inspeção para reduzir dependência visual humana e apoiar validações industriais.",
    technologies: ["Python", "OpenCV", "IA", "MobileNetV2", "SSIM", "AOI"],
    highlights: [
      "Processamento de imagem industrial",
      "Comparação entre referência e teste",
      "Análise técnica com regiões marcadas",
      "Arquitetura pensada para ambiente legado",
    ],
    repoUrl: "https://github.com/carlosdaniel003/visionx-neural",
    accent: "from-cyan-300 to-blue-500",
    thumbnailUrl: "/images/projects/visionx-neural/thumb.jpg",
    coverUrl: "/images/projects/visionx-neural/cover.jpg",
  },
  {
    id: "lumus-pci",
    title: "LUMUS-PCI",
    shortTitle: "LUMUS",
    category: "Inspeção de LEDs em PCI",
    status: "Em produção",
    problem:
      "A validação visual de LEDs em placas PCI é repetitiva, cansativa e sujeita a falhas quando feita apenas por inspeção humana.",
    solution:
      "Sistema em Python para análise visual de LEDs acesos/apagados com ROI, máscara, heatmap e visual técnico de decisão.",
    impact:
      "Apoia inspeções mais consistentes e documentadas em processos onde pequenos detalhes visuais importam.",
    technologies: ["Python", "OpenCV", "Tkinter", "Visão Computacional", "ROI"],
    highlights: [
      "Seleção visual de LEDs",
      "Classificação aceso/apagado",
      "Máscara e heatmap de intensidade",
      "Pacote visual de depuração",
    ],
    repoUrl: "https://github.com/carlosdaniel003/LUMUS-PCI",
    accent: "from-green-300 to-emerald-500",
    thumbnailUrl: "/images/projects/lumus-pci/thumb.jpg",
    coverUrl: "/images/projects/lumus-pci/cover.jpg",
  },
  {
    id: "central-aprovacoes",
    title: "Central de Aprovações — CA",
    shortTitle: "CA",
    category: "Documentação Técnica",
    status: "Em produção",
    problem:
      "Aprovações técnicas e evidências fotográficas podem se perder em conversas, pastas e registros sem padronização.",
    solution:
      "Sistema PHP para registrar, armazenar e consultar aprovações com documentação fotográfica e dados do aprovador.",
    impact:
      "Melhora rastreabilidade, consulta e organização de evidências técnicas usadas em decisões internas.",
    technologies: ["PHP", "HTML", "CSS", "jQuery", "Documentação"],
    highlights: [
      "Registro de aprovações",
      "Upload de evidências",
      "Consulta por histórico",
      "Fluxo simples para operação",
    ],
    repoUrl: "https://github.com/carlosdaniel003/Central-de-Aprovacoes-CA",
    accent: "from-teal-300 to-sky-500",
    thumbnailUrl: "/images/projects/central-aprovacoes/thumb.jpg",
    coverUrl: "/images/projects/central-aprovacoes/cover.jpg",
    galleryUrls: [
      "/images/projects/central-aprovacoes/01.jpg",
      "/images/projects/central-aprovacoes/02.jpg",
    ],
  },
];

export const stackData = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Supabase",
  "Python",
  "OpenCV",
  "IA Aplicada",
  "PHP",
  "Tailwind CSS",
  "Recharts",
  "Git/GitHub",
];