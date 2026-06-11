"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [ready, setReady] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  const changeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const endTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme") as Theme | null;
    const preferredTheme: Theme = storedTheme ?? "dark";

    document.documentElement.classList.toggle("light", preferredTheme === "light");
    setTheme(preferredTheme);
    setReady(true);

    return () => {
      if (changeTimeoutRef.current) {
        clearTimeout(changeTimeoutRef.current);
      }

      if (endTimeoutRef.current) {
        clearTimeout(endTimeoutRef.current);
      }
    };
  }, []);

  function toggleTheme() {
    if (isScanning) {
      return;
    }

    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    setIsScanning(true);
    document.documentElement.classList.add("theme-scan-active");

    changeTimeoutRef.current = setTimeout(() => {
      document.documentElement.classList.toggle("light", nextTheme === "light");
      window.localStorage.setItem("portfolio-theme", nextTheme);
      setTheme(nextTheme);
    }, 560);

    endTimeoutRef.current = setTimeout(() => {
      document.documentElement.classList.remove("theme-scan-active");
      setIsScanning(false);
    }, 1400);
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
    <>
      <button
        onClick={toggleTheme}
        disabled={isScanning}
        className="group grid h-11 w-11 place-items-center rounded-full text-[color:var(--muted)] transition hover:-translate-y-0.5 hover:bg-[color:var(--panel-strong)] hover:text-[color:var(--accent)] disabled:pointer-events-none disabled:opacity-80"
        aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
        type="button"
      >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      {isScanning &&
        createPortal(
          <div className="theme-scan-overlay" aria-hidden="true">
            <div className="theme-scan-band">
              <div className="theme-scan-core" />
              <div className="theme-scan-line" />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}