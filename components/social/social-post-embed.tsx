"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import type { SocialPost } from "@/lib/content";

type SocialPostEmbedProps = {
  post: SocialPost;
  className?: string;
};

function isValidPostUrl(url: string): boolean {
  return (
    url.startsWith("https://www.instagram.com/") ||
    url.startsWith("https://instagram.com/") ||
    url.startsWith("https://www.tiktok.com/") ||
    url.startsWith("https://tiktok.com/")
  );
}

export function SocialPostEmbed({ post, className }: SocialPostEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isValidPostUrl(post.url)) return;

    if (post.platform === "instagram" && window.instgrm) {
      window.instgrm.Embeds.process(containerRef.current ?? undefined);
    }

    if (post.platform === "tiktok" && window.tiktokEmbed?.lib) {
      window.tiktokEmbed.lib.render(containerRef.current ?? undefined);
    }
  }, [post]);

  if (!isValidPostUrl(post.url)) {
    return null;
  }

  if (post.platform === "instagram") {
    return (
      <div
        ref={containerRef}
        className={cn(
          "social-embed-frame overflow-hidden bg-ivory",
          className,
        )}
      >
        <blockquote
          className="instagram-media !m-0 !min-w-0 !w-full"
          data-instgrm-permalink={post.url}
          data-instgrm-version="14"
          data-instgrm-captioned
          style={{
            background: "transparent",
            border: 0,
            margin: 0,
            maxWidth: "100%",
            minWidth: 0,
            padding: 0,
            width: "100%",
          }}
        />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn("social-embed-frame overflow-hidden", className)}
    >
      <blockquote
        className="tiktok-embed !m-0"
        cite={post.url}
        data-video-id={post.url.split("/video/")[1]?.split("?")[0]}
        style={{
          maxWidth: "100%",
          minWidth: 0,
          width: "100%",
        }}
      >
        <section>
          <a href={post.url} target="_blank" rel="noopener noreferrer">
            View on TikTok
          </a>
        </section>
      </blockquote>
    </div>
  );
}
