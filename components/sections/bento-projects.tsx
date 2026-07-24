"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PROJECTS_DATA } from "@/data/projects";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SitePreview } from "@/components/ui/site-preview";
import { ExternalLink, Sparkles, ArrowUpRight } from "lucide-react";

export const BentoProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* セクションヘッダー */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <Badge variant="gradient" className="px-4 py-1 gap-1.5 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            <span>Featured Portfolio / 実績プロダクト</span>
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-title tracking-tight">
            自作Webアプリケーション & 開発実績
          </h2>

          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
            アイディアの企画から設計・実装・AI連携・クラウドデプロイまで自作・運用している主要プロダクトです。
          </p>
        </div>

        {/* Bento Grid レイアウト */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project, index) => {
            const isFeatured = project.featured;

            return (
              <motion.div
                key={project.id}
                className={isFeatured ? "md:col-span-2" : "col-span-1"}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  glass
                  glow
                  className="h-full flex flex-col justify-between group border-slate-200/80 dark:border-white/10 hover:border-cyan-500/50"
                >
                  <div>
                    {/* 画像・メディアエリア (自動プレビュー & フォールバック機能付き) */}
                    <div className="relative w-full h-56 sm:h-64 overflow-hidden rounded-t-2xl bg-slate-900">
                      <SitePreview
                        url={project.liveUrl}
                        fallbackImage={project.image}
                        alt={project.title}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

                      {isFeatured && (
                        <div className="absolute top-4 left-4 z-10">
                          <Badge variant="glow" className="px-3 py-1 gap-1 font-bold text-xs bg-slate-950/90 text-cyan-300 backdrop-blur-md border-cyan-500/40">
                            <Sparkles className="w-3 h-3 text-cyan-400" />
                            <span>FEATURED PRODUCT</span>
                          </Badge>
                        </div>
                      )}

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
                        <CardTitle className="text-xl sm:text-2xl group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </CardTitle>
                      </div>

                      <CardDescription className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </CardDescription>

                      {isFeatured && project.metrics && (
                        <div className="grid grid-cols-2 gap-3 py-2 border-y border-slate-200 dark:border-slate-800 my-2">
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

                  <div className="p-6 pt-0 mt-auto">
                    {project.liveUrl && (
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                        <Button
                          variant={isFeatured ? "primary" : "outline"}
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
        </div>

      </div>
    </section>
  );
};
export default BentoProjectsSection;
