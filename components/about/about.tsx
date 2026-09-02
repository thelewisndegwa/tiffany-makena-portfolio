"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { siteContent } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { ImageReveal } from "@/components/ui/image-reveal";
import { Reveal } from "@/components/ui/reveal";
import { prefersReducedMotion } from "@/lib/animations";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const statementRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const portrait = portraitRef.current;
    const statement = statementRef.current;

    if (!section || !portrait || !statement || prefersReducedMotion()) return;

    gsap.fromTo(
      portrait,
      { x: 80, opacity: 0.6 },
      {
        x: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      },
    );

    gsap.fromTo(
      statement,
      { x: -40 },
      {
        x: 40,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-light section-padding relative overflow-hidden"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <SectionHeading
            index="02 / WHO SHE IS"
            title={siteContent.bio.heading}
            theme="light"
          />
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <p
                ref={statementRef}
                className="serif-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-ink"
              >
                {siteContent.bio.statements[0]}
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-10">
              <p className="serif-display text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] text-ink/70">
                {siteContent.bio.statements[1]}
              </p>
            </Reveal>

            <div className="mt-12 space-y-6">
              {siteContent.bio.paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph.slice(0, 24)} delay={0.1 * index}>
                  <p className="max-w-md text-[clamp(0.95rem,1.1vw,1.05rem)] leading-relaxed text-ink/75">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-10">
              <div className="flex flex-wrap gap-4">
                {siteContent.bio.metadata.map((item) => (
                  <span
                    key={item}
                    className="editorial-metadata border border-ink/15 px-3 py-1.5 text-ink/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="relative lg:col-span-7">
            <div
              ref={portraitRef}
              className="relative ml-auto w-full max-w-xl lg:-mr-8 lg:max-w-none"
            >
              <ImageReveal
                src={siteContent.bio.portrait.src}
                alt={siteContent.bio.portrait.alt}
                variant="diagonal"
                className="aspect-[3/4] w-full"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute -bottom-6 -left-6 hidden border border-ink/10 bg-ivory p-4 md:block">
                <span className="editorial-metadata text-ink/40">
                  {siteContent.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
