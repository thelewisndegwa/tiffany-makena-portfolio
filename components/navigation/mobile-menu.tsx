"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { siteContent } from "@/lib/content";
import { cn } from "@/lib/utils";
import { prefersReducedMotion } from "@/lib/animations";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const overlay = overlayRef.current;
    const panel = panelRef.current;
    if (!overlay || !panel) return;

    if (prefersReducedMotion()) {
      gsap.set([overlay, panel], { opacity: 1, x: 0 });
      return;
    }

    gsap.set(overlay, { opacity: 0 });
    gsap.set(panel, { x: "100%" });
    gsap.to(overlay, { opacity: 1, duration: 0.35, ease: "power2.out" });
    gsap.to(panel, { x: 0, duration: 0.55, ease: "power3.out" });

    const items = panel.querySelectorAll("[data-menu-item]");
    gsap.fromTo(
      items,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.45,
        stagger: 0.06,
        delay: 0.12,
        ease: "power3.out",
      },
    );

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClose = () => {
    onClose();
  };

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60]" role="presentation">
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        className="absolute top-0 right-0 flex h-full w-full max-w-md flex-col bg-ivory px-8 py-10 text-ink shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="mb-16 flex items-center justify-between">
          <span className="editorial-metadata text-gray">MENU</span>
          <button
            type="button"
            onClick={handleClose}
            className="editorial-label focus-ring"
            aria-label="Close menu"
            data-cursor="CLOSE"
          >
            CLOSE
          </button>
        </div>

        <nav className="flex flex-col gap-6">
          {siteContent.navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={handleClose}
              data-menu-item
              data-cursor="OPEN"
              className="serif-display text-4xl leading-none focus-ring"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto space-y-4">
          <p className="editorial-metadata text-gray">{siteContent.location}</p>
          <p className="editorial-label">{siteContent.roles.join(" / ")}</p>
        </div>
      </div>
    </div>
  );
}
