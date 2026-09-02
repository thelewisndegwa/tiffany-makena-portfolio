"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import { DURATION, EASE, prefersReducedMotion } from "@/lib/animations";

type ImageRevealVariant = "vertical" | "horizontal" | "scale" | "diagonal";

type ImageRevealProps = {
  src: string;
  alt: string;
  variant?: ImageRevealVariant;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
};

const clipPaths: Record<ImageRevealVariant, { from: string; to: string }> = {
  vertical: {
    from: "inset(100% 0% 0% 0%)",
    to: "inset(0% 0% 0% 0%)",
  },
  horizontal: {
    from: "inset(0% 100% 0% 0%)",
    to: "inset(0% 0% 0% 0%)",
  },
  scale: {
    from: "inset(0% 0% 0% 0%)",
    to: "inset(0% 0% 0% 0%)",
  },
  diagonal: {
    from: "polygon(0 0, 0 0, 0 100%, 0 100%)",
    to: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
};

export function ImageReveal({
  src,
  alt,
  variant = "vertical",
  className,
  imageClassName,
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
  fill = true,
  width,
  height,
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    if (prefersReducedMotion()) {
      gsap.set(image, { clipPath: clipPaths[variant].to, scale: 1 });
      return;
    }

    const clip = clipPaths[variant];
    gsap.set(image, {
      clipPath: clip.from,
      scale: variant === "scale" ? 1.12 : 1,
    });

    const tween = gsap.to(image, {
      clipPath: clip.to,
      scale: 1,
      duration: DURATION.slow,
      ease: EASE.cinematic,
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [variant]);

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      <div ref={imageRef} className="relative h-full w-full will-change-transform">
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          priority={priority}
          sizes={sizes}
          unoptimized={src.startsWith("/images/")}
          className={cn("object-cover", imageClassName)}
        />
      </div>
    </div>
  );
}
