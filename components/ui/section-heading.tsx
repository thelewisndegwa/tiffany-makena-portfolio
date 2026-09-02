import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  theme?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  index,
  title,
  subtitle,
  align = "left",
  theme = "dark",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        align === "right" && "items-end text-right",
        className,
      )}
    >
      {index ? (
        <span
          className={cn(
            "editorial-metadata",
            theme === "light" ? "text-gray" : "text-gray",
          )}
        >
          {index}
        </span>
      ) : null}
      <h2
        className={cn(
          "serif-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-[-0.02em]",
          theme === "light" ? "text-ink" : "text-ivory",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="editorial-label max-w-md text-gray">{subtitle}</p>
      ) : null}
    </div>
  );
}
