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

const siteName = "fueri | 中小企業・スタートアップのWebシステム開発・DX推進パートナー";
const description = "中小企業・スタートアップのDX推進と業務効率化を加速させるWebシステム開発・業務自動化スタジオ fueri。社内ツールDX・GAS自動化からNext.jsによるWebシステム・SaaS/MVP構築まで、代表直通体制で伴走支援します。";
const url = "https://fueri.jp";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: { default: siteName, template: `%s - ${siteName}` },
  description,
  keywords: [
    "DX",
    "DX推進",
    "業務効率化",
    "Webシステム開発",
    "MVP開発",
    "SaaS構築",
    "社内ツールDX",
    "GAS自動化",
    "Next.js",
    "fueri",
  ],
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
  themeColor: "#f8fafc",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} ${notoSansJP.variable} ${jetbrainsMono.variable} font-sans text-slate-800 bg-slate-50 antialiased min-h-screen flex flex-col`}
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
