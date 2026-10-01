"use client";

import { useState, useTransition, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema, ContactFormData, CONTACT_TITLES } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, Sparkles, Clock, Check, ArrowRight } from "lucide-react";
import ClientPrepDocuments from "@/components/sections/client-prep-documents";
import { trackEvent } from "@/lib/analytics";

export interface DiagnosticCardData {
  categoryTitle: string;
  categoryBadge: string;
  features: { title: string; priceLabel: string }[];
  subtotal: number;
  grandTotal: number;
  deliveryEstimate: string;
  isUrgent: boolean;
  urgentFee: number;
  targetTitle: string;
  summaryText: string;
}

export const ContactSection = () => {
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isPrefilled, setIsPrefilled] = useState(false);
  const [diagnosticSummary, setDiagnosticSummary] = useState<DiagnosticCardData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      title: "",
      contactName: "",
      company: "",
      email: "",
      content: "",
    },
  });

  // 見積もり・課題診断からの自動反映リスナー
  useEffect(() => {
    const handleFillContact = (e: Event) => {
      const customEvent = e as CustomEvent<{
        title?: string;
        content?: string;
        diagnosticData?: DiagnosticCardData;
      }>;
      if (customEvent.detail) {
        if (customEvent.detail.title) {
          setValue("title", customEvent.detail.title as any);
        }
        if (customEvent.detail.diagnosticData) {
          setDiagnosticSummary(customEvent.detail.diagnosticData);
          // 診断データがある場合、初期値として案内テキストをセット（ユーザーが空にしても送信時に補完）
          setValue("content", "（上記診断内容に基づく無料相談を希望）");
        } else if (customEvent.detail.content) {
          setValue("content", customEvent.detail.content);
        }
        setIsPrefilled(true);
        setTimeout(() => setIsPrefilled(false), 5000);
      }
    };

    window.addEventListener("fueri:fill-contact", handleFillContact);
    return () => {
      window.removeEventListener("fueri:fill-contact", handleFillContact);
    };
  }, [setValue]);

  const onSubmit = (data: ContactFormData) => {
    setServerError(null);

    // 診断データがある場合は、診断明細を統合
    let finalContent = data.content;
    if (diagnosticSummary) {
      const userMessage = data.content.trim() && data.content !== "（上記診断内容に基づく無料相談を希望）"
        ? data.content.trim()
        : "（特記事項なし・診断内容で無料相談を希望）";
      finalContent = `${diagnosticSummary.summaryText}\n\n--------------------------------------------------\n【お客様からの追記事項・ご質問】\n${userMessage}`;
    }

    startTransition(async () => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...data,
            content: finalContent,
          }),
        });

        if (response.ok) {
          trackEvent.contactSubmit({
            category: data.title,
          });
          setSubmitted(true);
          reset();
          setDiagnosticSummary(null);
        } else {
          setServerError("送信処理に失敗しました。時間をおいて再度お試しください。");
        }
      } catch (e) {
        setServerError("通信エラーが発生しました。ネットワーク状態をご確認ください。");
      }
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative z-10 overflow-hidden">
      {/* 背景アンビエントグローオーブ */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-gradient-to-r from-violet-400/25 via-indigo-300/15 to-cyan-400/20 rounded-full blur-3xl opacity-35 pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-[450px] h-[400px] bg-gradient-to-tl from-cyan-400/20 via-violet-300/15 to-transparent rounded-full blur-3xl opacity-30 pointer-events-none" />

      {/* 上部のシームレス境界線 */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200/80 to-transparent" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* セクションヘッダー */}
        <div className="flex flex-col items-center text-center space-y-3 mb-8 sm:mb-10">
          <Badge variant="glow" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-1">
            Let&apos;s Build Together
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-800 font-title tracking-tight">
            Webシステム開発・DX推進の{" "}
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              ご相談
            </span>
          </h2>

          <p className="text-slate-600 max-w-xl text-base sm:text-lg">
            Webシステム開発、社内業務効率化（GAS自動化）、新規事業のMVP開発・SaaS構築など、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-glass hover:border-violet-300/80 hover:ring-1 hover:ring-violet-500/20 p-8 sm:p-12 relative transition-all duration-300">

          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 shadow-2xs">
                <CheckCircle2 className="w-8 h-8 text-cyan-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-800 font-title">
                  お問い合わせを受け付けました
                </h3>
                <p className="text-slate-600 text-sm max-w-md">
                  ご連絡ありがとうございます。内容を確認のうえ、原則24時間以内に折り返しメールにてご連絡いたします。
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() => setSubmitted(false)}
                className="mt-4 rounded-full bg-white/80 backdrop-blur-sm border-slate-200 text-slate-700 hover:bg-white hover:text-violet-600 hover:border-violet-300 shadow-2xs"
              >
                フォームに戻る
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

              {serverError && (
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{serverError}</span>
                </div>
              )}

              {/* 選択済み診断明細カード (診断データがある場合) */}
              {diagnosticSummary && (
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-violet-500/10 via-indigo-500/5 to-cyan-500/10 border border-violet-200/90 shadow-glass space-y-3">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-violet-100 pb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">📊</span>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-violet-700 bg-violet-100/70 px-2 py-0.5 rounded-full">
                            ご選択中の診断・お見積り内容
                          </span>
                          <span className="text-[10px] font-medium text-slate-500">
                            ({diagnosticSummary.targetTitle})
                          </span>
                        </div>
                        <div className="text-sm sm:text-base font-extrabold text-slate-800 mt-0.5">
                          {diagnosticSummary.categoryTitle}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-auto">
                      <div className="text-right">
                        <span className="text-[10px] text-slate-500 block">
                          概算小計 (納期: {diagnosticSummary.deliveryEstimate})
                        </span>
                        <span className="text-base sm:text-lg font-mono font-extrabold bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
                          ¥{diagnosticSummary.grandTotal.toLocaleString()}〜
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          const el = document.getElementById("estimate-diagnostic");
                          if (el) {
                            el.scrollIntoView({ behavior: "smooth" });
                          } else {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }
                        }}
                        className="text-xs font-semibold text-violet-700 hover:text-violet-900 bg-white hover:bg-violet-50 border border-violet-200 px-3 py-1.5 rounded-full flex items-center gap-1 shadow-2xs transition-all active:scale-95"
                      >
                        <span>診断を変更</span>
                        <span>✏️</span>
                      </button>
                    </div>
                  </div>

                  {/* 選択した機能バッジ一覧 */}
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block mb-1.5 uppercase font-medium">
                      選択された機能オプション ({diagnosticSummary.features.length}項目):
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {diagnosticSummary.features.length > 0 ? (
                        diagnosticSummary.features.map((f, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-medium bg-white text-slate-700 border border-slate-200/80 px-2 py-0.5 rounded-lg flex items-center gap-1 shadow-2xs"
                          >
                            <span>{f.title}</span>
                            <span className="text-violet-600 font-mono text-[10px]">
                              {f.priceLabel}
                            </span>
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-slate-500">（基本構成のみ）</span>
                      )}
                    </div>
                  </div>

                  <div className="text-[11px] text-emerald-800 bg-emerald-50 border border-emerald-200/80 rounded-xl px-3 py-1.5 flex items-center gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>
                      上記のお見積り明細・選択機能は、送信時に自動添付されます。
                    </span>
                  </div>
                </div>
              )}

              {/* 逆誘導バナー: 診断未選択時の積算シミュレーター誘導カード */}
              {!diagnosticSummary && (
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-violet-50/70 via-indigo-50/40 to-cyan-50/60 border border-violet-200/70 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all hover:border-violet-300/80 hover:shadow-glass">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-base">💡</span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight">
                        まずは概算金額や納期を確認したいですか？
                      </h4>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed pl-6 sm:pl-6">
                      30秒で完了する積算シミュレーターで、必要な機能に応じた概算費用と納期をリアルタイム算出できます。
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById("estimate-diagnostic");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      } else {
                        window.location.href = "/#estimate-diagnostic";
                      }
                    }}
                    className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 shadow-2xs hover:shadow-glass transition-all active:scale-95 group cursor-pointer"
                  >
                    <span>30秒 積算見積もりを試す</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              )}

              {/* 1. ご用件 */}
              <div className={`space-y-2 ${diagnosticSummary ? "hidden sm:block" : ""}`}>
                <label className="text-sm font-semibold text-slate-800 flex items-center gap-1">
                  <span>ご用件</span>
                  <span className="text-violet-500">*</span>
                </label>
                <select
                  defaultValue=""
                  {...register("title")}
                  className="w-full bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-2xl px-4 py-3.5 text-slate-800 text-sm focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-500/20 transition-all hover:border-violet-300/80"
                >
                  <option value="" disabled className="bg-white text-slate-400">
                    ご用件を選択してください
                  </option>
                  {CONTACT_TITLES.map((title) => (
                    <option key={title} value={title} className="bg-white text-slate-800">
                      {title}
                    </option>
                  ))}
                </select>
                {errors.title && (
                  <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.title.message}</span>
                  </p>
                )}
              </div>

              {/* 2. お名前 & 貴社名 */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-800 flex items-center gap-1">
                    <span>お名前</span>
                    <span className="text-violet-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="山田 太郎"
                    {...register("contactName")}
                    className="w-full bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-2xl px-4 py-3.5 text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-500/20 transition-all hover:border-violet-300/80"
                  />
                  {errors.contactName && (
                    <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.contactName.message}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-800">
                    貴社名 (任意)
                  </label>
                  <input
                    type="text"
                    placeholder="株式会社サンプル"
                    {...register("company")}
                    className="w-full bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-2xl px-4 py-3.5 text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-500/20 transition-all hover:border-violet-300/80"
                  />
                </div>
              </div>

              {/* 3. メールアドレス */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-800 flex items-center gap-1">
                  <span>メールアドレス</span>
                  <span className="text-violet-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="example@fueri.jp"
                  {...register("email")}
                  className="w-full bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-2xl px-4 py-3.5 text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-500/20 transition-all hover:border-violet-300/80"
                />
                {errors.email && (
                  <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email.message}</span>
                  </p>
                )}
              </div>

              {/* 4. お問い合わせ内容（診断時は任意・追記事項として表示） */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-slate-800 flex items-center gap-1">
                    <span>
                      {diagnosticSummary ? "ご質問・追加のご要望 (任意)" : "お問い合わせ内容"}
                    </span>
                    {!diagnosticSummary && <span className="text-violet-500">*</span>}
                  </label>
                  {isPrefilled && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-800 animate-pulse bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
                      <Sparkles className="w-3 h-3 text-cyan-600" />
                      診断結果を反映しました
                    </span>
                  )}
                </div>
                <textarea
                  rows={diagnosticSummary ? 3 : 6}
                  placeholder={
                    diagnosticSummary
                      ? "ご不明点や補足事項があればご入力ください。（特になければこのまま送信いただけます）"
                      : "ご検討中のシステム要件やご質問、ご予算感などをお書きください。"
                  }
                  {...register("content")}
                  className={`w-full bg-white/80 backdrop-blur-sm border rounded-2xl px-4 py-3.5 text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-500/20 transition-all resize-none hover:border-violet-300/80 ${
                    isPrefilled
                      ? "border-cyan-400 ring-2 ring-cyan-400/20 bg-cyan-50/20"
                      : "border-slate-200/80"
                  }`}
                />
                {errors.content && (
                  <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.content.message}</span>
                  </p>
                )}
              </div>

              {/* 送信ボタン */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isPending}
                className="w-full justify-center rounded-full font-bold py-4 mt-4 shadow-glass hover:shadow-glass-hover hover:shadow-violet-500/20 transition-all"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-white" />
                    <span>送信中...</span>
                  </>
                ) : (
                  <>
                    <span>送信する</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>

              {/* 規約・保証規定リンク */}
              <p className="text-center text-xs text-slate-500 pt-1">
                ※ 送信前に
                <Link
                  href="/terms"
                  target="_blank"
                  className="text-violet-600 underline hover:text-violet-700 mx-1 font-medium"
                >
                  ご利用規約 & サポート保証規定
                </Link>
                をご確認ください。
              </p>

            </form>
          )}
        </div>

        {/* 発注検討者向け：事前準備 & 安心のお約束ドキュメント（ヒアリングシート＆契約条件） */}
        <ClientPrepDocuments />

      </div>
    </section>
  );
};
export default ContactSection;
