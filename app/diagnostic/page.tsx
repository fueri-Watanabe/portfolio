import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EstimateDiagnostic } from "@/components/sections/estimate-diagnostic";
import ContactSection from "@/components/sections/contact-section";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Zap, Sparkles, CheckCircle2, ArrowDown } from "lucide-react";

export const metadata: Metadata = {
  title: "30秒でわかるWeb開発・GAS自動化 概算見積シミュレーター",
  description:
    "業務自動化、Web制作、SaaS・Webアプリ構築の概算金額と納期が30秒でわかるリアルタイム積算シミュレーター。",
  openGraph: {
    title: "30秒でわかるWeb開発・GAS自動化 概算見積シミュレーター | fueri",
    description:
      "業務自動化、Web制作、SaaS・Webアプリ構築の概算金額と納期が30秒でわかるリアルタイム積算シミュレーター。",
    type: "website",
  },
};

export default function DiagnosticLPPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden pt-28 pb-16">
      {/* 背景装飾（オーブ＆グリッド） */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-violet-400/15 via-indigo-400/10 to-cyan-400/15 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* LPヘッドラインエリア */}
        <div className="text-center space-y-4 max-w-3xl mx-auto pt-2 sm:pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-violet-200/80 shadow-2xs backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span className="text-xs font-bold bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
              登録不要・30秒で即時算出
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 font-title tracking-tight leading-[1.25]">
            Webシステム開発・業務自動化の
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              リアルタイム積算シミュレーター
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            「仕様が決まっていない」「いくらかかるか見当もつかない」段階でも大丈夫です。
            必要な機能を選択するだけで、概算費用と目安納期がリアルタイムに算出されます。
          </p>

          {/* 3大安心ポイントピル */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs text-slate-700 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-slate-200/80 shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
              代表直通・伝言ゲームゼロ
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-slate-200/80 shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
              30日間無償バグ修正保証
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-slate-200/80 shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
              中間マージンなしの適正価格
            </span>
          </div>
        </div>

        {/* 1. 積算シミュレーター本体 (全画面ワイドカード) */}
        <div className="w-full">
          <EstimateDiagnostic />
        </div>

        {/* 代表プロフィール ＆ 信頼バッジ（簡易版） */}
        <div className="max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-500 flex-shrink-0 shadow-2xs">
              <div className="w-full h-full bg-white rounded-full overflow-hidden">
                <Image
                  src="/myicon.webp"
                  alt="渡部 弘"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-slate-800">渡部 弘</span>
                <span className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                  代表 / フルスタックエンジニア
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                窓口から要件定義・実装・運用保守まで責任を持って直通対応いたします。
              </p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <a
              href="#contact"
              className="text-xs font-semibold text-violet-600 hover:text-violet-700 bg-violet-50/80 hover:bg-violet-100 border border-violet-200 px-3.5 py-1.5 rounded-full flex items-center gap-1 transition-colors"
            >
              <span>直接相談する</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 2. 動的お問い合わせフォーム */}
        <div className="pt-8">
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
