import type {
  CommercialService,
  ServiceProcessStep,
} from "@/core/types";

export const commercialServices: CommercialService[] = [
  {
    id: "sistemas-gestao",
    title: "Sistemas de Gestão Sob Medida",
    description:
      "Transformo planilhas, papéis e controles dispersos em sistemas web organizados, rastreáveis e adaptados ao processo da empresa.",
    deliverables: [
      "Login e permissões",
      "Banco de dados",
      "Cadastros e históricos",
      "Relatórios e rastreabilidade",
    ],
    tags: ["Gestão", "Full Stack", "RBAC", "Dados"],
  },
  {
    id: "dashboards",
    title: "Dashboards e Controle Operacional",
    description:
      "Organizo dados de produção, qualidade, manutenção, estoque ou vendas em indicadores visuais para acompanhamento e tomada de decisão.",
    deliverables: [
      "Indicadores personalizados",
      "Filtros e análises",
      "Relatórios automáticos",
      "Acompanhamento de metas",
    ],
    tags: ["Dashboards", "KPIs", "Relatórios", "Análise"],
  },
  {
    id: "visao-computacional",
    title: "Visão Computacional e AOI",
    description:
      "Desenvolvo soluções com câmeras e processamento de imagens para inspeção automática, comparação de padrões e classificação OK/NG.",
    deliverables: [
      "Inspeção visual automática",
      "Classificação OK/NG",
      "Comparação com referência",
      "Integração com câmeras",
    ],
    tags: ["Python", "OpenCV", "AOI", "Inspeção"],
  },
  {
    id: "presenca-digital",
    title: "Landing Pages e Presença Digital",
    description:
      "Crio páginas profissionais e responsivas para apresentar serviços, captar contatos e fortalecer a presença digital de empresas e profissionais.",
    deliverables: [
      "Design responsivo",
      "Integração com WhatsApp",
      "Formulários de contato",
      "Domínio e publicação",
    ],
    tags: ["Landing Page", "SEO", "WhatsApp", "Conversão"],
  },
];

export const aiApplications = [
  "Consulta inteligente de dados",
  "Diagnóstico assistido",
  "Classificação automática",
  "Geração de relatórios",
  "Análise de documentos",
  "Detecção de padrões",
  "Visão computacional",
  "Automação de tarefas",
];

export const serviceProcess: ServiceProcessStep[] = [
  {
    number: "01",
    title: "Entendimento",
    description:
      "Conversamos sobre o processo atual, o problema e o resultado esperado.",
  },
  {
    number: "02",
    title: "Proposta",
    description:
      "Defino a solução, o escopo, as etapas e a forma de desenvolvimento.",
  },
  {
    number: "03",
    title: "Protótipo",
    description:
      "A ideia é validada visualmente antes da construção completa.",
  },
  {
    number: "04",
    title: "Entrega",
    description:
      "A solução é desenvolvida, testada, publicada e preparada para uso.",
  },
];