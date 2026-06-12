"use client";

import TiltCard from "@/components/ui/TiltCard";
import { projectsData } from "@/data/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Image as Images, Layers3 } from "lucide-react";
import { useEffect, useState } from "react";

export default function CaseStudies() {
  const [selectedProjectId, setSelectedProjectId] = useState(projectsData[0].id);

  const selectedProject =
    projectsData.find((project) => project.id === selectedProjectId) ?? projectsData[0];

  const selectedProjectIndex = projectsData.findIndex(
    (project) => project.id === selectedProject.id
  );

  const galleryImages = selectedProject.galleryUrls ?? [];
  const firstGalleryImage = galleryImages[0] ?? "";
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(firstGalleryImage);

  useEffect(() => {
    setSelectedGalleryImage(firstGalleryImage);
  }, [firstGalleryImage, selectedProject.id]);

  return (
    <section id="projetos" className="relative py-24">
      <div className="portfolio-container">
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[color:var(--accent)]">
              Projetos reais
            </p>
            <h2 className="text-4xl font-black tracking-[-0.04em] text-[color:var(--text)] sm:text-5xl">
              Selecione um sistema e veja o case completo.
            </h2>
          </div>
        </div>

        <div className="glass-card overflow-hidden rounded-[2.5rem]">
          <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
            <aside className="border-b border-[color:var(--line)] bg-[color:var(--panel-strong)] p-5 sm:p-6 lg:border-b-0 lg:border-r">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[color:var(--accent)]">
                    Project Deck
                  </p>
                  <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-[color:var(--text)]">
                    Escolha um projeto
                  </h3>
                </div>

                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] text-[color:var(--accent)]">
                  <Layers3 size={22} />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:max-h-[780px] lg:grid-cols-1 lg:overflow-y-auto lg:pr-2">
                {projectsData.map((project, index) => {
                  const isSelected = project.id === selectedProject.id;

                  return (
                    <TiltCard
                      as="button"
                      key={project.id}
                      type="button"
                      onClick={() => setSelectedProjectId(project.id)}
                      intensity="medium"
                      revealDelay={index * 0.04}
                      className={
                        isSelected
                          ? "group rounded-[1.6rem] border border-[color:var(--accent)] bg-[color:var(--bg)] p-4 text-left shadow-[0_0_42px_color-mix(in_srgb,var(--accent)_14%,transparent)] transition"
                          : "group rounded-[1.6rem] border border-[color:var(--line)] bg-[color:var(--panel)] p-4 text-left transition hover:border-[color:var(--accent)] hover:bg-[color:var(--bg)]"
                      }
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 transition group-hover:opacity-10 ${
                          isSelected ? "opacity-10" : ""
                        }`}
                      />

                      <div className="relative z-10 flex gap-4">
                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel-strong)]">
                          {project.thumbnailUrl ? (
                            <img
                              src={project.thumbnailUrl}
                              alt={project.shortTitle}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="relative grid h-full w-full place-items-center">
                              <div
                                className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-25`}
                              />
                              <div className="soft-grid absolute inset-0 opacity-30" />
                              <span className="relative z-10 text-lg font-black text-[color:var(--text)]">
                                {project.shortTitle.slice(0, 2).toUpperCase()}
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[color:var(--accent)]">
                              Case {String(index + 1).padStart(2, "0")}
                            </p>

                            <span className="rounded-full border border-[color:var(--line)] px-2 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-[color:var(--muted)]">
                              {project.status}
                            </span>
                          </div>

                          <h4 className="mt-3 truncate text-lg font-black text-[color:var(--text)]">
                            {project.shortTitle}
                          </h4>

                          <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--muted)]">
                            {project.category}
                          </p>

                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {project.technologies.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full bg-[color:var(--accent)]/10 px-2 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-[color:var(--accent)]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  );
                })}
              </div>
            </aside>

            <div className="p-5 sm:p-6 lg:p-8">
              <AnimatePresence mode="wait">
                <motion.article
                  key={selectedProject.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.28 }}
                  className="grid gap-6"
                >
                  <TiltCard
                    as="div"
                    intensity="subtle"
                    className="relative min-h-[320px] rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--panel-strong)]"
                  >
                    {selectedProject.coverUrl ? (
                      <img
                        src={selectedProject.coverUrl}
                        alt={selectedProject.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    ) : (
                      <>
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${selectedProject.accent} opacity-25`}
                        />
                        <div className="soft-grid absolute inset-0 opacity-40" />
                      </>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--bg)] via-[color:var(--bg)]/35 to-transparent" />

                    <div className="relative z-10 flex min-h-[320px] flex-col justify-between p-6 sm:p-8">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <span className="rounded-full border border-white/15 bg-black/25 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white backdrop-blur-xl">
                          {selectedProject.category}
                        </span>

                        <span className="rounded-full border border-white/15 bg-black/25 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/75 backdrop-blur-xl">
                          Case {String(selectedProjectIndex + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div>
                        <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-white/65">
                          Projeto selecionado
                        </p>

                        <h3 className="max-w-3xl text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl">
                          {selectedProject.shortTitle}
                        </h3>

                        <p className="mt-4 max-w-2xl text-sm font-bold uppercase tracking-[0.18em] text-white/70">
                          {selectedProject.status}
                        </p>
                      </div>
                    </div>
                  </TiltCard>

                  <TiltCard
                    as="div"
                    intensity="subtle"
                    className="flex flex-col justify-between gap-5 rounded-[1.7rem] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-5 sm:flex-row sm:items-start"
                  >
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-[color:var(--accent)]">
                        Case completo
                      </p>

                      <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[color:var(--text)]">
                        {selectedProject.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <a
                        href={selectedProject.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[color:var(--text)] transition hover:border-[color:var(--accent)]"
                      >
                        Código <ArrowUpRight size={14} />
                      </a>

                      {selectedProject.demoUrl && (
                        <a
                          href={selectedProject.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#04110d] transition hover:-translate-y-0.5"
                        >
                          Demo <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </TiltCard>

                  <div className="grid gap-4 md:grid-cols-3">
                    <TiltCard
                      as="div"
                      intensity="medium"
                      className="rounded-[1.7rem] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-5"
                    >
                      <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[color:var(--accent)]">
                        Problema
                      </p>
                      <p className="text-sm leading-7 text-[color:var(--muted)]">
                        {selectedProject.problem}
                      </p>
                    </TiltCard>

                    <TiltCard
                      as="div"
                      intensity="medium"
                      className="rounded-[1.7rem] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-5"
                    >
                      <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[color:var(--accent)]">
                        Solução
                      </p>
                      <p className="text-sm leading-7 text-[color:var(--muted)]">
                        {selectedProject.solution}
                      </p>
                    </TiltCard>

                    <TiltCard
                      as="div"
                      intensity="medium"
                      className="rounded-[1.7rem] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-5"
                    >
                      <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[color:var(--accent)]">
                        Impacto
                      </p>
                      <p className="text-sm leading-7 text-[color:var(--muted)]">
                        {selectedProject.impact}
                      </p>
                    </TiltCard>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                    <TiltCard
                      as="div"
                      intensity="subtle"
                      className="rounded-[1.7rem] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-5"
                    >
                      <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[color:var(--accent)]">
                        Destaques
                      </p>

                      <ul className="grid gap-3 sm:grid-cols-2">
                        {selectedProject.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-sm font-semibold leading-6 text-[color:var(--text)]"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </TiltCard>

                    <TiltCard
                      as="div"
                      intensity="subtle"
                      className="rounded-[1.7rem] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-5"
                    >
                      <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[color:var(--accent)]">
                        Stack
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-[color:var(--line)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[color:var(--muted)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </TiltCard>
                  </div>

                  {galleryImages.length > 0 && (
                    <TiltCard
                      as="div"
                      intensity="subtle"
                      className="rounded-[1.7rem] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-5"
                    >
                      <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.2em] text-[color:var(--accent)]">
                            Screenshots do sistema
                          </p>
                          <h4 className="mt-2 text-2xl font-black tracking-[-0.04em] text-[color:var(--text)]">
                            Interface em uso real
                          </h4>
                        </div>

                        <div className="flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[color:var(--muted)]">
                          <Images size={14} />
                          {galleryImages.length} imagem
                          {galleryImages.length > 1 ? "s" : ""}
                        </div>
                      </div>

                      <div className="relative overflow-hidden rounded-[1.4rem] border border-[color:var(--line)] bg-[color:var(--bg)]">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={selectedGalleryImage}
                            src={selectedGalleryImage}
                            alt={`${selectedProject.shortTitle} screenshot`}
                            initial={{ opacity: 0, scale: 1.02 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.28 }}
                            className="h-auto max-h-[520px] w-full object-contain"
                          />
                        </AnimatePresence>
                      </div>

                      {galleryImages.length > 1 && (
                        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5">
                          {galleryImages.map((imageUrl, index) => {
                            const isActive = selectedGalleryImage === imageUrl;

                            return (
                              <button
                                key={imageUrl}
                                type="button"
                                onClick={() => setSelectedGalleryImage(imageUrl)}
                                className={
                                  isActive
                                    ? "relative overflow-hidden rounded-2xl border border-[color:var(--accent)] bg-[color:var(--bg)] p-1 shadow-[0_0_26px_color-mix(in_srgb,var(--accent)_20%,transparent)]"
                                    : "relative overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-1 transition hover:border-[color:var(--accent)]"
                                }
                              >
                                <img
                                  src={imageUrl}
                                  alt={`${selectedProject.shortTitle} miniatura ${index + 1}`}
                                  className="h-20 w-full rounded-xl object-cover"
                                />

                                <span className="absolute left-2 top-2 rounded-full bg-black/45 px-2 py-1 text-[9px] font-black text-white backdrop-blur-xl">
                                  {String(index + 1).padStart(2, "0")}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </TiltCard>
                  )}
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}