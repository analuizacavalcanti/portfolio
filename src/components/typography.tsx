import { cn } from "@/lib/utils";
import { type HTMLAttributes, type AnchorHTMLAttributes } from "react";

// ––– Display heading (Instrument Serif) –––
export function H1({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "font-sans text-5xl leading-[1.05] tracking-[-0.02em] md:text-6xl lg:text-7xl",
        className
      )}
      {...props}
    />
  );
}

// ––– Section heading (Instrument Serif) –––
export function H2({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "font-sans text-3xl leading-[1.15] tracking-[-0.015em] md:text-4xl",
        className
      )}
      {...props}
    />
  );
}

// ––– Sub-section heading (DM Sans, functional) –––
export function H3({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "font-sans text-lg font-semibold leading-snug tracking-[-0.01em] md:text-xl",
        className
      )}
      {...props}
    />
  );
}

// ––– Label heading (DM Sans, smallest structural) –––
export function H4({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={cn(
        "font-sans text-base font-semibold leading-snug",
        className
      )}
      {...props}
    />
  );
}

// ––– Body paragraph –––
export function P({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("leading-[1.75] text-foreground/90", className)}
      {...props}
    />
  );
}

// ––– Lead / intro paragraph –––
export function Lead({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-xl leading-[1.65] text-foreground/80 md:text-2xl",
        className
      )}
      {...props}
    />
  );
}

// ––– Kicker / eyebrow label –––
// Uses --hi token: gray in muted mode, electric blue in vivid mode
export function Kicker({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "block font-sans text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-hi transition-colors duration-300",
        className
      )}
      {...props}
    />
  );
}

// ––– Inline link –––
// Uses --link-deco tokens: faint black in muted, blue in vivid mode
export function InlineLink({
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn(
        "underline underline-offset-3 transition-colors duration-200",
        "decoration-[var(--link-deco)] hover:decoration-[var(--link-deco-hover)]",
        "focus-visible:decoration-[var(--link-deco-hover)]",
        className
      )}
      {...props}
    />
  );
}

// ––– Small / caption text –––
export function Small({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <small
      className={cn(
        "text-sm leading-relaxed text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}
