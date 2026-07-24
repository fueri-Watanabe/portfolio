import type { Metadata } from "next";
import WorkflowSection from "@/components/sections/workflow-section";
import FAQSection from "@/components/sections/faq-section";
import ContactSection from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "制作の流れ・FAQ | fueri / Hiroshi Watanabe",
  description: "お問い合わせからヒアリング、要件定義、開発、テスト、納品・運用保守までのプロセスおよび、受託・Webアプリケーション開発に関するよくある質問（FAQ）をご案内いたします。",
};

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 pt-20 overflow-x-hidden">
      {/* 1. 制作の流れ (Workflow) */}
      <WorkflowSection />

      {/* 2. よくある質問 (FAQ) */}
      <FAQSection />

      {/* 3. お問い合わせ */}
      <ContactSection />
    </main>
  );
}
