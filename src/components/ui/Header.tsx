"use client";

import ThemeToggle from "@/components/ui/ThemeToggle";
import { Folder, Github, Home, Mail, User } from "lucide-react";
import { useEffect, useState } from "react";

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
    label: "Contato",
    href: "#contato",
    icon: Mail,
  },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    function handleScroll() {
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
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header className="fixed left-4 top-1/2 z-50 -translate-y-1/2">
      <nav
        aria-label="Menu principal"
        className="relative flex flex-col items-center gap-3 rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] p-2 shadow-2xl backdrop-blur-2xl"
      >
        <span className="pointer-events-none absolute inset-y-5 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[color:var(--accent)]/25 to-transparent" />

        <a
          href="#inicio"
          aria-label="Carlos Daniel - início"
          className="group relative z-10 grid h-11 w-11 place-items-center rounded-full border border-[color:var(--line)] bg-[color:var(--panel-strong)] font-black text-[color:var(--accent)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)]"
        >
          CD

          <span className="pointer-events-none absolute left-14 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-[color:var(--line)] bg-[color:var(--panel-strong)] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--text)] opacity-0 shadow-xl backdrop-blur-xl transition group-hover:opacity-100 lg:block">
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
                  ? "group relative z-10 grid h-11 w-11 place-items-center rounded-full border border-[color:var(--accent)] bg-[color:var(--panel-strong)] text-[color:var(--accent)] shadow-[0_0_28px_color-mix(in_srgb,var(--accent)_22%,transparent)] transition hover:-translate-y-0.5"
                  : "group relative z-10 grid h-11 w-11 place-items-center rounded-full text-[color:var(--muted)] transition hover:-translate-y-0.5 hover:bg-[color:var(--panel-strong)] hover:text-[color:var(--accent)]"
              }
            >
              {isActive && (
                <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[color:var(--accent)] shadow-[0_0_18px_var(--accent)]" />
              )}

              <Icon size={18} strokeWidth={2.3} />

              <span className="pointer-events-none absolute left-14 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-[color:var(--line)] bg-[color:var(--panel-strong)] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--text)] opacity-0 shadow-xl backdrop-blur-xl transition group-hover:opacity-100 lg:block">
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

          <span className="pointer-events-none absolute left-14 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-[color:var(--line)] bg-[color:var(--panel-strong)] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--text)] opacity-0 shadow-xl backdrop-blur-xl transition group-hover:opacity-100 lg:block">
            GitHub
          </span>
        </a>
      </nav>
    </header>
  );
}