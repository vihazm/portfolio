"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import ImageLightbox from "@/components/ImageLightbox";

const PAGE_SIZE = 3;

export default function ProjectGallery({ images }) {
  const reduce = useReducedMotion();
  const [page, setPage] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!images || images.length === 0) return null;

  const pageCount = Math.ceil(images.length / PAGE_SIZE);
  const hasPagination = pageCount > 1;
  const start = page * PAGE_SIZE;
  const current = images.slice(start, start + PAGE_SIZE);

  function nextPage() {
    setPage((p) => (p + 1) % pageCount);
  }

  return (
    <section className="py-8 border-t border-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[13px] uppercase tracking-wider text-accent font-semibold">
          Screenshots
        </h2>
        {hasPagination && (
          <button
            type="button"
            onClick={nextPage}
            aria-label="Show next screenshots"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border text-foreground transition-all hover:border-accent active:scale-[0.94]"
          >
            <ArrowRight size={16} strokeWidth={1.5} />
          </button>
        )}
      </div>

      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={page}
            initial={reduce ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? {} : { opacity: 0, x: -24 }}
            transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
          >
            {current.map((img, i) => {
              const globalIndex = start + i;
              return (
                <motion.button
                  type="button"
                  key={img.src}
                  onClick={() => setLightboxIndex(globalIndex)}
                  whileHover={reduce ? {} : { scale: 1.03 }}
                  whileTap={reduce ? {} : { scale: 0.98 }}
                  transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
                  className="group relative aspect-[16/10] rounded-xl overflow-hidden border border-border text-left"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 280px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/0 transition-colors group-hover:bg-background/10" />
                </motion.button>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <ImageLightbox
            images={images}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onIndexChange={setLightboxIndex}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
