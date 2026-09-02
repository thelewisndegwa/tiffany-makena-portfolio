"use client";

import { useEffect, useMemo } from "react";
import Script from "next/script";
import { siteContent } from "@/lib/content";
import { SocialPostEmbed } from "./social-post-embed";
import { Reveal } from "@/components/ui/reveal";

function getValidPosts() {
  return siteContent.social.posts.filter((post) => {
    if (!post.url || post.url.includes("POST_ID") || post.url.includes("VIDEO_ID")) {
      return false;
    }
    return (
      post.url.startsWith("https://www.instagram.com/") ||
      post.url.startsWith("https://instagram.com/") ||
      post.url.startsWith("https://www.tiktok.com/") ||
      post.url.startsWith("https://tiktok.com/")
    );
  });
}

export function SocialEmbeds() {
  const posts = useMemo(() => getValidPosts(), []);
  const hasInstagram = posts.some((post) => post.platform === "instagram");
  const hasTikTok = posts.some((post) => post.platform === "tiktok");

  useEffect(() => {
    if (hasInstagram && window.instgrm) {
      window.instgrm.Embeds.process();
    }
    if (hasTikTok && window.tiktokEmbed?.lib) {
      window.tiktokEmbed.lib.render();
    }
  }, [hasInstagram, hasTikTok, posts]);

  if (posts.length === 0) {
    return null;
  }

  return (
    <>
      {hasInstagram ? (
        <Script
          src="https://www.instagram.com/embed.js"
          strategy="lazyOnload"
          onLoad={() => window.instgrm?.Embeds.process()}
        />
      ) : null}
      {hasTikTok ? (
        <Script
          src="https://www.tiktok.com/embed.js"
          strategy="lazyOnload"
          onLoad={() => window.tiktokEmbed?.lib.render()}
        />
      ) : null}

      <Reveal className="mt-16">
        <p className="editorial-metadata mb-8 text-gray">RECENT POSTS</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.id} delay={index * 0.08}>
              <SocialPostEmbed
                post={post}
                className={
                  post.layout === "tall"
                    ? "row-span-2"
                    : post.layout === "wide"
                      ? "sm:col-span-2"
                      : undefined
                }
              />
            </Reveal>
          ))}
        </div>
      </Reveal>
    </>
  );
}
