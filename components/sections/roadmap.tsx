"use client";

import { motion } from "framer-motion";
import { ROADMAP_DATA } from "@/data/roadmap";
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
    Code2: <Code2 className="w-4 h-4 text-slate-700" />,
    Briefcase: <Briefcase className="w-4 h-4 text-slate-700" />,
    Layers: <Layers className="w-4 h-4 text-slate-700" />,
    Building2: <Building2 className="w-4 h-4 text-slate-700" />,
    Rocket: <Rocket className="w-4 h-4 text-slate-700" />,
    Sparkles: <Sparkles className="w-4 h-4 text-amber-500" />,
  };

  return (
    <section id="roadmap" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ヘッダー */}
        <div className="flex flex-col items-center text-center space-y-3 mb-20">
          <Badge variant="glow" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-slate-700 bg-white">
            Trajectory & History
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-title tracking-tight">
            エンジニアとしての成長軌跡
          </h2>

          <p className="text-slate-500 max-w-2xl text-base sm:text-lg">
            業務効率化（GAS）から始まり、受託開発、モダンWeb技術の取得、独立開業、そして自作SaaS/AIアプリ開発へと挑戦を続けるロードマップです。
          </p>
        </div>

        {/* タイムライン領域 */}
        <div className="relative">
          {/* 中央の垂直ライン */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:-ml-0.5 bg-slate-200" />

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
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center shadow-md z-20">
                    {iconMap[item.iconName] || <Code2 className="w-4 h-4 text-slate-700" />}
                  </div>

                  {/* カード領域 */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div
                      className={`p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-300 ${
                        item.isCurrent ? "border-slate-800 ring-2 ring-slate-800/10" : ""
                      }`}
                    >
                      <div className={`space-y-3 ${isEven ? "md:items-end" : ""}`}>
                        {/* フェーズ & バッジ */}
                        <div className={`flex items-center gap-2 flex-wrap ${isEven ? "md:justify-end" : ""}`}>
                          <span className="text-xs font-mono font-bold text-slate-500 tracking-wider">
                            {item.period}
                          </span>
                          {item.isCurrent && (
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-slate-900 text-white font-bold tracking-tight">
                              NOW & BEYOND
                            </span>
                          )}
                        </div>

                        {/* タイトル */}
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-title">
                          {item.title}
                        </h3>

                        {/* 本文 */}
                        <p className="text-slate-500 text-sm leading-relaxed">
                          {item.description}
                        </p>

                        {/* タグ */}
                        <div className={`flex flex-wrap gap-1.5 pt-2 ${isEven ? "md:justify-end" : ""}`}>
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200/60"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
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
