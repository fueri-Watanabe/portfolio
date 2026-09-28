"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  TrendingUp,
  Target,
  CheckCircle2,
  XCircle,
  Sparkles,
} from "lucide-react";

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
    title: "迅速なレスポンス & スピード着手",
    lead: "「持ち帰り検討」によるタイムロスをゼロに",
    description:
      "営業担当と開発者の間で発生する社内伝言ゲームがありません。初回のお問い合わせから技術的な実現可否や概算の判断を即座に行い、最短即日〜数日での初期着手を実現します。",
    traditional: "問い合わせ ➔ 営業面談 ➔ 社内確認 ➔ 見積提示まで1〜2週間要する",
    ourAdvantage: "代表エンジニアが直接対応。その場で技術可否と概算を提示し即着手可能",
    icon: Zap,
  },
  {
    number: "02",
    title: "適正かつリーズナブルな価格設定",
    lead: "無駄な営業人件費・オフィス固定費を徹底カット",
    description:
      "大規模な開発会社では開発費用の大部分を営業マージンや多層下請けの中間コストが占めています。直接契約・個人事業主ならではのスリムな体制により、高品質なコードを大手比半額以下の水準で提供します。",
    traditional: "営業費・進行管理費・多重下請けマージンが上乗せされ高額になりがち",
    ourAdvantage: "直接受託のため中間マージンゼロ。必要な開発工数だけの適正価格",
    icon: TrendingUp,
  },
  {
    number: "03",
    title: "解像度の高い一貫担当 & モダンスタック",
    lead: "「言われた通り」ではなく「ビジネス成果」を見据えた実装",
    description:
      "ヒアリングから要件定義、DB設計、フロントエンド実装、保守まで同一人物が担当。Next.jsやTypeScript、Google Cloud等のモダンスタックにより、高速で保守しやすいシステムを構築します。",
    traditional: "設計書通りの機械的コーディングで、現場の使い勝手や拡張性が後回し",
    ourAdvantage: "業務課題を深く理解した上で、最も運用しやすいUI/アーキテクチャを提案",
    icon: Target,
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* セクションヘッダー */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <Badge variant="glow" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-900 bg-white">
            Why Choose Us
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-title tracking-tight">
            個人開発者だからこそ提供できる{" "}
            <span className="bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
              3つの強み
            </span>
          </h2>

          <p className="text-slate-500 max-w-2xl text-base sm:text-lg">
            「大手に頼むと高すぎる、でもクラウドソーシングの品質には不安がある」という企業様に選ばれています。
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
                  className="rounded-3xl p-8 flex flex-col justify-between w-full bg-white border border-sky-100/90 shadow-[0_12px_36px_rgba(14,165,233,0.06),0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_22px_48px_rgba(14,165,233,0.12)] hover:border-sky-300 hover:-translate-y-1 transition-all group"
                >
                  <div className="space-y-6">
                    {/* アイコン & 番号 */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-sky-50 border border-sky-100 text-sky-800 shadow-sm group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-teal-500 group-hover:text-white transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-4xl font-extrabold font-mono text-sky-200/80 group-hover:text-sky-400/80 transition-colors">
                        {item.number}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900 font-title mb-1.5 group-hover:text-sky-950 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-sky-700 mb-3">
                        {item.lead}
                      </p>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* 一般的な制作会社との対比 */}
                    <div className="space-y-2.5 pt-4 border-t border-slate-100">
                      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 mb-1">
                          <XCircle className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                          <span>一般的な制作会社・開発会社</span>
                        </div>
                        <p className="text-xs text-slate-500 leading-snug">
                          {item.traditional}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#174668] to-[#286b8b] text-white shadow-md shadow-sky-950/15">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-teal-200 mb-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-300 flex-shrink-0" />
                          <span>当方のソリューション</span>
                        </div>
                        <p className="text-xs text-sky-50 font-medium leading-snug">
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

        {/* 信頼性を支える技術スタックのダイジェスト */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-[0_10px_30px_rgba(15,23,42,0.03)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs font-bold text-slate-700">
                <Sparkles className="w-3.5 h-3.5 text-slate-600" />
                <span>Modern Technology Stack</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                保守性・表示速度・セキュリティに優れたモダンスタックを採用
              </h4>
              <p className="text-xs text-slate-500">
                最新のNext.js、TypeScript、Google Cloud等の実績多数の技術でクリーンに構築します。
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 max-w-md">
              {["Next.js", "TypeScript", "Tailwind CSS", "React", "Google Cloud", "Supabase", "Firebase", "GAS", "Stripe API"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 border border-slate-200 text-slate-700 font-mono shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;
