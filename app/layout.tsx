import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import Providers from "./components/tools/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Developer fueri/Hiroshi Watanabe",
  description: "Web Developer fueri/Hiroshi Watanabe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} dark:bg-slate-900`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
