"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteContent } from "@/lib/content";
import Image from "next/image";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { prefersReducedMotion } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const imageWrap = imageWrapRef.current;
    if (!section || !content || !imageWrap) return;

    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(content.children, {
        y: 32,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(imageWrap, {
        scale: 1.04,
        duration: 1.6,
        ease: "power2.out",
      });

      gsap.to(imageWrap, {
        scale: 1.02,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="intro"
      className="relative min-h-[100svh] overflow-hidden bg-ink lg:grid lg:min-h-[100svh] lg:grid-cols-12"
    >
      {/* Mobile: full-bleed background */}
      <div
        ref={imageWrapRef}
        className="absolute inset-0 z-0 will-change-transform lg:relative lg:col-span-7 lg:col-start-6 lg:min-h-[100svh]"
      >
        <Image
          src={siteContent.hero.image}
          alt={siteContent.hero.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          unoptimized
          className="object-cover object-[center_28%] lg:object-center"
        />
        {/* Mobile gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/55 lg:hidden" />
        {/* Desktop: fade image into typography on the left */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-ink via-ink/25 to-transparent lg:block" />
        <div className="absolute inset-0 hidden bg-gradient-to-t from-ink/80 via-transparent to-ink/20 lg:block" />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 flex min-h-[100svh] flex-col justify-between px-[var(--section-padding-x)] pt-32 pb-12 lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:min-h-[100svh] lg:justify-end lg:pt-36 lg:pb-16"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between lg:flex-col lg:gap-4">
          <span className="editorial-metadata text-ivory/70">
            {siteContent.location}
          </span>
          <div className="flex flex-wrap gap-4 md:justify-end lg:justify-start">
            {siteContent.hero.metadata.map((item) => (
              <span key={item} className="editorial-metadata text-ivory/50">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:gap-10">
          <div className="max-w-5xl lg:max-w-none">
            <p className="editorial-label mb-4 text-champagne">
              {siteContent.roles.join(" / ")}
            </p>
            <h1 className="leading-[0.85]">
              <span className="serif-display block text-[clamp(4rem,18vw,14rem)] tracking-[-0.03em] text-ivory lg:text-[clamp(5rem,11vw,10rem)]">
                {siteContent.name.first}
              </span>
              <span className="sans-body mt-2 block text-[clamp(1.5rem,5vw,4rem)] font-medium tracking-[0.35em] text-ivory/90 lg:text-[clamp(1.25rem,2.5vw,2.5rem)]">
                {siteContent.name.last}
              </span>
            </h1>
          </div>

          <div className="flex flex-col items-start gap-4">
            <MagneticButton
              href="#about"
              className="editorial-label group flex items-center gap-4 border-b border-ivory/40 pb-2 text-ivory transition-colors hover:border-ivory"
              cursorLabel="EXPLORE"
            >
              {siteContent.hero.cta}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
