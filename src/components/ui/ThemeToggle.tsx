// src\components\ui\ThemeToggle.tsx
"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme") as Theme | null;
    const preferredTheme: Theme = storedTheme ?? "dark";

    document.documentElement.classList.toggle("light", preferredTheme === "light");
    setTheme(preferredTheme);
    setReady(true);
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("light", nextTheme === "light");
    window.localStorage.setItem("portfolio-theme", nextTheme);
    setTheme(nextTheme);
  }

  if (!ready) {
    return (
      <button
        className="grid h-11 w-11 place-items-center rounded-full text-[color:var(--muted)] transition hover:-translate-y-0.5 hover:bg-[color:var(--panel-strong)] hover:text-[color:var(--accent)]"
        aria-label="Carregando tema"
        type="button"
      >
        <Monitor size={18} />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="group grid h-11 w-11 place-items-center rounded-full text-[color:var(--muted)] transition hover:-translate-y-0.5 hover:bg-[color:var(--panel-strong)] hover:text-[color:var(--accent)]"
      aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
      type="button"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
