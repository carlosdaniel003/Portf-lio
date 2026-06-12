// src\components\ui\Logo.tsx
"use client";

import { motion } from "framer-motion";

type LogoProps = {
  variant?: "mark" | "full";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: {
    mark: "h-11 w-11",
    text: "text-sm",
    sub: "text-[9px]",
  },
  md: {
    mark: "h-14 w-14",
    text: "text-base",
    sub: "text-[10px]",
  },
  lg: {
    mark: "h-16 w-16",
    text: "text-lg",
    sub: "text-[11px]",
  },
};

export default function Logo({
  variant = "mark",
  size = "sm",
  className = "",
}: LogoProps) {
  const selectedSize = sizes[size];

  const Mark = (
    <motion.div
      className={`group/logo relative grid shrink-0 place-items-center rounded-[1.1rem] border border-[color:var(--line)] bg-[color:var(--panel-strong)] shadow-[0_0_34px_color-mix(in_srgb,var(--accent)_14%,transparent)] ${selectedSize.mark}`}
      whileHover={{ y: -2, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <motion.span
        aria-hidden
        className="absolute inset-[7px] rounded-full border border-[color:var(--accent)]/45"
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />

      <motion.span
        aria-hidden
        className="absolute inset-[12px] rounded-full border border-dashed border-[color:var(--accent-2)]/35"
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <span className="absolute left-1/2 top-1/2 h-px w-[74%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[color:var(--accent)]/55 to-transparent" />
      <span className="absolute left-1/2 top-1/2 h-[74%] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-[color:var(--accent-2)]/45 to-transparent" />

      <span className="relative z-10 grid h-[58%] w-[58%] place-items-center rounded-full border border-[color:var(--accent)] bg-[color:var(--bg)] text-[11px] font-black tracking-[0.18em] text-[color:var(--accent)] shadow-[0_0_24px_color-mix(in_srgb,var(--accent)_35%,transparent)]">
        CD
      </span>

      <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)] shadow-[0_0_14px_var(--accent)]" />
    </motion.div>
  );

  if (variant === "mark") {
    return <div className={className}>{Mark}</div>;
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {Mark}

      <div>
        <p
          className={`font-black uppercase tracking-[0.2em] text-[color:var(--text)] ${selectedSize.text}`}
        >
          Carlos Daniel
        </p>
        <p
          className={`mt-1 font-black uppercase tracking-[0.18em] text-[color:var(--muted)] ${selectedSize.sub}`}
        >
          Software Industrial & IA
        </p>
      </div>
    </div>
  );
}