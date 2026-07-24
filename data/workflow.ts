import { WorkflowStep } from "@/types";

export const WORKFLOW_DATA: WorkflowStep[] = [
  {
    stepNumber: 1,
    title: "お問い合わせ",
    description: "まずはメールフォームにてお気軽にご連絡ください。ご相談やアイデア段階でも歓迎いたします。",
    iconSrc: "/workFlow/mail.svg",
    detailHint: "フォーム入力後、原則24時間以内に返信いたします。",
  },
  {
    stepNumber: 2,
    title: "ヒアリング",
    description: "作成したいシステムのイメージや課題をお伺いします。参考サイトや資料がございますとより迅速に対応可能です。",
    iconSrc: "/workFlow/hearing.svg",
    detailHint: "オンライン面談またはテキストメッセージでの柔軟な対応が可能です。",
  },
  {
    stepNumber: 3,
    title: "お見積り",
    description: "ヒアリング内容に基づき、開発仕様と明確なお見積り金額・スケジュールを数日以内に提示します。",
    iconSrc: "/workFlow/quotation.svg",
    detailHint: "ご予算に応じた機能範囲の調整提案も承ります。",
  },
  {
    stepNumber: 4,
    title: "作成開始",
    description: "開発に着手します。進捗報告とデモ画面の共有をスムーズに行うことで要件のズレを未然に防ぎます。",
    iconSrc: "/workFlow/coding.svg",
    detailHint: "アジャイル的に実機・プレビュー環境で確認いただけます。",
  },
  {
    stepNumber: 5,
    title: "最終確認",
    description: "完成した成果物を実際の動作環境で操作していただき、修正箇所や調整のご要望をお伺いします。",
    iconSrc: "/workFlow/confirm.svg",
    detailHint: "最終調整・各種デバイスでの表示確認を行います。",
  },
  {
    stepNumber: 6,
    title: "完了 (納品)",
    description: "ご指定のサーバー・環境へ本番デプロイおよび納品を行います。納品後もアフターサポートを提供します。",
    iconSrc: "/workFlow/finish.svg",
    detailHint: "納品後1ヶ月間は無料で手直し修正サポート付き。",
  },
];

export const WORKFLOW_NOTES = [
  "※ 納品後1ヶ月間は無料で不具合の手直し・微調整を承っております。",
  "※ 仕様変更や大規模な追加開発の場合は別途お見積りをさせていただきます。",
];
