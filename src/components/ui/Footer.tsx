import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[color:var(--line)] bg-[color:var(--bg)] text-[color:var(--text)]">
      <div className="portfolio-container py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-lg font-black tracking-[-0.03em]">
              Carlos Daniel
            </p>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[color:var(--muted)]">
              Desenvolvedor independente em Manaus, Amazonas, com atendimento
              local e remoto para sistemas, dashboards, automações, inteligência
              artificial, visão computacional e presença digital.
            </p>

            <a
              href="mailto:contato@carlosdaniel.dev.br"
              className="mt-4 inline-flex text-sm font-bold text-[color:var(--accent)] transition hover:opacity-80"
            >
              contato@carlosdaniel.dev.br
            </a>
          </div>

          <nav
            aria-label="Links legais"
            className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-[color:var(--muted)]"
          >
            <Link
              href="/privacidade"
              className="transition hover:text-[color:var(--accent)]"
            >
              Política de Privacidade
            </Link>

            <Link
              href="/termos"
              className="transition hover:text-[color:var(--accent)]"
            >
              Termos de Uso
            </Link>

            <Link
              href="/#contato"
              className="transition hover:text-[color:var(--accent)]"
            >
              Contato
            </Link>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[color:var(--line)] pt-6 text-xs leading-5 text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Carlos Daniel. Todos os direitos reservados.</p>

          <p className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[color:var(--accent)] shadow-[0_0_12px_var(--accent)]" />
            Formulário protegido pelo Cloudflare Turnstile.
          </p>
        </div>
      </div>
    </footer>
  );
}
