// src\components\ui\CustomCursor.tsx
"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
} from "react";

type CursorMode =
  | "default"
  | "pointer"
  | "text";

const POINTER_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "select",
  "summary",
  "label[for]",
  "[role='button']",
  "[role='link']",
  "[tabindex]:not([tabindex='-1'])",
  "[data-cursor='pointer']",
  "input[type='button']",
  "input[type='submit']",
  "input[type='reset']",
  "input[type='checkbox']",
  "input[type='radio']",
  "input[type='range']",
].join(", ");

const TEXT_SELECTOR = [
  "textarea",
  "[contenteditable='true']",
  "input:not([type])",
  "input[type='text']",
  "input[type='email']",
  "input[type='password']",
  "input[type='search']",
  "input[type='tel']",
  "input[type='url']",
  "input[type='number']",
].join(", ");

export default function CustomCursor() {
  const prefersReducedMotion =
    useReducedMotion();

  const [isEnabled, setIsEnabled] =
    useState(false);

  const [isVisible, setIsVisible] =
    useState(false);

  const [isClicking, setIsClicking] =
    useState(false);

  const [cursorMode, setCursorMode] =
    useState<CursorMode>("default");

  /*
   * As duas camadas usam exatamente os mesmos MotionValues.
   * Não existe mola, interpolação ou atraso de posição.
   */
  const cursorX = useMotionValue(-120);
  const cursorY = useMotionValue(-120);

  const visibleRef = useRef(false);

  const cursorModeRef =
    useRef<CursorMode>("default");

  useEffect(() => {
    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    function updatePointerAvailability() {
      const enabled =
        finePointer.matches;

      setIsEnabled(enabled);

      if (!enabled) {
        visibleRef.current = false;
        setIsVisible(false);
        setIsClicking(false);
        setCursorMode("default");
        cursorModeRef.current = "default";
      }
    }

    updatePointerAvailability();

    finePointer.addEventListener(
      "change",
      updatePointerAvailability
    );

    return () => {
      finePointer.removeEventListener(
        "change",
        updatePointerAvailability
      );
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    function updateVisibility(
      visible: boolean
    ) {
      if (
        visibleRef.current === visible
      ) {
        return;
      }

      visibleRef.current = visible;
      setIsVisible(visible);
    }

    function updateCursorMode(
      mode: CursorMode
    ) {
      if (
        cursorModeRef.current === mode
      ) {
        return;
      }

      cursorModeRef.current = mode;
      setCursorMode(mode);
    }

    function detectCursorMode(
      target: EventTarget | null
    ) {
      const element =
        target instanceof Element
          ? target
          : null;

      if (
        element?.closest(TEXT_SELECTOR)
      ) {
        updateCursorMode("text");
        return;
      }

      if (
        element?.closest(POINTER_SELECTOR)
      ) {
        updateCursorMode("pointer");
        return;
      }

      updateCursorMode("default");
    }

    function handlePointerMove(
      event: PointerEvent
    ) {
      if (
        event.pointerType &&
        event.pointerType !== "mouse"
      ) {
        return;
      }

      /*
       * Atualização direta em cada evento do mouse.
       * A posição visual acompanha o ponteiro nativo
       * sem spring, throttle ou requestAnimationFrame.
       */
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);

      updateVisibility(true);
      detectCursorMode(event.target);
    }

    function handlePointerOver(
      event: PointerEvent
    ) {
      if (
        event.pointerType &&
        event.pointerType !== "mouse"
      ) {
        return;
      }

      detectCursorMode(event.target);
    }

    function handlePointerDown(
      event: PointerEvent
    ) {
      if (
        event.pointerType &&
        event.pointerType !== "mouse"
      ) {
        return;
      }

      setIsClicking(true);
    }

    function handlePointerUp() {
      setIsClicking(false);
    }

    function handleMouseOut(
      event: MouseEvent
    ) {
      if (!event.relatedTarget) {
        updateVisibility(false);
        setIsClicking(false);
      }
    }

    function handleWindowBlur() {
      updateVisibility(false);
      setIsClicking(false);
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        updateVisibility(false);
        setIsClicking(false);
      }
    }

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "pointerover",
      handlePointerOver,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "pointerdown",
      handlePointerDown,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "pointerup",
      handlePointerUp,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "pointercancel",
      handlePointerUp,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "mouseout",
      handleMouseOut,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "blur",
      handleWindowBlur
    );

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "pointerover",
        handlePointerOver
      );

      window.removeEventListener(
        "pointerdown",
        handlePointerDown
      );

      window.removeEventListener(
        "pointerup",
        handlePointerUp
      );

      window.removeEventListener(
        "pointercancel",
        handlePointerUp
      );

      window.removeEventListener(
        "mouseout",
        handleMouseOut
      );

      window.removeEventListener(
        "blur",
        handleWindowBlur
      );

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    };
  }, [
    cursorX,
    cursorY,
    isEnabled,
  ]);

  if (!isEnabled) {
    return null;
  }

  const showCustomCursor =
    isVisible &&
    cursorMode !== "text";

  const interactionScale =
    prefersReducedMotion
      ? 1
      : isClicking
        ? 0.82
        : cursorMode === "pointer"
          ? 1.08
          : 1;

  const ringScale =
    prefersReducedMotion
      ? 1
      : isClicking
        ? 0.7
        : cursorMode === "pointer"
          ? 1.42
          : 1;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className={`custom-cursor-arrow is-${cursorMode}`}
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          opacity:
            showCustomCursor ? 1 : 0,
          scale: interactionScale,
        }}
        transition={{
          opacity: {
            duration: 0.08,
          },
          scale: {
            duration:
              prefersReducedMotion
                ? 0
                : 0.08,
            ease: "easeOut",
          },
        }}
      >
        <svg
          viewBox="0 0 22 28"
          role="presentation"
          focusable="false"
        >
          <path
            d="
              M2.25 2.1
              V21.15
              L7.25 16.55
              L11.15 25.45
              L15.4 23.55
              L11.45 14.75
              H19.55
              Z
            "
          />
        </svg>

        <span className="custom-cursor-arrow-core" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className={`custom-cursor-ring is-${cursorMode}`}
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          opacity:
            showCustomCursor
              ? cursorMode === "pointer"
                ? 1
                : 0.62
              : 0,
          scale: ringScale,
        }}
        transition={{
          opacity: {
            duration: 0.08,
          },
          scale: {
            duration:
              prefersReducedMotion
                ? 0
                : 0.1,
            ease: "easeOut",
          },
        }}
      >
        <span className="custom-cursor-ring-dot" />
      </motion.div>
    </>
  );
}
