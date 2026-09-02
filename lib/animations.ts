import type { RefObject } from "react";

export const EASE = {
  editorial: "power3.out",
  cinematic: "power4.inOut",
  reveal: "power2.inOut",
  snap: "power4.out",
} as const;

export const DURATION = {
  fast: 0.4,
  medium: 0.8,
  slow: 1.2,
  hero: 1.6,
} as const;

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isFinePointer(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: fine)").matches;
}

export function setWillChange(
  element: HTMLElement | null,
  value: string | null,
) {
  if (!element) return;
  if (value) {
    element.style.willChange = value;
    return;
  }
  element.style.willChange = "";
}

export function getElement<T extends HTMLElement>(
  ref: RefObject<T | null>,
): T | null {
  return ref.current;
}
