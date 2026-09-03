"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type LightboxImage = { src: string; alt: string };

/**
 * Shared lightbox state: tracks which image (by index into the caller's
 * image list) is currently open, plus keyboard navigation (Esc/←/→) and
 * body-scroll locking while open.
 */
export function useLightbox(count: number) {
  const [index, setIndex] = React.useState<number | null>(null);

  const open = (i: number) => setIndex(i);
  const close = () => setIndex(null);
  const next = React.useCallback(
    () => setIndex((i) => (i === null || count === 0 ? null : (i + 1) % count)),
    [count],
  );
  const prev = React.useCallback(
    () => setIndex((i) => (i === null || count === 0 ? null : (i - 1 + count) % count)),
    [count],
  );

  React.useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [index, next, prev]);

  return { index, open, close, next, prev };
}

/**
 * Full-screen image viewer overlay. Pair with useLightbox() — pass the same
 * image list the grid was built from and the state it returns.
 */
export function Lightbox({
  images,
  index,
  onClose,
  onNext,
  onPrev,
}: {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <AnimatePresence>
      {index !== null && images[index] && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/95 p-4 sm:p-8"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Stäng"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-500 hover:text-ink-950 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                aria-label="Föregående bild"
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-500 hover:text-ink-950 cursor-pointer sm:left-6"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                aria-label="Nästa bild"
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-500 hover:text-ink-950 cursor-pointer sm:right-6"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          <motion.div
            key={images[index].src}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="relative max-h-[85vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index].src}
              alt={images[index].alt}
              width={1200}
              height={1500}
              className="max-h-[85vh] w-auto rounded-xl object-contain"
            />
            {images.length > 1 && (
              <p className="mt-3 text-center text-xs font-medium text-white/50">
                {index + 1} / {images.length}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
