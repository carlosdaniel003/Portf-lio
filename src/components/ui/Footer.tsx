// src/components/ui/Footer.tsx

import Link from "next/link";

import {
  ArrowUp,
  ArrowUpRight,
  Github,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

const demosUrl =
  "https://demos.carlosdaniel.dev.br";

const navigationLinks = [
  {
    label: "Início",
    href: "/#inicio",
  },
  {
    label: "Projetos",
    href: "/#projetos",
  },
  {
    label: "Perfil",
    href: "/#sobre",
  },
  {
    label: "Tecnologias",
    href: "/#tecnologias",
  },
  {
    label: "Contato",
    href: "/#contato",
  },
] as const;

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/carlosdaniel003",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/carlosdaniel003",
    icon: Github,
  },
] as const;

function BrandMark() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className="h-8 w-8"
    >
      <path
        d="M28 16C18.6 16 12 22.7 12 32C12 41.3 18.6 48 28 48C31.7 48 35 46.9 37.7 44.8"
        stroke="var(--accent)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 16V48"
        stroke="var(--accent-2)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M34 16H40C47.5 16 52 22 52 32C52 42 47.5 48 40 48H34"
        stroke="var(--accent-2)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-[color:var(--line-soft)] bg-[color:var(--bg-deepest)] text-[color:var(--text)]">
      <div
        aria-hidden="true"
        className="soft-grid pointer-events-none absolute inset-0 opacity-[0.16] [mask-image:linear-gradient(to_bottom,black,transparent_82%)] [-webkit-mask-image:linear-gradient(to_bottom,black,transparent_82%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-12rem] top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-[color:var(--accent)]/[0.08] blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-14rem] right-[-10rem] h-[36rem] w-[36rem] rounded-full bg-[color:var(--accent-2)]/[0.07] blur-[140px]"
      />

      <div className="portfolio-container relative z-10">
        <div className="flex flex-col gap-5 border-b border-[color:var(--line)] py-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[color:var(--accent)]/45 bg-[color:var(--accent)]/10 shadow-[0_0_24px_color-mix(in_srgb,var(--accent)_14%,transparent)]">
              <BrandMark />
              <span
                aria-hidden="true"
                className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-[color:var(--bg-deepest)] bg-[color:var(--accent)] shadow-[0_0_12px_var(--accent)]"
              />
            </span>

            <div>
              <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">
                Portfolio system
              </p>
              <p className="mt-1 text-sm font-bold tracking-[-0.02em] text-[color:var(--text)]">
                Eletrônica · Software · Inteligência
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] px-4 py-2 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[color:var(--accent)] shadow-[0_0_14px_var(--accent)]" />
            <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Disponível para oportunidades técnicas e colaborações
            </span>
          </div>
        </div>

        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(180px,0.42fr)_minmax(260px,0.66fr)] lg:gap-14 lg:py-20">
          <div>
            <p className="tech-label">
              Carlos Daniel / Manaus — AM
            </p>

            <h2 className="mt-5 max-w-[13ch] font-display text-4xl font-bold leading-[0.98] tracking-[-0.065em] text-[color:var(--text)] sm:text-5xl lg:text-6xl">
              Tecnologia aplicada a
              <span className="text-gradient"> oportunidades de melhoria.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-[color:var(--muted)] sm:text-base sm:leading-8">
              Técnico em Eletrônica e Desenvolvedor de Sistemas com experiência em
              software industrial, dashboards, automação, inteligência artificial,
              visão computacional, qualidade e operação.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex min-h-11 items-center gap-3 rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] px-4 text-[10px] font-bold uppercase tracking-[0.13em] text-[color:var(--text)] transition hover:border-[color:var(--accent)] hover:bg-[color:var(--panel-strong)]"
                  >
                    <Icon
                      size={15}
                      strokeWidth={2}
                      className="text-[color:var(--accent)]"
                    />
                    {social.label}
                    <ArrowUpRight
                      size={13}
                      strokeWidth={2.2}
                      className="text-[color:var(--subtle)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[color:var(--accent)]"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">
              Navegação
            </p>

            <div className="mt-6 divide-y divide-[color:var(--line-soft)] border-y border-[color:var(--line-soft)]">
              {navigationLinks.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex min-h-12 items-center justify-between gap-4 py-3 text-sm font-semibold text-[color:var(--muted)] transition hover:pl-1 hover:text-[color:var(--text)]"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-[8px] tracking-[0.16em] text-[color:var(--subtle)] transition-colors group-hover:text-[color:var(--accent)]">
                    {String(index).padStart(2, "0")}
                  </span>
                </Link>
              ))}
            </div>
          </nav>

          <div>
            <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">
              Contato e serviços
            </p>

            <div className="mt-6 divide-y divide-[color:var(--line-soft)] border-y border-[color:var(--line-soft)]">
              <a
                href="mailto:contato@carlosdaniel.dev.br"
                className="group flex items-start gap-4 py-5"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[0.9rem] border border-[color:var(--line)] bg-[color:var(--panel)] text-[color:var(--accent)] transition group-hover:border-[color:var(--accent)]">
                  <Mail size={16} strokeWidth={2} />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[7px] font-semibold uppercase tracking-[0.17em] text-[color:var(--subtle)]">
                    Contato profissional
                  </span>
                  <span className="mt-2 block break-all text-xs font-bold leading-5 text-[color:var(--text)]">
                    contato@carlosdaniel.dev.br
                  </span>
                </span>
              </a>

              <a
                href={demosUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4 py-5"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[0.9rem] border border-[color:var(--line)] bg-[color:var(--panel)] text-[color:var(--accent-2)] transition group-hover:border-[color:var(--accent)]">
                  <Globe2 size={16} strokeWidth={2} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[7px] font-semibold uppercase tracking-[0.17em] text-[color:var(--subtle)]">
                    Websites e landing pages
                  </span>
                  <span className="mt-2 block text-xs font-bold leading-5 text-[color:var(--text)]">
                    Conhecer serviços, planos e demonstrações
                  </span>
                </span>
                <ArrowUpRight
                  size={15}
                  className="mt-1 shrink-0 text-[color:var(--subtle)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[color:var(--accent)]"
                />
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3 text-sm text-[color:var(--muted)]">
              <MapPin size={16} className="text-[color:var(--accent)]" />
              Manaus, AM — Brasil
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden border-t border-[color:var(--line)] py-10 sm:py-12">
          <p className="select-none font-display text-[clamp(3.4rem,11vw,9.5rem)] font-bold leading-[0.78] tracking-[-0.09em] text-[color:var(--text)]/[0.055]">
            CARLOS DANIEL
          </p>
        </div>

        <div className="flex flex-col gap-5 border-t border-[color:var(--line)] py-7 text-xs text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Carlos Daniel. Portfólio profissional.</p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <Link href="/privacidade" className="transition hover:text-[color:var(--accent)]">
              Privacidade
            </Link>
            <Link href="/termos" className="transition hover:text-[color:var(--accent)]">
              Termos
            </Link>
            <a
              href="#inicio"
              className="group inline-flex items-center gap-2 font-bold uppercase tracking-[0.13em] text-[color:var(--text)]"
            >
              Voltar ao topo
              <span className="grid h-8 w-8 place-items-center rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] text-[color:var(--accent)] transition group-hover:-translate-y-1 group-hover:border-[color:var(--accent)]">
                <ArrowUp size={14} strokeWidth={2.2} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
