"use client";

import { useEffect } from "react";
import { useCursor } from "@/components/providers/cursor-provider";

export function CursorInteractions() {
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    const handleOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const modal = document.querySelector('[aria-modal="true"]');
      if (modal && !modal.contains(target)) {
        resetCursor();
        return;
      }

      const interactive = target.closest<HTMLElement>("[data-cursor]");
      if (!interactive) {
        resetCursor();
        return;
      }

      setCursor({ label: interactive.dataset.cursor ?? "", active: true });
    };

    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseleave", resetCursor);

    return () => {
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseleave", resetCursor);
    };
  }, [setCursor, resetCursor]);

  return null;
}
