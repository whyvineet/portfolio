"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type ThemeContextValue = {
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return false;
  }

  const stored = window.localStorage.getItem("theme");
  if (stored === "dark") {
    return true;
  }
  if (stored === "light") {
    return false;
  }

  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState<boolean>(() => getInitialTheme());

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    window.localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const value = useMemo(
    () => ({ isDark, toggleTheme }),
    [isDark]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
