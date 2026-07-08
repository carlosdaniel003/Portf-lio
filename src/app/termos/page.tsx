// src/app/termos/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  Ban,
  BriefcaseBusiness,
  Check,
  Clock3,
  FileCheck2,
  FileText,
  Globe2,
  Info,
  Link2,
  LockKeyhole,
  Mail,
  Scale,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de Uso do portfólio profissional de Carlos Daniel.",
};

const demosUrl =
  "https://demos.carlosdaniel.dev.br";

const sections = [
  {
    number: "01",
    id: "finalidade",
    title: "Identificação e finalidade",
    icon: BriefcaseBusiness,
    content: (
      <p>
        Este site pertence a Carlos Daniel e funciona como portfólio profissional.
        O conteúdo apresenta perfil, formação, experiências, projetos,
        tecnologias e canais de contato profissional.
      </p>
    ),
  },
  {
    number: "02",
    id: "contato",
    title: "Contato e relações profissionais",
    icon: FileCheck2,
    content: (
      <p>
        O envio de uma mensagem não cria vínculo empregatício, contratual,
        societário ou obrigação de colaboração. Qualquer relação futura dependerá
        de conversa, proposta, contrato ou documento específico aceito pelas
        partes.
      </p>
    ),
  },
  {
    number: "03",
    id: "projetos",
    title: "Conteúdo e projetos demonstrados",
    icon: Info,
    content: (
      <p>
        Imagens, nomes, indicadores, fluxos e dados apresentados nos projetos
        podem ser demonstrativos, anonimizados ou fictícios para preservar
        informações internas e dados de terceiros. Resultados futuros dependem
        do contexto, dos requisitos e da implementação de cada solução.
      </p>
    ),
  },
  {
    number: "04",
    id: "propriedade",
    title: "Propriedade intelectual",
    icon: ShieldCheck,
    content: (
      <div className="grid gap-5">
        <p>
          Textos, identidade visual, organização do portfólio, imagens próprias e
          materiais originais são protegidos pela legislação aplicável.
          Repositórios públicos permanecem sujeitos às licenças informadas em cada
          projeto.
        </p>

        <div className="grid gap-px overflow-hidden rounded-[1.4rem] border border-[color:var(--line)] bg-[color:var(--line-soft)] sm:grid-cols-3">
          {[
            ["Permitido", "Acessar, consultar e compartilhar o link do portfólio."],
            ["Condicionado", "Utilizar código público conforme a licença do repositório."],
            ["Não permitido", "Copiar, revender ou apresentar o conteúdo como próprio."],
          ].map(([label, text]) => (
            <div key={label} className="bg-[color:var(--panel)] p-5">
              <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                {label}
              </p>
              <p className="mt-2 text-xs leading-6 text-[color:var(--muted)]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "05",
    id: "uso",
    title: "Uso aceitável",
    icon: Ban,
    content: (
      <div className="grid gap-4">
        <p>
          Não é permitido utilizar o site, formulário ou endpoints para ações que
          comprometam segurança, disponibilidade ou direitos de terceiros.
        </p>
        <ul className="grid gap-3">
          {[
            "Spam, fraude ou envio automatizado abusivo.",
            "Tentativas de invasão, exploração ou interrupção do serviço.",
            "Coleta indevida de informações ou engenharia reversa maliciosa.",
            "Envio de conteúdo ilícito, ofensivo ou prejudicial.",
            "Ações que provoquem sobrecarga ou indisponibilidade.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-[color:var(--accent)]/35 bg-[color:var(--accent)]/10 text-[color:var(--accent)]">
                <Check size={11} strokeWidth={2.6} />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    number: "06",
    id: "disponibilidade",
    title: "Disponibilidade e limitações",
    icon: FileText,
    content: (
      <p>
        O portfólio pode passar por atualizações, indisponibilidades ou mudanças
        sem aviso prévio. São adotadas medidas razoáveis de qualidade e segurança,
        mas não há garantia de funcionamento contínuo ou ausência absoluta de
        falhas.
      </p>
    ),
  },
  {
    number: "07",
    id: "links",
    title: "Links externos",
    icon: Link2,
    content: (
      <p>
        Links para GitHub, LinkedIn, Instagram, WhatsApp, repositórios,
        demonstrações e outros serviços direcionam para ambientes administrados
        por terceiros. O uso desses serviços está sujeito às políticas de cada
        plataforma.
      </p>
    ),
  },
  {
    number: "08",
    id: "servicos-web",
    title: "Websites e landing pages",
    icon: Globe2,
    content: (
      <p>
        Os serviços comerciais de criação de websites e landing pages são
        apresentados separadamente em{" "}
        <a
          href={demosUrl}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-[color:var(--accent)] underline decoration-[color:var(--accent)]/35 underline-offset-4"
        >
          demos.carlosdaniel.dev.br
        </a>
        . Planos, preços, escopo e condições comerciais devem ser consultados
        naquele ambiente e em eventual proposta específica.
      </p>
    ),
  },
  {
    number: "09",
    id: "privacidade",
    title: "Privacidade",
    icon: LockKeyhole,
    content: (
      <p>
        O tratamento dos dados enviados pelo contato profissional está descrito
        na{" "}
        <Link
          href="/privacidade"
          className="font-semibold text-[color:var(--accent)] underline decoration-[color:var(--accent)]/35 underline-offset-4"
        >
          Política de Privacidade
        </Link>
        .
      </p>
    ),
  },
  {
    number: "10",
    id: "legislacao",
    title: "Legislação e contato",
    icon: Scale,
    content: (
      <p>
        Estes termos são interpretados de acordo com a legislação brasileira.
        Dúvidas podem ser enviadas para{" "}
        <a
          href="mailto:contato@carlosdaniel.dev.br"
          className="font-semibold text-[color:var(--accent)] underline decoration-[color:var(--accent)]/35 underline-offset-4"
        >
          contato@carlosdaniel.dev.br
        </a>
        .
      </p>
    ),
  },
] as const;

export default function TermsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent px-5 pb-24 pt-28 text-[color:var(--text)] sm:px-8 sm:pb-28 sm:pt-32 lg:px-10 lg:pb-36">
      <div className="soft-grid pointer-events-none absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute left-[-16rem] top-[5rem] h-[40rem] w-[40rem] rounded-full bg-[color:var(--accent)]/[0.07] blur-[150px]" />
      <div className="pointer-events-none absolute right-[-18rem] top-[42%] h-[44rem] w-[44rem] rounded-full bg-[color:var(--accent-2)]/[0.07] blur-[160px]" />

      <article className="relative z-10 mx-auto w-full max-w-[1400px]">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="group inline-flex w-fit items-center gap-3 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)] transition hover:text-[color:var(--accent)]"
          >
            <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />
            Voltar ao portfólio
          </Link>
          <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-[color:var(--subtle)]">
            Legal document / Terms
          </span>
        </div>

        <header className="relative overflow-hidden rounded-[2.6rem] border border-[color:var(--line-strong)] bg-[color:var(--panel-strong)] p-7 shadow-[0_34px_110px_var(--shadow-deep)] sm:p-10 lg:p-14">
          <div className="soft-grid pointer-events-none absolute inset-0 opacity-20" />
          <div className="editorial-number absolute bottom-[-0.06em] right-[-0.03em]">06</div>

          <div className="relative z-10 grid gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(300px,0.55fr)] lg:items-end">
            <div>
              <div className="mb-7 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-[1rem] border border-[color:var(--accent)]/45 bg-[color:var(--accent)]/10 text-[color:var(--accent)]">
                  <FileText size={23} strokeWidth={1.9} />
                </span>
                <p className="tech-label">Condições de acesso e utilização</p>
              </div>

              <h1 className="max-w-[11ch] font-display text-[clamp(3.4rem,8vw,7.8rem)] font-bold leading-[0.84] tracking-[-0.085em] text-[color:var(--text)]">
                Termos de
                <span className="block text-gradient">Uso</span>
              </h1>

              <p className="mt-8 max-w-3xl text-base leading-8 text-[color:var(--muted)] sm:text-lg sm:leading-9">
                Estes termos regulam o acesso ao portfólio profissional, aos
                projetos, às informações apresentadas e ao formulário de contato.
              </p>
            </div>

            <div className="border-t border-[color:var(--line)] pt-7 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0">
              <div className="flex items-start gap-4">
                <Clock3 size={18} className="mt-0.5 text-[color:var(--accent)]" />
                <div>
                  <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.19em] text-[color:var(--subtle)]">
                    Última atualização
                  </p>
                  <time dateTime="2026-07-08" className="mt-2 block text-base font-bold">
                    8 de julho de 2026
                  </time>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="mt-16 grid gap-12 lg:grid-cols-[250px_minmax(0,1fr)] lg:items-start lg:gap-16">
          <aside className="lg:sticky lg:top-28">
            <p className="tech-label">Neste documento</p>
            <nav className="mt-5 divide-y divide-[color:var(--line-soft)] border-y border-[color:var(--line-soft)]">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="group flex min-h-12 items-center justify-between gap-4 py-3 text-xs font-semibold leading-5 text-[color:var(--muted)] transition hover:pl-1 hover:text-[color:var(--text)]"
                >
                  <span>{section.title}</span>
                  <span className="font-mono text-[8px] text-[color:var(--accent)]">
                    {section.number}
                  </span>
                </a>
              ))}
            </nav>
          </aside>

          <div className="border-t border-[color:var(--line)]">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-32 grid gap-7 border-b border-[color:var(--line)] py-10 md:grid-cols-[88px_minmax(0,1fr)] md:gap-10 lg:py-12"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-[1.1rem] border border-[color:var(--line)] bg-[color:var(--panel)] text-[color:var(--accent)]">
                    <Icon size={22} strokeWidth={1.85} />
                  </div>
                  <div>
                    <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.19em] text-[color:var(--accent)]">
                      Seção / {section.number}
                    </p>
                    <h2 className="mt-3 font-display text-2xl font-bold tracking-[-0.045em] sm:text-3xl">
                      {section.title}
                    </h2>
                    <div className="mt-5 max-w-4xl text-sm leading-7 text-[color:var(--muted)] sm:text-base sm:leading-8">
                      {section.content}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="primary-action group">
            <ArrowLeft size={16} />
            Voltar ao portfólio
          </Link>
          <Link href="/privacidade" className="secondary-action group">
            Política de Privacidade
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="mailto:contato@carlosdaniel.dev.br"
            className="secondary-action group"
          >
            <Mail size={16} />
            Enviar dúvida
          </a>
        </div>
      </article>
    </main>
  );
}
