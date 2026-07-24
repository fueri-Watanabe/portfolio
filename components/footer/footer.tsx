"use client";

import Link from "next/link";
import { Code2, Github, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* ブランドロゴ */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500 p-0.5 shadow-md">
              <div className="w-full h-full bg-white dark:bg-slate-950 rounded-full flex items-center justify-center">
                <Code2 className="w-3.5 h-3.5 text-cyan-500" />
              </div>
            </div>
            <span className="font-bold text-sm text-slate-900 dark:text-white">
              fueri <span className="text-slate-500 text-xs font-normal">/ Hiroshi Watanabe</span>
            </span>
          </div>

          {/* 著作権表示 */}
          <div className="text-xs text-slate-500 dark:text-slate-400 text-center">
            © 2021-{new Date().getFullYear()} fueri / Hiroshi Watanabe. All Rights Reserved.
          </div>

          {/* ソーシャルリンク & Topボタン */}
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/fueri-Watanabe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Back to Top"
              title="ページ最上部へ戻る"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
