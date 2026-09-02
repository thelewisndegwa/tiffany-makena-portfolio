import type { ImageProps } from "next/image";
import NextImage from "next/image";

type EditorialImageProps = Omit<ImageProps, "unoptimized"> & {
  unoptimized?: boolean;
};

export function EditorialImage({
  src,
  unoptimized,
  ...props
}: EditorialImageProps) {
  const srcString = typeof src === "string" ? src : "";
  const isLocal = srcString.startsWith("/images/");

  return (
    <NextImage
      src={src}
      unoptimized={unoptimized ?? isLocal}
      {...props}
    />
  );
}
