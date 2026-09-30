"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PROJECTS_DATA } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Wrench,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export const BentoProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative z-10 overflow-hidden">
      {/* 背景アンビエントグロー */}
      <div className="absolute top-1/4 left-1/4 w-[650px] h-[500px] bg-gradient-to-r from-violet-400/20 via-indigo-300/15 to-transparent rounded-full blur-3xl opacity-35 pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[550px] h-[450px] bg-gradient-to-bl from-cyan-400/20 via-violet-300/15 to-transparent rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* セクションヘッダー */}
        <div className="flex flex-col items-center text-center mb-14">
          <Badge variant="glow" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-3">
            SOLUTIONS & CASE STUDIES
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-800 font-title tracking-tight">
            Webシステム開発実績 &{" "}
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              ソリューション事例
            </span>
          </h2>

          <p className="mt-3 text-slate-600 max-w-2xl text-base sm:text-lg leading-relaxed">
            課題抽出から要件定義、MVP開発、本番稼働まで。中小企業・スタートアップのDX推進と業務効率化を最短スパンで具現化した開発実績例です。
          </p>
        </div>

        {/* 3大B2Bソリューションカード（課題 ➔ ソリューション ➔ 導入効果） */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS_DATA.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="flex flex-col h-full"
              >
                <div className="h-full flex flex-col justify-between rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-glass hover:shadow-glass-hover hover:border-violet-300/80 hover:ring-1 hover:ring-violet-500/20 hover:-translate-y-1 transition-all duration-300 p-6 sm:p-7 group">
                  <div className="space-y-4">
                    {/* 上部ヘッダー（ソリューション分類 & ステータス） */}
                    <div className="flex items-center justify-between gap-2">
                      {project.solutionType && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-violet-50/80 border border-violet-200/80 text-violet-700 shadow-2xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                          <span>{project.solutionType}</span>
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-50/80 text-cyan-700 border border-cyan-200/80 shadow-2xs">
                        <ShieldCheck className="w-3 h-3 text-cyan-600" />
                        <span>実務導入済</span>
                      </span>
                    </div>

                    {/* タイトル */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 font-title group-hover:text-violet-600 transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* システム構成・データフロー ミニチュア図解 */}
                    <div className="p-2.5 rounded-2xl bg-gradient-to-r from-slate-50/90 to-white/70 border border-slate-200/80 shadow-2xs">
                      {project.id === "b2b-gas-automation" && (
                        <div className="space-y-1.5 font-mono text-[10px]">
                          <div className="flex items-center justify-between text-[9px] text-slate-400 font-sans font-semibold">
                            <span>ARCHITECTURAL FLOW</span>
                            <span className="flex items-center gap-1 text-emerald-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              Pipeline Active
                            </span>
                          </div>
                          <div className="flex items-center justify-between gap-1 text-center">
                            <div className="flex-1 p-1 rounded-lg bg-emerald-50/80 border border-emerald-200/70 text-emerald-800 font-bold leading-tight">
                              <div className="text-[9px]">Sheets</div>
                              <span className="text-[7.5px] font-normal text-emerald-600">データ集約</span>
                            </div>
                            <span className="text-slate-400 text-[10px]">➔</span>
                            <div className="flex-1 p-1 rounded-lg bg-violet-50/80 border border-violet-200/70 text-violet-800 font-bold leading-tight">
                              <div className="text-[9px]">GAS Engine</div>
                              <span className="text-[7.5px] font-normal text-violet-600">自動トリガー</span>
                            </div>
                            <span className="text-slate-400 text-[10px]">➔</span>
                            <div className="flex-1 p-1 rounded-lg bg-cyan-50/80 border border-cyan-200/70 text-cyan-800 font-bold leading-tight">
                              <div className="text-[9px]">Slack/Mail</div>
                              <span className="text-[7.5px] font-normal text-cyan-600">即時マルチ通知</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {project.id === "b2b-realestate-mvp" && (
                        <div className="space-y-1.5 font-mono text-[10px]">
                          <div className="flex items-center justify-between text-[9px] text-slate-400 font-sans font-semibold">
                            <span>SYSTEM TOPOLOGY</span>
                            <span className="flex items-center gap-1 text-cyan-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                              Realtime Sync
                            </span>
                          </div>
                          <div className="flex items-center justify-between gap-1 text-center">
                            <div className="flex-1 p-1 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-800 font-bold leading-tight">
                              <div className="text-[9px]">Client UI</div>
                              <span className="text-[7.5px] font-normal text-slate-500">リアルタイム試算</span>
                            </div>
                            <span className="text-slate-400 text-[10px]">➔</span>
                            <div className="flex-1 p-1 rounded-lg bg-indigo-50/80 border border-indigo-200/70 text-indigo-800 font-bold leading-tight">
                              <div className="text-[9px]">Next.js+DB</div>
                              <span className="text-[7.5px] font-normal text-indigo-600">Supabase RLS</span>
                            </div>
                            <span className="text-slate-400 text-[10px]">➔</span>
                            <div className="flex-1 p-1 rounded-lg bg-violet-50/80 border border-violet-200/70 text-violet-800 font-bold leading-tight">
                              <div className="text-[9px]">Stripe API</div>
                              <span className="text-[7.5px] font-normal text-violet-600">決済＆CRM連携</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {project.id === "b2b-corporate-lp" && (
                        <div className="space-y-1.5 font-mono text-[10px]">
                          <div className="flex items-center justify-between text-[9px] text-slate-400 font-sans font-semibold">
                            <span>SPEED PIPELINE</span>
                            <span className="flex items-center gap-1 text-amber-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                              High-Speed CDN
                            </span>
                          </div>
                          <div className="flex items-center justify-between gap-1 text-center">
                            <div className="flex-1 p-1 rounded-lg bg-amber-50/80 border border-amber-200/70 text-amber-800 font-bold leading-tight">
                              <div className="text-[9px]">訪問ユーザー</div>
                              <span className="text-[7.5px] font-normal text-amber-600">Edge SSR キャッシュ</span>
                            </div>
                            <span className="text-slate-400 text-[10px]">➔</span>
                            <div className="flex-1 p-1 rounded-lg bg-cyan-50/80 border border-cyan-200/70 text-cyan-800 font-bold leading-tight">
                              <div className="text-[9px]">高速描画</div>
                              <span className="text-[7.5px] font-normal text-cyan-600">PageSpeed 98点</span>
                            </div>
                            <span className="text-slate-400 text-[10px]">➔</span>
                            <div className="flex-1 p-1 rounded-lg bg-emerald-50/80 border border-emerald-200/70 text-emerald-800 font-bold leading-tight">
                              <div className="text-[9px]">診断CV</div>
                              <span className="text-[7.5px] font-normal text-emerald-600">成約率 1.8倍</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* ハイライトバッジ */}
                    {project.highlightBadges && (
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {project.highlightBadges.map((badge, bIdx) => (
                          <span
                            key={bIdx}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white/80 backdrop-blur-sm text-slate-700 border border-slate-200/80 flex items-center gap-1 shadow-2xs"
                          >
                            <TrendingUp className="w-3 h-3 text-cyan-600 flex-shrink-0" />
                            <span>{badge}</span>
                          </span>
                        ))}
                      </div>
                    )}

                    {/* 概要 */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* 構造化ストーリー（課題 ➔ ソリューション ➔ 導入効果） */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      {/* 課題 */}
                      {project.challenge && (
                        <div className="p-3 rounded-2xl bg-amber-50/70 backdrop-blur-sm border border-amber-200/60 text-amber-950 text-xs">
                          <div className="flex items-center gap-1.5 font-bold text-amber-800 mb-1">
                            <AlertCircle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                            <span>抱えていた課題</span>
                          </div>
                          <p className="text-slate-700 leading-relaxed text-[11px] sm:text-xs">
                            {project.challenge}
                          </p>
                        </div>
                      )}

                      {/* ソリューション */}
                      {project.solution && (
                        <div className="p-3 rounded-2xl bg-cyan-50/70 backdrop-blur-sm border border-cyan-200/60 text-cyan-950 text-xs">
                          <div className="flex items-center gap-1.5 font-bold text-cyan-800 mb-1">
                            <Wrench className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0" />
                            <span>提供ソリューション</span>
                          </div>
                          <p className="text-slate-700 leading-relaxed text-[11px] sm:text-xs">
                            {project.solution}
                          </p>
                        </div>
                      )}

                      {/* 導入効果 */}
                      {project.impact && (
                        <div className="p-3 rounded-2xl bg-violet-50/80 backdrop-blur-sm border border-violet-200/70 text-violet-950 text-xs">
                          <div className="flex items-center gap-1.5 font-bold text-violet-800 mb-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-violet-600 flex-shrink-0" />
                            <span>導入効果・数値成果</span>
                          </div>
                          <p className="font-semibold text-violet-900 leading-relaxed text-[11px] sm:text-xs">
                            {project.impact}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* メトリクス表示 */}
                    {project.metrics && (
                      <div className="grid grid-cols-2 gap-2 py-2.5 border-y border-slate-100 my-1">
                        {project.metrics.map((metric, mIdx) => (
                          <div key={mIdx} className="flex flex-col">
                            <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">
                              {metric.label}
                            </span>
                            <span className="text-xs font-bold text-slate-800">
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* 技術スタックタグ */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/80 backdrop-blur-sm text-slate-700 border border-slate-200/80 shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* カード下部アクション */}
                  <div className="pt-5 mt-6 border-t border-slate-100">
                    <Link href="#contact" className="block w-full">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-center rounded-full font-semibold bg-white/80 backdrop-blur-sm hover:bg-white text-slate-700 hover:text-violet-700 border-slate-200 hover:border-violet-300 shadow-2xs transition-all text-xs"
                      >
                        <span>同様の課題について相談する</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1 text-violet-500" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 実績セクション下部CTA & NDA注記 */}
        <div className="mt-14 text-center space-y-4 max-w-3xl mx-auto">
          <Link href="#contact" className="inline-block">
            <Button
              variant="primary"
              size="lg"
              className="rounded-full px-8 py-3.5 text-xs sm:text-sm font-bold text-white shadow-glass hover:shadow-glass-hover gap-2 group transition-all"
            >
              <span>自社のWebシステム開発・DX課題を相談する</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </Link>
          <p className="text-xs text-slate-500 leading-relaxed bg-white/70 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
            ※ 守秘義務契約（NDA）に基づき、クライアント企業様の社名・具体的なシステム構成は伏せて記載しております。詳細な類似事例については個別のお打ち合わせにてご紹介可能です。
          </p>
        </div>

      </div>
    </section>
  );
};

export default BentoProjectsSection;
