// src\components\ui\neural\NeuralCircuitCore.tsx
"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const chipNodes = [
  {
    id: "full-stack",
    label: "Full Stack",
    x: 50,
    y: 10,
    delay: 0,
  },
  {
    id: "ia",
    label: "IA",
    x: 86,
    y: 25,
    delay: 0.18,
  },
  {
    id: "vision",
    label: "Visão",
    x: 84,
    y: 74,
    delay: 0.36,
  },
  {
    id: "data",
    label: "Dados",
    x: 16,
    y: 74,
    delay: 0.54,
  },
  {
    id: "factory",
    label: "Fábrica",
    x: 14,
    y: 25,
    delay: 0.72,
  },
];

const circuitPaths = [
  "M 50 30 L 50 18 L 50 10",
  "M 71 36 L 79 36 L 86 25",
  "M 71 58 L 78 58 L 84 74",
  "M 29 58 L 22 58 L 16 74",
  "M 29 36 L 21 36 L 14 25",
  "M 38 30 L 38 21 L 24 21 L 14 25",
  "M 62 30 L 62 21 L 76 21 L 86 25",
  "M 62 66 L 62 76 L 76 76 L 84 74",
  "M 38 66 L 38 76 L 24 76 L 16 74",
];

const leftPins = [34, 40, 46, 52, 58, 64];
const rightPins = [34, 40, 46, 52, 58, 64];
const topPins = [36, 43, 50, 57, 64];
const bottomPins = [36, 43, 50, 57, 64];

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
            Neural Chip Core
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-[-0.04em] text-[color:var(--text)]">
            Software conectado à eletrônica.
          </h2>
        </div>

        <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel-strong)]">
          <motion.span
            className="absolute h-8 w-8 rounded-[0.8rem] border border-[color:var(--accent)]"
            animate={{ scale: [0.8, 1.35], opacity: [0.75, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          />
          <span className="relative h-2.5 w-2.5 rounded-sm bg-[color:var(--accent)] shadow-[0_0_24px_var(--accent)]" />
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
          aria-label="Chip eletrônico industrial com conexões inteligentes animadas"
        >
          <defs>
            <linearGradient id="chipBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--panel-strong)" stopOpacity="1" />
              <stop offset="48%" stopColor="var(--bg-soft)" stopOpacity="0.96" />
              <stop offset="100%" stopColor="var(--panel-strong)" stopOpacity="1" />
            </linearGradient>

            <linearGradient id="chipLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.08" />
              <stop offset="48%" stopColor="var(--accent)" stopOpacity="0.95" />
              <stop offset="100%" stopColor="var(--accent-2)" stopOpacity="0.12" />
            </linearGradient>

            <radialGradient id="chipCoreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.82" />
              <stop offset="52%" stopColor="var(--accent-2)" stopOpacity="0.28" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </radialGradient>

            <filter
              id="chipSoftGlow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="1.8" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect
            x="7"
            y="16"
            width="86"
            height="68"
            rx="6"
            fill="none"
            stroke="var(--line)"
            strokeWidth="0.3"
            strokeDasharray="1.5 3"
            opacity="0.8"
          />

          {circuitPaths.map((path, index) => (
            <g key={path}>
              <path
                d={path}
                fill="none"
                stroke="var(--line)"
                strokeWidth="0.42"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <motion.path
                d={path}
                fill="none"
                stroke="url(#chipLineGradient)"
                strokeWidth="0.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="7 17"
                filter="url(#chipSoftGlow)"
                animate={{ strokeDashoffset: [28, 0] }}
                transition={{
                  duration: 2.4,
                  delay: index * 0.08,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </g>
          ))}

          {leftPins.map((y, index) => (
            <motion.g
              key={`left-${y}`}
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{
                duration: 2.2,
                delay: index * 0.08,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <line
                x1="20"
                y1={y}
                x2="29"
                y2={y}
                stroke="var(--accent)"
                strokeWidth="1.15"
                strokeLinecap="round"
                filter="url(#chipSoftGlow)"
              />
              <rect
                x="16"
                y={y - 1.15}
                width="4"
                height="2.3"
                rx="0.7"
                fill="var(--accent)"
                opacity="0.8"
              />
            </motion.g>
          ))}

          {rightPins.map((y, index) => (
            <motion.g
              key={`right-${y}`}
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{
                duration: 2.2,
                delay: index * 0.08 + 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <line
                x1="71"
                y1={y}
                x2="80"
                y2={y}
                stroke="var(--accent-2)"
                strokeWidth="1.15"
                strokeLinecap="round"
                filter="url(#chipSoftGlow)"
              />
              <rect
                x="80"
                y={y - 1.15}
                width="4"
                height="2.3"
                rx="0.7"
                fill="var(--accent-2)"
                opacity="0.82"
              />
            </motion.g>
          ))}

          {topPins.map((x, index) => (
            <motion.g
              key={`top-${x}`}
              animate={{ opacity: [0.4, 0.92, 0.4] }}
              transition={{
                duration: 2.4,
                delay: index * 0.08 + 0.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <line
                x1={x}
                y1="22"
                x2={x}
                y2="30"
                stroke="var(--accent)"
                strokeWidth="1"
                strokeLinecap="round"
                filter="url(#chipSoftGlow)"
              />
              <rect
                x={x - 1.1}
                y="18"
                width="2.2"
                height="4"
                rx="0.7"
                fill="var(--accent)"
                opacity="0.78"
              />
            </motion.g>
          ))}

          {bottomPins.map((x, index) => (
            <motion.g
              key={`bottom-${x}`}
              animate={{ opacity: [0.4, 0.92, 0.4] }}
              transition={{
                duration: 2.4,
                delay: index * 0.08 + 0.28,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <line
                x1={x}
                y1="66"
                x2={x}
                y2="74"
                stroke="var(--accent-2)"
                strokeWidth="1"
                strokeLinecap="round"
                filter="url(#chipSoftGlow)"
              />
              <rect
                x={x - 1.1}
                y="74"
                width="2.2"
                height="4"
                rx="0.7"
                fill="var(--accent-2)"
                opacity="0.78"
              />
            </motion.g>
          ))}

          <motion.rect
            x="29"
            y="30"
            width="42"
            height="36"
            rx="5.5"
            fill="url(#chipBodyGradient)"
            stroke="var(--accent)"
            strokeWidth="0.65"
            filter="url(#chipSoftGlow)"
            animate={{
              opacity: [0.88, 1, 0.88],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <rect
            x="32.5"
            y="33.5"
            width="35"
            height="29"
            rx="3.8"
            fill="none"
            stroke="var(--line)"
            strokeWidth="0.45"
          />

          <motion.rect
            x="38"
            y="39"
            width="24"
            height="16"
            rx="3"
            fill="url(#chipCoreGlow)"
            opacity="0.7"
            animate={{
              scale: [0.96, 1.04, 0.96],
              opacity: [0.48, 0.86, 0.48],
            }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "50px 47px" }}
          />

          <rect
            x="39"
            y="39.5"
            width="22"
            height="15"
            rx="2.5"
            fill="var(--bg)"
            opacity="0.72"
          />

          <text
            x="50"
            y="46"
            textAnchor="middle"
            className="fill-[color:var(--accent)] text-[4px] font-black uppercase tracking-[0.2em]"
          >
            CD
          </text>

          <text
            x="50"
            y="51.5"
            textAnchor="middle"
            className="fill-[color:var(--muted)] text-[2.7px] font-black uppercase tracking-[0.16em]"
          >
            AI CORE
          </text>

          <motion.circle
            cx="64"
            cy="34"
            r="1.4"
            fill="var(--accent)"
            filter="url(#chipSoftGlow)"
            animate={{ scale: [1, 1.6, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.circle
            cx="36"
            cy="62"
            r="1.2"
            fill="var(--accent-2)"
            filter="url(#chipSoftGlow)"
            animate={{ scale: [1, 1.5, 1], opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.path
            d="M 35 36 H 45 V 40 H 55 V 36 H 65"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="0.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="3 7"
            animate={{ strokeDashoffset: [18, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
          />

          <motion.path
            d="M 35 58 H 44 V 54 H 56 V 58 H 65"
            fill="none"
            stroke="var(--accent-2)"
            strokeWidth="0.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="3 7"
            animate={{ strokeDashoffset: [0, 18] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
          />

          {chipNodes.map((node) => (
            <g key={node.id}>
              <motion.rect
                x={node.x - 7.2}
                y={node.y - 4.6}
                width="14.4"
                height="9.2"
                rx="2.3"
                fill="var(--panel-strong)"
                stroke="var(--accent)"
                strokeWidth="0.45"
                filter="url(#chipSoftGlow)"
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.84, 1, 0.84],
                }}
                transition={{
                  duration: 2.8,
                  delay: node.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transformOrigin: `${node.x}px ${node.y}px` }}
              />

              <circle cx={node.x} cy={node.y} r="1.45" fill="var(--accent)" />

              <text
                x={node.x}
                y={node.y + 8.8}
                textAnchor="middle"
                className="fill-[color:var(--muted)] text-[2.8px] font-black uppercase tracking-[0.18em]"
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