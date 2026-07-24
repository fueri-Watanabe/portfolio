"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema, ContactFormData, CONTACT_TITLES } from "@/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export const ContactSection = () => {
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
  });

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
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <Badge variant="gradient" className="px-4 py-1 gap-1.5 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5 text-cyan-500" />
            <span>Contact / お問い合わせ</span>
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-title tracking-tight">
            Web開発・お見積りのご相談
          </h2>

          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-base">
            新規システム開発・既存ツール改修・保守など、お気軽にお問い合わせください。
          </p>
        </div>

        <Card glass className="p-8 sm:p-12 border-slate-200/80 dark:border-white/10 shadow-2xl relative">
          
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-500 shadow-xl">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-title">
                  お問い合わせを受け付けました
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md">
                  ご連絡ありがとうございます。内容を確認のうえ、原則24時間以内に折り返しメールにてご連絡いたします。
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() => setSubmitted(false)}
                className="mt-4"
              >
                フォームに戻る
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {serverError && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-300 text-sm flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{serverError}</span>
                </div>
              )}

              {/* 1. ご用件 */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1">
                  <span>ご用件</span>
                  <span className="text-rose-500">*</span>
                </label>
                <select
                  {...register("title")}
                  className="w-full bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-700/80 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value="" disabled selected>
                    ご用件を選択してください
                  </option>
                  {CONTACT_TITLES.map((title) => (
                    <option key={title} value={title} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
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
                  <label className="text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1">
                    <span>お名前</span>
                    <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="山田 太郎"
                    {...register("contactName")}
                    className="w-full bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-700/80 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                  {errors.contactName && (
                    <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.contactName.message}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    貴社名 (任意)
                  </label>
                  <input
                    type="text"
                    placeholder="株式会社サンプル"
                    {...register("company")}
                    className="w-full bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-700/80 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              {/* 3. メールアドレス */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1">
                  <span>メールアドレス</span>
                  <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="example@fueri.jp"
                  {...register("email")}
                  className="w-full bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-700/80 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
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
                <label className="text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1">
                  <span>お問い合わせ内容</span>
                  <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={5}
                  placeholder="ご検討中のシステム要件やご質問、ご予算感などをお書きください。"
                  {...register("content")}
                  className="w-full bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-700/80 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
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
                className="w-full justify-center rounded-xl font-bold py-4 mt-4"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-white" />
                    <span>送信中...</span>
                  </>
                ) : (
                  <>
                    <span>送信する</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

            </form>
          )}

        </Card>

      </div>
    </section>
  );
};
export default ContactSection;
