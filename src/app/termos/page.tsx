import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de Uso do portfólio profissional de Carlos Daniel.",
};

const sectionClassName =
  "rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-6 sm:p-8";

export default function TermsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[color:var(--bg)] px-4 py-28 text-[color:var(--text)] sm:px-6">
      <div className="soft-grid pointer-events-none absolute inset-0 opacity-20" />

      <article className="relative z-10 mx-auto grid w-full max-w-4xl gap-5">
        <div className="glass-card rounded-[2.5rem] p-7 sm:p-10">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--accent)]">
            Condições de acesso e utilização
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
            Termos de Uso
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-[color:var(--muted)]">
            Estes termos regulam o acesso ao portfólio, às informações
            apresentadas e ao formulário de contato.
          </p>

          <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--muted)]">
            Última atualização: 18 de junho de 2026
          </p>
        </div>

        <section className={sectionClassName}>
          <h2 className="text-2xl font-black">1. Identificação e finalidade</h2>
          <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
            Este site pertence a Carlos Daniel, desenvolvedor independente, e
            tem finalidade informativa, profissional e comercial. O conteúdo
            apresenta experiências, competências, projetos e serviços que podem
            ser discutidos por meio dos canais de contato.
          </p>
        </section>

        <section className={sectionClassName}>
          <h2 className="text-2xl font-black">2. Contato não representa contratação</h2>
          <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
            O envio de uma mensagem, pedido de orçamento ou conversa inicial não
            cria obrigação de contratação. Escopo, prazo, preço, responsabilidades,
            propriedade intelectual e demais condições deverão constar em
            proposta, contrato ou documento específico aceito pelas partes.
          </p>
        </section>

        <section className={sectionClassName}>
          <h2 className="text-2xl font-black">3. Conteúdo e projetos demonstrados</h2>
          <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
            Imagens, nomes, indicadores, fluxos e dados apresentados em telas de
            projetos podem ser demonstrativos, anonimizados ou fictícios para
            preservar informações internas e dados de terceiros. Resultados
            futuros dependem do contexto, dos requisitos e da implementação de
            cada projeto.
          </p>
        </section>

        <section className={sectionClassName}>
          <h2 className="text-2xl font-black">4. Propriedade intelectual</h2>
          <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
            Textos, identidade visual, organização do portfólio, imagens
            próprias e materiais originais são protegidos pela legislação
            aplicável. Repositórios públicos permanecem sujeitos às licenças e
            condições informadas em cada projeto. O acesso ao site não concede
            autorização para copiar, revender ou apresentar o conteúdo como
            próprio.
          </p>
        </section>

        <section className={sectionClassName}>
          <h2 className="text-2xl font-black">5. Uso aceitável</h2>
          <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
            Não é permitido utilizar o site, o formulário ou seus endpoints para
            spam, fraude, automação abusiva, tentativa de invasão, engenharia
            reversa maliciosa, envio de conteúdo ilícito ou qualquer atividade
            que prejudique a disponibilidade, a segurança ou terceiros.
          </p>
        </section>

        <section className={sectionClassName}>
          <h2 className="text-2xl font-black">6. Disponibilidade e limitações</h2>
          <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
            O site pode passar por atualizações, indisponibilidades ou mudanças
            sem aviso prévio. São adotadas medidas razoáveis de qualidade e
            segurança, mas não há garantia de funcionamento contínuo, ausência
            absoluta de falhas ou adequação automática a uma finalidade
            específica.
          </p>
        </section>

        <section className={sectionClassName}>
          <h2 className="text-2xl font-black">7. Links externos</h2>
          <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
            Links para GitHub, LinkedIn, Instagram, WhatsApp e outros serviços
            direcionam para ambientes administrados por terceiros. O uso desses
            serviços está sujeito às políticas e condições de cada plataforma.
          </p>
        </section>

        <section className={sectionClassName}>
          <h2 className="text-2xl font-black">8. Privacidade</h2>
          <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
            O tratamento de dados pessoais relacionado ao formulário está
            descrito na{" "}
            <Link
              href="/privacidade"
              className="font-bold text-[color:var(--accent)]"
            >
              Política de Privacidade
            </Link>
            .
          </p>
        </section>

        <section className={sectionClassName}>
          <h2 className="text-2xl font-black">9. Legislação e contato</h2>
          <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
            Estes termos são interpretados de acordo com a legislação
            brasileira. Dúvidas podem ser enviadas para{" "}
            <a
              href="mailto:contato@carlosdaniel.dev.br"
              className="font-bold text-[color:var(--accent)]"
            >
              contato@carlosdaniel.dev.br
            </a>
            .
          </p>
        </section>

        <div className="flex flex-wrap gap-3 pt-3">
          <Link
            href="/"
            className="rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-[#04110d]"
          >
            Voltar ao portfólio
          </Link>

          <Link
            href="/privacidade"
            className="rounded-full border border-[color:var(--line)] bg-[color:var(--panel-strong)] px-6 py-3 text-sm font-black uppercase tracking-[0.14em]"
          >
            Ver Política de Privacidade
          </Link>
        </div>
      </article>
    </main>
  );
}
