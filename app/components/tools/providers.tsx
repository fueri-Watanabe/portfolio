"use client";

import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange={false}
    >
      {children}
    </ThemeProvider>
  );
};
export default Providers;
