// src\components\ui\InteractiveBackground.tsx
"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function InteractiveBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 22 });

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const glow = useMotionTemplate`radial-gradient(560px circle at ${smoothX}px ${smoothY}px, color-mix(in srgb, var(--accent) 18%, transparent), transparent 44%)`;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="soft-grid absolute inset-0 opacity-45" />

      <motion.div className="absolute inset-0" style={{ background: glow }} />

      <motion.div
        aria-hidden
        className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-[color:var(--accent)]/10 blur-3xl"
        animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden
        className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-[color:var(--accent-2)]/10 blur-3xl"
        animate={{ scale: [1.1, 0.92, 1.1], opacity: [0.3, 0.16, 0.3] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}