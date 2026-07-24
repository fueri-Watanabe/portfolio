export interface RoadmapItem {
  id: string;
  phaseNumber: string;
  period?: string;
  title: string;
  description: string;
  tags: string[];
  iconName: string;
  isCurrent?: boolean;
}

export const ROADMAP_DATA: RoadmapItem[] = [
  {
    id: "phase-1",
    phaseNumber: "01",
    period: "PHASE 1",
    title: "GAS（Google Apps Script）の独学・実践",
    description:
      "日々の業務課題を解決するためGASを独学で習得。職場内のToDo管理や作業自動化ツールを開発し、チーム全体の生産性を劇的に向上。",
    tags: ["GAS", "Google Workspace", "業務効率化"],
    iconName: "Code2",
  },
  {
    id: "phase-2",
    phaseNumber: "02",
    period: "PHASE 2",
    title: "副業・クラウドソーシングでの受託開発",
    description:
      "業務自動化のスキルを活かしてクラウドソーシング等で仕事を受注。高いクライアント評価を獲得し、継続的なリピート案件や新規案件に拡大。",
    tags: ["クラウドソーシング", "受託開発", "GAS"],
    iconName: "Briefcase",
  },
  {
    id: "phase-3",
    phaseNumber: "03",
    period: "PHASE 3",
    title: "React / Next.js / DB構築へのステップアップ",
    description:
      "単なる自動化にとどまらず、フルスタックなWebアプリ開発を見据えて React, Next.js, データベース構築（Firebase / Prisma 等）を本格習得。",
    tags: ["React", "Next.js", "Database", "TypeScript"],
    iconName: "Layers",
  },
  {
    id: "phase-4",
    phaseNumber: "04",
    period: "PHASE 4",
    title: "個人事業主「fueri（フエリ）」開業",
    description:
      "エンジニア・クリエイターとして正式に開業。クライアントのビジネス課題を真摯に解決するプロダクト開発・開発支援事業を本格始動。",
    tags: ["開業", "fueri", "事業拡大"],
    iconName: "Building2",
  },
  {
    id: "phase-5",
    phaseNumber: "05",
    period: "PHASE 5",
    title: "SPA・プロダクト開発・最新AI技術の実装",
    description:
      "Reactを用いた高速SPAや、Next.jsを活用した自作Webサービス（foliotreeやfueri LifeChronicleなど）を企画・開発・リリース。",
    tags: ["SPA", "Next.js", "SaaS", "AI Agent"],
    iconName: "Rocket",
  },
  {
    id: "phase-6",
    phaseNumber: "06",
    period: "CURRENT & FUTURE",
    title: "Web開発・業務委託・最新技術への挑戦",
    description:
      "常に進化する最新技術（AIエージェント開発等）を貪欲に吸収しつつ、Webアプリ開発・業務委託においてクライアントに最高の価値を提供し続ける。",
    tags: ["Web Development", "Future Tech", "AI Agent"],
    iconName: "Sparkles",
    isCurrent: true,
  },
];
