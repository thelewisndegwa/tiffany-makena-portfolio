"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteContent } from "@/lib/content";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./mobile-menu";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-border bg-ink/90 py-4 backdrop-blur-md"
            : "bg-gradient-to-b from-ink/80 to-transparent py-6",
        )}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-[var(--section-padding-x)]">
          <Link href="/" className="group focus-ring">
            <span className="serif-display block text-[clamp(1rem,2vw,1.25rem)] tracking-[0.08em] text-ivory">
              {siteContent.name.first}{" "}
              <span className="text-[0.75em] font-normal tracking-[0.2em]">
                {siteContent.name.last}
              </span>
            </span>
            <span className="editorial-metadata mt-1 hidden text-gray md:block">
              {siteContent.roles.join(" / ")}
            </span>
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {siteContent.navigation.slice(0, 3).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="editorial-label text-ivory/80 transition-colors hover:text-ivory focus-ring"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="editorial-label border border-ivory/30 px-5 py-2.5 text-ivory transition-all hover:border-ivory hover:bg-ivory hover:text-ink focus-ring"
              data-cursor="CONTACT"
            >
              WORK WITH ME
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="editorial-label flex flex-col gap-1.5 text-ivory focus-ring lg:hidden"
            aria-label="Open menu"
            data-cursor="OPEN"
          >
            <span className="block h-px w-8 bg-current" />
            <span className="block h-px w-5 bg-current" />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
