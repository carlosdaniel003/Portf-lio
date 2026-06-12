// src\components\ui\Loader.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";

const bootSteps = [
  "Mapeando operação real",
  "Ativando núcleo neural",
  "Carregando projetos",
  "Preparando interface",
];

const nodes = [
  { label: "DEV", x: "50%", y: "12%", delay: 0.1 },
  { label: "IA", x: "82%", y: "35%", delay: 0.22 },
  { label: "CV", x: "72%", y: "78%", delay: 0.34 },
  { label: "DB", x: "28%", y: "78%", delay: 0.46 },
  { label: "HW", x: "18%", y: "35%", delay: 0.58 },
];

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const stepTimers = bootSteps.map((_, index) =>
      setTimeout(() => {
        setCurrentStep(index);
      }, index * 360)
    );

    const finishTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1750);

    return () => {
      stepTimers.forEach((timer) => clearTimeout(timer));
      clearTimeout(finishTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[color:var(--bg)] text-[color:var(--text)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          <div className="soft-grid absolute inset-0 opacity-40" />

          <motion.div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--accent)]/10 blur-3xl"
            animate={{
              scale: [0.82, 1.08, 0.92],
              opacity: [0.18, 0.42, 0.22],
            }}
            transition={{ duration: 1.7, ease: "easeInOut" }}
          />

          <motion.div
            aria-hidden
            className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[color:var(--accent)]/10 to-transparent"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: ["-100%", "320%", "760%"], opacity: [0, 0.75, 0] }}
            transition={{ duration: 1.55, ease: [0.7, 0, 0.2, 1] }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -18 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative z-10 w-[min(92vw,520px)] overflow-hidden rounded-[2.2rem] border border-[color:var(--line)] bg-[color:var(--panel)] p-6 shadow-[0_24px_90px_var(--shadow)] backdrop-blur-2xl sm:p-8"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,color-mix(in_srgb,var(--accent)_18%,transparent),transparent_48%)]" />

            <div className="relative z-10">
              <div className="mb-7 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[color:var(--accent)]">
                    Portfolio OS
                  </p>
                  <h2 className="mt-2 text-2xl font-black tracking-[-0.04em] text-[color:var(--text)]">
                    Inicializando sistemas inteligentes
                  </h2>
                </div>

                <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel-strong)]">
                  <motion.span
                    className="absolute h-8 w-8 rounded-full border border-[color:var(--accent)]"
                    animate={{ scale: [0.75, 1.55], opacity: [0.8, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
                  />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-[color:var(--accent)] shadow-[0_0_24px_var(--accent)]" />
                </div>
              </div>

              <div className="relative mx-auto mb-7 aspect-square w-full max-w-[290px]">
                <motion.div
                  className="absolute inset-[24%] rounded-full border border-[color:var(--accent)]/45"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />

                <motion.div
                  className="absolute inset-[16%] rounded-full border border-dashed border-[color:var(--line)]"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />

                <div className="absolute left-1/2 top-1/2 h-px w-[68%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[color:var(--accent)]/60 to-transparent" />
                <div className="absolute left-1/2 top-1/2 h-[68%] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-[color:var(--accent-2)]/50 to-transparent" />

                <motion.div
                  className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[color:var(--accent)]/20 shadow-[0_0_60px_color-mix(in_srgb,var(--accent)_45%,transparent)]"
                  animate={{
                    scale: [0.92, 1.08, 0.92],
                    opacity: [0.82, 1, 0.82],
                  }}
                  transition={{ duration: 1.35, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Logo variant="mark" size="md" />
                </motion.div>

                {nodes.map((node) => (
                  <motion.div
                    key={node.label}
                    className="absolute grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] text-[10px] font-black text-[color:var(--accent)] shadow-[0_0_26px_color-mix(in_srgb,var(--accent)_18%,transparent)]"
                    style={{ left: node.x, top: node.y }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: [0.9, 1.08, 1] }}
                    transition={{ duration: 0.45, delay: node.delay, ease: "easeOut" }}
                  >
                    <motion.span
                      className="absolute h-7 w-7 rounded-full border border-[color:var(--accent)]"
                      animate={{ scale: [0.8, 1.45], opacity: [0.55, 0] }}
                      transition={{
                        duration: 1.4,
                        delay: node.delay,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                    <span className="relative">{node.label}</span>
                  </motion.div>
                ))}
              </div>

              <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-4">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[color:var(--muted)]">
                    {bootSteps[currentStep]}
                  </p>

                  <motion.p
                    key={currentStep}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs font-black text-[color:var(--accent)]"
                  >
                    0{currentStep + 1}/04
                  </motion.p>
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-[color:var(--bg)]">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-2)] shadow-[0_0_20px_var(--accent)]"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.55, ease: [0.7, 0, 0.2, 1] }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}