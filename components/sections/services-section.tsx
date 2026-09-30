"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Wrench,
  Cpu,
  Globe,
  Layers,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

const SERVICE_BG_IMAGES: Record<string, string> = {
  "spot-fix": "/images/service-spot.png",
  "gas-automation": "/images/service-gas.png",
  "website-lp": "/images/service-web.png",
  "custom-webapp": "/images/service-saas.png",
};

interface ServicePackage {
  id: string;
  number: string;
  name: string;
  tagline: string;
  price: string;
  priceSub?: string;
  delivery: string;
  badge?: string;
  badgeType?: "rose" | "teal";
  icon: React.ElementType;
  contactTitle: string;
  problems: string[];
  features: string[];
}

const PACKAGES: ServicePackage[] = [
  {
    id: "spot-fix",
    number: "01",
    name: "スポット改修・社内ツール改善",
    tagline: "既存Webサイトや社内システムの「ここだけ直したい」に即座に対応する修復・改善",
    price: "30,000円〜",
    delivery: "最短即日 〜 3営業日",
    icon: Wrench,
    contactTitle: "既存Webシステム・社内ツールの修正",
    problems: [
      "CSSやレイアウトが崩れて自力で直せない",
      "ボタンが動かない・メール送信がエラーになる",
      "大手制作会社に相談したら数十万の見積もりが出た",
    ],
    features: [
      "原因の徹底調査とバグ修正",
      "ピンポイントなコード改修・リファクタ",
      "本番反映と実機動作検証",
      "1時間のオンライン技術相談・事後QA",
    ],
  },
  {
    id: "gas-automation",
    number: "02",
    name: "GAS・業務自動化・社内DX",
    tagline: "毎日の手作業・転記ミスをゼロにする社内業務効率化・DX推進パック",
    price: "50,000円〜",
    priceSub: "ライト自動化 5万円〜 / 標準システム化 15万円〜",
    delivery: "1週間 〜 2週間",
    badge: "人気 No.1",
    badgeType: "rose",
    icon: Cpu,
    contactTitle: "業務効率化・GAS自動化の相談・見積り",
    problems: [
      "毎日同じデータをスプレッドシート間でコピペしている",
      "SlackやLINE、Gmailへの手動通知に時間がかかっている",
      "高額な専用SaaSを契約するほどの予算はない",
    ],
    features: [
      "スプレッドシート自動化・関数/GAS実装",
      "Slack / LINE / Gmail 自動通知・フォーム転記",
      "小規模な業務効率化から標準社内ツールDXまで柔軟対応",
      "簡易操作マニュアル ＋ 納品後1ヶ月無料サポート",
    ],
  },
  {
    id: "website-lp",
    number: "03",
    name: "Webサイト・LP制作（Next.js構築）",
    tagline: "Next.jsによる圧倒的表示速度とSEO・CVRを追求したモダンWeb制作",
    price: "250,000円〜",
    delivery: "2週間 〜 4週間",
    badge: "おすすめ",
    badgeType: "teal",
    icon: Globe,
    contactTitle: "Webサイト・LP構築の相談",
    problems: [
      "デザインだけでなく表示スピードとSEOにこだわりたい",
      "スマホ表示が最適化されておらず離脱が多い",
      "お問い合わせ獲得・成約につながるLPがほしい",
    ],
    features: [
      "構成案・ワイヤーフレームのすり合わせ",
      "Next.js / Tailwind CSS による高パフォーマンス実装",
      "お問い合わせフォーム（自動返信・メール通知）完備",
      "SEO・OGP・Googleアナリティクス導入設定",
    ],
  },
  {
    id: "custom-webapp",
    number: "04",
    name: "カスタムWebシステム開発・SaaS構築",
    tagline: "認証・決済・DBを備えた新規事業のMVP開発・独自SaaSシステム構築",
    price: "500,000円〜",
    delivery: "1ヶ月 〜 2ヶ月",
    icon: Layers,
    contactTitle: "Webシステム開発・SaaS構築の相談・見積り",
    problems: [
      "自社の業務にぴったり合う既製品ツールが見つからない",
      "ユーザー認証やStripe決済を含むSaaSを立ち上げたい",
      "最短でMVP（プロトタイプ）をリリースして検証したい",
    ],
    features: [
      "企画・要件定義からDB設計、UI/UX実装まで一貫担当",
      "Next.js + Supabase / Firebase / GCP による堅牢なWebシステム開発",
      "認証・権限管理・決済連携などのコア機能実装（MVP開発）",
      "本番クラウド環境構築・運用保守レクチャー",
    ],
  },
];

export const ServicesSection = () => {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSelectPackage = (pkg: ServicePackage) => {
    const formattedContent = `【ご相談パッケージ】${pkg.name}（概算: ${pkg.price} (税込) / 目安納期: ${pkg.delivery}）
--------------------------------------------------
【現在の課題・ご要望】
（※お困りごとや実現したいこと、対象サイトのURL等をご自由にご記入ください）`;

    const event = new CustomEvent("fueri:fill-contact", {
      detail: {
        title: pkg.contactTitle,
        content: formattedContent,
      },
    });
    window.dispatchEvent(event);

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 md:py-32 relative z-10 overflow-hidden">
      {/* 背景アンビエントグロー */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-tr from-violet-400/20 via-indigo-300/15 to-transparent rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-gradient-to-bl from-cyan-400/20 via-violet-300/15 to-transparent rounded-full blur-3xl opacity-35 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* セクションヘッダー */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <Badge variant="glow" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider">
            Solutions & Services
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-800 font-title tracking-tight">
            Webシステム開発・業務効率化パッケージ
          </h2>

          <p className="text-slate-600 max-w-2xl text-base sm:text-lg">
            現場の業務効率化（社内DX・GAS自動化）から、Next.jsによるWebシステム開発、新規事業のMVP開発・SaaS構築まで、課題とご予算に応じた最適な開発プランをご提供します。
          </p>
        </div>

        {/* 4つのパッケージカード（グリッド） */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {PACKAGES.map((pkg, index) => {
            const Icon = pkg.icon;
            const isFeatured = pkg.badge === "人気 No.1";
            const isExpanded = !!expandedCards[pkg.id];
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex"
              >
                <div
                  className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between w-full bg-white/80 backdrop-blur-xl border transition-all duration-300 relative group overflow-hidden ${
                    isFeatured
                      ? "border-violet-300/80 ring-1 ring-violet-500/30 shadow-glow-violet hover:border-violet-400 hover:ring-violet-500/50 hover:-translate-y-1"
                      : "border-slate-200/80 shadow-glass hover:shadow-glass-hover hover:border-violet-300/80 hover:ring-1 hover:ring-violet-500/20 hover:-translate-y-1"
                  }`}
                >
                  {/* カード背景の3Dウォーターマーク画像 (透過 & ホバーマイクロインタラクション) */}
                  {SERVICE_BG_IMAGES[pkg.id] && (
                    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
                      <Image
                        src={SERVICE_BG_IMAGES[pkg.id]}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-contain object-bottom scale-110 blur-[1px] opacity-10 dark:opacity-15 group-hover:opacity-20 transition-opacity duration-500"
                        priority={index < 2}
                      />
                    </div>
                  )}

                  {/* 表面コンテンツ（テキスト・SVG図解等は relative z-10 で完全維持） */}
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      {/* サービス内容を模したミニUIイラスト（SVG / CSSグラフィック） */}
                      <div className="mb-5 rounded-2xl p-3 bg-gradient-to-b from-slate-50/90 to-white/60 border border-slate-200/80 shadow-inner overflow-hidden relative group-hover:border-violet-200/90 transition-colors">
                      {/* 背景の微細な光彩 */}
                      <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-violet-400/10 via-cyan-400/10 to-transparent rounded-full blur-xl pointer-events-none" />

                      {pkg.id === "spot-fix" && (
                        /* スポット改修: コード修正・エディタ風ミニUI */
                        <div className="space-y-1.5 font-mono text-[10px]">
                          <div className="flex items-center justify-between pb-1 border-b border-slate-200/60">
                            <div className="flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full bg-rose-400/80" />
                              <span className="w-2 h-2 rounded-full bg-amber-400/80" />
                              <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
                            </div>
                            <span className="text-[9px] text-slate-400">quick-fix.ts</span>
                          </div>
                          <div className="bg-rose-50 text-rose-700 px-2 py-0.5 rounded flex items-center justify-between">
                            <span>- layout.overflow: error</span>
                            <span className="text-[9px] text-rose-500 font-sans">Bug</span>
                          </div>
                          <div className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded flex items-center justify-between font-bold">
                            <span>+ fixed: responsive.ok()</span>
                            <span className="text-[9px] text-emerald-600 font-sans">Solved ✓</span>
                          </div>
                        </div>
                      )}

                      {pkg.id === "gas-automation" && (
                        /* GAS業務自動化: スプレッドシート ➔ 外部連携フローミニUI */
                        <div className="flex items-center justify-between gap-1 text-[10px] font-sans">
                          {/* Sheets */}
                          <div className="p-1.5 rounded-lg bg-emerald-50 border border-emerald-200/80 text-center flex-1">
                            <div className="text-[9px] font-bold text-emerald-800">Sheets</div>
                            <div className="grid grid-cols-2 gap-0.5 mt-1">
                              <span className="h-1.5 bg-emerald-200 rounded-2xs" />
                              <span className="h-1.5 bg-emerald-300 rounded-2xs" />
                              <span className="h-1.5 bg-emerald-200 rounded-2xs" />
                              <span className="h-1.5 bg-emerald-300 rounded-2xs" />
                            </div>
                          </div>
                          {/* GAS Engine */}
                          <div className="flex flex-col items-center px-1">
                            <span className="text-violet-600 text-[11px] animate-pulse">⚡️</span>
                            <span className="text-[8px] font-mono text-slate-400">Auto</span>
                          </div>
                          {/* Slack/Gmail */}
                          <div className="p-1.5 rounded-lg bg-violet-50 border border-violet-200/80 text-center flex-1">
                            <div className="text-[9px] font-bold text-violet-800">Slack / Mail</div>
                            <div className="text-[8px] font-semibold text-violet-600 bg-white rounded px-1 mt-1 shadow-2xs">
                              即時通知 ✓
                            </div>
                          </div>
                        </div>
                      )}

                      {pkg.id === "website-lp" && (
                        /* Webサイト/LP: ブラウザウィンドウ ＋ 高速スコアミニUI */
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between pb-1 border-b border-slate-200/60">
                            <div className="flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full bg-slate-300" />
                              <span className="w-2 h-2 rounded-full bg-slate-300" />
                              <span className="w-2 h-2 rounded-full bg-slate-300" />
                            </div>
                            <span className="text-[9px] font-mono bg-cyan-100 text-cyan-800 px-1.5 py-0.2 rounded-full font-bold">
                              ⚡️ 98 Score
                            </span>
                          </div>
                          <div className="space-y-1">
                            <div className="h-2 w-3/4 bg-slate-200 rounded-full" />
                            <div className="h-1.5 w-1/2 bg-slate-200/70 rounded-full" />
                            <div className="flex items-center justify-between pt-0.5">
                              <div className="h-3 w-12 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
                              <span className="text-[8px] text-slate-400 font-mono">Next.js 14</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {pkg.id === "custom-webapp" && (
                        /* Webシステム/SaaS: 認証・DB・決済ダッシュボードミニUI */
                        <div className="space-y-1.5 text-[9px]">
                          <div className="flex items-center justify-between pb-1 border-b border-slate-200/60">
                            <span className="font-bold text-slate-700">SaaS Console</span>
                            <span className="text-[8px] px-1.5 py-0.2 rounded-full bg-indigo-50 text-indigo-700 font-semibold border border-indigo-200/60">
                              Auth / Stripe
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-1 text-center">
                            <div className="p-1 rounded bg-slate-100/80">
                              <span className="text-[8px] text-slate-400 block">User</span>
                              <span className="font-bold text-slate-700">Active</span>
                            </div>
                            <div className="p-1 rounded bg-slate-100/80">
                              <span className="text-[8px] text-slate-400 block">DB</span>
                              <span className="font-bold text-slate-700">Postgres</span>
                            </div>
                            <div className="p-1 rounded bg-emerald-50 text-emerald-800 font-bold">
                              <span className="text-[8px] text-emerald-600 block">Pay</span>
                              <span>200 OK</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* 上部バッジ & アイコン */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        {/* アイコン背景の鮮やかなグラデーションバブル */}
                        <div className="relative">
                          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-violet-500/20 via-indigo-500/20 to-cyan-500/30 blur-xs group-hover:scale-110 transition-transform" />
                          <div className={`relative w-10 h-10 rounded-2xl flex items-center justify-center transition-all shadow-2xs ${
                            isFeatured
                              ? "bg-violet-50/90 border border-violet-200 text-violet-600 group-hover:scale-105 group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-cyan-600 group-hover:text-white"
                              : "bg-white border border-slate-200/80 text-violet-600 group-hover:scale-105 group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-cyan-600 group-hover:text-white"
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-400">
                          {pkg.number}
                        </span>
                      </div>
                      {pkg.badge && (
                        <span
                          className={`text-[10px] font-bold px-3 py-1 rounded-full shadow-2xs ${
                            pkg.badgeType === "teal"
                              ? "bg-cyan-50 text-cyan-800 border border-cyan-200"
                              : "bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 text-white border-transparent shadow-xs"
                          }`}
                        >
                          {pkg.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 font-title mb-1.5 group-hover:text-violet-600 transition-colors">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-slate-600 mb-5 leading-relaxed min-h-[36px]">
                      {pkg.tagline}
                    </p>

                    {/* 価格 & 納期ハイライト */}
                    <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/80 mb-5 shadow-2xs">
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="text-[11px] font-medium text-slate-500">
                          想定料金目安 (税込)
                        </span>
                        <span className="text-base sm:text-lg font-extrabold text-slate-800 font-mono">
                          {pkg.price}
                        </span>
                      </div>
                      {pkg.priceSub && (
                        <div className="text-[10px] text-violet-600 font-medium mb-1.5 pb-1 border-b border-dashed border-slate-200">
                          ※ {pkg.priceSub}
                        </div>
                      )}
                      <div className="flex items-center justify-between text-xs text-slate-700 pt-1.5 border-t border-slate-100">
                        <span className="flex items-center gap-1 text-[11px] text-slate-500">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          納期目安
                        </span>
                        <span className="font-semibold text-slate-800">
                          {pkg.delivery}
                        </span>
                      </div>
                    </div>

                    {/* 基本表示：代表的な特徴3つ */}
                    <div className="space-y-2 mb-4">
                      <div className="text-[11px] font-bold text-slate-800 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
                        <span>主な提供内容</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {pkg.features.slice(0, 3).map((feat, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 詳細トグルボタン (ネオグラス調マイクロボタン) */}
                    <button
                      type="button"
                      onClick={() => toggleCard(pkg.id)}
                      className="w-full my-1 py-2 px-3 rounded-xl text-[11px] font-semibold flex items-center justify-center gap-1.5 border border-slate-200/80 bg-white/70 hover:bg-white text-slate-600 hover:text-violet-600 hover:border-violet-300 shadow-2xs hover:shadow-glass transition-all duration-200 group/accordion cursor-pointer"
                      aria-expanded={isExpanded}
                    >
                      <span>
                        {isExpanded ? "詳細を閉じる" : "詳細な対応範囲・解決課題を見る"}
                      </span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-slate-400 group-hover/accordion:text-violet-600 transition-transform duration-300 ${
                          isExpanded ? "rotate-180 text-violet-600" : ""
                        }`}
                      />
                    </button>

                    {/* 開閉式アコーディオン詳細エリア */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key={`details-${pkg.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 pb-1 space-y-4 border-t border-slate-100 my-2">
                            {/* 解決できる悩み */}
                            <div className="space-y-2">
                              <div className="text-[11px] font-bold text-slate-800 flex items-center gap-1.5">
                                <span className={`w-1.5 h-1.5 rounded-full ${isFeatured ? "bg-violet-500" : "bg-cyan-500"}`} />
                                <span>こんなお悩みを解決</span>
                              </div>
                              <ul className="space-y-1.5 text-xs text-slate-600">
                                {pkg.problems.map((prob, i) => (
                                  <li key={i} className="flex items-start gap-1.5">
                                    <span className={isFeatured ? "text-violet-500 leading-tight" : "text-cyan-500 leading-tight"}>•</span>
                                    <span>{prob}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* 含まれる全提供内容 */}
                            <div className="space-y-2">
                              <div className="text-[11px] font-bold text-slate-800 flex items-center gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
                                <span>具体的な提供内容（全項目）</span>
                              </div>
                              <ul className="space-y-1.5 text-xs text-slate-700">
                                {pkg.features.map((feat, i) => (
                                  <li key={i} className="flex items-start gap-1.5">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0 mt-0.5" />
                                    <span>{feat}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* アクションCTA */}
                  <div className="pt-2">
                    <Button
                      variant={pkg.badge ? "primary" : "outline"}
                      size="md"
                      onClick={() => handleSelectPackage(pkg)}
                      className={`w-full justify-center group/btn text-xs font-semibold py-2.5 rounded-full ${
                        pkg.badge
                          ? "bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 text-white shadow-glass"
                          : "bg-white/80 backdrop-blur-sm hover:bg-white text-slate-700 hover:text-violet-700 border-slate-200 hover:border-violet-300 shadow-2xs"
                      }`}
                    >
                      <span>このプランで相談する</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
          })}
        </div>

        {/* 全プラン共通の3大安心保証 */}
        <div className="mt-14 max-w-4xl mx-auto rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-glass p-6 sm:p-8">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-cyan-800 bg-cyan-50 px-3.5 py-1 rounded-full border border-cyan-200/80 w-fit mx-auto mb-5">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
            <span>全プラン標準付帯・安心のサポート保証</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-1.5 p-2">
              <div className="text-xs sm:text-sm font-bold text-slate-800 flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                <span>代表（渡部）の直接担当</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                要件整理から設計・品質管理まで代表が一貫して責任対応
              </p>
            </div>
            <div className="space-y-1.5 p-2 border-t md:border-t-0 md:border-x border-slate-100">
              <div className="text-xs sm:text-sm font-bold text-slate-800 flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                <span>1ヶ月間の無償バグ修正</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                納品後に発覚した動作不具合や崩れも無償で迅速修復
              </p>
            </div>
            <div className="space-y-1.5 p-2 border-t md:border-t-0 border-slate-100">
              <div className="text-xs sm:text-sm font-bold text-slate-800 flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                <span>簡易操作マニュアル添付</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                属人化を防ぎ、現場の誰もがスムーズに運用できるよう配慮
              </p>
            </div>
          </div>
        </div>

        {/* 補足注記 */}
        <div className="mt-8 text-center text-xs text-slate-500 space-y-1.5">
          <p>※ 表示価格はすべて税込です。業務ボリュームや要件のカスタマイズに応じて柔軟にお見積りを調整いたします。</p>
          <p>
            ※ 保証の適用条件や検収に関する詳細は、
            <Link href="/terms" className="text-violet-600 underline hover:text-violet-700 ml-1 font-medium">
              ご利用規約 & サポート保証規定
            </Link>
            をご確認ください。
          </p>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
