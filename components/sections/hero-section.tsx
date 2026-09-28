"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import EstimateDiagnostic from "@/components/sections/estimate-diagnostic";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 md:pb-28 lg:pb-32 overflow-hidden bg-slate-50/70">
      {/* 1. ライト背景に溶け込む柔らかなローズ＆ティールのアンビエント光彩 */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[450px] bg-gradient-to-br from-rose-100/50 via-teal-50/30 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-24 right-10 w-[550px] h-[400px] bg-gradient-to-bl from-rose-100/40 via-slate-100/40 to-transparent rounded-full blur-[150px] pointer-events-none" />

      {/* 2. 建築的グラフィック装飾（やわらかなライトグレー＆ローズ） */}
      <div className="absolute top-24 right-8 lg:right-32 w-80 h-40 border border-slate-200 rounded-full pointer-events-none opacity-60 -rotate-6" />
      <div className="absolute top-32 right-14 lg:right-40 w-64 h-28 border border-rose-200/70 rounded-full pointer-events-none opacity-60 -rotate-6" />
      
      {/* 繊細な斜線ハッチング */}
      <div 
        className="absolute top-20 left-6 lg:left-24 w-36 h-20 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #f43f5e 0, #f43f5e 1px, transparent 0, transparent 8px)"
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* 左カラム: キャッチコピー & アクション */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* ステータスバッジ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-xs font-semibold border border-slate-200/90 bg-white text-slate-700 shadow-xs backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
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
                <span className="text-xs sm:text-sm font-bold tracking-wider text-rose-600 uppercase font-mono">
                  Full-stack Web Engineering
                </span>
                <span className="w-8 h-[1.5px] bg-rose-500/40" />
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-[3.8rem] xl:text-[4.2rem] font-extrabold tracking-[-0.035em] text-slate-800 font-title leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Engineering solutions <br className="hidden sm:inline" />
                <span className="font-light text-slate-400">that shape</span>{" "}
                <span className="bg-gradient-to-r from-rose-500 to-red-600 bg-clip-text text-transparent">
                  businesses
                </span>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl font-bold text-slate-700 pt-1"
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
              <div className="flex items-center gap-2 bg-white border border-slate-200/90 px-4 py-2 rounded-full shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span className="font-medium">迅速なレスポンス</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200/90 px-4 py-2 rounded-full shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span className="font-medium">一貫担当・高解像度</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200/90 px-4 py-2 rounded-full shadow-xs">
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
                  className="w-full sm:w-auto font-bold shadow-sm hover:shadow-md hover:shadow-rose-500/20"
                >
                  <span>プロダクト実績を見る</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <Link href="#contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 hover:text-rose-600 border-slate-200 hover:border-rose-300 shadow-xs"
                >
                  <Sparkles className="w-4 h-4 text-rose-500" />
                  <span>開発のご相談・見積り</span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* 右カラム: インタラクティブ概算見積もり・課題診断 */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-center relative w-full"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="w-full">
              <EstimateDiagnostic />
            </div>
          </motion.div>

        </div>
      </div>

      {/* セクション下部のシームレス・フェードグラデーション境界線 */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200/90 to-transparent" />
    </section>
  );
};

export default HeroSection;
