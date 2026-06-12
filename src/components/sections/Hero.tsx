// src\components\sections\Hero.tsx
"use client";

import NeuralCircuitCore from "@/components/ui/neural/NeuralCircuitCore";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[680px] items-start overflow-hidden pt-0">

      <div className="portfolio-container relative z-10 grid items-center gap-12 pt-8 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[color:var(--muted)] backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[color:var(--accent)] shadow-[0_0_18px_var(--accent)]" />
            Software para problemas reais
          </div>

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

        <NeuralCircuitCore />
      </div>
    </section>
  );
}