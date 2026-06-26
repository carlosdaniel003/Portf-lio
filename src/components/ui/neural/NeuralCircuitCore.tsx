// src\components\ui\neural\NeuralCircuitCore.tsx
"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

import type { PointerEvent } from "react";

const orbitalNodes = [
  {
    id: "operation",
    code: "INPUT_01",
    label: "Operação",
    position: "left-[2%] top-[17%] sm:left-[4%] sm:top-[16%]",
    tone: "primary",
    delay: 0,
  },
  {
    id: "intelligence",
    code: "CORE_02",
    label: "IA",
    position: "right-[2%] top-[18%] sm:right-[5%] sm:top-[17%]",
    tone: "secondary",
    delay: 0.35,
  },
  {
    id: "data",
    code: "FLOW_03",
    label: "Dados",
    position: "bottom-[16%] left-[2%] sm:bottom-[15%] sm:left-[5%]",
    tone: "secondary",
    delay: 0.7,
  },
  {
    id: "result",
    code: "OUTPUT_04",
    label: "Resultado",
    position: "bottom-[15%] right-[1%] sm:bottom-[14%] sm:right-[4%]",
    tone: "primary",
    delay: 1.05,
  },
] as const;

const circuitPaths = [
  {
    id: "north",
    d: "M100 78 V42 H70 V24",
    tone: "primary",
    delay: 0,
  },
  {
    id: "north-east",
    d: "M122 84 H150 V50 H176",
    tone: "secondary",
    delay: 0.12,
  },
  {
    id: "east",
    d: "M126 100 H178",
    tone: "primary",
    delay: 0.24,
  },
  {
    id: "south-east",
    d: "M122 116 H150 V150 H178",
    tone: "secondary",
    delay: 0.36,
  },
  {
    id: "south",
    d: "M100 122 V158 H130 V178",
    tone: "primary",
    delay: 0.48,
  },
  {
    id: "south-west",
    d: "M78 116 H50 V150 H24",
    tone: "secondary",
    delay: 0.6,
  },
  {
    id: "west",
    d: "M74 100 H22",
    tone: "primary",
    delay: 0.72,
  },
  {
    id: "north-west",
    d: "M78 84 H50 V50 H24",
    tone: "secondary",
    delay: 0.84,
  },
] as const;

const chipPins = [18, 31, 44, 57, 70, 83];

const particles = [
  {
    id: "p1",
    className: "left-[18%] top-[22%]",
    delay: 0,
    duration: 4.8,
  },
  {
    id: "p2",
    className: "right-[17%] top-[29%]",
    delay: 0.9,
    duration: 5.6,
  },
  {
    id: "p3",
    className: "bottom-[23%] left-[24%]",
    delay: 1.5,
    duration: 5.1,
  },
  {
    id: "p4",
    className: "bottom-[20%] right-[23%]",
    delay: 2.1,
    duration: 6,
  },
] as const;

export default function NeuralCircuitCore() {
  const shouldReduceMotion = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, {
    stiffness: 120,
    damping: 24,
    mass: 0.5,
  });

  const smoothY = useSpring(pointerY, {
    stiffness: 120,
    damping: 24,
    mass: 0.5,
  });

  const rotateX = useTransform(
    smoothY,
    [-0.5, 0.5],
    shouldReduceMotion ? [0, 0] : [6, -6]
  );

  const rotateY = useTransform(
    smoothX,
    [-0.5, 0.5],
    shouldReduceMotion ? [0, 0] : [-8, 8]
  );

  const boardX = useTransform(
    smoothX,
    [-0.5, 0.5],
    shouldReduceMotion ? [0, 0] : [-8, 8]
  );

  const boardY = useTransform(
    smoothY,
    [-0.5, 0.5],
    shouldReduceMotion ? [0, 0] : [-6, 6]
  );

  const nearX = useTransform(
    smoothX,
    [-0.5, 0.5],
    shouldReduceMotion ? [0, 0] : [-16, 16]
  );

  const nearY = useTransform(
    smoothY,
    [-0.5, 0.5],
    shouldReduceMotion ? [0, 0] : [-12, 12]
  );

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (shouldReduceMotion || event.pointerType !== "mouse") {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();

    pointerX.set(
      (event.clientX - bounds.left) / bounds.width - 0.5
    );

    pointerY.set(
      (event.clientY - bounds.top) / bounds.height - 0.5
    );
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <motion.div
      role="img"
      aria-label="Núcleo tecnológico tridimensional conectando operação, dados, inteligência artificial e resultado"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.75,
        delay: 0.16,
        ease: [0.22, 1, 0.36, 1],
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative min-h-[500px] w-full overflow-visible sm:min-h-[590px] lg:min-h-[640px] [perspective:1500px]"
    >
      <motion.div
        className="absolute inset-0"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Atmosfera */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--accent)]/10 blur-[90px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[42%] top-[54%] h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--accent-2)]/10 blur-[100px]"
        />

        {/* Órbitas */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[84%] w-[84%] rounded-full border border-[color:var(--line-soft)]"
          style={{ x: "-50%", y: "-50%" }}
          animate={
            shouldReduceMotion
              ? undefined
              : { rotate: 360 }
          }
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[68%] w-[68%] rounded-full border border-dashed border-[color:var(--accent)]/28"
          style={{ x: "-50%", y: "-50%" }}
          animate={
            shouldReduceMotion
              ? undefined
              : { rotate: -360 }
          }
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[54%] w-[54%] rounded-full border border-[color:var(--accent-2)]/20"
          style={{ x: "-50%", y: "-50%" }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: [0.98, 1.04, 0.98],
                  opacity: [0.38, 0.72, 0.38],
                }
          }
          transition={{
            duration: 4.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Partículas */}
        {particles.map((particle, index) => (
          <motion.span
            key={particle.id}
            aria-hidden="true"
            className={`pointer-events-none absolute z-20 h-1.5 w-1.5 rounded-full ${particle.className} ${
              index % 2 === 0
                ? "bg-[color:var(--accent)] shadow-[0_0_14px_var(--accent)]"
                : "bg-[color:var(--accent-2)] shadow-[0_0_14px_var(--accent-2)]"
            }`}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, -14, 0],
                    opacity: [0.35, 1, 0.35],
                    scale: [0.8, 1.25, 0.8],
                  }
            }
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Nós orbitais */}
        {orbitalNodes.map((node) => {
          const isPrimary = node.tone === "primary";

          return (
            <motion.div
              key={node.id}
              className={`absolute z-30 ${node.position}`}
              style={{
                x: nearX,
                y: nearY,
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: [0, -8, 0],
                      }
                }
                transition={{
                  duration: 5.5,
                  delay: node.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="relative flex min-w-[118px] items-center gap-3 rounded-full border border-[color:var(--line)] bg-[color:var(--panel-strong)] px-3 py-2.5 shadow-[0_14px_42px_var(--shadow)] backdrop-blur-xl sm:min-w-[138px] sm:px-4">
                <motion.span
                  aria-hidden="true"
                  className={`relative grid h-8 w-8 shrink-0 place-items-center rounded-full border ${
                    isPrimary
                      ? "border-[color:var(--accent)]/55 bg-[color:var(--accent)]/10"
                      : "border-[color:var(--accent-2)]/55 bg-[color:var(--accent-2)]/10"
                  }`}
                >
                  <motion.span
                    className={`h-2.5 w-2.5 rounded-full ${
                      isPrimary
                        ? "bg-[color:var(--accent)] shadow-[0_0_16px_var(--accent)]"
                        : "bg-[color:var(--accent-2)] shadow-[0_0_16px_var(--accent-2)]"
                    }`}
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            scale: [0.8, 1.25, 0.8],
                            opacity: [0.7, 1, 0.7],
                          }
                    }
                    transition={{
                      duration: 2.4,
                      delay: node.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.span>

                <span className="min-w-0">
                  <span
                    className={`block font-mono text-[8px] font-semibold uppercase tracking-[0.18em] ${
                      isPrimary
                        ? "text-[color:var(--accent)]"
                        : "text-[color:var(--accent-2)]"
                    }`}
                  >
                    {node.code}
                  </span>

                  <span className="mt-1 block text-[11px] font-extrabold uppercase tracking-[0.1em] text-[color:var(--text)] sm:text-xs">
                    {node.label}
                  </span>
                </span>
                </div>
              </motion.div>
            </motion.div>
          );
        })}

        {/* Núcleo tecnológico central aberto */}
<div
  className="
    pointer-events-none
    absolute left-1/2 top-1/2
    z-20

    h-[60%] w-[60%]
    max-h-[410px] max-w-[410px]

    -translate-x-1/2
    -translate-y-1/2
  "
>
  <motion.div
    className="absolute inset-0"
    style={{
      x: boardX,
      y: boardY,
    }}
  >
    {/* Halo externo */}
    <motion.div
      aria-hidden="true"
      className="
        absolute inset-0
        rounded-full
        border
        border-[color:var(--line)]
      "
      animate={
        shouldReduceMotion
          ? undefined
          : {
              rotate: 360,
            }
      }
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <span
        className="
          absolute left-1/2 top-[-4px]
          h-2 w-2
          -translate-x-1/2
          rounded-full
          bg-[color:var(--accent)]
          shadow-[0_0_18px_var(--accent)]
        "
      />

      <span
        className="
          absolute bottom-[-4px] left-1/2
          h-2 w-2
          -translate-x-1/2
          rounded-full
          bg-[color:var(--accent-2)]
          shadow-[0_0_18px_var(--accent-2)]
        "
      />
    </motion.div>

    {/* Segundo anel */}
    <motion.div
      aria-hidden="true"
      className="
        absolute inset-[8%]
        rounded-full
        border
        border-dashed
        border-[color:var(--accent)]/30
      "
      animate={
        shouldReduceMotion
          ? undefined
          : {
              rotate: -360,
            }
      }
      transition={{
        duration: 22,
        repeat: Infinity,
        ease: "linear",
      }}
    />

    {/* Anel interno pulsante */}
    <motion.div
      aria-hidden="true"
      className="
        absolute inset-[18%]
        rounded-full
        border
        border-[color:var(--accent-2)]/25

        bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--accent)_12%,transparent),transparent_68%)]
      "
      animate={
        shouldReduceMotion
          ? undefined
          : {
              scale: [0.97, 1.04, 0.97],
              opacity: [0.48, 0.88, 0.48],
            }
      }
      transition={{
        duration: 4.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Circuitos sem fundo quadrado */}
    <svg
      viewBox="0 0 200 200"
      className="
        absolute inset-[3%]
        z-10
        h-[94%] w-[94%]
        overflow-visible
      "
      aria-hidden="true"
    >
      <defs>
        <filter
          id="open-core-glow"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            stdDeviation="1.7"
            result="blurred"
          />

          <feMerge>
            <feMergeNode in="blurred" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <radialGradient
          id="open-core-center"
          cx="50%"
          cy="50%"
          r="50%"
        >
          <stop
            offset="0%"
            stopColor="var(--accent)"
            stopOpacity="0.2"
          />

          <stop
            offset="55%"
            stopColor="var(--accent-2)"
            stopOpacity="0.06"
          />

          <stop
            offset="100%"
            stopColor="var(--accent)"
            stopOpacity="0"
          />
        </radialGradient>
      </defs>

      <circle
        cx="100"
        cy="100"
        r="76"
        fill="url(#open-core-center)"
      />

      <circle
        cx="100"
        cy="100"
        r="72"
        fill="none"
        stroke="var(--line)"
        strokeWidth="0.7"
        strokeDasharray="3 8"
      />

      <circle
        cx="100"
        cy="100"
        r="54"
        fill="none"
        stroke="var(--line-soft)"
        strokeWidth="0.8"
      />

      {circuitPaths.map((path) => (
        <g key={path.id}>
          <path
            d={path.d}
            fill="none"
            stroke="var(--line)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <motion.path
            d={path.d}
            fill="none"
            stroke={
              path.tone === "primary"
                ? "var(--accent)"
                : "var(--accent-2)"
            }
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="8 22"
            filter="url(#open-core-glow)"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    strokeDashoffset: [30, 0],
                  }
            }
            transition={{
              duration: 2.7,
              delay: path.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </g>
      ))}

      {[24, 50, 100, 150, 176].map(
        (coordinate, index) => (
          <motion.circle
            key={`open-signal-${coordinate}`}
            cx={
              index % 2 === 0
                ? coordinate
                : 100
            }
            cy={
              index % 2 === 0
                ? 100
                : coordinate
            }
            r="2.5"
            fill={
              index % 2 === 0
                ? "var(--accent)"
                : "var(--accent-2)"
            }
            filter="url(#open-core-glow)"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    scale: [0.75, 1.5, 0.75],
                    opacity: [0.4, 1, 0.4],
                  }
            }
            transition={{
              duration: 2.4,
              delay: index * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )
      )}
    </svg>

    {/* Base inferior do chip */}
<div
  aria-hidden="true"
  className="
    absolute left-1/2 top-1/2
    z-20

    h-[42%] w-[42%]

    -translate-x-1/2
    -translate-y-1/2
  "
>
  <div
    className="
      absolute inset-0

      rounded-[1.8rem]
      border
      border-[color:var(--line)]

      bg-[color:var(--bg-deepest)]
      opacity-70

      shadow-[0_30px_60px_var(--shadow-deep)]
    "
    style={{
      transform:
        "translateY(12px) scale(0.94)",
    }}
  />
</div>

    {/* Chip central */}
    <div
      className="
        absolute left-1/2 top-1/2
        z-30

        h-[42%] w-[42%]

        -translate-x-1/2
        -translate-y-1/2
      "
    >
      <motion.div
        className="
          absolute inset-0

          rounded-[1.8rem]
          border
          border-[color:var(--accent)]

          bg-[color:var(--bg-deep)]

          shadow-[0_0_55px_color-mix(in_srgb,var(--accent)_28%,transparent)]
        "
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, -5, 0],
              }
        }
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
      {/* Pinos laterais */}
      {chipPins.map((position) => (
        <span
          key={`open-left-${position}`}
          aria-hidden="true"
          className="
            absolute -left-3
            h-1.5 w-3
            rounded-l-full
            bg-[color:var(--accent)]/75
          "
          style={{
            top: `${position}%`,
          }}
        />
      ))}

      {chipPins.map((position) => (
        <span
          key={`open-right-${position}`}
          aria-hidden="true"
          className="
            absolute -right-3
            h-1.5 w-3
            rounded-r-full
            bg-[color:var(--accent-2)]/75
          "
          style={{
            top: `${position}%`,
          }}
        />
      ))}

      {chipPins.map((position) => (
        <span
          key={`open-top-${position}`}
          aria-hidden="true"
          className="
            absolute -top-3
            h-3 w-1.5
            rounded-t-full
            bg-[color:var(--accent)]/75
          "
          style={{
            left: `${position}%`,
          }}
        />
      ))}

      {chipPins.map((position) => (
        <span
          key={`open-bottom-${position}`}
          aria-hidden="true"
          className="
            absolute -bottom-3
            h-3 w-1.5
            rounded-b-full
            bg-[color:var(--accent-2)]/75
          "
          style={{
            left: `${position}%`,
          }}
        />
      ))}

      {/* Corpo interno */}
      <div
        className="
          absolute inset-[9%]
          rounded-[1.4rem]
          border
          border-[color:var(--line-strong)]

          bg-[color:var(--panel-strong)]
        "
      />

      <div
        className="
          absolute inset-[17%]
          grid place-items-center
          overflow-hidden

          rounded-[1.1rem]
          border
          border-[color:var(--accent)]/60

          bg-[color:var(--bg-deepest)]
        "
      >
        <motion.div
          aria-hidden="true"
          className="
            absolute inset-0

            bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--accent)_35%,transparent),transparent_68%)]
          "
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [
                    0.48,
                    0.95,
                    0.48,
                  ],
                  scale: [
                    0.92,
                    1.1,
                    0.92,
                  ],
                }
          }
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 text-center">
          <span
            className="
              block
              font-display
              text-3xl
              font-bold
              tracking-[-0.08em]
              text-[color:var(--accent)]

              sm:text-4xl
            "
          >
            CD
          </span>

          <span
            className="
              mt-1 block
              font-mono
              text-[6px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[color:var(--muted)]

              sm:text-[7px]
            "
          >
            Intelligent systems
          </span>
        </div>
      </div>

      <motion.span
        aria-hidden="true"
        className="
          absolute right-[12%] top-[12%]
          h-2.5 w-2.5

          rounded-full
          bg-[color:var(--accent)]

          shadow-[0_0_18px_var(--accent)]
        "
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.7, 1],
                opacity: [0.55, 1, 0.55],
              }
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>

    {/* Etiqueta do núcleo */}
    <div
      className="
        absolute left-1/2 top-[3%]
        z-40

        flex
        -translate-x-1/2
        items-center
        gap-2

        whitespace-nowrap
        rounded-full
        border
        border-[color:var(--line)]

        bg-[color:var(--panel-strong)]
        px-3 py-1.5

        backdrop-blur-xl
      "
    >
      <span
        className="
          h-1.5 w-1.5
          rounded-full
          bg-[color:var(--accent)]
          shadow-[0_0_10px_var(--accent)]
        "
      />

      <span
        className="
          font-mono
          text-[7px]
          font-semibold
          uppercase
          tracking-[0.18em]
          text-[color:var(--muted)]

          sm:text-[8px]
        "
      >
        Core online
      </span>
    </div>
    </div>
  </motion.div>
</div>

        {/* Indicador inferior */}
        <div className="absolute bottom-[3%] left-1/2 z-40 -translate-x-1/2">
          <motion.div
            className="flex items-center gap-3 rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] px-4 py-2.5 shadow-[0_14px_40px_var(--shadow)] backdrop-blur-xl"
            style={{ x: boardX }}
          >
            <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Operação
            </span>

            <span className="h-px w-5 bg-[color:var(--accent)]" />

            <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[color:var(--text)]">
              Processamento
            </span>

            <span className="h-px w-5 bg-[color:var(--accent-2)]" />

            <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Resultado
            </span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
