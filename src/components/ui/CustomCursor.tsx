// src\components\ui\CustomCursor.tsx
"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const ringX = useSpring(cursorX, { stiffness: 160, damping: 22 });
  const ringY = useSpring(cursorY, { stiffness: 160, damping: 22 });

  const lastUpdateRef = useRef(0);
  const throttleDelayRef = useRef(16); // ~60fps

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (!hasFinePointer) return;

    function handleMouseMove(event: MouseEvent) {
      const now = Date.now();
      
      // Throttle mousemove para evitar excesso de atualizações
      if (now - lastUpdateRef.current < throttleDelayRef.current) {
        return;
      }
      
      lastUpdateRef.current = now;
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      setIsVisible(true);

      const target = event.target as HTMLElement | null;
      const interactiveElement = target?.closest(
        "a, button, input, textarea, select, [role='button']"
      );

      setIsPointer(Boolean(interactiveElement));
    }

    function handleMouseLeave() {
      setIsVisible(false);
    }

    function handleMouseDown() {
      setIsClicking(true);
    }

    function handleMouseUp() {
      setIsClicking(false);
    }

    // Usar 'touchstart' para detectar melhor em mobile
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        aria-hidden
        className="custom-cursor-dot"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.75 : 1,
        }}
        transition={{ duration: 0.16 }}
      />

      <motion.div
        aria-hidden
        className="custom-cursor-ring"
        style={{
          x: ringX,
          y: ringY,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isPointer ? 1.75 : isClicking ? 0.82 : 1,
        }}
        transition={{ duration: 0.18 }}
      />
    </>
  );
}