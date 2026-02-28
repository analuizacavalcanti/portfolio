"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type ColorMode = "muted" | "vivid";

interface ThemeContextValue {
  colorMode: ColorMode;
  toggleColorMode: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  colorMode: "muted",
  toggleColorMode: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [colorMode, setColorMode] = useState<ColorMode>("muted");

  // Read persisted preference on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("color-mode");
      if (stored === "vivid" || stored === "muted") {
        setColorMode(stored);
      }
    } catch {
      // localStorage unavailable
    }
  }, []);

  // Apply class + persist whenever mode changes
  useEffect(() => {
    const html = document.documentElement;
    if (colorMode === "vivid") {
      html.classList.add("vivid");
    } else {
      html.classList.remove("vivid");
    }
    try {
      localStorage.setItem("color-mode", colorMode);
    } catch {
      // localStorage unavailable
    }
  }, [colorMode]);

  function toggleColorMode() {
    setColorMode((prev) => (prev === "muted" ? "vivid" : "muted"));
  }

  return (
    <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useColorMode() {
  return useContext(ThemeContext);
}
