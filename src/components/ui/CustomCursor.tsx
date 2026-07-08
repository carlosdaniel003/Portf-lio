// src/components/ui/CustomCursor.tsx
"use client";

import { useReducedMotion } from "framer-motion";
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

  const arrowPositionRef =
    useRef<HTMLDivElement>(null);
  const ringPositionRef =
    useRef<HTMLDivElement>(null);

  const visibleRef = useRef(false);
  const cursorModeRef =
    useRef<CursorMode>("default");

  useEffect(() => {
    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    function updatePointerAvailability() {
      const enabled = finePointer.matches;

      setIsEnabled(enabled);

      if (!enabled) {
        visibleRef.current = false;
        cursorModeRef.current = "default";
        setIsVisible(false);
        setIsClicking(false);
        setCursorMode("default");
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
      if (visibleRef.current === visible) {
        return;
      }

      visibleRef.current = visible;
      setIsVisible(visible);
    }

    function updateCursorMode(
      mode: CursorMode
    ) {
      if (cursorModeRef.current === mode) {
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

      if (element?.closest(TEXT_SELECTOR)) {
        updateCursorMode("text");
        return;
      }

      if (element?.closest(POINTER_SELECTOR)) {
        updateCursorMode("pointer");
        return;
      }

      updateCursorMode("default");
    }

    function setCursorPosition(
      clientX: number,
      clientY: number
    ) {
      const transform =
        `translate3d(${clientX}px, ${clientY}px, 0)`;

      if (arrowPositionRef.current) {
        arrowPositionRef.current.style.transform =
          transform;
      }

      if (ringPositionRef.current) {
        ringPositionRef.current.style.transform =
          transform;
      }
    }

    function handlePointerPosition(
      rawEvent: Event
    ) {
      const event = rawEvent as PointerEvent;

      if (
        event.pointerType &&
        event.pointerType !== "mouse"
      ) {
        return;
      }

      setCursorPosition(
        event.clientX,
        event.clientY
      );

      updateVisibility(true);
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

    const movementEvent =
      "onpointerrawupdate" in window
        ? "pointerrawupdate"
        : "pointermove";

    window.addEventListener(
      movementEvent,
      handlePointerPosition,
      { passive: true }
    );

    window.addEventListener(
      "pointerover",
      handlePointerOver,
      { passive: true }
    );

    window.addEventListener(
      "pointerdown",
      handlePointerDown,
      { passive: true }
    );

    window.addEventListener(
      "pointerup",
      handlePointerUp,
      { passive: true }
    );

    window.addEventListener(
      "pointercancel",
      handlePointerUp,
      { passive: true }
    );

    window.addEventListener(
      "mouseout",
      handleMouseOut,
      { passive: true }
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
        movementEvent,
        handlePointerPosition
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
  }, [isEnabled]);

  if (!isEnabled) {
    return null;
  }

  const showCustomCursor =
    isVisible && cursorMode !== "text";

  const arrowScale =
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
      <div
        ref={arrowPositionRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 2147483646,
          pointerEvents: "none",
          transform:
            "translate3d(-120px, -120px, 0)",
          willChange: "transform",
          contain: "layout style",
        }}
      >
        <div
          className={`custom-cursor-arrow is-${cursorMode}`}
          style={{
            position: "relative",
            left: "auto",
            top: "auto",
            zIndex: "auto",
            opacity: showCustomCursor ? 1 : 0,
            transform: `scale(${arrowScale})`,
            transition: prefersReducedMotion
              ? "none"
              : "opacity 80ms ease, transform 80ms ease-out",
          }}
        >
          <svg
            viewBox="0 0 22 28"
            role="presentation"
            focusable="false"
          >
            <path
              d="M2.25 2.1V21.15L7.25 16.55L11.15 25.45L15.4 23.55L11.45 14.75H19.55Z"
            />
          </svg>

          <span className="custom-cursor-arrow-core" />
        </div>
      </div>

      <div
        ref={ringPositionRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 2147483645,
          pointerEvents: "none",
          transform:
            "translate3d(-120px, -120px, 0)",
          willChange: "transform",
          contain: "layout style",
        }}
      >
        <div
          className={`custom-cursor-ring is-${cursorMode}`}
          style={{
            position: "relative",
            left: "auto",
            top: "auto",
            zIndex: "auto",
            opacity: showCustomCursor
              ? cursorMode === "pointer"
                ? 1
                : 0.62
              : 0,
            transform: `scale(${ringScale})`,
            transition: prefersReducedMotion
              ? "none"
              : "opacity 80ms ease, transform 100ms ease-out",
          }}
        >
          <span className="custom-cursor-ring-dot" />
        </div>
      </div>
    </>
  );
}
