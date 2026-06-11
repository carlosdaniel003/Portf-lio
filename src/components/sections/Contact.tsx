import { Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";

const whatsappUrl =
  "https://wa.me/5592982890208?text=Ol%C3%A1%2C%20Carlos%20Daniel.%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade%20ou%20projeto.";

const emailUrl =
  "mailto:carlos.daniel.simoes.003@gmail.com?subject=Contato%20pelo%20portf%C3%B3lio&body=Ol%C3%A1%2C%20Carlos%20Daniel.%0A%0AVi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade%20ou%20projeto.";

export default function Contact() {
  return (
    <section id="contato" className="relative py-24">
      <div className="portfolio-container">
        <div className="glass-card overflow-hidden rounded-[2.5rem] p-8 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[color:var(--accent)]">
                Próximos passos
              </p>

              <h2 className="max-w-3xl text-4xl font-black tracking-[-0.05em] text-[color:var(--text)] sm:text-6xl">
                Precisa de alguém que entregue software com visão de problema real?
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-[color:var(--muted)]">
                Estou aberto a oportunidades como desenvolvedor e também a projetos externos de sistemas web,
                dashboards, automação, IA aplicada e visão computacional.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[color:var(--accent)] px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#04110d] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_color-mix(in_srgb,var(--accent)_28%,transparent)]"
                >
                  <MessageCircle size={18} />
                  Falar no WhatsApp
                </a>

                <a
                  href={emailUrl}
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-[color:var(--line)] bg-[color:var(--panel-strong)] px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-[color:var(--text)] transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
                >
                  <Mail size={18} />
                  Enviar e-mail
                </a>
              </div>

              <div className="mt-6 grid gap-3 text-sm text-[color:var(--muted)] sm:grid-cols-2">
                <div className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[color:var(--accent)]">
                    WhatsApp
                  </p>
                  <p className="mt-2 font-semibold text-[color:var(--text)]">
                    +55 92 98289-0208
                  </p>
                </div>

                <div className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[color:var(--accent)]">
                    E-mail
                  </p>
                  <p className="mt-2 break-all font-semibold text-[color:var(--text)]">
                    carlos.daniel.simoes.003@gmail.com
                  </p>
                </div>
              </div>
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