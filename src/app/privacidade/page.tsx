// src/app/privacidade/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  Cookie,
  Database,
  FileText,
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
    "Política de Privacidade do portfólio profissional e formulário de contato de Carlos Daniel.",
};

const sections = [
  {
    number: "01",
    id: "responsavel",
    title: "Responsável pelo tratamento",
    icon: UserRound,
    content: (
      <p>
        O responsável por este portfólio e pelo tratamento dos dados enviados é
        Carlos Daniel. Solicitações podem ser encaminhadas para{" "}
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
  {
    number: "02",
    id: "dados",
    title: "Dados coletados",
    icon: Database,
    content: (
      <div className="grid gap-4">
        <p>
          Pelo formulário podem ser coletados nome, e-mail, empresa ou
          organização, assunto do contato e conteúdo da mensagem.
        </p>
        <p>
          Para segurança e prevenção de spam, a infraestrutura também pode
          processar endereço IP, data, horário, navegador, identificadores
          técnicos e o resultado da verificação do Cloudflare Turnstile.
        </p>
      </div>
    ),
  },
  {
    number: "03",
    id: "finalidades",
    title: "Finalidades do tratamento",
    icon: FileText,
    content: (
      <ul className="grid gap-3">
        {[
          "Responder a oportunidades profissionais e processos de recrutamento.",
          "Avaliar propostas de colaboração técnica ou acadêmica.",
          "Responder dúvidas sobre projetos, tecnologias e experiência profissional.",
          "Viabilizar networking e comunicação profissional.",
          "Prevenir spam, fraude, abuso e envios automatizados.",
          "Cumprir obrigações legais e proteger direitos quando necessário.",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-1.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-[color:var(--accent)]/35 bg-[color:var(--accent)]/10 text-[color:var(--accent)]">
              <Check size={11} strokeWidth={2.6} />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: "04",
    id: "fornecedores",
    title: "Serviços utilizados e compartilhamento",
    icon: ServerCog,
    content: (
      <div className="grid gap-5">
        <p>
          Os dados são compartilhados somente na medida necessária para o
          funcionamento do site e do formulário.
        </p>
        <div className="grid gap-px overflow-hidden rounded-[1.4rem] border border-[color:var(--line)] bg-[color:var(--line-soft)] sm:grid-cols-2">
          {[
            ["Vercel", "Hospedagem e execução do portfólio."],
            ["Cloudflare", "DNS, proteção de tráfego e Turnstile."],
            ["Resend", "Envio técnico das mensagens."],
            ["Google / Gmail", "Recebimento e resposta dos contatos."],
          ].map(([name, description]) => (
            <div key={name} className="bg-[color:var(--panel)] p-5">
              <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                {name}
              </p>
              <p className="mt-2 text-xs leading-6 text-[color:var(--muted)]">
                {description}
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
    number: "05",
    id: "retencao",
    title: "Retenção e exclusão",
    icon: Trash2,
    content: (
      <p>
        As mensagens poderão ser mantidas por até 12 meses após a última
        interação. Registros relacionados a processos seletivos, colaborações ou
        obrigações legais poderão ser preservados pelo período necessário para a
        finalidade correspondente ou para defesa de direitos.
      </p>
    ),
  },
  {
    number: "06",
    id: "cookies",
    title: "Cookies e tecnologias essenciais",
    icon: Cookie,
    content: (
      <p>
        O site pode utilizar cookies ou identificadores estritamente necessários
        para segurança, funcionamento, gerenciamento de tráfego e prevenção de
        bots. Esses dados não são utilizados para publicidade comportamental ou
        vendidos a terceiros.
      </p>
    ),
  },
  {
    number: "07",
    id: "seguranca",
    title: "Segurança",
    icon: LockKeyhole,
    content: (
      <p>
        São aplicadas conexão HTTPS, validação no servidor, limitação de campos,
        proteção antiautomação, variáveis de ambiente para segredos e
        fornecedores especializados. Nenhum sistema, contudo, pode garantir
        risco zero.
      </p>
    ),
  },
  {
    number: "08",
    id: "direitos",
    title: "Direitos do titular",
    icon: Scale,
    content: (
      <p>
        O titular pode solicitar confirmação de tratamento, acesso, correção,
        informações sobre compartilhamento, oposição ou exclusão quando
        aplicável pelo e-mail{" "}
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
  {
    number: "09",
    id: "atualizacoes",
    title: "Atualizações desta política",
    icon: RefreshCw,
    content: (
      <p>
        Esta política poderá ser atualizada para refletir mudanças no portfólio,
        no formulário ou nos fornecedores. A data da última atualização será
        mantida no início da página.
      </p>
    ),
  },
] as const;

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent px-5 pb-24 pt-28 text-[color:var(--text)] sm:px-8 sm:pb-28 sm:pt-32 lg:px-10 lg:pb-36">
      <div className="soft-grid pointer-events-none absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute left-[-15rem] top-[6rem] h-[38rem] w-[38rem] rounded-full bg-[color:var(--accent-2)]/[0.07] blur-[145px]" />
      <div className="pointer-events-none absolute right-[-17rem] top-[40%] h-[42rem] w-[42rem] rounded-full bg-[color:var(--accent)]/[0.075] blur-[155px]" />

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
            Legal document / Privacy
          </span>
        </div>

        <header className="relative overflow-hidden rounded-[2.6rem] border border-[color:var(--line-strong)] bg-[color:var(--panel-strong)] p-7 shadow-[0_34px_110px_var(--shadow-deep)] sm:p-10 lg:p-14">
          <div className="soft-grid pointer-events-none absolute inset-0 opacity-20" />
          <div className="editorial-number absolute bottom-[-0.06em] right-[-0.03em]">05</div>

          <div className="relative z-10 grid gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(300px,0.55fr)] lg:items-end">
            <div>
              <div className="mb-7 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-[1rem] border border-[color:var(--accent)]/45 bg-[color:var(--accent)]/10 text-[color:var(--accent)]">
                  <ShieldCheck size={23} strokeWidth={1.9} />
                </span>
                <p className="tech-label">Transparência e proteção de dados</p>
              </div>

              <h1 className="max-w-[12ch] font-display text-[clamp(3.4rem,8vw,7.8rem)] font-bold leading-[0.84] tracking-[-0.085em] text-[color:var(--text)]">
                Política de
                <span className="block text-gradient">Privacidade</span>
              </h1>

              <p className="mt-8 max-w-3xl text-base leading-8 text-[color:var(--muted)] sm:text-lg sm:leading-9">
                Esta política explica como os dados enviados pelo contato
                profissional são utilizados, protegidos e compartilhados com a
                infraestrutura necessária ao funcionamento do portfólio.
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
          <Link href="/termos" className="secondary-action group">
            Termos de Uso
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="mailto:contato@carlosdaniel.dev.br"
            className="secondary-action group"
          >
            <Mail size={16} />
            Solicitar informações
          </a>
        </div>
      </article>
    </main>
  );
}
