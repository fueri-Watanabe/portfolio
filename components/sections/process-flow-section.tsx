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
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface FlowStep {
  step: string;
  title: string;
  shortDesc: string;
  details: string[];
  point: string;
  icon: React.ElementType;
}

const FLOW_STEPS: FlowStep[] = [
  {
    step: "01",
    title: "ヒアリング・要件整理",
    shortDesc: "課題やご希望の機能、予算感を丁寧にお伺いします。",
    details: [
      "オンライン面談またはテキストチャットで柔軟に対応",
      "現状の業務フローを共有いただき課題を特定",
      "アイデア段階や仕様未定の状態でもご相談可能",
    ],
    point: "スピード相談・初回30分無料",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "見積もり提示・着手",
    shortDesc: "仕様範囲と納期、明朗な固定見積もりをご提示します。",
    details: [
      "予期せぬ追加費用が発生しないよう対応範囲を明確化",
      "ご予算に合わせた段階的な機能実装のご提案も可能",
      "ご契約確定後、即座に開発スケジュールを策定",
    ],
    point: "安心の明朗会計・不要な追加費ゼロ",
    icon: FileCheck,
  },
  {
    step: "03",
    title: "開発・中間プレビュー",
    shortDesc: "実機プレビューを共有し、確認しながらアジャイルに実装。",
    details: [
      "Next.js / TypeScript 等の最新スタックでクリーンに構築",
      "テストURLで実際の挙動を確認いただき認識ズレを防止",
      "チャットツール等で週次・日次の進捗をこまめに共有",
    ],
    point: "手戻りなし・実機での早期確認",
    icon: Code2,
  },
  {
    step: "04",
    title: "本番反映・納品",
    shortDesc: "各種デバイスでの検証・動作テストを経て本番デプロイ。",
    details: [
      "スマートフォン・タブレット・PC各端末での検証徹底",
      "各種クラウド環境（GCP / Vercel等）へ安全にデプロイ",
      "操作方法やコードの引き継ぎ・簡易マニュアルの提供",
    ],
    point: "各種環境テスト・安全デプロイ",
    icon: Rocket,
  },
  {
    step: "05",
    title: "アフター保守サポート",
    shortDesc: "納品後1ヶ月間の無償保証。継続運用も柔軟に対応します。",
    details: [
      "納品後1ヶ月以内に発覚した不具合は無償で迅速対応",
      "実際の運用開始後の細かな改善・機能追加のご相談も歓迎",
      "定額の月額保守やスポットでのメンテナンスも対応可能",
    ],
    point: "納品後1ヶ月の無償バグ保証付き",
    icon: ShieldCheck,
  },
];

export const ProcessFlowSection = () => {
  return (
    <section id="process-flow" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* セクションヘッダー */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <Badge variant="glow" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-900 bg-white">
            Process & Workflow
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-title tracking-tight">
            発注から納品・運用の{" "}
            <span className="bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
              流れ
            </span>
          </h2>

          <p className="text-slate-500 max-w-2xl text-base sm:text-lg">
            明確なステップと密なコミュニケーションで、安心・確実にプロジェクトを推進します。
          </p>
        </div>

        {/* 5ステップ図解カード */}
        <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-4 relative">
          {FLOW_STEPS.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === FLOW_STEPS.length - 1;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative flex flex-col"
              >
                <div
                  className="rounded-3xl p-5 sm:p-6 flex flex-col justify-between h-full bg-white border border-sky-100/90 shadow-[0_10px_32px_rgba(14,165,233,0.06),0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_45px_rgba(14,165,233,0.12)] hover:border-sky-300 hover:-translate-y-1 transition-all group"
                >
                  <div>
                    {/* ステップ番号 & アイコン */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-sky-50 border border-sky-100 text-sky-800 shadow-sm group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-teal-500 group-hover:text-white transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-lg font-extrabold font-mono text-sky-200/80 group-hover:text-sky-400/80 transition-colors">
                        {item.step}
                      </span>
                    </div>

                    {/* タイトル */}
                    <h3 className="text-base font-bold text-slate-900 font-title mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                      {item.shortDesc}
                    </p>

                    {/* 詳細箇条書き */}
                    <ul className="space-y-2 text-[11px] text-slate-600 mb-4">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 leading-tight">
                          <CheckCircle2 className="w-3 h-3 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 安心ポイントバッジ */}
                  <div className="pt-3 border-t border-slate-100">
                    <span className="inline-flex items-center justify-center text-[10px] font-bold text-sky-900 bg-sky-50/80 px-2 py-1 rounded-full border border-sky-200/60 w-full text-center">
                      <span>{item.point}</span>
                    </span>
                  </div>
                </div>

                {/* PC表示用のステップ間矢印 */}
                {!isLast && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white border border-sky-200 items-center justify-center shadow-sm pointer-events-none text-sky-600">
                    <ArrowRight className="w-3 h-3 text-sky-500" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* /process への誘導ボタン */}
        <div className="mt-12 text-center">
          <Link href="/process">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full px-5 py-2 text-xs font-semibold text-slate-700 hover:text-sky-950 border-slate-200 bg-white hover:bg-slate-50 shadow-sm gap-1.5 group"
            >
              <span>詳しい各工程の詳細・よくある質問（FAQ）を見る</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-700 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProcessFlowSection;
