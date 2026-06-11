import ThemeToggle from "@/components/ui/ThemeToggle";
import { Folder, Github, Home, Mail, User } from "lucide-react";

const links = [
  {
    label: "Início",
    href: "#inicio",
    icon: Home,
  },
  {
    label: "Sobre",
    href: "#sobre",
    icon: User,
  },
  {
    label: "Projetos",
    href: "#projetos",
    icon: Folder,
  },
  {
    label: "Contato",
    href: "#contato",
    icon: Mail,
  },
];

export default function Header() {
  return (
    <header className="fixed left-4 top-1/2 z-50 -translate-y-1/2">
      <nav
        aria-label="Menu principal"
        className="flex flex-col items-center gap-3 rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] p-2 shadow-2xl backdrop-blur-2xl"
      >
        <a
          href="#inicio"
          aria-label="Carlos Daniel - início"
          className="group relative grid h-11 w-11 place-items-center rounded-full border border-[color:var(--line)] bg-[color:var(--panel-strong)] font-black text-[color:var(--accent)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)]"
        >
          CD

          <span className="pointer-events-none absolute left-14 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-[color:var(--line)] bg-[color:var(--panel-strong)] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--text)] opacity-0 shadow-xl backdrop-blur-xl transition group-hover:opacity-100 lg:block">
            Carlos Daniel
          </span>
        </a>

        <div className="h-px w-7 bg-[color:var(--line)]" />

        {links.map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.href}
              href={link.href}
              aria-label={link.label}
              className="group relative grid h-11 w-11 place-items-center rounded-full text-[color:var(--muted)] transition hover:-translate-y-0.5 hover:bg-[color:var(--panel-strong)] hover:text-[color:var(--accent)]"
            >
              <Icon size={18} strokeWidth={2.3} />

              <span className="pointer-events-none absolute left-14 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-[color:var(--line)] bg-[color:var(--panel-strong)] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--text)] opacity-0 shadow-xl backdrop-blur-xl transition group-hover:opacity-100 lg:block">
                {link.label}
              </span>
            </a>
          );
        })}

        <div className="h-px w-7 bg-[color:var(--line)]" />

        <ThemeToggle />

        <a
          href="https://github.com/carlosdaniel003"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="group relative grid h-11 w-11 place-items-center rounded-full text-[color:var(--muted)] transition hover:-translate-y-0.5 hover:bg-[color:var(--panel-strong)] hover:text-[color:var(--accent)]"
        >
          <Github size={18} strokeWidth={2.3} />

          <span className="pointer-events-none absolute left-14 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-[color:var(--line)] bg-[color:var(--panel-strong)] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--text)] opacity-0 shadow-xl backdrop-blur-xl transition group-hover:opacity-100 lg:block">
            GitHub
          </span>
        </a>
      </nav>
    </header>
  );
}