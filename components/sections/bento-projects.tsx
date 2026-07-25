"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { PROJECTS_DATA } from "@/data/projects";
import { ProjectCategory, ProjectStatus } from "@/types";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SitePreview } from "@/components/ui/site-preview";
import { ExternalLink, Sparkles, ArrowUpRight, Layers, Archive, CheckCircle2, Beaker } from "lucide-react";

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
          <Badge className="px-2.5 py-0.5 text-[11px] font-bold gap-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 backdrop-blur-md shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Active</span>
          </Badge>
        );
      case "Experiment":
        return (
          <Badge className="px-2.5 py-0.5 text-[11px] font-bold gap-1.5 bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/30 backdrop-blur-md shadow-sm">
            <Beaker className="w-3 h-3 text-purple-400" />
            <span>Experiment</span>
          </Badge>
        );
      case "Archived":
        return (
          <Badge className="px-2.5 py-0.5 text-[11px] font-bold gap-1.5 bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border border-zinc-500/30 backdrop-blur-md shadow-sm">
            <Archive className="w-3 h-3 text-zinc-400" />
            <span>Archived</span>
          </Badge>
        );
    }
  };

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* セクションヘッダー */}
        <div className="flex flex-col items-center text-center mb-12">
          <Badge variant="gradient" className="px-4 py-1 gap-1.5 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            <span>Featured Portfolio / 実績プロダクト</span>
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-title tracking-tight">
            自作Webアプリケーション & 開発実績
          </h2>

          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
            アイディアの企画から設計・実装・AI連携・クラウドデプロイまで自作・運用しているプロダクト群です。
          </p>

          {/* レスポンシブ最適化ピル（カプセル）型タブフィルター (スマホ横一列・横スクロール対応) */}
          <div className="mt-6 flex flex-row items-center justify-start sm:justify-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-slate-200/70 dark:bg-slate-900/70 border border-slate-300/80 dark:border-white/10 backdrop-blur-xl shadow-lg max-w-full overflow-x-auto no-scrollbar">
            
            {/* 1. 主力プロダクト */}
            <button
              onClick={() => setActiveTab("active")}
              className={`px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap flex-shrink-0 select-none ${
                activeTab === "active"
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-[1.02]"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-slate-800/50"
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>主力プロダクト</span>
              <span
                className={`px-2 py-0.5 text-[10px] sm:text-[11px] font-mono font-bold rounded-full ${
                  activeTab === "active"
                    ? "bg-white/20 text-white"
                    : "bg-slate-300/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                }`}
              >
                {activeCount}
              </span>
            </button>

            {/* 2. 過去作・開発ログ */}
            <button
              onClick={() => setActiveTab("archive")}
              className={`px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap flex-shrink-0 select-none ${
                activeTab === "archive"
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-[1.02]"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-slate-800/50"
              }`}
            >
              <Archive className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>過去作・開発ログ</span>
              <span
                className={`px-2 py-0.5 text-[10px] sm:text-[11px] font-mono font-bold rounded-full ${
                  activeTab === "archive"
                    ? "bg-white/20 text-white"
                    : "bg-slate-300/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                }`}
              >
                {archiveCount}
              </span>
            </button>

            {/* 3. すべて */}
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap flex-shrink-0 select-none ${
                activeTab === "all"
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-[1.02]"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-slate-800/50"
              }`}
            >
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>すべて</span>
              <span
                className={`px-2 py-0.5 text-[10px] sm:text-[11px] font-mono font-bold rounded-full ${
                  activeTab === "all"
                    ? "bg-white/20 text-white"
                    : "bg-slate-300/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
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
              // 3つの主力プロダクト、またはAll表示時に先頭のフラッグシッププロダクトを強調
              const isLargeCard = (activeTab === "all" || activeTab === "active") && index === 0 && filteredProjects.length > 2;

              return (
                <motion.div
                  key={project.id}
                  layout
                  className={isLargeCard ? "md:col-span-2 lg:col-span-2" : "col-span-1"}
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 20 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                >
                  <Card
                    glass
                    glow
                    className="h-full flex flex-col justify-between group border-slate-200/80 dark:border-white/10 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300"
                  >
                    <div>
                      {/* 画像・メディアエリア (自動OGPプレビュー & フォールバック付き) */}
                      <div className="relative w-full h-52 sm:h-60 overflow-hidden rounded-t-2xl bg-slate-900">
                        <SitePreview
                          url={project.liveUrl}
                          fallbackImage={project.image}
                          alt={project.title}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

                        {/* ステータスバッジ */}
                        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                          {getStatusBadge(project.status)}

                          {project.featured && (
                            <Badge variant="glow" className="px-2.5 py-0.5 gap-1 font-bold text-[11px] bg-slate-950/90 text-cyan-300 backdrop-blur-md border-cyan-500/40">
                              <Sparkles className="w-3 h-3 text-cyan-400" />
                              <span>FEATURED</span>
                            </Badge>
                          )}
                        </div>

                        {project.liveUrl && (
                          <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <Button variant="glass" size="icon" className="rounded-full w-9 h-9">
                                <ExternalLink className="w-4 h-4 text-cyan-500 dark:text-cyan-300" />
                              </Button>
                            </Link>
                          </div>
                        )}
                      </div>

                      {/* テキストエリア */}
                      <div className="p-6 space-y-4">
                        <div className="flex items-start justify-between gap-2">
                          <CardTitle className="text-xl sm:text-2xl font-bold group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                            {project.title}
                          </CardTitle>
                        </div>

                        <CardDescription className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-3">
                          {project.description}
                        </CardDescription>

                        {/* メトリクス表示 */}
                        {project.metrics && (
                          <div className="grid grid-cols-2 gap-3 py-2 border-y border-slate-200 dark:border-slate-800/80 my-2">
                            {project.metrics.map((metric, mIdx) => (
                              <div key={mIdx} className="flex flex-col">
                                <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">
                                  {metric.label}
                                </span>
                                <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                                  {metric.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-[11px] font-normal">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* カードボトムボタン */}
                    <div className="p-6 pt-0 mt-auto">
                      {project.liveUrl && (
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                          <Button
                            variant={project.featured ? "primary" : "outline"}
                            size="sm"
                            className="w-full justify-center"
                          >
                            <span>ライブデモを開く</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </Button>
                        </Link>
                      )}
                    </div>

                  </Card>
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
