import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import Providers from "./components/tools/providers";

const inter = Inter({ subsets: ["latin"] });

const siteName = "Web Developer fueri/Hiroshi Watanabe";
const description = "Web Developer fueri/Hiroshi Watanabe";
const url = "https://fueri.jp";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: { default: siteName, template: `%s - ${siteName}` },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.className} text-cyan-800 dark:text-white dark:bg-slate-900`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
