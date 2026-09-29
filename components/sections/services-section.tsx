"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
} from "lucide-react";

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
    <section id="services" className="py-20 md:py-32 relative z-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg, index) => {
            const Icon = pkg.icon;
            const isFeatured = pkg.badge === "人気 No.1";
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
                  className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between w-full bg-white/80 backdrop-blur-xl border transition-all duration-300 relative group ${
                    isFeatured
                      ? "border-violet-300/80 ring-1 ring-violet-500/30 shadow-glow-violet hover:border-violet-400 hover:ring-violet-500/50 hover:-translate-y-1"
                      : "border-slate-200/80 shadow-glass hover:shadow-glass-hover hover:border-violet-300/80 hover:ring-1 hover:ring-violet-500/20 hover:-translate-y-1"
                  }`}
                >
                  {/* 上部バッジ & 番号 */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all shadow-2xs ${
                          isFeatured
                            ? "bg-violet-50/80 border border-violet-100 text-violet-600 group-hover:scale-105 group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-cyan-600 group-hover:text-white"
                            : "bg-slate-50 border border-slate-200/80 text-violet-600 group-hover:scale-105 group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-cyan-600 group-hover:text-white"
                        }`}>
                          <Icon className="w-5 h-5" />
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

                    {/* 解決できる悩み */}
                    <div className="space-y-2 mb-5">
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

                    {/* 含まれる内容 */}
                    <div className="space-y-2 mb-6">
                      <div className="text-[11px] font-bold text-slate-800 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
                        <span>提供内容</span>
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
