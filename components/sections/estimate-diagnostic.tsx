"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wrench,
  Cpu,
  Globe,
  Layers,
  User,
  Building2,
  Users,
  Zap,
  Calendar,
  Lightbulb,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Calculator,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// --- 型定義 ---
export interface Step1Option {
  id: string;
  title: string;
  desc: string;
  priceHint: string;
  icon: React.ElementType;
  defaultContactTitle: string;
}

export interface Step2Option {
  id: string;
  title: string;
  desc: string;
  icon: React.ElementType;
}

export interface Step3Option {
  id: string;
  title: string;
  desc: string;
  icon: React.ElementType;
}

// --- 選択肢マスターデータ ---
const STEP1_OPTIONS: Step1Option[] = [
  {
    id: "gas_automation",
    title: "業務自動化・効率化",
    desc: "スプレッドシート/GAS/Slack連携/手作業の転記作業ゼロ化",
    priceHint: "10万〜28万円",
    icon: Cpu,
    defaultContactTitle: "システム開発の相談・見積り",
  },
  {
    id: "fix_consult",
    title: "サイトの崩れ修正・スポット改善",
    desc: "デザイン崩れ調整/急なエラー修復/機能追加/部分的な改善",
    priceHint: "3万〜10万円",
    icon: Wrench,
    defaultContactTitle: "既存システム・ツールの修正",
  },
  {
    id: "website_lp",
    title: "Webサイト・LP新規制作",
    desc: "Next.jsによる超高速表示/高CVR設計/コーポレートサイト",
    priceHint: "20万〜45万円",
    icon: Globe,
    defaultContactTitle: "Webサイトの構築",
  },
  {
    id: "webapp_system",
    title: "Webアプリ・システム構築",
    desc: "認証・DB・決済連携/独自SaaS/社内管理ツール開発",
    priceHint: "50万円〜",
    icon: Layers,
    defaultContactTitle: "システム開発の相談・見積り",
  },
  {
    id: "partner_consult",
    title: "技術顧問・開発パートナー",
    desc: "継続的な保守サポート/コードレビュー/アドバイザー",
    priceHint: "月額5万円〜",
    icon: Users,
    defaultContactTitle: "システム開発の相談・見積り",
  },
];

const STEP2_OPTIONS: Step2Option[] = [
  {
    id: "freelance",
    title: "個人事業主・フリーランス",
    desc: "少人数・個人予算でのスピーディな対応・小回り重視",
    icon: User,
  },
  {
    id: "smb",
    title: "中小企業・店舗の経営者・担当者",
    desc: "業務効率化・集客向上やシステム内製化の相談",
    icon: Building2,
  },
  {
    id: "partner",
    title: "Web制作会社・開発チーム",
    desc: "リソース不足の支援、技術アドバイザー、下請け/開発パートナー探し",
    icon: Users,
  },
];

const STEP3_OPTIONS: Step3Option[] = [
  {
    id: "urgent",
    title: "今すぐ・なるべく早く対応してほしい",
    desc: "最短即日〜数日内のクイック着手、特急スケジュール希望",
    icon: Zap,
  },
  {
    id: "month",
    title: "1ヶ月以内に完了したい",
    desc: "標準的な開発進行でしっかり設計・テストを行いたい",
    icon: Calendar,
  },
  {
    id: "flexible",
    title: "良い提案があれば具体的に検討したい",
    desc: "要件定義や技術選定から一緒にブレスト・設計したい",
    icon: Lightbulb,
  },
];

// --- 診断結果の計算ロジック ---
interface DiagnosticResult {
  planName: string;
  priceRange: string;
  deliveryTime: string;
  supportIncluded: string;
  benefits: string[];
  contactTitle: string;
}

function calculateResult(
  step1: Step1Option,
  step2: Step2Option,
  step3: Step3Option
): DiagnosticResult {
  let planName = "スポット改善プラン";
  let priceRange = "¥30,000 〜 ¥100,000";
  let deliveryTime = "最短2〜5営業日";
  let supportIncluded = "納品後1ヶ月無料保証付き";
  const benefits: string[] = [];

  switch (step1.id) {
    case "gas_automation":
      planName = "業務効率化・GAS/ツール自動化プラン";
      priceRange = "¥100,000 〜 ¥280,000";
      deliveryTime = step3.id === "urgent" ? "約1週間〜" : "2〜3週間";
      supportIncluded = "納品後1ヶ月無料保証 ＋ 簡易操作マニュアル付き";
      benefits.push("日々の手作業転記・集計をゼロにして本来業務に集中");
      benefits.push("Slack/LINE/Gmail/スプレッドシート連携で通知と共有を自動化");
      benefits.push("引き継ぎ用の簡易マニュアル・運用サポート付き");
      break;

    case "fix_consult":
      planName = "クイックスポット改修プラン";
      priceRange = "¥30,000 〜 ¥100,000";
      deliveryTime = step3.id === "urgent" ? "即日〜3営業日" : "約1週間";
      supportIncluded = "納品後2週間の動作保証・バグ修正対応";
      benefits.push("ピンポイントな修正で無駄なコストを徹底削減");
      benefits.push("原因特定からデプロイまでワンストップで迅速解決");
      benefits.push("改修箇所の動作保証・事後フォロー付き");
      break;

    case "website_lp":
      planName = "高パフォーマンスWebサイト・LP制作プラン";
      priceRange = "¥200,000 〜 ¥450,000";
      deliveryTime = step3.id === "urgent" ? "約2週間〜" : "3〜4週間";
      supportIncluded = "納品後1ヶ月無料保証 ＋ アナリティクス・独自ドメイン設定支援";
      benefits.push("Next.jsによる圧倒的な高速表示＆SEO最適化");
      benefits.push("スマホ・タブレット完全最適化＆高いCVR設計");
      benefits.push("フォーム・アナリティクス・独自ドメイン設定まで完備");
      break;

    case "webapp_system":
      planName = "フルスタックWebアプリ・システム構築プラン";
      priceRange = "¥500,000 〜 要件に応じお見積り";
      deliveryTime = step3.id === "urgent" ? "要相談（特急着手）" : "1〜2ヶ月";
      supportIncluded = "納品後1ヶ月無料バグ保証 ＋ 技術ドキュメント一式";
      benefits.push("企画・要件定義からDB設計、UI/UX実装まで一気通貫対応");
      benefits.push("最新モダンスタック（Next.js / Supabase / GCP）で堅牢構築");
      benefits.push("リリース後の保守・スケール・機能追加に強いクリーンコード");
      break;

    case "partner_consult":
      planName = "継続保守・技術顧問パートナープラン";
      priceRange = "月額 ¥50,000 〜 / 稼働内容に応じ柔軟設計";
      deliveryTime = step3.id === "urgent" ? "即日〜翌週スタート可" : "ご希望月より開始";
      supportIncluded = "随時チャット相談 ＋ 定期コードレビュー ＋ 月次MTG";
      benefits.push("エンジニア採用不要で最新スタックの技術相談役・顧問を確保");
      benefits.push("型安全なTypeScript・モダン環境でのコード品質担保");
      benefits.push("社内ツールの改修・緊急トラブル時の迅速なエスカレーション対応");
      break;
  }

  if (step2.id === "partner") {
    benefits[2] = "Git/GitHub運用、型安全なTypeScriptでチーム開発に即合流可能";
  } else if (step2.id === "freelance") {
    benefits[2] = "個人事業主同士の直接契約で中間マージンなし＆柔軟なご相談対応";
  }

  return {
    planName,
    priceRange,
    deliveryTime,
    supportIncluded,
    benefits,
    contactTitle: step1.defaultContactTitle,
  };
}

// --- Framer Motion アニメーションバリアント ---
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 30 : -30,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -30 : 30,
    opacity: 0,
  }),
};

export const EstimateDiagnostic = () => {
  const [step, setStep] = useState<number>(1);
  const [direction, setDirection] = useState<number>(1);

  const [selectedCategory, setSelectedCategory] = useState<Step1Option | null>(null);
  const [selectedTarget, setSelectedTarget] = useState<Step2Option | null>(null);
  const [selectedTimeline, setSelectedTimeline] = useState<Step3Option | null>(null);

  const goToNextStep = () => {
    setDirection(1);
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const goToPrevStep = () => {
    setDirection(-1);
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleReset = () => {
    setDirection(-1);
    setStep(1);
    setSelectedCategory(null);
    setSelectedTarget(null);
    setSelectedTimeline(null);
  };

  const handleSelectStep1 = (option: Step1Option) => {
    setSelectedCategory(option);
    goToNextStep();
  };

  const handleSelectStep2 = (option: Step2Option) => {
    setSelectedTarget(option);
    goToNextStep();
  };

  const handleSelectStep3 = (option: Step3Option) => {
    setSelectedTimeline(option);
    goToNextStep();
  };

  const result =
    selectedCategory && selectedTarget && selectedTimeline
      ? calculateResult(selectedCategory, selectedTarget, selectedTimeline)
      : null;

  const handleApplyToContact = () => {
    if (!result || !selectedCategory || !selectedTarget || !selectedTimeline) return;

    const formattedContent = `【業務課題・概算見積もり診断結果】
■ ご相談カテゴリ: ${selectedCategory.title}（${selectedCategory.priceHint}）
■ 解決したい課題: ${selectedCategory.desc}
■ お立場・対象: ${selectedTarget.title}
■ ご希望納期: ${selectedTimeline.title}
■ 提案プラン: ${result.planName}
■ 想定概算: ${result.priceRange}（目安納期: ${result.deliveryTime}）
■ 含まれるサポート: ${result.supportIncluded}
--------------------------------------------------
【詳細やご相談事項】
（※具体的なご要望や現状のお困りごとなどがあれば自由にご記入ください）`;

    const event = new CustomEvent("fueri:fill-contact", {
      detail: {
        title: result.contactTitle,
        content: formattedContent,
      },
    });
    window.dispatchEvent(event);

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const progressPercent = (step / 4) * 100;

  return (
    <div className="w-full h-full flex flex-col rounded-3xl bg-white border border-slate-200/90 shadow-md overflow-hidden transition-all duration-300">
      {/* 診断ヘッダー */}
      <div className="px-6 py-4 border-b border-slate-200/80 bg-slate-50/70 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400 inline-block" />
          </div>
          <div className="h-3.5 w-[1px] bg-slate-200 mx-1" />
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
            <Calculator className="w-3.5 h-3.5 text-rose-500" />
            <span>30秒 概算見積・課題診断</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
          <span className="text-slate-800 font-bold">Step {step}</span>
          <span>/ 4</span>
        </div>
      </div>

      {/* プログレスバー（アクセントローズのグラデーション） */}
      <div className="w-full h-1 bg-slate-100 relative overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-rose-500 via-rose-400 to-red-500"
          initial={{ width: "25%" }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
      </div>

      {/* ステップコンテンツ本体 */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between min-h-[380px]">
        <AnimatePresence custom={direction} mode="wait">
          {/* --- Step 1: カテゴリ選択 --- */}
          {step === 1 && (
            <motion.div
              key="step-1"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1.5">
                  <span className="text-[11px] font-bold text-rose-600 uppercase tracking-wider">
                    Step 1 / 4
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-medium text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200 inline-flex items-center">
                    【まずは30秒】お悩みをタップするだけで概算とプランがわかります
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-800 tracking-tight">
                  ご相談・ご依頼のカテゴリをお選びください
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  ご希望の範囲をクリックしてください（概算目安付き）
                </p>
              </div>

              {/* 3列の広々としたグリッド */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {STEP1_OPTIONS.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = selectedCategory?.id === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelectStep1(opt)}
                      className={`group w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between gap-3 ${
                        isSelected
                          ? "bg-gradient-to-r from-rose-500 to-red-600 text-white border-rose-500 shadow-sm shadow-rose-500/20 scale-[1.01]"
                          : "bg-slate-50/70 border-slate-200/80 hover:bg-white hover:border-rose-300 hover:shadow-xs text-slate-800"
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform ${
                              isSelected
                                ? "bg-white/20 text-white"
                                : "bg-white border border-slate-200/90 text-rose-500 group-hover:scale-105 shadow-2xs"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <span
                            className={`text-[10px] font-semibold font-mono px-2 py-0.5 rounded-full ${
                              isSelected
                                ? "bg-white/20 text-white"
                                : "bg-white border border-slate-200 text-slate-700"
                            }`}
                          >
                            {opt.priceHint}
                          </span>
                        </div>
                        <div>
                          <div className={`text-xs sm:text-sm font-bold transition-colors ${isSelected ? "text-white" : "group-hover:text-rose-600"}`}>
                            {opt.title}
                          </div>
                          <div className={`text-[11px] leading-relaxed mt-0.5 line-clamp-2 ${isSelected ? "text-rose-100" : "text-slate-500"}`}>
                            {opt.desc}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-end pt-1">
                        <span className={`text-[10px] font-medium flex items-center gap-0.5 ${isSelected ? "text-white" : "text-rose-600 group-hover:translate-x-0.5 transition-transform"}`}>
                          <span>選択する</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* --- Step 2: お立場・対象 --- */}
          {step === 2 && (
            <motion.div
              key="step-2"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <div>
                <span className="inline-block text-[11px] font-bold text-rose-600 uppercase tracking-wider mb-1">
                  Step 2 / 4
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-800 tracking-tight">
                  あなたのお立場・対象をお選びください
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  状況に最適なコミュニケーションと進行をご提案します
                </p>
              </div>

              {/* 4列の広々としたグリッド */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {STEP2_OPTIONS.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = selectedTarget?.id === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelectStep2(opt)}
                      className={`group w-full text-left p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between gap-3 ${
                        isSelected
                          ? "bg-gradient-to-r from-rose-500 to-red-600 text-white border-rose-500 shadow-sm shadow-rose-500/20 scale-[1.01]"
                          : "bg-slate-50/70 border-slate-200/80 hover:bg-white hover:border-rose-300 hover:shadow-xs text-slate-800"
                      }`}
                    >
                      <div className="space-y-2.5">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform ${
                            isSelected
                              ? "bg-white/20 text-white"
                              : "bg-white border border-slate-200/90 text-rose-500 group-hover:scale-105 shadow-2xs"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className={`text-xs sm:text-sm font-bold transition-colors ${isSelected ? "text-white" : "group-hover:text-rose-600"}`}>
                            {opt.title}
                          </div>
                          <div className={`text-[11px] leading-relaxed mt-0.5 ${isSelected ? "text-rose-100" : "text-slate-500"}`}>
                            {opt.desc}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-end pt-1">
                        <ChevronRight className={`w-4 h-4 transition-all ${isSelected ? "text-white" : "text-slate-400 group-hover:text-rose-500 group-hover:translate-x-0.5"}`} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* --- Step 3: 納期・スピード感 --- */}
          {step === 3 && (
            <motion.div
              key="step-3"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <div>
                <span className="inline-block text-[11px] font-bold text-rose-600 uppercase tracking-wider mb-1">
                  Step 3 / 4
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-800 tracking-tight">
                  ご希望の納期・スケジュール感は？
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  特急対応やお急ぎの案件も柔軟に対応しております
                </p>
              </div>

              {/* 4列の広々としたグリッド */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {STEP3_OPTIONS.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = selectedTimeline?.id === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelectStep3(opt)}
                      className={`group w-full text-left p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between gap-3 ${
                        isSelected
                          ? "bg-gradient-to-r from-rose-500 to-red-600 text-white border-rose-500 shadow-sm shadow-rose-500/20 scale-[1.01]"
                          : "bg-slate-50/70 border-slate-200/80 hover:bg-white hover:border-rose-300 hover:shadow-xs text-slate-800"
                      }`}
                    >
                      <div className="space-y-2.5">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform ${
                            isSelected
                              ? "bg-white/20 text-white"
                              : "bg-white border border-slate-200/90 text-rose-500 group-hover:scale-105 shadow-2xs"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className={`text-xs sm:text-sm font-bold transition-colors ${isSelected ? "text-white" : "group-hover:text-rose-600"}`}>
                            {opt.title}
                          </div>
                          <div className={`text-[11px] leading-relaxed mt-0.5 ${isSelected ? "text-rose-100" : "text-slate-500"}`}>
                            {opt.desc}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-end pt-1">
                        <ChevronRight className={`w-4 h-4 transition-all ${isSelected ? "text-white" : "text-slate-400 group-hover:text-rose-500 group-hover:translate-x-0.5"}`} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* --- Step 4: 診断結果・概算提示 (ワイド2カラム構成) --- */}
          {step === 4 && result && (
            <motion.div
              key="step-4"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <Badge variant="glow" className="text-[11px] py-0.5 px-3 gap-1 font-bold mb-1">
                    <Sparkles className="w-3 h-3 text-rose-500" />
                    <span>診断結果・ご提案プラン</span>
                  </Badge>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 tracking-tight font-title">
                    {result.planName}
                  </h3>
                </div>
                <button
                  onClick={handleReset}
                  className="text-xs text-slate-500 hover:text-rose-600 flex items-center gap-1 transition-colors px-2.5 py-1 rounded-full hover:bg-slate-100"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>条件を変えて再診断</span>
                </button>
              </div>

              {/* ワイド2カラムグリッド */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-1 items-start">
                {/* 左側: 金額・納期・サポート内容 (5カラム) */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/90 shadow-2xs space-y-3">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-rose-600 tracking-wider">
                        想定概算金額
                      </div>
                      <div className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-rose-600 to-red-600 bg-clip-text text-transparent font-mono mt-0.5">
                        {result.priceRange}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-200/80">
                      <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                        想定納期目安
                      </div>
                      <div className="text-base font-bold text-slate-800 mt-0.5">
                        {result.deliveryTime}
                      </div>
                    </div>
                  </div>

                  {/* 含まれるサポート内容 */}
                  <div className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl bg-teal-50/90 border border-teal-200/90 text-slate-800">
                    <div className="w-7 h-7 rounded-lg bg-teal-600 text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div className="text-xs leading-snug">
                      <span className="font-bold text-teal-800 block">安心の標準サポート</span>
                      <span className="text-teal-900 font-medium">{result.supportIncluded}</span>
                    </div>
                  </div>
                </div>

                {/* 右側: メリット箇条書き & CTAボタン (7カラム) */}
                <div className="lg:col-span-7 space-y-3.5">
                  <div className="space-y-1.5">
                    <div className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-teal-600" />
                      <span>このプランでの対応ポイント・メリット</span>
                    </div>
                    <div className="space-y-2 bg-slate-50/70 p-3.5 rounded-2xl border border-slate-200/80">
                      {result.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTAボタン */}
                  <div className="pt-1 space-y-1.5">
                    <Button
                      variant="primary"
                      size="md"
                      onClick={handleApplyToContact}
                      className="w-full justify-center shadow-sm hover:shadow-md hover:shadow-rose-500/20 group font-bold text-xs sm:text-sm py-3.5 rounded-full"
                    >
                      <span>この診断結果を添えて無料相談（30分）する</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-xs text-center text-slate-500 leading-relaxed px-1">
                      ※ 正式なご契約前の費用は一切発生しません。要件が固まっていない段階でのご相談も大歓迎です。
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 戻るナビゲーションバー（Step 2, 3 時） */}
        {step > 1 && step < 4 && (
          <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
            <button
              type="button"
              onClick={goToPrevStep}
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 font-medium transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>前のステップへ戻る</span>
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-700 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>やり直す</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EstimateDiagnostic;
