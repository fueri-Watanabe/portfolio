// lib/analytics.ts

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
    clarity?: (...args: any[]) => void;
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";
export const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "";

/**
 * ページビュー計測 (GA4)
 */
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag && GA_TRACKING_ID) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

/**
 * 汎用カスタムイベント送信 (GA4 & Clarity)
 */
export type GTagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
};

export const event = ({ action, category, label, value, ...rest }: GTagEvent) => {
  if (typeof window !== "undefined") {
    // GA4 イベント送信
    if (window.gtag) {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
        ...rest,
      });
    }

    // Microsoft Clarity カスタムイベント送信
    if (window.clarity) {
      window.clarity("event", action);
      if (category && label) {
        window.clarity("set", `${category}_${action}`, String(label));
      }
    }
  }
};

/**
 * 主要コンバージョン・アクション計測ヘルパー
 */
export const trackEvent = {
  /**
   * 積算シミュレーター試算完了・結果確認
   */
  diagnosticComplete: (data: { category: string; grandTotal: number; featuresCount: number }) => {
    event({
      action: "diagnostic_complete",
      category: "simulation",
      label: data.category,
      value: data.grandTotal,
      features_count: data.featuresCount,
    });
  },

  /**
   * シミュレーター結果をお問い合わせフォームへ反映
   */
  applyDiagnosticToContact: (data: { category: string; grandTotal: number }) => {
    event({
      action: "apply_diagnostic_to_contact",
      category: "simulation",
      label: data.category,
      value: data.grandTotal,
    });
  },

  /**
   * お問い合わせフォーム送信
   */
  contactSubmit: (data: { category?: string; budget?: string }) => {
    event({
      action: "contact_submit",
      category: "conversion",
      label: data.category || "general",
      budget: data.budget,
    });
  },

  /**
   * サービスカード詳細アコーディオン開閉
   */
  accordionToggle: (packageId: string, isOpen: boolean) => {
    event({
      action: "accordion_toggle",
      category: "engagement",
      label: packageId,
      state: isOpen ? "open" : "close",
    });
  },

  /**
   * プラン相談ボタン・主要CTAクリック
   */
  ctaClick: (label: string, location: string) => {
    event({
      action: "cta_click",
      category: "engagement",
      label: `${location}: ${label}`,
    });
  },
};
