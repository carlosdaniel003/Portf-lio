"use client";

import { projectsData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CaseStudies() {
  return (
    <section id="projetos" className="relative py-24">
      <div className="portfolio-container">
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[color:var(--accent)]">
              Projetos reais
            </p>
            <h2 className="text-4xl font-black tracking-[-0.04em] text-[color:var(--text)] sm:text-5xl">
              Cases que mostram o que eu consigo entregar de ponta a ponta.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[color:var(--muted)]">
            Cada projeto é apresentado como produto: problema, solução, impacto, tecnologias e links para código ou demonstração.
          </p>
        </div>

        <div className="grid gap-6">
          {projectsData.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="glass-card group overflow-hidden rounded-[2rem]"
            >
              <div className="grid gap-0 lg:grid-cols-[0.86fr_1.14fr]">
                <div className="relative min-h-[280px] overflow-hidden border-b border-[color:var(--line)] bg-[color:var(--panel-strong)] p-6 lg:border-b-0 lg:border-r">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-20`} />
                  <div className="soft-grid absolute inset-0 opacity-40" />
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div>
                      <div className="mb-5 inline-flex rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
                        {project.category}
                      </div>
                      <h3 className="text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
                        {project.shortTitle}
                      </h3>
                    </div>

                    <div className="mt-10 rounded-3xl border border-white/15 bg-black/30 p-5 text-white backdrop-blur-xl">
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-white/60">Status</p>
                      <p className="mt-2 text-lg font-black">{project.status}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--accent)]">
                        Case 0{index + 1}
                      </p>
                      <h3 className="mt-3 text-2xl font-black text-[color:var(--text)] sm:text-3xl">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[color:var(--text)] transition hover:border-[color:var(--accent)]"
                      >
                        Código <ArrowUpRight size={14} />
                      </a>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#04110d] transition hover:-translate-y-0.5"
                        >
                          Demo <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-3">
                    <div>
                      <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-[color:var(--muted)]">Problema</p>
                      <p className="text-sm leading-7 text-[color:var(--muted)]">{project.problem}</p>
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-[color:var(--muted)]">Solução</p>
                      <p className="text-sm leading-7 text-[color:var(--muted)]">{project.solution}</p>
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-[color:var(--muted)]">Impacto</p>
                      <p className="text-sm leading-7 text-[color:var(--muted)]">{project.impact}</p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-5 md:grid-cols-[1fr_0.9fr]">
                    <div className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-5">
                      <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[color:var(--accent)]">Destaques</p>
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {project.highlights.map((item) => (
                          <li key={item} className="flex gap-3 text-sm font-semibold text-[color:var(--text)]">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-5">
                      <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[color:var(--accent)]">Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-[color:var(--line)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[color:var(--muted)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
