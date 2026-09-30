"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-slate-200/80 bg-slate-50/70 backdrop-blur-md relative z-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

          {/* 左カラム: ブランド */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="relative w-7 h-7 rounded-full bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-500 p-0.5 flex items-center justify-center shadow-xs flex-shrink-0">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden p-0.5">
                  <Image
                    src="/logo.webp"
                    alt="fueri"
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                </div>
              </div>
              <span className="font-bold text-base text-slate-800 tracking-tight">
                fueri
              </span>
            </div>
            <p className="text-xs text-slate-600 max-w-sm leading-relaxed">
              Webアプリケーション開発・業務システム開発・GAS自動化。洗練されたUI/UXと堅牢なアーキテクチャでビジネス課題を解決します。
            </p>
          </div>

          {/* ナビゲーションリンク */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li>
                <Link href="/#services" className="hover:text-violet-600 transition-colors">
                  サービス一覧
                </Link>
              </li>
              <li>
                <Link href="/#why-choose-us" className="hover:text-violet-600 transition-colors">
                  選ばれる理由
                </Link>
              </li>
              <li>
                <Link href="/#process-flow" className="hover:text-violet-600 transition-colors">
                  開発の流れ
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-violet-600 transition-colors">
                  実績プロダクト
                </Link>
              </li>
            </ul>
          </div>

          {/* その他情報 */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Information</h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li>
                <Link
                  href="/diagnostic"
                  className="hover:text-violet-600 transition-colors flex items-center gap-1.5 font-medium text-slate-800 hover:text-violet-700 group py-0.5"
                >
                  <span className="font-semibold text-violet-700 group-hover:underline">
                    30秒 積算見積シミュレーター ⚡️
                  </span>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-2xs">
                    おすすめ
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-violet-600 transition-colors">
                  代表プロフィール・理念
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-violet-600 transition-colors">
                  よくある質問 (FAQ)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-violet-600 transition-colors">
                  ご利用規約・保証規定
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-violet-600 transition-colors flex items-center gap-1.5">
                  <span>パートナー募集</span>
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200">協業</span>
                </Link>
              </li>
              <li>
                <Link href="/partners/guideline" className="hover:text-violet-600 transition-colors">
                  パートナー品質ガイドライン
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-violet-600 transition-colors">
                  お見積り・ご相談
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* コピーライト & ソーシャルリンク */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            © 2021-{new Date().getFullYear()} fueri. All Rights Reserved.
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="https://github.com/fueri-Watanabe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-slate-500 hover:text-violet-600 hover:bg-slate-200/60 transition-colors"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </Link>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full text-slate-500 hover:text-violet-600 hover:bg-slate-200/60 transition-colors ml-2"
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
