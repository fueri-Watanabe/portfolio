"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles, ExternalLink } from "lucide-react";
import { PERSONAL_PROJECTS_DATA } from "@/data/projects";

const SKILLS = [
  "TypeScript",
  "Next.js",
  "Google Cloud",
  "Supabase",
  "Firebase",
  "GAS",
  "Python",
];

const HIGHLIGHTS = [
  {
    title: "責任ある専任ディレクション",
    desc: "要件定義から納品・品質管理まで一貫対応",
  },
  {
    title: "最新モダンスタック",
    desc: "Next.js / TypeScript / GCP / Supabase",
  },
  {
    title: "1ヶ月無償保証 & マニュアル標準付帯",
    desc: "社内運用の属人化を防ぐ",
  },
];

export const ProfileSection = () => {
  return (
    <section id="profile" className="py-20 md:py-32 relative z-10">
      {/* 上部のシームレス境界線 */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200/80 to-transparent" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* セクションヘッダー */}
        <div className="flex flex-col items-center text-center space-y-2.5 mb-10 sm:mb-12">
          <Badge variant="glow" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-1">
            Studio & Commitment
          </Badge>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 font-title tracking-tight">
            代表紹介・開発体制{" "}
            <span className="bg-gradient-to-r from-rose-500 to-red-600 bg-clip-text text-transparent">
              / Profile & Quality
            </span>
          </h2>

          <p className="text-slate-600 max-w-xl text-sm sm:text-base">
            営業専任を挟まず、技術を理解した担当者が一貫対応。透明性とスピード感を持った開発をお届けします。
          </p>
        </div>

        {/* コンパクト＆高信頼なプロフィールカード */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-6 sm:p-9 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-sm relative overflow-hidden transition-all">

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-7">

                {/* 代表アバター / アイキャッチ */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-rose-500 to-red-600 p-1 shadow-sm shadow-rose-500/15 flex items-center justify-center">
                    <div className="w-full h-full bg-slate-50 rounded-xl flex flex-col items-center justify-center p-2 text-slate-900 overflow-hidden relative">
                      <Image
                        src="/logo.webp"
                        alt="渡部 弘 (fueri)"
                        width={64}
                        height={64}
                        className="object-contain drop-shadow-sm"
                      />
                    </div>
                  </div>
                  <span className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-teal-50 text-teal-800 border border-teal-200/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                    専任責任体制・受付中
                  </span>
                </div>

                {/* メインコンテンツ */}
                <div className="flex-1 space-y-4 text-center sm:text-left">
                  {/* 名前・肩書き */}
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-teal-700 tracking-wide">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                      <span>fueri 代表 / 開発責任者</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 font-title mt-0.5">
                      渡部 弘{" "}
                      <span className="text-sm sm:text-base font-normal text-slate-500">
                        （Hiroshi Watanabe）
                      </span>
                    </h3>
                  </div>

                  {/* 一言コミットメント（メッセージ） */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-slate-700 text-xs sm:text-sm leading-relaxed relative">
                    <p className="font-medium text-slate-800">
                      「営業専任を挟まない、技術を理解した担当者による直通サポート」。要件定義・アーキテクチャ設計から品質管理（QA）まで責任を持って伴走し、曖昧な要件やビジネス課題をスピーディかつ高解像度に具現化します。
                    </p>
                  </div>

                  {/* アピールポイント（バッジ・箇条書き） */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                      体制の強み・安心の保証:
                    </span>
                    <div className="grid grid-cols-1 gap-2 text-xs">
                      {HIGHLIGHTS.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/80 text-slate-700 text-left"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-slate-800 mr-1.5">
                              {item.title}
                            </span>
                            <span className="text-slate-600">
                              ({item.desc})
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 主要スキルバッジ */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                      Core Tech Stack:
                    </span>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-1.5">
                      {SKILLS.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-50/80 text-slate-700 border border-slate-200/80 shadow-2xs hover:border-rose-300 hover:text-rose-600 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 代表のプロダクト探求 / Personal Projects */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/90 border border-slate-200/90 text-left space-y-3 pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                        <Sparkles className="w-4 h-4 text-rose-500" />
                        <span>代表のプロダクト探求 / Personal Projects</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                        自社SaaS & AI開発
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      受託開発だけでなく、自らアイデアを形にするプロダクト開発も日々実施（Stripe連携SaaS『NegaResearch』、Gemini API連携『LifeChronicle』等）。つくる側の苦労やビジネス視点を身をもって知っているからこそ、クライアントのサービスづくりに親身にコミットできます。
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                      {PERSONAL_PROJECTS_DATA.map((p) => (
                        <Link
                          key={p.id}
                          href={p.liveUrl || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-rose-300 hover:shadow-xs transition-all group flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between text-xs font-bold text-slate-800 group-hover:text-rose-600 transition-colors">
                              <span>{p.title}</span>
                              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-rose-500" />
                            </div>
                            <p className="text-[10px] text-rose-600 font-semibold mt-0.5">{p.subtitle}</p>
                            <p className="text-[10px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">{p.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* 導線ボタン（ミニマル） */}
                  <div className="pt-2 sm:pt-3 border-t border-slate-100 flex justify-center sm:justify-start">
                    <Link href="/about">
                      <Button
                        variant="outline"
                        size="sm"
                        className="group text-xs font-semibold rounded-full px-4 py-2 border-slate-200 hover:border-rose-300 hover:bg-rose-50/30 bg-white text-slate-700 hover:text-rose-600 transition-all flex items-center gap-1.5 shadow-none"
                      >
                        <span>詳しい開発思想・経歴を見る</span>
                        <ArrowRight className="w-3.5 h-3.5 text-rose-500 group-hover:translate-x-1 transition-all" />
                      </Button>
                    </Link>
                  </div>

                </div>

              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ProfileSection;
