import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** "default" = 720px prose, "wide" = 1100px layout, "full" = no cap */
  size?: "default" | "wide" | "full";
}

export function Container({
  size = "wide",
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-10",
        size === "default" && "max-w-[720px]",
        size === "wide" && "max-w-[1280px]",
        size === "full" && "max-w-none",
        className
      )}
      {...props}
    />
  );
}
