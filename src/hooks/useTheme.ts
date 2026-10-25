import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const darkQuery = () => window.matchMedia("(prefers-color-scheme: dark)");

/** The theme in effect: an explicit choice if one was saved, else the OS preference. */
function currentTheme(): Theme {
  const set = document.documentElement.dataset.theme;
  if (set === "light" || set === "dark") return set;
  return darkQuery().matches ? "dark" : "light";
}

/**
 * Light/dark theme. index.html applies the saved choice before first paint;
 * this hook only reads it and writes changes back to <html data-theme> and localStorage.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(currentTheme);

  // Follow OS changes until the visitor picks a theme explicitly.
  useEffect(() => {
    const mq = darkQuery();
    const onChange = () => {
      if (!document.documentElement.dataset.theme) setTheme(currentTheme());
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage blocked (private mode etc.): the choice just won't persist.
    }
    setTheme(next);
  }, []);

  return { theme, toggle };
}
