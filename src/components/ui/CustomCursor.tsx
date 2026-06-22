// src\components\ui\CustomCursor.tsx
"use client";

import {
  motion,
  useMotionValue,
  useSpring,
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
  const [isVisible, setIsVisible] =
    useState(false);

  const [isClicking, setIsClicking] =
    useState(false);

  const [cursorMode, setCursorMode] =
    useState<CursorMode>("default");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  /*
   * A seta acompanha diretamente o mouse.
   * Somente o anel utiliza uma mola curta.
   */
  const ringX = useSpring(cursorX, {
    stiffness: 1100,
    damping: 68,
    mass: 0.08,
  });

  const ringY = useSpring(cursorY, {
    stiffness: 1100,
    damping: 68,
    mass: 0.08,
  });

  const visibleRef = useRef(false);

  const cursorModeRef =
    useRef<CursorMode>("default");

  useEffect(() => {
    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    if (!finePointer.matches) {
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
       * Sem throttle.
       * A posição é enviada diretamente aos
       * MotionValues para reduzir a latência.
       */
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);

      updateVisibility(true);

      const target =
        event.target instanceof Element
          ? event.target
          : null;

      if (
        target?.closest(TEXT_SELECTOR)
      ) {
        updateCursorMode("text");
        return;
      }

      if (
        target?.closest(POINTER_SELECTOR)
      ) {
        updateCursorMode("pointer");
        return;
      }

      updateCursorMode("default");
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

    function handlePointerLeave(
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
      "mouseout",
      handlePointerLeave,
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
        "pointerdown",
        handlePointerDown
      );

      window.removeEventListener(
        "pointerup",
        handlePointerUp
      );

      window.removeEventListener(
        "mouseout",
        handlePointerLeave
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
  }, [cursorX, cursorY]);

  const showCustomCursor =
    isVisible && cursorMode !== "text";

  return (
    <>
      <motion.div
        aria-hidden
        className={`custom-cursor-arrow is-${cursorMode}`}
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          opacity:
            showCustomCursor ? 1 : 0,

          scale: isClicking
            ? 0.84
            : cursorMode === "pointer"
              ? 1.06
              : 1,
        }}
        transition={{
          duration: 0.065,
          ease: "easeOut",
        }}
      >
        <svg
          viewBox="0 0 24 32"
          role="presentation"
          focusable="false"
        >
          <path
            d="
              M2.5 2.5
              V25.2
              L8.7 19.3
              L13.3 29.2
              L18.1 27
              L13.5 17.2
              H22.2
              Z
            "
          />
        </svg>
      </motion.div>

      <motion.div
        aria-hidden
        className={`custom-cursor-ring is-${cursorMode}`}
        style={{
          x: ringX,
          y: ringY,
        }}
        animate={{
          opacity: showCustomCursor
            ? cursorMode === "pointer"
              ? 1
              : 0.58
            : 0,

          scale: isClicking
            ? 0.76
            : cursorMode === "pointer"
              ? 1.38
              : 1,
        }}
        transition={{
          duration: 0.085,
          ease: "easeOut",
        }}
      />
    </>
  );
}