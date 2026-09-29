"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ProfileCompactCardProps {
  className?: string;
}

export const ProfileCompactCard = ({ className = "" }: ProfileCompactCardProps) => {
  return (
    <div
      className={`rounded-2xl sm:rounded-full bg-white border border-slate-200/90 shadow-2xs p-3 sm:px-6 sm:py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 transition-all hover:border-rose-200 ${className}`}
    >
      {/* 左側: ミニ顔写真 + 代表者名 + 1行メッセージ */}
      <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
        {/* ミニ顔写真/アイコン */}
        <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-rose-500 to-red-600 p-0.5 flex-shrink-0 shadow-2xs">
          <div className="w-full h-full bg-slate-50 rounded-full flex items-center justify-center overflow-hidden p-1">
            <Image
              src="/logo.webp"
              alt="渡部 弘"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
        </div>

        {/* テキスト情報 */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <div className="flex items-center justify-center sm:justify-start gap-1.5 flex-shrink-0">
            <span className="text-xs font-bold text-slate-800">
              渡部 弘
            </span>
            <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200/80">
              代表 / 開発責任者
            </span>
          </div>

          <span className="hidden sm:inline-block text-slate-300">|</span>

          <p className="text-xs text-slate-600 font-medium leading-relaxed sm:leading-none">
            要件定義からQAまで責任を持って直通対応いたします。
          </p>
        </div>
      </div>

      {/* 右側: 経歴・思想リンクボタン */}
      <div className="flex-shrink-0 w-full sm:w-auto">
        <Link href="/about" className="block w-full">
          <Button
            variant="ghost"
            size="sm"
            className="w-full sm:w-auto text-xs font-semibold text-rose-600 hover:text-rose-700 hover:bg-rose-50/60 rounded-full px-3.5 py-1.5 h-auto flex items-center justify-center gap-1 group border border-rose-100 sm:border-transparent transition-all"
          >
            <span>経歴・開発思想を見る</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export const ProfileSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
      <ProfileCompactCard />
    </div>
  );
};

export default ProfileSection;
