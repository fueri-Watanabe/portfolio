import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import GuaranteeBanner from "@/components/sections/guarantee-banner";
import IntegrationsSection from "@/components/sections/integrations-section";
import WhyChooseUsSection from "@/components/sections/why-choose-us";
import ProcessFlowSection from "@/components/sections/process-flow-section";
import BentoProjectsSection from "@/components/sections/bento-projects";
import ProfileSection from "@/components/sections/profile-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen text-slate-900 overflow-x-hidden">
      {/* 1. Hero Section + 診断UI */}
      <HeroSection />

      {/* 2. 解決型サービスパッケージ (松竹梅4プラン) */}
      <ServicesSection />

      {/* 3. アフターサポート・品質保証バナー */}
      <GuaranteeBanner />

      {/* 4. 対応可能な連携ツール・技術一覧 */}
      <IntegrationsSection />

      {/* 5. 選ばれる3つの理由 */}
      <WhyChooseUsSection />

      {/* 6. 発注〜納品・アフターサポートの流れ */}
      <ProcessFlowSection />

      {/* 7. 実績・ソリューション事例 (Bento Grid / 導入効果付き) */}
      <BentoProjectsSection />

      {/* 8. 代表プロフィール (/about へのリンク付き) */}
      <ProfileSection />

      {/* 9. お問い合わせフォーム */}
      <ContactSection />
    </main>
  );
}

