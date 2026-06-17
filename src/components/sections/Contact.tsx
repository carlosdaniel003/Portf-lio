// src\components\sections\Contact.tsx
import TiltCard from "@/components/ui/TiltCard";
import { Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";

const whatsappUrl =
  "https://wa.me/5592982890208?text=Ol%C3%A1%2C%20Carlos%20Daniel.%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%2C%20projeto%20ou%20oportunidade%20t%C3%A9cnica.";
const emailUrl =
  "mailto:carlos.daniel.simoes.003@gmail.com?subject=Contato%20pelo%20portf%C3%B3lio&body=Ol%C3%A1%2C%20Carlos%20Daniel.%0A%0AVi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%2C%20projeto%20ou%20oportunidade%20t%C3%A9cnica.";

export default function Contact() {
  return (
    <section id="contato" className="relative py-24">
      <div className="portfolio-container">
        <div className="glass-card overflow-hidden rounded-[2.5rem] p-8 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="flex flex-col justify-between">
              <div>
                <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[color:var(--accent)]">
                  Próximos passos
                </p>

                <h2 className="max-w-3xl text-4xl font-black tracking-[-0.05em] text-[color:var(--text)] sm:text-6xl">
                  Vamos transformar seu problema em uma solução digital?
                </h2>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-[color:var(--muted)]">
                  Envie uma mensagem explicando o processo, dificuldade ou ideia que deseja
  desenvolver. O primeiro passo é entender o problema e avaliar a solução
  mais adequada.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_0.78fr]">
                  <TiltCard
                    as="a"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    intensity="subtle"
                    className="rounded-full bg-[color:var(--accent)] px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#04110d] transition hover:shadow-[0_18px_50px_color-mix(in_srgb,var(--accent)_28%,transparent)]"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <MessageCircle size={18} />
                      Falar no WhatsApp
                    </span>
                  </TiltCard>

                  <TiltCard
                    as="a"
                    href={emailUrl}
                    intensity="subtle"
                    className="rounded-full border border-[color:var(--line)] bg-[color:var(--panel-strong)] px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-[color:var(--text)] transition hover:border-[color:var(--accent)]"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <Mail size={18} />
                      Enviar e-mail
                    </span>
                  </TiltCard>
                </div>
              </div>

              <div className="mt-6 grid gap-3 text-sm text-[color:var(--muted)] sm:grid-cols-2">
                <TiltCard
                  as="div"
                  intensity="subtle"
                  className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[color:var(--accent)]">
                    WhatsApp
                  </p>
                  <p className="mt-2 font-semibold text-[color:var(--text)]">
                    +55 92 98289-0208
                  </p>
                </TiltCard>

                <TiltCard
                  as="div"
                  intensity="subtle"
                  className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[color:var(--accent)]">
                    E-mail
                  </p>
                  <p className="mt-2 break-all font-semibold text-[color:var(--text)]">
                    carlos.daniel.simoes.003@gmail.com
                  </p>
                </TiltCard>
              </div>
            </div>

            <div className="grid gap-3">
              <TiltCard
                as="div"
                intensity="subtle"
                className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-6"
              >
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[color:var(--accent)]">
                  Contato direto
                </p>

                <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-[color:var(--text)]">
                  Conte como seu processo funciona hoje.
                </h3>

                <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
                  Você pode entrar em contato pelo WhatsApp para conversar sobre sistemas,
  dashboards, automações, inteligência artificial, visão computacional ou
  presença digital.
                </p>

                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  <span className="rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] px-4 py-2 text-center text-[11px] font-black uppercase tracking-[0.16em] text-[color:var(--muted)]">
                    Soluções sob medida
                  </span>

                  <span className="rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] px-4 py-2 text-center text-[11px] font-black uppercase tracking-[0.16em] text-[color:var(--muted)]">
                    Projetos técnicos e industriais
                  </span>
                </div>
              </TiltCard>

              <TiltCard
                as="a"
                href="https://www.linkedin.com/in/carlosdaniel003"
                target="_blank"
                rel="noreferrer"
                intensity="subtle"
                className="group rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-5 transition hover:border-[color:var(--accent)]"
              >
                <span className="flex w-full items-center justify-between gap-4">
                  <span>
                    <span className="flex items-center gap-3 font-black text-[color:var(--text)]">
                      <Linkedin size={20} /> LinkedIn
                    </span>
                    <span className="mt-1 block text-sm text-[color:var(--muted)]">
                      Contato profissional
                    </span>
                  </span>
                </span>
              </TiltCard>

              <TiltCard
                as="a"
                href="https://github.com/carlosdaniel003"
                target="_blank"
                rel="noreferrer"
                intensity="subtle"
                className="group rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-5 transition hover:border-[color:var(--accent)]"
              >
                <span className="flex w-full items-center justify-between gap-4">
                  <span>
                    <span className="flex items-center gap-3 font-black text-[color:var(--text)]">
                      <Github size={20} /> GitHub
                    </span>
                    <span className="mt-1 block text-sm text-[color:var(--muted)]">
                      Ver código
                    </span>
                  </span>
                </span>
              </TiltCard>

              <TiltCard
                as="a"
                href="https://www.instagram.com/carlos_daniel.003"
                target="_blank"
                rel="noreferrer"
                intensity="subtle"
                className="group rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-5 transition hover:border-[color:var(--accent)]"
              >
                <span className="flex w-full items-center justify-between gap-4">
                  <span>
                    <span className="flex items-center gap-3 font-black text-[color:var(--text)]">
                      <Instagram size={20} /> Instagram
                    </span>
                    <span className="mt-1 block text-sm text-[color:var(--muted)]">
                      Perfil público
                    </span>
                  </span>
                </span>
              </TiltCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}