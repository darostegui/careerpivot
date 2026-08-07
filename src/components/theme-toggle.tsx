"use client";

import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const label = theme === null
    ? "Choose light or dark mode"
    : `Switch to ${theme === "dark" ? "light" : "dark"} mode`;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="fixed right-4 top-4 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/90 text-zinc-300 shadow-lg backdrop-blur transition hover:border-emerald-500 hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
    >
      {theme === null ? <Laptop className="h-4 w-4" /> : theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
