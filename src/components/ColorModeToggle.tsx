"use client";

import { useEffect, useState } from "react";
import { useColorMode } from "./ThemeProvider";

export function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isVivid = mounted && colorMode === "vivid";

  return (
    <button
      onClick={toggleColorMode}
      aria-label={isVivid ? "Switch to muted colors" : "Switch to vivid colors"}
      aria-pressed={isVivid}
      suppressHydrationWarning
      style={{
        width: "14px",
        height: "14px",
        borderRadius: "50%",
        border: "1.5px solid var(--foreground)",
        background: isVivid ? "var(--foreground)" : "transparent",
        cursor: "pointer",
        flexShrink: 0,
        transition: "background 0.3s",
        display: "block",
      }}
    />
  );
}
