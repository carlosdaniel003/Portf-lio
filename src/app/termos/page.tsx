// src\app\termos\page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import type { LucideIcon } from "lucide-react";

import {
  ArrowLeft,
  ArrowRight,
  Ban,
  BriefcaseBusiness,
  Check,
  Clock3,
  ExternalLink,
  FileCheck2,
  FileText,
  Globe2,
  Info,
  Link2,
  LockKeyhole,
  Mail,
  RefreshCw,
  Scale,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de Uso do portfólio profissional de Carlos Daniel.",
};

type TermsSection = {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  icon: LucideIcon;
  content: ReactNode;
};

const termsSections: TermsSection[] = [
  {
    id: "identificacao",
    number: "01",
    title: "Identificação e finalidade",
    eyebrow: "Natureza do site",
    icon: BriefcaseBusiness,
    content: (
      <p>
        Este site pertence a Carlos Daniel, desenvolvedor independente, e tem
        finalidade informativa, profissional e comercial. O conteúdo apresenta
        experiências, competências, projetos e serviços que podem ser discutidos
        por meio dos canais de contato.
      </p>
    ),
  },
  {
    id: "contratacao",
    number: "02",
    title: "Contato não representa contratação",
    eyebrow: "Relação comercial",
    icon: FileCheck2,
    content: (
      <p>
        O envio de uma mensagem, pedido de orçamento ou conversa inicial não
        cria obrigação de contratação. Escopo, prazo, preço, responsabilidades,
        propriedade intelectual e demais condições deverão constar em proposta,
        contrato ou documento específico aceito pelas partes.
      </p>
    ),
  },
  {
    id: "demonstracoes",
    number: "03",
    title: "Conteúdo e projetos demonstrados",
    eyebrow: "Apresentação dos trabalhos",
    icon: Info,
    content: (
      <p>
        Imagens, nomes, indicadores, fluxos e dados apresentados em telas de
        projetos podem ser demonstrativos, anonimizados ou fictícios para
        preservar informações internas e dados de terceiros. Resultados futuros
        dependem do contexto, dos requisitos e da implementação de cada projeto.
      </p>
    ),
  },
  {
    id: "propriedade-intelectual",
    number: "04",
    title: "Propriedade intelectual",
    eyebrow: "Direitos sobre o conteúdo",
    icon: ShieldCheck,
    content: (
      <div className="grid gap-5">
        <p>
          Textos, identidade visual, organização do portfólio, imagens próprias
          e materiais originais são protegidos pela legislação aplicável.
          Repositórios públicos permanecem sujeitos às licenças e condições
          informadas em cada projeto.
        </p>

        <div
          className="
            grid gap-px
            overflow-hidden

            rounded-[1.4rem]
            border
            border-[color:var(--line)]

            bg-[color:var(--line-soft)]

            sm:grid-cols-3
          "
        >
          {[
            {
              label: "Permitido",
              text: "Acessar, consultar e compartilhar o link do portfólio.",
            },
            {
              label: "Condicionado",
              text: "Usar código público conforme a licença de cada repositório.",
            },
            {
              label: "Não permitido",
              text: "Copiar, revender ou apresentar o conteúdo como próprio.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="
                bg-[color:var(--panel)]
                p-4

                sm:p-5
              "
            >
              <p
                className="
                  font-mono
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[color:var(--accent)]
                "
              >
                {item.label}
              </p>

              <p
                className="
                  mt-2
                  text-xs
                  leading-6
                  text-[color:var(--muted)]
                "
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "uso-aceitavel",
    number: "05",
    title: "Uso aceitável",
    eyebrow: "Conduta esperada",
    icon: Ban,
    content: (
      <div className="grid gap-4">
        <p>
          Não é permitido utilizar o site, o formulário ou seus endpoints para
          atividades que comprometam sua segurança, disponibilidade ou o direito
          de terceiros.
        </p>

        <ul className="grid gap-3">
          {[
            "Spam, fraude ou envio automatizado abusivo.",
            "Tentativas de invasão, exploração ou interrupção do serviço.",
            "Engenharia reversa maliciosa ou coleta indevida de informações.",
            "Envio de conteúdo ilícito, ofensivo ou prejudicial.",
            "Qualquer ação que cause sobrecarga ou indisponibilidade.",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-3"
            >
              <span
                className="
                  mt-1.5
                  grid h-5 w-5
                  shrink-0
                  place-items-center

                  rounded-full
                  border
                  border-[color:var(--accent)]/35

                  bg-[color:var(--accent)]/10
                  text-[color:var(--accent)]
                "
              >
                <Check
                  size={11}
                  strokeWidth={2.6}
                />
              </span>

              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "disponibilidade",
    number: "06",
    title: "Disponibilidade e limitações",
    eyebrow: "Funcionamento do serviço",
    icon: RefreshCw,
    content: (
      <p>
        O site pode passar por atualizações, indisponibilidades ou mudanças sem
        aviso prévio. São adotadas medidas razoáveis de qualidade e segurança,
        mas não há garantia de funcionamento contínuo, ausência absoluta de
        falhas ou adequação automática a uma finalidade específica.
      </p>
    ),
  },
  {
    id: "links-externos",
    number: "07",
    title: "Links externos",
    eyebrow: "Serviços de terceiros",
    icon: Link2,
    content: (
      <p>
        Links para GitHub, LinkedIn, Instagram, WhatsApp e outros serviços
        direcionam para ambientes administrados por terceiros. O uso desses
        serviços está sujeito às políticas e condições de cada plataforma.
      </p>
    ),
  },
  {
    id: "privacidade",
    number: "08",
    title: "Privacidade",
    eyebrow: "Tratamento de dados",
    icon: LockKeyhole,
    content: (
      <p>
        O tratamento de dados pessoais relacionado ao formulário está descrito
        na{" "}
        <Link
          href="/privacidade"
          className="
            font-semibold
            text-[color:var(--accent)]
            underline
            decoration-[color:var(--accent)]/35
            underline-offset-4
            transition
            hover:decoration-[color:var(--accent)]
          "
        >
          Política de Privacidade
        </Link>
        .
      </p>
    ),
  },
  {
    id: "legislacao",
    number: "09",
    title: "Legislação e contato",
    eyebrow: "Regras aplicáveis",
    icon: Scale,
    content: (
      <p>
        Estes termos são interpretados de acordo com a legislação brasileira.
        Dúvidas podem ser enviadas para{" "}
        <a
          href="mailto:contato@carlosdaniel.dev.br"
          className="
            font-semibold
            text-[color:var(--accent)]
            underline
            decoration-[color:var(--accent)]/35
            underline-offset-4
            transition
            hover:decoration-[color:var(--accent)]
          "
        >
          contato@carlosdaniel.dev.br
        </a>
        .
      </p>
    ),
  },
];

const summaryItems = [
  {
    label: "Finalidade",
    value: "Portfólio profissional e comercial",
    icon: BriefcaseBusiness,
  },
  {
    label: "Contratação",
    value: "Somente mediante acordo específico",
    icon: FileCheck2,
  },
  {
    label: "Legislação",
    value: "Aplicação das normas brasileiras",
    icon: Scale,
  },
] as const;

export default function TermsPage() {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden

        bg-transparent
        px-5
        pb-24
        pt-28

        text-[color:var(--text)]

        sm:px-8
        sm:pb-28
        sm:pt-32

        lg:px-10
        lg:pb-36
      "
    >
      {/* =====================================================
          AMBIENTAÇÃO
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          soft-grid
          pointer-events-none
          absolute inset-0
          opacity-20
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[-16rem]
          top-[5rem]

          h-[40rem]
          w-[40rem]

          rounded-full
          bg-[color:var(--accent)]/[0.07]
          blur-[150px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-18rem]
          top-[42%]

          h-[44rem]
          w-[44rem]

          rounded-full
          bg-[color:var(--accent-2)]/[0.07]
          blur-[160px]
        "
      />

      <article
        className="
          relative z-10
          mx-auto
          w-full
          max-w-[1400px]
        "
      >
        {/* ===================================================
            NAVEGAÇÃO SUPERIOR
            =================================================== */}

        <div
          className="
            mb-8
            flex flex-col
            gap-4

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <Link
            href="/"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-3

              font-mono
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[color:var(--muted)]

              transition
              hover:text-[color:var(--accent)]
            "
          >
            <ArrowLeft
              size={15}
              strokeWidth={2.2}
              className="
                transition-transform
                group-hover:-translate-x-1
              "
            />

            Voltar ao portfólio
          </Link>

          <span
            className="
              font-mono
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[color:var(--subtle)]
            "
          >
            Legal document / Terms
          </span>
        </div>

        {/* ===================================================
            HERO
            =================================================== */}

        <header
          className="
            relative
            overflow-hidden

            rounded-[2.6rem]
            border
            border-[color:var(--line-strong)]

            bg-[color:var(--panel-strong)]
            p-7

            shadow-[0_34px_110px_var(--shadow-deep)]

            sm:p-10
            lg:p-14
          "
        >
          <div
            aria-hidden="true"
            className="
              soft-grid
              pointer-events-none
              absolute inset-0
              opacity-20
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-[-10rem]
              top-[-10rem]

              h-[30rem]
              w-[30rem]

              rounded-full
              bg-[color:var(--accent-2)]/10
              blur-[110px]
            "
          />

          <div
            aria-hidden="true"
            className="
              editorial-number
              absolute
              bottom-[-0.06em]
              right-[-0.03em]
            "
          >
            06
          </div>

          <div
            className="
              relative z-10

              grid gap-12

              lg:grid-cols-[minmax(0,1.08fr)_minmax(300px,0.55fr)]
              lg:items-end
            "
          >
            <div>
              <div
                className="
                  mb-7
                  flex items-center
                  gap-4
                "
              >
                <span
                  className="
                    grid h-12 w-12
                    place-items-center

                    rounded-[1rem]
                    border
                    border-[color:var(--accent)]/45

                    bg-[color:var(--accent)]/10
                    text-[color:var(--accent)]
                  "
                >
                  <FileText
                    size={23}
                    strokeWidth={1.9}
                  />
                </span>

                <div>
                  <p className="tech-label">
                    Condições de acesso e utilização
                  </p>

                  <p
                    className="
                      mt-1
                      font-mono
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[color:var(--subtle)]
                    "
                  >
                    Documento público / Versão atual
                  </p>
                </div>
              </div>

              <h1
                className="
                  max-w-[11ch]

                  font-display
                  text-[clamp(3.4rem,8vw,7.8rem)]
                  font-bold
                  leading-[0.84]
                  tracking-[-0.085em]
                  text-[color:var(--text)]
                "
              >
                Termos de
                <span className="block text-gradient">
                  Uso
                </span>
              </h1>

              <p
                className="
                  mt-8
                  max-w-3xl

                  text-base
                  leading-8
                  text-[color:var(--muted)]

                  sm:text-lg
                  sm:leading-9
                "
              >
                Estes termos regulam o acesso ao portfólio, às informações
                apresentadas e ao formulário de contato.
              </p>
            </div>

            <div
              className="
                border-t
                border-[color:var(--line)]

                pt-7

                lg:border-l
                lg:border-t-0
                lg:pl-9
                lg:pt-0
              "
            >
              <div className="flex items-start gap-4">
                <Clock3
                  size={18}
                  strokeWidth={1.9}
                  className="
                    mt-0.5
                    shrink-0
                    text-[color:var(--accent)]
                  "
                />

                <div>
                  <p
                    className="
                      font-mono
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.19em]
                      text-[color:var(--subtle)]
                    "
                  >
                    Última atualização
                  </p>

                  <time
                    dateTime="2026-06-18"
                    className="
                      mt-2 block
                      text-base
                      font-bold
                      text-[color:var(--text)]
                    "
                  >
                    18 de junho de 2026
                  </time>
                </div>
              </div>

              <div className="mt-7 flex items-start gap-4">
                <Globe2
                  size={18}
                  strokeWidth={1.9}
                  className="
                    mt-0.5
                    shrink-0
                    text-[color:var(--accent-2)]
                  "
                />

                <div>
                  <p
                    className="
                      font-mono
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.19em]
                      text-[color:var(--subtle)]
                    "
                  >
                    Aplicação
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-7
                      text-[color:var(--muted)]
                    "
                  >
                    Portfólio, conteúdo público, links externos e formulário de
                    contato.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ===================================================
            RESUMO
            =================================================== */}

        <div
          className="
            mt-6
            grid gap-px
            overflow-hidden

            rounded-[1.8rem]
            border
            border-[color:var(--line)]

            bg-[color:var(--line-soft)]

            md:grid-cols-3
          "
        >
          {summaryItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="
                  flex items-start
                  gap-4

                  bg-[color:var(--panel)]
                  p-5

                  sm:p-6
                "
              >
                <span
                  className="
                    grid h-10 w-10
                    shrink-0
                    place-items-center

                    rounded-[0.9rem]
                    border
                    border-[color:var(--line)]

                    bg-[color:var(--bg-deep)]/40
                    text-[color:var(--accent)]
                  "
                >
                  <Icon
                    size={17}
                    strokeWidth={1.9}
                  />
                </span>

                <div>
                  <p
                    className="
                      font-mono
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[color:var(--subtle)]
                    "
                  >
                    {item.label}
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      font-semibold
                      leading-6
                      text-[color:var(--text)]
                    "
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ===================================================
            SUMÁRIO E CONTEÚDO
            =================================================== */}

        <div
          className="
            mt-16
            grid gap-12

            lg:grid-cols-[260px_minmax(0,1fr)]
            lg:items-start
            lg:gap-16
          "
        >
          {/* Sumário */}
          <aside
            className="
              lg:sticky
              lg:top-28
            "
          >
            <p className="tech-label">
              Neste documento
            </p>

            <nav
              aria-label="Sumário dos Termos de Uso"
              className="
                mt-5
                divide-y
                divide-[color:var(--line-soft)]
                border-y
                border-[color:var(--line-soft)]
              "
            >
              {termsSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="
                    group
                    flex min-h-12
                    items-center
                    justify-between
                    gap-4

                    py-3

                    text-xs
                    font-semibold
                    leading-5
                    text-[color:var(--muted)]

                    transition
                    hover:pl-1
                    hover:text-[color:var(--text)]
                  "
                >
                  <span>{section.title}</span>

                  <span
                    className="
                      shrink-0
                      font-mono
                      text-[8px]
                      tracking-[0.15em]
                      text-[color:var(--subtle)]

                      transition
                      group-hover:text-[color:var(--accent)]
                    "
                  >
                    {section.number}
                  </span>
                </a>
              ))}
            </nav>

            <a
              href="mailto:contato@carlosdaniel.dev.br"
              className="
                group
                mt-6
                flex items-start
                gap-3

                rounded-[1.2rem]
                border
                border-[color:var(--line)]

                bg-[color:var(--panel)]
                p-4

                transition
                hover:border-[color:var(--accent)]
              "
            >
              <Mail
                size={17}
                strokeWidth={1.9}
                className="
                  mt-0.5
                  shrink-0
                  text-[color:var(--accent)]
                "
              />

              <span>
                <span
                  className="
                    block
                    font-mono
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.17em]
                    text-[color:var(--subtle)]
                  "
                >
                  Dúvidas sobre os termos
                </span>

                <span
                  className="
                    mt-2 block
                    break-all
                    text-xs
                    font-semibold
                    leading-5
                    text-[color:var(--text)]
                  "
                >
                  contato@carlosdaniel.dev.br
                </span>
              </span>
            </a>
          </aside>

          {/* Seções */}
          <div
            className="
              border-t
              border-[color:var(--line)]
            "
          >
            {termsSections.map((section) => {
              const Icon = section.icon;

              return (
                <section
                  key={section.id}
                  id={section.id}
                  className="
                    scroll-mt-32

                    grid gap-7

                    border-b
                    border-[color:var(--line)]

                    py-10

                    md:grid-cols-[88px_minmax(0,1fr)]
                    md:gap-10

                    lg:py-12
                  "
                >
                  <div>
                    <div
                      className="
                        grid h-14 w-14
                        place-items-center

                        rounded-[1.1rem]
                        border
                        border-[color:var(--line)]

                        bg-[color:var(--panel)]
                        text-[color:var(--accent)]
                      "
                    >
                      <Icon
                        size={22}
                        strokeWidth={1.85}
                      />
                    </div>

                    <span
                      className="
                        mt-4 block

                        font-display
                        text-3xl
                        font-bold
                        tracking-[-0.07em]
                      "
                      style={{
                        color:
                          "color-mix(in srgb, var(--text) 10%, transparent)",
                      }}
                    >
                      {section.number}
                    </span>
                  </div>

                  <div>
                    <p
                      className="
                        font-mono
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.19em]
                        text-[color:var(--accent)]
                      "
                    >
                      {section.eyebrow}
                    </p>

                    <h2
                      className="
                        mt-3

                        font-display
                        text-2xl
                        font-bold
                        tracking-[-0.045em]
                        text-[color:var(--text)]

                        sm:text-3xl
                      "
                    >
                      {section.title}
                    </h2>

                    <div
                      className="
                        mt-5
                        max-w-4xl

                        text-sm
                        leading-7
                        text-[color:var(--muted)]

                        sm:text-base
                        sm:leading-8
                      "
                    >
                      {section.content}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>

        {/* ===================================================
            FECHAMENTO
            =================================================== */}

        <div
          className="
            relative
            mt-16
            overflow-hidden

            rounded-[2.3rem]
            border
            border-[color:var(--line-strong)]

            bg-[color:var(--panel-strong)]
            p-7

            shadow-[0_28px_90px_var(--shadow-deep)]

            sm:p-10
            lg:p-12
          "
        >
          <div
            aria-hidden="true"
            className="
              soft-grid
              pointer-events-none
              absolute inset-0
              opacity-20
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-[-9rem]
              top-1/2

              h-[26rem]
              w-[26rem]

              -translate-y-1/2
              rounded-full

              bg-[color:var(--accent-2)]/10
              blur-[100px]
            "
          />

          <div
            className="
              relative z-10
              grid gap-8

              lg:grid-cols-[minmax(0,1fr)_auto]
              lg:items-end
            "
          >
            <div>
              <p className="tech-label">
                Navegação legal
              </p>

              <h2
                className="
                  mt-4
                  max-w-[15ch]

                  font-display
                  text-3xl
                  font-bold
                  leading-[1]
                  tracking-[-0.055em]
                  text-[color:var(--text)]

                  sm:text-4xl
                "
              >
                Regras claras para uma relação transparente.
              </h2>

              <p
                className="
                  mt-5
                  max-w-2xl

                  text-sm
                  leading-7
                  text-[color:var(--muted)]
                "
              >
                Consulte a Política de Privacidade para entender como os dados
                enviados pelo formulário são tratados.
              </p>
            </div>

            <div
              className="
                flex flex-col
                gap-3

                sm:flex-row
              "
            >
              <Link
                href="/"
                className="
                  primary-action
                  group
                "
              >
                <ArrowLeft
                  size={16}
                  strokeWidth={2.3}
                  className="
                    transition-transform
                    group-hover:-translate-x-1
                  "
                />

                Voltar ao portfólio
              </Link>

              <Link
                href="/privacidade"
                className="
                  secondary-action
                  group
                "
              >
                Política de Privacidade

                <ArrowRight
                  size={16}
                  strokeWidth={2.3}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
