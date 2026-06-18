import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade do portfólio e formulário de contato de Carlos Daniel.",
};

const sectionClassName =
  "rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-6 sm:p-8";

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[color:var(--bg)] px-4 py-28 text-[color:var(--text)] sm:px-6">
      <div className="soft-grid pointer-events-none absolute inset-0 opacity-20" />

      <article className="relative z-10 mx-auto grid w-full max-w-4xl gap-5">
        <div className="glass-card rounded-[2.5rem] p-7 sm:p-10">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--accent)]">
            Transparência e proteção de dados
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
            Política de Privacidade
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-[color:var(--muted)]">
            Esta política explica como os dados enviados pelo formulário de
            contato são utilizados, protegidos e eventualmente compartilhados
            com fornecedores necessários ao funcionamento do site.
          </p>

          <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--muted)]">
            Última atualização: 18 de junho de 2026
          </p>
        </div>

        <section className={sectionClassName}>
          <h2 className="text-2xl font-black">1. Responsável pelo tratamento</h2>
          <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
            O responsável por este site e pelo tratamento dos dados enviados é
            Carlos Daniel, desenvolvedor independente, com contato pelo endereço
            eletrônico{" "}
            <a
              href="mailto:contato@carlosdaniel.dev.br"
              className="font-bold text-[color:var(--accent)]"
            >
              contato@carlosdaniel.dev.br
            </a>
            .
          </p>
        </section>

        <section className={sectionClassName}>
          <h2 className="text-2xl font-black">2. Dados coletados</h2>
          <div className="mt-4 grid gap-3 text-sm leading-7 text-[color:var(--muted)]">
            <p>
              Pelo formulário podem ser coletados nome, e-mail, empresa ou
              negócio, tipo de solução desejada e o conteúdo da mensagem.
            </p>
            <p>
              Para segurança, prevenção de spam e funcionamento técnico, a
              infraestrutura também pode processar endereço IP, data, horário,
              navegador, identificadores técnicos e o resultado da verificação
              do Cloudflare Turnstile.
            </p>
          </div>
        </section>

        <section className={sectionClassName}>
          <h2 className="text-2xl font-black">3. Finalidades do tratamento</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-7 text-[color:var(--muted)]">
            <li>• Responder ao contato e compreender a solicitação apresentada.</li>
            <li>• Avaliar a viabilidade de um projeto ou solução técnica.</li>
            <li>• Preparar conversas, estimativas ou propostas comerciais.</li>
            <li>• Prevenir spam, fraude, abuso e envios automatizados.</li>
            <li>• Cumprir obrigações legais e proteger direitos quando necessário.</li>
          </ul>
        </section>

        <section className={sectionClassName}>
          <h2 className="text-2xl font-black">
            4. Serviços utilizados e compartilhamento
          </h2>
          <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
            Os dados são compartilhados somente na medida necessária para o
            funcionamento do site e do formulário. Atualmente, podem participar
            desse processamento:
          </p>

          <ul className="mt-4 grid gap-3 text-sm leading-7 text-[color:var(--muted)]">
            <li>• Vercel, responsável pela hospedagem e execução do site.</li>
            <li>
              • Cloudflare, responsável por DNS, proteção de tráfego, Turnstile
              e roteamento de e-mail.
            </li>
            <li>• Resend, responsável pelo envio técnico da mensagem.</li>
            <li>
              • Google/Gmail, utilizado como caixa de recebimento das mensagens.
            </li>
          </ul>

          <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
            Esses fornecedores podem operar infraestrutura em outros países,
            observando suas próprias políticas, contratos e mecanismos de
            segurança.
          </p>
        </section>

        <section className={sectionClassName}>
          <h2 className="text-2xl font-black">5. Retenção e exclusão</h2>
          <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
            Contatos que não resultarem em prestação de serviço poderão ser
            mantidos por até 12 meses após a última interação. Quando houver
            contratação, determinados registros poderão ser preservados pelo
            período necessário ao cumprimento de obrigações legais,
            contratuais, fiscais ou à defesa de direitos.
          </p>
        </section>

        <section className={sectionClassName}>
          <h2 className="text-2xl font-black">6. Cookies e tecnologias essenciais</h2>
          <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
            O site pode utilizar cookies ou identificadores estritamente
            necessários para segurança, funcionamento, gerenciamento de tráfego
            e prevenção de bots. Atualmente, o formulário não utiliza esses
            dados para publicidade comportamental ou venda de informações.
          </p>
        </section>

        <section className={sectionClassName}>
          <h2 className="text-2xl font-black">7. Segurança</h2>
          <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
            São aplicadas medidas técnicas compatíveis com o porte do serviço,
            incluindo conexão HTTPS, validação no servidor, limitação de campos,
            proteção antiautomação, variáveis de ambiente para segredos e
            fornecedores especializados. Nenhum sistema, contudo, pode garantir
            risco zero.
          </p>
        </section>

        <section className={sectionClassName}>
          <h2 className="text-2xl font-black">8. Direitos do titular</h2>
          <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
            O titular pode solicitar confirmação de tratamento, acesso,
            correção, informações sobre compartilhamento, oposição ou exclusão
            quando aplicável. As solicitações devem ser encaminhadas para{" "}
            <a
              href="mailto:contato@carlosdaniel.dev.br"
              className="font-bold text-[color:var(--accent)]"
            >
              contato@carlosdaniel.dev.br
            </a>
            .
          </p>
        </section>

        <section className={sectionClassName}>
          <h2 className="text-2xl font-black">9. Atualizações desta política</h2>
          <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
            Esta política poderá ser atualizada para refletir mudanças no site,
            nos fornecedores ou nas práticas de tratamento. A data da última
            atualização será mantida no início da página.
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
            href="/termos"
            className="rounded-full border border-[color:var(--line)] bg-[color:var(--panel-strong)] px-6 py-3 text-sm font-black uppercase tracking-[0.14em]"
          >
            Ver Termos de Uso
          </Link>
        </div>
      </article>
    </main>
  );
}
