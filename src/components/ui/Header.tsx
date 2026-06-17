// src\components\ui\Header.tsx
"use client";

import Logo from "@/components/ui/Logo";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  Folder,
  Github,
  Home,
  Mail,
  Menu,
  User,
  X,
} from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";

const links = [
  {
    label: "Início",
    href: "#inicio",
    icon: Home,
  },
  {
    label: "Sobre",
    href: "#sobre",
    icon: User,
  },
  {
    label: "Projetos",
    href: "#projetos",
    icon: Folder,
  },

  {
    label: "Serviços",
    href: "#solucoes",
    icon: Briefcase,
  },

  {
    label: "Contato",
    href: "#contato",
    icon: Mail,
  },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = useCallback(() => {
    const referencePoint = window.scrollY + window.innerHeight * 0.42;

    let currentSection = "inicio";

    links.forEach((link) => {
      const sectionId = link.href.replace("#", "");
      const section = document.getElementById(sectionId);

      if (section && section.offsetTop <= referencePoint) {
        currentSection = sectionId;
      }
    });

    setActiveSection(currentSection);
  }, []);

  const debouncedHandleScroll = useCallback(() => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      handleScroll();
    }, 50);
  }, [handleScroll]);

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", debouncedHandleScroll, { passive: true });
    window.addEventListener("resize", debouncedHandleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
      window.removeEventListener("resize", debouncedHandleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [debouncedHandleScroll, handleScroll]);

  return (
    <>
      <header className="fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
        <nav
          aria-label="Menu principal"
          className="relative flex flex-col items-center gap-3 rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] p-2 shadow-2xl backdrop-blur-2xl"
        >
          <span className="pointer-events-none absolute inset-y-5 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[color:var(--accent)]/25 to-transparent" />

          <a
            href="#inicio"
            aria-label="Carlos Daniel - início"
            className="group relative z-10 transition"
          >
            <Logo variant="mark" size="sm" />

            <span className="pointer-events-none absolute left-14 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-[color:var(--line)] bg-[color:var(--panel-strong)] px-3 py-1.5 text-xs font-black uppercase tracking-[0.08em] text-[color:var(--text)] opacity-0 transition-opacity group-hover:opacity-100">
              Carlos Daniel
            </span>
          </a>

          <div className="relative z-10 h-px w-7 bg-[color:var(--line)]" />

          {links.map((link) => {
            const Icon = link.icon;
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.href}
                href={link.href}
                aria-label={link.label}
                className={
                  isActive
                    ? "group relative z-10 grid h-11 w-11 place-items-center rounded-full border border-[color:var(--accent)] bg-[color:var(--panel-strong)] text-[color:var(--accent)] shadow-[0_0_18px_var(--accent)] transition"
                    : "group relative z-10 grid h-11 w-11 place-items-center rounded-full text-[color:var(--muted)] transition hover:-translate-y-0.5 hover:bg-[color:var(--panel-strong)] hover:text-[color:var(--accent)]"
                }
              >
                {isActive && (
                  <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[color:var(--accent)] shadow-[0_0_18px_var(--accent)]" />
                )}

                <Icon size={18} strokeWidth={2.3} />

                <span className="pointer-events-none absolute left-14 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-[color:var(--line)] bg-[color:var(--panel-strong)] px-3 py-1.5 text-xs font-black uppercase tracking-[0.08em] text-[color:var(--text)] opacity-0 transition-opacity group-hover:opacity-100">
                  {link.label}
                </span>
              </a>
            );
          })}

          <div className="relative z-10 h-px w-7 bg-[color:var(--line)]" />

          <div className="relative z-10">
            <ThemeToggle />
          </div>

          <a
            href="https://github.com/carlosdaniel003"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="group relative z-10 grid h-11 w-11 place-items-center rounded-full text-[color:var(--muted)] transition hover:-translate-y-0.5 hover:bg-[color:var(--panel-strong)] hover:text-[color:var(--accent)]"
          >
            <Github size={18} strokeWidth={2.3} />

            <span className="pointer-events-none absolute left-14 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-[color:var(--line)] bg-[color:var(--panel-strong)] px-3 py-1.5 text-xs font-black uppercase tracking-[0.08em] text-[color:var(--text)] opacity-0 transition-opacity group-hover:opacity-100">
              GitHub
            </span>
          </a>
        </nav>
      </header>

      <header className="fixed bottom-4 right-4 z-50 lg:hidden">
        <AnimatePresence mode="wait">
          {isMobileMenuOpen && (
            <motion.nav
              key="mobile-menu"
              aria-label="Menu mobile"
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute bottom-16 right-0 w-[min(82vw,320px)] overflow-hidden rounded-[1.7rem] border border-[color:var(--line)] bg-[color:var(--panel)] p-3 shadow-2xl backdrop-blur-2xl will-change-transform"
            >
              <div className="mb-3 flex items-center justify-between gap-3 rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-3">
                <Logo variant="mark" size="sm" />

                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-black uppercase tracking-[0.18em] text-[color:var(--text)]">
                    Carlos Daniel
                  </p>
                  <p className="mt-1 truncate text-[10px] font-black uppercase tracking-[0.14em] text-[color:var(--muted)]">
                    Software Industrial & IA
                  </p>
                </div>
              </div>

              <div className="grid gap-2">
                {links.map((link) => {
                  const Icon = link.icon;
                  const sectionId = link.href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={
                        isActive
                          ? "flex items-center gap-3 rounded-2xl border border-[color:var(--accent)] bg-[color:var(--panel-strong)] px-4 py-3 text-sm font-black uppercase tracking-[0.14em] text-[color:var(--accent)] transition"
                          : "flex items-center gap-3 rounded-2xl border border-transparent px-4 py-3 text-sm font-black uppercase tracking-[0.14em] text-[color:var(--muted)] transition hover:border-[color:var(--line)] hover:bg-[color:var(--panel-strong)]"
                      }
                    >
                      <Icon size={18} strokeWidth={2.3} />
                      {link.label}
                    </a>
                  );
                })}

                <div className="my-1 h-px bg-[color:var(--line)]" />

                <div className="flex items-center justify-between gap-3 rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] px-3 py-2">
                  <span className="pl-1 text-xs font-black uppercase tracking-[0.16em] text-[color:var(--muted)]">
                    Tema
                  </span>
                  <ThemeToggle />
                </div>

                <a
                  href="https://github.com/carlosdaniel003"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-[0.14em] text-[color:var(--muted)] transition hover:bg-[color:var(--panel-strong)]"
                >
                  <Github size={18} strokeWidth={2.3} />
                  GitHub
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMobileMenuOpen((current) => !current)}
          className="grid h-14 w-14 place-items-center rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] text-[color:var(--accent)] shadow-[0_18px_60px_var(--shadow)] backdrop-blur-2xl transition"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>
    </>
  );
}