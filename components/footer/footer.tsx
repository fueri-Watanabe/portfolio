"use client";

import Link from "next/link";
import { Code2, Github, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-sky-100 bg-white/80 backdrop-blur-md relative z-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* 左カラム: ブランド */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#174668] to-[#2c6e8f] flex items-center justify-center shadow-sm">
                <Code2 className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-bold text-base text-slate-900 tracking-tight">
                fueri <span className="text-slate-400 text-xs font-normal">/ Hiroshi Watanabe</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Webアプリケーション開発・業務システム開発・GAS自動化。洗練されたUI/UXと堅牢なアーキテクチャでビジネス課題を解決します。
            </p>
          </div>

          {/* ナビゲーションリンク */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li>
                <Link href="/#services" className="hover:text-sky-700 transition-colors">
                  サービス一覧
                </Link>
              </li>
              <li>
                <Link href="/#why-choose-us" className="hover:text-sky-700 transition-colors">
                  選ばれる理由
                </Link>
              </li>
              <li>
                <Link href="/#process-flow" className="hover:text-sky-700 transition-colors">
                  開発の流れ
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-sky-700 transition-colors">
                  実績プロダクト
                </Link>
              </li>
            </ul>
          </div>

          {/* その他情報 */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Information</h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li>
                <Link href="/about" className="hover:text-sky-700 transition-colors">
                  代表プロフィール・理念
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-sky-700 transition-colors">
                  よくある質問 (FAQ)
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-sky-700 transition-colors flex items-center gap-1.5">
                  <span>パートナー募集</span>
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200/80">協業</span>
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-sky-700 transition-colors">
                  お見積り・ご相談
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* コピーライト & ソーシャルリンク */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            © 2021-{new Date().getFullYear()} fueri / Hiroshi Watanabe. All Rights Reserved.
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://x.com/hiroshifueri"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-slate-600 hover:text-sky-700 hover:bg-sky-50 transition-colors"
              aria-label="X"
              title="X"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            <Link
              href="https://github.com/fueri-Watanabe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-slate-600 hover:text-sky-700 hover:bg-sky-50 transition-colors"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </Link>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full text-slate-600 hover:text-sky-950 hover:bg-sky-50 transition-colors"
              aria-label="Back to Top"
              title="ページ最上部へ戻る"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
