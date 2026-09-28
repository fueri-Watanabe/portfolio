import { Project } from "@/types";

export interface PersonalProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  liveUrl?: string;
}

/**
 * B2B受託開発事例（守秘義務に配慮した業界・課題表現）
 */
export const PROJECTS_DATA: Project[] = [
  {
    id: "b2b-gas-automation",
    title: "製造・小売業向け 業務データマルチツール連携スクリプト",
    solutionType: "業務自動化 / GAS",
    highlightBadges: ["月25時間の手作業削減", "転記ミス・手入力ゼロ化"],
    challenge: "スプレッドシート、Gmail、Slack間での手動転記と通知作業による対応遅延・入力ミス。",
    solution: "GAS ＋ 各種外部API（Slack, Gmail）を組み合わせたデータ自動転記・通知システムの構築。",
    impact: "毎月の手作業コストを25時間削減、対応漏れ・転記ミスを完全防止。",
    description:
      "製造・小売業における受注・問い合わせ・在庫データの転記作業を自動化。スプレッドシートとコミュニケーションツールを繋ぎ、現場の工数を大幅に削減。",
    tags: ["Google Apps Script", "Google Sheets API", "Slack API", "Gmail API"],
    featured: true,
    category: "active",
    status: "Active",
    metrics: [
      { label: "削減工数", value: "月25時間削減" },
      { label: "入力精度", value: "ミス0件化" },
    ],
  },
  {
    id: "b2b-realestate-mvp",
    title: "不動産・事業者向け リアルタイム試算＆顧客管理Webシステム",
    solutionType: "Webシステム開発 / MVP",
    highlightBadges: ["要件定義から1ヶ月でMVP納品", "商談時間を30%短縮"],
    challenge: "営業現場での手計算・見積もり提案に時間がかかり、成約率とレスポンス速度に伸び悩み。",
    solution: "Next.js + Supabase + Stripe による高速試算シミュレーターおよび顧客管理画面の構築。",
    impact: "営業現場での試算・提案時間を30%短縮。要件定義から1ヶ月で初期運用を開始。",
    description:
      "複雑な料金計算や契約プランをリアルタイムに試算し、顧客情報と紐付けて一元管理するWebアプリケーション。直感的なUIで商談スピードを加速。",
    tags: ["Next.js 14", "TypeScript", "Supabase", "Stripe API", "Tailwind CSS"],
    featured: true,
    category: "active",
    status: "Active",
    metrics: [
      { label: "納期", value: "1ヶ月でMVP納品" },
      { label: "商談工数", value: "30%短縮" },
    ],
  },
  {
    id: "b2b-corporate-lp",
    title: "B2Bサービス・士業向け 爆速・高CVRコーポレートWebサイト",
    solutionType: "Web制作 / LP最適化",
    highlightBadges: ["PageSpeedスコア 98点", "CVR 1.8倍向上"],
    challenge: "既存サイトの表示速度が遅く、スマートフォンからの離脱率が高い。",
    solution: "Next.js 14 + Tailwind CSS による爆速表示化、お問い合わせ診断フォームの最適化。",
    impact: "モバイル表示速度2.5倍向上、問い合わせ率（CVR）1.8倍達成。",
    description:
      "表示速度と成約率（CVR）に徹底特化したコーポレートサイト。診断型見積もりフォームとSEO内部対策により、反響獲得を最大化。",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "SEO / CVR最適化"],
    featured: true,
    category: "active",
    status: "Active",
    metrics: [
      { label: "PageSpeed", value: "98点達成" },
      { label: "問い合わせ率", value: "1.8倍向上" },
    ],
  },
];

/**
 * 代表の個人開発プロダクト（プロダクト探求枠用）
 */
export const PERSONAL_PROJECTS_DATA: PersonalProject[] = [
  {
    id: "negaresearch",
    title: "NegaResearch",
    subtitle: "Stripe決済連携 自作SaaS",
    description: "市場リサーチやネガティブ情報の収集コストを大幅カット。認証・決済・DB連携を一元化し最短3週間でローンチ。",
    tags: ["Next.js 14", "Supabase", "Stripe"],
    liveUrl: "https://negaresearch.com/",
  },
  {
    id: "fueri-lifechronicle",
    title: "LifeChronicle",
    subtitle: "Gemini API連携 AI対話アプリ",
    description: "Google Gemini APIとFirebaseを活用し、日々の思考やインサイトをAIと対話しながら可視化するライフログアプリ。",
    tags: ["Next.js", "Gemini API", "Firebase"],
    liveUrl: "https://fueri-lifechronicle.vercel.app/",
  },
  {
    id: "foliotree",
    title: "foliotree",
    subtitle: "ポートフォリオ統合プラットフォーム",
    description: "shadcn/uiとFirebaseを活用し、表示速度Lighthouse 95+を達成したクリエイター向け作品共有サービス。",
    tags: ["Next.js", "shadcn/ui", "Firebase"],
    liveUrl: "https://foliotree.jp/",
  },
];
