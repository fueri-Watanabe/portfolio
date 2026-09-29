"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  TrendingUp,
  Target,
  CheckCircle2,
  XCircle,
  Sparkles,
  ShieldCheck,
  FileText,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiGooglecloud,
  SiSupabase,
  SiFirebase,
  SiGoogleappsscript,
  SiStripe,
} from "react-icons/si";

interface TechStackItem {
  name: string;
  icon: React.ElementType;
}

const MODERN_TECH_STACK: TechStackItem[] = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "React", icon: SiReact },
  { name: "Google Cloud", icon: SiGooglecloud },
  { name: "Supabase", icon: SiSupabase },
  { name: "Firebase", icon: SiFirebase },
  { name: "GAS", icon: SiGoogleappsscript },
  { name: "Stripe API", icon: SiStripe },
];

interface ReasonItem {
  number: string;
  title: string;
  lead: string;
  description: string;
  traditional: string;
  ourAdvantage: string;
  icon: React.ElementType;
}

const REASONS: ReasonItem[] = [
  {
    number: "01",
    title: "スピード着手 & 直通レスポンス",
    lead: "営業の伝言ゲーム・社内持ち帰り検討をゼロ化",
    description:
      "営業専任を挟まず、技術を熟知した代表が直接一次窓口から対応。初回のお問い合わせから技術的な実現可否や工数を即座に判断し、最短即日〜数営業日での初期着手・迅速な課題解決を実現します。",
    traditional: "問い合わせ ➔ 営業面談 ➔ 開発部門への持ち帰り確認 ➔ 見積提示まで1〜2週間要する",
    ourAdvantage: "代表が直通対応。営業の伝言ゲームを無くし、その場で技術可否と概算を即断即決",
    icon: Zap,
  },
  {
    number: "02",
    title: "中間コストを削った適正価格",
    lead: "営業マージンや無駄な管理コストをカット",
    description:
      "大手受託会社や代理店では開発費用の大部分を営業人件費や多重下請けの中間マージンが占めています。fueriは直接契約・自社直通の少数精鋭体制により、適正な実働コストのみで高品質な開発を提供します。",
    traditional: "多重下請けマージン・営業経費・間接部門費が上乗せされ開発費が高騰しがち",
    ourAdvantage: "直通受託・少数精鋭体制で中間マージンをカット。純粋な開発工数のみの透明な適正価格",
    icon: TrendingUp,
  },
  {
    number: "03",
    title: "高解像度な要件定義 & 品質管理",
    lead: "代表が直接ヒアリングし、コード品質から納品後の保守まで保証",
    description:
      "要件定義からアーキテクチャ選定、実装、納品時のQA（品質検証）、納品後の運用サポートまで代表が一貫して責任管理。言われたものを作るだけでなく、現場の運用性と将来の拡張性を見据えた高品質なシステムを納品します。",
    traditional: "設計書通りの機械的コーディングで、現場の運用性や納品後の保守・品質管理が形骸化",
    ourAdvantage: "代表が設計からQA・運用まで責任管理。ビジネス成果と使いやすさを両立する品質を保証",
    icon: Target,
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="py-20 md:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* セクションヘッダー */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <Badge variant="glow" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider">
            Why Choose Us
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-800 font-title tracking-tight">
            fueriが選ばれる{" "}
            <span className="bg-gradient-to-r from-rose-500 to-red-600 bg-clip-text text-transparent">
              3つの理由
            </span>
          </h2>

          <p className="text-slate-600 max-w-2xl text-base sm:text-lg">
            営業マージンや多層下請けを排除。代表直通の少数精鋭・専任ディレクション体制だからこそ実現できる強みです。
          </p>
        </div>

        {/* 3つの理由カード */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {REASONS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex"
              >
                <div
                  className="rounded-3xl p-8 flex flex-col justify-between w-full bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-rose-300 hover:-translate-y-0.5 transition-all group"
                >
                  <div className="space-y-6">
                    {/* アイコン & 番号 */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-rose-50/70 border border-rose-100 text-rose-500 shadow-2xs group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-rose-500 group-hover:to-red-600 group-hover:text-white transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-4xl font-extrabold font-mono text-slate-200 group-hover:text-rose-400/25 transition-colors">
                        {item.number}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-800 font-title mb-1.5 group-hover:text-rose-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-bold text-rose-600 mb-3">
                        {item.lead}
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* 一般的な制作会社との対比 */}
                    <div className="space-y-2.5 pt-4 border-t border-slate-100">
                      <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 mb-1">
                          <XCircle className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                          <span>一般的な制作会社・開発会社</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-snug">
                          {item.traditional}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-xs">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-rose-100 mb-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white flex-shrink-0" />
                          <span>fueri（代表専任体制）</span>
                        </div>
                        <p className="text-xs text-white font-medium leading-snug">
                          {item.ourAdvantage}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 納品後も安心の品質保証 & アフターサポート統合カード */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/80">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                <span>Quality Guarantee & Support</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 font-title">
                納品後も安心の「品質保証 & 運用サポート体制」
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                「作って終わり」ではなく、現場で確実に成果を出し続けるまで寄り添う伴走型の開発をお約束します。
              </p>
            </div>
            <Link
              href="/terms"
              className="inline-flex items-center gap-1 text-xs text-rose-600 hover:text-rose-700 underline font-medium flex-shrink-0"
            >
              <span>詳しい保証規定・検収条件を見る</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
            <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 border border-teal-100 flex items-center justify-center flex-shrink-0 shadow-2xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-800">30日間無償バグ修正保証</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200/80">標準付帯</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  納品後に発覚した予期せぬ動作不良やレイアウト崩れは無償で迅速に対応いたします。
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 border border-teal-100 flex items-center justify-center flex-shrink-0 shadow-2xs">
                <FileText className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-800">引き継ぎ・操作マニュアル</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200/80">属人化防止</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  社内メンバーでスムーズに運用・更新できるよう、わかりやすい操作ガイドや手順書を添付します。
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 border border-teal-100 flex items-center justify-center flex-shrink-0 shadow-2xs">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-800">月額保守・機能拡張</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200/80">月額5万円〜</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  リリース後の機能追加や定期アップデートサポートもワンストップでお任せいただけます。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 信頼性を支える技術スタックのダイジェスト */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs font-bold text-rose-600">
                <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                <span>Modern Technology Stack</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-800">
                保守性・表示速度・セキュリティに優れたモダンスタックを採用
              </h4>
              <p className="text-xs text-slate-600">
                最新のNext.js、TypeScript、Google Cloud等の実績多数の技術でクリーンに構築します。
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 max-w-lg">
              {MODERN_TECH_STACK.map((tech) => {
                const Icon = tech.icon;
                return (
                  <span
                    key={tech.name}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-50 border border-slate-200 text-slate-700 font-mono shadow-2xs flex items-center gap-2 hover:border-teal-300 hover:bg-teal-50/50 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    <span>{tech.name}</span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;
