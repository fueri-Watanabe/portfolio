"use client";

import { ThemeProvider } from "next-themes";

// ダークモードをクラスで切り替えするプロバイダー
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider defaultTheme="system" attribute="class">
        {children}
      </ThemeProvider>
    </>
  );
};
export default Providers;
