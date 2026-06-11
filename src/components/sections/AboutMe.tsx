// src\components\sections\AboutMe.tsx
"use client";

import { aboutProfile } from "@/data/about";
import { servicesData } from "@/data/portfolio";
import { stackGroups } from "@/data/stack";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="sobre" className="relative py-24">
      <div className="portfolio-container">
        <div className="grid gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="glass-card overflow-hidden rounded-[2.5rem]"
          >
            <div className="grid gap-0 lg:grid-cols-[0.86fr_1.14fr]">
              <div className="relative overflow-hidden border-b border-[color:var(--line)] bg-[color:var(--panel-strong)] p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <div className="soft-grid absolute inset-0 opacity-40" />
                <div className="absolute left-10 top-10 h-48 w-48 rounded-full bg-[color:var(--accent)]/20 blur-3xl" />

                <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                  <div>
                    <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[color:var(--accent)]">
                      Quem sou eu
                    </p>

                    <div className="relative mb-8 aspect-square max-w-[340px] overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--panel)] shadow-2xl">
                      <img
                        src={aboutProfile.image}
                        alt={aboutProfile.name}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                  </div>

                  <div className="rounded-[1.7rem] border border-[color:var(--line)] bg-[color:var(--panel)] p-5 backdrop-blur-xl">
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-[color:var(--muted)]">
                      Localização
                    </p>
                    <p className="mt-2 text-lg font-black text-[color:var(--text)]">
                      {aboutProfile.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="mb-10">
                  <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[color:var(--accent)]">
                    Sobre mim
                  </p>

                  <h2 className="text-4xl font-black tracking-[-0.05em] text-[color:var(--text)] sm:text-5xl">
                    {aboutProfile.name}
                  </h2>

                  <p className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-[color:var(--accent)]">
                    {aboutProfile.role}
                  </p>

                  <p className="mt-6 max-w-3xl text-base leading-8 text-[color:var(--muted)]">
                    {aboutProfile.summary}
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {aboutProfile.education.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-5"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-[color:var(--accent)]">
                        {item.period}
                      </p>
                      <h3 className="mt-3 text-xl font-black text-[color:var(--text)]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm font-bold text-[color:var(--muted)]">
                        {item.institution}
                      </p>
                      <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="glass-card rounded-[2rem] p-6 sm:p-8"
          >
            <div className="mb-8">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[color:var(--accent)]">
                Base técnica
              </p>
              <h3 className="max-w-3xl text-3xl font-black tracking-[-0.04em] text-[color:var(--text)] sm:text-4xl">
                A ponte entre chão de fábrica e software.
              </h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {aboutProfile.technicalBase.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-5 transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
                >
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[color:var(--accent)]">
                    Base 0{index + 1}
                  </p>
                  <h4 className="mt-3 text-lg font-black text-[color:var(--text)]">
  {item.title}
</h4>
<p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
  {item.description}
</p>
                </article>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-8 grid gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="glass-card rounded-[2rem] p-6 sm:p-8"
          >
            <div className="mb-8">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[color:var(--accent)]">
                O que eu entrego
              </p>
              <h3 className="text-3xl font-black tracking-[-0.04em] text-[color:var(--text)]">
                Soluções completas para problemas reais de operação.
              </h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {servicesData.map((service, index) => (
                <article
                  key={service.title}
                  className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-5 transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
                >
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[color:var(--accent)]">
                    0{index + 1}
                  </p>
                  <h4 className="mt-4 text-lg font-black text-[color:var(--text)]">
                    {service.title}
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                    {service.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[color:var(--line)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[color:var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="glass-card overflow-hidden rounded-[2rem] p-6 sm:p-8"
          >
            <div className="relative">
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[color:var(--accent)]/15 blur-3xl" />

              <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[color:var(--accent)]">
                Stack principal
              </p>

              <h3 className="text-3xl font-black tracking-[-0.04em] text-[color:var(--text)]">
                Tecnologias organizadas por aplicação real.
              </h3>

              <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
                Não uso tecnologia como lista de ferramentas. Organizo a stack conforme a
                função dela dentro dos sistemas: interface, dados, IA, visão computacional,
                dashboards e entrega.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {stackGroups.map((group, groupIndex) => (
                <article
                  key={group.title}
                  className="group relative overflow-hidden rounded-[1.7rem] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-5 transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
                >
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[color:var(--accent)]/10 blur-2xl opacity-0 transition group-hover:opacity-100" />

                  <div className="relative z-10 mb-5 flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg)] text-xs font-black text-[color:var(--accent)]">
                      0{groupIndex + 1}
                    </div>

                    <div>
                      <h4 className="text-base font-black text-[color:var(--text)]">
                        {group.title}
                      </h4>
                      <p className="mt-2 text-xs leading-5 text-[color:var(--muted)]">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-wrap gap-2">
                    {group.technologies.map((technology) => (
                      <div
                        key={technology.name}
                        title={technology.usage}
                        className="flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] px-3 py-2 transition hover:border-[color:var(--accent)] hover:bg-[color:var(--bg)]"
                      >
                        <span className="grid h-7 min-w-7 place-items-center rounded-full bg-[color:var(--accent)]/12 px-2 text-[10px] font-black text-[color:var(--accent)]">
                          {technology.badge}
                        </span>

                        <span className="text-[11px] font-black uppercase tracking-[0.14em] text-[color:var(--text)]">
                          {technology.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[1.7rem] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[color:var(--accent)]">
                  Meu eixo técnico
                </p>

                <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-3">
                    <p className="text-lg font-black text-[color:var(--accent)]">HW</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[color:var(--muted)]">
                      Eletrônica
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-3">
                    <p className="text-lg font-black text-[color:var(--accent)]">SW</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[color:var(--muted)]">
                      Software
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-3">
                    <p className="text-lg font-black text-[color:var(--accent)]">AI</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[color:var(--muted)]">
                      IA
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.7rem] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[color:var(--accent)]">
                  Diferencial técnico
                </p>

                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                  Minha base em eletrônica me ajuda a entender o problema físico antes de
                  construir a solução digital. Isso conecta software, operação industrial,
                  análise de falhas, qualidade e automação em um mesmo raciocínio técnico.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 grid gap-8">
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.55 }}
    className="glass-card overflow-hidden rounded-[2rem] p-6 sm:p-8"
  >
    <div className="relative">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[color:var(--accent)]/10 blur-3xl" />

      <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[color:var(--accent)]">
        Experiência individual
      </p>

      <h3 className="text-3xl font-black tracking-[-0.04em] text-[color:var(--text)] sm:text-4xl">
        Minha trajetória técnica.
      </h3>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-[color:var(--muted)]">
        Da rotina operacional e administrativa até manutenção, engenharia de
        processos, eletrônica industrial e desenvolvimento de sistemas aplicados
        à operação real.
      </p>
    </div>

    <div className="relative mt-12">
  <div className="absolute left-[21px] top-0 h-full w-px bg-gradient-to-b from-[color:var(--accent)] via-[color:var(--line)] to-transparent lg:left-1/2 lg:-translate-x-1/2" />

  <div className="grid gap-8">
    {aboutProfile.experiences.map((experience, index) => (
          <motion.article
            key={`${experience.company}-${experience.period}`}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
            className="relative pl-14 lg:grid lg:grid-cols-2 lg:gap-0 lg:pl-0"
          >
            <div className="absolute left-[14px] top-7 z-10 grid h-4 w-4 place-items-center rounded-full border border-[color:var(--accent)] bg-[color:var(--bg)] shadow-[0_0_24px_color-mix(in_srgb,var(--accent)_42%,transparent)] lg:left-1/2 lg:-translate-x-1/2">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
            </div>

            <div
              className={
                index % 2 === 0
                  ? "lg:col-start-1 lg:pr-12"
                  : "lg:col-start-2 lg:pl-12"
              }
            >
              <div className="group relative overflow-hidden rounded-[1.7rem] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-5 transition hover:-translate-y-1 hover:border-[color:var(--accent)]">
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[color:var(--accent)]/10 blur-2xl opacity-0 transition group-hover:opacity-100" />

                <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[color:var(--accent)]">
                      Degrau 0{index + 1}
                    </p>

                    <h4 className="mt-3 text-xl font-black text-[color:var(--text)]">
                      {experience.company}
                    </h4>

                    <p className="mt-2 text-sm font-black text-[color:var(--accent)]">
                      {experience.role}
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[color:var(--muted)]">
                    {experience.period}
                  </span>
                </div>

                <p className="relative z-10 mt-5 text-sm leading-7 text-[color:var(--muted)]">
                  {experience.description}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </motion.div>
</div>
      </div>
    </section>
  );
}