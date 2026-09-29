"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { WORKFLOW_DATA, WORKFLOW_NOTES } from "@/data/workflow";
import { Badge } from "@/components/ui/badge";
import { Info } from "lucide-react";

export const WorkflowSection = () => {
  return (
    <section id="workflow" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* セクションヘッダー */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <Badge variant="glow" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-1">
            Workflow & Steps
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-800 font-title tracking-tight">
            お問い合わせから納品までのステップ
          </h2>

          <p className="text-slate-600 max-w-2xl text-base sm:text-lg">
            明確なステップと密なコミュニケーションで、安心・確実にプロジェクトを推進します。
          </p>
        </div>

        {/* タイムラインステップ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {WORKFLOW_DATA.map((step, index) => (
            <motion.div
              key={step.stepNumber}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-violet-300 hover:ring-1 hover:ring-violet-500/20 hover:-translate-y-0.5 transition-all p-6 h-full flex flex-col justify-between relative group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-violet-50/70 border border-violet-100 flex items-center justify-center font-bold text-violet-600 font-mono text-sm shadow-2xs">
                      0{step.stepNumber}
                    </div>
                    {step.iconSrc && (
                      <div className="w-12 h-12 relative opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all">
                        <Image
                          src={step.iconSrc}
                          alt={step.title}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 font-title group-hover:text-violet-600 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {step.detailHint && (
                  <div className="pt-4 mt-4 border-t border-slate-100 text-[12px] text-slate-500 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0" />
                    <span>{step.detailHint}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-200/80 text-center max-w-3xl mx-auto space-y-2 shadow-xs">
          {WORKFLOW_NOTES.map((note, idx) => (
            <p key={idx} className="text-xs text-slate-600">
              {note}
            </p>
          ))}
        </div>

      </div>
    </section>
  );
};
export default WorkflowSection;
