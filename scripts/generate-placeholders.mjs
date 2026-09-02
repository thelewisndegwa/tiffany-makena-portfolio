import fs from "fs";
import path from "path";

const palettes = [
  ["#0a0a0a", "#1a1816", "#2d2824", "#4a4038"],
  ["#0d0c0b", "#1f1c19", "#3a322c", "#5c4f44"],
  ["#080808", "#151311", "#2a2420", "#453a32"],
  ["#0a0908", "#1c1917", "#332c27", "#52463d"],
  ["#0b0a09", "#1a1714", "#2f2924", "#4d4339"],
  ["#090909", "#181614", "#2c2622", "#484038"],
];

function svg(name, w, h, idx, label) {
  const p = palettes[idx % palettes.length];
  const cx = w * 0.5;
  const cy = h * 0.52;
  const rx = Math.min(w, h) * 0.22;
  const ry = h * 0.34;
  const fontSize = Math.max(12, w * 0.018);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="bg-${idx}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${p[0]}"/>
      <stop offset="45%" stop-color="${p[1]}"/>
      <stop offset="100%" stop-color="${p[2]}"/>
    </linearGradient>
    <radialGradient id="glow-${idx}" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="${p[3]}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="${p[0]}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg-${idx})"/>
  <rect width="${w}" height="${h}" fill="url(#glow-${idx})"/>
  <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${p[3]}" opacity="0.18"/>
  <text x="${w * 0.06}" y="${h * 0.94}" fill="${p[3]}" opacity="0.35" font-family="Georgia, serif" font-size="${fontSize}" letter-spacing="0.3em">${label}</text>
</svg>`;
}

const files = [
  ["public/images/hero/hero-01.jpg", 1200, 1800, 0, "HERO"],
  ["public/images/portraits/portrait-01.jpg", 900, 1200, 1, "PORTRAIT"],
  ...Array.from({ length: 6 }, (_, i) => [
    `public/images/work/work-0${i + 1}.jpg`,
    i % 2 ? 1000 : 1200,
    i % 2 ? 1400 : 1600,
    i + 2,
    `WORK 0${i + 1}`,
  ]),
  ...Array.from({ length: 10 }, (_, i) => [
    `public/images/gallery/gallery-${String(i + 1).padStart(2, "0")}.jpg`,
    [1200, 900, 1400, 1000, 1600, 1100, 900, 1300, 1000, 1200][i],
    [1800, 1200, 1000, 1400, 900, 1100, 1500, 1000, 1700, 1300][i],
    i,
    `GALLERY ${String(i + 1).padStart(2, "0")}`,
  ]),
];

for (const [file, w, h, idx, label] of files) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, svg(label, w, h, idx, label));
}

console.log(`Generated ${files.length} placeholder images`);
