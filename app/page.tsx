import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import IntegrationsSection from "@/components/sections/integrations-section";
import WhyChooseUsSection from "@/components/sections/why-choose-us";
import BentoProjectsSection from "@/components/sections/bento-projects";
import ContactSection from "@/components/sections/contact-section";
import ProfileSection from "@/components/sections/profile-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden w-full max-w-full">
      {/* 1. Hero Section + 診断UI */}
      <HeroSection />

      {/* 2. 解決型サービスパッケージ (松竹梅4プラン) */}
      <ServicesSection />

      {/* 3. 対応可能な連携ツール・技術一覧 */}
      <IntegrationsSection />

      {/* 4. 選ばれる3つの理由 ＋ 納品後品質保証・モダン技術基盤 */}
      <WhyChooseUsSection />

      {/* 5. 実績・ソリューション事例 (Bento Grid / 導入効果付き) */}
      <BentoProjectsSection />

      {/* 6. お問い合わせフォーム ＋ 事前準備ドキュメント */}
      <ContactSection />

      {/* 7. 代表プロフィール ＆ 開発体制 */}
      <ProfileSection />
    </main>
  );
}
