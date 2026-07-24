import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Noto_Sans_JP, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Providers from "./components/tools/providers";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const siteName = "fueri / Hiroshi Watanabe - Portfolio";
const description = "Web Developer / フルスタックエンジニア Hiroshi Watanabe のポートフォリオサイト";
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} ${notoSansJP.variable} ${jetbrainsMono.variable} font-sans bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased min-h-screen transition-colors duration-300`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
