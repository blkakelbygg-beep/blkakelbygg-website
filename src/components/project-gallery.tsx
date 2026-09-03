"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Expand } from "lucide-react";
import { projectImages, services } from "@/lib/site-config";
import { Lightbox, useLightbox } from "./lightbox";

const filters = [
  { key: "alla", label: "Alla projekt" },
  ...services.map((s) => ({ key: s.slug, label: s.navLabel })),
];

export function ProjectGallery() {
  const [active, setActive] = React.useState("alla");

  const visible = React.useMemo(() => {
    if (active === "alla") return projectImages;
    const service = services.find((s) => s.slug === active);
    if (!service) return projectImages;
    return projectImages.filter((img) => service.gallery.includes(img.id));
  }, [active]);

  const { index, open, close, next, prev } = useLightbox(visible.length);

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
              onClick={() => open(i)}
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

      <Lightbox images={visible} index={index} onClose={close} onNext={next} onPrev={prev} />
    </div>
  );
}
