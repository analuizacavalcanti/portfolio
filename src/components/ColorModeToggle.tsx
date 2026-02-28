"use client";

import { useColorMode } from "./ThemeProvider";
import { cn } from "@/lib/utils";

export function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isVivid = colorMode === "vivid";

  return (
    <button
      onClick={toggleColorMode}
      aria-label={isVivid ? "Switch to muted colors" : "Switch to vivid colors"}
      aria-pressed={isVivid}
      className={cn(
        "h-[14px] w-[14px] shrink-0 rounded-full border transition-colors duration-300",
        isVivid
          ? "border-[var(--vivid)] bg-[var(--vivid)]"
          : "border-muted-foreground bg-transparent hover:border-foreground"
      )}
    />
  );
}
