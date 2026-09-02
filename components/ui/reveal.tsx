"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import { DURATION, EASE, prefersReducedMotion } from "@/lib/animations";

type RevealVariant = "up" | "down" | "left" | "right" | "fade";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  start?: string;
};

const variantMap: Record<RevealVariant, gsap.TweenVars> = {
  up: { y: 60, opacity: 0 },
  down: { y: -40, opacity: 0 },
  left: { x: -50, opacity: 0 },
  right: { x: 50, opacity: 0 },
  fade: { opacity: 0 },
};

export function Reveal({
  children,
  className,
  variant = "up",
  delay = 0,
  duration = DURATION.medium,
  start = "top 85%",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (prefersReducedMotion()) {
      gsap.set(element, { opacity: 1, x: 0, y: 0 });
      return;
    }

    const tween = gsap.fromTo(
      element,
      variantMap[variant],
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration,
        delay,
        ease: EASE.editorial,
        scrollTrigger: {
          trigger: element,
          start,
          toggleActions: "play none none reverse",
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [variant, delay, duration, start]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
