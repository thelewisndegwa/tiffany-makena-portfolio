"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { prefersReducedMotion } from "@/lib/animations";

export function PageTransition({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const overlay = document.createElement("div");
    overlay.className =
      "fixed inset-0 z-[10000] bg-ink pointer-events-none origin-bottom";
    document.body.appendChild(overlay);

    const removeOverlay = () => {
      overlay.remove();
    };

    const fallback = window.setTimeout(removeOverlay, 1500);

    gsap.fromTo(
      overlay,
      { scaleY: 1 },
      {
        scaleY: 0,
        duration: 0.9,
        ease: "power4.inOut",
        onComplete: () => {
          window.clearTimeout(fallback);
          removeOverlay();
        },
      },
    );

    return () => {
      window.clearTimeout(fallback);
      removeOverlay();
    };
  }, []);

  return <>{children}</>;
}
