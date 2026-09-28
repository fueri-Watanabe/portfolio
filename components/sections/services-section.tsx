"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
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
} from "lucide-react";

interface ServicePackage {
  id: string;
  number: string;
  name: string;
  tagline: string;
  price: string;
  delivery: string;
  badge?: string;
  badgeColor?: string;
  icon: React.ElementType;
  contactTitle: string;
  problems: string[];
  features: string[];
}

const PACKAGES: ServicePackage[] = [
  {
    id: "spot-fix",
    number: "01",
    name: "スポット改修・相談",
    tagline: "「ここだけ直したい」「急ぎで相談したい」に即対応",
    price: "30,000円〜",
    delivery: "最短即日 〜 3営業日",
    icon: Wrench,
    contactTitle: "既存システム・ツールの修正",
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
    name: "GAS・業務自動化",
    tagline: "日々のルーチン作業・手作業の転記をゼロにする",
    price: "100,000円〜",
    delivery: "1週間 〜 3週間",
    badge: "人気 No.1",
    badgeColor: "bg-slate-900 text-white border-slate-900",
    icon: Cpu,
    contactTitle: "システム開発の相談・見積り",
    problems: [
      "毎日同じデータをスプレッドシート間でコピペしている",
      "SlackやLINE、Gmailへの手動通知に時間がかかっている",
      "高額な専用SaaSを契約するほどの予算はない",
    ],
    features: [
      "現在の業務フロー整理・要件ヒアリング",
      "Google Apps Script (GAS) 実装",
      "各種外部サービス・API連携（Slack/LINE等）",
      "簡易操作マニュアル ＋ 納品後1ヶ月無料サポート",
    ],
  },
  {
    id: "website-lp",
    number: "03",
    name: "Webサイト・LP制作",
    tagline: "圧倒的な高速表示・高CVRで成果を最大化する",
    price: "250,000円〜",
    delivery: "2週間 〜 4週間",
    badge: "おすすめ",
    badgeColor: "bg-slate-900 text-white border-slate-900",
    icon: Globe,
    contactTitle: "Webサイトの構築",
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
    name: "カスタムWebシステム",
    tagline: "自社専用のツールやSaaS・MVPを素早く形にする",
    price: "500,000円〜",
    delivery: "1ヶ月 〜 2ヶ月",
    icon: Layers,
    contactTitle: "システム開発の相談・見積り",
    problems: [
      "自社の業務にぴったり合う既製品ツールが見つからない",
      "ユーザー認証やStripe決済を含むSaaSを立ち上げたい",
      "最短でMVP（プロトタイプ）をリリースして検証したい",
    ],
    features: [
      "企画・要件定義からDB設計、UI/UX実装まで一貫担当",
      "Next.js + Supabase / Firebase / GCP による堅牢開発",
      "認証・権限管理・決済連携などのコア機能実装",
      "本番クラウド環境構築・運用保守レクチャー",
    ],
  },
];

export const ServicesSection = () => {
  const handleSelectPackage = (pkg: ServicePackage) => {
    const formattedContent = `【ご相談パッケージ】${pkg.name}（概算: ${pkg.price} / 目安納期: ${pkg.delivery}）
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
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* セクションヘッダー（Flowformスタイルのタイポグラフィ） */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <Badge variant="glow" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-900 bg-white">
            Solutions & Services
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-title tracking-tight">
            明確な提供価値と{" "}
            <span className="bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
              定額プラン
            </span>
          </h2>

          <p className="text-slate-500 max-w-2xl text-base sm:text-lg">
            「何にいくらかかるのか」の不透明さを排除。ご予算と課題の規模に合わせて、最適なパッケージをご用意しています。
          </p>
        </div>

        {/* 4つのパッケージカード（グリッド） */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg, index) => {
            const Icon = pkg.icon;
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
                  className="rounded-3xl p-6 sm:p-7 flex flex-col justify-between w-full bg-white border border-sky-100/90 shadow-[0_12px_36px_rgba(14,165,233,0.06),0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_22px_48px_rgba(14,165,233,0.12)] hover:border-sky-300 hover:-translate-y-1 transition-all duration-300 relative group"
                >
                  {/* 上部バッジ & 番号 */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-sky-50 border border-sky-100 text-sky-800 group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-teal-500 group-hover:text-white transition-all shadow-sm">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-sky-700/60">
                          {pkg.number}
                        </span>
                      </div>
                      {pkg.badge && (
                        <span
                          className="text-[10px] font-bold px-3 py-1 rounded-full border shadow-sm bg-gradient-to-r from-[#174668] to-[#286b8b] text-white border-transparent"
                        >
                          {pkg.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-title mb-1.5 group-hover:text-slate-700 transition-colors">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-slate-500 mb-5 leading-relaxed min-h-[36px]">
                      {pkg.tagline}
                    </p>

                    {/* 価格 & 納期ハイライト */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-5">
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="text-[11px] font-medium text-slate-500">
                          想定料金目安
                        </span>
                        <span className="text-base sm:text-lg font-extrabold text-slate-900 font-mono">
                          {pkg.price}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-600 pt-1.5 border-t border-slate-200/60">
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
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                        <span>こんなお悩みを解決</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {pkg.problems.map((prob, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-slate-400 leading-tight">•</span>
                            <span>{prob}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 含まれる内容 */}
                    <div className="space-y-2 mb-6">
                      <div className="text-[11px] font-bold text-slate-800 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-700" />
                        <span>提供内容</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {pkg.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-slate-800 flex-shrink-0 mt-0.5" />
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
                      className="w-full justify-center group/btn text-xs font-semibold py-2.5 rounded-full"
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

        {/* 補足注記 */}
        <div className="mt-12 text-center text-xs text-slate-500 space-y-1">
          <p>※ 表示価格は税別です。要件のボリュームや仕様に応じて柔軟にお見積りを調整いたします。</p>
          <p>※ すべてのプランに「納品後1ヶ月の無償バグ修正サポート」が付属しています。</p>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
