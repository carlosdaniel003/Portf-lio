import ThemeToggle from "@/components/ui/ThemeToggle";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Projetos", href: "#projetos" },
  { label: "Stack", href: "#stack" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[color:var(--line)] bg-[color:var(--bg)]/75 backdrop-blur-2xl">
      <div className="portfolio-container flex h-16 items-center justify-between gap-5">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Ir para o início">
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] font-black text-[color:var(--accent)]">
            CD
          </span>
          <span className="hidden leading-tight sm:block">
            <strong className="block text-sm font-black tracking-tight text-[color:var(--text)]">
              Carlos Daniel
            </strong>
            <span className="block text-xs text-[color:var(--muted)]">
              Full Stack & Industrial Systems
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] p-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--muted)] transition hover:bg-[color:var(--panel-strong)] hover:text-[color:var(--text)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="https://github.com/carlosdaniel003"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--text)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)] lg:inline-flex"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
