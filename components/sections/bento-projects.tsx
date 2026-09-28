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
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/95 text-teal-900 border border-teal-200/80 shadow-sm backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
            <span>Active</span>
          </span>
        );
      case "Experiment":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/95 text-sky-900 border border-sky-200/80 shadow-sm backdrop-blur-md">
            <span>Experiment</span>
          </span>
        );
      case "Archived":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/95 text-slate-600 border border-slate-200 shadow-sm backdrop-blur-md">
            <span>Archived</span>
          </span>
        );
    }
  };

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* セクションヘッダー（Flowform風のSelected Projectsスタイル） */}
        <div className="flex flex-col items-center text-center mb-14">
          <Badge variant="glow" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-900 bg-white mb-3">
            Selected Projects
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-title tracking-tight">
            自作Webアプリケーション &{" "}
            <span className="bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
              開発実績
            </span>
          </h2>

          <p className="mt-3 text-slate-500 max-w-2xl text-base sm:text-lg">
            アイディアの企画から設計・実装・AI連携・クラウドデプロイまで自作・運用しているプロダクト群です。
          </p>

          {/* Flowform風カプセル型タブフィルター */}
          <div className="mt-8 flex flex-row items-center justify-start sm:justify-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-white border border-sky-100 shadow-sm max-w-full overflow-x-auto no-scrollbar">
            {/* 1. 主力プロダクト */}
            <button
              onClick={() => setActiveTab("active")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 whitespace-nowrap flex-shrink-0 select-none ${
                activeTab === "active"
                  ? "bg-gradient-to-r from-[#174668] to-[#286b8b] text-white shadow-md shadow-sky-950/15"
                  : "text-slate-600 hover:text-sky-950 hover:bg-sky-50"
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>主力プロダクト</span>
              <span
                className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded-full ${
                  activeTab === "active"
                    ? "bg-white/20 text-white"
                    : "bg-sky-50 text-sky-800"
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
                  ? "bg-gradient-to-r from-[#174668] to-[#286b8b] text-white shadow-md shadow-sky-950/15"
                  : "text-slate-600 hover:text-sky-950 hover:bg-sky-50"
              }`}
            >
              <Archive className="w-3.5 h-3.5" />
              <span>過去作・開発ログ</span>
              <span
                className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded-full ${
                  activeTab === "archive"
                    ? "bg-white/20 text-white"
                    : "bg-sky-50 text-sky-800"
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
                  ? "bg-gradient-to-r from-[#174668] to-[#286b8b] text-white shadow-md shadow-sky-950/15"
                  : "text-slate-600 hover:text-sky-950 hover:bg-sky-50"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>すべて</span>
              <span
                className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded-full ${
                  activeTab === "all"
                    ? "bg-white/20 text-white"
                    : "bg-sky-50 text-sky-800"
                }`}
              >
                {allCount}
              </span>
            </button>
          </div>
        </div>

        {/* Bento Grid レイアウト */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isLargeCard = (activeTab === "all" || activeTab === "active") && index === 0 && filteredProjects.length > 2;

              return (
                <motion.div
                  key={project.id}
                  layout
                  className={isLargeCard ? "md:col-span-2 lg:col-span-2" : "col-span-1"}
                  initial={{ opacity: 0, scale: 0.97, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97, y: 20 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                >
                  <div
                    className="h-full flex flex-col justify-between group rounded-3xl bg-white border border-sky-100/90 shadow-[0_12px_36px_rgba(14,165,233,0.06),0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_22px_48px_rgba(14,165,233,0.12)] hover:border-sky-300 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    <div>
                      {/* 画像・メディアエリア */}
                      <div className="relative w-full h-56 sm:h-64 overflow-hidden rounded-t-3xl bg-slate-100 border-b border-slate-100">
                        <SitePreview
                          url={project.liveUrl}
                          fallbackImage={project.image}
                          alt={project.title}
                        />

                        {/* ステータスバッジ */}
                        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                          {getStatusBadge(project.status)}

                          {project.featured && (
                            <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-gradient-to-r from-[#174668] to-[#286b8b] text-white shadow-sm flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-amber-300" />
                              <span>FEATURED</span>
                            </span>
                          )}
                        </div>

                        {project.liveUrl && (
                          <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <button className="w-9 h-9 rounded-full bg-white/95 text-[#174668] border border-sky-200/80 shadow-md flex items-center justify-center hover:bg-[#174668] hover:text-white transition-colors">
                                <ExternalLink className="w-4 h-4" />
                              </button>
                            </Link>
                          </div>
                        )}
                      </div>

                      {/* テキストエリア */}
                      <div className="p-6 sm:p-7 space-y-3.5">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-title group-hover:text-sky-950 transition-colors">
                            {project.title}
                          </h3>
                        </div>

                        {/* 解決した課題・導入効果（ビフォーアフター） */}
                        {project.impact && (
                          <div className="flex items-start gap-2 p-2.5 rounded-2xl bg-teal-50/90 border border-teal-200/80 text-teal-950">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-600 text-white flex-shrink-0 mt-0.5 shadow-xs">
                              導入効果
                            </span>
                            <span className="text-xs font-semibold leading-relaxed text-slate-800">
                              {project.impact}
                            </span>
                          </div>
                        )}

                        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                          {project.description}
                        </p>

                        {/* メトリクス表示 */}
                        {project.metrics && (
                          <div className="grid grid-cols-2 gap-3 py-3 border-y border-sky-50 my-2">
                            {project.metrics.map((metric, mIdx) => (
                              <div key={mIdx} className="flex flex-col">
                                <span className="text-[10px] text-sky-700/80 font-mono uppercase tracking-wider">
                                  {metric.label}
                                </span>
                                <span className="text-xs font-bold text-sky-950">
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
                              className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-sky-50/80 text-sky-900 border border-sky-100"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* カードボトムボタン */}
                    <div className="p-6 sm:p-7 pt-0 mt-auto">
                      {project.liveUrl && (
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                          <Button
                            variant={project.featured ? "primary" : "outline"}
                            size="sm"
                            className="w-full justify-center rounded-full"
                          >
                            <span>ライブデモを開く</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </Button>
                        </Link>
                      )}
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
