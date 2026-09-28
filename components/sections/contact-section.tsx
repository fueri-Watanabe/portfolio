"use client";

import { useState, useTransition, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema, ContactFormData, CONTACT_TITLES } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, ArrowUpRight, Sparkles } from "lucide-react";

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
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* セクションヘッダー */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <Badge variant="glow" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-900 bg-white">
            Let's Build Together
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-title tracking-tight">
            Web開発・お見積りの{" "}
            <span className="bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
              ご相談
            </span>
          </h2>

          <p className="text-slate-500 max-w-xl text-base sm:text-lg">
            新規システム開発・既存ツール改修・保守など、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="rounded-3xl bg-white border border-sky-100/90 shadow-[0_20px_50px_rgba(14,165,233,0.08),0_4px_16px_rgba(15,23,42,0.04)] p-8 sm:p-12 relative">

          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-800 shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-teal-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900 font-title">
                  お問い合わせを受け付けました
                </h3>
                <p className="text-slate-500 text-sm max-w-md">
                  ご連絡ありがとうございます。内容を確認のうえ、原則24時間以内に折り返しメールにてご連絡いたします。
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() => setSubmitted(false)}
                className="mt-4 rounded-full"
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
                  <span className="text-rose-500">*</span>
                </label>
                <select
                  defaultValue=""
                  {...register("title")}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-slate-900 text-sm focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20 transition-all"
                >
                  <option value="" disabled>
                    ご用件を選択してください
                  </option>
                  {CONTACT_TITLES.map((title) => (
                    <option key={title} value={title} className="bg-white text-slate-900">
                      {title}
                    </option>
                  ))}
                </select>
                {errors.title && (
                  <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
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
                    <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="山田 太郎"
                    {...register("contactName")}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-slate-900 text-sm focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20 transition-all"
                  />
                  {errors.contactName && (
                    <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
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
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-slate-900 text-sm focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20 transition-all"
                  />
                </div>
              </div>

              {/* 3. メールアドレス */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-800 flex items-center gap-1">
                  <span>メールアドレス</span>
                  <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="example@fueri.jp"
                  {...register("email")}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-slate-900 text-sm focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20 transition-all"
                />
                {errors.email && (
                  <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
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
                    <span className="text-rose-500">*</span>
                  </label>
                  {isPrefilled && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-teal-800 animate-pulse bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                      <Sparkles className="w-3 h-3 text-teal-600" />
                      診断結果が自動入力されました
                    </span>
                  )}
                </div>
                <textarea
                  rows={6}
                  placeholder="ご検討中のシステム要件やご質問、ご予算感などをお書きください。"
                  {...register("content")}
                  className={`w-full bg-slate-50 border rounded-2xl px-4 py-3.5 text-slate-900 text-sm focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20 transition-all resize-none ${
                    isPrefilled
                      ? "border-teal-400 ring-2 ring-teal-400/30 bg-teal-50/20"
                      : "border-slate-200"
                  }`}
                />
                {errors.content && (
                  <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
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
                className="w-full justify-center rounded-full font-bold py-4 mt-4 shadow-lg shadow-sky-950/20"
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

            </form>
          )}

          {/* X DM 相談導線 */}
          <div className="mt-8 pt-6 border-t border-slate-100 text-center space-y-3">
            <p className="text-xs text-slate-500">
              フォームのほか、X (旧Twitter) DMからの直接ご相談・お問い合わせも受け付けております
            </p>
            <div>
              <a
                href="https://x.com/hiroshifueri"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-900 border border-sky-200 hover:bg-sky-100 transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current text-sky-700" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>DMで相談する</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default ContactSection;
