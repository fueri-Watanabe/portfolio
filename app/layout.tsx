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

const siteTitle = "fueri - Webシステム開発・業務自動化スタジオ";
const siteDescription =
  "中小企業・スタートアップのDX推進を加速させる、Next.jsによるWebシステム開発・GAS業務自動化スタジオ。";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fueri.jp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  applicationName: "fueri",
  authors: [{ name: "渡部 洋 (Hiroshi Watanabe)", url: siteUrl }],
  generator: "Next.js",
  keywords: [
    "fueri",
    "Webシステム開発",
    "業務自動化",
    "GAS",
    "Google Apps Script",
    "社内DX",
    "社内ツールDX",
    "Next.js",
    "SaaS構築",
    "MVP開発",
    "LP制作",
    "受託開発",
    "フリーランスエンジニア",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.webp", type: "image/webp" },
    ],
    apple: [{ url: "/logo.webp", sizes: "180x180", type: "image/webp" }],
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "fueri",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/ogp-image.png",
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/ogp-image.png"],
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
