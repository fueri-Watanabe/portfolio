"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, FileText, RefreshCw, CheckCircle2 } from "lucide-react";

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
    <section className="py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-gradient-to-br from-white via-sky-50/30 to-teal-50/20 border border-sky-100 shadow-[0_12px_36px_rgba(14,165,233,0.06),0_2px_8px_rgba(15,23,42,0.03)] p-6 sm:p-10"
        >
          {/* ヘッダー */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-sky-100/80 mb-8">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/80 mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                <span>After Support & Quality Guarantee</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-title tracking-tight">
                納品後も安心の「保証・サポート体制」
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              「作って終わり」ではなく、現場で確実に成果を出し続けるまで寄り添う伴走型の開発をお約束します。
            </p>
          </div>

          {/* 3つの安心ポイント */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GUARANTEE_POINTS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white p-5 sm:p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-sky-300 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 border border-teal-100 flex items-center justify-center shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {item.tagline}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-teal-700">
                    <CheckCircle2 className="w-3.5 h-3.5" />
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
