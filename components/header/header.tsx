"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "サービス", href: "/#services" },
    { name: "選ばれる理由", href: "/#why-choose-us" },
    { name: "開発の流れ", href: "/#process-flow" },
    { name: "実績", href: "/#projects" },
    { name: "プロフィール", href: "/about" },
    { name: "FAQ", href: "/process" },
  ];

  return (
    <header className="fixed top-5 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none">
      {/* フローティング カプセル型バー */}
      <div
        className={cn(
          "pointer-events-auto transition-all duration-300 w-full max-w-5xl rounded-full px-4 py-2.5 flex items-center justify-between backdrop-blur-xl border",
          scrolled
            ? "bg-white/95 border-sky-100 shadow-[0_12px_36px_rgba(14,165,233,0.08)] scale-[0.99]"
            : "bg-white/85 border-slate-200/80 shadow-[0_8px_30px_rgba(15,23,42,0.05)]"
        )}
      >
        {/* 左: ブランドロゴ */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group transition-transform duration-200 active:scale-95 pl-1.5"
        >
          <div className="w-8 h-8 rounded-full p-0.5 shadow-sm group-hover:scale-105 transition-transform flex items-center justify-center bg-gradient-to-tr from-[#174668] to-[#2c6e8f] text-white">
            <Code2 className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm leading-none tracking-tight text-slate-900 group-hover:text-sky-900 transition-colors">
              fueri{" "}
              <span className="text-xs font-normal text-slate-400">
                / Hiroshi Watanabe
              </span>
            </span>
          </div>
        </Link>

        {/* 中央: デスクトップ用ナビゲーション */}
        <nav className="hidden md:flex items-center gap-1 border border-slate-200/60 bg-slate-50/80 px-3 py-1 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-medium px-3 py-1.5 rounded-full text-slate-600 hover:text-slate-900 hover:bg-white transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* 右: CTAボタン */}
        <div className="hidden md:flex items-center gap-2 pr-1">
          <Link href="/#contact">
            <Button
              variant="primary"
              size="sm"
              className="rounded-full px-4 text-xs font-semibold shadow-sm transition-all bg-gradient-to-r from-[#174668] to-[#286b8b] hover:from-[#113550] hover:to-[#205975] text-white shadow-sky-950/15"
            >
              <span>お問い合わせ</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>

        {/* モバイル用操作ボタン */}
        <div className="flex items-center gap-1 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* モバイル用ポップアップメニュー */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed top-20 left-4 right-4 max-w-sm mx-auto p-5 rounded-3xl bg-white/95 backdrop-blur-2xl border border-sky-100 shadow-2xl flex flex-col gap-3 md:hidden animate-in fade-in slide-in-from-top-4 duration-200 z-50">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 hover:text-sky-900 font-medium py-2 px-4 rounded-xl hover:bg-sky-50 transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/partners"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-600 hover:text-sky-900 font-medium py-2 px-4 rounded-xl hover:bg-sky-50 transition-colors text-xs flex items-center justify-between border-t border-slate-100 mt-1 pt-2.5"
            >
              <span>パートナー募集</span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200/80">
                協業募集
              </span>
            </Link>
          </nav>
          <div className="pt-2 border-t border-slate-100">
            <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" className="w-full justify-center rounded-full text-xs py-2.5 bg-gradient-to-r from-[#174668] to-[#286b8b] text-white">
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
