"use client";

import { motion } from "framer-motion";
import { STRENGTHS_DATA, SKILL_CATEGORIES_DATA, SERVICE_SCOPE_DATA } from "@/data/skills";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, TrendingUp, Target, Code, Cpu, ShieldCheck } from "lucide-react";

export const SkillsSection = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Zap: <Zap className="w-6 h-6 text-amber-500" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-emerald-500" />,
    Target: <Target className="w-6 h-6 text-cyan-500" />,
  };

  return (
    <section id="skills" className="py-24 relative z-10 bg-slate-100/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ヘッダー */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <Badge variant="gradient" className="px-4 py-1 gap-1.5 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5 text-cyan-500" />
            <span>Skills & Value Proposition / 強みとスキル</span>
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-title tracking-tight">
            フルスタックエンジニア 3つの強み
          </h2>

          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
            単なるコーディングにとどまらず、お客様のビジネスの成果に直結する解像度の高い提案を行ないます。
          </p>
        </div>

        {/* 1. 強み3つのグリッドカード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {STRENGTHS_DATA.map((strength, index) => (
            <motion.div
              key={strength.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card glass glow className="p-8 h-full flex flex-col justify-between border-slate-200/80 dark:border-white/10 hover:border-cyan-500/50">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center shadow-md">
                      {iconMap[strength.iconName]}
                    </div>
                    <span className="text-2xl font-black font-mono text-slate-400 dark:text-slate-600/80">
                      {strength.number}
                    </span>
                  </div>

                  <CardTitle className="text-2xl pt-2">
                    {strength.title}
                  </CardTitle>

                  <CardDescription className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {strength.description}
                  </CardDescription>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>開発の標準品質を約束</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 2. Web開発領域 & 技術スタック */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* 左: 開発領域 */}
          <div className="lg:col-span-4 space-y-6">
            <Card glass className="p-8 border-slate-200/80 dark:border-white/10">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-cyan-500" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-title">
                    Webアプリケーション開発領域
                  </h3>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  社内業務ツールからtoC向けWebアプリケーションまで幅広くサポートいたします。
                </p>

                <ul className="space-y-3 pt-2">
                  {SERVICE_SCOPE_DATA.map((scope, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2.5 text-sm text-slate-800 dark:text-slate-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                      <span>{scope}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>

          {/* 右: スキルカテゴリ */}
          <div className="lg:col-span-8 space-y-6">
            {SKILL_CATEGORIES_DATA.map((cat, cIdx) => (
              <Card key={cIdx} glass className="p-6 border-slate-200/80 dark:border-white/10">
                <h4 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-4 font-title flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  {cat.title}
                </h4>

                <div className="flex flex-wrap gap-2.5">
                  {cat.items
                    .filter((item) => item.display)
                    .map((item, iIdx) => (
                      <Badge
                        key={iIdx}
                        variant="default"
                        className="px-3 py-2 text-xs font-medium gap-2 bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-700/80 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all cursor-default shadow-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                        <span>{item.name}</span>
                        {item.featuredInProjects && item.featuredInProjects.length > 0 && (
                          <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                            ({item.featuredInProjects.length} projects)
                          </span>
                        )}
                      </Badge>
                    ))}
                </div>
              </Card>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
export default SkillsSection;
