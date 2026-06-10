import { Github, Instagram, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="relative py-24">
      <div className="portfolio-container">
        <div className="glass-card overflow-hidden rounded-[2.5rem] p-8 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[color:var(--accent)]">
                Próximo passo
              </p>
              <h2 className="max-w-3xl text-4xl font-black tracking-[-0.05em] text-[color:var(--text)] sm:text-6xl">
                Precisa de alguém que entregue software com visão de problema real?
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-[color:var(--muted)]">
                Estou aberto a oportunidades como desenvolvedor e também a projetos externos de sistemas web,
                dashboards, automação, IA aplicada e visão computacional.
              </p>
            </div>

            <div className="grid gap-3">
              <a
                href="https://www.linkedin.com/in/carlosdaniel003"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-5 transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
              >
                <span className="flex items-center gap-3 font-black text-[color:var(--text)]">
                  <Linkedin size={20} /> LinkedIn
                </span>
                <span className="text-sm text-[color:var(--muted)]">Contato profissional</span>
              </a>
              <a
                href="https://github.com/carlosdaniel003"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-5 transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
              >
                <span className="flex items-center gap-3 font-black text-[color:var(--text)]">
                  <Github size={20} /> GitHub
                </span>
                <span className="text-sm text-[color:var(--muted)]">Ver código</span>
              </a>
              <a
                href="https://www.instagram.com/carlos_daniel.003"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-5 transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
              >
                <span className="flex items-center gap-3 font-black text-[color:var(--text)]">
                  <Instagram size={20} /> Instagram
                </span>
                <span className="text-sm text-[color:var(--muted)]">Perfil público</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
