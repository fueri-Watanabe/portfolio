import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PartnerForm from "@/components/sections/partner-form";
import {
  Code2,
  Layers,
  Cpu,
  Palette,
  Briefcase,
  Sparkles,
  Clock,
  ArrowDown,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "パートナー募集（エンジニア・デザイナー） | fueri / 渡部 弘",
  description:
    "fueriと共にプロジェクトを推進するフリーランス・副業パートナー（フロントエンド、バックエンド、業務自動化、UI/UXデザイナー）を募集しています。営業や要件定義は代表が担当し、開発やデザイン業務に集中できる柔軟な協業環境をご用意しています。",
};

const BENEFITS = [
  {
    number: "01",
    title: "営業・要件定義の完全サポート",
    desc: "案件獲得や顧客との面倒な交渉・進行管理・契約手続きは代表が対応。開発・デザインなど得意なコア業務に集中していただけます。",
    icon: Briefcase,
  },
  {
    number: "02",
    title: "モダンスタック中心の案件",
    desc: "Next.js、TypeScript、Cloud/Firebase、GAS自動化など、保守性の高い最新技術領域がメイン。レガシー保守に追われる心配がありません。",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "フルリモート・柔軟な働き方",
    desc: "非同期コミュニケーション（Slack/GitHub等）を中心に、納期とクオリティ重視で稼働していただけます。副業での参画も大歓迎です。",
    icon: Clock,
  },
];

const ROLES = [
  {
    title: "フロントエンド",
    tagline: "Next.js / TypeScript",
    icon: Code2,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
    desc: "洗練されたモダンUIの実装、コンポーネント設計、高速なパフォーマンスチューニング、API連携を担当いただきます。",
  },
  {
    title: "バックエンド・インフラ",
    tagline: "Cloud & Database",
    icon: Layers,
    techStack: ["Supabase", "Firebase", "Google Cloud", "PostgreSQL", "REST/GraphQL API"],
    desc: "堅牢なDBモデリング、認証基盤（Auth）、サーバーレスAPI、セキュリティ設計を担当いただきます。",
  },
  {
    title: "業務自動化・スクリプト",
    tagline: "GAS & Python",
    icon: Cpu,
    techStack: ["Google Apps Script (GAS)", "Python", "Slack API", "LINE Messaging API", "スプレッドシート"],
    desc: "顧客のルーチン手作業をゼロにする業務自動化、外部サービス連携、データ収集・加工スクリプトの実装を担当いただきます。",
  },
  {
    title: "UI/UXデザイン",
    tagline: "Web & LP Design",
    icon: Palette,
    techStack: ["Figma", "UI/UX設計", "デザインシステム", "レスポンシブデザイン", "LPワイヤーフレーム"],
    desc: "ビジネス成果に直結するクリーンなUI設計、LPの構成・ワイヤー作成、実装しやすいデザインコンポーネント制作を担当いただきます。",
  },
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen text-slate-900 pt-24 pb-20 overflow-x-hidden">
      
      {/* 1. Hero セクション */}
      <section className="py-16 sm:py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="glow" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-900 bg-white shadow-sm">
            Partner Network / 協業パートナー募集
          </Badge>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-title tracking-tight leading-[1.15]">
            fueriと共にプロジェクトを推進する <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
              パートナー（エンジニア・デザイナー）
            </span>
            を募集
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed pt-1">
            案件規模の拡大や得意領域の補い合いに向け、柔軟に協業できるフリーランス・副業パートナーを募集しています。営業や要件定義はディレクター（代表）が担当するため、得意な開発・デザイン業務に集中していただけます。
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="#partner-form">
              <Button
                variant="primary"
                size="lg"
                className="rounded-full px-6 font-bold shadow-lg shadow-sky-950/15 bg-gradient-to-r from-[#174668] to-[#286b8b] hover:from-[#113550] hover:to-[#205975] text-white flex items-center gap-2"
              >
                <span>パートナー登録フォームへ進む</span>
                <ArrowDown className="w-4 h-4" />
              </Button>
            </Link>

            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-6 text-slate-700 hover:text-sky-950 border-slate-200 bg-white hover:bg-slate-50 shadow-sm"
              >
                <span>代表の理念・実績を見る</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. 協業の3つのメリット */}
      <section className="py-12 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-wider">
              Benefits of Partnership
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-title">
              fueriと協業する3つのメリット
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
              エンジニア・デザイナーが最も価値を発揮できる体制を整えています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BENEFITS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.number}
                  className="rounded-3xl bg-white border border-slate-200/90 shadow-[0_12px_36px_rgba(14,165,233,0.06),0_2px_8px_rgba(15,23,42,0.03)] p-7 space-y-4 hover:border-sky-300 transition-all hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 text-sky-800 flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-extrabold font-mono text-slate-200">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. 求めるパートナー像 */}
      <section className="py-16 relative z-10 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-12">
            <span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-wider">
              Target Skills & Roles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-title">
              求めるパートナー像・専門領域
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
              以下の領域で得意分野をお持ちの方を歓迎します（いずれか1領域に特化で構いません）。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ROLES.map((role) => {
              const Icon = role.icon;
              return (
                <div
                  key={role.title}
                  className="rounded-3xl bg-white border border-slate-200/80 shadow-[0_12px_36px_rgba(14,165,233,0.05),0_2px_8px_rgba(15,23,42,0.02)] p-6 sm:p-7 space-y-3.5 hover:border-sky-300 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#174668] to-[#2c6e8f] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                        {role.title}
                      </h3>
                      <span className="text-xs font-mono text-sky-700 font-medium">
                        {role.tagline}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {role.desc}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {role.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-50 text-slate-700 border border-slate-200/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. パートナー登録フォーム */}
      <section id="partner-form" className="py-16 sm:py-20 relative z-10 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <PartnerForm />
        </div>
      </section>

    </main>
  );
}
