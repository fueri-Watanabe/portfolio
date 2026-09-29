"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  FileCheck,
  Code2,
  Rocket,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

interface MiniFlowStep {
  step: string;
  title: string;
  summary: string;
  icon: React.ElementType;
}

const MINI_STEPS: MiniFlowStep[] = [
  {
    step: "01",
    title: "ヒアリング",
    summary: "課題や予算感を丁寧にお伺い（初回30分無料）",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "見積・着手",
    summary: "仕様確定と追加費ゼロの明朗固定見積もり提示",
    icon: FileCheck,
  },
  {
    step: "03",
    title: "開発・プレビュー",
    summary: "実機URLで進捗共有しながら手戻りなく実装",
    icon: Code2,
  },
  {
    step: "04",
    title: "本番反映",
    summary: "各種端末検証・安全デプロイ・マニュアル付帯",
    icon: Rocket,
  },
  {
    step: "05",
    title: "保守サポート",
    summary: "納品後1ヶ月の無償バグ保証・継続運用対応",
    icon: ShieldCheck,
  },
];

export const ProcessFlowSection = () => {
  return (
    <section id="process-flow" className="py-16 md:py-24 relative z-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* セクションヘッダー */}
        <div className="flex flex-col items-center text-center space-y-2.5 mb-12 sm:mb-14">
          <Badge variant="glow" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-1">
            Process & Workflow
          </Badge>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 font-title tracking-tight">
            発注から納品・運用の{" "}
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              流れ
            </span>
          </h2>

          <p className="text-slate-600 max-w-xl text-sm sm:text-base">
            明確なステップと代表直通のコミュニケーションで、安心・確実にプロジェクトを推進します。
          </p>
        </div>

        {/* コンパクト 5ステップ・ミニタイムライン (PC: 5列横並び) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 relative">
          {MINI_STEPS.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === MINI_STEPS.length - 1;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="relative flex flex-col"
              >
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-violet-300 hover:ring-1 hover:ring-violet-500/20 transition-all duration-200 h-full flex flex-col justify-between group">
                  <div className="space-y-2.5">
                    {/* ステップ番号 & アイコン */}
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-violet-50/70 border border-violet-100 text-violet-600 group-hover:scale-105 group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-cyan-600 group-hover:text-white transition-all shadow-2xs">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-extrabold font-mono text-slate-300 group-hover:text-violet-500/40 transition-colors">
                        STEP {item.step}
                      </span>
                    </div>

                    {/* タイトル */}
                    <h3 className="text-sm sm:text-base font-bold text-slate-800 font-title group-hover:text-violet-600 transition-colors">
                      {item.title}
                    </h3>

                    {/* 1行要約 */}
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </div>

                {/* PC表示用のステップ間矢印 */}
                {!isLast && (
                  <div className="hidden lg:flex absolute top-1/2 -right-2.5 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-white border border-slate-200 items-center justify-center shadow-2xs pointer-events-none text-slate-400">
                    <ArrowRight className="w-2.5 h-2.5 text-violet-500" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* /process への誘導ボタン */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link href="/process">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full px-6 py-2.5 text-xs font-semibold text-slate-700 hover:text-violet-600 border-slate-200 hover:border-violet-300 bg-white hover:bg-slate-50 shadow-2xs gap-1.5 group"
            >
              <span>詳しい各工程の詳細・よくある質問（FAQ）を見る</span>
              <ArrowRight className="w-3.5 h-3.5 text-violet-500 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProcessFlowSection;
