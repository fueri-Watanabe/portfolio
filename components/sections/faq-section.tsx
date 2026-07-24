"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_DATA } from "@/data/faq";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, ChevronDown, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const FAQSection = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative z-10 bg-slate-100/50 dark:bg-slate-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* セクションヘッダー */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <Badge variant="gradient" className="px-4 py-1 gap-1.5 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-500" />
            <span>FAQ / よくある質問</span>
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-title tracking-tight">
            ご依頼に関するよくある質問
          </h2>

          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-base">
            開発のご依頼や予算、共有範囲に関する不安を解決します。
          </p>
        </div>

        {/* FAQ アコーディオンリスト */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <Card
                key={faq.id}
                glass
                className="border-slate-200/80 dark:border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span className="font-semibold text-base sm:text-lg text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-cyan-500" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800/80">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Card glass className="p-8 border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-slate-50 dark:via-slate-900 to-indigo-500/10">
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-title">
                ご質問や概算見積りのご相談はお気軽に
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md">
                相談・見積りは完全無料です。まだ仕様が決まっていない段階でもどうぞ。
              </p>
              <Link href="#contact">
                <Button variant="primary" size="lg" className="rounded-full px-8 mt-2">
                  <span>無料相談・お問い合わせ</span>
                </Button>
              </Link>
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
};
export default FAQSection;
