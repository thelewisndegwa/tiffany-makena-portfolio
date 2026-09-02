"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { siteContent } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { prefersReducedMotion } from "@/lib/animations";
import { cn } from "@/lib/utils";

const layoutClasses = {
  hero: "col-span-12 lg:col-span-8 aspect-[4/5] lg:aspect-[3/4]",
  float: "col-span-6 lg:col-span-4 lg:-mt-24 aspect-[3/4]",
  portrait: "col-span-6 lg:col-span-4 aspect-[3/5]",
  wide: "col-span-12 lg:col-span-8 aspect-[16/9] lg:col-start-5",
};

export function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) return;

    const images = section.querySelectorAll("[data-work-image]");

    images.forEach((image) => {
      gsap.fromTo(
        image,
        { y: 60, scale: 1.05 },
        {
          y: 0,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        },
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="section-light section-padding relative overflow-hidden"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <SectionHeading
            index="04 / SELECTED WORK"
            title={siteContent.selectedWork.heading}
            subtitle={siteContent.selectedWork.subheading}
            theme="light"
          />
        </Reveal>

        <div className="relative mt-16 grid grid-cols-12 gap-4 md:gap-6">
          {siteContent.selectedWork.images.map((image, index) => (
            <div
              key={image.id}
              data-work-image
              className={cn(
                "group relative overflow-hidden",
                layoutClasses[image.layout],
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                unoptimized
                data-cursor="VIEW"
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
              <div className="absolute bottom-4 left-4 flex items-end justify-between gap-4">
                <span className="editorial-metadata text-ivory/80">
                  {image.caption}
                </span>
                <span className="editorial-metadata text-ivory/50">
                  0{index + 1}
                </span>
              </div>
            </div>
          ))}

          <div className="pointer-events-none absolute top-1/2 right-0 hidden -translate-y-1/2 lg:block">
            <span className="serif-display text-[clamp(6rem,15vw,12rem)] leading-none text-ink/[0.03] [writing-mode:vertical-rl]">
              EDITORIAL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
