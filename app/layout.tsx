import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { siteContent } from "@/lib/content";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { Navigation } from "@/components/navigation/navigation";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.seo.canonical),
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  keywords: [...siteContent.seo.keywords],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    url: siteContent.seo.canonical,
    siteName: siteContent.name.full,
    images: [
      {
        url: siteContent.seo.ogImage,
        width: 1200,
        height: 1800,
        alt: siteContent.hero.alt,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    images: [siteContent.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteContent.name.full,
  jobTitle: siteContent.descriptor,
  description: siteContent.seo.description,
  url: siteContent.seo.canonical,
  image: `${siteContent.seo.canonical}${siteContent.hero.image}`,
  nationality: ["American", "Kenyan"],
  knowsAbout: ["Fashion", "Beauty", "Modeling", "Content Creation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full antialiased">
        <SmoothScrollProvider>
          <Navigation />
          <main>{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
