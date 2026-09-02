import fs from "fs";
import path from "path";

const root = process.cwd();
const photosDir = path.join(root, "Photos");

const mapping = [
  {
    src: "WhatsApp Image 2026-09-02 at 1.01.06 PM.jpeg",
    dst: "public/images/hero/hero-01.jpg",
  },
  {
    src: "WhatsApp Image 2026-09-02 at 1.01.07 PM (1).jpeg",
    dst: "public/images/portraits/portrait-01.jpg",
  },
  {
    src: "WhatsApp Image 2026-09-02 at 1.01.06 PM (1).jpeg",
    dst: "public/images/work/work-01.jpg",
  },
  {
    src: "WhatsApp Image 2026-09-02 at 1.01.07 PM.jpeg",
    dst: "public/images/work/work-02.jpg",
  },
  {
    src: "WhatsApp Image 2026-09-02 at 1.01.06 PM (7).jpeg",
    dst: "public/images/work/work-03.jpg",
  },
  {
    src: "WhatsApp Image 2026-09-02 at 1.01.06 PM (8).jpeg",
    dst: "public/images/work/work-04.jpg",
  },
  {
    src: "WhatsApp Image 2026-09-02 at 1.01.06 PM (9).jpeg",
    dst: "public/images/work/work-05.jpg",
  },
  {
    src: "WhatsApp Image 2026-09-02 at 1.01.07 PM (2).jpeg",
    dst: "public/images/work/work-06.jpg",
  },
  {
    src: "WhatsApp Image 2026-09-02 at 1.01.06 PM.jpeg",
    dst: "public/images/gallery/gallery-01.jpg",
  },
  {
    src: "WhatsApp Image 2026-09-02 at 1.01.06 PM (1).jpeg",
    dst: "public/images/gallery/gallery-02.jpg",
  },
  {
    src: "WhatsApp Image 2026-09-02 at 1.01.06 PM (10).jpeg",
    dst: "public/images/gallery/gallery-03.jpg",
  },
  {
    src: "WhatsApp Image 2026-09-02 at 1.01.06 PM (2).jpeg",
    dst: "public/images/gallery/gallery-04.jpg",
  },
  {
    src: "WhatsApp Image 2026-09-02 at 1.01.06 PM (3).jpeg",
    dst: "public/images/gallery/gallery-05.jpg",
  },
  {
    src: "WhatsApp Image 2026-09-02 at 1.01.06 PM (4).jpeg",
    dst: "public/images/gallery/gallery-06.jpg",
  },
  {
    src: "WhatsApp Image 2026-09-02 at 1.01.06 PM (5).jpeg",
    dst: "public/images/gallery/gallery-07.jpg",
  },
  {
    src: "WhatsApp Image 2026-09-02 at 1.01.06 PM (6).jpeg",
    dst: "public/images/gallery/gallery-08.jpg",
  },
  {
    src: "WhatsApp Image 2026-09-02 at 1.01.07 PM.jpeg",
    dst: "public/images/gallery/gallery-09.jpg",
  },
  {
    src: "WhatsApp Image 2026-09-02 at 1.01.07 PM (2).jpeg",
    dst: "public/images/gallery/gallery-10.jpg",
  },
  {
    src: "WhatsApp Image 2026-09-02 at 1.01.07 PM.jpeg",
    dst: "public/images/social/social-01.jpg",
  },
  {
    src: "WhatsApp Image 2026-09-02 at 1.01.06 PM.jpeg",
    dst: "public/images/social/social-02.jpg",
  },
  {
    src: "WhatsApp Image 2026-09-02 at 1.01.06 PM (1).jpeg",
    dst: "public/images/social/social-03.jpg",
  },
];

let copied = 0;

for (const { src, dst } of mapping) {
  const source = path.join(photosDir, src);
  const destination = path.join(root, dst);

  if (!fs.existsSync(source)) {
    console.warn(`Missing source photo: ${src}`);
    continue;
  }

  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(source, destination);
  copied += 1;
  console.log(`✓ ${dst}`);
}

console.log(`\nSynced ${copied} photos from Photos/ to public/images/`);
