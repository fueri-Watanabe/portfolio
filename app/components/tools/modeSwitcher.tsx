"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ModeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }
  return (
    <button
      aria-label="darkModeSwitch"
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
    >
      {theme == "dark" ? (
        <SunIcon className="h-6 w-6" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
    </button>
  );
};
export default ModeSwitcher;
