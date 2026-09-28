"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { PROJECTS_DATA } from "@/data/projects";
import { ProjectCategory, ProjectStatus } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SitePreview } from "@/components/ui/site-preview";
import { ExternalLink, Sparkles, ArrowUpRight, Layers, Archive, CheckCircle2 } from "lucide-react";

export const BentoProjectsSection = () => {
  const [activeTab, setActiveTab] = useState<ProjectCategory | "all">("active");

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeTab === "all") return true;
    return project.category === activeTab;
  });

  const activeCount = PROJECTS_DATA.filter((p) => p.category === "active").length;
  const archiveCount = PROJECTS_DATA.filter((p) => p.category === "archive").length;
  const allCount = PROJECTS_DATA.length;

  const getStatusBadge = (status: ProjectStatus) => {
    switch (status) {
      case "Active":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/95 text-rose-700 border border-rose-200 shadow-2xs backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
            <span>Active</span>
          </span>
        );
      case "Experiment":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/95 text-slate-700 border border-slate-200 shadow-2xs backdrop-blur-md">
            <span>Experiment</span>
          </span>
        );
      case "Archived":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/95 text-slate-500 border border-slate-200 shadow-2xs backdrop-blur-md">
            <span>Archived</span>
          </span>
        );
    }
  };

  const getColSpanClass = (index: number, total: number) => {
    // 12カラムベースの不均等モザイクBento Grid
    if (index === 0) return "md:col-span-2 lg:col-span-8";
    if (index === 1) return "md:col-span-1 lg:col-span-4";
    if (index === 2) return "md:col-span-1 lg:col-span-4";
    if (index === 3) return "md:col-span-1 lg:col-span-4";
    if (index === 4) return "md:col-span-1 lg:col-span-4";
    if (index === 5) return "md:col-span-2 lg:col-span-7";
    if (index === 6) return "md:col-span-1 lg:col-span-5";
    return "md:col-span-1 lg:col-span-6";
  };

  return (
    <section id="projects" className="py-20 md:py-32 relative z-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* セクションヘッダー */}
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="glow" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-3">
            Selected Projects
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-800 font-title tracking-tight">
            自作Webアプリケーション &{" "}
            <span className="bg-gradient-to-r from-rose-500 to-red-600 bg-clip-text text-transparent">
              開発実績
            </span>
          </h2>

          <p className="mt-3 text-slate-600 max-w-2xl text-base sm:text-lg">
            アイディアの企画から設計・実装・AI連携・クラウドデプロイまで自作・運用しているプロダクト群です。
          </p>

          {/* カプセル型タブフィルター */}
          <div className="mt-8 flex flex-row items-center justify-start sm:justify-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-slate-200/70 border border-slate-200/90 shadow-2xs max-w-full overflow-x-auto no-scrollbar">
            {/* 1. 主力プロダクト */}
            <button
              onClick={() => setActiveTab("active")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 whitespace-nowrap flex-shrink-0 select-none ${
                activeTab === "active"
                  ? "bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-800 hover:bg-white/70"
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>主力プロダクト</span>
              <span
                className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded-full ${
                  activeTab === "active"
                    ? "bg-white/20 text-white"
                    : "bg-slate-200 text-slate-700"
                }`}
              >
                {activeCount}
              </span>
            </button>

            {/* 2. 過去作・開発ログ */}
            <button
              onClick={() => setActiveTab("archive")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 whitespace-nowrap flex-shrink-0 select-none ${
                activeTab === "archive"
                  ? "bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-800 hover:bg-white/70"
              }`}
            >
              <Archive className="w-3.5 h-3.5" />
              <span>過去作・開発ログ</span>
              <span
                className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded-full ${
                  activeTab === "archive"
                    ? "bg-white/20 text-white"
                    : "bg-slate-200 text-slate-700"
                }`}
              >
                {archiveCount}
              </span>
            </button>

            {/* 3. すべて */}
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 whitespace-nowrap flex-shrink-0 select-none ${
                activeTab === "all"
                  ? "bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-800 hover:bg-white/70"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>すべて</span>
              <span
                className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded-full ${
                  activeTab === "all"
                    ? "bg-white/20 text-white"
                    : "bg-slate-200 text-slate-700"
                }`}
              >
                {allCount}
              </span>
            </button>
          </div>
        </div>

        {/* 不均等モザイク Bento Grid レイアウト (12カラム) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const colSpanClass = getColSpanClass(index, filteredProjects.length);
              const isHeroCard = index === 0 && (activeTab === "all" || activeTab === "active");

              return (
                <motion.div
                  key={project.id}
                  layout
                  className={colSpanClass}
                  initial={{ opacity: 0, scale: 0.97, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97, y: 20 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                >
                  <div
                    className={`h-full flex flex-col justify-between group rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-rose-300 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden ${
                      isHeroCard ? "lg:flex-row" : ""
                    }`}
                  >
                    {/* カード上部/左側コンテンツ */}
                    <div className={isHeroCard ? "lg:w-7/12 flex flex-col" : "w-full"}>
                      {/* 画像・メディアエリア */}
                      <div
                        className={`relative w-full overflow-hidden bg-slate-50 border-b border-slate-100 ${
                          isHeroCard
                            ? "h-64 sm:h-72 lg:h-full lg:min-h-[360px] lg:border-b-0 lg:border-r"
                            : "h-56 sm:h-64 rounded-t-3xl"
                        }`}
                      >
                        <SitePreview
                          url={project.liveUrl}
                          fallbackImage={project.image}
                          alt={project.title}
                        />

                        {/* ステータスバッジ */}
                        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                          {getStatusBadge(project.status)}

                          {project.featured && (
                            <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-2xs flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-white" />
                              <span>FEATURED</span>
                            </span>
                          )}
                        </div>

                        {project.liveUrl && (
                          <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <button className="w-9 h-9 rounded-full bg-white/90 text-slate-700 border border-slate-200 shadow-2xs flex items-center justify-center hover:bg-rose-500 hover:text-white transition-colors">
                                <ExternalLink className="w-4 h-4" />
                              </button>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* テキスト & ボタンエリア */}
                    <div
                      className={`flex flex-col justify-between ${
                        isHeroCard ? "lg:w-5/12 p-6 sm:p-8" : "w-full p-6 sm:p-7"
                      }`}
                    >
                      <div className="space-y-4">
                        <div className="flex items-start justify-between gap-2">
                          <h3
                            className={`font-bold text-slate-800 font-title group-hover:text-rose-600 transition-colors ${
                              isHeroCard ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                            }`}
                          >
                            {project.title}
                          </h3>
                        </div>

                        {/* 解決した課題・導入効果（ティールで誠実・確実な実績を演出） */}
                        {project.impact && (
                          <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-teal-50/80 border border-teal-200/80 text-teal-950">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-600 text-white flex-shrink-0 mt-0.5 shadow-2xs">
                              導入効果
                            </span>
                            <span className="text-xs font-semibold leading-relaxed text-teal-900">
                              {project.impact}
                            </span>
                          </div>
                        )}

                        <p className="text-slate-600 text-sm leading-relaxed">
                          {project.description}
                        </p>

                        {/* メトリクス表示 */}
                        {project.metrics && (
                          <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-100 my-2">
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

                      {/* カードボトムボタン */}
                      <div className="pt-6 mt-auto">
                        {project.liveUrl && (
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                            <Button
                              variant={project.featured ? "primary" : "outline"}
                              size="sm"
                              className={`w-full justify-center rounded-full font-semibold ${
                                project.featured
                                  ? "shadow-xs"
                                  : "bg-white hover:bg-rose-50/40 text-slate-700 hover:text-rose-600 border-slate-200 hover:border-rose-300"
                              }`}
                            >
                              <span>ライブデモを開く</span>
                              <ArrowUpRight className="w-4 h-4" />
                            </Button>
                          </Link>
                        )}
                      </div>

                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default BentoProjectsSection;
