"use client";

import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SocialEmbeds } from "@/components/social/social-embeds";

export function BeyondTheFrame() {
  const instagramUrl = siteContent.socials.instagram;

  return (
    <section
      id="social"
      className="section-dark section-padding relative overflow-hidden"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <SectionHeading
            index="05 / CREATIVE DIRECTOR"
            title={siteContent.social.heading}
            subtitle={siteContent.social.subheading}
          />
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-28">
            <p className="max-w-md text-[clamp(0.95rem,1.1vw,1.05rem)] leading-relaxed text-ivory/75">
              {siteContent.social.description}
            </p>

            <p className="editorial-metadata mt-8 text-champagne">
              {siteContent.social.handle}
            </p>

            <div className="mt-8 flex flex-wrap gap-6">
              {siteContent.social.platforms.map((platform) => (
                <MagneticButton
                  key={platform.name}
                  href={platform.url}
                  className="group flex items-center gap-3"
                  cursorLabel="OPEN"
                >
                  <span className="editorial-label border border-ivory/30 px-4 py-2 transition-all group-hover:border-ivory group-hover:bg-ivory group-hover:text-ink">
                    {platform.label}
                  </span>
                  <span className="editorial-metadata text-gray">
                    {platform.name}
                  </span>
                </MagneticButton>
              ))}
            </div>

            {siteContent.social.followerCount !== "FOLLOWER_COUNT" ? (
              <p className="editorial-metadata mt-8 text-gray/60">
                {siteContent.social.followerCount}
              </p>
            ) : null}
          </Reveal>

          <div className="lg:col-span-8">
            <SocialEmbeds />

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {siteContent.social.images.map((image, index) => (
                <Reveal
                  key={image.src}
                  delay={index * 0.08}
                  className={index === 1 ? "mt-10 md:mt-16" : index === 2 ? "-mt-4 md:mt-8" : ""}
                >
                  <Link
                    href={image.href ?? instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block aspect-[3/4] overflow-hidden focus-ring"
                    data-cursor="OPEN"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
                    <span className="editorial-metadata absolute bottom-4 left-4 text-ivory/0 transition-all duration-300 group-hover:text-ivory/90">
                      VIEW ON IG
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal className="mt-16 border-t border-border pt-8">
          <div className="flex flex-wrap gap-8">
            {siteContent.collaborations.map((brand) => (
              <span
                key={brand}
                className="serif-display text-[clamp(1.25rem,2vw,1.75rem)] text-ivory/30"
              >
                {brand}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
