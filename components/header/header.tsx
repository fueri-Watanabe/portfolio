"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Calculator,
  Layers,
  Workflow,
  LayoutGrid,
  ShieldCheck,
  FileText,
  Users,
  BookOpen,
  User,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const Header = () => {
  const pathname = usePathname();
  const isDiagnosticPage = pathname === "/diagnostic";
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // モバイル用のアコーディオン開閉状態
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({
    services: true,
    projects: false,
    legal: false,
  });

  const toggleMobileGroup = (key: string) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // モバイルメニュー展開時の背景スクロールロック
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-[0_2px_15px_rgba(0,0,0,0.03)] dark:bg-slate-900/80 dark:border-slate-800"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 h-16 sm:h-18 flex items-center justify-between">
        {/* 左グループ: ブランドロゴ + ナビゲーションリンク */}
        <div className="flex items-center gap-6 lg:gap-8">
          {/* ブランドロゴ */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group transition-transform duration-200 active:scale-95 pl-0.5 shrink-0"
          >
            <div className="relative w-8 h-8 rounded-full p-0.5 shadow-xs group-hover:scale-105 transition-transform flex items-center justify-center bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-500 flex-shrink-0">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden p-0.5">
                <Image
                  src="/logo.webp"
                  alt="fueri"
                  width={26}
                  height={26}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base leading-none tracking-tight text-slate-800 group-hover:text-violet-600 transition-colors">
                fueri
              </span>
            </div>
          </Link>

          {/* デスクトップ用ドロップダウンナビゲーション (常時表示) */}
          {!isDiagnosticPage ? (
            <nav className="hidden md:flex items-center gap-1 border border-slate-200/80 bg-slate-50/80 px-2 py-1 rounded-full backdrop-blur-md">
              {/* 1. サービス & 料金 ドロップダウン */}
              <div className="relative group">
                <button
                  type="button"
                  className="flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full text-slate-600 group-hover:text-slate-900 group-hover:bg-white shadow-none group-hover:shadow-xs transition-all duration-200 outline-none"
                >
                  <span>サービス & 料金</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                {/* ドロップダウンメニューパネル */}
                <div className="absolute top-full left-0 pt-2 w-80 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
                  <div className="p-2 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xl flex flex-col gap-1">
                    {/* 積算見積シミュレーター */}
                    <Link
                      href="/diagnostic"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-violet-50/70 border border-transparent hover:border-violet-100 transition-all group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-violet-100/80 text-violet-700 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-105 transition-transform">
                        <Calculator className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-semibold text-slate-800 group-hover/item:text-violet-700 transition-colors">
                            積算見積シミュレーター
                          </span>
                          <span className="inline-flex items-center gap-0.5 text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-violet-100 text-violet-700">
                            ⚡️ おすすめ
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                          30秒で機能別の概算費用と納期をリアルタイム積算
                        </p>
                      </div>
                    </Link>

                    {/* 提供サービス・料金プラン */}
                    <Link
                      href="/#services"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100/80 border border-transparent transition-all group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-indigo-100/80 text-indigo-700 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-105 transition-transform">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-semibold text-slate-800 group-hover/item:text-indigo-600 transition-colors">
                          提供サービス・料金プラン
                        </span>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                          GAS自動化・LP制作・スポット改修・Webシステム開発
                        </p>
                      </div>
                    </Link>

                    {/* 開発の流れ & FAQ */}
                    <Link
                      href="/process"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100/80 border border-transparent transition-all group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-teal-100/80 text-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-105 transition-transform">
                        <Workflow className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-semibold text-slate-800 group-hover/item:text-teal-600 transition-colors">
                          開発の流れ & FAQ
                        </span>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                          発注から納品までの5ステップフローとよくある質問
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* 2. 実績 & 特徴 ドロップダウン */}
              <div className="relative group">
                <button
                  type="button"
                  className="flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full text-slate-600 group-hover:text-slate-900 group-hover:bg-white shadow-none group-hover:shadow-xs transition-all duration-200 outline-none"
                >
                  <span>実績 & 特徴</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                {/* ドロップダウンメニューパネル */}
                <div className="absolute top-full left-0 pt-2 w-72 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
                  <div className="p-2 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xl flex flex-col gap-1">
                    {/* 開発実績・事例 */}
                    <Link
                      href="/#projects"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100/80 border border-transparent transition-all group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-cyan-100/80 text-cyan-700 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-105 transition-transform">
                        <LayoutGrid className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-semibold text-slate-800 group-hover/item:text-cyan-700 transition-colors">
                          開発実績・事例 (Bento Grid)
                        </span>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                          プロダクト・Webシステム・社内ツールの制作実績
                        </p>
                      </div>
                    </Link>

                    {/* 選ばれる理由・品質保証 */}
                    <Link
                      href="/#why-choose-us"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100/80 border border-transparent transition-all group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-100/80 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-105 transition-transform">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-semibold text-slate-800 group-hover/item:text-amber-700 transition-colors">
                          選ばれる理由・品質保証
                        </span>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                          代表直通の高速開発と納品後30日無償バグ修正保証
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* 3. 代表プロフィール (直接リンク) */}
              <Link
                href="/about"
                className="text-xs font-medium px-3 py-1.5 rounded-full text-slate-600 hover:text-slate-900 hover:bg-white shadow-none hover:shadow-xs transition-all duration-200"
              >
                代表プロフィール
              </Link>

              {/* 4. 規約 & パートナー ドロップダウン */}
              <div className="relative group">
                <button
                  type="button"
                  className="flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full text-slate-600 group-hover:text-slate-900 group-hover:bg-white shadow-none group-hover:shadow-xs transition-all duration-200 outline-none"
                >
                  <span>規約 & パートナー</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                {/* ドロップダウンメニューパネル */}
                <div className="absolute top-full left-0 pt-2 w-72 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
                  <div className="p-2 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xl flex flex-col gap-1">
                    {/* ご利用規約・30日保証規定 */}
                    <Link
                      href="/terms"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100/80 border border-transparent transition-all group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-105 transition-transform">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-semibold text-slate-800 group-hover/item:text-slate-900 transition-colors">
                          ご利用規約・30日保証規定
                        </span>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                          無償保証の適用範囲・知財・検収規定の明文化
                        </p>
                      </div>
                    </Link>

                    {/* パートナー募集 */}
                    <Link
                      href="/partners"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100/80 border border-transparent transition-all group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-teal-100/80 text-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-105 transition-transform">
                        <Users className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-semibold text-slate-800 group-hover/item:text-teal-700 transition-colors">
                            パートナー募集
                          </span>
                          <span className="text-[9px] font-semibold px-1.5 py-0.2 rounded-full bg-teal-100 text-teal-700">
                            募集中
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                          エンジニア・デザイナー様との業務委託協業
                        </p>
                      </div>
                    </Link>

                    {/* パートナー品質ガイドライン */}
                    <Link
                      href="/partners/guideline"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100/80 border border-transparent transition-all group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-indigo-100/80 text-indigo-700 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-105 transition-transform">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-semibold text-slate-800 group-hover/item:text-indigo-700 transition-colors">
                          品質ガイドライン
                        </span>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                          TypeScript設計規約・Git運用・開発品質基準
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          ) : (
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-50/80 border border-violet-200/80 text-[11px] font-semibold text-violet-800">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-pulse" />
              30秒 概算積算シミュレーター
            </div>
          )}
        </div>

        {/* 右グループ: CTAボタン + モバイルハンバーガー */}
        <div className="flex items-center gap-2">
          {!isDiagnosticPage ? (
            <div className="hidden md:flex items-center gap-2 pr-0.5 shrink-0">
              <Link href="/#contact">
                <Button
                  variant="primary"
                  size="sm"
                  className="rounded-full px-4 text-xs font-semibold shadow-xs"
                >
                  <span>お問い合わせ</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          ) : (
            <div className="hidden sm:flex items-center pr-0.5 shrink-0">
              <Link
                href="/"
                className="text-xs font-medium text-slate-500 hover:text-violet-600 transition-colors"
              >
                fueri 公式トップへ ➔
              </Link>
            </div>
          )}

          {/* モバイル用ハンバーガーボタン (タップ領域 44px × 44px 確保) */}
          {!isDiagnosticPage && (
            <div className="flex items-center gap-1 md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-11 h-11 flex items-center justify-center rounded-full text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 active:bg-slate-200/80 transition-colors"
                aria-label={mobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* モバイル用アコーディオンメニュー + 背景オーバーレイ */}
      {mobileMenuOpen && (
        <>
          {/* 背景スクロール抑止 & タップで閉じるオーバーレイ */}
          <div
            className="fixed inset-0 bg-slate-900/30 backdrop-blur-xs z-40 md:hidden animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="pointer-events-auto fixed top-16 sm:top-18 left-3 sm:left-4 right-3 sm:right-4 max-w-sm mx-auto max-h-[82vh] overflow-y-auto p-4 rounded-3xl bg-white/95 backdrop-blur-2xl border border-slate-200 shadow-2xl flex flex-col gap-3 md:hidden animate-in fade-in slide-in-from-top-2 duration-200 z-50">
            <div className="flex flex-col gap-2">
              {/* 1. サービス & 料金 アコーディオン */}
              <div className="border border-slate-100 rounded-2xl overflow-hidden bg-slate-50/50">
                <button
                  type="button"
                  onClick={() => toggleMobileGroup("services")}
                  className="w-full min-h-[44px] flex items-center justify-between p-3 text-xs font-bold text-slate-800 hover:bg-slate-100/60 transition-colors"
                >
                  <span>サービス & 料金</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-slate-400 transition-transform duration-200",
                      mobileExpanded.services && "rotate-180 text-violet-600"
                    )}
                  />
                </button>
                {mobileExpanded.services && (
                  <div className="p-2 pt-0 flex flex-col gap-1 border-t border-slate-100/60">
                    <Link
                      href="/diagnostic"
                      onClick={() => setMobileMenuOpen(false)}
                      className="min-h-[44px] flex items-center justify-between p-2.5 rounded-xl bg-violet-50/60 text-violet-900 text-xs font-semibold"
                    >
                      <span className="flex items-center gap-2">
                        <Calculator className="w-3.5 h-3.5 text-violet-600" />
                        積算見積シミュレーター
                      </span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-violet-200/80 text-violet-800">
                        ⚡️ おすすめ
                      </span>
                    </Link>
                    <Link
                      href="/#services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="min-h-[44px] flex items-center gap-2 p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 text-xs font-medium"
                    >
                      <Layers className="w-3.5 h-3.5 text-indigo-500" />
                      提供サービス・料金プラン
                    </Link>
                    <Link
                      href="/process"
                      onClick={() => setMobileMenuOpen(false)}
                      className="min-h-[44px] flex items-center gap-2 p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 text-xs font-medium"
                    >
                      <Workflow className="w-3.5 h-3.5 text-teal-500" />
                      開発の流れ & FAQ
                    </Link>
                  </div>
                )}
              </div>

              {/* 2. 実績 & 特徴 アコーディオン */}
              <div className="border border-slate-100 rounded-2xl overflow-hidden bg-slate-50/50">
                <button
                  type="button"
                  onClick={() => toggleMobileGroup("projects")}
                  className="w-full min-h-[44px] flex items-center justify-between p-3 text-xs font-bold text-slate-800 hover:bg-slate-100/60 transition-colors"
                >
                  <span>実績 & 特徴</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-slate-400 transition-transform duration-200",
                      mobileExpanded.projects && "rotate-180 text-violet-600"
                    )}
                  />
                </button>
                {mobileExpanded.projects && (
                  <div className="p-2 pt-0 flex flex-col gap-1 border-t border-slate-100/60">
                    <Link
                      href="/#projects"
                      onClick={() => setMobileMenuOpen(false)}
                      className="min-h-[44px] flex items-center gap-2 p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 text-xs font-medium"
                    >
                      <LayoutGrid className="w-3.5 h-3.5 text-cyan-600" />
                      開発実績・事例 (Bento Grid)
                    </Link>
                    <Link
                      href="/#why-choose-us"
                      onClick={() => setMobileMenuOpen(false)}
                      className="min-h-[44px] flex items-center gap-2 p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 text-xs font-medium"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                      選ばれる理由・品質保証
                    </Link>
                  </div>
                )}
              </div>

              {/* 3. 代表プロフィール (直接リンク) */}
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] flex items-center gap-2 p-3 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-100/60 text-xs font-bold text-slate-800 transition-colors"
              >
                <User className="w-4 h-4 text-slate-500" />
                <span>代表プロフィール</span>
              </Link>

              {/* 4. 規約 & パートナー アコーディオン */}
              <div className="border border-slate-100 rounded-2xl overflow-hidden bg-slate-50/50">
                <button
                  type="button"
                  onClick={() => toggleMobileGroup("legal")}
                  className="w-full min-h-[44px] flex items-center justify-between p-3 text-xs font-bold text-slate-800 hover:bg-slate-100/60 transition-colors"
                >
                  <span>規約 & パートナー</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-slate-400 transition-transform duration-200",
                      mobileExpanded.legal && "rotate-180 text-violet-600"
                    )}
                  />
                </button>
                {mobileExpanded.legal && (
                  <div className="p-2 pt-0 flex flex-col gap-1 border-t border-slate-100/60">
                    <Link
                      href="/terms"
                      onClick={() => setMobileMenuOpen(false)}
                      className="min-h-[44px] flex items-center gap-2 p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 text-xs font-medium"
                    >
                      <FileText className="w-3.5 h-3.5 text-slate-500" />
                      ご利用規約・30日保証規定
                    </Link>
                    <Link
                      href="/partners"
                      onClick={() => setMobileMenuOpen(false)}
                      className="min-h-[44px] flex items-center justify-between p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 text-xs font-medium"
                    >
                      <span className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-teal-600" />
                        パートナー募集
                      </span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-teal-100 text-teal-700 font-semibold">
                        募集中
                      </span>
                    </Link>
                    <Link
                      href="/partners/guideline"
                      onClick={() => setMobileMenuOpen(false)}
                      className="min-h-[44px] flex items-center gap-2 p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 text-xs font-medium"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                      品質ガイドライン
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" className="w-full min-h-[44px] justify-center rounded-full text-xs py-3">
                  <span>お問い合わせフォーム</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;

