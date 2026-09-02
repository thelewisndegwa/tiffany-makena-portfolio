"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import { DURATION, EASE, prefersReducedMotion } from "@/lib/animations";

type AnimatedTextProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  splitBy?: "chars" | "words" | "lines";
};

export function AnimatedText({
  text,
  className,
  as: Tag = "span",
  delay = 0,
  splitBy = "words",
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const parts =
      splitBy === "chars"
        ? text.split("")
        : splitBy === "lines"
          ? text.split("\n")
          : text.split(" ");

    element.innerHTML = parts
      .map(
        (part, index) =>
          `<span class="inline-block overflow-hidden align-top"><span class="inline-block animated-text-part" style="display:inline-block" data-index="${index}">${part}${splitBy === "words" && index < parts.length - 1 ? "&nbsp;" : ""}</span></span>`,
      )
      .join(splitBy === "lines" ? "<br/>" : "");

    const items = element.querySelectorAll(".animated-text-part");

    if (prefersReducedMotion()) {
      gsap.set(items, { y: 0, opacity: 1 });
      return;
    }

    gsap.set(items, { y: "110%", opacity: 0 });

    gsap.to(items, {
      y: 0,
      opacity: 1,
      duration: DURATION.medium,
      delay,
      stagger: splitBy === "chars" ? 0.02 : 0.06,
      ease: EASE.editorial,
    });
  }, [text, delay, splitBy]);

  return (
    <Tag ref={ref as never} className={cn(className)}>
      {text}
    </Tag>
  );
}
