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
        "h-4 w-4 shrink-0 rounded-full transition-colors duration-300",
        // ring avoids the global `* { border-color: border }` override
        isVivid
          ? "bg-white ring-1 ring-white"
          : "bg-transparent ring-1 ring-[var(--muted-foreground)] hover:ring-[var(--foreground)]"
      )}
    />
  );
}
