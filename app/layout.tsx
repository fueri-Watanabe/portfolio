import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Noto_Sans_JP, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Providers from "@/components/providers";

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
  themeColor: "#fafbfe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} ${notoSansJP.variable} ${jetbrainsMono.variable} font-sans text-slate-800 bg-slate-50/70 antialiased min-h-screen flex flex-col`}
      >
        <Providers>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
