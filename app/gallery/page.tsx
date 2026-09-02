import type { Metadata } from "next";
import { siteContent } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { Footer } from "@/components/footer/footer";

export const metadata: Metadata = {
  title: `Gallery — ${siteContent.name.full}`,
  description: `Editorial gallery of ${siteContent.name.full} — fashion, beauty, and luxury photography.`,
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      <section className="section-dark min-h-[50vh] px-[var(--section-padding-x)] pt-36 pb-12">
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading
            index="EXHIBITION"
            title={siteContent.gallery.heading}
            subtitle={siteContent.gallery.subheading}
          />
          <p className="mt-8 max-w-lg text-sm leading-relaxed text-ivory/70">
            {siteContent.gallery.teaserCopy}
          </p>
        </div>
      </section>

      <section className="section-dark px-[var(--section-padding-x)] pb-24">
        <div className="mx-auto max-w-[1600px]">
          <GalleryGrid />
        </div>
      </section>

      <Footer />
    </>
  );
}
