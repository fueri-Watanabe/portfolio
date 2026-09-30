"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import EstimateDiagnostic from "@/components/sections/estimate-diagnostic";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 md:pb-28 lg:pb-32 overflow-hidden bg-slate-50">
      {/* 1. リッチなNeo-Glassアンビエントグラデーションオーブ（Violet + Indigo + Cyan） */}
      <div className="absolute top-10 left-1/4 w-[720px] h-[540px] bg-gradient-to-r from-violet-400/25 via-indigo-300/20 to-cyan-400/25 rounded-full blur-3xl opacity-40 pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute top-36 right-4 w-[600px] h-[480px] bg-gradient-to-bl from-cyan-400/20 via-violet-300/20 to-transparent rounded-full blur-3xl opacity-35 pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-[520px] h-[400px] bg-gradient-to-tr from-indigo-300/20 via-cyan-200/25 to-violet-200/20 rounded-full blur-3xl opacity-30 pointer-events-none" />

      {/* 2. 微細なNeo-Glassグリッド背景 */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none"
      />

      {/* 3. 建築的グラフィック装飾（微細なフロストサークル & デコレーティブライン） */}
      <div className="absolute top-20 right-8 lg:right-32 w-80 h-40 border border-cyan-300/40 rounded-full pointer-events-none opacity-40 -rotate-6" />
      <div className="absolute top-28 right-14 lg:right-40 w-64 h-28 border border-violet-300/40 rounded-full pointer-events-none opacity-50 -rotate-6" />
      <div className="absolute top-1/2 left-6 w-24 h-24 border border-indigo-200/30 rounded-2xl rotate-12 pointer-events-none hidden sm:block" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* 左カラム: キャッチコピー & 3Dビジュアル & アクション */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-7"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* ステータスバッジ（Neo-Glassフロストバッジ） */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full text-xs font-semibold border border-slate-200/80 bg-white/80 backdrop-blur-xl text-slate-700 shadow-glass hover:border-violet-300/80 hover:ring-1 hover:ring-violet-500/20 transition-all">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
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
                <span className="text-xs sm:text-sm font-bold tracking-wider text-violet-600 uppercase font-mono">
                  WEB ENGINEERING & AUTOMATION STUDIO
                </span>
                <span className="w-8 h-[1.5px] bg-violet-500/40" />
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-5xl lg:text-[3.2rem] xl:text-[3.6rem] font-extrabold tracking-tight text-slate-800 font-title leading-[1.3] sm:leading-[1.35]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                中小企業・スタートアップのDX推進を加速させる、<br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent inline-block sm:mt-1">
                  Webシステム開発・業務自動化。
                </span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg font-bold text-slate-700 pt-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Webシステム開発スタジオ fueri
              </motion.p>

              <motion.p
                className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed pt-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                「仕様が決まっていない」「どこに頼むべきか分からない」段階からご相談いただけます。現場の業務効率化・社内ツールDXから、Next.jsによるWebシステム開発、新規事業のMVP開発・SaaS構築まで、現場に寄り添う高い解像度で具現化します。
              </motion.p>
            </div>

            {/* クイック特徴リスト（Neo-Glassフロストピル） */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-slate-200/80 px-4 py-2 rounded-full shadow-2xs hover:border-violet-300/80 hover:ring-1 hover:ring-violet-500/20 hover:shadow-glass hover:-translate-y-0.5 transition-all">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                <span className="font-medium">スピード着手 & 直通レス</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-slate-200/80 px-4 py-2 rounded-full shadow-2xs hover:border-violet-300/80 hover:ring-1 hover:ring-violet-500/20 hover:shadow-glass hover:-translate-y-0.5 transition-all">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                <span className="font-medium">責任ある専任ディレクション</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-slate-200/80 px-4 py-2 rounded-full shadow-2xs hover:border-violet-300/80 hover:ring-1 hover:ring-violet-500/20 hover:shadow-glass hover:-translate-y-0.5 transition-all">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                <span className="font-medium">高品質なモダンスタック</span>
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
                  className="w-full sm:w-auto font-bold shadow-glass hover:shadow-glass-hover"
                >
                  <span>開発実績を見る</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <Link href="#contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-white/80 backdrop-blur-md hover:bg-white text-slate-700 hover:text-violet-700 border-slate-200/90 hover:border-violet-300 shadow-glass"
                >
                  <Sparkles className="w-4 h-4 text-cyan-500" />
                  <span>無料相談・概算見積もり</span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* 右カラム: インタラクティブ概算見積もり・課題診断 & 透過3Dオブジェクト */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-center relative w-full"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* 3D透過アートオブジェクト（右上・背面に浮遊配置） */}
            <div className="absolute -top-14 sm:-top-20 -right-6 sm:-right-12 z-0 pointer-events-none select-none">
              {/* 背面の鮮やかなオーロラグロー */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-violet-500/25 via-indigo-500/20 to-cyan-500/25 rounded-full blur-3xl opacity-80" />

              {/* 浮遊モーション適用 */}
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 1.5, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-44 sm:w-56 md:w-64 lg:w-72 aspect-square opacity-85 sm:opacity-95 drop-shadow-[0_20px_35px_rgba(99,102,241,0.22)]"
              >
                <Image
                  src="/images/hero-3d.webp"
                  alt="fueri 3D Cloud Architecture"
                  fill
                  sizes="(max-width: 640px) 180px, (max-width: 1024px) 240px, 300px"
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>

            {/* 積算シミュレーター本体（z-10で前面に配置） */}
            <div className="w-full relative z-10">
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
