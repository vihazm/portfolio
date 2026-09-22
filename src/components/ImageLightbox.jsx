"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function ImageLightbox({ images, index, onClose, onIndexChange }) {
  const reduce = useReducedMotion();
  const total = images.length;
  const current = images[index];

  const goPrev = useCallback(() => {
    onIndexChange((index - 1 + total) % total);
  }, [index, total, onIndexChange]);

  const goNext = useCallback(() => {
    onIndexChange((index + 1) % total);
  }, [index, total, onIndexChange]);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [goPrev, goNext, onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Project screenshot viewer"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduce ? {} : { opacity: 0 }}
      transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/85 backdrop-blur-md p-6"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 sm:top-6 sm:right-6 inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-surface/70 text-foreground transition-all hover:border-accent active:scale-[0.94]"
      >
        <X size={18} strokeWidth={1.5} />
      </button>

      {total > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          aria-label="Previous image"
          className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-11 h-11 rounded-full border border-border bg-surface/70 text-foreground transition-all hover:border-accent active:scale-[0.94]"
        >
          <ChevronLeft size={20} strokeWidth={1.5} />
        </button>
      )}

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={index}
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={reduce ? {} : { opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl aspect-[16/10] rounded-xl overflow-hidden border border-border bg-surface"
        >
          <Image
            src={current.src}
            alt={current.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-contain"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {total > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          aria-label="Next image"
          className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-11 h-11 rounded-full border border-border bg-surface/70 text-foreground transition-all hover:border-accent active:scale-[0.94]"
        >
          <ChevronRight size={20} strokeWidth={1.5} />
        </button>
      )}

      {total > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[12px] text-muted">
          {index + 1} / {total}
        </div>
      )}
    </motion.div>
  );
}
