"use client";

import { servicesData } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="solucoes" className="relative py-24">
      <div className="portfolio-container">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[color:var(--accent)]">
            O que eu entrego
          </p>
          <h2 className="text-4xl font-black tracking-[-0.04em] text-[color:var(--text)] sm:text-5xl">
            Sistemas pensados para reduzir trabalho manual e aumentar clareza operacional.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {servicesData.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="glass-card group rounded-[1.7rem] p-6 transition"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] text-sm font-black text-[color:var(--accent)]">
                0{index + 1}
              </div>
              <h3 className="text-xl font-black text-[color:var(--text)]">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{service.description}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[color:var(--line)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[color:var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
