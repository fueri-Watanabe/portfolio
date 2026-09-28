"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_DATA } from "@/data/faq";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const FAQSection = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* セクションヘッダー */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <Badge variant="glow" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-slate-700 bg-white">
            FAQ & Support
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-title tracking-tight">
            ご依頼に関するよくある質問
          </h2>

          <p className="text-slate-500 max-w-xl text-base sm:text-lg">
            開発のご依頼や予算、共有範囲に関する不安を解決します。
          </p>
        </div>

        {/* FAQ アコーディオンリスト */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-3xl bg-white border border-slate-200/80 shadow-[0_6px_20px_rgba(15,23,42,0.03)] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-slate-600 flex-shrink-0" />
                    <span className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-slate-700 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-slate-800" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-slate-500 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="p-8 sm:p-10 rounded-3xl border border-slate-200/80 bg-white shadow-[0_12px_36px_rgba(15,23,42,0.04)]">
            <div className="flex flex-col items-center space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-title">
                ご質問や概算見積りのご相談はお気軽に
              </h3>
              <p className="text-sm text-slate-500 max-w-md">
                相談・見積りは完全無料です。まだ仕様が決まっていない段階でもどうぞ。
              </p>
              <Link href="/#contact">
                <Button variant="primary" size="lg" className="rounded-full px-8 mt-2 bg-slate-900 hover:bg-slate-800 text-white">
                  <span>無料相談・お問い合わせ</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default FAQSection;
