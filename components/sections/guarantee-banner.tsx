"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, FileText, RefreshCw, CheckCircle2, ArrowRight } from "lucide-react";

const GUARANTEE_POINTS = [
  {
    icon: ShieldCheck,
    title: "納品後1ヶ月の無償バグ修正保証",
    tagline: "全プラン標準付帯",
    desc: "納品後に発覚した予期せぬ動作不良やレイアウト崩れは、無償で迅速に対応いたします。",
  },
  {
    icon: FileText,
    title: "引き継ぎ・操作マニュアルの完備",
    tagline: "属人化を防止",
    desc: "社内メンバーでスムーズに運用・更新できるよう、わかりやすい操作ガイドや手順書を添付します。",
  },
  {
    icon: RefreshCw,
    title: "継続的な保守・機能追加に対応",
    tagline: "月額5万円〜 柔軟対応",
    desc: "リリース後の細かな仕様変更や機能追加、定期的なアップデートサポートもワンストップでお任せいただけます。",
  },
];

export const GuaranteeBanner = () => {
  return (
    <section className="w-full bg-slate-100/60 border-y border-slate-200/80 py-20 md:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          {/* ヘッダー */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 pb-6 border-b border-slate-200/80">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-800 bg-cyan-50 px-3.5 py-1 rounded-full border border-cyan-200/80 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
                <span>After Support & Quality Guarantee</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 font-title tracking-tight">
                納品後も安心の「品質保証 & 運用サポート体制」
              </h3>
            </div>
            <div className="space-y-1.5 text-left md:text-right">
              <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
                「作って終わり」ではなく、現場で確実に成果を出し続けるまで寄り添う伴走型の開発をお約束します。
              </p>
              <Link
                href="/terms"
                className="inline-flex items-center gap-1 text-xs text-violet-600 hover:text-violet-700 underline font-medium"
              >
                <span>詳しい保証規定・検収条件を見る</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* 3つの安心ポイント */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {GUARANTEE_POINTS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-white p-7 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between hover:border-violet-300 hover:ring-1 hover:ring-violet-500/20 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 border border-cyan-100 flex items-center justify-center shadow-2xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200/80">
                        {item.tagline}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-slate-800 tracking-tight">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-cyan-700">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                    <span>迅速・丁寧なフォロー体制</span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeBanner;
