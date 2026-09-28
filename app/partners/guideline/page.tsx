import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Code2,
  CheckCircle2,
  AlertCircle,
  FileText,
  Clock,
  MessageSquare,
  ShieldCheck,
  Lock,
  ArrowLeft,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "パートナー品質 & 開発ガイドライン | fueri / フエリ",
  description:
    "fueri（フエリ）における協業パートナー（フリーランス・副業エンジニア・デザイナー）向けの開発品質基準、チームコミュニケーション、納品・バグ対応フローに関するガイドラインです。",
};

export default function PartnerGuidelinePage() {
  return (
    <main className="min-h-screen bg-slate-50/70 text-slate-800 pt-24 pb-20 overflow-x-hidden">
      {/* 1. ページヘッダー */}
      <section className="py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-4 text-xs text-slate-600 mb-2">
            <Link
              href="/partners"
              className="inline-flex items-center gap-1.5 hover:text-rose-600 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>パートナー募集トップへ戻る</span>
            </Link>
            <span className="text-slate-300">|</span>
            <Link
              href="/"
              className="hover:text-rose-600 transition-colors"
            >
              ホーム
            </Link>
          </div>

          <div>
            <Badge
              variant="teal"
              className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-2"
            >
              Partner Quality & Development Guideline
            </Badge>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 font-title tracking-tight mt-1">
              パートナー品質 & 開発ガイドライン
            </h1>
          </div>

          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            fueri（フエリ）における開発品質基準、チームコミュニケーション、納品フローについて
          </p>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>最終改定日: 2026年9月28日</span>
          </div>
        </div>
      </section>

      {/* 2. 本文コンテナ */}
      <section className="pb-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* 前文カード */}
          <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xs p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
              <FileText className="w-4 h-4 text-teal-600" />
              <span>本ガイドラインの目的</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              本ガイドラインは、fueri（以下「当スタジオ」）と共にクライアント案件を推進する外部パートナー（フリーランス・副業エンジニア、デザイナー、クリエイター）の皆様に向け、成果物の品質担保、円滑なチーム協業、および納品後の運用サポートに関する共通基準を定めたものです。クライアントに高品質な価値を提供し、パートナー自身も安心して開発に集中できるよう、本基準へのご理解とご協力をお願いいたします。
            </p>
          </div>

          {/* 各条項カード */}
          <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xs p-6 sm:p-10 divide-y divide-slate-100 space-y-8">
            
            {/* 第1条 */}
            <div className="space-y-3 pt-2 first:pt-0">
              <div className="flex items-center gap-2 text-base font-bold text-slate-800 font-title">
                <span className="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center text-xs font-mono font-bold">
                  01
                </span>
                <h2>第1条（開発体制と役割分担）</h2>
              </div>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2.5 pl-0 sm:pl-9">
                <p>
                  1. <strong>代表ディレクション体制:</strong> 案件獲得、顧客折衝、要件定義、基本設計、予算管理、契約手続き、および最終品質責任（QA検証）は、当スタジオ代表（渡部 弘）が責任を持って担当いたします。
                </p>
                <p>
                  2. <strong>パートナーのアサイン:</strong> パートナーには、各プロジェクトの得意領域（フロントエンド実装、API・DB設計、GAS業務自動化、UIデザイン等）の専門タスクをアサインいたします。営業や顧客との複雑な交渉に煩わされることなく、制作・実装に専念していただけます。
                </p>
              </div>
            </div>

            {/* 第2条 */}
            <div className="space-y-4 pt-8">
              <div className="flex items-center gap-2 text-base font-bold text-slate-800 font-title">
                <span className="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center text-xs font-mono font-bold">
                  02
                </span>
                <h2>第2条（品質基準とコードクオリティ）</h2>
              </div>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 pl-0 sm:pl-9">
                <p>
                  クライアントの長期的な保守性と運用性を確保するため、以下の技術基準を遵守してください。
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                      <Code2 className="w-4 h-4 text-rose-500" />
                      <span>TypeScriptによる厳格な型定義</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      型安全性を重視し、安易な <code>any</code> 型の使用を禁止します。インターフェースやジェネリクスを適切に設計してください。
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                      <Sparkles className="w-4 h-4 text-teal-600" />
                      <span>マルチデバイス・レスポンシブ</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      PC・タブレット・スマートフォン各端末の実機・エミュレータにてレイアウト崩れや操作阻害がないことを検証してください。
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                      <AlertCircle className="w-4 h-4 text-amber-500" />
                      <span>例外処理とログ設計</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      API通信失敗や不正入力時に画面がクラッシュしないよう、<code>try-catch</code>、適切なエラーハンドリング、ログ出力を設けてください。
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-teal-600" />
                      <span>クリーンアーキテクチャ</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      再利用性を意識したコンポーネント分割、CSSフレームワーク（Tailwind CSS等）の命名規約を遵守してください。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 第3条 */}
            <div className="space-y-3 pt-8">
              <div className="flex items-center gap-2 text-base font-bold text-slate-800 font-title">
                <span className="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center text-xs font-mono font-bold">
                  03
                </span>
                <h2>第3条（ドキュメントとマニュアル作成）</h2>
              </div>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2.5 pl-0 sm:pl-9">
                <p>
                  1. 納品物は「作って終わり」ではなく、非エンジニアのクライアント担当者が社内で属人化せず運用できる状態を目指します。
                </p>
                <p>
                  2. 納品時には、機能概要、初期設定方法、日々の更新手順をまとめた簡易操作マニュアル（Notion、Markdown、または指定テンプレート）の作成・提出をお願いいたします。
                </p>
              </div>
            </div>

            {/* 第4条 */}
            <div className="space-y-3 pt-8">
              <div className="flex items-center gap-2 text-base font-bold text-slate-800 font-title">
                <span className="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center text-xs font-mono font-bold">
                  04
                </span>
                <h2>第4条（コミュニケーションと納期管理）</h2>
              </div>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2.5 pl-0 sm:pl-9">
                <p>
                  1. <strong>連絡レスポンス:</strong> 案件進行中は、Slack、Chatwork等の連絡に対し、原則として<strong>営業日24時間以内</strong>の一次返信を行ってください。
                </p>
                <p>
                  2. <strong>早期アラート義務:</strong> 万が一、体調不良、本業の都合、技術的課題等によりスケジュールの遅延リスクが生じた場合は、納期間際ではなく<strong>遅延の懸念が生じた時点で直ちに代表へ連絡・相談</strong>してください。代表側で仕様調整や代替リソースの確保を迅速に行います。
                </p>
              </div>
            </div>

            {/* 第5条 */}
            <div className="space-y-3 pt-8">
              <div className="flex items-center gap-2 text-base font-bold text-slate-800 font-title">
                <span className="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center text-xs font-mono font-bold">
                  05
                </span>
                <h2>第5条（納品後のバグ修正対応）</h2>
              </div>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2.5 pl-0 sm:pl-9">
                <p>
                  1. 当スタジオは全プランでクライアントへ「納品後1ヶ月間の無償バグ保証」を付帯しています。
                </p>
                <p>
                  2. パートナーが担当した実装範囲において、納品後1ヶ月以内に合意要件を満たさない動作不具合（プログラム起因のバグ）が発覚した場合、原則として担当パートナーにて優先的かつ無償での修正対応をお願いいたします。
                </p>
                <p>
                  3. なお、クライアント側の都合による追加機能要望や仕様変更については、別途追加工数として報酬をお支払いいたします。
                </p>
              </div>
            </div>

            {/* 第6条 */}
            <div className="space-y-3 pt-8">
              <div className="flex items-center gap-2 text-base font-bold text-slate-800 font-title">
                <span className="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center text-xs font-mono font-bold">
                  06
                </span>
                <h2>第6条（秘密保持および競合避止）</h2>
              </div>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2.5 pl-0 sm:pl-9">
                <p>
                  1. 案件を通じて知り得たクライアントの事業計画、社内データ、ソースコード、顧客個人情報等は機密情報として厳重に管理し、SNS等での無断公開・第三者への漏洩を固く禁じます（契約時に個別秘密保持契約（NDA）を締結します）。
                </p>
                <p>
                  2. 当スタジオを通じて参画したクライアントに対し、当スタジオを介さず直接契約や営業を持ちかける行為（中抜き行為）は禁止といたします。
                </p>
              </div>
            </div>

          </div>

          {/* 応募導線バナー */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-bold text-teal-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Join Our Partner Network</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold">
                上記ガイドラインにご賛同いただける方のエントリーをお待ちしています
              </h3>
              <p className="text-xs text-slate-400">
                副業・フリーランス問わず、得意分野を活かしてプロジェクトに参画いただけます。
              </p>
            </div>

            <Link href="/partners#partner-form" className="flex-shrink-0">
              <Button
                variant="primary"
                size="md"
                className="font-bold rounded-full text-xs px-6 py-2.5 bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white shadow-xs"
              >
                <span>パートナー登録フォームへ進む</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
