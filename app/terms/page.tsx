import type { Metadata } from "next";
import Link from "next/link";
import ContactSection from "@/components/sections/contact-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Lock,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ご利用規約 & サポート保証規定 | fueri / フエリ",
  description:
    "fueri（フエリ）におけるWeb開発・業務自動化サービスのご利用条件、検収期間、1ヶ月無償バグ修正サポートの保証範囲および秘密保持規定についてご案内いたします。",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50/70 text-slate-800 pt-24 overflow-x-hidden">
      {/* 1. ページヘッダー */}
      <section className="py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-rose-600 transition-colors mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>トップページへ戻る</span>
          </Link>

          <div>
            <Badge
              variant="glow"
              className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-2"
            >
              Terms of Service & Quality Guarantee
            </Badge>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 font-title tracking-tight mt-1">
              ご利用規約 & サポート保証規定
            </h1>
          </div>

          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            fueri（フエリ）における開発サービスのご利用条件および納品後の保証範囲について
          </p>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>最終改定日: 2026年9月28日</span>
          </div>
        </div>
      </section>

      {/* 2. 規約本文コンテナ */}
      <section className="pb-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* 前文カード */}
          <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xs p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
              <FileText className="w-4 h-4 text-rose-500" />
              <span>はじめに</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              本規約は、fueri（以下「当スタジオ」）が提供するWebサイト制作、Webアプリケーション・システム開発、Google Apps Script（GAS）等による業務自動化、および関連する技術サポート業務（以下「本サービス」）のご利用条件、成果物の検収、および納品後の無償保証サポートの範囲を定めるものです。お客様（以下「クライアント」）が当スタジオへ発注またはご契約を締結された時点で、本規約に同意いただいたものとみなします。
            </p>
          </div>

          {/* 各条項リスト */}
          <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xs p-6 sm:p-10 divide-y divide-slate-100 space-y-8">
            
            {/* 第1条 */}
            <div className="space-y-3 pt-2 first:pt-0">
              <div className="flex items-center gap-2 text-base font-bold text-slate-800 font-title">
                <span className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center text-xs font-mono font-bold">
                  01
                </span>
                <h2>第1条（適用範囲と開発体制）</h2>
              </div>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2.5 pl-0 sm:pl-9">
                <p>
                  1. 本規約は、当スタジオがクライアントとの間で締結する受託開発業務、業務委託契約、保守契約、およびこれらに付随する一切の業務に適用されます。
                </p>
                <p>
                  2. 当スタジオでは、営業マージンや多重下請けによる認識齟齬を排除するため、代表（渡部 弘）が管理責任者としてヒアリング・要件整理・設計から実装・品質管理（QA）まで一貫して直接伴走・監理いたします。
                </p>
                <p>
                  3. 案件の規模や専門領域に応じて外部パートナーと連携する場合においても、当スタジオ代表が最終的なコード品質・動作検証の責任を担保いたします。
                </p>
              </div>
            </div>

            {/* 第2条 */}
            <div className="space-y-3 pt-8">
              <div className="flex items-center gap-2 text-base font-bold text-slate-800 font-title">
                <span className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center text-xs font-mono font-bold">
                  02
                </span>
                <h2>第2条（納品および検収）</h2>
              </div>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2.5 pl-0 sm:pl-9">
                <p>
                  1. 当スタジオは、成果物の開発および社内検証が完了した時点で、テスト環境・ステージング環境へのデプロイ、またはソースコード等の提供をもって納品といたします。
                </p>
                <p>
                  2. クライアントは、納品受領後、合意した要件および仕様に基づき速やかに動作検証（検収作業）を行っていただきます。
                </p>
                <p>
                  3. <strong>検収期間は「納品完了日から起算して14日間」</strong>とします。期間内にクライアントから具体的な不具合指摘や異議申し立てがない場合、当該期間の満了をもって検収合格（本検収完了）とみなします。
                </p>
              </div>
            </div>

            {/* 第3条 */}
            <div className="space-y-4 pt-8">
              <div className="flex items-center gap-2 text-base font-bold text-slate-800 font-title">
                <span className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center text-xs font-mono font-bold">
                  03
                </span>
                <h2>第3条（1ヶ月無償バグ修正保証の適用範囲）</h2>
              </div>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3 pl-0 sm:pl-9">
                <p>
                  当スタジオでは、クライアントが安心して運用を開始できるよう、全プラン標準で<strong>「検収完了日から1ヶ月間の無償バグ修正保証」</strong>を付帯しております。保証の適用範囲は以下の通りです。
                </p>

                {/* 無償対応範囲 */}
                <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-teal-900">
                    <CheckCircle2 className="w-4 h-4 text-teal-600" />
                    <span>【無償対応の対象となる範囲】</span>
                  </div>
                  <ul className="space-y-1 text-xs text-teal-950 pl-5 list-disc leading-relaxed">
                    <li>納品前に合意された要件仕様・設計を満たしていない動作不具合</li>
                    <li>当スタジオが記述したプログラム・スクリプト（GAS、フロントエンド、バックエンド等）に内在していたロジックエラーや例外停止</li>
                    <li>推奨動作環境における表示崩れ・レイアウトの破綻</li>
                  </ul>
                </div>

                {/* 適用外（有償対応） */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <AlertCircle className="w-4 h-4 text-rose-500" />
                    <span>【保証適用外（別途お見積り・有償対応となる事象）】</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600 pl-5 list-disc leading-relaxed">
                    <li>検収完了後に新たに要望された機能の追加、仕様変更、大幅なデザイン変更</li>
                    <li>連携先外部サービス（Google Cloud、Google Workspace、Slack、LINE、Stripe、外部Web API、各種OS/ブラウザのバージョンアップ等）の突然の仕様変更、API廃止、障害に起因する不具合</li>
                    <li>クライアントまたは第三者によるソースコード・スプレッドシート構造・設定値の改変や誤操作に起因する障害</li>
                    <li>天災、サイバー攻撃、ホスティングサーバー事業者の障害等、不可抗力に起因する動作停止</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 第4条 */}
            <div className="space-y-3 pt-8">
              <div className="flex items-center gap-2 text-base font-bold text-slate-800 font-title">
                <span className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center text-xs font-mono font-bold">
                  04
                </span>
                <h2>第4条（追加開発および修正の取り扱い）</h2>
              </div>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2.5 pl-0 sm:pl-9">
                <p>
                  1. 第3条の保証適用外となる機能追加・仕様変更、または保証期間経過後の保守・改修につきましては、都度内容をヒアリングの上、事前にお見積りおよび目安納期をご提示いたします。
                </p>
                <p>
                  2. 継続的なアップデートや定期メンテナンス、月次の相談サポートをご希望の場合は、月額保守プラン（月額5万円〜）にて柔軟に対応いたします。
                </p>
              </div>
            </div>

            {/* 第5条 */}
            <div className="space-y-3 pt-8">
              <div className="flex items-center gap-2 text-base font-bold text-slate-800 font-title">
                <span className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center text-xs font-mono font-bold">
                  05
                </span>
                <h2>第5条（秘密保持および個人情報保護）</h2>
              </div>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2.5 pl-0 sm:pl-9">
                <p>
                  1. 当スタジオは、本サービスの遂行にあたりクライアントより開示された営業秘密、技術情報、スプレッドシート等の業務データ、および顧客個人情報を厳重に管理し、機密を保持いたします。
                </p>
                <p>
                  2. クライアントの事前の書面（または電子メール等の合意）による承諾を得ることなく、第三者へ開示・漏洩いたしません。
                </p>
                <p>
                  3. 制作実績（ポートフォリオ）としての掲載可否については、事前にクライアントのご意向を確認し、非公開希望の案件や社内専用ツールの場合は社名・画面情報を伏せて取り扱うか、掲載を行いません。
                </p>
              </div>
            </div>

            {/* 第6条 */}
            <div className="space-y-3 pt-8">
              <div className="flex items-center gap-2 text-base font-bold text-slate-800 font-title">
                <span className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center text-xs font-mono font-bold">
                  06
                </span>
                <h2>第6条（責任の制限）</h2>
              </div>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2.5 pl-0 sm:pl-9">
                <p>
                  当スタジオの責に帰すべき事由によりクライアントに損害が生じた場合、当スタジオが負担する損害賠償額の上限は、理由の如何を問わず、当該損害の原因となった対象個別契約においてクライアントから実際に受領した開発費用の額を限度とします。
                </p>
              </div>
            </div>

          </div>

          {/* お問い合わせへの誘導バナー */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-bold text-rose-400">
                <HelpCircle className="w-4 h-4" />
                <span>規約・保証に関するお問い合わせ</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold">
                ご契約前のご不明点や個別NDAの締結も承っております
              </h3>
              <p className="text-xs text-slate-400">
                業務提携や社内セキュリティ規定に合わせた契約書の調整もお気軽にご相談ください。
              </p>
            </div>

            <Link href="/#contact" className="flex-shrink-0">
              <Button
                variant="primary"
                size="md"
                className="font-bold rounded-full text-xs px-6 py-2.5 bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white shadow-xs"
              >
                <span>無料相談・お問い合わせ</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* 3. お問い合わせセクション */}
      <ContactSection />
    </main>
  );
}
