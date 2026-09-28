"use client";

import { motion } from "framer-motion";
import { Link as LinkIcon, CheckCircle2, Webhook } from "lucide-react";
import {
  SiGoogleappsscript,
  SiGooglesheets,
  SiGmail,
  SiNotion,
  SiLine,
  SiStripe,
  SiNextdotjs,
  SiSupabase,
  SiFirebase,
  SiGooglecloud,
} from "react-icons/si";
import { SiSlack } from "@icons-pack/react-simple-icons";

interface IntegrationItem {
  name: string;
  icon: React.ElementType;
}

const INTEGRATION_ITEMS: IntegrationItem[] = [
  { name: "Google App Script (GAS)", icon: SiGoogleappsscript },
  { name: "Google スプレッドシート", icon: SiGooglesheets },
  { name: "Gmail", icon: SiGmail },
  { name: "Slack", icon: SiSlack },
  { name: "LINE Messaging API", icon: SiLine },
  { name: "Notion", icon: SiNotion },
  { name: "Stripe", icon: SiStripe },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Supabase", icon: SiSupabase },
  { name: "Firebase", icon: SiFirebase },
  { name: "Google Cloud (GCP)", icon: SiGooglecloud },
  { name: "カスタム REST / Webhook API", icon: Webhook },
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

          {/* ツール一覧バッジグリッド（全ツールを統一アクセントカラーで静的配置） */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5 max-w-5xl mx-auto pt-2">
            {INTEGRATION_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold border border-teal-200/80 bg-teal-50/80 text-slate-800 shadow-2xs hover:-translate-y-0.5 hover:bg-white hover:border-teal-300 hover:shadow-xs transition-all duration-200 flex items-center gap-2.5 select-none"
                >
                  <Icon className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>{item.name}</span>
                </div>
              );
            })}
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
