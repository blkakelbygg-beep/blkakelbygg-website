"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { projectImages, services } from "@/lib/site-config";

const filters = [
  { key: "alla", label: "Alla projekt" },
  ...services.map((s) => ({ key: s.slug, label: s.navLabel })),
];

export function ProjectGallery() {
  const [active, setActive] = React.useState("alla");
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  const visible = React.useMemo(() => {
    if (active === "alla") return projectImages;
    const service = services.find((s) => s.slug === active);
    if (!service) return projectImages;
    return projectImages.filter((img) => service.gallery.includes(img.id));
  }, [active]);

  const openAt = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const next = React.useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % visible.length)),
    [visible.length],
  );
  const prev = React.useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + visible.length) % visible.length)),
    [visible.length],
  );

  React.useEffect(() => {
    if (lightboxIndex === null) return;
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
  }, [lightboxIndex, next, prev]);

  return (
    <div>
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2.5">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setActive(f.key)}
            className={`rounded-full border px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
              active === f.key
                ? "border-brand-500 bg-brand-500 text-ink-950"
                : "border-border bg-surface text-muted hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-400"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        <AnimatePresence>
          {visible.map((img, i) => (
            <motion.button
              key={img.id}
              type="button"
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => openAt(i)}
              className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl border border-border bg-surface-2 cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={700}
                height={900}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink-950/0 transition-colors duration-300 group-hover:bg-ink-950/35">
                <Expand className="h-6 w-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && visible[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/95 p-4 sm:p-8"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Stäng"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-500 hover:text-ink-950 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
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
                next();
              }}
              aria-label="Nästa bild"
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-500 hover:text-ink-950 cursor-pointer sm:right-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.div
              key={visible[lightboxIndex].id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[85vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={visible[lightboxIndex].src}
                alt={visible[lightboxIndex].alt}
                width={1200}
                height={1500}
                className="max-h-[85vh] w-auto rounded-xl object-contain"
              />
              <p className="mt-3 text-center text-xs font-medium text-white/50">
                {lightboxIndex + 1} / {visible.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
