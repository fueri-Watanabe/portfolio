"use client";

import { motion } from "framer-motion";
import { Link as LinkIcon, CheckCircle2 } from "lucide-react";

interface IntegrationItem {
  name: string;
  category: "業務ツール" | "チャット・決済" | "モダン基盤";
  highlight?: boolean;
}

const INTEGRATION_ITEMS: IntegrationItem[] = [
  { name: "Google App Script (GAS)", category: "業務ツール", highlight: true },
  { name: "Google スプレッドシート", category: "業務ツール", highlight: true },
  { name: "Gmail", category: "業務ツール" },
  { name: "Slack", category: "チャット・決済", highlight: true },
  { name: "LINE Messaging API", category: "チャット・決済" },
  { name: "Notion", category: "業務ツール" },
  { name: "Stripe", category: "チャット・決済", highlight: true },
  { name: "Next.js", category: "モダン基盤", highlight: true },
  { name: "Supabase", category: "モダン基盤" },
  { name: "Firebase", category: "モダン基盤" },
  { name: "Google Cloud (GCP)", category: "モダン基盤" },
];

export const IntegrationsSection = () => {
  return (
    <section className="w-full bg-white/80 border-b border-slate-200/80 py-20 md:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8"
        >
          {/* ヘッダー */}
          <div className="space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200/80 shadow-2xs">
              <LinkIcon className="w-3.5 h-3.5 text-sky-600" />
              <span>Integrations & Compatibility</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 font-title tracking-tight">
              貴社で現在お使いの各種ツールや外部APIとの柔軟な連携に対応
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              既存業務のやり方を無理に変えることなく、すでにお使いのサービスやプラットフォームとシームレスにつなぎ込みます。
            </p>
          </div>

          {/* ツール一覧バッジグリッド（ティール＆スカイによる安心の配色） */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5 max-w-5xl mx-auto pt-2">
            {INTEGRATION_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold border transition-all duration-200 flex items-center gap-2.5 shadow-2xs hover:-translate-y-0.5 select-none ${
                  item.highlight
                    ? "bg-teal-50/80 border-teal-200/90 hover:border-teal-300 hover:bg-white text-slate-800"
                    : "bg-slate-50 border-slate-200/90 hover:border-slate-300 hover:bg-white text-slate-700"
                }`}
              >
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.highlight ? "bg-teal-500" : "bg-slate-400"}`} />
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          {/* サポート案内 */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600">
            <span className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200/80">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span className="font-medium">上記以外の独自SaaS・カスタムAPIも対応可能</span>
            </span>
            <span className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200/80">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span className="font-medium">Webhooks / REST API連携にも柔軟対応</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
