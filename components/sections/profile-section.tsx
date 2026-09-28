"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";

const SKILLS = [
  "TypeScript",
  "Next.js",
  "Google Cloud",
  "Firebase",
  "GAS",
  "Python",
];

export const ProfileSection = () => {
  return (
    <section id="profile" className="py-20 md:py-32 relative z-10">
      {/* 上部のシームレス境界線 */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200/80 to-transparent" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* セクションヘッダー */}
        <div className="flex flex-col items-center text-center space-y-2.5 mb-10 sm:mb-12">
          <Badge variant="glow" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-1">
            Developer & Commitment
          </Badge>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 font-title tracking-tight">
            開発者について{" "}
            <span className="bg-gradient-to-r from-rose-500 to-red-600 bg-clip-text text-transparent">
              / Profile
            </span>
          </h2>

          <p className="text-slate-600 max-w-xl text-sm sm:text-base">
            窓口から実装・運用まで一貫担当。透明性とスピード感を持った開発をお届けします。
          </p>
        </div>

        {/* コンパクト＆高信頼なプロフィールカード */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-6 sm:p-9 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-sm relative overflow-hidden transition-all">

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-7">

                {/* 開発者アバター / アイキャッチ */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-rose-500 to-red-600 p-1 shadow-sm shadow-rose-500/15 flex items-center justify-center">
                    <div className="w-full h-full bg-slate-50 rounded-xl flex flex-col items-center justify-center p-2 text-slate-900 overflow-hidden relative">
                      <Image
                        src="/logo.webp"
                        alt="渡部 弘 (fueri)"
                        width={64}
                        height={64}
                        className="object-contain drop-shadow-sm"
                      />
                    </div>
                  </div>
                  <span className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-teal-50 text-teal-800 border border-teal-200/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                    一貫担当・受付中
                  </span>
                </div>

                {/* メインコンテンツ */}
                <div className="flex-1 space-y-4 text-center sm:text-left">
                  {/* 名前・肩書き */}
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-teal-700 tracking-wide uppercase">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                      <span>Full Stack Engineer & Web Developer</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 font-title mt-0.5">
                      渡部 弘{" "}
                      <span className="text-sm sm:text-base font-normal text-slate-500">
                        / Hiroshi Watanabe
                      </span>
                    </h3>
                  </div>

                  {/* 一言コミットメント（メッセージ） */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-slate-700 text-xs sm:text-sm leading-relaxed relative">
                    <p className="font-medium text-slate-800">
                      「ヒアリング・要件定義から設計、実装、納品後の運用サポートまで、すべて私（渡部）が直接一貫して対応いたします。伝言ゲームや認識のズレのない、スピード感を持った開発をお約束します。」
                    </p>
                  </div>

                  {/* 主要スキルバッジ */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                      Core Tech Stack:
                    </span>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-1.5">
                      {SKILLS.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-50/80 text-slate-700 border border-slate-200/80 shadow-2xs hover:border-rose-300 hover:text-rose-600 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 導線ボタン（ミニマル） */}
                  <div className="pt-2 sm:pt-3 border-t border-slate-100 flex justify-center sm:justify-start">
                    <Link href="/about">
                      <Button
                        variant="outline"
                        size="sm"
                        className="group text-xs font-semibold rounded-full px-4 py-2 border-slate-200 hover:border-rose-300 hover:bg-rose-50/30 bg-white text-slate-700 hover:text-rose-600 transition-all flex items-center gap-1.5 shadow-none"
                      >
                        <span>詳しい開発思想・経歴を見る</span>
                        <ArrowRight className="w-3.5 h-3.5 text-rose-500 group-hover:translate-x-1 transition-all" />
                      </Button>
                    </Link>
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

export default ProfileSection;
