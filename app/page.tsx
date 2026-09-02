import { Hero } from "@/components/hero/hero";
import { About } from "@/components/about/about";
import { Disciplines } from "@/components/disciplines/disciplines";
import { SelectedWork } from "@/components/selected-work/selected-work";
import { BeyondTheFrame } from "@/components/social/beyond-the-frame";
import { WorkWithTiffany } from "@/components/collaboration/work-with-tiffany";
import { GalleryTeaser } from "@/components/gallery/gallery-teaser";
import { Footer } from "@/components/footer/footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Disciplines />
      <SelectedWork />
      <BeyondTheFrame />
      <WorkWithTiffany />
      <GalleryTeaser />
      <Footer />
    </>
  );
}
