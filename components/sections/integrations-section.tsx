"use client";

import { motion } from "framer-motion";
import { Link as LinkIcon, CheckCircle2, Webhook, Sparkles } from "lucide-react";
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
  SiVercel,
  SiTypescript,
  SiDocker,
} from "react-icons/si";
import { SiSlack } from "@icons-pack/react-simple-icons";

interface IntegrationItem {
  name: string;
  icon: React.ElementType;
  iconColor: string;
}

const ROW1_ITEMS: IntegrationItem[] = [
  { name: "Google App Script (GAS)", icon: SiGoogleappsscript, iconColor: "text-blue-500" },
  { name: "Slack", icon: SiSlack, iconColor: "text-rose-500" },
  { name: "Next.js 14 / 15", icon: SiNextdotjs, iconColor: "text-slate-900" },
  { name: "Stripe 決済連携", icon: SiStripe, iconColor: "text-indigo-600" },
  { name: "LINE Messaging API", icon: SiLine, iconColor: "text-emerald-500" },
  { name: "Supabase (PostgreSQL)", icon: SiSupabase, iconColor: "text-emerald-600" },
  { name: "Google スプレッドシート", icon: SiGooglesheets, iconColor: "text-emerald-500" },
  { name: "Vercel", icon: SiVercel, iconColor: "text-slate-900" },
];

const ROW2_ITEMS: IntegrationItem[] = [
  { name: "Firebase (Auth / Firestore)", icon: SiFirebase, iconColor: "text-amber-500" },
  { name: "Notion API", icon: SiNotion, iconColor: "text-slate-800" },
  { name: "Google Cloud (GCP)", icon: SiGooglecloud, iconColor: "text-blue-500" },
  { name: "Gmail 自動送信", icon: SiGmail, iconColor: "text-rose-500" },
  { name: "TypeScript", icon: SiTypescript, iconColor: "text-blue-600" },
  { name: "Docker", icon: SiDocker, iconColor: "text-sky-500" },
  { name: "OpenAI / Claude API", icon: Sparkles, iconColor: "text-violet-600" },
  { name: "カスタム REST / Webhook API", icon: Webhook, iconColor: "text-cyan-600" },
];

const IntegrationBadge = ({ item }: { item: IntegrationItem }) => {
  const Icon = item.icon;
  return (
    <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold border border-slate-200/80 bg-white/90 backdrop-blur-md text-slate-800 shadow-2xs hover:bg-white hover:border-violet-300 hover:text-violet-700 hover:ring-1 hover:ring-violet-500/20 hover:shadow-glass hover:-translate-y-0.5 transition-all duration-200 select-none whitespace-nowrap cursor-default">
      <Icon className={`w-4 h-4 ${item.iconColor} flex-shrink-0`} />
      <span>{item.name}</span>
    </div>
  );
};

export const IntegrationsSection = () => {
  return (
    <section className="w-full bg-white/70 backdrop-blur-xl border-b border-slate-200/80 py-20 md:py-28 relative z-10 overflow-hidden">
      {/* ヘッダーエリア */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-3 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-800 bg-cyan-50 px-3.5 py-1 rounded-full border border-cyan-200/80 shadow-2xs">
            <LinkIcon className="w-3.5 h-3.5 text-cyan-600" />
            <span>Integrations & Compatibility</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 font-title tracking-tight">
            貴社で現在お使いの各種ツールや外部APIとの柔軟な連携に対応
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            既存業務のやり方を無理に変えることなく、すでにお使いのサービスやプラットフォームとシームレスにつなぎ込みます。
          </p>
        </motion.div>
      </div>

      {/* 画面全幅 無限ループ（Marquee）エリア */}
      <div className="relative w-full overflow-hidden py-4 mt-10">
        {/* 画面左右端のグラデーションフェード演出 */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 md:w-60 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 md:w-60 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

        {/* 上段（左スクロール / ホバー時一時停止） */}
        <div className="flex overflow-hidden py-1.5 group/marquee">
          <div className="flex w-max gap-3 sm:gap-4 pr-3 sm:pr-4 shrink-0 animate-marquee marquee-track group-hover/marquee:[animation-play-state:paused] hover:[animation-play-state:paused]">
            {[...ROW1_ITEMS, ...ROW1_ITEMS].map((item, idx) => (
              <IntegrationBadge key={`row1-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* 下段（右スクロール / ホバー時一時停止） */}
        <div className="flex overflow-hidden py-1.5 group/marquee">
          <div className="flex w-max gap-3 sm:gap-4 pr-3 sm:pr-4 shrink-0 animate-marquee-reverse marquee-track group-hover/marquee:[animation-play-state:paused] hover:[animation-play-state:paused]">
            {[...ROW2_ITEMS, ...ROW2_ITEMS].map((item, idx) => (
              <IntegrationBadge key={`row2-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* サポート案内 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-600">
          <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-cyan-600" />
            <span className="font-medium">上記以外の独自SaaS・カスタムAPIも対応可能</span>
          </span>
          <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-cyan-600" />
            <span className="font-medium">Webhooks / REST API連携にも柔軟対応</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
