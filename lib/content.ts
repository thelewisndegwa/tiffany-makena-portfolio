export type Discipline = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  aspect: "portrait" | "landscape" | "tall" | "wide" | "square";
  layout: "hero" | "large" | "medium" | "small";
};

export type SelectedWorkImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  layout: "hero" | "float" | "portrait" | "wide";
};

export type SocialPost = {
  id: string;
  platform: "instagram" | "tiktok";
  /** Full post URL — e.g. https://www.instagram.com/p/ABC123/ or https://www.tiktok.com/@user/video/123 */
  url: string;
  layout?: "default" | "tall" | "wide";
};

export const siteContent = {
  name: {
    first: "TIFFANY",
    last: "MAKENA",
    full: "Tiffany Makena",
  },
  location: "USA × Kenya",
  roles: ["MODEL", "CREATOR", "INFLUENCER"] as const,
  descriptor: "Model / Creator / Influencer",
  seo: {
    title: "Tiffany Makena — Model, Content Creator & Influencer",
    description:
      "Tiffany Makena is a fashion model, content creator, and influencer bridging USA and Kenya. Available for luxury campaigns, editorial work, brand partnerships, and creative collaborations.",
    keywords: [
      "Tiffany Makena",
      "Model",
      "Content Creator",
      "Influencer",
      "Fashion",
      "Beauty",
      "Luxury",
      "USA",
      "Kenya",
    ],
    canonical: "https://tiffanymakena.com",
    ogImage: "/images/hero/hero-01.jpg",
  },
  hero: {
    image: "/images/hero/hero-01.jpg",
    alt: "Tiffany Makena full-body fashion portrait in editorial lighting",
    metadata: ["EDITORIAL", "F/W 2026", "USA × KENYA"],
    cta: "EXPLORE",
  },
  bio: {
    heading: "WHO IS TIFFANY?",
    statements: [
      "Between two worlds, one vision.",
      "Fashion as language. Image as art.",
    ],
    paragraphs: [
      "Tiffany Makena moves between the United States and Kenya with a perspective shaped by both continents — a duality that informs everything she creates. She is a model, content creator, and influencer working at the intersection of fashion, beauty, luxury, and culture.",
      "Her work is defined by editorial precision and an instinct for visual storytelling. Whether on set for a campaign, in front of the camera for a beauty brand, or crafting content for a luxury partnership, Tiffany brings presence, intention, and a distinctly modern femininity.",
      "She is available for modeling, campaigns, brand partnerships, UGC, events, and creative collaborations with brands and creatives who value craft, aesthetics, and authentic storytelling.",
    ],
    portrait: {
      src: "/images/portraits/portrait-01.jpg",
      alt: "Tiffany Makena editorial portrait",
    },
    metadata: ["MODEL", "CREATOR", "USA × KENYA", "EDITORIAL"],
  },
  disciplines: [
    {
      id: "model",
      title: "MODEL",
      description:
        "Fashion and editorial modeling across campaigns, beauty, and luxury — with a presence built for the frame and the runway alike.",
      image: "/images/work/work-01.jpg",
      alt: "Tiffany Makena fashion editorial modeling photograph",
    },
    {
      id: "creator",
      title: "CREATOR",
      description:
        "Visual storytelling through short-form content, UGC, and social campaigns — crafted with the eye of an art director.",
      image: "/images/work/work-02.jpg",
      alt: "Tiffany Makena content creation behind the scenes",
    },
    {
      id: "influencer",
      title: "INFLUENCER",
      description:
        "Audience engagement and brand storytelling across fashion, beauty, and lifestyle — where influence meets intention.",
      image: "/images/work/work-03.jpg",
      alt: "Tiffany Makena lifestyle and fashion influencer portrait",
    },
  ] satisfies Discipline[],
  selectedWork: {
    heading: "IN FRAME",
    subheading: "SELECTED WORK",
    images: [
      {
        id: "sw-01",
        src: "/images/work/work-01.jpg",
        alt: "Tiffany Makena luxury fashion editorial photograph",
        caption: "EDITORIAL",
        layout: "hero",
      },
      {
        id: "sw-02",
        src: "/images/work/work-02.jpg",
        alt: "Tiffany Makena beauty campaign portrait",
        caption: "BEAUTY",
        layout: "float",
      },
      {
        id: "sw-03",
        src: "/images/work/work-03.jpg",
        alt: "Tiffany Makena fashion portrait with dramatic lighting",
        caption: "FASHION",
        layout: "portrait",
      },
      {
        id: "sw-04",
        src: "/images/work/work-04.jpg",
        alt: "Tiffany Makena lifestyle editorial photograph",
        caption: "LIFESTYLE",
        layout: "wide",
      },
      {
        id: "sw-05",
        src: "/images/work/work-05.jpg",
        alt: "Tiffany Makena luxury campaign image",
        caption: "CAMPAIGN",
        layout: "float",
      },
      {
        id: "sw-06",
        src: "/images/work/work-06.jpg",
        alt: "Tiffany Makena editorial close-up portrait",
        caption: "PORTRAIT",
        layout: "portrait",
      },
    ] satisfies SelectedWorkImage[],
  },
  social: {
    heading: "BEYOND THE FRAME",
    subheading: "CREATOR IDENTITY",
    description:
      "Fashion, beauty, lifestyle, and culture — captured and shared with an editorial sensibility. A digital presence as considered as the work itself.",
    handle: "@tiffany.makkena",
    followerCount: "FOLLOWER_COUNT",
    platforms: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/tiffany.makkena/",
        label: "IG",
      },
      { name: "TikTok", url: "TIKTOK_URL", label: "TT" },
    ],
    /**
     * Add post URLs here to embed live Instagram/TikTok content.
     * On Instagram: open a post → ⋯ → Copy link
     * On TikTok: Share → Copy link
     */
    posts: [] as SocialPost[],
    images: [
      {
        src: "/images/social/social-01.jpg",
        alt: "Tiffany Makena urban night fashion photograph",
        href: "https://www.instagram.com/tiffany.makkena/",
      },
      {
        src: "/images/social/social-02.jpg",
        alt: "Tiffany Makena rooftop editorial fashion content",
        href: "https://www.instagram.com/tiffany.makkena/",
      },
      {
        src: "/images/social/social-03.jpg",
        alt: "Tiffany Makena streetwear lifestyle content",
        href: "https://www.instagram.com/tiffany.makkena/",
      },
    ],
  },
  contact: {
    heading: "LET'S CREATE SOMETHING.",
    subheading: "WORK WITH TIFFANY",
    description:
      "Available for modeling, campaigns, brand partnerships, UGC, events, and creative collaborations. Share your vision.",
    collaborationTypes: [
      "Modeling",
      "Campaign",
      "Brand Partnership",
      "UGC",
      "Event",
      "Creative Collaboration",
      "Other",
    ] as const,
    cta: "SEND INQUIRY",
    alternatives: [
      { label: "WhatsApp", url: "https://wa.me/254702627991" },
      { label: "Instagram", url: "https://www.instagram.com/tiffany.makkena/" },
      { label: "TikTok", url: "TIKTOK_URL" },
      { label: "Email", url: "mailto:mworiatiffany@gmail.com" },
    ],
  },
  gallery: {
    heading: "GALLERY",
    subheading: "THE EXHIBITION",
    teaserCopy: "A curated selection of editorial work. Enter the full exhibition.",
    cta: "VIEW GALLERY",
    images: [
      {
        id: "g-01",
        src: "/images/gallery/gallery-01.jpg",
        alt: "Tiffany Makena editorial fashion photograph — gallery 01",
        aspect: "tall",
        layout: "hero",
      },
      {
        id: "g-02",
        src: "/images/gallery/gallery-02.jpg",
        alt: "Tiffany Makena beauty portrait — gallery 02",
        aspect: "portrait",
        layout: "large",
      },
      {
        id: "g-03",
        src: "/images/gallery/gallery-03.jpg",
        alt: "Tiffany Makena luxury campaign image — gallery 03",
        aspect: "landscape",
        layout: "medium",
      },
      {
        id: "g-04",
        src: "/images/gallery/gallery-04.jpg",
        alt: "Tiffany Makena fashion editorial — gallery 04",
        aspect: "portrait",
        layout: "small",
      },
      {
        id: "g-05",
        src: "/images/gallery/gallery-05.jpg",
        alt: "Tiffany Makena lifestyle photograph — gallery 05",
        aspect: "wide",
        layout: "large",
      },
      {
        id: "g-06",
        src: "/images/gallery/gallery-06.jpg",
        alt: "Tiffany Makena editorial close-up — gallery 06",
        aspect: "square",
        layout: "medium",
      },
      {
        id: "g-07",
        src: "/images/gallery/gallery-07.jpg",
        alt: "Tiffany Makena fashion portrait — gallery 07",
        aspect: "portrait",
        layout: "small",
      },
      {
        id: "g-08",
        src: "/images/gallery/gallery-08.jpg",
        alt: "Tiffany Makena campaign photograph — gallery 08",
        aspect: "landscape",
        layout: "medium",
      },
      {
        id: "g-09",
        src: "/images/gallery/gallery-09.jpg",
        alt: "Tiffany Makena editorial image — gallery 09",
        aspect: "tall",
        layout: "large",
      },
      {
        id: "g-10",
        src: "/images/gallery/gallery-10.jpg",
        alt: "Tiffany Makena fashion editorial — gallery 10",
        aspect: "portrait",
        layout: "small",
      },
    ] satisfies GalleryImage[],
  },
  collaborations: [
    "State Couture",
    "Tribal Chic",
    "By _association",
    "Sahara",
    "ASILI Experience",
  ],
  socials: {
    instagram: "https://www.instagram.com/tiffany.makkena/",
    tiktok: "TIKTOK_URL",
    whatsapp: "https://wa.me/254702627991",
    email: "mworiatiffany@gmail.com",
  },
  navigation: [
    { label: "ABOUT", href: "#about" },
    { label: "WORK", href: "#work" },
    { label: "GALLERY", href: "/gallery" },
    { label: "WORK WITH TIFFANY", href: "#contact" },
    { label: "CONTACT", href: "#contact" },
  ],
  footer: {
    closing: "THANK YOU FOR VISITING.",
    copyright: "© 2026 Tiffany Makena",
  },
} as const;

export type SiteContent = typeof siteContent;
