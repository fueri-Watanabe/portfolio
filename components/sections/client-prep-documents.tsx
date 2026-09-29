"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileText,
  ShieldCheck,
  Copy,
  Check,
  ChevronDown,
  Sparkles,
  ExternalLink,
  Info,
} from "lucide-react";

export const HEARING_SHEET_MD = `# fueri 初回課題ヒアリングシート

ご回答可能な範囲でご入力・共有をお願いいたします。（※未定・検討中の項目は空欄のままで構いません）

---

### 【1. 基本情報】
・貴社名（屋号）: 
・ご担当者様のお名前: 
・ご連絡先メールアドレス: 
・貴社WebサイトURL（既存サイトがある場合）: 

---

### 【2. プロジェクトの背景・課題】
1. 今回のご相談・開発の目的は何ですか？（複数選択可）
   [ ] 業務手作業（転記・通知等）の自動化・効率化
   [ ] 新規Webサービス・SaaSのMVP開発
   [ ] 既存Webサイト・LPの刷新（爆速化・デザイン改善・CVR向上）
   [ ] 既存システムの保守・機能改修
   [ ] その他（               ）

2. 現在抱えている具体的な課題・お悩みをお教えください。
   （例: 「毎月20時間スプレッドシートから手動で転記していてミスが発生する」「既存サイトが重くスマホからの問い合わせが少ない」など）
   ⇒ 

---

### 【3. 要件・機能イメージ】
1. 実装したい主な機能・成果物のイメージ（箇条書きでOK）
   ⇒ 

2. 既存で利用されているツールや連携したいサービスはありますか？
   （例: Googleスプレッドシート, Gmail, Slack, Stripe, Supabase, Vercel 等）
   ⇒ 

---

### 【4. 予算感・スケジュール】
1. 希望納期・稼働開始時期
   [ ] 可能な限り最短（要相談）
   [ ] 1ヶ月以内
   [ ] 2〜3ヶ月以内
   [ ] 特に急がない・相談して決定

2. ご予算感（概算）
   [ ] 〜30万円
   [ ] 30万円〜50万円
   [ ] 50万円〜100万円
   [ ] 100万円以上
   [ ] 要件に合わせて提案してほしい

---

### 【5. その他・ご質問・ご要望】
・参考となる競合サイト・類似サービスURLや、事前に共有したい資料などがあればご記入ください。
   ⇒ `;

export const PROPOSAL_TERMS_MD = `# fueri 標準見積・提案注記文面（特記事項）

本ドキュメントは、fueri（フエリ）が発行する各種お見積書・ご提案書における標準取引条件および特記事項です。

---

## 1. お見積の有効期限
- 本お見積書の有効期限は、発行日より「1ヶ月間」とさせていただきます。

## 2. 対象スコープおよび追加修正について
- 本お見積金額は、ご提案書に明記された仕様・作業範囲に基づき算出しております。
- 仕様確定後のお客様都合による大幅な仕様変更、画面の追加、および機能追加につきましては、別途再見積もり（追加費用・納期調整）のご相談をさせていただく場合がございます。

## 3. 外部サービス・サードパーティ費用について
- ドメイン取得費用、Webサーバー／クラウド利用料（Vercel, Supabase, Google Cloud, Firebase等）、外部API利用料（Stripe, Google Gemini API等）、および各種有料ライセンス費用は、お客様ご負担（実費）となります。

## 4. お客様ご提供資料・確認作業について
- 開発に必要なテキスト原稿、ロゴ、画像素材、既存環境のアカウント権限等は、スケジュールに沿ってご提供をお願いいたします。
- ご提供資料の遅延や、プレビュー確認時の検収遅延が発生した場合、納品スケジュールが変動する可能性がございます。

## 5. 検収期間および保守保証について
- 本番反映・納品後「30日間」を初期検証期間とし、この期間内に発見された検収不具合（仕様通りの挙動が行われない場合）につきましては、無償にて速やかに修正対応いたします。
- 納品後30日を経過した後の機能追加・改善要望、または外部環境（ブラウザ、OS、外部API仕様）の仕様変更に起因する影響につきましては、別途スポット保守または月額保守サポートにて対応させていただきます。

## 6. 著作権および成果物の帰属
- 開発・納品した成果物（Webサイト、ソースコード、プログラム）の著作権は、対価の全額お支払い完了をもってお客様へ移転・譲渡いたします。ただし、汎用的なライブラリや開発ノウハウ、フレームワークの基礎コードに関する権利は除きます。`;

export const ClientPrepDocuments = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"hearing" | "terms">("hearing");
  const [copied, setCopied] = useState<"hearing" | "terms" | null>(null);

  const handleCopy = async (type: "hearing" | "terms") => {
    const text = type === "hearing" ? HEARING_SHEET_MD : PROPOSAL_TERMS_MD;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2500);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const currentContent = activeTab === "hearing" ? HEARING_SHEET_MD : PROPOSAL_TERMS_MD;

  return (
    <div className="w-full mt-10">
      {/* トリガーカード */}
      <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 p-5 sm:p-6 shadow-glass hover:border-violet-300/80 hover:ring-1 hover:ring-violet-500/20 transition-all duration-300">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-50 text-cyan-800 border border-cyan-200/80">
                <Sparkles className="w-3 h-3 text-cyan-600" />
                <span>安心のお約束 & 事前準備ドキュメント</span>
              </span>
            </div>
            <h4 className="text-sm sm:text-base font-bold text-slate-800 font-title">
              初回ヒアリングシート ＆ 標準見積・契約条件（コピー用Markdown）
            </h4>
            <p className="text-xs text-slate-600">
              Notionや社内メモへワンクリックで貼り付けて、相談前の社内要件整理やお取引条件の確認にご活用いただけます。
            </p>
          </div>

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full px-4 py-2 text-xs font-semibold bg-white border-slate-200 hover:border-violet-300 text-slate-700 hover:text-violet-700 shadow-2xs gap-1.5 flex-shrink-0"
          >
            <span>{isOpen ? "閉じる" : "ドキュメントを展開して確認・コピー"}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </div>

        {/* 展開エリア */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden pt-5 mt-5 border-t border-slate-200/80"
            >
              {/* タブ切り替えバー */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <button
                    type="button"
                    onClick={() => setActiveTab("hearing")}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      activeTab === "hearing"
                        ? "bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>1. 初回課題ヒアリングシート</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("terms")}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      activeTab === "terms"
                        ? "bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>2. 標準見積・契約条件（30日保証等）</span>
                  </button>
                </div>

                {/* Markdownコピーボタン */}
                <Button
                  type="button"
                  size="sm"
                  onClick={() => handleCopy(activeTab)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs ${
                    copied === activeTab
                      ? "bg-cyan-600 text-white hover:bg-cyan-600"
                      : "bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 text-white hover:opacity-95"
                  }`}
                >
                  {copied === activeTab ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span>Markdownをコピーしました！</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{activeTab === "hearing" ? "ヒアリングシート" : "契約条件"}のMarkdownをコピー</span>
                    </>
                  )}
                </Button>
              </div>

              {/* ドキュメント解説バナー */}
              <div className="p-3 rounded-2xl bg-white border border-slate-200/80 text-xs text-slate-600 flex items-start gap-2 mb-3">
                <Info className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                <div>
                  {activeTab === "hearing" ? (
                    <span>
                      初回面談（Zoom/Google Meet）やテキスト相談前に社内の検討内容を整理するためのテンプレートです。未定・不明な項目は空欄のままで構いません。
                    </span>
                  ) : (
                    <span>
                      発注時の不安を解消するための事前明示事項です。「30日間の無償バグ保証」「著作権の完全譲渡」「追加修正時の再見積ルール」を定めています。
                    </span>
                  )}
                </div>
              </div>

              {/* プレビューコードブロック */}
              <div className="relative rounded-2xl bg-slate-900 text-slate-100 p-4 sm:p-5 font-mono text-xs overflow-x-auto max-h-[360px] overflow-y-auto leading-relaxed border border-slate-800 shadow-inner">
                <pre className="whitespace-pre-wrap font-mono text-[11px] sm:text-xs text-slate-200 selection:bg-violet-500 selection:text-white">
                  {currentContent}
                </pre>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ClientPrepDocuments;
