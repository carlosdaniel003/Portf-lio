// src\components\sections\Hero.tsx
"use client";

import InteractiveBackground from "@/components/ui/InteractiveBackground";
import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Code2, Eye, Factory } from "lucide-react";

const pillars = [
  { label: "Full Stack", icon: Code2 },
  { label: "IA Aplicada", icon: BrainCircuit },
  { label: "Visão Computacional", icon: Eye },
  { label: "Sistemas Industriais", icon: Factory },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[760px] items-start overflow-hidden pt-12 sm:pt-16 lg:pt-20">
      <InteractiveBackground />

      <div className="portfolio-container relative z-10 grid items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--muted)] backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[color:var(--accent)] shadow-[0_0_18px_var(--accent)]" />
            Software para operação real
          </div>
<div className="portfolio-container relative z-10 grid items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr]"></div>
          <h1 className="max-w-5xl text-5xl font-black tracking-[-0.06em] text-[color:var(--text)] sm:text-6xl lg:text-7xl">
            Transformo problemas de fábrica em
            <span className="text-gradient"> sistemas inteligentes.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
            Desenvolvedor Full Stack com base técnica em eletrônica, criando soluções com IA,
            visão computacional, dashboards e automação para qualidade, produção e operação.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projetos"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[color:var(--accent)] px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#04110d] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_color-mix(in_srgb,var(--accent)_28%,transparent)]"
            >
              Ver projetos
              <ArrowRight className="transition group-hover:translate-x-1" size={18} />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-[color:var(--text)] transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
            >
              Falar sobre um projeto
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="glass-card relative rounded-[2rem] p-5 sm:p-7"
        >
          <div className="mb-6 flex items-center justify-between border-b border-[color:var(--line)] pb-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--muted)]">
                Portfolio OS
              </p>
              <h2 className="mt-2 text-2xl font-black text-[color:var(--text)]">
                Capacidade de entrega
              </h2>
            </div>
            <span className="rounded-full bg-[color:var(--accent)]/15 px-3 py-1 text-xs font-black text-[color:var(--accent)]">
              Online
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.label}
                  whileHover={{ y: -6, rotateX: 3, rotateY: -3 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-5"
                >
                  <div className="mb-8 grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--accent)]/12 text-[color:var(--accent)]">
                    <Icon size={22} />
                  </div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[color:var(--muted)]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-black text-[color:var(--text)]">
                    {pillar.label}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
