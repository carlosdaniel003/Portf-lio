// src/components/ui/InteractiveBackground.tsx
"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  useEffect,
  useRef,
} from "react";

const pcbPaths = [
  "M0 118 H188 V168 H336",
  "M0 246 H118 V312 H292 V354 H430",
  "M0 486 H176 V438 H332",
  "M0 704 H132 V642 H274 V590 H420",
  "M166 0 V126 H268 V220",
  "M390 0 V92 H492 V184",
  "M1440 126 H1260 V184 H1110",
  "M1440 286 H1320 V342 H1160 V402 H1032",
  "M1440 506 H1264 V454 H1128",
  "M1440 724 H1290 V654 H1160 V596 H1018",
  "M1262 0 V142 H1164 V238",
  "M1042 0 V102 H944 V198",
  "M548 900 V798 H466 V706",
  "M892 900 V776 H988 V678",
] as const;

const circuitNodes = [
  { id: "pcb-01", x: 188, y: 168, tone: "primary", delay: 0 },
  { id: "pcb-02", x: 292, y: 354, tone: "secondary", delay: 0.25 },
  { id: "pcb-03", x: 176, y: 438, tone: "primary", delay: 0.5 },
  { id: "pcb-04", x: 274, y: 590, tone: "secondary", delay: 0.75 },
  { id: "pcb-05", x: 1260, y: 184, tone: "secondary", delay: 0.15 },
  { id: "pcb-06", x: 1160, y: 402, tone: "primary", delay: 0.4 },
  { id: "pcb-07", x: 1264, y: 454, tone: "secondary", delay: 0.65 },
  { id: "pcb-08", x: 1160, y: 596, tone: "primary", delay: 0.9 },
] as const;

const neuralConnections = [
  [1052, 174, 1150, 118],
  [1052, 174, 1168, 216],
  [1150, 118, 1260, 160],
  [1168, 216, 1260, 160],
  [1168, 216, 1278, 260],
  [1260, 160, 1362, 208],
  [1278, 260, 1362, 208],
  [78, 616, 170, 558],
  [78, 616, 176, 684],
  [170, 558, 276, 616],
  [176, 684, 276, 616],
  [276, 616, 366, 554],
  [276, 616, 380, 700],
] as const;

const neuralNodes = [
  { id: "ai-01", x: 1052, y: 174, tone: "primary", delay: 0 },
  { id: "ai-02", x: 1150, y: 118, tone: "secondary", delay: 0.2 },
  { id: "ai-03", x: 1168, y: 216, tone: "primary", delay: 0.4 },
  { id: "ai-04", x: 1260, y: 160, tone: "secondary", delay: 0.6 },
  { id: "ai-05", x: 1278, y: 260, tone: "primary", delay: 0.8 },
  { id: "ai-06", x: 1362, y: 208, tone: "secondary", delay: 1 },
  { id: "ai-07", x: 78, y: 616, tone: "secondary", delay: 0.1 },
  { id: "ai-08", x: 170, y: 558, tone: "primary", delay: 0.3 },
  { id: "ai-09", x: 176, y: 684, tone: "secondary", delay: 0.5 },
  { id: "ai-10", x: 276, y: 616, tone: "primary", delay: 0.7 },
  { id: "ai-11", x: 366, y: 554, tone: "secondary", delay: 0.9 },
  { id: "ai-12", x: 380, y: 700, tone: "primary", delay: 1.1 },
] as const;

const dataSignalPaths = [
  {
    id: "data-01",
    d: "M0 190 H260",
    color: "var(--accent)",
    duration: 4.2,
    delay: 0,
  },
  {
    id: "data-02",
    d: "M1440 342 H1120",
    color: "var(--accent-2)",
    duration: 4.9,
    delay: 0.7,
  },
  {
    id: "data-03",
    d: "M0 642 H310",
    color: "var(--accent-2)",
    duration: 5.3,
    delay: 1.4,
  },
  {
    id: "data-04",
    d: "M1440 716 H1180",
    color: "var(--accent)",
    duration: 4.6,
    delay: 2.1,
  },
] as const;

export default function InteractiveBackground() {
  const reducedMotionPreference =
    useReducedMotion();

  const shouldReduceMotion =
    Boolean(reducedMotionPreference);

  const pointerNormalizedX =
    useMotionValue(0);
  const pointerNormalizedY =
    useMotionValue(0);
  const glowOffsetX = useMotionValue(0);
  const glowOffsetY = useMotionValue(0);

  const smoothPointerX = useSpring(
    pointerNormalizedX,
    {
      stiffness: 76,
      damping: 28,
      mass: 0.6,
    }
  );

  const smoothPointerY = useSpring(
    pointerNormalizedY,
    {
      stiffness: 76,
      damping: 28,
      mass: 0.6,
    }
  );

  const smoothGlowX = useSpring(glowOffsetX, {
    stiffness: 62,
    damping: 28,
    mass: 0.62,
  });

  const smoothGlowY = useSpring(glowOffsetY, {
    stiffness: 62,
    damping: 28,
    mass: 0.62,
  });

  const { scrollYProgress } = useScroll();

  const farLayerY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, -72]
  );

  const middleLayerY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, -126]
  );

  const nearLayerY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, -178]
  );

  const farPointerX = useTransform(
    smoothPointerX,
    [-0.5, 0.5],
    shouldReduceMotion ? [0, 0] : [-7, 7]
  );

  const middlePointerX = useTransform(
    smoothPointerX,
    [-0.5, 0.5],
    shouldReduceMotion ? [0, 0] : [-14, 14]
  );

  const nearPointerX = useTransform(
    smoothPointerX,
    [-0.5, 0.5],
    shouldReduceMotion ? [0, 0] : [-22, 22]
  );

  const animationFrameRef =
    useRef<number | null>(null);

  const pendingPointerRef = useRef<{
    clientX: number;
    clientY: number;
  } | null>(null);

  const viewportRef = useRef({
    width: 1,
    height: 1,
  });

  useEffect(() => {
    function updateViewport() {
      viewportRef.current = {
        width: Math.max(window.innerWidth, 1),
        height: Math.max(window.innerHeight, 1),
      };
    }

    function updatePointer() {
      const pendingPointer =
        pendingPointerRef.current;

      if (!pendingPointer) {
        animationFrameRef.current = null;
        return;
      }

      const { width, height } =
        viewportRef.current;

      pointerNormalizedX.set(
        pendingPointer.clientX / width - 0.5
      );

      pointerNormalizedY.set(
        pendingPointer.clientY / height - 0.5
      );

      glowOffsetX.set(
        pendingPointer.clientX - width * 0.5
      );

      glowOffsetY.set(
        pendingPointer.clientY - height * 0.36
      );

      animationFrameRef.current = null;
    }

    function handlePointerMove(
      event: PointerEvent
    ) {
      if (
        shouldReduceMotion ||
        (event.pointerType &&
          event.pointerType !== "mouse")
      ) {
        return;
      }

      pendingPointerRef.current = {
        clientX: event.clientX,
        clientY: event.clientY,
      };

      if (animationFrameRef.current === null) {
        animationFrameRef.current =
          window.requestAnimationFrame(
            updatePointer
          );
      }
    }

    function resetPointer() {
      pointerNormalizedX.set(0);
      pointerNormalizedY.set(0);
      glowOffsetX.set(0);
      glowOffsetY.set(0);
    }

    updateViewport();

    window.addEventListener(
      "resize",
      updateViewport,
      { passive: true }
    );

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      { passive: true }
    );

    document.documentElement.addEventListener(
      "mouseleave",
      resetPointer
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateViewport
      );
      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );
      document.documentElement.removeEventListener(
        "mouseleave",
        resetPointer
      );

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(
          animationFrameRef.current
        );
      }
    };
  }, [
    glowOffsetX,
    glowOffsetY,
    pointerNormalizedX,
    pointerNormalizedY,
    shouldReduceMotion,
  ]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{
        contain: "strict",
        transform: "translateZ(0)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% -12%, color-mix(in srgb, var(--accent) 6%, transparent), transparent 38%), linear-gradient(180deg, transparent 0%, color-mix(in srgb, var(--bg-deepest) 34%, transparent) 100%)",
        }}
      />

      {/* O brilho acompanha o mouse por transform, sem recalcular
          um gradiente do tamanho da tela em cada frame. */}
      <motion.div
        className="absolute left-1/2 top-[36%] h-[680px] w-[680px]"
        style={{
          x: smoothGlowX,
          y: smoothGlowY,
          willChange: "transform",
        }}
      >
        <div
          className="h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--accent) 8%, transparent) 0%, color-mix(in srgb, var(--accent-2) 3%, transparent) 44%, transparent 72%)",
          }}
        />
      </motion.div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 62% 72% at 50% 47%, color-mix(in srgb, var(--bg-deepest) 19%, transparent) 0%, color-mix(in srgb, var(--bg-deepest) 8%, transparent) 48%, transparent 78%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, color-mix(in srgb, var(--bg-deepest) 22%, transparent), transparent 15%, transparent 85%, color-mix(in srgb, var(--bg-deepest) 22%, transparent))",
        }}
      />

      {/* PCB e eletrônica */}
      <motion.div
        className="absolute inset-[-3%] opacity-[0.46]"
        style={{
          x: farPointerX,
          y: farLayerY,
          willChange: "transform",
          maskImage:
            "radial-gradient(ellipse 58% 70% at center, transparent 0%, rgba(0,0,0,0.16) 43%, rgba(0,0,0,0.82) 76%, black 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 58% 70% at center, transparent 0%, rgba(0,0,0,0.16) 43%, rgba(0,0,0,0.82) 76%, black 100%)",
        }}
      >
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
        >
          <defs>
            <pattern
              id="pcb-grid"
              width="58"
              height="58"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M58 0H0V58"
                fill="none"
                stroke="var(--line-soft)"
                strokeWidth="0.7"
              />
            </pattern>

            <linearGradient
              id="pcb-signal-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="var(--accent)"
                stopOpacity="0.03"
              />
              <stop
                offset="48%"
                stopColor="var(--accent)"
                stopOpacity="0.78"
              />
              <stop
                offset="100%"
                stopColor="var(--accent-2)"
                stopOpacity="0.05"
              />
            </linearGradient>

            <filter
              id="pcb-glow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur
                stdDeviation="1.2"
                result="blurred"
              />
              <feMerge>
                <feMergeNode in="blurred" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect
            width="1440"
            height="900"
            fill="url(#pcb-grid)"
            opacity="0.28"
          />

          <g opacity="0.58">
            <rect
              x="78"
              y="154"
              width="156"
              height="104"
              rx="14"
              fill="none"
              stroke="var(--line)"
            />
            <rect
              x="102"
              y="178"
              width="108"
              height="56"
              rx="8"
              fill="none"
              stroke="var(--accent)"
              strokeOpacity="0.28"
            />

            {Array.from({ length: 6 }).map(
              (_, index) => (
                <g key={`left-pin-${index}`}>
                  <path
                    d={`M62 ${170 + index * 15}H78`}
                    stroke="var(--line-strong)"
                  />
                  <path
                    d={`M234 ${170 + index * 15}H250`}
                    stroke="var(--line-strong)"
                  />
                </g>
              )
            )}

            <rect
              x="1200"
              y="572"
              width="164"
              height="112"
              rx="14"
              fill="none"
              stroke="var(--line)"
            />
            <rect
              x="1226"
              y="598"
              width="112"
              height="60"
              rx="8"
              fill="none"
              stroke="var(--accent-2)"
              strokeOpacity="0.28"
            />

            {Array.from({ length: 6 }).map(
              (_, index) => (
                <g key={`right-pin-${index}`}>
                  <path
                    d={`M1184 ${589 + index * 16}H1200`}
                    stroke="var(--line-strong)"
                  />
                  <path
                    d={`M1364 ${589 + index * 16}H1380`}
                    stroke="var(--line-strong)"
                  />
                </g>
              )
            )}
          </g>

          {pcbPaths.map((path, index) => (
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

              <path
                d={path}
                fill="none"
                stroke="url(#pcb-signal-gradient)"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="10 54"
                strokeDashoffset="64"
                vectorEffect="non-scaling-stroke"
                filter="url(#pcb-glow)"
              >
                {!shouldReduceMotion && (
                  <animate
                    attributeName="stroke-dashoffset"
                    from="64"
                    to="0"
                    dur={`${6.2 + index * 0.07}s`}
                    begin={`${index * 0.11}s`}
                    repeatCount="indefinite"
                  />
                )}
              </path>
            </g>
          ))}

          {circuitNodes.map((node) => {
            const color =
              node.tone === "primary"
                ? "var(--accent)"
                : "var(--accent-2)";

            return (
              <g key={node.id} opacity="0.3">
                {!shouldReduceMotion && (
                  <animate
                    attributeName="opacity"
                    values="0.3;0.92;0.3"
                    dur="3.8s"
                    begin={`${node.delay}s`}
                    repeatCount="indefinite"
                  />
                )}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="6"
                  fill="var(--bg-deep)"
                  stroke={color}
                  strokeOpacity="0.7"
                  strokeWidth="1"
                />
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="2"
                  fill={color}
                  filter="url(#pcb-glow)"
                />
              </g>
            );
          })}
        </svg>
      </motion.div>

      {/* Rede neural */}
      <motion.div
        className="absolute inset-[-2%] hidden opacity-[0.48] sm:block"
        style={{
          x: middlePointerX,
          y: middleLayerY,
          willChange: "transform",
          maskImage:
            "radial-gradient(ellipse 62% 74% at center, transparent 0%, rgba(0,0,0,0.08) 45%, black 77%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 62% 74% at center, transparent 0%, rgba(0,0,0,0.08) 45%, black 77%)",
        }}
      >
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
        >
          <defs>
            <linearGradient
              id="neural-line-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="var(--accent)"
                stopOpacity="0.12"
              />
              <stop
                offset="100%"
                stopColor="var(--accent-2)"
                stopOpacity="0.5"
              />
            </linearGradient>

            <filter
              id="neural-glow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur
                stdDeviation="2"
                result="blurred"
              />
              <feMerge>
                <feMergeNode in="blurred" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {neuralConnections.map(
            ([x1, y1, x2, y2], index) => (
              <g key={`${x1}-${y1}-${x2}-${y2}`}>
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="var(--line-soft)"
                  strokeWidth="1"
                />
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="url(#neural-line-gradient)"
                  strokeWidth="1.15"
                  strokeDasharray="5 24"
                  strokeDashoffset="30"
                >
                  {!shouldReduceMotion && (
                    <animate
                      attributeName="stroke-dashoffset"
                      from="30"
                      to="0"
                      dur={`${4.8 + index * 0.08}s`}
                      repeatCount="indefinite"
                    />
                  )}
                </line>
              </g>
            )
          )}

          {neuralNodes.map((node) => {
            const color =
              node.tone === "primary"
                ? "var(--accent)"
                : "var(--accent-2)";

            return (
              <g key={node.id} opacity="0.34">
                {!shouldReduceMotion && (
                  <animate
                    attributeName="opacity"
                    values="0.34;1;0.34"
                    dur="3.1s"
                    begin={`${node.delay}s`}
                    repeatCount="indefinite"
                  />
                )}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="10"
                  fill="var(--bg-deep)"
                  fillOpacity="0.7"
                  stroke={color}
                  strokeOpacity="0.35"
                />
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="3"
                  fill={color}
                  filter="url(#neural-glow)"
                />
              </g>
            );
          })}

          <text
            x="1040"
            y="88"
            fill="var(--subtle)"
            fontSize="9"
            fontFamily="var(--font-mono)"
            letterSpacing="2.4"
            opacity="0.6"
          >
            NEURAL PROCESSING / 01
          </text>

          <text
            x="74"
            y="744"
            fill="var(--subtle)"
            fontSize="9"
            fontFamily="var(--font-mono)"
            letterSpacing="2.4"
            opacity="0.6"
          >
            SENSOR INPUT / 02
          </text>
        </svg>
      </motion.div>

      {/* Barramentos e sinais */}
      <motion.div
        className="absolute inset-0 hidden lg:block"
        style={{
          x: nearPointerX,
          y: nearLayerY,
          willChange: "transform",
        }}
      >
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full opacity-[0.34]"
        >
          {dataSignalPaths.map((signal) => (
            <g key={signal.id}>
              <path
                d={signal.d}
                fill="none"
                stroke="var(--line-strong)"
                strokeWidth="0.8"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d={signal.d}
                fill="none"
                stroke={signal.color}
                strokeWidth="1.4"
                strokeDasharray="32 180"
                strokeDashoffset="212"
                vectorEffect="non-scaling-stroke"
              >
                {!shouldReduceMotion && (
                  <animate
                    attributeName="stroke-dashoffset"
                    from="212"
                    to="0"
                    dur={`${signal.duration}s`}
                    begin={`${signal.delay}s`}
                    repeatCount="indefinite"
                  />
                )}
              </path>
            </g>
          ))}

          <path
            d="M0 816 H118 L146 816 L166 774 L192 850 L216 816 H356"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="14 38"
            strokeDashoffset="52"
          >
            {!shouldReduceMotion && (
              <animate
                attributeName="stroke-dashoffset"
                from="52"
                to="0"
                dur="4.6s"
                repeatCount="indefinite"
              />
            )}
          </path>

          <path
            d="M1440 346 H1322 L1294 346 L1274 304 L1248 380 L1224 346 H1084"
            fill="none"
            stroke="var(--accent-2)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="14 38"
            strokeDashoffset="-52"
          >
            {!shouldReduceMotion && (
              <animate
                attributeName="stroke-dashoffset"
                from="-52"
                to="0"
                dur="5.1s"
                repeatCount="indefinite"
              />
            )}
          </path>
        </svg>
      </motion.div>

      <div className="absolute left-[7.5%] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[color:var(--line-soft)] to-transparent opacity-60 xl:block" />
      <div className="absolute right-[7.5%] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[color:var(--line-soft)] to-transparent opacity-60 xl:block" />
      <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-[color:var(--line-soft)] to-transparent opacity-25" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, color-mix(in srgb, var(--bg-deepest) 4%, transparent) 52%, color-mix(in srgb, var(--bg-deepest) 13%, transparent) 100%)",
        }}
      />
    </div>
  );
}
