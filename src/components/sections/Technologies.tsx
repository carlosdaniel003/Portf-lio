// src/components/sections/Technologies.tsx
"use client";

import { stackGroups } from "@/data/stack";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import type { LucideIcon } from "lucide-react";

import {
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  Layers3,
  MonitorCog,
} from "lucide-react";

import { useMemo, useState } from "react";

const groupIcons: LucideIcon[] = [
  MonitorCog,
  Database,
  BrainCircuit,
  Layers3,
];

const revealTransition = {
  duration: 0.58,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function Technologies() {
  const shouldReduceMotion = useReducedMotion();
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [activeTechnologyIndex, setActiveTechnologyIndex] = useState(0);

  const activeGroup =
    stackGroups[activeGroupIndex] ?? stackGroups[0];

  const activeTechnology =
    activeGroup?.technologies[activeTechnologyIndex] ??
    activeGroup?.technologies[0];

  const technologyCount = useMemo(
    () =>
      stackGroups.reduce(
        (total, group) => total + group.technologies.length,
        0
      ),
    []
  );

  function selectGroup(index: number) {
    setActiveGroupIndex(index);
    setActiveTechnologyIndex(0);
  }

  if (!activeGroup) {
    return null;
  }

  return (
    <section
      id="tecnologias"
      className="relative scroll-mt-28 overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="editorial-number absolute right-[-0.04em] top-[0.06em] opacity-55">
          03
        </div>

        <div className="absolute right-[-18rem] top-[18%] h-[42rem] w-[42rem] rounded-full bg-[color:var(--accent)]/10 blur-[160px]" />
        <div className="absolute bottom-[8%] left-[-17rem] h-[38rem] w-[38rem] rounded-full bg-[color:var(--accent-2)]/10 blur-[150px]" />
      </div>

      <div className="portfolio-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={revealTransition}
          className="grid gap-10 border-b border-[color:var(--line-soft)] pb-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-end lg:pb-16"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--accent)]">
                Stack / 03
              </span>
              <span
                aria-hidden="true"
                className="h-px w-12 bg-gradient-to-r from-[color:var(--accent)] to-transparent"
              />
            </div>

            <h2 className="section-title max-w-[13ch] text-[color:var(--text)]">
              Tecnologias aplicadas,
              <span className="text-gradient"> não apenas listadas.</span>
            </h2>
          </div>

          <div className="lg:border-l lg:border-[color:var(--line)] lg:pl-10">
            <p className="text-base leading-8 text-[color:var(--muted)] sm:text-lg sm:leading-9">
              Cada ferramenta aparece ligada ao papel que exerce nos projetos:
              interface, dados, inteligência, visualização ou entrega.
            </p>

            <div className="mt-7 flex gap-8">
              <div>
                <span className="block font-display text-3xl font-bold tracking-[-0.07em] text-[color:var(--text)]">
                  {String(stackGroups.length).padStart(2, "0")}
                </span>
                <span className="mt-1 block font-mono text-[8px] font-semibold uppercase tracking-[0.17em] text-[color:var(--muted)]">
                  Grupos
                </span>
              </div>

              <div>
                <span className="block font-display text-3xl font-bold tracking-[-0.07em] text-[color:var(--text)]">
                  {String(technologyCount).padStart(2, "0")}
                </span>
                <span className="mt-1 block font-mono text-[8px] font-semibold uppercase tracking-[0.17em] text-[color:var(--muted)]">
                  Tecnologias
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ...revealTransition, delay: 0.08 }}
          className="relative mt-12 overflow-hidden rounded-[2.5rem] border border-[color:var(--line-strong)] bg-[color:var(--panel-strong)] shadow-[0_32px_105px_var(--shadow-deep)] lg:mt-16"
        >
          <div
            aria-hidden="true"
            className="soft-grid pointer-events-none absolute inset-0 opacity-20"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-12rem] top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-[color:var(--accent)]/10 blur-[125px]"
          />

          <div className="relative z-10 p-6 sm:p-8 lg:p-11">
            <div className="grid gap-6 lg:grid-cols-[minmax(245px,0.32fr)_minmax(0,0.68fr)]">
              <div className="rounded-[1.7rem] border border-[color:var(--line)] bg-[color:var(--panel)] p-3">
                <div className="mb-2 flex items-center justify-between gap-4 px-3 py-2">
                  <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.19em] text-[color:var(--muted)]">
                    Áreas da stack
                  </span>
                  <span className="font-mono text-[8px] font-semibold tracking-[0.16em] text-[color:var(--accent)]">
                    {String(activeGroupIndex + 1).padStart(2, "0")}/
                    {String(stackGroups.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="grid gap-2">
                  {stackGroups.map((group, index) => {
                    const Icon = groupIcons[index] ?? Cpu;
                    const isActive = index === activeGroupIndex;

                    return (
                      <button
                        key={group.title}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => selectGroup(index)}
                        onFocus={() => selectGroup(index)}
                        className={`group relative overflow-hidden rounded-[1.3rem] border p-4 text-left transition-all duration-300 ${
                          isActive
                            ? "border-[color:var(--accent)] bg-[color:var(--panel-raised)]"
                            : "border-transparent bg-transparent hover:border-[color:var(--line)] hover:bg-[color:var(--panel-strong)]"
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="active-technology-group"
                            className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,color-mix(in_srgb,var(--accent)_9%,transparent),transparent_60%)]"
                            transition={{
                              type: "spring",
                              stiffness: 240,
                              damping: 28,
                            }}
                          />
                        )}

                        <span className="relative z-10 flex items-center gap-4">
                          <span
                            className={`grid h-10 w-10 shrink-0 place-items-center rounded-[0.9rem] border ${
                              isActive
                                ? "border-[color:var(--accent)]/50 bg-[color:var(--accent)]/10 text-[color:var(--accent)]"
                                : "border-[color:var(--line)] bg-[color:var(--bg-deep)]/30 text-[color:var(--muted)]"
                            }`}
                          >
                            <Icon size={18} strokeWidth={1.9} />
                          </span>

                          <span className="min-w-0 flex-1">
                            <span className="block font-mono text-[7px] font-semibold uppercase tracking-[0.17em] text-[color:var(--subtle)]">
                              Stack / {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="mt-1.5 block text-sm font-bold leading-5 text-[color:var(--text)]">
                              {group.title}
                            </span>
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="relative min-h-[510px] overflow-hidden rounded-[1.8rem] border border-[color:var(--line)] bg-[color:var(--bg-deep)]/35 p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeGroup.title}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: 16, filter: "blur(7px)" }
                    }
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: -10, filter: "blur(5px)" }
                    }
                    transition={{ duration: 0.27, ease: "easeOut" }}
                  >
                    <p className="tech-label">{activeGroup.title}</p>

                    <h3 className="mt-5 max-w-[17ch] font-display text-3xl font-bold leading-[1] tracking-[-0.05em] text-[color:var(--text)] sm:text-4xl">
                      {activeGroup.description}
                    </h3>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {activeGroup.technologies.map((technology, index) => {
                        const isActive = index === activeTechnologyIndex;

                        return (
                          <button
                            key={technology.name}
                            type="button"
                            aria-pressed={isActive}
                            onClick={() => setActiveTechnologyIndex(index)}
                            className={`flex items-center gap-3 rounded-full border px-3 py-2 transition-all ${
                              isActive
                                ? "border-[color:var(--accent)] bg-[color:var(--accent)]/10"
                                : "border-[color:var(--line)] bg-[color:var(--panel)] hover:border-[color:var(--accent)]"
                            }`}
                          >
                            <span className="grid h-7 min-w-7 place-items-center rounded-full bg-[color:var(--accent)]/10 px-2 font-mono text-[8px] font-semibold text-[color:var(--accent)]">
                              {technology.badge}
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[color:var(--text)]">
                              {technology.name}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {activeTechnology && (
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeTechnology.name}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.22 }}
                          className="mt-10 border-t border-[color:var(--line)] pt-8"
                        >
                          <div className="flex items-start gap-5">
                            <span className="grid h-14 min-w-14 place-items-center rounded-[1.1rem] border border-[color:var(--accent)]/40 bg-[color:var(--accent)]/10 px-2 font-mono text-xs font-semibold text-[color:var(--accent)]">
                              {activeTechnology.badge}
                            </span>

                            <div>
                              <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.19em] text-[color:var(--muted)]">
                                Aplicação nos projetos
                              </p>
                              <h4 className="mt-2 text-xl font-bold tracking-[-0.035em] text-[color:var(--text)]">
                                {activeTechnology.name}
                              </h4>
                              <p className="mt-4 max-w-2xl text-sm leading-7 text-[color:var(--muted)]">
                                {activeTechnology.usage}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-8 grid gap-px overflow-hidden rounded-[1.6rem] border border-[color:var(--line)] bg-[color:var(--line-soft)] md:grid-cols-3">
              {[
                {
                  code: "HW",
                  title: "Eletrônica",
                  description:
                    "Circuitos, equipamentos, diagnóstico e contexto físico.",
                  icon: Cpu,
                },
                {
                  code: "SW",
                  title: "Software",
                  description:
                    "Lógica, dados, interfaces e organização de processos.",
                  icon: Code2,
                },
                {
                  code: "AI",
                  title: "Inteligência",
                  description:
                    "Análise, visão computacional e apoio técnico à decisão.",
                  icon: BrainCircuit,
                },
              ].map((axis) => {
                const Icon = axis.icon;

                return (
                  <div
                    key={axis.code}
                    className="flex items-start gap-4 bg-[color:var(--panel)] p-5 sm:p-6"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[1rem] border border-[color:var(--line)] bg-[color:var(--bg-deep)]/45 text-[color:var(--accent)]">
                      <Icon size={18} strokeWidth={1.9} />
                    </span>

                    <div>
                      <span className="font-display text-xl font-bold tracking-[-0.05em] text-[color:var(--accent)]">
                        {axis.code}
                      </span>
                      <h4 className="mt-2 text-base font-bold text-[color:var(--text)]">
                        {axis.title}
                      </h4>
                      <p className="mt-2 text-xs leading-6 text-[color:var(--muted)]">
                        {axis.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
