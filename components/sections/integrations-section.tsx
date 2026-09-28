"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Cpu,
  Layers,
  Sparkles,
  Link as LinkIcon,
  CheckCircle2,
} from "lucide-react";

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
    <section className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-white border border-slate-200/80 shadow-[0_12px_36px_rgba(14,165,233,0.05),0_2px_8px_rgba(15,23,42,0.03)] p-6 sm:p-9 text-center space-y-5"
        >
          {/* ヘッダー */}
          <div className="space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 bg-sky-50 px-3 py-1 rounded-full border border-sky-200/80">
              <LinkIcon className="w-3.5 h-3.5 text-sky-600" />
              <span>Integrations & Compatibility</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-title tracking-tight">
              貴社で現在お使いの各種ツールや外部APIとの柔軟な連携が可能です
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              既存業務のやり方を無理に変えることなく、すでにお使いのサービスとシームレスにつなぎ込みます。
            </p>
          </div>

          {/* ツール一覧バッジグリッド */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto pt-2">
            {INTEGRATION_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className={`px-3.5 py-2 rounded-2xl text-xs sm:text-sm font-semibold border transition-all duration-200 flex items-center gap-2 shadow-2xs select-none ${
                  item.highlight
                    ? "bg-slate-50/90 border-slate-200 hover:border-sky-400 hover:bg-sky-50/40 text-slate-800"
                    : "bg-white border-slate-200/80 hover:border-sky-300 hover:bg-slate-50 text-slate-700"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          {/* サポート案内 */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
              <span>上記以外の独自SaaS・カスタムAPIも対応可能</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
              <span>Webhooks / REST API連携にも対応</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
