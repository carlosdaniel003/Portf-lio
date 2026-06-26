// src\components\ui\ThemeToggle.tsx
"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { createPortal } from "react-dom";

type AccentTheme = "green" | "blue";

const STORAGE_KEY =
  "portfolio-accent-theme";

const LEGACY_STORAGE_KEY =
  "portfolio-theme";

const THEME_CHANGE_DELAY = 500;
const SCAN_DURATION = 1200;

function isAccentTheme(
  value: unknown
): value is AccentTheme {
  return (
    value === "green" ||
    value === "blue"
  );
}

function applyTheme(
  theme: AccentTheme
) {
  const root =
    document.documentElement;

  root.dataset.accentTheme = theme;

  /*
   * Remove definitivamente a antiga
   * classe responsável pelo tema claro.
   */
  root.classList.remove("light");
}

function ThemeCore({
  theme,
  scanning = false,
}: {
  theme: AccentTheme;
  scanning?: boolean;
}) {
  const greenActive =
    theme === "green";

  const blueActive =
    theme === "blue";

  return (
    <span
      aria-hidden="true"
      className={`
        relative grid h-8 w-8
        place-items-center
        rounded-full
        border
        border-[color:var(--line)]
        bg-[color:var(--panel-strong)]
        transition
        duration-300
        ${
          scanning
            ? "scale-90 rotate-180"
            : "scale-100 rotate-0"
        }
      `}
    >
      {/* Órbita externa */}
      <span
        className="
          absolute inset-[3px]
          rounded-full
          border
          border-[color:var(--line-soft)]
        "
      />

      {/* Núcleo verde */}
      <span
        className={`
          absolute left-[6px]
          h-[9px] w-[9px]
          rounded-full
          bg-[#27f29a]
          transition-all
          duration-300
          ${
            greenActive
              ? `
                scale-110
                opacity-100
                shadow-[0_0_12px_#27f29a]
              `
              : `
                scale-75
                opacity-45
              `
          }
        `}
      />

      {/* Núcleo azul */}
      <span
        className={`
          absolute right-[6px]
          h-[9px] w-[9px]
          rounded-full
          bg-[#46d9ff]
          transition-all
          duration-300
          ${
            blueActive
              ? `
                scale-110
                opacity-100
                shadow-[0_0_12px_#46d9ff]
              `
              : `
                scale-75
                opacity-45
              `
          }
        `}
      />

      {/* Indicador central */}
      <span
        className="
          absolute left-1/2 top-1/2
          h-[3px] w-[3px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[color:var(--text)]
          opacity-70
        "
      />
    </span>
  );
}

export default function ThemeToggle() {
  const [theme, setTheme] =
    useState<AccentTheme>("green");

  const [ready, setReady] =
    useState(false);

  const [
    isScanning,
    setIsScanning,
  ] = useState(false);

  const changeTimeoutRef =
    useRef<
      ReturnType<typeof setTimeout> | null
    >(null);

  const endTimeoutRef =
    useRef<
      ReturnType<typeof setTimeout> | null
    >(null);

  useEffect(() => {
    const storedTheme =
      window.localStorage.getItem(
        STORAGE_KEY
      );

    const legacyTheme =
      window.localStorage.getItem(
        LEGACY_STORAGE_KEY
      );

    let initialTheme: AccentTheme =
      "green";

    if (isAccentTheme(storedTheme)) {
      initialTheme = storedTheme;
    } else if (
      legacyTheme === "light"
    ) {
      /*
       * Migração:
       * antigo tema claro vira tema azul.
       */
      initialTheme = "blue";
    } else if (
      legacyTheme === "dark"
    ) {
      /*
       * Migração:
       * antigo tema escuro vira tema verde.
       */
      initialTheme = "green";
    } else {
      const documentTheme =
  document.documentElement.dataset.accentTheme;

if (isAccentTheme(documentTheme)) {
  initialTheme = documentTheme;
}
    }

    applyTheme(initialTheme);

    window.localStorage.setItem(
      STORAGE_KEY,
      initialTheme
    );

    /*
     * Remove a configuração antiga depois
     * de concluir a migração.
     */
    window.localStorage.removeItem(
      LEGACY_STORAGE_KEY
    );

    setTheme(initialTheme);
    setReady(true);

    return () => {
      if (
        changeTimeoutRef.current
      ) {
        clearTimeout(
          changeTimeoutRef.current
        );
      }

      if (
        endTimeoutRef.current
      ) {
        clearTimeout(
          endTimeoutRef.current
        );
      }

      document.documentElement
        .classList.remove(
          "theme-scan-active"
        );
    };
  }, []);

  function toggleTheme() {
    if (isScanning) {
      return;
    }

    const nextTheme: AccentTheme =
      theme === "green"
        ? "blue"
        : "green";

    setIsScanning(true);

    document.documentElement
      .classList.add(
        "theme-scan-active"
      );

    changeTimeoutRef.current =
      setTimeout(() => {
        applyTheme(nextTheme);

        window.localStorage.setItem(
          STORAGE_KEY,
          nextTheme
        );

        setTheme(nextTheme);

        window.dispatchEvent(
          new CustomEvent(
            "portfolio-accent-theme-change",
            {
              detail: {
                theme: nextTheme,
              },
            }
          )
        );
      }, THEME_CHANGE_DELAY);

    endTimeoutRef.current =
      setTimeout(() => {
        document.documentElement
          .classList.remove(
            "theme-scan-active"
          );

        setIsScanning(false);
      }, SCAN_DURATION);
  }

  if (!ready) {
    return (
      <button
        type="button"
        disabled
        aria-label="Carregando tema visual"
        className="
          group grid h-11 w-11
          place-items-center
          rounded-full
          text-[color:var(--muted)]
          opacity-70
        "
      >
        <ThemeCore theme="green" />
      </button>
    );
  }

  const nextThemeLabel =
    theme === "green"
      ? "azul"
      : "verde";

  return (
    <>
      <button
        type="button"
        onClick={toggleTheme}
        disabled={isScanning}
        aria-label={`Ativar tema principal ${nextThemeLabel}`}
        aria-pressed={
          theme === "blue"
        }
        title={`Tema atual: ${
          theme === "green"
            ? "verde"
            : "azul"
        }. Ativar tema ${nextThemeLabel}.`}
        className="
          group grid h-11 w-11
          place-items-center
          rounded-full
          text-[color:var(--muted)]
          transition
          hover:-translate-y-0.5
          hover:bg-[color:var(--panel-strong)]
          disabled:pointer-events-none
          disabled:opacity-80
        "
      >
        <ThemeCore
          theme={theme}
          scanning={isScanning}
        />
      </button>

      {isScanning &&
        createPortal(
          <div
            className="theme-scan-overlay"
            aria-hidden="true"
          >
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