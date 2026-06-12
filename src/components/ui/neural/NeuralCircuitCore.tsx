// src\components\ui\neural\NeuralCircuitCore.tsx
"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const orbitNodes = [
  {
    id: "full-stack",
    label: "Full Stack",
    x: 50,
    y: 16,
    delay: 0,
  },
  {
    id: "ia",
    label: "IA",
    x: 82,
    y: 34,
    delay: 0.2,
  },
  {
    id: "vision",
    label: "Visão",
    x: 76,
    y: 72,
    delay: 0.4,
  },
  {
    id: "data",
    label: "Dados",
    x: 24,
    y: 72,
    delay: 0.6,
  },
  {
    id: "factory",
    label: "Fábrica",
    x: 18,
    y: 34,
    delay: 0.8,
  },
];

const connectionPaths = [
  "M 50 50 L 50 16",
  "M 50 50 L 82 34",
  "M 50 50 L 76 72",
  "M 50 50 L 24 72",
  "M 50 50 L 18 34",
  "M 50 16 C 70 16 84 22 82 34",
  "M 82 34 C 90 52 86 65 76 72",
  "M 76 72 C 56 86 40 86 24 72",
  "M 24 72 C 10 58 10 44 18 34",
  "M 18 34 C 25 20 36 16 50 16",
];

export default function NeuralCircuitCore() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 24 });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-9, 9]);
  const glowX = useTransform(smoothX, [-0.5, 0.5], ["34%", "66%"]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], ["32%", "68%"]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card group relative min-h-[460px] overflow-hidden rounded-[2rem] p-5 sm:min-h-[520px] sm:p-7"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([x, y]) =>
              `radial-gradient(circle at ${x} ${y}, color-mix(in srgb, var(--accent) 22%, transparent), transparent 34%)`
          ),
        }}
      />

      <div className="soft-grid pointer-events-none absolute inset-0 opacity-30" />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/4 h-64 w-64 rounded-full bg-[color:var(--accent)]/15 blur-3xl"
        animate={{
          scale: [1, 1.22, 1],
          opacity: [0.22, 0.42, 0.22],
        }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-[color:var(--accent-2)]/15 blur-3xl"
        animate={{
          scale: [1.12, 0.94, 1.12],
          opacity: [0.36, 0.18, 0.36],
        }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--accent)]">
            Neural Circuit Core
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-[-0.04em] text-[color:var(--text)]">
            Sistemas inteligentes em fluxo.
          </h2>
        </div>

        <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel-strong)]">
          <motion.span
            className="absolute h-8 w-8 rounded-full border border-[color:var(--accent)]"
            animate={{ scale: [0.8, 1.45], opacity: [0.75, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          />
          <span className="relative h-2.5 w-2.5 rounded-full bg-[color:var(--accent)] shadow-[0_0_24px_var(--accent)]" />
        </div>
      </div>

      <div className="relative z-10 flex min-h-[350px] items-center justify-center rounded-[1.7rem] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-3 sm:min-h-[390px]">
        <motion.div
          className="absolute inset-x-6 top-8 h-px bg-gradient-to-r from-transparent via-[color:var(--accent)] to-transparent opacity-60"
          animate={{ y: [0, 295, 0], opacity: [0, 0.7, 0] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
        />

        <svg
          viewBox="0 0 100 100"
          className="relative z-10 h-full max-h-[340px] w-full max-w-[430px] overflow-visible"
          role="img"
          aria-label="Núcleo neural industrial com conexões animadas"
        >
          <defs>
            <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="1" />
              <stop offset="45%" stopColor="var(--accent-2)" stopOpacity="0.55" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.08" />
              <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="var(--accent-2)" stopOpacity="0.12" />
            </linearGradient>

            <filter id="softGlow">
              <feGaussianBlur stdDeviation="1.8" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <motion.circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="var(--line)"
            strokeWidth="0.25"
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "50px 50px" }}
          />

          <motion.circle
            cx="50"
            cy="50"
            r="22"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="0.22"
            strokeDasharray="2 5"
            opacity="0.55"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "50px 50px" }}
          />

          {connectionPaths.map((path, index) => (
            <g key={path}>
              <path
                d={path}
                fill="none"
                stroke="var(--line)"
                strokeWidth="0.34"
                strokeLinecap="round"
              />

              <motion.path
                d={path}
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="0.72"
                strokeLinecap="round"
                strokeDasharray="7 18"
                filter="url(#softGlow)"
                animate={{ strokeDashoffset: [28, 0] }}
                transition={{
                  duration: 2.6,
                  delay: index * 0.08,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </g>
          ))}

          <motion.circle
            cx="50"
            cy="50"
            r="15"
            fill="url(#coreGradient)"
            opacity="0.72"
            animate={{
              scale: [0.92, 1.08, 0.92],
              opacity: [0.56, 0.88, 0.56],
            }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "50px 50px" }}
          />

          <motion.circle
            cx="50"
            cy="50"
            r="6"
            fill="var(--accent)"
            filter="url(#softGlow)"
            animate={{
              scale: [1, 1.18, 1],
            }}
            transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "50px 50px" }}
          />

          <circle cx="50" cy="50" r="2.1" fill="var(--bg)" opacity="0.9" />
          <circle cx="50" cy="50" r="1.1" fill="var(--accent-2)" />

          {orbitNodes.map((node) => (
            <g key={node.id}>
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="4.8"
                fill="var(--panel-strong)"
                stroke="var(--accent)"
                strokeWidth="0.45"
                filter="url(#softGlow)"
                animate={{
                  scale: [1, 1.16, 1],
                  opacity: [0.86, 1, 0.86],
                }}
                transition={{
                  duration: 2.8,
                  delay: node.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transformOrigin: `${node.x}px ${node.y}px` }}
              />

              <circle cx={node.x} cy={node.y} r="1.55" fill="var(--accent)" />

              <text
                x={node.x}
                y={node.y + 9.2}
                textAnchor="middle"
                className="fill-[color:var(--muted)] text-[3px] font-black uppercase tracking-[0.18em]"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>

        <div className="pointer-events-none absolute bottom-4 left-4 right-4 z-20 grid gap-2 sm:grid-cols-3">
          <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] px-3 py-2 backdrop-blur-xl">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[color:var(--accent)]">
              Input
            </p>
            <p className="mt-1 text-xs font-semibold text-[color:var(--muted)]">
              Problema real
            </p>
          </div>

          <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] px-3 py-2 backdrop-blur-xl">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[color:var(--accent)]">
              Core
            </p>
            <p className="mt-1 text-xs font-semibold text-[color:var(--muted)]">
              Software + IA
            </p>
          </div>

          <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] px-3 py-2 backdrop-blur-xl">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[color:var(--accent)]">
              Output
            </p>
            <p className="mt-1 text-xs font-semibold text-[color:var(--muted)]">
              Decisão rápida
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}