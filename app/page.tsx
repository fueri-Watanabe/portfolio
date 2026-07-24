import Link from "next/link";
import HeroSection from "@/components/sections/hero-section";
import BentoProjectsSection from "@/components/sections/bento-projects";
import SkillsSection from "@/components/sections/skills-section";
import RoadmapSection from "@/components/sections/roadmap";
import ContactSection from "@/components/sections/contact-section";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, GitCommitHorizontal } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
      {/* 1. ヒーローセクション */}
      <HeroSection />

      {/* 2. スキル & 強み */}
      <SkillsSection />

      {/* 3. タイムライン・開発の軌跡 */}
      <RoadmapSection />

      {/* 4. Bento Grid 実績プロダクト */}
      <BentoProjectsSection />

      {/* 5. 制作フロー & FAQ サブページへの誘導 CTA カード */}
      <section className="py-16 relative z-10 bg-slate-100/40 dark:bg-slate-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card glass glow className="p-8 sm:p-12 border-slate-200/80 dark:border-white/10 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="space-y-4 max-w-2xl text-center md:text-left">
                <Badge variant="gradient" className="px-3.5 py-1 text-xs gap-1.5 font-semibold">
                  <GitCommitHorizontal className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Process & FAQ / 開発ステップ・ご契約</span>
                </Badge>
                <CardTitle className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-title">
                  制作の流れ・開発ステップ・よくある質問
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  お問い合わせからヒアリング、要件定義、実装、テスト・納品までの流れや、開発に関するよくある質問（FAQ）について専用ページで詳しくご案内しております。
                </CardDescription>
              </div>

              <div className="flex-shrink-0">
                <Link href="/process">
                  <Button variant="primary" size="lg" className="shadow-lg shadow-cyan-500/20 group">
                    <span>制作フロー・FAQを見る</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* 6. お問い合わせ */}
      <ContactSection />
    </main>
  );
}
