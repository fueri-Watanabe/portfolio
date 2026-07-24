"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Code2, Terminal, CheckCircle2 } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden">
      {/* 背景アンビエントグラデーション */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/15 to-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* 左カラム: キャッチコピー & アクション */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* ステータスバッジ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <Badge variant="glow" className="py-1.5 px-4 text-xs font-medium gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for Projects / 案件相談受付中</span>
              </Badge>
            </motion.div>

            {/* メインタイトル / キャッチコピー */}
            <div className="space-y-4">
              <motion.h1
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white font-title leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                fueri{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-500 to-indigo-600 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400">
                  / Hiroshi Watanabe
                </span>
              </motion.h1>

              <motion.p
                className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Web Developer / フルスタックWebエンジニア
              </motion.p>

              <motion.p
                className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Webアプリケーション開発・業務システム開発を通じて、ビジネスの課題を解決。アイデアから設計・実装・運用まで一貫した高解像度なアプローチでイメージを形にします。
              </motion.p>
            </div>

            {/* クイック特徴リスト */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="flex items-center gap-1.5 bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-lg shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                <span>迅速なレスポンス</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-lg shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-teal-500" />
                <span>一貫担当・高解像度</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-lg shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                <span>最新モダンスタック</span>
              </div>
            </motion.div>

            {/* アクションボタン */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link href="#projects" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  <span>プロダクト実績を見る</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>

              <Link href="#contact" className="w-full sm:w-auto">
                <Button variant="glass" size="lg" className="w-full sm:w-auto">
                  <Sparkles className="w-5 h-5 text-cyan-500" />
                  <span>開発のご相談・見積り</span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* 右カラム: デモ動画ビジュアル */}
          <motion.div
            className="lg:col-span-5 flex justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="relative rounded-3xl bg-slate-900/90 dark:bg-slate-900/70 border border-slate-200 dark:border-white/15 p-2 backdrop-blur-2xl shadow-2xl shadow-cyan-500/10 overflow-hidden group">
                
                {/* 擬似ターミナルヘッダー */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 rounded-t-2xl border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>fueri-workspace</span>
                  </div>
                </div>

                {/* 開発イメージ動画 */}
                <div className="relative rounded-b-2xl overflow-hidden bg-slate-950 aspect-square flex items-center justify-center">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/working.webp"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  >
                    <source src="/animation/working.webm" type="video/webm" />
                    <source src="/animation/working.mp4" type="video/mp4" />
                  </video>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 border border-white/10 p-3 rounded-xl backdrop-blur-md flex items-center justify-between text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-cyan-400" />
                      <span className="font-mono">Next.js 14 & TypeScript</span>
                    </div>
                    <span className="text-emerald-400 font-mono">Build Active</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
export default HeroSection;
