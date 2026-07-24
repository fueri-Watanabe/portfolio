import { z } from "zod";

/**
 * プロジェクト（実績）データ型定義
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  gif?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean; // Bento Gridのフラッグシップ枠用
  metrics?: {
    label: string;
    value: string;
  }[];
}

/**
 * スキル・強みデータ型定義
 */
export type SkillCategoryType = "languages" | "frontend" | "backend_cloud";

export interface SkillItem {
  name: string;
  iconName: string;
  category: SkillCategoryType;
  experience?: string;
  description?: string;
  display: boolean;
  featuredInProjects?: string[]; // 関連プロジェクトID
}

export interface SkillCategory {
  title: string;
  category: SkillCategoryType;
  items: SkillItem[];
}

export interface StrengthItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
}

/**
 * 制作フロー（Workflow）型定義
 */
export interface WorkflowStep {
  stepNumber: number;
  title: string;
  description: string;
  iconSrc: string;
  detailHint?: string;
}

/**
 * FAQ（よくある質問）型定義
 */
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

/**
 * お問い合わせタイトル一覧
 */
export const CONTACT_TITLES = [
  "システム開発の相談・見積り",
  "Webサイトの構築",
  "既存システム・ツールの修正",
  "システムの保守",
  "その他",
] as const;

export type ContactTitleType = (typeof CONTACT_TITLES)[number];

/**
 * お問い合わせフォーム Zod バリデーションスキーマ
 */
export const ContactSchema = z.object({
  title: z.string().min(1, { message: "ご用件をお選びください。" }),
  contactName: z.string().min(1, { message: "お名前をご入力ください。" }),
  company: z.string().optional(),
  email: z
    .string()
    .min(1, { message: "メールアドレスをご入力ください。" })
    .email({ message: "有効なメールアドレス形式で入力してください。" }),
  content: z
    .string()
    .min(1, { message: "お問い合わせ内容をご記入ください。" }),
});

export type ContactFormData = z.infer<typeof ContactSchema>;
