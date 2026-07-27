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
          <div className="flex items-center gap-3">
            <a
              href="https://x.com/hiroshifueri"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="X"
              title="X"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            <Link
              href="https://github.com/fueri-Watanabe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="GitHub"
              title="GitHub"
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
