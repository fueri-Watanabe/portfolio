"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X, ArrowUpRight, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    // 初期判定とスクロールイベント
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "実績", href: "#projects" },
    { name: "強み & スキル", href: "#skills" },
    { name: "制作フロー", href: "#workflow" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none">
      {/* フローティング カプセル型バー */}
      <div
        className={cn(
          "pointer-events-auto transition-all duration-300 w-full max-w-5xl rounded-full px-4 py-2.5 flex items-center justify-between backdrop-blur-xl border",
          scrolled
            ? "bg-white/85 dark:bg-slate-900/85 border-slate-200/80 dark:border-white/10 shadow-xl shadow-slate-900/5 dark:shadow-black/40 scale-[0.98]"
            : "bg-white/30 dark:bg-slate-900/30 border-transparent shadow-none"
        )}
      >
        {/* 左: ブランドロゴ */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group transition-transform duration-200 active:scale-95 pl-1"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500 p-0.5 shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
            <div className="w-full h-full bg-white dark:bg-slate-950 rounded-full flex items-center justify-center">
              <Code2 className="w-4 h-4 text-cyan-500 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm leading-none tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
              fueri <span className="text-slate-400 text-xs font-normal">/ Hiroshi Watanabe</span>
            </span>
          </div>
        </Link>

        {/* 中央: デスクトップ用ナビゲーション */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/60 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-md px-3 py-1 rounded-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white px-3 py-1.5 rounded-full hover:bg-white/80 dark:hover:bg-slate-700/80 transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* 右: テーマ切り替え & CTAボタン */}
        <div className="hidden md:flex items-center gap-2 pr-1">
          <ThemeToggle />
          <Link href="#contact">
            <Button variant="primary" size="sm" className="rounded-full px-4 text-xs">
              <span>お問い合わせ</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>

        {/* モバイル用操作ボタン */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white rounded-full transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* モバイル用ポップアップメニュー */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed top-20 left-4 right-4 max-w-sm mx-auto p-5 rounded-3xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200 dark:border-white/10 shadow-2xl flex flex-col gap-3 md:hidden animate-in fade-in slide-in-from-top-4 duration-200 z-50">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-800 dark:text-slate-200 hover:text-cyan-500 font-medium py-2 px-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" className="w-full justify-center rounded-xl text-xs py-2.5">
                <span>お問い合わせフォーム</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
