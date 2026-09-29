"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronDown,
  ArrowRight,
  PackageCheck,
  FolderOpen,
  Sparkles,
} from "lucide-react";
import ContactSection from "@/components/sections/contact-section";

interface DetailedStep {
  step: string;
  title: string;
  lead: string;
  description: string;
  tasks: string[];
  clientPrepares: string[];
  deliverables: string[];
  badges: string[];
  icon: React.ElementType;
}

const DETAILED_STEPS: DetailedStep[] = [
  {
    step: "01",
    title: "ヒアリング・要件整理",
    lead: "課題やご希望の機能、予算感を丁寧にお伺いします（初回30分無料）",
    description:
      "「まだアイデア段階で仕様が固まっていない」「どこから手を付けるべきか分からない」という状態でもご安心ください。代表エンジニアが直接ヒアリングを行い、現状の業務フローや課題のボトルネックを特定します。",
    tasks: [
      "オンライン面談（Zoom / Google Meet）またはテキストチャットでの柔軟なヒアリング",
      "現状の業務フロー・既存システムの画面やコードを共有いただき根本課題を特定",
      "予算・納期・事業計画に合わせた最適な技術スタック（Next.js, GAS, GCP等）の選定",
    ],
    clientPrepares: [
      "現状の業務で困っていること・改善したいこと",
      "参考サイトや競合サービスURL（あれば）",
      "想定のご予算感やご希望の稼働時期",
    ],
    deliverables: ["ヒアリング要件整理メモ", "概算スケジュール目安"],
    badges: ["初回30分無料相談", "代表エンジニア直通ヒアリング"],
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "見積もり提示・契約着手",
    lead: "仕様範囲と納期、明朗な固定見積もりをご提示します",
    description:
      "「開発が進んでから追加費用を請求される」という受託開発にありがちな不安を徹底排除。対応スコープを明確に定義し、明朗な固定見積もり金額と納期スケジュールをご提示します。",
    tasks: [
      "仕様範囲・画面構成・外部連携サービスを明記した提案仕様書の作成",
      "ご予算に応じた段階的なMVP（最小限機能）リリースプランのご提案",
      "契約書（秘密保持契約・業務委託契約）の締結および開発マイルストーンの確定",
    ],
    clientPrepares: [
      "提案仕様書・見積金額のご確認",
      "ご契約書（電子契約対応可）の締結",
    ],
    deliverables: ["明朗固定見積書", "提案仕様書", "開発スケジュール表"],
    badges: ["安心の固定見積もり", "不要な追加費ゼロ"],
    icon: FileCheck,
  },
  {
    step: "03",
    title: "開発・中間プレビュー共有",
    lead: "実機プレビューを共有し、確認しながらアジャイルに実装",
    description:
      "Next.jsやTypeScriptなどのモダンスタックを用い、保守性の高いクリーンコードで実装を進めます。テストURLで実際の挙動を随時ご確認いただきながら進めるため、完成後の認識ズレや手戻りが発生しません。",
    tasks: [
      "Next.js / TypeScript / Supabase 等による高速・堅牢なフロント・バックエンド実装",
      "テストURL（Vercelプレビュー環境）の発行と実機での動作確認",
      "Slackやメール等のチャットツールを通じた日次・週次の進捗共有と細かなUI調整",
    ],
    clientPrepares: [
      "サイト・システムに掲載するテキスト原稿や画像・ロゴ素材",
      "連携する外部サービス（Stripe, Google Cloud等）のアカウント招待・権限付与",
    ],
    deliverables: ["テスト稼働環境（プレビューURL）", "進捗レポート"],
    badges: ["実機URLでの早期プレビュー", "手戻りなしのアジャイル開発"],
    icon: Code2,
  },
  {
    step: "04",
    title: "検証テスト・本番反映（納品）",
    lead: "各種デバイスでの検証・動作テストを経て本番デプロイ",
    description:
      "スマートフォン、タブレット、PC各端末での表示崩れやレスポンス速度を徹底検証。各種セキュリティ対策やSEO内部対策を完了させた上で、安全に本番環境へ反映・納品いたします。",
    tasks: [
      "主要ブラウザ（Chrome, Safari, Edge等）および実機端末でのクロスブラウザ動作検証",
      "本番クラウド環境（Vercel, Google Cloud, 独自サーバー等）への安全なデプロイ",
      "操作方法のオンラインレクチャーおよび運用マニュアル・引き継ぎドキュメントの提供",
    ],
    clientPrepares: [
      "本番ドメイン・DNSの設定権限（代行サポートも可能）",
      "最終受け入れ動作検証（検収作業）",
    ],
    deliverables: ["本番システム一式", "ソースコード", "運用簡易マニュアル"],
    badges: ["マルチデバイス動作テスト", "操作マニュアル標準付帯"],
    icon: Rocket,
  },
  {
    step: "05",
    title: "アフター保守サポート",
    lead: "納品後30日間の無償バグ保証。継続運用も柔軟に対応します",
    description:
      "「納品されたら終わり」ではありません。納品後30日以内に発見された仕様通りの不具合・動作エラーは無償で迅速に対応いたします。また、公開後のアクセス解析に基づいた改善や月額保守も柔軟に承ります。",
    tasks: [
      "納品後30日間の検収期間における無償バグ修正・動作トラブル対応",
      "実際の運用開始後の細かな改善要望や追加機能実装のご相談対応",
      "月額定額保守（定期バックアップ、ライブラリアップデート、障害監視）の提供",
    ],
    clientPrepares: [
      "実運用での動作確認および改善リクエスト",
    ],
    deliverables: ["30日間無償バグ修正保証", "保守・改善サポート"],
    badges: ["納品後30日無償バグ保証", "継続的な運用改善相談"],
    icon: ShieldCheck,
  },
];

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const PROCESS_FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "まだ具体的な仕様や要件が決まっていませんが、相談できますか？",
    answer:
      "はい、全く問題ございません。「業務のここを自動化したい」「こういうWebサービスを作りたい」という構想段階から代表が直接ヒアリングを行い、技術的な実現可否や優先度、概算費用感を一緒に整理させていただきます。初回30分のオンライン相談は無料ですので、お気軽にご連絡ください。",
  },
  {
    id: "faq-2",
    question: "開発の途中で仕様変更や機能の追加をお願いすることはできますか？",
    answer:
      "プレビュー環境で操作していただきながら柔軟に微調整を行います。軽微なUI調整やテキスト変更などは工数内で迅速に対応可能です。大幅な機能追加や外部連携の追加など工数に影響する場合は、必ず事前に差額見積もりと納期影響をご提示し、ご納得いただいた上で進めますので、勝手に追加請求が発生することは一切ございません。",
  },
  {
    id: "faq-3",
    question: "納品後のバグや不具合に対する保証はありますか？",
    answer:
      "はい、納品後「30日間」の無償保証期間を標準で設けております。納品時に取り決めた仕様範囲におけるバグや表示崩れ、動作不良が発見された場合は、無償にて速やかに修正対応いたします。また、運用後の機能追加や月額保守についても柔軟に対応しております。",
  },
  {
    id: "faq-4",
    question: "サーバーやドメイン、外部API（Stripe等）の契約手続きはどうすればよいですか？",
    answer:
      "原則としてクライアント企業様の名義でご契約いただきますが、アカウントの開設手順や初期設定、DNSレコードの設定等は丁寧にナビゲートいたします。ご自身での設定が難しい場合は代行設定（アカウント招待による共同作業）も承りますのでご安心ください。",
  },
  {
    id: "faq-5",
    question: "全国対応・フルリモートでのやり取りは可能ですか？",
    answer:
      "はい、日本全国の企業様とフルリモートで円滑にお取引を行っております。Google Meet / Zoomによるオンライン面談、およびSlack、LINE、メールでの迅速なテキストコミュニケーションにより、対面以上のスピード感と密度でプロジェクトを進行いたします。",
  },
  {
    id: "faq-6",
    question: "発注前に秘密保持契約（NDA）を締結することは可能ですか？",
    answer:
      "はい、もちろん可能です。自社の新規事業アイデアや業務フロー、機密データを共有いただく前に、電子契約（クラウドサイン等）にて速やかに秘密保持契約を締結いたします。貴社フォーマットのNDAがある場合も柔軟に対応いたします。",
  },
];

export default function ProcessPage() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(PROCESS_FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-slate-50/70 text-slate-800 pt-20 overflow-x-hidden">
      {/* 1. ページヘッダー */}
      <section className="py-16 sm:py-24 border-b border-slate-200/80 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="glow" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-1">
            Process & Support
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-800 font-title tracking-tight leading-tight">
            発注から納品・運用の{" "}
            <span className="bg-gradient-to-r from-rose-500 to-red-600 bg-clip-text text-transparent">
              詳細プロセス
            </span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            ご相談から要件定義、開発、納品、アフター保守までの全工程と、発注前によくいただくご質問（FAQ）をわかりやすくご案内します。
          </p>
        </div>
      </section>

      {/* 2. 詳細な5ステップフロー */}
      <section className="py-20 md:py-28 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {DETAILED_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all p-6 sm:p-9 relative overflow-hidden"
              >
                {/* ステップ上部（番号・アイコン・タイトル・バッジ） */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-extrabold font-mono text-rose-600 tracking-wider">
                          STEP {step.step}
                        </span>
                        <div className="h-2 w-2 rounded-full bg-rose-400" />
                      </div>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800 font-title mt-0.5">
                        {step.title}
                      </h2>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {step.badges.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200/80"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                        <span>{badge}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* ステップ詳細解説 */}
                <div className="py-6 space-y-6">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-800 mb-1">
                      {step.lead}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* 3ブロックグリッド（作業内容・ご用意いただくもの・成果物） */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    {/* ① 主な作業内容 */}
                    <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                        <Code2 className="w-4 h-4 text-rose-500" />
                        <span>当方が行う主な作業</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {step.tasks.map((task, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-1.5 leading-snug">
                            <span className="text-rose-500 mt-0.5">•</span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* ② お客様にご用意いただくもの */}
                    <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                        <FolderOpen className="w-4 h-4 text-sky-600" />
                        <span>お客様にご用意いただくもの</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {step.clientPrepares.map((item, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-1.5 leading-snug">
                            <span className="text-sky-500 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* ③ 主な成果物 */}
                    <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                        <PackageCheck className="w-4 h-4 text-teal-600" />
                        <span>このステップでの成果物</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {step.deliverables.map((deliv, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-1.5 leading-snug">
                            <span className="text-teal-600 mt-0.5">•</span>
                            <span className="font-medium text-slate-700">{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. 開発プロセス & 発注に関するよくある質問（FAQ） */}
      <section className="py-20 md:py-28 border-t border-slate-200/80 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-2.5 mb-14">
            <Badge variant="glow" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-1">
              FAQ & Questions
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-800 font-title tracking-tight">
              発注・開発プロセスに関するよくある質問
            </h2>
            <p className="text-slate-600 max-w-xl text-sm sm:text-base">
              ご相談前・発注前に多くいただく疑問点や不安事項をまとめました。
            </p>
          </div>

          <div className="space-y-3.5">
            {PROCESS_FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span className="font-bold text-sm sm:text-base text-slate-800 group-hover:text-rose-600 transition-colors">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? "rotate-180 text-rose-500" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. お問い合わせセクション */}
      <ContactSection />
    </main>
  );
}
