"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SKILLS = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Google Cloud",
  "GAS / 業務自動化",
  "Supabase / Firebase",
];

export interface ProfileCompactCardProps {
  className?: string;
}

/**
 * 簡易版コンパクトカード（必要に応じて他の箇所でも利用可能）
 */
export const ProfileCompactCard = ({ className = "" }: ProfileCompactCardProps) => {
  return (
    <div
      className={`rounded-2xl sm:rounded-full bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-glass p-3 sm:px-6 sm:py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 transition-all hover:border-violet-300/80 hover:ring-1 hover:ring-violet-500/20 hover:shadow-glass-hover hover:-translate-y-0.5 duration-300 ${className}`}
    >
      {/* 左側: ミニ顔写真 + 代表者名 + 1行メッセージ */}
      <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
        <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-500 p-0.5 flex-shrink-0 shadow-2xs">
          <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src="/myicon.webp"
              alt="渡部 弘"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <div className="flex items-center justify-center sm:justify-start gap-1.5 flex-shrink-0">
            <span className="text-xs font-bold text-slate-800">渡部 弘</span>
            <span className="text-[10px] font-medium text-slate-600 bg-white/90 px-2.5 py-0.5 rounded-full border border-slate-200/80 shadow-2xs">
              代表 / 開発責任者
            </span>
          </div>

          <span className="hidden sm:inline-block text-slate-300">|</span>

          <p className="text-xs text-slate-600 font-medium leading-relaxed sm:leading-none">
            要件定義からDXツールの構築・運用保守まで責任を持って直通対応いたします。
          </p>
        </div>
      </div>

      <div className="flex-shrink-0 w-full sm:w-auto">
        <Link href="/about" className="block w-full">
          <Button
            variant="ghost"
            size="sm"
            className="w-full sm:w-auto text-xs font-semibold text-violet-600 hover:text-violet-700 hover:bg-violet-50/60 rounded-full px-3.5 py-1.5 h-auto flex items-center justify-center gap-1 group border border-violet-100 sm:border-transparent transition-all"
          >
            <span>経歴・開発思想を見る</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

/**
 * お問い合わせ下の一番下に配置する、少し大きめの代表プロフィールセクション
 */
export const ProfileSection = () => {
  return (
    <section id="profile" className="py-16 sm:py-24 relative z-10">
      {/* 上部のシームレス境界線 */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200/80 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="flex flex-col items-center text-center space-y-2.5 mb-10">
          <Badge variant="glow" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider">
            Representative & Commitment
          </Badge>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-800 font-title tracking-tight">
            代表プロフィール{" "}
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              & 開発体制
            </span>
          </h2>

          <p className="text-slate-600 max-w-lg text-sm sm:text-base">
            営業専任を挟まない代表直通体制。現場の課題整理から実装・運用保守まで一貫伴走します。
          </p>
        </div>

        {/* リッチなプロフィールカード */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-glass hover:border-violet-300/80 hover:ring-1 hover:ring-violet-500/20 p-6 sm:p-10 transition-all duration-300 relative overflow-hidden"
        >
          {/* 背景の薄いグラデーションアクセント */}
          <div className="absolute -top-24 -right-24 w-56 h-56 bg-gradient-to-br from-violet-400/10 via-cyan-400/10 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 relative z-10">
            {/* アバター & ステータス */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-500 p-1 shadow-md shadow-violet-500/15 flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-[20px] overflow-hidden flex items-center justify-center">
                  <Image
                    src="/myicon.webp"
                    alt="渡部 弘 (fueri 代表)"
                    width={112}
                    height={112}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              <span className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                代表直通・全国対応
              </span>
            </div>

            {/* テキストコンテンツ */}
            <div className="flex-1 space-y-4 text-center md:text-left">
              {/* 名前・肩書き */}
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-violet-600 tracking-wide uppercase">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Representative / Full Stack Developer</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 font-title mt-0.5">
                  渡部 弘{" "}
                  <span className="text-sm sm:text-base font-normal text-slate-400">
                    / Hiroshi Watanabe
                  </span>
                </h3>
              </div>

              {/* メッセージ */}
              <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200/70 text-slate-700 text-sm leading-relaxed">
                <p className="font-medium text-slate-800">
                  「要件定義からDXツールの構築・運用保守まで、私（渡部）が直接一貫して対応いたします。営業専任を挟まないダイレクトなコミュニケーションにより、伝言ゲームのないスピーディで高品質なWebシステム開発・業務効率化をお約束します。」
                </p>
              </div>

              {/* 主要スキルバッジ */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Core Skills & Technologies:
                </span>
                <div className="flex flex-wrap justify-center md:justify-start gap-1.5">
                  {SKILLS.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white text-slate-700 border border-slate-200/80 shadow-2xs hover:border-violet-300 hover:text-violet-900 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* 導線ボタン */}
              <div className="pt-2 sm:pt-3 border-t border-slate-100 flex justify-center md:justify-start">
                <Link href="/about">
                  <Button
                    variant="outline"
                    size="sm"
                    className="group text-xs sm:text-sm font-semibold rounded-full px-5 py-2.5 border-slate-200 hover:border-violet-300 hover:bg-violet-50/40 text-slate-700 hover:text-violet-950 transition-all flex items-center gap-2 shadow-2xs"
                  >
                    <span>詳しい経歴・開発思想を見る</span>
                    <ArrowRight className="w-3.5 h-3.5 text-violet-500 group-hover:translate-x-1 transition-all" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileSection;
