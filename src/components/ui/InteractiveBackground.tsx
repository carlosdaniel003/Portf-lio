// src\components\ui\InteractiveBackground.tsx
"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const circuitPaths = [
  "M60 120 H250 V180 H390",
  "M90 290 H290 V365 H470 V440 H610",
  "M1320 110 H1140 V190 H980",
  "M1280 315 H1085 V395 H915",
  "M80 650 H250 V590 H430 V640 H610",
  "M1360 730 H1180 V660 H1020 V730 H860",
  "M420 75 V215 H540 V305",
  "M1035 70 V230 H900 V335",
  "M710 -20 V120 H780 V265",
  "M730 920 V770 H650 V620",
  "M185 470 H355 V515 H510",
  "M1230 500 H1060 V545 H900",
  "M525 155 H650 V235 H800",
  "M900 165 H780 V235 H650",
  "M500 760 H610 V700 H760",
  "M940 760 H830 V700 H680",
];

const circuitNodes = [
  { x: 60, y: 120, delay: 0 },
  { x: 250, y: 120, delay: 0.12 },
  { x: 250, y: 180, delay: 0.24 },
  { x: 390, y: 180, delay: 0.36 },

  { x: 90, y: 290, delay: 0.1 },
  { x: 290, y: 365, delay: 0.22 },
  { x: 470, y: 440, delay: 0.34 },
  { x: 610, y: 440, delay: 0.46 },

  { x: 1320, y: 110, delay: 0.08 },
  { x: 1140, y: 190, delay: 0.2 },
  { x: 980, y: 190, delay: 0.32 },

  { x: 1280, y: 315, delay: 0.14 },
  { x: 1085, y: 395, delay: 0.26 },
  { x: 915, y: 395, delay: 0.38 },

  { x: 80, y: 650, delay: 0.18 },
  { x: 250, y: 590, delay: 0.3 },
  { x: 430, y: 640, delay: 0.42 },
  { x: 610, y: 640, delay: 0.54 },

  { x: 1360, y: 730, delay: 0.16 },
  { x: 1180, y: 660, delay: 0.28 },
  { x: 1020, y: 730, delay: 0.4 },
  { x: 860, y: 730, delay: 0.52 },

  { x: 540, y: 305, delay: 0.2 },
  { x: 900, y: 335, delay: 0.24 },
  { x: 780, y: 265, delay: 0.28 },
  { x: 650, y: 620, delay: 0.32 },
];

export default function InteractiveBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 28 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 28 });

  const rafRef = useRef<number>();
  const lastMouseUpdateRef = useRef(0);

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      const now = Date.now();
      
      // Throttle para ~30fps (33ms)
      if (now - lastMouseUpdateRef.current < 33) {
        return;
      }
      
      lastMouseUpdateRef.current = now;
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [mouseX, mouseY]);

  const glow = useMotionTemplate`radial-gradient(560px circle at ${smoothX}px ${smoothY}px, color-mix(in srgb, var(--accent) 18%, transparent), transparent 44%)`;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-45 will-change-auto"
      >
        <defs>
          <linearGradient id="backgroundCircuitTrace" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.05" />
            <stop offset="48%" stopColor="var(--accent)" stopOpacity="0.72" />
            <stop offset="100%" stopColor="var(--accent-2)" stopOpacity="0.08" />
          </linearGradient>

          <filter
            id="backgroundCircuitGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="1440" height="900" fill="transparent" />

        <g opacity="0.7">
          {circuitPaths.map((path, index) => (
            <g key={path}>
              <path
                d={path}
                fill="none"
                stroke="var(--line)"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />

              <motion.path
                d={path}
                fill="none"
                stroke="url(#backgroundCircuitTrace)"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="14 46"
                vectorEffect="non-scaling-stroke"
                filter="url(#backgroundCircuitGlow)"
                animate={{ strokeDashoffset: [60, 0] }}
                transition={{
                  duration: 4.8,
                  delay: index * 0.08,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                }}
              />
            </g>
          ))}
        </g>

        <g>
          {circuitNodes.map((node) => (
            <motion.g
              key={`${node.x}-${node.y}`}
              animate={{
                opacity: [0.35, 1, 0.35],
              }}
              transition={{
                duration: 3.2,
                delay: node.delay,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "loop",
              }}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r="4"
                fill="var(--bg)"
                stroke="var(--accent)"
                strokeWidth="1.2"
                vectorEffect="non-scaling-stroke"
              />
              <circle
                cx={node.x}
                cy={node.y}
                r="1.8"
                fill="var(--accent)"
                filter="url(#backgroundCircuitGlow)"
              />
            </motion.g>
          ))}
        </g>

        <g opacity="0.32">
          <path
            d="M0 450 H180 V500 H310"
            fill="none"
            stroke="var(--accent-2)"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M1440 450 H1260 V500 H1130"
            fill="none"
            stroke="var(--accent-2)"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
      </svg>

      <motion.div className="absolute inset-0 will-change-transform" style={{ background: glow }} />

      <motion.div
        aria-hidden
        className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-[color:var(--accent)]/10 blur-3xl will-change-transform"
        animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }}
      />

      <motion.div
        aria-hidden
        className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-[color:var(--accent-2)]/10 blur-3xl will-change-transform"
        animate={{ scale: [1.1, 0.92, 1.1], opacity: [0.3, 0.16, 0.3] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }}
      />
    </div>
  );
}