"use client";

import TiltCard from "@/components/ui/TiltCard";
import type { CommercialService } from "@/core/types";
import {
  aiApplications,
  commercialServices,
  serviceProcess,
} from "@/data/services";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Database,
  Globe2,
  MessageCircle,
  ScanLine,
} from "lucide-react";

const serviceIcons: Record<CommercialService["id"], LucideIcon> = {
  "sistemas-gestao": Database,
  dashboards: BarChart3,
  "visao-computacional": ScanLine,
  "presenca-digital": Globe2,
};

const whatsappMessage =
  "Olá, Carlos Daniel. Vi sua seção de soluções e gostaria de avaliar um processo da minha empresa para identificar oportunidades de sistema, automação ou inteligência artificial.";

const whatsappUrl = `https://wa.me/5592982890208?text=${encodeURIComponent(
  whatsappMessage
)}`;

export default function Services() {
  return (
    <section id="solucoes" className="relative py-24">
      <div className="portfolio-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-14 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end"
        >
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[color:var(--accent)]">
              Soluções para empresas
            </p>

            <h2 className="text-4xl font-black tracking-[-0.05em] text-[color:var(--text)] sm:text-5xl lg:text-6xl">
              Seu processo ainda depende de planilhas, controles manuais ou
              tarefas repetitivas?
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-[color:var(--muted)]">
            Desenvolvo sistemas, dashboards, automações, soluções com
            inteligência artificial e inspeção visual para transformar
            atividades operacionais em processos digitais, rastreáveis e
            inteligentes.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {commercialServices.map((service, index) => {
            const Icon = serviceIcons[service.id];

            return (
              <TiltCard
                as="article"
                key={service.id}
                intensity="medium"
                revealDelay={index * 0.06}
                className="group rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-6 transition hover:border-[color:var(--accent)] sm:p-8"
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[color:var(--accent)]/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-5">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg)] text-[color:var(--accent)]">
                      <Icon size={25} strokeWidth={2} />
                    </div>

                    <span className="text-xs font-black uppercase tracking-[0.22em] text-[color:var(--accent)]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-black tracking-[-0.04em] text-[color:var(--text)] sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[color:var(--muted)]">
                    {service.description}
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {service.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-3"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-[color:var(--accent)]"
                        />

                        <span className="text-xs font-semibold leading-5 text-[color:var(--text)]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[color:var(--line)] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-[color:var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="glass-card relative mt-8 overflow-hidden rounded-[2.5rem]"
        >
          <div className="soft-grid pointer-events-none absolute inset-0 opacity-25" />
          <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-[color:var(--accent)]/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[color:var(--accent-2)]/15 blur-3xl" />

          <div className="relative z-10 grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="border-b border-[color:var(--line)] p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <div className="grid h-16 w-16 place-items-center rounded-[1.4rem] border border-[color:var(--accent)] bg-[color:var(--accent)]/10 text-[color:var(--accent)] shadow-[0_0_34px_color-mix(in_srgb,var(--accent)_20%,transparent)]">
                <Bot size={30} />
              </div>

              <p className="mt-8 text-xs font-black uppercase tracking-[0.26em] text-[color:var(--accent)]">
                IA aplicada a processos reais
              </p>

              <h3 className="mt-4 max-w-3xl text-3xl font-black tracking-[-0.05em] text-[color:var(--text)] sm:text-5xl">
                Onde a Inteligência Artificial pode melhorar o seu processo?
              </h3>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[color:var(--muted)]">
                Analiso atividades repetitivas, dados, documentos, imagens e
                decisões operacionais para identificar oportunidades reais de
                automação e inteligência artificial.
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[color:var(--muted)]">
                A proposta não é simplesmente adicionar IA, mas encontrar um
                ponto do processo onde ela possa reduzir trabalho manual,
                acelerar análises ou apoiar decisões.
              </p>

              <TiltCard
                as="a"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                intensity="subtle"
                className="mt-8 inline-flex rounded-full bg-[color:var(--accent)] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#04110d] shadow-[0_18px_50px_color-mix(in_srgb,var(--accent)_20%,transparent)]"
              >
                <span className="flex items-center justify-center gap-3">
                  <MessageCircle size={18} />
                  Quero avaliar meu processo
                  <ArrowRight size={17} />
                </span>
              </TiltCard>
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[color:var(--accent)]">
                Possibilidades de aplicação
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {aiApplications.map((application, index) => (
                  <motion.div
                    key={application}
                    initial={{ opacity: 0, x: 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    className="group flex min-h-20 items-center gap-4 rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-4 transition hover:border-[color:var(--accent)]"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[color:var(--accent)]/10 text-[10px] font-black text-[color:var(--accent)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-bold leading-6 text-[color:var(--text)]">
                      {application}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mt-8 rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--panel)] p-6 backdrop-blur-xl sm:p-8"
        >
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[color:var(--accent)]">
                Como funciona
              </p>

              <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[color:var(--text)]">
                Do problema à solução.
              </h3>
            </div>

            <p className="max-w-xl text-sm leading-7 text-[color:var(--muted)]">
              Você não precisa chegar com a solução pronta. O primeiro passo é
              apresentar como o processo funciona hoje.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {serviceProcess.map((step, index) => (
              <TiltCard
                as="article"
                key={step.number}
                intensity="subtle"
                revealDelay={index * 0.05}
                className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-5"
              >
                <p className="text-xs font-black tracking-[0.22em] text-[color:var(--accent)]">
                  {step.number}
                </p>

                <h4 className="mt-4 text-lg font-black text-[color:var(--text)]">
                  {step.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                  {step.description}
                </p>
              </TiltCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}