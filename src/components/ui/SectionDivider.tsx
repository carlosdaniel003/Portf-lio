"use client";

import { motion } from "framer-motion";

type SectionDividerProps = {
  index: string;
  title: string;
};

export default function SectionDivider({ index, title }: SectionDividerProps) {
  return (
    <div className="portfolio-container relative py-4">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative flex items-center gap-4"
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[color:var(--line)] to-[color:var(--accent)]/40" />

        <div className="group relative overflow-hidden rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] px-4 py-2 backdrop-blur-xl">
          <motion.div
            aria-hidden
            className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-transparent via-[color:var(--accent)]/15 to-transparent"
            animate={{ x: ["-120%", "260%"] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 flex items-center gap-3">
            <span className="text-xs font-black uppercase tracking-[0.22em] text-[color:var(--accent)]">
              {index}
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)] shadow-[0_0_18px_var(--accent)]" />

            <span className="text-xs font-black uppercase tracking-[0.18em] text-[color:var(--muted)]">
              {title}
            </span>
          </div>
        </div>

        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[color:var(--line)] to-[color:var(--accent)]/40" />
      </motion.div>
    </div>
  );
}