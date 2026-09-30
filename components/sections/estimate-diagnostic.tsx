"use client";

import React, { useState, useMemo } from "react";
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
  Sparkles,
  ChevronRight,
  Calculator,
  ShieldCheck,
  CheckSquare,
  Square,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// --- 型定義 ---
export interface CategoryOption {
  id: "gas_automation" | "website_lp" | "spot_fix" | "webapp_system";
  title: string;
  badge: string;
  desc: string;
  basePrice: number;
  basePriceLabel: string;
  icon: React.ElementType;
  defaultContactTitle: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  desc: string;
  price: number;
  priceLabel: string;
  isPreset?: boolean;
}

export interface TargetOption {
  id: "freelance" | "smb" | "partner";
  title: string;
  desc: string;
  icon: React.ElementType;
}

export interface TimelineOption {
  id: "normal" | "urgent" | "flexible";
  title: string;
  desc: string;
  rate: number; // 割増率 (1.0 or 1.2)
  icon: React.ElementType;
}

export interface DiagnosticData {
  categoryTitle: string;
  categoryBadge: string;
  features: { title: string; priceLabel: string }[];
  subtotal: number;
  grandTotal: number;
  deliveryEstimate: string;
  isUrgent: boolean;
  urgentFee: number;
  targetTitle: string;
  summaryText: string;
}

// --- マスターデータ ---
const CATEGORIES: CategoryOption[] = [
  {
    id: "gas_automation",
    title: "業務自動化・社内DX (GAS)",
    badge: "人気 No.1",
    desc: "スプレッドシート/Slack/LINE/Gmail連携による手作業転記のゼロ化",
    basePrice: 50000,
    basePriceLabel: "¥50,000",
    icon: Cpu,
    defaultContactTitle: "システム開発の相談・見積り",
  },
  {
    id: "website_lp",
    title: "Webサイト・LP制作",
    badge: "おすすめ",
    desc: "Next.jsによる圧倒的高速表示・高CVR設計・SEO完全対応",
    basePrice: 150000,
    basePriceLabel: "¥150,000",
    icon: Globe,
    defaultContactTitle: "Webサイトの構築",
  },
  {
    id: "spot_fix",
    title: "スポット修正・改善",
    badge: "最短即日",
    desc: "デザイン崩れ調整/エラー特定・急なバグ修復/部分的な機能改修",
    basePrice: 30000,
    basePriceLabel: "¥30,000",
    icon: Wrench,
    defaultContactTitle: "既存システム・ツールの修正",
  },
  {
    id: "webapp_system",
    title: "Webシステム開発・SaaS構築",
    badge: "本格開発",
    desc: "ユーザー認証・DB設計・Stripe決済・独自業務管理ツール・MVP開発",
    basePrice: 350000,
    basePriceLabel: "¥350,000",
    icon: Layers,
    defaultContactTitle: "システム開発の相談・見積り",
  },
];

const FEATURES_BY_CATEGORY: Record<CategoryOption["id"], FeatureItem[]> = {
  gas_automation: [
    {
      id: "gas_slack",
      title: "Slack / LINE / Chatwork 通知連携",
      desc: "データ変更やリマインド・通知をチャットへ自動送信",
      price: 20000,
      priceLabel: "+¥20,000",
      isPreset: true,
    },
    {
      id: "gas_gmail",
      title: "Gmail 自動送受信・定型メール送信",
      desc: "受付完了通知や請求・督促メールの自動配信",
      price: 25000,
      priceLabel: "+¥25,000",
      isPreset: true,
    },
    {
      id: "gas_forms",
      title: "Googleフォーム / Webフォーム自動連携",
      desc: "回答データを自動集計しスプレッドシートへリアルタイム転記",
      price: 20000,
      priceLabel: "+¥20,000",
      isPreset: true,
    },
    {
      id: "gas_api",
      title: "外部SaaS / REST API連携",
      desc: "HubSpot / kintone / 決済APIなどとの双方向データ同期",
      price: 40000,
      priceLabel: "+¥40,000",
    },
    {
      id: "gas_trigger",
      title: "定期スケジュール自動実行トリガー",
      desc: "毎朝・毎時・月末締めなどの自動バッチ処理設定",
      price: 15000,
      priceLabel: "+¥15,000",
    },
    {
      id: "gas_manual",
      title: "操作マニュアル & 運用手順書作成",
      desc: "社内メンバーへの引き継ぎがスムーズになる操作ガイド",
      price: 15000,
      priceLabel: "+¥15,000",
      isPreset: true,
    },
  ],
  website_lp: [
    {
      id: "web_form",
      title: "お問い合わせフォーム実装",
      desc: "自動返信メール・Slack通知・スパム対策・バリデーション完備",
      price: 30000,
      priceLabel: "+¥30,000",
      isPreset: true,
    },
    {
      id: "web_seo",
      title: "SEO・OGP・メタタグ最適化設定",
      desc: "検索上位表示のための構造化データ設定とSNSシェア最適化",
      price: 20000,
      priceLabel: "+¥20,000",
      isPreset: true,
    },
    {
      id: "web_analytics",
      title: "Googleアナリティクス (GA4) / GTM導入",
      desc: "アクセス解析とコンバージョン計測の初期セットアップ",
      price: 15000,
      priceLabel: "+¥15,000",
      isPreset: true,
    },
    {
      id: "web_pages",
      title: "下層ページ追加（3〜5ページ程度）",
      desc: "会社概要・サービス詳細・プライバシーポリシー等を追加",
      price: 60000,
      priceLabel: "+¥60,000",
    },
    {
      id: "web_animation",
      title: "リッチアニメーション演出",
      desc: "Framer Motionによるスクロール連動や洗練された動き",
      price: 30000,
      priceLabel: "+¥30,000",
    },
    {
      id: "web_cms",
      title: "ヘッドレスCMS連携 (microCMS等)",
      desc: "お知らせやブログ記事を非エンジニアでも更新可能にする設計",
      price: 50000,
      priceLabel: "+¥50,000",
    },
  ],
  spot_fix: [
    {
      id: "fix_responsive",
      title: "スマホ表示崩れ・CSSレスポンシブ修正",
      desc: "画面幅によって崩れるレイアウトや文字重なりを解消",
      price: 15000,
      priceLabel: "+¥15,000",
      isPreset: true,
    },
    {
      id: "fix_js_bug",
      title: "JavaScript / React エラー・バグ特定と修正",
      desc: "ボタンが動かない・コンソールエラーが出る不具合を即座に修復",
      price: 25000,
      priceLabel: "+¥25,000",
      isPreset: true,
    },
    {
      id: "fix_form",
      title: "メール送信不具合・フォーム修復",
      desc: "送信エラーや届かない不具合の調査・修正と送信テスト",
      price: 20000,
      priceLabel: "+¥20,000",
    },
    {
      id: "fix_speed",
      title: "ページ表示速度高速化・画像最適化",
      desc: "PageSpeed Insights / Core Web Vitalsのスコア改善",
      price: 30000,
      priceLabel: "+¥30,000",
    },
    {
      id: "fix_security",
      title: "ライブラリ更新・セキュリティ対策",
      desc: "古いnpmパッケージの脆弱性解消とバージョンアップ",
      price: 25000,
      priceLabel: "+¥25,000",
    },
    {
      id: "fix_qa",
      title: "実機動作検証 & 事後レポート",
      desc: "複数ブラウザ・実機端末での動作確認と改修報告書",
      price: 15000,
      priceLabel: "+¥15,000",
      isPreset: true,
    },
  ],
  webapp_system: [
    {
      id: "app_auth",
      title: "ユーザー認証・ログイン管理 (Supabase/Firebase)",
      desc: "メール認証・Googleログイン・権限管理・パスワードリセット",
      price: 60000,
      priceLabel: "+¥60,000",
      isPreset: true,
    },
    {
      id: "app_admin",
      title: "管理者用ダッシュボード",
      desc: "データ一覧閲覧・新規追加・編集・削除(CRUD)機能",
      price: 70000,
      priceLabel: "+¥70,000",
      isPreset: true,
    },
    {
      id: "app_stripe",
      title: "Stripe決済 / サブスクリプション課金連携",
      desc: "クレジットカード決済・定期課金・インボイス対応領収書発行",
      price: 80000,
      priceLabel: "+¥80,000",
    },
    {
      id: "app_email",
      title: "トランザクショナルメール自動送信",
      desc: "Resend / SendGrid連携による通知やステータスメール",
      price: 30000,
      priceLabel: "+¥30,000",
    },
    {
      id: "app_storage",
      title: "画像・ファイルアップロード機能",
      desc: "クラウドストレージ連携と安全なアクセス制御",
      price: 40000,
      priceLabel: "+¥40,000",
    },
    {
      id: "app_api",
      title: "外部API連携 / Webhook受信",
      desc: "他社サービスとのリアルタイム双方向データ送受信",
      price: 50000,
      priceLabel: "+¥50,000",
    },
  ],
};

const TARGET_OPTIONS: TargetOption[] = [
  {
    id: "freelance",
    title: "個人事業主・スタートアップ",
    desc: "少人数予算での小回りとスピード重視のクイック開発",
    icon: User,
  },
  {
    id: "smb",
    title: "中小企業・店舗・法人",
    desc: "現場の業務課題解決・社内ツールDX・集客向上",
    icon: Building2,
  },
  {
    id: "partner",
    title: "制作会社・開発チーム",
    desc: "リソース不足支援・技術アドバイザー・開発パートナー",
    icon: Users,
  },
];

const TIMELINE_OPTIONS: TimelineOption[] = [
  {
    id: "normal",
    title: "標準スケジュール（通常）",
    desc: "品質検証・テストを丁寧に行い確実に納品（割増なし）",
    rate: 1.0,
    icon: Calendar,
  },
  {
    id: "urgent",
    title: "特急対応（なるべく早く）",
    desc: "最優先で初期着手し最短納期でリリース（特急割増 +20%）",
    rate: 1.2,
    icon: Zap,
  },
  {
    id: "flexible",
    title: "要相談・じっくり検討",
    desc: "仕様や要件定義から一緒に相談して決定（割増なし）",
    rate: 1.0,
    icon: Lightbulb,
  },
];

// アニメーション
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 25 : -25,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -25 : 25,
    opacity: 0,
  }),
};

export const EstimateDiagnostic = () => {
  const [step, setStep] = useState<number>(1);
  const [direction, setDirection] = useState<number>(1);

  // 選択状態
  const [selectedCategory, setSelectedCategory] = useState<CategoryOption>(CATEGORIES[0]);
  const [selectedFeatureIds, setSelectedFeatureIds] = useState<string[]>([]);
  const [selectedTarget, setSelectedTarget] = useState<TargetOption>(TARGET_OPTIONS[1]);
  const [selectedTimeline, setSelectedTimeline] = useState<TimelineOption>(TIMELINE_OPTIONS[0]);

  // カテゴリ変更時にプリセットを自動適用
  const handleSelectCategory = (cat: CategoryOption) => {
    setSelectedCategory(cat);
    const presets = FEATURES_BY_CATEGORY[cat.id]
      .filter((f) => f.isPreset)
      .map((f) => f.id);
    setSelectedFeatureIds(presets);
    setDirection(1);
    setStep(2);
  };

  // 機能のトグル
  const handleToggleFeature = (featureId: string) => {
    setSelectedFeatureIds((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId]
    );
  };

  // おすすめプリセット選択
  const handleApplyPresets = () => {
    const presets = FEATURES_BY_CATEGORY[selectedCategory.id]
      .filter((f) => f.isPreset)
      .map((f) => f.id);
    setSelectedFeatureIds(presets);
  };

  // 全選択・全解除
  const handleToggleAllFeatures = () => {
    const allIds = FEATURES_BY_CATEGORY[selectedCategory.id].map((f) => f.id);
    if (selectedFeatureIds.length === allIds.length) {
      setSelectedFeatureIds([]);
    } else {
      setSelectedFeatureIds(allIds);
    }
  };

  // ナビゲーション
  const goToStep = (targetStep: number) => {
    setDirection(targetStep > step ? 1 : -1);
    setStep(targetStep);
  };

  const handleReset = () => {
    setDirection(-1);
    setStep(1);
    setSelectedCategory(CATEGORIES[0]);
    setSelectedFeatureIds([]);
    setSelectedTarget(TARGET_OPTIONS[1]);
    setSelectedTimeline(TIMELINE_OPTIONS[0]);
  };

  // 積算金額の計算
  const currentFeatures = FEATURES_BY_CATEGORY[selectedCategory.id] || [];
  const selectedFeatureObjects = useMemo(() => {
    return currentFeatures.filter((f) => selectedFeatureIds.includes(f.id));
  }, [currentFeatures, selectedFeatureIds]);

  const featureTotal = useMemo(() => {
    return selectedFeatureObjects.reduce((sum, f) => sum + f.price, 0);
  }, [selectedFeatureObjects]);

  const subtotal = selectedCategory.basePrice + featureTotal;
  const isUrgent = selectedTimeline.id === "urgent";
  const urgentFee = isUrgent ? Math.round(subtotal * 0.2) : 0;
  const grandTotal = subtotal + urgentFee;

  // 想定納期
  const deliveryEstimate = useMemo(() => {
    switch (selectedCategory.id) {
      case "spot_fix":
        return isUrgent ? "最短即日 〜 2営業日" : "最短2 〜 4営業日";
      case "gas_automation":
        return isUrgent ? "最短3営業日 〜 1週間" : "1週間 〜 2週間";
      case "website_lp":
        return isUrgent ? "約1週間 〜 10日" : "2週間 〜 3週間";
      case "webapp_system":
        return isUrgent ? "最短3週間 〜 1ヶ月" : "1ヶ月 〜 1.5ヶ月";
    }
  }, [selectedCategory.id, isUrgent]);

  // お問い合わせフォームへの自動反映
  const handleApplyToContact = () => {
    const featureLines =
      selectedFeatureObjects.length > 0
        ? selectedFeatureObjects.map((f) => `  - ${f.title} (${f.priceLabel})`).join("\n")
        : "  - （追加オプションなし）";

    const formattedContent = `【積算シミュレーター概算お見積り詳細】
■ ご依頼カテゴリ: ${selectedCategory.title}
■ 基本ベース設計費: ¥${selectedCategory.basePrice.toLocaleString()}
■ 選択された詳細機能 (${selectedFeatureObjects.length}項目):
${featureLines}
--------------------------------------------------
■ 基本機能小計: ¥${subtotal.toLocaleString()}
■ 納期スケジュール: ${selectedTimeline.title} ${isUrgent ? `(特急加算: +¥${urgentFee.toLocaleString()})` : ""}
■ お立場・組織: ${selectedTarget.title}
--------------------------------------------------
★ 概算お見積り合計: ¥${grandTotal.toLocaleString()} 〜（目安納期: ${deliveryEstimate}）
★ 標準サポート: 納品後1ヶ月無料バグ保証 ＋ 操作マニュアル/コード引き渡し
--------------------------------------------------
【具体的なご要望やお困りごと】
（※現在お使いのツールや、解決したい課題などがあれば自由にご記入ください）`;

    const event = new CustomEvent("fueri:fill-contact", {
      detail: {
        title: selectedCategory.defaultContactTitle,
        content: formattedContent,
        diagnosticData: {
          categoryTitle: selectedCategory.title,
          categoryBadge: selectedCategory.badge,
          features: selectedFeatureObjects.map((f) => ({
            title: f.title,
            priceLabel: f.priceLabel,
          })),
          subtotal: subtotal,
          grandTotal: grandTotal,
          deliveryEstimate: deliveryEstimate,
          isUrgent: isUrgent,
          urgentFee: urgentFee,
          targetTitle: selectedTarget.title,
          summaryText: formattedContent,
        },
      },
    });
    window.dispatchEvent(event);

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stepsList = [
    { num: 1, label: "カテゴリ" },
    { num: 2, label: "機能選択" },
    { num: 3, label: "納期・立場" },
    { num: 4, label: "見積結果" },
  ];

  return (
    <div
      id="estimate-diagnostic"
      className="w-full h-full flex flex-col rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-glass hover:shadow-glass-hover hover:border-violet-300/80 hover:ring-1 hover:ring-violet-500/20 overflow-hidden transition-all duration-300 scroll-mt-24"
    >
      {/* 診断ヘッダー */}
      <div className="px-5 sm:px-6 py-3.5 border-b border-slate-200/70 bg-white/70 backdrop-blur-md flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-violet-500 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" />
          </div>
          <div className="h-3.5 w-[1px] bg-slate-200 mx-1" />
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
            <Calculator className="w-3.5 h-3.5 text-violet-600" />
            <span>30秒 積算見積シミュレーター</span>
          </div>
        </div>

        {/* リアルタイムミニ小計（Step 2, 3表示時） */}
        {step >= 2 && step <= 3 && (
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-400 hidden sm:inline">現在の積算小計:</span>
            <span className="text-xs sm:text-sm font-extrabold font-mono bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
              ¥{(step === 3 ? grandTotal : subtotal).toLocaleString()}〜
            </span>
          </div>
        )}
      </div>

      {/* ステップ進行インジケーター */}
      <div className="px-5 sm:px-6 py-2.5 bg-slate-50/60 border-b border-slate-100 flex items-center justify-between text-[11px] font-medium text-slate-500">
        <div className="flex items-center gap-1.5 sm:gap-2 w-full justify-between max-w-md mx-auto">
          {stepsList.map((s, idx) => {
            const isActive = step === s.num;
            const isDone = step > s.num;
            return (
              <React.Fragment key={s.num}>
                <button
                  type="button"
                  onClick={() => s.num < step && goToStep(s.num)}
                  disabled={s.num > step}
                  className={`flex items-center gap-1 transition-all ${
                    isActive
                      ? "text-violet-700 font-bold"
                      : isDone
                      ? "text-slate-700 hover:text-violet-600 cursor-pointer"
                      : "text-slate-400 cursor-default"
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      isActive
                        ? "bg-violet-600 text-white shadow-2xs"
                        : isDone
                        ? "bg-violet-100 text-violet-700"
                        : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    {isDone ? "✓" : s.num}
                  </span>
                  <span className="hidden sm:inline">{s.label}</span>
                </button>
                {idx < stepsList.length - 1 && (
                  <span className="text-slate-300 text-xs">➔</span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* プログレスグラデーションバー */}
      <div className="w-full h-1 bg-slate-100 relative overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500"
          initial={{ width: "25%" }}
          animate={{ width: `${(step / 4) * 100}%` }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
      </div>

      {/* ステップコンテンツ本体 */}
      <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between min-h-[440px]">
        <AnimatePresence custom={direction} mode="wait">
          {/* ================= STEP 1: 大カテゴリ選択 ================= */}
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
                <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1">
                  <span className="text-[11px] font-bold text-violet-600 uppercase tracking-wider">
                    Step 1 / 4
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-medium text-violet-700 bg-violet-50/80 px-2.5 py-0.5 rounded-full border border-violet-200/80 inline-flex items-center">
                    タップすると詳細な機能チェックに進みます
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-800 tracking-tight">
                  ご相談・ご依頼の大カテゴリをお選びください
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  ご希望の分野を選択してください（次のステップで必要な機能を細かく選べます）
                </p>
              </div>

              {/* 4つのカテゴリカード */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = selectedCategory.id === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleSelectCategory(cat)}
                      className={`group w-full text-left p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between gap-3 ${
                        isSelected
                          ? "bg-white border-violet-400 ring-2 ring-violet-500/20 shadow-glass"
                          : "bg-white/70 backdrop-blur-md border-slate-200/80 hover:bg-white hover:border-violet-300/80 hover:ring-1 hover:ring-violet-500/20 hover:shadow-glass hover:-translate-y-0.5 text-slate-800"
                      }`}
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between gap-2">
                          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-500 text-white shadow-2xs">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-violet-50 text-violet-700 border border-violet-200/70">
                            {cat.badge}
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-800 group-hover:text-violet-600 transition-colors">
                            {cat.title}
                          </div>
                          <div className="text-[11px] text-slate-500 leading-relaxed mt-1 line-clamp-2">
                            {cat.desc}
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                        <div className="text-[10px] text-slate-400">
                          基本設計費:{" "}
                          <span className="font-mono font-bold text-slate-700 text-xs">
                            {cat.basePriceLabel}〜
                          </span>
                        </div>
                        <span className="text-[11px] font-semibold text-violet-600 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                          機能を選ぶ <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* ================= STEP 2: 詳細機能の複数選択 (ドリルダウン) ================= */}
          {step === 2 && (
            <motion.div
              key="step-2"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              {/* ヘッダー & プリセット切り替え */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-violet-600 uppercase tracking-wider">
                      Step 2 / 4
                    </span>
                    <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">
                      {selectedCategory.title}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 tracking-tight mt-0.5">
                    必要な機能を複数選択してください（リアルタイム積算）
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 self-end sm:self-auto">
                  <button
                    type="button"
                    onClick={handleApplyPresets}
                    className="text-[11px] font-semibold text-violet-700 bg-violet-50 hover:bg-violet-100/80 border border-violet-200/80 px-2.5 py-1 rounded-full flex items-center gap-1 transition-colors"
                  >
                    <Sparkles className="w-3 h-3 text-violet-600" />
                    <span>おすすめ構成</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleToggleAllFeatures}
                    className="text-[11px] text-slate-500 hover:text-slate-800 border border-slate-200 px-2 py-1 rounded-full transition-colors"
                  >
                    {selectedFeatureIds.length === currentFeatures.length ? "選択解除" : "すべて選ぶ"}
                  </button>
                </div>
              </div>

              {/* チェックボックスグリッド */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[320px] sm:max-h-[340px] overflow-y-auto pr-1">
                {currentFeatures.map((item) => {
                  const isChecked = selectedFeatureIds.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleToggleFeature(item.id)}
                      className={`p-3 rounded-2xl border cursor-pointer transition-all duration-200 flex items-start gap-2.5 ${
                        isChecked
                          ? "bg-violet-50/50 border-violet-400/80 ring-1 ring-violet-500/20 shadow-2xs"
                          : "bg-white/70 border-slate-200/80 hover:bg-white hover:border-slate-300"
                      }`}
                    >
                      <div className="mt-0.5 flex-shrink-0">
                        {isChecked ? (
                          <div className="w-4 h-4 rounded-md bg-gradient-to-tr from-violet-600 to-cyan-500 text-white flex items-center justify-center shadow-2xs">
                            <CheckSquare className="w-3.5 h-3.5" />
                          </div>
                        ) : (
                          <Square className="w-4 h-4 text-slate-300" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1.5">
                          <span
                            className={`text-xs font-bold leading-snug transition-colors ${
                              isChecked ? "text-violet-950" : "text-slate-800"
                            }`}
                          >
                            {item.title}
                          </span>
                          <span
                            className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                              isChecked
                                ? "bg-violet-600 text-white"
                                : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            {item.priceLabel}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* 下部リアルタイム積算バー */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-violet-500/10 via-indigo-500/10 to-cyan-500/10 border border-violet-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-violet-700 block">
                      現在の機能積算小計
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl sm:text-2xl font-extrabold font-mono bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                        ¥{subtotal.toLocaleString()}〜
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">
                        （基本設計 + {selectedFeatureObjects.length}機能）
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => goToStep(3)}
                  className="w-full sm:w-auto rounded-full font-bold px-5 py-2 text-xs flex items-center justify-center gap-1.5 shadow-glass"
                >
                  <span>納期・お立場選択へ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* ================= STEP 3: お立場・納期感 ================= */}
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
                <span className="text-[11px] font-bold text-violet-600 uppercase tracking-wider">
                  Step 3 / 4
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-800 tracking-tight mt-0.5">
                  ご希望の納期とお立場をお選びください
                </h3>
              </div>

              {/* 納期選択 */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-700 block">
                  ① ご希望のスケジュール・納期感:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {TIMELINE_OPTIONS.map((t) => {
                    const Icon = t.icon;
                    const isSelected = selectedTimeline.id === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setSelectedTimeline(t)}
                        className={`p-3 rounded-2xl border text-left transition-all ${
                          isSelected
                            ? "bg-violet-50/70 border-violet-500 ring-2 ring-violet-500/20 shadow-2xs"
                            : "bg-white/70 border-slate-200/80 hover:bg-white hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <Icon
                            className={`w-4 h-4 ${
                              isSelected ? "text-violet-600" : "text-slate-400"
                            }`}
                          />
                          {t.id === "urgent" && (
                            <span className="text-[10px] font-bold bg-rose-100 text-rose-700 px-1.5 py-0.2 rounded">
                              +20%
                            </span>
                          )}
                        </div>
                        <div className="text-xs font-bold text-slate-800">{t.title}</div>
                        <div className="text-[10px] text-slate-500 mt-0.5 leading-tight">
                          {t.desc}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* お立場選択 */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-bold text-slate-700 block">
                  ② あなたのお立場・組織規模:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {TARGET_OPTIONS.map((target) => {
                    const Icon = target.icon;
                    const isSelected = selectedTarget.id === target.id;
                    return (
                      <button
                        key={target.id}
                        type="button"
                        onClick={() => setSelectedTarget(target)}
                        className={`p-3 rounded-2xl border text-left transition-all ${
                          isSelected
                            ? "bg-cyan-50/70 border-cyan-500 ring-2 ring-cyan-500/20 shadow-2xs"
                            : "bg-white/70 border-slate-200/80 hover:bg-white hover:border-slate-300"
                        }`}
                      >
                        <Icon
                          className={`w-4 h-4 mb-1 ${
                            isSelected ? "text-cyan-600" : "text-slate-400"
                          }`}
                        />
                        <div className="text-xs font-bold text-slate-800">{target.title}</div>
                        <div className="text-[10px] text-slate-500 mt-0.5 leading-tight">
                          {target.desc}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 積算結果プレビュー ＆ 確定ボタン */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] text-slate-400 block">確定概算金額</span>
                  <div className="text-lg sm:text-xl font-mono font-extrabold text-slate-800">
                    ¥{grandTotal.toLocaleString()}
                    <span className="text-xs font-normal text-slate-500">〜 (税込)</span>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  onClick={() => goToStep(4)}
                  className="rounded-full font-bold px-6 py-2.5 text-xs sm:text-sm flex items-center gap-1.5 shadow-glass"
                >
                  <span>詳細内訳・見積結果を見る</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* ================= STEP 4: 詳細見積もり結果画面 (内訳カード) ================= */}
          {step === 4 && (
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
              {/* 見出し */}
              <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                <div>
                  <Badge variant="glow" className="text-[10px] py-0.5 px-2.5 gap-1 font-bold mb-0.5">
                    <Sparkles className="w-3 h-3 text-cyan-500" />
                    <span>積算シミュレーション結果</span>
                  </Badge>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-800 font-title tracking-tight">
                    {selectedCategory.title} のお見積り明細
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-slate-500 hover:text-violet-600 flex items-center gap-1 transition-colors px-2.5 py-1 rounded-full hover:bg-slate-100"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">最初からやり直す</span>
                </button>
              </div>

              {/* 2カラム構成：左側に明細内訳、右側に金額・納期・CTA */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
                {/* 左側: 機能明細一覧 (7カラム) */}
                <div className="lg:col-span-7 space-y-2">
                  <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-2xs space-y-2 text-xs">
                    <div className="text-[11px] font-bold text-slate-600 border-b border-slate-100 pb-1.5 flex justify-between">
                      <span>構成項目</span>
                      <span>金額</span>
                    </div>

                    {/* 基本ベース費 */}
                    <div className="flex justify-between items-center text-slate-700">
                      <div>
                        <span className="font-semibold block">基本設計・基盤構築費</span>
                        <span className="text-[10px] text-slate-400">アーキテクチャ設計・環境構築</span>
                      </div>
                      <span className="font-mono font-bold text-slate-800">
                        ¥{selectedCategory.basePrice.toLocaleString()}
                      </span>
                    </div>

                    {/* 選択した機能一覧 */}
                    {selectedFeatureObjects.map((f) => (
                      <div
                        key={f.id}
                        className="flex justify-between items-center text-slate-700 border-t border-slate-100/80 pt-1.5"
                      >
                        <div className="pr-2">
                          <span className="font-medium text-slate-800 block leading-tight">
                            + {f.title}
                          </span>
                        </div>
                        <span className="font-mono font-semibold text-slate-700 flex-shrink-0">
                          ¥{f.price.toLocaleString()}
                        </span>
                      </div>
                    ))}

                    {/* 特急料金 (該当時) */}
                    {isUrgent && (
                      <div className="flex justify-between items-center text-rose-700 border-t border-slate-100 pt-1.5 bg-rose-50/60 px-2 py-1 rounded-lg">
                        <span className="font-bold flex items-center gap-1">
                          <Zap className="w-3.5 h-3.5" />
                          特急進行対応費 (+20%)
                        </span>
                        <span className="font-mono font-bold">+¥{urgentFee.toLocaleString()}</span>
                      </div>
                    )}
                  </div>

                  {/* 保証バッジ */}
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-cyan-50/70 border border-cyan-200/70 text-slate-800 text-[11px]">
                    <ShieldCheck className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                    <span>納品後1ヶ月無料バグ修正保証 ＋ 運用マニュアル・コード引き渡し付き</span>
                  </div>
                </div>

                {/* 右側: 合計金額 & 納期 & CTAボタン (5カラム) */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-violet-600/5 via-indigo-600/5 to-cyan-500/10 border border-violet-200/80 shadow-glass space-y-2.5">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-violet-700 tracking-wider">
                        概算お見積り合計
                      </span>
                      <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent font-mono">
                        ¥{grandTotal.toLocaleString()}〜
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs">
                      <span className="text-slate-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-violet-600" />
                        目安納期:
                      </span>
                      <span className="font-bold text-slate-800">{deliveryEstimate}</span>
                    </div>
                  </div>

                  {/* CTAボタン */}
                  <div className="space-y-1.5">
                    <Button
                      variant="primary"
                      size="md"
                      onClick={handleApplyToContact}
                      className="w-full justify-center shadow-glass hover:shadow-glass-hover group font-bold text-xs sm:text-sm py-3 rounded-full"
                    >
                      <span>この詳細見積もりを添えて無料相談する</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-[10px] text-center text-slate-400">
                      ※ 正式契約前の費用は一切発生しません。要件整理からお気軽にどうぞ。
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 戻る・やり直しバー (Step 2, 3) */}
        {step > 1 && step < 4 && (
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-2">
            <button
              type="button"
              onClick={() => goToStep(step - 1)}
              className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 font-medium transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>前のステップへ戻る</span>
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-700 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>やり直す</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EstimateDiagnostic;
