import HeroSection from "@/components/sections/hero-section";
import BentoProjectsSection from "@/components/sections/bento-projects";
import SkillsSection from "@/components/sections/skills-section";
import WorkflowSection from "@/components/sections/workflow-section";
import FAQSection from "@/components/sections/faq-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
      {/* 1. ヒーローセクション */}
      <HeroSection />

      {/* 2. Bento Grid 実績プロダクト */}
      <BentoProjectsSection />

      {/* 3. スキル & 強み */}
      <SkillsSection />

      {/* 4. 制作の流れ */}
      <WorkflowSection />

      {/* 5. FAQ よくある質問 */}
      <FAQSection />

      {/* 6. お問い合わせ */}
      <ContactSection />
    </main>
  );
}
