"use client";

import Logo from "@/components/ui/Logo";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Image, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

type ProjectImageModalProps = {
  open: boolean;
  projectTitle: string;
  projectCategory: string;
  images: string[];
  initialIndex: number;
  onClose: () => void;
};

export default function ProjectImageModal({
  open,
  projectTitle,
  projectCategory,
  images,
  initialIndex,
  onClose,
}: ProjectImageModalProps) {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const safeImages = useMemo(() => {
    return Array.from(new Set(images.filter(Boolean)));
  }, [images]);

  const currentImage = safeImages[currentIndex] ?? safeImages[0];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const nextIndex =
      initialIndex >= 0 && initialIndex < safeImages.length ? initialIndex : 0;

    setCurrentIndex(nextIndex);
  }, [open, initialIndex, safeImages.length]);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        goToNext();
      }

      if (event.key === "ArrowLeft") {
        goToPrevious();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose, safeImages.length]);

  function goToNext() {
    if (safeImages.length <= 1) return;
    setCurrentIndex((current) => (current + 1) % safeImages.length);
  }

  function goToPrevious() {
    if (safeImages.length <= 1) return;
    setCurrentIndex((current) =>
      current === 0 ? safeImages.length - 1 : current - 1
    );
  }

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && currentImage && (
        <motion.div
          className="fixed inset-0 z-[2147483645] flex items-center justify-center overflow-hidden bg-black/78 p-3 text-white backdrop-blur-2xl sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(39,242,154,0.18),transparent_32rem)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative z-10 flex h-[92vh] w-full max-w-7xl flex-col overflow-hidden rounded-[2rem] border border-white/15 bg-[color:var(--panel)] shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.96, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 18, scale: 0.96, filter: "blur(10px)" }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-black/20 p-4 sm:p-5">
              <div className="flex min-w-0 items-center gap-4">
                <Logo variant="mark" size="sm" />

                <div className="min-w-0">
                  <p className="truncate text-xs font-black uppercase tracking-[0.22em] text-[color:var(--accent)]">
                    Visualização do projeto
                  </p>

                  <h3 className="mt-1 truncate text-lg font-black tracking-[-0.03em] text-white sm:text-2xl">
                    {projectTitle}
                  </h3>

                  <p className="mt-1 truncate text-[10px] font-black uppercase tracking-[0.18em] text-white/55">
                    {projectCategory}
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-black/25 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white/70 sm:flex">
                  <Image size={14} />
                  {currentIndex + 1}/{safeImages.length}
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Fechar visualização"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-black/25 text-white/75 transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center bg-black/18 p-3 sm:p-6">
              {safeImages.length > 1 && (
                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label="Imagem anterior"
                  className="absolute left-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/35 text-white/75 backdrop-blur-xl transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] sm:left-5"
                >
                  <ChevronLeft size={22} />
                </button>
              )}

              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={currentImage}
                  alt={`${projectTitle} imagem ${currentIndex + 1}`}
                  className="max-h-full max-w-full rounded-2xl border border-white/10 object-contain shadow-[0_18px_70px_rgba(0,0,0,0.45)]"
                  initial={{ opacity: 0, scale: 0.985 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.985 }}
                  transition={{ duration: 0.22 }}
                />
              </AnimatePresence>

              {safeImages.length > 1 && (
                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="Próxima imagem"
                  className="absolute right-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/35 text-white/75 backdrop-blur-xl transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] sm:right-5"
                >
                  <ChevronRight size={22} />
                </button>
              )}
            </div>

            {safeImages.length > 1 && (
              <div className="border-t border-white/10 bg-black/25 p-3 sm:p-4">
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {safeImages.map((imageUrl, index) => {
                    const isActive = index === currentIndex;

                    return (
                      <button
                        key={imageUrl}
                        type="button"
                        onClick={() => setCurrentIndex(index)}
                        className={
                          isActive
                            ? "relative h-16 w-24 shrink-0 overflow-hidden rounded-2xl border border-[color:var(--accent)] bg-black shadow-[0_0_24px_color-mix(in_srgb,var(--accent)_30%,transparent)] sm:h-20 sm:w-32"
                            : "relative h-16 w-24 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-black opacity-65 transition hover:border-[color:var(--accent)] hover:opacity-100 sm:h-20 sm:w-32"
                        }
                      >
                        <img
                          src={imageUrl}
                          alt={`${projectTitle} miniatura ${index + 1}`}
                          className="h-full w-full object-cover"
                        />

                        <span className="absolute left-2 top-2 rounded-full bg-black/55 px-2 py-1 text-[9px] font-black text-white backdrop-blur-xl">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}