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
      scale: 0.985,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
    },
  },
  left: {
    hidden: {
      opacity: 0,
      x: -34,
      scale: 0.985,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
    },
  },
  right: {
    hidden: {
      opacity: 0,
      x: 34,
      scale: 0.985,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
    },
  },
  scale: {
    hidden: {
      opacity: 0,
      y: 18,
      scale: 0.95,
      filter: "blur(12px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
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
      viewport={{ once, margin: "-90px", amount: 0.16 }}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}