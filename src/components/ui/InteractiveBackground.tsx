// src\components\ui\InteractiveBackground.tsx
"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

import { useEffect, useRef } from "react";

/*
 * ============================================================
 * CIRCUITOS DE FUNDO
 * ============================================================
 *
 * Menos densos que a versão anterior.
 * Eles funcionam como estrutura técnica da composição,
 * não como elemento principal da página.
 */

const circuitPaths = [
  "M40 130 H230 V190 H390",
  "M0 430 H180 V500 H360",
  "M90 735 H270 V670 H470",
  "M1400 120 H1210 V185 H1040",
  "M1440 440 H1260 V510 H1080",
  "M1350 730 H1170 V660 H980",
  "M370 0 V150 H510 V260",
  "M1050 0 V170 H910 V290",
  "M700 0 V110 H790 V230",
  "M720 900 V770 H620 V640",
] as const;

const signalNodes = [
  {
    id: "node-01",
    x: 40,
    y: 130,
    delay: 0,
  },
  {
    id: "node-02",
    x: 230,
    y: 190,
    delay: 0.18,
  },
  {
    id: "node-03",
    x: 180,
    y: 500,
    delay: 0.36,
  },
  {
    id: "node-04",
    x: 470,
    y: 670,
    delay: 0.54,
  },
  {
    id: "node-05",
    x: 1210,
    y: 185,
    delay: 0.12,
  },
  {
    id: "node-06",
    x: 1260,
    y: 510,
    delay: 0.3,
  },
  {
    id: "node-07",
    x: 980,
    y: 660,
    delay: 0.48,
  },
  {
    id: "node-08",
    x: 790,
    y: 230,
    delay: 0.66,
  },
] as const;

/*
 * ============================================================
 * PARTÍCULAS
 * ============================================================
 */

const particles = [
  {
    id: "particle-01",
    left: "7%",
    top: "17%",
    size: 4,
    delay: 0,
    duration: 7,
    tone: "primary",
  },
  {
    id: "particle-02",
    left: "18%",
    top: "72%",
    size: 3,
    delay: 1.2,
    duration: 8.4,
    tone: "secondary",
  },
  {
    id: "particle-03",
    left: "34%",
    top: "28%",
    size: 3,
    delay: 0.7,
    duration: 6.8,
    tone: "primary",
  },
  {
    id: "particle-04",
    left: "48%",
    top: "84%",
    size: 4,
    delay: 1.8,
    duration: 9,
    tone: "secondary",
  },
  {
    id: "particle-05",
    left: "64%",
    top: "16%",
    size: 3,
    delay: 2.2,
    duration: 7.6,
    tone: "primary",
  },
  {
    id: "particle-06",
    left: "76%",
    top: "64%",
    size: 4,
    delay: 0.4,
    duration: 8.2,
    tone: "secondary",
  },
  {
    id: "particle-07",
    left: "91%",
    top: "31%",
    size: 3,
    delay: 1.5,
    duration: 6.7,
    tone: "primary",
  },
  {
    id: "particle-08",
    left: "87%",
    top: "86%",
    size: 3,
    delay: 2.8,
    duration: 9.4,
    tone: "secondary",
  },
] as const;

export default function InteractiveBackground() {
  const shouldReduceMotion =
    useReducedMotion();

  /*
   * Posição percentual do cursor.
   * O glow começa próximo ao centro,
   * evitando aparecer no canto ao carregar.
   */
  const pointerPercentX =
    useMotionValue(50);

  const pointerPercentY =
    useMotionValue(35);

  /*
   * Valores normalizados:
   * -0.5 até 0.5.
   *
   * São usados no parallax dos objetos.
   */
  const pointerNormalizedX =
    useMotionValue(0);

  const pointerNormalizedY =
    useMotionValue(0);

  const smoothPointerPercentX =
    useSpring(pointerPercentX, {
      stiffness: 55,
      damping: 24,
      mass: 0.7,
    });

  const smoothPointerPercentY =
    useSpring(pointerPercentY, {
      stiffness: 55,
      damping: 24,
      mass: 0.7,
    });

  const smoothPointerX =
    useSpring(pointerNormalizedX, {
      stiffness: 70,
      damping: 26,
      mass: 0.65,
    });

  const smoothPointerY =
    useSpring(pointerNormalizedY, {
      stiffness: 70,
      damping: 26,
      mass: 0.65,
    });

  /*
   * Scroll e velocidade.
   */
  const {
    scrollY,
    scrollYProgress,
  } = useScroll();

  const scrollVelocity =
    useVelocity(scrollY);

  const rawMotionBlur =
    useTransform(
      scrollVelocity,
      (velocity) => {
        if (shouldReduceMotion) {
          return 0;
        }

        return Math.min(
          Math.abs(velocity) / 320,
          4.5
        );
      }
    );

  const motionBlur =
    useSpring(rawMotionBlur, {
      stiffness: 150,
      damping: 30,
      mass: 0.35,
    });

  /*
   * Profundidade por scroll.
   */
  const farLayerY =
    useTransform(
      scrollYProgress,
      [0, 1],
      shouldReduceMotion
        ? [0, 0]
        : [0, -90]
    );

  const middleLayerY =
    useTransform(
      scrollYProgress,
      [0, 1],
      shouldReduceMotion
        ? [0, 0]
        : [0, -150]
    );

  const nearLayerY =
    useTransform(
      scrollYProgress,
      [0, 1],
      shouldReduceMotion
        ? [0, 0]
        : [0, -230]
    );

  const longRotation =
    useTransform(
      scrollYProgress,
      [0, 1],
      shouldReduceMotion
        ? [0, 0]
        : [0, 75]
    );

  const reverseRotation =
    useTransform(
      scrollYProgress,
      [0, 1],
      shouldReduceMotion
        ? [0, 0]
        : [0, -52]
    );

  /*
   * Profundidade por cursor.
   */
  const farPointerX =
    useTransform(
      smoothPointerX,
      [-0.5, 0.5],
      shouldReduceMotion
        ? [0, 0]
        : [-8, 8]
    );

  const farPointerY =
    useTransform(
      smoothPointerY,
      [-0.5, 0.5],
      shouldReduceMotion
        ? [0, 0]
        : [-6, 6]
    );

  const middlePointerX =
    useTransform(
      smoothPointerX,
      [-0.5, 0.5],
      shouldReduceMotion
        ? [0, 0]
        : [-18, 18]
    );

  const middlePointerY =
    useTransform(
      smoothPointerY,
      [-0.5, 0.5],
      shouldReduceMotion
        ? [0, 0]
        : [-13, 13]
    );

  const nearPointerX =
    useTransform(
      smoothPointerX,
      [-0.5, 0.5],
      shouldReduceMotion
        ? [0, 0]
        : [-34, 34]
    );

  const nearPointerY =
    useTransform(
      smoothPointerY,
      [-0.5, 0.5],
      shouldReduceMotion
        ? [0, 0]
        : [-24, 24]
    );

  /*
   * Glow que acompanha o mouse.
   */
  const pointerGlow =
    useMotionTemplate`
      radial-gradient(
        620px circle at
        ${smoothPointerPercentX}%
        ${smoothPointerPercentY}%,
        color-mix(
          in srgb,
          var(--accent) 13%,
          transparent
        ),
        color-mix(
          in srgb,
          var(--accent-2) 5%,
          transparent
        ) 42%,
        transparent 72%
      )
    `;

  const blurFilter =
    useMotionTemplate`
      blur(${motionBlur}px)
    `;

  const animationFrameRef =
    useRef<number | null>(null);

  const pendingPointerRef =
    useRef<{
      clientX: number;
      clientY: number;
    } | null>(null);

  useEffect(() => {
    function updatePointer() {
      const pendingPointer =
        pendingPointerRef.current;

      if (!pendingPointer) {
        animationFrameRef.current =
          null;

        return;
      }

      const viewportWidth =
        Math.max(
          window.innerWidth,
          1
        );

      const viewportHeight =
        Math.max(
          window.innerHeight,
          1
        );

      const percentX =
        (
          pendingPointer.clientX /
          viewportWidth
        ) * 100;

      const percentY =
        (
          pendingPointer.clientY /
          viewportHeight
        ) * 100;

      pointerPercentX.set(percentX);
      pointerPercentY.set(percentY);

      pointerNormalizedX.set(
        pendingPointer.clientX /
          viewportWidth -
          0.5
      );

      pointerNormalizedY.set(
        pendingPointer.clientY /
          viewportHeight -
          0.5
      );

      animationFrameRef.current =
        null;
    }

    function handlePointerMove(
      event: globalThis.PointerEvent
    ) {
      if (
        shouldReduceMotion ||
        event.pointerType !== "mouse"
      ) {
        return;
      }

      pendingPointerRef.current = {
        clientX: event.clientX,
        clientY: event.clientY,
      };

      if (
        animationFrameRef.current ===
        null
      ) {
        animationFrameRef.current =
          window.requestAnimationFrame(
            updatePointer
          );
      }
    }

    function resetPointer() {
      pointerPercentX.set(50);
      pointerPercentY.set(35);

      pointerNormalizedX.set(0);
      pointerNormalizedY.set(0);
    }

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      }
    );

    document.documentElement.addEventListener(
      "mouseleave",
      resetPointer
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      document.documentElement.removeEventListener(
        "mouseleave",
        resetPointer
      );

      if (
        animationFrameRef.current !==
        null
      ) {
        window.cancelAnimationFrame(
          animationFrameRef.current
        );
      }
    };
  }, [
    pointerNormalizedX,
    pointerNormalizedY,
    pointerPercentX,
    pointerPercentY,
    shouldReduceMotion,
  ]);

  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed inset-0
        z-0
        overflow-hidden
      "
    >
      {/* =====================================================
          BASE ATMOSFÉRICA
          ===================================================== */}

      <div
        className="
          absolute inset-0

          bg-[radial-gradient(circle_at_50%_-10%,color-mix(in_srgb,var(--accent)_8%,transparent),transparent_38%),linear-gradient(180deg,transparent_0%,color-mix(in_srgb,var(--bg-deepest)_32%,transparent)_100%)]
        "
      />

      <motion.div
        className="
          absolute inset-0
          opacity-90
        "
        style={{
          background: pointerGlow,
        }}
      />

      {/* Vignette lateral */}
      <div
        className="
          absolute inset-0

          bg-[linear-gradient(90deg,color-mix(in_srgb,var(--bg-deepest)_30%,transparent),transparent_16%,transparent_84%,color-mix(in_srgb,var(--bg-deepest)_30%,transparent))]
        "
      />

      {/* =====================================================
          CAMADA DISTANTE — ESTRUTURA TÉCNICA
          ===================================================== */}

      <motion.div
        className="
          absolute inset-[-4%]
          opacity-55
        "
        style={{
          x: farPointerX,
          y: farLayerY,
        }}
      >
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          className="
            h-full w-full
          "
        >
          <defs>
            <linearGradient
              id="background-circuit-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="var(--accent)"
                stopOpacity="0.04"
              />

              <stop
                offset="48%"
                stopColor="var(--accent)"
                stopOpacity="0.6"
              />

              <stop
                offset="100%"
                stopColor="var(--accent-2)"
                stopOpacity="0.06"
              />
            </linearGradient>

            <filter
              id="background-circuit-glow"
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
              id="background-orbit-glow"
              cx="50%"
              cy="50%"
              r="50%"
            >
              <stop
                offset="0%"
                stopColor="var(--accent)"
                stopOpacity="0.07"
              />

              <stop
                offset="72%"
                stopColor="var(--accent-2)"
                stopOpacity="0.015"
              />

              <stop
                offset="100%"
                stopColor="var(--accent)"
                stopOpacity="0"
              />
            </radialGradient>
          </defs>

          {/* Círculos editoriais */}
          <circle
            cx="1140"
            cy="220"
            r="250"
            fill="url(#background-orbit-glow)"
            stroke="var(--line-soft)"
            strokeWidth="1"
          />

          <circle
            cx="1140"
            cy="220"
            r="185"
            fill="none"
            stroke="var(--line-soft)"
            strokeWidth="0.7"
            strokeDasharray="6 13"
          />

          <circle
            cx="270"
            cy="690"
            r="205"
            fill="none"
            stroke="var(--line-soft)"
            strokeWidth="0.8"
          />

          {/* Circuitos */}
          {circuitPaths.map(
            (path, index) => (
              <g key={path}>
                <path
                  d={path}
                  fill="none"
                  stroke="var(--line-soft)"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />

                <motion.path
                  d={path}
                  fill="none"
                  stroke="url(#background-circuit-gradient)"
                  strokeWidth="1.35"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="12 48"
                  vectorEffect="non-scaling-stroke"
                  filter="url(#background-circuit-glow)"
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          strokeDashoffset: [
                            60,
                            0,
                          ],
                        }
                  }
                  transition={{
                    duration:
                      5.2 +
                      index * 0.08,
                    delay:
                      index * 0.1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </g>
            )
          )}

          {/* Nós */}
          {signalNodes.map(
            (node, index) => (
              <motion.g
                key={node.id}
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        opacity: [
                          0.25,
                          0.9,
                          0.25,
                        ],
                      }
                }
                transition={{
                  duration: 3.4,
                  delay: node.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="4"
                  fill="var(--bg-deep)"
                  stroke={
                    index % 2 === 0
                      ? "var(--accent)"
                      : "var(--accent-2)"
                  }
                  strokeWidth="1.1"
                  vectorEffect="non-scaling-stroke"
                />

                <circle
                  cx={node.x}
                  cy={node.y}
                  r="1.5"
                  fill={
                    index % 2 === 0
                      ? "var(--accent)"
                      : "var(--accent-2)"
                  }
                  filter="url(#background-circuit-glow)"
                />
              </motion.g>
            )
          )}
        </svg>
      </motion.div>

      {/* =====================================================
          CAMADA INTERMEDIÁRIA — OBJETOS
          ===================================================== */}

      <motion.div
        className="
          absolute inset-0
        "
        style={{
          x: middlePointerX,
          y: middleLayerY,
        }}
      >
        {/* Esfera superior direita */}
        <motion.div
          className="
            absolute
            right-[-7rem]
            top-[7%]

            h-64 w-64

            sm:right-[-5rem]
            sm:h-80 sm:w-80

            xl:right-[2%]
            xl:h-96 xl:w-96
          "
          style={{
            rotate: longRotation,
          }}
        >
          <div
            className="
              tech-object
              tech-object-mid
              tech-object-blue
              tech-orb
              !relative

              h-full w-full
            "
          />

          <div
            className="
              absolute inset-[14%]
              rounded-full
              border
              border-white/10
            "
          />

          <div
            className="
              absolute inset-[30%]
              rounded-full

              bg-white/10
              blur-xl
            "
          />
        </motion.div>

        {/* Anel esquerdo */}
        <motion.div
          className="
            absolute
            left-[-8rem]
            top-[47%]

            h-72 w-72

            sm:left-[-6rem]
            sm:h-96 sm:w-96

            xl:left-[1%]
          "
          style={{
            rotate:
              reverseRotation,
          }}
        >
          <div
            className="
              absolute inset-0
              rounded-full

              border
              border-[color:var(--accent)]/20
            "
          />

          <div
            className="
              absolute inset-[15%]
              rounded-full

              border
              border-dashed
              border-[color:var(--accent-2)]/18
            "
          />

          <div
            className="
              absolute inset-[33%]
              rounded-full

              border
              border-[color:var(--line)]
            "
          />
        </motion.div>

        {/* Pequeno módulo técnico */}
        <motion.div
          className="
            absolute
            right-[10%]
            top-[58%]

            hidden
            h-24 w-28

            lg:block
          "
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [
                    0,
                    -12,
                    0,
                  ],
                  rotate: [
                    -5,
                    -1,
                    -5,
                  ],
                }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="
              tech-object
              tech-object-mid
              tech-object-glass
              tech-chip
              !relative

              h-full w-full
            "
          />

          <div
            className="
              absolute inset-[20%]
              rounded-xl
              border
              border-[color:var(--accent)]/25
            "
          />

          <span
            className="
              absolute
              left-1/2 top-1/2

              -translate-x-1/2
              -translate-y-1/2

              font-mono
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[color:var(--accent)]
            "
          >
            Data
          </span>
        </motion.div>
      </motion.div>

      {/* =====================================================
          CAMADA PRÓXIMA
          ===================================================== */}

      <motion.div
        className="
          absolute inset-0
        "
        style={{
          x: nearPointerX,
          y: nearLayerY,
          filter: blurFilter,
        }}
      >
        {/* Cubo de vidro */}
        <motion.div
          className="
            absolute
            bottom-[8%]
            left-[6%]

            hidden
            h-28 w-28

            lg:block
            xl:h-36 xl:w-36
          "
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  rotate: [
                    -8,
                    4,
                    -8,
                  ],
                  y: [
                    0,
                    16,
                    0,
                  ],
                }
          }
          transition={{
            duration: 9.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="
              tech-object
              tech-object-near
              tech-object-glass
              tech-cube
              !relative

              h-full w-full
            "
          />

          <div
            className="
              absolute inset-[22%]
              rounded-[20%]

              border
              border-white/15
            "
          />
        </motion.div>

        {/* Esfera próxima */}
        <motion.div
          className="
            absolute
            right-[-4rem]
            top-[72%]

            hidden
            h-44 w-44

            xl:block
          "
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [
                    0,
                    -18,
                    0,
                  ],
                  scale: [
                    1,
                    1.04,
                    1,
                  ],
                }
          }
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="
              tech-object
              tech-object-near
              tech-object-green
              tech-orb
              !relative

              h-full w-full
            "
          />
        </motion.div>
      </motion.div>

      {/* =====================================================
          PARTÍCULAS
          ===================================================== */}

      <motion.div
        className="
          absolute inset-0
        "
        style={{
          x: farPointerX,
          y: farPointerY,
        }}
      >
        {particles.map(
          (particle) => {
            const isPrimary =
              particle.tone ===
              "primary";

            return (
              <motion.span
                key={particle.id}
                className={`
                  absolute
                  rounded-full

                  ${
                    isPrimary
                      ? `
                        bg-[color:var(--accent)]
                        shadow-[0_0_12px_var(--accent)]
                      `
                      : `
                        bg-[color:var(--accent-2)]
                        shadow-[0_0_12px_var(--accent-2)]
                      `
                  }
                `}
                style={{
                  left: particle.left,
                  top: particle.top,
                  width:
                    particle.size,
                  height:
                    particle.size,
                }}
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: [
                          0,
                          -16,
                          0,
                        ],
                        opacity: [
                          0.18,
                          0.75,
                          0.18,
                        ],
                        scale: [
                          0.75,
                          1.2,
                          0.75,
                        ],
                      }
                }
                transition={{
                  duration:
                    particle.duration,
                  delay:
                    particle.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          }
        )}
      </motion.div>

      {/* =====================================================
          LINHAS EDITORIAIS
          ===================================================== */}

      <div
        className="
          absolute
          left-[8%]
          top-0

          hidden h-full
          w-px

          bg-gradient-to-b
          from-transparent
          via-[color:var(--line-soft)]
          to-transparent

          xl:block
        "
      />

      <div
        className="
          absolute
          right-[8%]
          top-0

          hidden h-full
          w-px

          bg-gradient-to-b
          from-transparent
          via-[color:var(--line-soft)]
          to-transparent

          xl:block
        "
      />

      <div
        className="
          absolute
          left-0 top-1/2

          h-px w-full
          -translate-y-1/2

          bg-gradient-to-r
          from-transparent
          via-[color:var(--line-soft)]
          to-transparent

          opacity-40
        "
      />
    </div>
  );
}