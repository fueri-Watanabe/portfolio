"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Send,
  Loader2,
  CheckCircle2,
  User,
  Mail,
  Briefcase,
  Globe,
  Clock,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

interface PartnerFormData {
  name: string;
  email: string;
  role: string;
  portfolioUrl: string;
  availableHours: string;
  message: string;
}

export const PartnerForm = () => {
  const [formData, setFormData] = useState<PartnerFormData>({
    name: "",
    email: "",
    role: "フロントエンド",
    portfolioUrl: "",
    availableHours: "週5〜10時間",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      // 既存の /api/contact API を活用して管理者への通知 & 自動返信を実行
      const content = `【パートナー事前登録フォームより】
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ 主な職種・領域: ${formData.role}
■ 稼働可能時間の目安: ${formData.availableHours}
■ ポートフォリオ / GitHub: ${formData.portfolioUrl || "未記入"}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【メッセージ・自己PR】
${formData.message || "特記事項なし"}`;

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: `【パートナー登録】${formData.role}`,
          contactName: formData.name,
          company: "パートナー登録希望",
          email: formData.email,
          content,
        }),
      });

      if (!res.ok) {
        throw new Error("送信に失敗しました。時間をおいて再度お試しください。");
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(
        err.message || "エラーが発生しました。直接メール等でお問い合わせください。"
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-emerald-100 shadow-[0_16px_40px_rgba(16,185,129,0.08)] text-center space-y-4 max-w-2xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-title">
          パートナー登録を受け付けました
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
          ご登録いただき誠にありがとうございます。入力いただいたメールアドレス宛に自動受付メールをお送りしました。案件の要件やタイミングに合わせて、代表の渡部よりご連絡させていただきます。
        </p>
        <div className="pt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                role: "フロントエンド",
                portfolioUrl: "",
                availableHours: "週5〜10時間",
                message: "",
              });
            }}
            className="rounded-full text-xs"
          >
            別の内容で登録・再入力する
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-[0_16px_40px_rgba(14,165,233,0.06),0_2px_8px_rgba(15,23,42,0.03)] relative overflow-hidden">
      <div className="mb-8 text-center sm:text-left space-y-1">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/70 mb-1">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
          <span>登録無料・案件発生時に優先的にお声がけします</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-title">
          パートナー登録・相談フォーム
        </h3>
        <p className="text-xs sm:text-sm text-slate-500">
          まずはお気軽にご登録ください。無理な案件アサインや営業等は一切ございません。
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* お名前 */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-sky-700" />
              <span>お名前</span>
              <span className="text-rose-500 font-bold">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="例: 山田 太郎"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all bg-slate-50/50 hover:bg-white"
            />
          </div>

          {/* メールアドレス */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-sky-700" />
              <span>メールアドレス</span>
              <span className="text-rose-500 font-bold">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="例: your-name@example.com"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all bg-slate-50/50 hover:bg-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* 主な職種 / 得意領域 */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-sky-700" />
              <span>主な職種 / 得意領域</span>
              <span className="text-rose-500 font-bold">*</span>
            </label>
            <select
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all bg-slate-50/50 hover:bg-white"
            >
              <option value="フロントエンド">フロントエンド（Next.js / TypeScript）</option>
              <option value="バックエンド・インフラ">バックエンド・インフラ（GCP / Firebase / Supabase）</option>
              <option value="業務自動化（GAS/Python）">業務自動化（GAS / Python / 外部API）</option>
              <option value="UI/UXデザイナー">UI/UXデザイナー（Figma / Webデザイン）</option>
              <option value="その他・フルスタック">その他・フルスタック</option>
            </select>
          </div>

          {/* 稼働可能時間の目安 */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-sky-700" />
              <span>稼働可能時間の目安</span>
              <span className="text-rose-500 font-bold">*</span>
            </label>
            <select
              name="availableHours"
              required
              value={formData.availableHours}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all bg-slate-50/50 hover:bg-white"
            >
              <option value="週5〜10時間">週5〜10時間（副業・すきま時間）</option>
              <option value="週10〜20時間">週10〜20時間（副業・中規模案件）</option>
              <option value="週20時間以上">週20時間以上（フリーランス中心）</option>
              <option value="案件ベースで相談">案件ベースで相談（柔軟に調整）</option>
            </select>
          </div>
        </div>

        {/* ポートフォリオ・GitHub URL */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-sky-700" />
            <span>ポートフォリオ / GitHub URL</span>
            <span className="text-slate-400 text-[10px] font-normal">（任意）</span>
          </label>
          <input
            type="url"
            name="portfolioUrl"
            value={formData.portfolioUrl}
            onChange={handleChange}
            placeholder="例: https://github.com/your-account または ポートフォリオサイトURL"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all bg-slate-50/50 hover:bg-white"
          />
        </div>

        {/* メッセージ・自己PR */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-sky-700" />
            <span>メッセージ・自己PR・希望案件タイプ</span>
            <span className="text-slate-400 text-[10px] font-normal">（任意）</span>
          </label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="得意な技術スタック、過去の実績概要、やってみたい案件分野などがあれば自由にご記入ください。"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all bg-slate-50/50 hover:bg-white resize-y"
          />
        </div>

        {errorMessage && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs">
            {errorMessage}
          </div>
        )}

        {/* 送信ボタン */}
        <div className="pt-2">
          <Button
            type="submit"
            disabled={loading}
            variant="primary"
            size="lg"
            className="w-full justify-center rounded-full text-sm font-bold shadow-lg shadow-sky-950/20 bg-gradient-to-r from-[#174668] to-[#286b8b] hover:from-[#113550] hover:to-[#205975] text-white py-3.5"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>送信中...</span>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                <span>パートナー登録・相談する</span>
              </span>
            )}
          </Button>
          <p className="text-[11px] text-center text-slate-500 mt-2">
            ※ ご登録いただいた情報は協業の連絡用途のみに厳重に利用いたします。
          </p>
        </div>
      </form>
    </div>
  );
};

export default PartnerForm;
