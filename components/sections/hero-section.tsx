"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Code2, Terminal, CheckCircle2, Calculator } from "lucide-react";
import EstimateDiagnostic from "@/components/sections/estimate-diagnostic";

export const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<"diagnostic" | "preview">("diagnostic");

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-24 lg:pb-32 overflow-hidden bg-white">
      {/* 1. 白背景に溶け込む淡いオーシャン＆エメラルドのアンビエント光彩 */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[380px] bg-gradient-to-br from-sky-200/35 via-teal-100/30 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-24 right-10 w-[450px] h-[350px] bg-gradient-to-bl from-cyan-200/30 via-blue-100/25 to-transparent rounded-full blur-[110px] pointer-events-none" />

      {/* 2. 建築的グラフィック装飾（スカイブルーのオーバル長円＆斜線ハッチング） */}
      <div className="absolute top-24 right-8 lg:right-32 w-80 h-40 border border-sky-300/40 rounded-full pointer-events-none opacity-60 -rotate-6" />
      <div className="absolute top-32 right-14 lg:right-40 w-64 h-28 border border-teal-300/30 rounded-full pointer-events-none opacity-50 -rotate-6" />
      
      {/* 繊細な斜線ハッチング（ペールスカイライン） */}
      <div 
        className="absolute top-20 left-6 lg:left-24 w-36 h-20 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #0ea5e9 0, #0ea5e9 1px, transparent 0, transparent 8px)"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* 左カラム: キャッチコピー & アクション */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* ステータスバッジ（ペールスカイ・フロストガラス） */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-xs font-semibold border border-sky-200/90 bg-sky-50/70 text-sky-900 shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="tracking-tight">Available for Projects / 案件・開発相談受付中</span>
              </div>
            </motion.div>

            {/* メインタイトル / キャッチコピー */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="flex items-center gap-2.5 justify-center lg:justify-start"
              >
                <span className="text-xs sm:text-sm font-bold tracking-wider text-sky-700 uppercase font-mono">
                  Full-stack Web Engineering
                </span>
                <span className="w-8 h-[1.5px] bg-sky-300" />
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-6xl lg:text-[4.2rem] font-extrabold tracking-[-0.035em] text-slate-900 font-title leading-[1.06]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Engineering solutions <br className="hidden sm:inline" />
                <span className="font-light text-slate-400">that shape</span>{" "}
                <span className="bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  businesses
                </span>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl font-bold text-slate-800 pt-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                fueri / Hiroshi Watanabe — Web Developer
              </motion.p>

              <motion.p
                className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed pt-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Webアプリケーション開発・業務システム開発を通じてビジネス課題を解決。アイデアから設計・実装・クラウド運用まで、高い解像度と透明性をもって具現化します。
              </motion.p>
            </div>

            {/* クイック特徴リスト */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 bg-slate-50/90 border border-slate-200/80 px-4 py-1.5 rounded-full shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span className="font-medium">迅速なレスポンス</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50/90 border border-slate-200/80 px-4 py-1.5 rounded-full shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span className="font-medium">一貫担当・高解像度</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50/90 border border-slate-200/80 px-4 py-1.5 rounded-full shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span className="font-medium">最新モダンスタック</span>
              </div>
            </motion.div>

            {/* アクションボタン */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-3.5 pt-2 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link href="#projects" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-[#174668] to-[#286b8b] hover:from-[#113550] hover:to-[#205975] text-white font-bold shadow-lg shadow-sky-950/20 hover:scale-[1.02]"
                >
                  <span>プロダクト実績を見る</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <Link href="#contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border-slate-200/90 shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-teal-600" />
                  <span>開発のご相談・見積り</span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* 右カラム: インタラクティブ診断 & デモビジュアル */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-center relative w-full"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* 上部タブスイッチャー */}
            <div className="flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-full border border-slate-200/80 mb-4 shadow-sm">
              <button
                type="button"
                onClick={() => setActiveTab("diagnostic")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeTab === "diagnostic"
                    ? "bg-white text-[#174668] shadow-sm font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                <Calculator className="w-3.5 h-3.5 text-sky-700" />
                <span>30秒 概算見積り・課題診断</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("preview")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeTab === "preview"
                    ? "bg-white text-[#174668] shadow-sm font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                <Terminal className="w-3.5 h-3.5 text-sky-700" />
                <span>開発環境プレビュー</span>
              </button>
            </div>

            {/* タブコンテンツ（白背景カードが深みあるブルーに浮かぶ） */}
            <div className="w-full max-w-xl">
              <AnimatePresence mode="wait">
                {activeTab === "diagnostic" ? (
                  <motion.div
                    key="tab-diagnostic"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="w-full"
                  >
                    <EstimateDiagnostic />
                  </motion.div>
                ) : (
                  <motion.div
                    key="tab-preview"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="w-full"
                  >
                    <div className="relative rounded-3xl bg-white border border-slate-200/90 p-2 shadow-[0_16px_40px_rgba(14,165,233,0.08)] overflow-hidden group">
                      {/* 擬似ウィンドウヘッダー */}
                      <div className="flex items-center justify-between px-4 py-3 bg-slate-50/90 rounded-t-2xl border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-rose-400" />
                          <div className="w-3 h-3 rounded-full bg-amber-400" />
                          <div className="w-3 h-3 rounded-full bg-emerald-400" />
                        </div>
                        <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                          <Terminal className="w-3.5 h-3.5 text-sky-600" />
                          <span>fueri-workspace</span>
                        </div>
                      </div>

                      {/* 開発イメージ動画 */}
                      <div className="relative rounded-b-2xl overflow-hidden bg-slate-900 aspect-video sm:aspect-square flex items-center justify-center">
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

                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                        <div className="absolute bottom-4 left-4 right-4 bg-white/95 border border-sky-100 p-3 rounded-2xl shadow-lg flex items-center justify-between text-xs text-slate-800 backdrop-blur-md">
                          <div className="flex items-center gap-2">
                            <Code2 className="w-4 h-4 text-sky-700" />
                            <span className="font-mono font-medium">Next.js & TypeScript</span>
                          </div>
                          <span className="text-teal-600 font-mono font-bold flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse inline-block" />
                            Build Active
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
