"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { siteContent } from "@/lib/content";
import { formatIndex, cn } from "@/lib/utils";

type LightboxProps = {
  images: typeof siteContent.gallery.images;
  initialIndex: number;
  onClose: () => void;
};

export function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const goNext = useCallback(() => {
    setIndex((current) => (current + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setIndex((current) => (current - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, goNext, goPrev]);

  const current = images[index];

  const handleTouchStart = (event: React.TouchEvent) => {
    setTouchStart(event.touches[0].clientX);
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = event.changedTouches[0].clientX - touchStart;
    if (diff > 50) goPrev();
    if (diff < -50) goNext();
    setTouchStart(null);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        type="button"
        onClick={onClose}
        className="editorial-label absolute top-6 right-6 z-10 text-ivory focus-ring"
        aria-label="Close lightbox"
      >
        CLOSE
      </button>

      <span className="editorial-metadata absolute top-6 left-6 text-ivory/60">
        {formatIndex(index, images.length)}
      </span>

      <button
        type="button"
        onClick={goPrev}
        className="editorial-label absolute top-1/2 left-4 z-10 -translate-y-1/2 text-ivory/70 transition-colors hover:text-ivory focus-ring md:left-8"
        aria-label="Previous image"
      >
        PREV
      </button>

      <button
        type="button"
        onClick={goNext}
        className="editorial-label absolute top-1/2 right-4 z-10 -translate-y-1/2 text-ivory/70 transition-colors hover:text-ivory focus-ring md:right-8"
        aria-label="Next image"
      >
        NEXT
      </button>

      <div className="relative h-[80vh] w-[90vw] max-w-5xl">
        <Image
          key={current.id}
          src={current.src}
          alt={current.alt}
          fill
          sizes="90vw"
          className="object-contain"
          unoptimized
          priority
        />
      </div>
    </div>
  );
}

type GalleryGridProps = {
  className?: string;
};

const layoutMap = {
  hero: "col-span-12 md:col-span-8 md:row-span-2 aspect-[3/4] md:aspect-auto md:min-h-[70vh]",
  large: "col-span-6 md:col-span-4 aspect-[3/4]",
  medium: "col-span-6 md:col-span-4 aspect-[4/3]",
  small: "col-span-6 md:col-span-4 aspect-[3/5]",
};

export function GalleryGrid({ className }: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div
        className={cn(
          "grid grid-cols-12 gap-3 md:gap-5",
          className,
        )}
      >
        {siteContent.gallery.images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setLightboxIndex(index)}
            className={cn(
              "group relative overflow-hidden focus-ring",
              layoutMap[image.layout],
            )}
            data-cursor="VIEW"
            aria-label={`View ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              unoptimized
            />
            <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15" />
          </button>
        ))}
      </div>

      {lightboxIndex !== null ? (
        <Lightbox
          images={siteContent.gallery.images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      ) : null}
    </>
  );
}
