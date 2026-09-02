import Link from "next/link";
import { siteContent } from "@/lib/content";

export function Footer() {
  return (
    <footer className="section-dark border-t border-border px-[var(--section-padding-x)] py-16">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="serif-display text-[clamp(2rem,5vw,3.5rem)] leading-none text-ivory">
            {siteContent.name.first}{" "}
            <span className="text-[0.7em] tracking-[0.2em]">
              {siteContent.name.last}
            </span>
          </p>
          <p className="editorial-label mt-4 text-gray">
            {siteContent.roles.join(" / ")}
          </p>
          <p className="editorial-metadata mt-2 text-gray/70">
            {siteContent.location}
          </p>
        </div>

        <div className="flex flex-col gap-6 md:items-end">
          <div className="flex flex-wrap gap-6">
            <Link
              href={siteContent.socials.instagram}
              className="editorial-label text-ivory/70 transition-colors hover:text-ivory focus-ring"
              data-cursor="OPEN"
            >
              Instagram
            </Link>
            <Link
              href={siteContent.socials.tiktok}
              className="editorial-label text-ivory/70 transition-colors hover:text-ivory focus-ring"
              data-cursor="OPEN"
            >
              TikTok
            </Link>
            <Link
              href={`mailto:${siteContent.socials.email}`}
              className="editorial-label text-ivory/70 transition-colors hover:text-ivory focus-ring"
              data-cursor="CONTACT"
            >
              Email
            </Link>
          </div>

          <p className="editorial-metadata text-gray/50">
            {siteContent.footer.closing}
          </p>
          <p className="editorial-metadata text-gray/40">
            {siteContent.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
