"use client";

import { motion } from "framer-motion";
import { ROADMAP_DATA } from "@/data/roadmap";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Milestone,
  Code2,
  Briefcase,
  Layers,
  Building2,
  Rocket,
  Sparkles,
} from "lucide-react";

export const RoadmapSection = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
    Briefcase: <Briefcase className="w-5 h-5 text-emerald-400" />,
    Layers: <Layers className="w-5 h-5 text-blue-400" />,
    Building2: <Building2 className="w-5 h-5 text-purple-400" />,
    Rocket: <Rocket className="w-5 h-5 text-pink-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />,
  };

  return (
    <section id="roadmap" className="py-24 relative z-10 overflow-hidden bg-slate-100/30 dark:bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ヘッダー */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <Badge variant="gradient" className="px-4 py-1 gap-1.5 text-xs font-semibold">
            <Milestone className="w-3.5 h-3.5 text-cyan-500" />
            <span>Trajectory & Roadmap / 開発の歩みと軌跡</span>
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-title tracking-tight">
            エンジニアとしての成長軌跡
          </h2>

          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
            業務効率化（GAS）から始まり、受託開発、モダンWeb技術の取得、独立開業、そして自作SaaS/AIアプリ開発へと挑戦を続けるロードマップです。
          </p>
        </div>

        {/* タイムライン領域 */}
        <div className="relative">
          {/* 中央のグラデーション垂直ネオンライン */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:-ml-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-500 shadow-[0_0_12px_rgba(6,182,212,0.5)]" />

          <div className="space-y-12 md:space-y-16">
            {ROADMAP_DATA.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* タイムライン軸上のアイコンノード */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 dark:bg-slate-950 border-2 border-cyan-500 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.6)] z-20">
                    {iconMap[item.iconName] || <Code2 className="w-5 h-5 text-cyan-400" />}
                  </div>

                  {/* カード領域 */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <Card
                      glass
                      glow
                      className={`p-6 sm:p-8 border-slate-200/80 dark:border-white/10 hover:border-cyan-500/50 transition-all duration-300 ${
                        item.isCurrent ? "border-cyan-500/60 shadow-[0_0_25px_rgba(6,182,212,0.15)]" : ""
                      }`}
                    >
                      <div className={`space-y-3 ${isEven ? "md:items-end" : ""}`}>
                        {/* フェーズ & バッジ */}
                        <div className={`flex items-center gap-2 flex-wrap ${isEven ? "md:justify-end" : ""}`}>
                          <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 tracking-widest">
                            {item.period}
                          </span>
                          {item.isCurrent && (
                            <Badge variant="glow" className="px-2 py-0.5 text-[10px] bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border-cyan-500/40 font-bold">
                              NOW & BEYOND
                            </Badge>
                          )}
                        </div>

                        {/* タイトル */}
                        <CardTitle className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                          {item.title}
                        </CardTitle>

                        {/* 本文 */}
                        <CardDescription className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                          {item.description}
                        </CardDescription>

                        {/* タグ */}
                        <div className={`flex flex-wrap gap-1.5 pt-2 ${isEven ? "md:justify-end" : ""}`}>
                          {item.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs font-normal">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
export default RoadmapSection;
