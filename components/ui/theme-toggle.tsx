"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-9 h-9 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-200/80 dark:hover:bg-slate-800/80 border border-slate-200/80 dark:border-white/10 transition-colors focus:outline-none select-none overflow-hidden"
      aria-label="Toggle Theme"
      title={isDark ? "ライトモードに切り替え" : "ダークモードに切り替え"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ scale: 0, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            <Sun className="w-4 h-4 text-amber-400" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ scale: 0, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            <Moon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
