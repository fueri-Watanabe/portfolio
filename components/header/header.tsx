"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";
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
          "pointer-events-auto transition-all duration-300 w-full max-w-7xl rounded-full px-5 py-2.5 flex items-center justify-between backdrop-blur-xl border",
          scrolled
            ? "bg-white/90 border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.06)] scale-[0.995]"
            : "bg-white/80 border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
        )}
      >
        {/* 左: ブランドロゴ */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group transition-transform duration-200 active:scale-95 pl-1.5"
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
            <span className="font-bold text-sm leading-none tracking-tight text-slate-800 group-hover:text-violet-600 transition-colors">
              fueri{" "}
              <span className="text-xs font-normal text-slate-500">
                / Hiroshi Watanabe
              </span>
            </span>
          </div>
        </Link>

        {/* 中央: デスクトップ用ナビゲーション */}
        <nav className="hidden md:flex items-center gap-1 border border-slate-200/80 bg-slate-50/80 px-3 py-1 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-medium px-3 py-1.5 rounded-full text-slate-600 hover:text-slate-900 hover:bg-white shadow-none hover:shadow-xs transition-all duration-200"
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
              className="rounded-full px-4 text-xs font-semibold shadow-xs"
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
            className="p-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* モバイル用ポップアップメニュー */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed top-20 left-4 right-4 max-w-sm mx-auto p-5 rounded-3xl bg-white/95 backdrop-blur-2xl border border-slate-200 shadow-lg flex flex-col gap-3 md:hidden animate-in fade-in slide-in-from-top-4 duration-200 z-50">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 hover:text-slate-900 font-medium py-2 px-4 rounded-xl hover:bg-slate-100 transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/partners"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-600 hover:text-slate-900 font-medium py-2 px-4 rounded-xl hover:bg-slate-100 transition-colors text-xs flex items-center justify-between border-t border-slate-100 mt-1 pt-2.5"
            >
              <span>パートナー募集</span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
                協業募集
              </span>
            </Link>
          </nav>
          <div className="pt-2 border-t border-slate-100">
            <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" className="w-full justify-center rounded-full text-xs py-2.5">
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
