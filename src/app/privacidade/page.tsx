// src\app\privacidade\page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import type { LucideIcon } from "lucide-react";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  Cookie,
  Database,
  FileText,
  Globe2,
  LockKeyhole,
  Mail,
  RefreshCw,
  Scale,
  ServerCog,
  ShieldCheck,
  Trash2,
  UserRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade do portfólio e formulário de contato de Carlos Daniel.",
};

type PrivacySection = {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  icon: LucideIcon;
  content: ReactNode;
};

const privacySections: PrivacySection[] = [
  {
    id: "responsavel",
    number: "01",
    title: "Responsável pelo tratamento",
    eyebrow: "Controlador dos dados",
    icon: UserRound,
    content: (
      <p>
        O responsável por este site e pelo tratamento dos dados enviados é
        Carlos Daniel, desenvolvedor independente, com contato pelo endereço
        eletrônico{" "}
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
  {
    id: "dados-coletados",
    number: "02",
    title: "Dados coletados",
    eyebrow: "Informações processadas",
    icon: Database,
    content: (
      <div className="grid gap-4">
        <p>
          Pelo formulário podem ser coletados nome, e-mail, empresa ou negócio,
          tipo de solução desejada e o conteúdo da mensagem.
        </p>

        <p>
          Para segurança, prevenção de spam e funcionamento técnico, a
          infraestrutura também pode processar endereço IP, data, horário,
          navegador, identificadores técnicos e o resultado da verificação do
          Cloudflare Turnstile.
        </p>
      </div>
    ),
  },
  {
    id: "finalidades",
    number: "03",
    title: "Finalidades do tratamento",
    eyebrow: "Motivos de utilização",
    icon: FileText,
    content: (
      <ul className="grid gap-3">
        {[
          "Responder ao contato e compreender a solicitação apresentada.",
          "Avaliar a viabilidade de um projeto ou solução técnica.",
          "Preparar conversas, estimativas ou propostas comerciais.",
          "Prevenir spam, fraude, abuso e envios automatizados.",
          "Cumprir obrigações legais e proteger direitos quando necessário.",
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
    ),
  },
  {
    id: "servicos",
    number: "04",
    title: "Serviços utilizados e compartilhamento",
    eyebrow: "Fornecedores essenciais",
    icon: ServerCog,
    content: (
      <div className="grid gap-5">
        <p>
          Os dados são compartilhados somente na medida necessária para o
          funcionamento do site e do formulário. Atualmente, podem participar
          desse processamento:
        </p>

        <div
          className="
            grid gap-px
            overflow-hidden

            rounded-[1.4rem]
            border
            border-[color:var(--line)]

            bg-[color:var(--line-soft)]

            sm:grid-cols-2
          "
        >
          {[
            {
              name: "Vercel",
              description:
                "Hospedagem, publicação e execução técnica do site.",
            },
            {
              name: "Cloudflare",
              description:
                "DNS, proteção de tráfego, Turnstile e roteamento de e-mail.",
            },
            {
              name: "Resend",
              description:
                "Envio técnico das mensagens submetidas pelo formulário.",
            },
            {
              name: "Google / Gmail",
              description:
                "Caixa utilizada para recebimento e resposta das mensagens.",
            },
          ].map((provider) => (
            <div
              key={provider.name}
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
                {provider.name}
              </p>

              <p
                className="
                  mt-2
                  text-xs
                  leading-6
                  text-[color:var(--muted)]
                "
              >
                {provider.description}
              </p>
            </div>
          ))}
        </div>

        <p>
          Esses fornecedores podem operar infraestrutura em outros países,
          observando suas próprias políticas, contratos e mecanismos de
          segurança.
        </p>
      </div>
    ),
  },
  {
    id: "retencao",
    number: "05",
    title: "Retenção e exclusão",
    eyebrow: "Prazo de armazenamento",
    icon: Trash2,
    content: (
      <p>
        Contatos que não resultarem em prestação de serviço poderão ser
        mantidos por até 12 meses após a última interação. Quando houver
        contratação, determinados registros poderão ser preservados pelo
        período necessário ao cumprimento de obrigações legais, contratuais,
        fiscais ou à defesa de direitos.
      </p>
    ),
  },
  {
    id: "cookies",
    number: "06",
    title: "Cookies e tecnologias essenciais",
    eyebrow: "Funcionamento do site",
    icon: Cookie,
    content: (
      <p>
        O site pode utilizar cookies ou identificadores estritamente
        necessários para segurança, funcionamento, gerenciamento de tráfego e
        prevenção de bots. Atualmente, o formulário não utiliza esses dados
        para publicidade comportamental ou venda de informações.
      </p>
    ),
  },
  {
    id: "seguranca",
    number: "07",
    title: "Segurança",
    eyebrow: "Proteção técnica",
    icon: LockKeyhole,
    content: (
      <p>
        São aplicadas medidas técnicas compatíveis com o porte do serviço,
        incluindo conexão HTTPS, validação no servidor, limitação de campos,
        proteção antiautomação, variáveis de ambiente para segredos e
        fornecedores especializados. Nenhum sistema, contudo, pode garantir
        risco zero.
      </p>
    ),
  },
  {
    id: "direitos",
    number: "08",
    title: "Direitos do titular",
    eyebrow: "Controle sobre os dados",
    icon: Scale,
    content: (
      <p>
        O titular pode solicitar confirmação de tratamento, acesso, correção,
        informações sobre compartilhamento, oposição ou exclusão quando
        aplicável. As solicitações devem ser encaminhadas para{" "}
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
  {
    id: "atualizacoes",
    number: "09",
    title: "Atualizações desta política",
    eyebrow: "Revisões futuras",
    icon: RefreshCw,
    content: (
      <p>
        Esta política poderá ser atualizada para refletir mudanças no site, nos
        fornecedores ou nas práticas de tratamento. A data da última
        atualização será mantida no início da página.
      </p>
    ),
  },
];

const summaryItems = [
  {
    label: "Dados principais",
    value: "Contato e contexto da solicitação",
    icon: Database,
  },
  {
    label: "Finalidade",
    value: "Responder e avaliar o projeto",
    icon: FileText,
  },
  {
    label: "Retenção geral",
    value: "Até 12 meses sem contratação",
    icon: Clock3,
  },
] as const;

export default function PrivacyPage() {
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
          left-[-15rem]
          top-[6rem]

          h-[38rem]
          w-[38rem]

          rounded-full
          bg-[color:var(--accent-2)]/[0.07]
          blur-[145px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-17rem]
          top-[40%]

          h-[42rem]
          w-[42rem]

          rounded-full
          bg-[color:var(--accent)]/[0.075]
          blur-[155px]
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
            Legal document / Privacy
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
              bg-[color:var(--accent)]/10
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
            05
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
                  <ShieldCheck
                    size={23}
                    strokeWidth={1.9}
                  />
                </span>

                <div>
                  <p className="tech-label">
                    Transparência e proteção de dados
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
                  max-w-[12ch]

                  font-display
                  text-[clamp(3.4rem,8vw,7.8rem)]
                  font-bold
                  leading-[0.84]
                  tracking-[-0.085em]
                  text-[color:var(--text)]
                "
              >
                Política de
                <span className="block text-gradient">
                  Privacidade
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
                Esta política explica como os dados enviados pelo formulário
                de contato são utilizados, protegidos e eventualmente
                compartilhados com fornecedores necessários ao funcionamento
                do site.
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
              <div
                className="
                  flex items-start
                  gap-4
                "
              >
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

              <div
                className="
                  mt-7
                  flex items-start
                  gap-4
                "
              >
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
                    Portfólio, formulário de contato e infraestrutura associada.
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
              aria-label="Sumário da Política de Privacidade"
              className="
                mt-5
                divide-y
                divide-[color:var(--line-soft)]
                border-y
                border-[color:var(--line-soft)]
              "
            >
              {privacySections.map((section) => (
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
                  Dúvidas ou solicitações
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
            {privacySections.map((section) => {
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

              bg-[color:var(--accent)]/10
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
                Transparência faz parte da experiência.
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
                Consulte também os Termos de Uso ou retorne ao portfólio para
                continuar navegando pelos projetos e soluções.
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
                href="/termos"
                className="
                  secondary-action
                  group
                "
              >
                Termos de Uso

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
