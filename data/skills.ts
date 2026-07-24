import { SkillCategory, StrengthItem } from "@/types";

export const STRENGTHS_DATA: StrengthItem[] = [
  {
    id: "speed",
    number: "01",
    title: "レスポンスの早さ",
    description: "お客様のご要望や疑問に対して持ち帰ることなくその場で返答・対応。スピード感を持ったプロジェクト進行を実現します。",
    iconName: "Zap",
  },
  {
    id: "cost-performance",
    number: "02",
    title: "コスパの良さ",
    description: "無駄な中間人件費や管理コストを徹底削減。同等規模のプロジェクトでも適正かつリーズナブルな価格帯で提供します。",
    iconName: "TrendingUp",
  },
  {
    id: "high-resolution",
    number: "03",
    title: "解像度の高さ",
    description: "ヒアリングから設計・実装・保守まで同一人物が一貫して担当。要件定義からのブレを無くし、期待通りの品質を担保します。",
    iconName: "Target",
  },
];

export const SKILL_CATEGORIES_DATA: SkillCategory[] = [
  {
    title: "フロントエンド (Frontend)",
    category: "frontend",
    items: [
      {
        name: "Next.js",
        iconName: "nextdotjs",
        category: "frontend",
        display: true,
        featuredInProjects: ["fueri-lifechronicle", "foliotree", "sharevalues", "booking-management-system-demo", "portfolio"],
      },
      {
        name: "React",
        iconName: "react",
        category: "frontend",
        display: true,
        featuredInProjects: ["ex-portfolio"],
      },
      {
        name: "Tailwind CSS",
        iconName: "tailwindcss",
        category: "frontend",
        display: true,
        featuredInProjects: ["fueri-lifechronicle", "foliotree", "sharevalues", "booking-management-system-demo", "portfolio"],
      },
      {
        name: "shadcn/ui",
        iconName: "shadcnui",
        category: "frontend",
        display: true,
        featuredInProjects: ["foliotree", "sharevalues"],
      },
      {
        name: "Framer Motion",
        iconName: "framermotion",
        category: "frontend",
        display: true,
        featuredInProjects: ["portfolio"],
      },
      {
        name: "Bootstrap",
        iconName: "bootstrap",
        category: "frontend",
        display: true,
        featuredInProjects: ["ex-portfolio"],
      },
      {
        name: "HTML5 / CSS3",
        iconName: "html5",
        category: "frontend",
        display: true,
      },
    ],
  },
  {
    title: "バックエンド / データベース (Backend & DB)",
    category: "backend_db",
    items: [
      {
        name: "Firebase",
        iconName: "firebase",
        category: "backend_db",
        display: true,
        featuredInProjects: ["fueri-lifechronicle", "foliotree"],
      },
      {
        name: "Stripe",
        iconName: "stripe",
        category: "backend_db",
        display: true,
      },
      {
        name: "microCMS",
        iconName: "microcms",
        category: "backend_db",
        display: true,
      },
      {
        name: "Algolia",
        iconName: "algolia",
        category: "backend_db",
        display: true,
      },
      {
        name: "Prisma",
        iconName: "prisma",
        category: "backend_db",
        display: true,
      },
      {
        name: "PlanetScale",
        iconName: "planetscale",
        category: "backend_db",
        display: true,
      },
      {
        name: "Google Apps Script (GAS)",
        iconName: "googleappsscript",
        category: "backend_db",
        display: true,
      },
      {
        name: "Node.js",
        iconName: "nodedotjs",
        category: "backend_db",
        display: false,
      },
      {
        name: "MySQL",
        iconName: "mysql",
        category: "backend_db",
        display: false,
      },
    ],
  },
  {
    title: "クラウド / AI / インフラ (Cloud & AI)",
    category: "cloud_ai",
    items: [
      {
        name: "Google Cloud",
        iconName: "googlecloud",
        category: "cloud_ai",
        display: true,
        featuredInProjects: ["portfolio"],
      },
      {
        name: "Vercel",
        iconName: "vercel",
        category: "cloud_ai",
        display: true,
        featuredInProjects: ["sharevalues", "booking-management-system-demo", "ex-portfolio"],
      },
      {
        name: "Google Gemini (AI API)",
        iconName: "googlegemini",
        category: "cloud_ai",
        display: true,
        featuredInProjects: ["fueri-lifechronicle"],
      },
      {
        name: "Sentry",
        iconName: "sentry",
        category: "cloud_ai",
        display: true,
      },
    ],
  },
  {
    title: "言語 & 開発ツール (Languages & Dev Tools)",
    category: "languages_tools",
    items: [
      {
        name: "TypeScript",
        iconName: "typescript",
        category: "languages_tools",
        display: true,
        featuredInProjects: ["fueri-lifechronicle", "foliotree", "sharevalues", "booking-management-system-demo", "portfolio"],
      },
      {
        name: "JavaScript",
        iconName: "javascript",
        category: "languages_tools",
        display: true,
        featuredInProjects: ["ex-portfolio"],
      },
      {
        name: "Antigravity (AI Agent)",
        iconName: "antigravity",
        category: "languages_tools",
        display: true,
      },
      {
        name: "GitHub",
        iconName: "github",
        category: "languages_tools",
        display: true,
      },
      {
        name: "VS Code",
        iconName: "visualstudiocode",
        category: "languages_tools",
        display: true,
      },
      {
        name: "Python",
        iconName: "python",
        category: "languages_tools",
        display: false,
      },
      {
        name: "PHP",
        iconName: "php",
        category: "languages_tools",
        display: false,
      },
    ],
  },
];

export const SERVICE_SCOPE_DATA = [
  "Webサイト・ランディングページ構築",
  "業務系Webサービス・管理画面開発",
  "DB管理型Webアプリケーション構築",
  "既存サイト・Webシステムの改修 / 保守管理",
  "Google Workspace (GAS) アプリ連携",
];
