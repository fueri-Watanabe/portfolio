import { Project } from "@/types";

export const PROJECTS_DATA: Project[] = [
  {
    id: "negaresearch",
    title: "NegaResearch",
    description:
      "ネガティブ情報や評判の収集・リサーチを効率化するSaaS型Webサービス。AIと連携した情報抽出とリスク要因の可視化をワンストップで提供します。",
    image: "/projectImage/negaresearch.webp",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Stripe", "Supabase", "Vercel"],
    liveUrl: "https://negaresearch.com/",
    featured: true,
    category: "active",
    status: "Active",
    metrics: [
      { label: "Service", value: "SaaS Platform" },
      { label: "Monetization", value: "Stripe Subscription" },
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
    featured: true,
    category: "active",
    status: "Active",
    metrics: [
      { label: "Performance", value: "95+ Lighthouse" },
      { label: "UI System", value: "shadcn/ui / Tailwind" },
    ],
  },
  {
    id: "portfolio",
    title: "fueri ポートフォリオ (Next.js 14)",
    description:
      "Google CloudとNext.js 14（App Router）をベースに構築した自身のフルスタックエンジニアポートフォリオ。開発実績や提供サービス、スキルスタックをスタイリッシュに集約。",
    image: "/projectImage/portfolio.webp",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Google Cloud"],
    liveUrl: "https://fueri.jp/",
    featured: true,
    category: "active",
    status: "Active",
    metrics: [
      { label: "Architecture", value: "Next.js App Router" },
      { label: "Infrastructure", value: "Google Cloud / Docker" },
    ],
  },
  {
    id: "fueri-lifechronicle",
    title: "fueri LifeChronicle",
    description:
      "Google Gemini APIとFirebaseを活用した次世代のライフログ・対話型記録プラットフォーム。日々の出来事や思考をAIとともに対話し、インサイトを可視化します。",
    image: "/projectImage/fueri-lifechronicle.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Gemini API", "Vercel"],
    liveUrl: "https://fueri-lifechronicle.vercel.app/",
    featured: false,
    category: "archive",
    status: "Experiment",
    metrics: [
      { label: "AI Integration", value: "Gemini 1.5 Flash" },
      { label: "Architecture", value: "Serverless / Firebase" },
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
    category: "archive",
    status: "Experiment",
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
    category: "archive",
    status: "Experiment",
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
    category: "archive",
    status: "Archived",
  },
];
