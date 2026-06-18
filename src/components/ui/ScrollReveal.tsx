// src\components\ui\ScrollReveal.tsx
"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealVariant = "up" | "left" | "right" | "scale";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: RevealVariant;
  once?: boolean;
};

const variants = {
  up: {
    hidden: {
      opacity: 0,
      y: 34,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },

  left: {
    hidden: {
      opacity: 0,
      x: -34,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },

  right: {
    hidden: {
      opacity: 0,
      x: 34,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },

  scale: {
    hidden: {
      opacity: 0,
      y: 18,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.62,
  variant = "up",
  once = true,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        margin: "-60px",
        amount: 0.12,
      }}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      style={{
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
    >
      {children}
    </motion.div>
  );
}