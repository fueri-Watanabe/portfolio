import { Project } from "@/types";

export const PROJECTS_DATA: Project[] = [
  {
    id: "fueri-lifechronicle",
    title: "fueri LifeChronicle",
    description:
      "Google Gemini APIとFirebaseを活用した次世代のライフログ・対話型記録プラットフォーム。日々の出来事や思考をAIとともに対話し、インサイトを可視化します。",
    image: "/projectImage/fueri-lifechronicle.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Gemini API", "Vercel"],
    liveUrl: "https://fueri-lifechronicle.vercel.app/",
    featured: true, // Bento Grid フラッグシップ
    metrics: [
      { label: "AI Integration", value: "Gemini 1.5 Flash" },
      { label: "Architecture", value: "Serverless / Firebase" },
    ],
  },
  {
    id: "foliotree",
    title: "foliotree",
    description:
      "クリエイターやエンジニアのためのポートフォリオ統合・共有プラットフォーム。モダンなUIパーツ（shadcn/ui）とFirebaseを活用した快適な操作感を提供します。",
    image: "/projectImage/foliotree.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Firebase"],
    liveUrl: "https://foliotree.jp/",
    featured: true, // Bento Grid フラッグシップ
    metrics: [
      { label: "Performance", value: "95+ Lighthouse" },
      { label: "UI System", value: "shadcn/ui / Tailwind" },
    ],
  },
  {
    id: "sharevalues",
    title: "sharevalues",
    description:
      "個人やチームの価値観を整理し共有するためのWebアプリケーション。直感的なカードUIとシームレスなデザインでスムーズな相互理解を促進します。",
    image: "/projectImage/sharevalues.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vercel"],
    liveUrl: "https://sharevalues.vercel.app/",
    featured: false,
  },
  {
    id: "booking-management-system-demo",
    title: "予約管理システムデモ",
    description:
      "店舗やサービスの予約受付・顧客管理をシームレスに行うためのマルチデバイス対応デモアプリケーション。直感的なカレンダー操作とレスポンシブデザインを実現。",
    image: "/projectImage/booking-management-system-demo.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://booking-management-system-demo.vercel.app/",
    featured: false,
  },
  {
    id: "portfolio",
    title: "fueri ポートフォリオ",
    description:
      "Google CloudとNext.js（App Router）をベースに構築した自身のエンジニアポートフォリオ。開発実績や提供サービス、スキルスタックをスタイリッシュに集約。",
    image: "/projectImage/portfolio.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Google Cloud"],
    liveUrl: "http://fueri.jp/",
    featured: false,
  },
  {
    id: "ex-portfolio",
    title: "旧ポートフォリオ (React)",
    description:
      "ReactとBootstrapを用いて初期に構築した旧バージョンのポートフォリオサイト。自身のフロントエンド開発能力のアップデートプロセスを示す実績アーカイヴ。",
    image: "/projectImage/ex-portfolio.webp",
    tags: ["React", "JavaScript", "Bootstrap", "Vercel"],
    liveUrl: "https://react-fueri-website.vercel.app/",
    featured: false,
  },
];
