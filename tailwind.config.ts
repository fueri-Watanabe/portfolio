import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["var(--font-noto-sans-jp)"],
      title: ["Work Sans"],
    },
    container: {
      center: true,
      padding: {
        "2xl": "12rem",
      },
    },
  },
  plugins: [],
};
export default config;
