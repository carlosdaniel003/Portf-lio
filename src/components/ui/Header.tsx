// src/components/ui/Header.tsx
"use client";

import Image from "next/image";

import ThemeToggle from "@/components/ui/ThemeToggle";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  ArrowUpRight,
  Github,
  Menu,
  X,
} from "lucide-react";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const demosUrl =
  "https://demos.carlosdaniel.dev.br";

const navigationItems = [
  {
    index: "01",
    label: "Projetos",
    href: "/#projetos",
    id: "projetos",
  },
  {
    index: "02",
    label: "Perfil",
    href: "/#sobre",
    id: "sobre",
  },
  {
    index: "03",
    label: "Tecnologias",
    href: "/#tecnologias",
    id: "tecnologias",
  },
  {
    index: "04",
    label: "Contato",
    href: "/#contato",
    id: "contato",
  },
] as const;

type NavigationSection =
  | "inicio"
  | (typeof navigationItems)[number]["id"];

const trackedSections: NavigationSection[] = [
  "inicio",
  "projetos",
  "sobre",
  "tecnologias",
  "contato",
];

export default function Header() {
  const [activeSection, setActiveSection] =
    useState<NavigationSection>("inicio");

  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const [isScrolled, setIsScrolled] =
    useState(false);

  const animationFrameRef =
    useRef<number | null>(null);

  const updateHeaderState = useCallback(() => {
    setIsScrolled(window.scrollY > 24);

    const referencePoint =
      window.scrollY +
      window.innerHeight * 0.36;

    const sections = trackedSections
      .map((id) => {
        const element =
          document.getElementById(id);

        return element
          ? {
              id,
              top: element.offsetTop,
            }
          : null;
      })
      .filter(
        (
          section
        ): section is {
          id: NavigationSection;
          top: number;
        } => section !== null
      )
      .sort(
        (first, second) =>
          first.top - second.top
      );

    let current: NavigationSection =
      "inicio";

    sections.forEach((section) => {
      if (section.top <= referencePoint) {
        current = section.id;
      }
    });

    setActiveSection(current);
  }, []);

  const scheduleHeaderUpdate =
    useCallback(() => {
      if (
        animationFrameRef.current !== null
      ) {
        return;
      }

      animationFrameRef.current =
        window.requestAnimationFrame(() => {
          updateHeaderState();
          animationFrameRef.current = null;
        });
    }, [updateHeaderState]);

  useEffect(() => {
    updateHeaderState();

    window.addEventListener(
      "scroll",
      scheduleHeaderUpdate,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      scheduleHeaderUpdate,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        scheduleHeaderUpdate
      );
      window.removeEventListener(
        "resize",
        scheduleHeaderUpdate
      );

      if (
        animationFrameRef.current !== null
      ) {
        window.cancelAnimationFrame(
          animationFrameRef.current
        );
      }
    };
  }, [
    scheduleHeaderUpdate,
    updateHeaderState,
  ]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    function handleKeyDown(
      event: KeyboardEvent
    ) {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    }

    function handleResize() {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );
    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, [isMobileMenuOpen]);

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`relative mx-auto max-w-[1400px] overflow-visible rounded-[1.5rem] border backdrop-blur-2xl transition-all duration-300 ${
          isScrolled
            ? "border-[color:var(--line-strong)] bg-[color:var(--panel-strong)] shadow-[0_22px_70px_var(--shadow-deep)]"
            : "border-[color:var(--line)] bg-[color:var(--panel)] shadow-[0_18px_54px_var(--shadow)]"
        }`}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--accent)] to-transparent opacity-45"
        />

        <div className="flex min-h-[68px] items-center justify-between gap-3 px-3 sm:px-4 lg:px-5">
          <a
            href="/#inicio"
            aria-label="Carlos Daniel — início"
            onClick={closeMobileMenu}
            className="group flex shrink-0 items-center gap-3 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
          >
            <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-[color:var(--accent)]/55 bg-[color:var(--panel-strong)] shadow-[0_0_24px_color-mix(in_srgb,var(--accent)_18%,transparent)]">
              <Image
                src="/images/carlos-daniel-profile.jpg"
                alt=""
                fill
                priority
                sizes="44px"
                className="object-cover object-[center_38%] transition-transform duration-300 group-hover:scale-105"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/15"
              />
            </span>

            <span className="hidden min-w-0 sm:block">
              <span className="block whitespace-nowrap text-sm font-bold tracking-[-0.025em] text-[color:var(--text)]">
                Carlos Daniel
              </span>
              <span className="mt-0.5 block whitespace-nowrap font-mono text-[7px] font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">
                Eletrônica · Software · IA
              </span>
            </span>
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-1 rounded-full border border-[color:var(--line-soft)] bg-[color:var(--bg-deep)]/30 p-1.5 lg:flex"
          >
            {navigationItems.map((item) => {
              const isActive =
                activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  aria-current={
                    isActive
                      ? "location"
                      : undefined
                  }
                  className={`group relative flex h-11 items-center gap-2 rounded-full px-4 transition-all ${
                    isActive
                      ? "bg-[color:var(--panel-raised)] text-[color:var(--text)] shadow-[0_8px_24px_var(--shadow)]"
                      : "text-[color:var(--muted)] hover:bg-[color:var(--panel)] hover:text-[color:var(--text)]"
                  }`}
                >
                  <span
                    className={`font-mono text-[9px] font-semibold tracking-[0.16em] ${
                      isActive
                        ? "text-[color:var(--accent)]"
                        : "text-[color:var(--subtle)] group-hover:text-[color:var(--accent)]"
                    }`}
                  >
                    {item.index}
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-[0.13em]">
                    {item.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-1.5 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[color:var(--accent)] shadow-[0_0_10px_var(--accent)] transition-all ${
                      isActive
                        ? "w-5 opacity-100"
                        : "w-0 opacity-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <ThemeToggle />

            <a
              href="https://github.com/carlosdaniel003"
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir GitHub de Carlos Daniel"
              className="hidden h-11 w-11 place-items-center rounded-full border border-transparent text-[color:var(--muted)] transition hover:-translate-y-0.5 hover:border-[color:var(--line)] hover:bg-[color:var(--panel-strong)] hover:text-[color:var(--accent)] sm:grid"
            >
              <Github size={18} strokeWidth={2.2} />
            </a>

            <a
              href={demosUrl}
              target="_blank"
              rel="noreferrer"
              className="group hidden h-11 items-center justify-center gap-2 rounded-full border border-[color:var(--line-strong)] bg-[color:var(--panel-strong)] px-5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[color:var(--text)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-[color:var(--ink)] xl:flex"
            >
              Sites e landing pages
              <ArrowUpRight
                size={16}
                strokeWidth={2.4}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <button
              type="button"
              aria-label={
                isMobileMenuOpen
                  ? "Fechar menu"
                  : "Abrir menu"
              }
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() =>
                setIsMobileMenuOpen(
                  (current) => !current
                )
              }
              className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--line)] bg-[color:var(--panel-strong)] text-[color:var(--accent)] shadow-[0_10px_30px_var(--shadow)] transition hover:border-[color:var(--accent)] lg:hidden"
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.span
                  key={
                    isMobileMenuOpen
                      ? "close"
                      : "menu"
                  }
                  initial={{
                    opacity: 0,
                    rotate: -18,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 18,
                    scale: 0.8,
                  }}
                  transition={{ duration: 0.15 }}
                >
                  {isMobileMenuOpen ? (
                    <X size={20} />
                  ) : (
                    <Menu size={20} />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.24,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden lg:hidden"
            >
              <div className="border-t border-[color:var(--line-soft)] px-3 pb-3 pt-3 sm:px-4">
                <nav
                  aria-label="Navegação mobile"
                  className="grid gap-2 sm:grid-cols-2"
                >
                  {navigationItems.map((item) => {
                    const isActive =
                      activeSection === item.id;

                    return (
                      <a
                        key={item.id}
                        href={item.href}
                        aria-current={
                          isActive
                            ? "location"
                            : undefined
                        }
                        onClick={closeMobileMenu}
                        className={`flex min-h-14 items-center justify-between gap-4 rounded-[1.1rem] border px-4 transition ${
                          isActive
                            ? "border-[color:var(--accent)] bg-[color:var(--panel-raised)] text-[color:var(--text)]"
                            : "border-[color:var(--line-soft)] bg-[color:var(--panel)] text-[color:var(--muted)]"
                        }`}
                      >
                        <span className="text-sm font-extrabold uppercase tracking-[0.12em]">
                          {item.label}
                        </span>
                        <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[color:var(--accent)]">
                          {item.index}
                        </span>
                      </a>
                    );
                  })}
                </nav>

                <div className="mt-2 grid gap-2 sm:grid-cols-[1fr_auto]">
                  <a
                    href={demosUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMobileMenu}
                    className="group flex min-h-14 items-center justify-between gap-4 rounded-[1.1rem] bg-[color:var(--accent)] px-4 text-[color:var(--ink)] shadow-[0_14px_34px_color-mix(in_srgb,var(--accent)_22%,transparent)]"
                  >
                    <span className="text-sm font-extrabold uppercase tracking-[0.12em]">
                      Sites e landing pages
                    </span>
                    <ArrowUpRight
                      size={18}
                      strokeWidth={2.4}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>

                  <a
                    href="https://github.com/carlosdaniel003"
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMobileMenu}
                    className="flex min-h-14 items-center justify-center gap-3 rounded-[1.1rem] border border-[color:var(--line)] bg-[color:var(--panel-strong)] px-5 text-sm font-extrabold uppercase tracking-[0.12em] text-[color:var(--text)] transition hover:border-[color:var(--accent)]"
                  >
                    <Github size={18} strokeWidth={2.2} />
                    GitHub
                  </a>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-[color:var(--line-soft)] px-1 pt-3">
                  <div>
                    <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">
                      Portfólio profissional
                    </p>
                    <p className="mt-1 text-xs text-[color:var(--muted)]">
                      Projetos, experiência e tecnologias.
                    </p>
                  </div>

                  <span className="flex items-center gap-2 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">
                    <span className="h-2 w-2 rounded-full bg-[color:var(--accent)] shadow-[0_0_12px_var(--accent)]" />
                    Online
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
