import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "fueri - Webシステム開発・業務自動化スタジオ",
    short_name: "fueri",
    description: "中小企業・スタートアップのDX推進を加速させる、Next.jsによるWebシステム開発・GAS業務自動化スタジオ。",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#f8fafc",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/logo.webp",
        sizes: "192x192",
        type: "image/webp",
      },
    ],
  };
}
