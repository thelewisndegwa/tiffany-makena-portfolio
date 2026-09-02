# Tiffany Makena — Portfolio

Editorial portfolio website for Tiffany Makena — Model, Content Creator & Influencer.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- GSAP + ScrollTrigger
- Lenis smooth scrolling

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content Management

All site content is centralized in `lib/content.ts`. Update copy, images, social links, and collaboration placeholders there.

Replace placeholder images in `public/images/` with Tiffany's actual photography. Keep the same filenames or update paths in `lib/content.ts`.

Regenerate editorial placeholder images:

```bash
node scripts/generate-placeholders.mjs
```

Sync real photos from `Photos/` into `public/images/`:

```bash
node scripts/sync-photos.mjs
```

## Placeholder Values

Update these in `lib/content.ts` when ready:

- `TIKTOK_URL`
- `FOLLOWER_COUNT`

### Social post embeds

To embed live Instagram or TikTok posts, add URLs to `siteContent.social.posts` in `lib/content.ts`:

```ts
posts: [
  { id: "ig-01", platform: "instagram", url: "https://www.instagram.com/p/ABC123/" },
  { id: "tt-01", platform: "tiktok", url: "https://www.tiktok.com/@user/video/123" },
]
```

Copy the link from each post (Instagram: ⋯ → Copy link).

## Deployment

Deploy to Vercel:

```bash
npm run build
```

Connect the repository to Vercel for automatic deployments.

## Contact Form

The inquiry form is a frontend placeholder. Connect it to your preferred email service (Resend, Formspree, Netlify Forms, etc.) or API route.
