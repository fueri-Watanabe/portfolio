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
    <section id="projects" className="py-20 md:py-32 relative z-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* セクションヘッダー */}
        <div className="flex flex-col items-center text-center mb-14">
          <Badge variant="glow" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-3">
            SOLUTIONS & CASE STUDIES
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-800 font-title tracking-tight">
            開発実績 &{" "}
            <span className="bg-gradient-to-r from-rose-500 to-red-600 bg-clip-text text-transparent">
              システムソリューション例
            </span>
          </h2>

          <p className="mt-3 text-slate-600 max-w-2xl text-base sm:text-lg leading-relaxed">
            課題抽出から設計・実装・本番稼働まで。要件定義から最短スパンで具現化したB2Bソリューションおよび業務自動化の実績例です。
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
                <div className="h-full flex flex-col justify-between rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-rose-300 hover:-translate-y-0.5 transition-all duration-300 p-6 sm:p-7 group">
                  <div className="space-y-4">
                    {/* 上部ヘッダー（ソリューション分類 & ステータス） */}
                    <div className="flex items-center justify-between gap-2">
                      {project.solutionType && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                          <span>{project.solutionType}</span>
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        <span>実務導入済</span>
                      </span>
                    </div>

                    {/* タイトル */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 font-title group-hover:text-rose-600 transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* ハイライトバッジ */}
                    {project.highlightBadges && (
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {project.highlightBadges.map((badge, bIdx) => (
                          <span
                            key={bIdx}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-100/90 text-slate-700 border border-slate-200/80 flex items-center gap-1"
                          >
                            <TrendingUp className="w-3 h-3 text-teal-600 flex-shrink-0" />
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
                        <div className="p-3 rounded-2xl bg-amber-50/60 border border-amber-200/70 text-amber-950 text-xs">
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
                        <div className="p-3 rounded-2xl bg-sky-50/60 border border-sky-200/70 text-sky-950 text-xs">
                          <div className="flex items-center gap-1.5 font-bold text-sky-800 mb-1">
                            <Wrench className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                            <span>提供ソリューション</span>
                          </div>
                          <p className="text-slate-700 leading-relaxed text-[11px] sm:text-xs">
                            {project.solution}
                          </p>
                        </div>
                      )}

                      {/* 導入効果 */}
                      {project.impact && (
                        <div className="p-3 rounded-2xl bg-teal-50/80 border border-teal-200/80 text-teal-950 text-xs">
                          <div className="flex items-center gap-1.5 font-bold text-teal-800 mb-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                            <span>導入効果・数値成果</span>
                          </div>
                          <p className="font-semibold text-teal-900 leading-relaxed text-[11px] sm:text-xs">
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
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-50 text-slate-700 border border-slate-200/80"
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
                        className="w-full justify-center rounded-full font-semibold bg-white hover:bg-rose-50/40 text-slate-700 hover:text-rose-600 border-slate-200 hover:border-rose-300 transition-all text-xs"
                      >
                        <span>同様の課題について相談する</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1 text-rose-500" />
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
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-3.5 text-xs sm:text-sm font-bold text-slate-800 hover:text-rose-600 border-slate-300 hover:border-rose-400 bg-white hover:bg-slate-50 shadow-xs gap-2 group"
            >
              <span>自社の開発・自動化課題を相談する</span>
              <ArrowRight className="w-4 h-4 text-rose-500 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </Link>
          <p className="text-xs text-slate-500 leading-relaxed bg-slate-50/80 p-3.5 rounded-2xl border border-slate-200/80">
            ※ 守秘義務契約（NDA）に基づき、クライアント企業様の社名・具体的なシステム構成は伏せて記載しております。詳細な類似事例については個別のお打ち合わせにてご紹介可能です。
          </p>
        </div>

      </div>
    </section>
  );
};

export default BentoProjectsSection;
