"use client";

import Image from "next/image";
import { Expand } from "lucide-react";
import { Reveal } from "./reveal";
import { Lightbox, useLightbox, type LightboxImage } from "./lightbox";

export function ServiceGallery({ images }: { images: LightboxImage[] }) {
  const shown = images.slice(0, 8);
  const { index, open, close, next, prev } = useLightbox(shown.length);

  return (
    <>
      <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {shown.map((img, i) => (
          <Reveal key={img.src} delay={i * 0.05} y={16}>
            <button
              type="button"
              onClick={() => open(i)}
              className="group relative block aspect-square w-full overflow-hidden rounded-2xl border border-border cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink-950/0 transition-colors duration-300 group-hover:bg-ink-950/35">
                <Expand className="h-6 w-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <Lightbox images={shown} index={index} onClose={close} onNext={next} onPrev={prev} />
    </>
  );
}
