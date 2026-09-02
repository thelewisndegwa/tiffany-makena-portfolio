"use client";

import Image from "next/image";
import { siteContent } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function GalleryTeaser() {
  const previewImages = siteContent.gallery.images.slice(0, 4);

  return (
    <section className="section-dark section-padding relative overflow-hidden">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <SectionHeading
            index="07 / GALLERY"
            title={siteContent.gallery.heading}
            subtitle={siteContent.gallery.subheading}
          />
        </Reveal>

        <Reveal className="mt-8 max-w-lg">
          <p className="text-sm leading-relaxed text-ivory/70">
            {siteContent.gallery.teaserCopy}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {previewImages.map((image, index) => (
            <Reveal
              key={image.id}
              delay={index * 0.08}
              className={index === 1 ? "mt-8" : index === 2 ? "-mt-4" : ""}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                  unoptimized
                  data-cursor="VIEW"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <MagneticButton
            href="/gallery"
            className="editorial-label group inline-flex items-center gap-4 border-b border-ivory/30 pb-2 text-ivory transition-colors hover:border-ivory"
            cursorLabel="EXPLORE"
          >
            {siteContent.gallery.cta}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
