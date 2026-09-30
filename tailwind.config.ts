import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "var(--font-noto-sans-jp)", "sans-serif"],
        title: ["var(--font-plus-jakarta)", "var(--font-noto-sans-jp)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      boxShadow: {
        "2xs": "0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        "xs": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "glass": "0 8px 30px 0 rgba(0, 0, 0, 0.04)",
        "glass-hover": "0 14px 40px 0 rgba(0, 0, 0, 0.08)",
        "glow-violet": "0 0 30px -4px rgba(139, 92, 246, 0.25)",
        "glow-cyan": "0 0 30px -4px rgba(6, 182, 212, 0.25)",
        "glow-indigo": "0 0 25px -4px rgba(99, 102, 241, 0.2)",
      },
      dropShadow: {
        "xs": "0 1px 1px rgba(0, 0, 0, 0.05)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
