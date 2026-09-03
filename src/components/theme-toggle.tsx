"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const toggle = () => {
    const current = theme === "system" ? resolvedTheme : theme;
    setTheme(current === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Byt mellan ljust och mörkt läge"
      className={`relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-ink-700 transition-colors duration-300 hover:border-brand-400 hover:text-brand-600 dark:text-ink-200 dark:hover:text-brand-400 cursor-pointer ${className}`}
    >
      <Sun className="absolute h-[18px] w-[18px] scale-100 rotate-0 opacity-100 transition-all duration-500 dark:scale-0 dark:-rotate-90 dark:opacity-0" />
      <Moon className="absolute h-[18px] w-[18px] scale-0 rotate-90 opacity-0 transition-all duration-500 dark:scale-100 dark:rotate-0 dark:opacity-100" />
    </button>
  );
}
