// src/components/sections/AboutMe.tsx
"use client";

import { aboutProfile } from "@/data/about";

import { motion } from "framer-motion";

import type { LucideIcon } from "lucide-react";

import {
  ArrowRight,
  BriefcaseBusiness,
  BrainCircuit,
  Check,
  CircuitBoard,
  Code2,
  Cpu,
  Factory,
  GraduationCap,
  MapPin,
} from "lucide-react";

const technicalBaseIcons: LucideIcon[] = [
  CircuitBoard,
  Code2,
  BrainCircuit,
  Factory,
];

const revealTransition = {
  duration: 0.58,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function AboutMe() {
  return (
    <section
      id="sobre"
      className="relative scroll-mt-28 overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="editorial-number absolute right-[-0.04em] top-[0.06em] opacity-55">
          02
        </div>
        <div className="soft-dots absolute left-[-8rem] top-[8%] h-[34rem] w-[34rem] opacity-35" />
        <div className="absolute left-[-17rem] top-[30%] h-[40rem] w-[40rem] rounded-full bg-[color:var(--accent-2)]/10 blur-[155px]" />
        <div className="absolute right-[-18rem] top-[62%] h-[44rem] w-[44rem] rounded-full bg-[color:var(--accent)]/10 blur-[165px]" />
      </div>

      <div className="portfolio-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={revealTransition}
          className="grid gap-10 border-b border-[color:var(--line-soft)] pb-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-end lg:pb-16"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--accent)]">
                Profile / 02
              </span>
              <span
                aria-hidden="true"
                className="h-px w-12 bg-gradient-to-r from-[color:var(--accent)] to-transparent"
              />
            </div>

            <h2 className="section-title max-w-[13ch] text-[color:var(--text)]">
              Entre eletrônica, operação e
              <span className="text-gradient"> sistemas digitais.</span>
            </h2>
          </div>

          <div className="lg:border-l lg:border-[color:var(--line)] lg:pl-10">
            <p className="text-base leading-8 text-[color:var(--muted)] sm:text-lg sm:leading-9">
              Minha trajetória conecta diagnóstico técnico, ambiente industrial,
              desenvolvimento de sistemas, dados, automação e inteligência
              artificial.
            </p>

            <div className="mt-7 grid grid-cols-3 gap-3">
              {[
                {
                  value: aboutProfile.experiences.length,
                  label: "Experiências",
                },
                {
                  value: aboutProfile.technicalBase.length,
                  label: "Bases técnicas",
                },
                {
                  value: aboutProfile.education.length,
                  label: "Formações",
                },
              ].map((item) => (
                <div key={item.label}>
                  <span className="block font-display text-3xl font-bold tracking-[-0.07em] text-[color:var(--text)]">
                    {String(item.value).padStart(2, "0")}
                  </span>
                  <span className="mt-1 block font-mono text-[8px] font-semibold uppercase tracking-[0.17em] text-[color:var(--muted)]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[minmax(330px,0.42fr)_minmax(0,0.58fr)] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ ...revealTransition, delay: 0.08 }}
            className="relative min-h-[620px] overflow-hidden rounded-[2.5rem] border border-[color:var(--line-strong)] bg-[color:var(--panel-strong)] shadow-[0_34px_100px_var(--shadow-deep)]"
          >
            <img
              src={aboutProfile.image}
              alt={aboutProfile.name}
              className="absolute inset-0 h-full w-full object-cover object-[center_38%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--bg-deepest)] via-[color:var(--bg-deepest)]/20 to-transparent" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-5 rounded-[2rem] border border-white/10"
            />

            <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full border border-white/15 bg-black/25 px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[color:var(--accent)] shadow-[0_0_14px_var(--accent)]" />
              <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.19em] text-white/75">
                Professional profile
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <MapPin
                  size={16}
                  strokeWidth={2}
                  className="text-[color:var(--accent)]"
                />
                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-white/65">
                  Localização
                </span>
              </div>
              <p className="mt-3 font-display text-2xl font-bold tracking-[-0.04em] text-white">
                {aboutProfile.location}
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                {[
                  "Hardware",
                  "Software",
                  "IA",
                ].map((item, index) => (
                  <div key={item} className="contents">
                    {index > 0 && (
                      <ArrowRight
                        size={13}
                        className="text-[color:var(--accent)]"
                      />
                    )}
                    <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-white/45">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ ...revealTransition, delay: 0.14 }}
            className="relative overflow-hidden rounded-[2.5rem] border border-[color:var(--line)] bg-[color:var(--panel)] p-7 backdrop-blur-xl sm:p-9 lg:p-11"
          >
            <div
              aria-hidden="true"
              className="soft-grid pointer-events-none absolute inset-0 opacity-20"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-[-8rem] top-[-8rem] h-[26rem] w-[26rem] rounded-full bg-[color:var(--accent)]/10 blur-[100px]"
            />

            <div className="relative z-10">
              <p className="tech-label">About / Identity</p>
              <h3 className="mt-6 max-w-[14ch] font-display text-4xl font-bold leading-[0.98] tracking-[-0.06em] text-[color:var(--text)] sm:text-5xl xl:text-6xl">
                {aboutProfile.name}
              </h3>
              <p className="mt-6 max-w-3xl font-mono text-[10px] font-semibold uppercase leading-6 tracking-[0.16em] text-[color:var(--accent)]">
                {aboutProfile.role}
              </p>
              <p className="mt-8 max-w-3xl text-base leading-8 text-[color:var(--muted)] sm:text-lg sm:leading-9">
                {aboutProfile.summary}
              </p>

              <div className="mt-10 border-t border-[color:var(--line)] pt-8">
                <div className="mb-6 flex items-center justify-between gap-5">
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
                    Entregas desenvolvidas
                  </p>
                  <span className="font-display text-3xl font-bold tracking-[-0.07em] text-[color:var(--text)]/10">
                    {String(aboutProfile.deliveries.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="divide-y divide-[color:var(--line-soft)]">
                  {aboutProfile.deliveries.map((delivery, index) => (
                    <motion.div
                      key={delivery}
                      initial={{ opacity: 0, x: 14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.36,
                        delay: index * 0.045,
                      }}
                      className="flex items-start gap-4 py-4"
                    >
                      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[color:var(--accent)]/35 bg-[color:var(--accent)]/10 text-[color:var(--accent)]">
                        <Check size={13} strokeWidth={2.5} />
                      </span>
                      <p className="text-sm font-semibold leading-7 text-[color:var(--text-soft)]">
                        {delivery}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={revealTransition}
          className="mt-20 lg:mt-28"
        >
          <div className="grid gap-8 border-b border-[color:var(--line)] pb-9 lg:grid-cols-[minmax(0,0.75fr)_minmax(320px,0.45fr)] lg:items-end lg:justify-between">
            <div>
              <p className="tech-label">Formação / Education</p>
              <h3 className="mt-4 font-display text-4xl font-bold tracking-[-0.06em] text-[color:var(--text)] sm:text-5xl">
                Formação que conecta áreas.
              </h3>
            </div>
            <p className="text-sm leading-7 text-[color:var(--muted)]">
              Eletrônica fornece a leitura do cenário físico. Desenvolvimento de
              sistemas fornece os recursos para organizar dados, criar interfaces
              e automatizar rotinas.
            </p>
          </div>

          <div className="mt-8 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
            {aboutProfile.education.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.42,
                  delay: index * 0.07,
                }}
                className="group grid gap-6 py-7 sm:grid-cols-[72px_minmax(0,1fr)_auto] sm:items-center lg:py-9"
              >
                <div className="grid h-14 w-14 place-items-center rounded-[1.1rem] border border-[color:var(--line)] bg-[color:var(--panel)] text-[color:var(--accent)] transition group-hover:border-[color:var(--accent)]">
                  <GraduationCap size={23} strokeWidth={1.9} />
                </div>

                <div>
                  <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.19em] text-[color:var(--accent)]">
                    Education / {String(index + 1).padStart(2, "0")}
                  </p>
                  <h4 className="mt-3 text-xl font-bold tracking-[-0.035em] text-[color:var(--text)] sm:text-2xl">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm font-semibold text-[color:var(--muted)]">
                    {item.institution}
                  </p>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[color:var(--muted)]">
                    {item.description}
                  </p>
                </div>

                <span className="w-fit rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] px-4 py-2 font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-[color:var(--text-soft)]">
                  {item.period}
                </span>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={revealTransition}
          className="mt-20 lg:mt-28"
        >
          <div className="mb-10 max-w-4xl">
            <p className="tech-label">Technical foundation</p>
            <h3 className="mt-5 font-display text-4xl font-bold leading-[1] tracking-[-0.06em] text-[color:var(--text)] sm:text-5xl">
              Uma base técnica,
              <span className="text-gradient"> quatro perspectivas.</span>
            </h3>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--line-soft)] md:grid-cols-2 xl:grid-cols-4">
            {aboutProfile.technicalBase.map((item, index) => {
              const Icon = technicalBaseIcons[index] ?? Cpu;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.42,
                    delay: index * 0.065,
                  }}
                  className="group relative min-h-[300px] overflow-hidden bg-[color:var(--panel)] p-6 transition duration-300 hover:bg-[color:var(--panel-strong)] sm:p-7"
                >
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between gap-5">
                      <div className="grid h-14 w-14 place-items-center rounded-[1.2rem] border border-[color:var(--line)] bg-[color:var(--bg-deep)]/50 text-[color:var(--accent)] transition group-hover:border-[color:var(--accent)]">
                        <Icon size={23} strokeWidth={1.8} />
                      </div>
                      <span className="font-display text-4xl font-bold tracking-[-0.08em] text-[color:var(--text)]/10">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="mt-auto pt-12">
                      <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                        Base / {String(index + 1).padStart(2, "0")}
                      </p>
                      <h4 className="mt-3 text-xl font-bold tracking-[-0.035em] text-[color:var(--text)]">
                        {item.title}
                      </h4>
                      <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={revealTransition}
          className="mt-20 lg:mt-28"
        >
          <div className="grid gap-8 border-b border-[color:var(--line)] pb-9 lg:grid-cols-[minmax(0,0.8fr)_minmax(320px,0.45fr)] lg:items-end lg:justify-between">
            <div>
              <p className="tech-label">Experience / Timeline</p>
              <h3 className="mt-5 font-display text-4xl font-bold leading-none tracking-[-0.06em] text-[color:var(--text)] sm:text-5xl">
                Trajetória técnica.
              </h3>
            </div>
            <p className="text-sm leading-7 text-[color:var(--muted)]">
              Da organização de dados e rotina produtiva até eletrônica,
              engenharia de processos, automação e desenvolvimento de software.
            </p>
          </div>

          <div className="relative mt-10">
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-[25px] top-0 w-px bg-gradient-to-b from-[color:var(--accent)] via-[color:var(--line-strong)] to-transparent lg:left-[155px]"
            />

            <div className="divide-y divide-[color:var(--line-soft)]">
              {aboutProfile.experiences.map((experience, index) => (
                <motion.article
                  key={`${experience.company}-${experience.period}`}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{
                    duration: 0.44,
                    delay: index * 0.045,
                  }}
                  className="group relative grid gap-5 py-8 pl-16 lg:grid-cols-[130px_minmax(0,0.58fr)_minmax(280px,0.42fr)] lg:gap-10 lg:pl-0"
                >
                  <div className="absolute left-[18px] top-[2.2rem] z-10 grid h-4 w-4 place-items-center rounded-full border border-[color:var(--accent)] bg-[color:var(--bg-deep)] shadow-[0_0_22px_color-mix(in_srgb,var(--accent)_35%,transparent)] lg:left-[148px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                  </div>

                  <div className="lg:pr-5 lg:text-right">
                    <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">
                      {experience.period}
                    </span>
                    <span className="mt-2 block font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-[color:var(--accent)]">
                      Step / {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="lg:pl-10">
                    <div className="flex items-center gap-3">
                      <BriefcaseBusiness
                        size={16}
                        strokeWidth={1.9}
                        className="text-[color:var(--accent)]"
                      />
                      <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.17em] text-[color:var(--muted)]">
                        Experiência profissional
                      </span>
                    </div>
                    <h4 className="mt-4 text-2xl font-bold tracking-[-0.045em] text-[color:var(--text)] sm:text-3xl">
                      {experience.company}
                    </h4>
                    <p className="mt-3 text-sm font-bold leading-6 text-[color:var(--accent)]">
                      {experience.role}
                    </p>
                  </div>

                  <div className="lg:border-l lg:border-[color:var(--line)] lg:pl-9">
                    <p className="text-sm leading-7 text-[color:var(--muted)]">
                      {experience.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={revealTransition}
          className="relative mt-20 overflow-hidden rounded-[2.4rem] border border-[color:var(--line-strong)] bg-[color:var(--panel-strong)] p-7 shadow-[0_28px_90px_var(--shadow-deep)] sm:p-10 lg:mt-28 lg:p-14"
        >
          <div
            aria-hidden="true"
            className="soft-grid pointer-events-none absolute inset-0 opacity-20"
          />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.42fr)] lg:items-end">
            <div>
              <p className="tech-label">Diferencial técnico</p>
              <h3 className="mt-5 max-w-[15ch] font-display text-4xl font-bold leading-[0.98] tracking-[-0.06em] text-[color:var(--text)] sm:text-5xl lg:text-6xl">
                Primeiro entendo o processo.
                <span className="text-gradient"> Depois aplico a tecnologia.</span>
              </h3>
            </div>
            <p className="text-sm leading-8 text-[color:var(--muted)] sm:text-base">
              A experiência prática ajuda a interpretar equipamentos, dados,
              limitações e oportunidades antes da construção da solução digital.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
