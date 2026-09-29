"use client";

import { useState, useTransition, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema, ContactFormData, CONTACT_TITLES } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from "lucide-react";
import ClientPrepDocuments from "@/components/sections/client-prep-documents";

export const ContactSection = () => {
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isPrefilled, setIsPrefilled] = useState(false);

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
      const customEvent = e as CustomEvent<{ title?: string; content?: string }>;
      if (customEvent.detail) {
        if (customEvent.detail.title) {
          setValue("title", customEvent.detail.title as any);
        }
        if (customEvent.detail.content) {
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

    startTransition(async () => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          setSubmitted(true);
          reset();
        } else {
          setServerError("送信処理に失敗しました。時間をおいて再度お試しください。");
        }
      } catch (e) {
        setServerError("通信エラーが発生しました。ネットワーク状態をご確認ください。");
      }
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative z-10">
      {/* 上部のシームレス境界線 */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200/80 to-transparent" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* セクションヘッダー */}
        <div className="flex flex-col items-center text-center space-y-3 mb-8 sm:mb-10">
          <Badge variant="glow" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-1">
            Let's Build Together
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

              {/* 1. ご用件 */}
              <div className="space-y-2">
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

              {/* 4. お問い合わせ内容 */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-slate-800 flex items-center gap-1">
                    <span>お問い合わせ内容</span>
                    <span className="text-violet-500">*</span>
                  </label>
                  {isPrefilled && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-800 animate-pulse bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
                      <Sparkles className="w-3 h-3 text-cyan-600" />
                      診断結果が自動入力されました
                    </span>
                  )}
                </div>
                <textarea
                  rows={6}
                  placeholder="ご検討中のシステム要件やご質問、ご予算感などをお書きください。"
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
