"use client";

import Image from "next/image";
import { siteContent } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function Disciplines() {
  return (
    <section
      id="disciplines"
      className="section-dark section-padding relative overflow-hidden"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <SectionHeading
            index="03 / WHAT SHE DOES"
            title="DISCIPLINES"
            subtitle="MODEL / CREATOR / INFLUENCER"
          />
        </Reveal>

        <div className="mt-16 space-y-20 lg:mt-24 lg:space-y-32">
          {siteContent.disciplines.map((discipline, index) => (
            <Reveal key={discipline.id} delay={index * 0.08}>
              <article
                className={cn(
                  "grid items-center gap-8 border-t border-border pt-12 lg:grid-cols-12 lg:gap-12 lg:pt-16",
                  index % 2 === 1 && "lg:[&>div:first-child]:order-2",
                )}
              >
                <div className="lg:col-span-5">
                  <span className="editorial-metadata text-champagne">
                    0{index + 1}
                  </span>
                  <h3 className="serif-display mt-4 text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-[-0.02em] text-ivory">
                    {discipline.title}
                  </h3>
                  <p className="mt-6 max-w-md text-[clamp(0.95rem,1.1vw,1.05rem)] leading-relaxed text-ivory/75">
                    {discipline.description}
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <div
                    className={cn(
                      "relative aspect-[4/5] overflow-hidden sm:aspect-[3/4]",
                      index % 2 === 0 ? "lg:ml-auto lg:max-w-xl" : "lg:max-w-xl",
                    )}
                  >
                    <Image
                      src={discipline.image}
                      alt={discipline.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
