import type { Metadata } from "next";
import RoadmapSection from "@/components/sections/roadmap";
import ContactSection from "@/components/sections/contact-section";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "代表プロフィール・開発理念 | fueri / Hiroshi Watanabe",
  description: "Web Developer / フルスタックエンジニア 渡部 弘（Hiroshi Watanabe）のプロフィール、開発へのこだわり・理念、これまでの成長軌跡をご紹介します。",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50/70 text-slate-800 pt-24 overflow-x-hidden">

      {/* 1. ページヘッダー */}
      <section className="py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <Badge variant="glow" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-1">
            About Developer & Philosophy
          </Badge>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-800 font-title tracking-tight">
            代表プロフィール・開発理念
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            お客様と同じ目線で課題に向き合い、成果に直結するモダンなWebソリューションを一貫して提供します。
          </p>
        </div>
      </section>

      {/* 2. プロフィール詳細 & 理念 */}
      <section className="py-8 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-slate-200/80 shadow-xs p-8 sm:p-12 space-y-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-slate-100 pb-8">
              <div className="w-24 h-24 rounded-3xl bg-rose-50/70 border border-rose-100 p-2 flex-shrink-0 shadow-2xs flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center text-rose-500 shadow-2xs">
                  <Code2 className="w-10 h-10 text-rose-500" />
                </div>
              </div>
              <div className="text-center sm:text-left space-y-1">
                <span className="text-xs font-mono font-semibold text-rose-600 uppercase tracking-wider">
                  個人事業主 fueri（フエリ） 代表
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 font-title">
                  渡部 弘 <span className="text-base sm:text-lg font-normal text-slate-500">/ Hiroshi Watanabe</span>
                </h2>
                <p className="text-xs text-slate-500">
                  拠点: 日本国内（リモート全国対応） / 専門: Web開発・業務効率化・Next.jsフルスタック
                </p>
              </div>
            </div>

            {/* 開発へのこだわり・3つの哲学 */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-rose-500" />
                <span>受託開発における3つのこだわり</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                    <Target className="w-4 h-4 text-rose-500" />
                    <span>01. 目的志向の実装</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    「言われた通りの仕様」を作るだけでなく、「何のためにその機能が必要なのか」「業務の手間が本当に減るか」を最重要視して設計します。
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                    <HeartHandshake className="w-4 h-4 text-teal-600" />
                    <span>02. 誠実でオープンな対話</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    技術用語に頼らず平易な言葉で説明し、進捗や課題は包み隠さず共有。安心してお任せいただける関係性を築きます。
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                    <ShieldCheck className="w-4 h-4 text-teal-600" />
                    <span>03. クリーンで保守性の高い設計</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    TypeScriptの型安全性とNext.jsの規約に沿った設計により、将来の機能追加や他メンバーへの引き継ぎもスムーズに行えます。
                  </p>
                </div>
              </div>
            </div>

            {/* 代表メッセージ */}
            <div className="space-y-3 pt-6 border-t border-slate-100 text-sm text-slate-600 leading-relaxed">
              <h3 className="text-base font-bold text-slate-800">代表メッセージ</h3>
              <p>
                個人事業主や中小企業にとって、ITツールやWebサイトの導入は大きな投資です。「せっかく費用をかけたのに使いづらかった」「大手開発会社では細かい要望を聞いてもらえなかった」というお声を多く伺います。
              </p>
              <p>
                私自身が現場で自作SaaSやWebアプリを開発・運用してきた経験があるからこそ、机上の空論ではない、現場に即した本当に役に立つシステムを適正価格でご提供できます。どんな小さな疑問やお困りごとでも、お気軽にお話しいただければ幸いです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 成長の軌跡 */}
      <RoadmapSection />

      {/* 4. お問い合わせ */}
      <ContactSection />

    </main>
  );
}
