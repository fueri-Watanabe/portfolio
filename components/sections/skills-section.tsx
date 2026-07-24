"use client";

import { motion } from "framer-motion";
import { STRENGTHS_DATA, SKILL_CATEGORIES_DATA, SERVICE_SCOPE_DATA } from "@/data/skills";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  TrendingUp,
  Target,
  Code,
  Cpu,
  ShieldCheck,
  Layout,
  Database,
  Cloud,
  Terminal,
  Code2,
  CheckCircle2,
  Sparkles,
  Bot,
} from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiShadcnui,
  SiBootstrap,
  SiHtml5,
  SiFirebase,
  SiPrisma,
  SiPlanetscale,
  SiGoogleappsscript,
  SiGooglecloud,
  SiVercel,
  SiGooglegemini,
  SiTypescript,
  SiJavascript,
  SiGithub,
  SiStripe,
  SiAlgolia,
  SiSentry,
  SiFramer,
} from "@icons-pack/react-simple-icons";

export const SkillsSection = () => {
  const strengthIconMap: Record<string, React.ReactNode> = {
    Zap: <Zap className="w-6 h-6 text-amber-500" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-emerald-500" />,
    Target: <Target className="w-6 h-6 text-cyan-500" />,
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "frontend":
        return <Layout className="w-5 h-5 text-cyan-500" />;
      case "backend_db":
        return <Database className="w-5 h-5 text-emerald-500" />;
      case "cloud_ai":
        return <Cloud className="w-5 h-5 text-indigo-500" />;
      case "languages_tools":
        return <Terminal className="w-5 h-5 text-amber-500" />;
      default:
        return <Code2 className="w-5 h-5 text-cyan-500" />;
    }
  };

  const getTechIcon = (iconName: string) => {
    const iconClass = "w-4 h-4 transition-transform group-hover:scale-110";
    switch (iconName) {
      case "nextdotjs":
        return <SiNextdotjs className={iconClass} />;
      case "react":
        return <SiReact className={`${iconClass} text-cyan-400`} />;
      case "tailwindcss":
        return <SiTailwindcss className={`${iconClass} text-teal-400`} />;
      case "shadcnui":
        return <SiShadcnui className={iconClass} />;
      case "framermotion":
        return <SiFramer className={`${iconClass} text-pink-500`} />;
      case "bootstrap":
        return <SiBootstrap className={`${iconClass} text-purple-500`} />;
      case "html5":
        return <SiHtml5 className={`${iconClass} text-orange-500`} />;
      case "firebase":
        return <SiFirebase className={`${iconClass} text-amber-500`} />;
      case "stripe":
        return <SiStripe className={`${iconClass} text-indigo-500`} />;
      case "microcms":
        return (
          <span className={`${iconClass} font-bold text-[10px] text-rose-500 flex items-center justify-center`}>
            m
          </span>
        );
      case "algolia":
        return <SiAlgolia className={`${iconClass} text-blue-500`} />;
      case "prisma":
        return <SiPrisma className={iconClass} />;
      case "planetscale":
        return <SiPlanetscale className={iconClass} />;
      case "googleappsscript":
        return <SiGoogleappsscript className={`${iconClass} text-emerald-500`} />;
      case "googlecloud":
        return <SiGooglecloud className={`${iconClass} text-blue-500`} />;
      case "vercel":
        return <SiVercel className={iconClass} />;
      case "googlegemini":
        return <SiGooglegemini className={`${iconClass} text-indigo-400`} />;
      case "sentry":
        return <SiSentry className={`${iconClass} text-purple-400`} />;
      case "typescript":
        return <SiTypescript className={`${iconClass} text-blue-400`} />;
      case "javascript":
        return <SiJavascript className={`${iconClass} text-yellow-400`} />;
      case "antigravity":
        return <Sparkles className={`${iconClass} text-cyan-400 animate-pulse`} />;
      case "github":
        return <SiGithub className={iconClass} />;
      default:
        return <Code2 className={`${iconClass} text-cyan-500`} />;
    }
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
                      {strengthIconMap[strength.iconName]}
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

        {/* 2. Web開発領域 & 4カテゴリ構成の技術スタック */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* 左: 開発領域 */}
          <div className="lg:col-span-4 space-y-6">
            <Card glass className="p-8 border-slate-200/80 dark:border-white/10 h-full">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
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
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span>{scope}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>

          {/* 右: 4カテゴリ技術スタック (2x2 グリッド) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SKILL_CATEGORIES_DATA.map((cat, cIdx) => (
              <Card key={cIdx} glass className="p-6 border-slate-200/80 dark:border-white/10 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                <div>
                  {/* カテゴリ見出しアイコン */}
                  <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-4 font-title flex items-center gap-2.5 border-b border-slate-200/60 dark:border-slate-800/80 pb-3">
                    {getCategoryIcon(cat.category)}
                    <span>{cat.title}</span>
                  </h4>

                  {/* 技術スタックピルバッジ */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {cat.items
                      .filter((item) => item.display)
                      .map((item, iIdx) => (
                        <div
                          key={iIdx}
                          className="group relative inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-xl bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-800 hover:border-cyan-500/60 dark:hover:border-cyan-400/60 shadow-sm hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-0.5 transition-all duration-300 cursor-default select-none"
                        >
                          <span className="flex items-center justify-center">
                            {getTechIcon(item.iconName)}
                          </span>
                          <span>{item.name}</span>
                          {item.featuredInProjects && item.featuredInProjects.length > 0 && (
                            <span
                              className="ml-0.5 bg-cyan-500/15 dark:bg-cyan-400/20 text-cyan-700 dark:text-cyan-300 text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold shadow-sm"
                              title={`${item.featuredInProjects.length} つの実績プロダクトで採用`}
                            >
                              {item.featuredInProjects.length}
                            </span>
                          )}
                        </div>
                      ))}
                  </div>
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
