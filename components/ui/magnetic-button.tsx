"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import { EASE, prefersReducedMotion } from "@/lib/animations";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  cursorLabel?: string;
  disabled?: boolean;
};

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  type = "button",
  cursorLabel = "EXPLORE",
  disabled,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion()) return;

    const handleMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;

      gsap.to(element, {
        x: x * 0.18,
        y: y * 0.18,
        duration: 0.4,
        ease: EASE.editorial,
      });
    };

    const handleLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: EASE.cinematic,
      });
    };

    element.addEventListener("mousemove", handleMove);
    element.addEventListener("mouseleave", handleLeave);

    return () => {
      element.removeEventListener("mousemove", handleMove);
      element.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const sharedProps = {
    ref,
    className: cn("inline-block focus-ring", className),
    "data-cursor": cursorLabel,
    onClick,
    disabled,
  };

  if (href) {
    return (
      <a href={href} {...sharedProps}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} {...sharedProps}>
      {children}
    </button>
  );
}
