"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Heart,
  Repeat2,
  MessageCircle,
  Share,
  CheckCircle2,
  Code2,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export const TwitterTimelineSection = () => {
  // 開発者の最新つぶやき・開発ログポスト一覧
  const tweets = [
    {
      id: "tweet-1",
      date: "2026年7月25日",
      content:
        "ネガティブ情報や評判のリサーチを自動化・効率化するSaaSプロダクト「NegaResearch（https://negaresearch.com/）」を正式リリース！Next.js 14 App Router × Supabase × Stripe決済基盤で構築しています🚀",
      tags: ["Nextjs", "SaaS", "個人開発", "TypeScript"],
      metrics: { replies: 3, retweets: 12, likes: 48 },
      url: "https://x.com/hiroshifueri",
    },
    {
      id: "tweet-2",
      date: "2026年7月20日",
      content:
        "ポートフォリオサイトに動的OGP自動プレビュー機能と、主力・アーカイブを即座に切り替えるネオンタブフィルターUIを導入。画面のチラつきがないスムーズなインタラクションを実現しました✨",
      tags: ["WebDev", "Frontend", "TailwindCSS", "FramerMotion"],
      metrics: { replies: 2, retweets: 8, likes: 35 },
      url: "https://x.com/hiroshifueri",
    },
    {
      id: "tweet-3",
      date: "2026年7月12日",
      content:
        "Google Gemini APIを活用したAIライフログツール「fueri LifeChronicle」のプロトタイプを作成中。対話形式で日常の思考を自動整理・可視化できるのが面白い！",
      tags: ["AI", "GeminiAPI", "Firebase", "React"],
      metrics: { replies: 5, retweets: 15, likes: 62 },
      url: "https://x.com/hiroshifueri",
    },
  ];

  return (
    <section id="twitter-feed" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* セクションヘッダー */}
        <div className="flex flex-col items-center text-center mb-12">
          <Badge variant="gradient" className="px-4 py-1 gap-1.5 text-xs font-semibold mb-3">
            <svg className="w-3.5 h-3.5 fill-current text-cyan-500" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span>X Feed / 日々の発信・ログ</span>
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-title tracking-tight">
            最新の開発ポスト & 技術アウトプット
          </h2>

          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl text-base sm:text-lg">
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">@hiroshifueri</span> で日々のプロダクト開発進捗や技術的な知見をつぶやいています。
          </p>
        </div>

        {/* X アクティビティメインカード */}
        <div className="max-w-3xl mx-auto">
          <Card
            glass
            glow
            className="p-6 sm:p-8 border-slate-200/80 dark:border-white/10 shadow-2xl rounded-3xl relative overflow-hidden space-y-6"
          >
            {/* プロフィールヘッダーエリア */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800/80">
              <div className="flex items-center gap-3.5">
                {/* アバターアイコン */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 p-0.5 shadow-lg shadow-cyan-500/20">
                  <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-base text-slate-900 dark:text-white font-title">
                      Hiroshi Watanabe / fueri
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 fill-cyan-500/20" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    @hiroshifueri
                  </span>
                </div>
              </div>

              {/* X フォローボタン */}
              <a
                href="https://x.com/hiroshifueri"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full sm:w-auto rounded-full gap-2 text-xs font-bold px-5 py-2.5 shadow-md shadow-cyan-500/20"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span>X でフォローする</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Button>
              </a>
            </div>

            {/* ポストリスト */}
            <div className="space-y-6">
              {tweets.map((tweet) => (
                <div
                  key={tweet.id}
                  className="p-5 rounded-2xl bg-slate-100/60 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 space-y-3 group"
                >
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-700 dark:text-slate-300">Hiroshi Watanabe</span>
                      <span>·</span>
                      <span>{tweet.date}</span>
                    </div>
                    <a
                      href={tweet.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500 hover:underline flex items-center gap-1 text-[11px]"
                    >
                      <span>元ポストを見る</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* 本文 */}
                  <p className="text-slate-800 dark:text-slate-200 text-sm leading-relaxed whitespace-pre-wrap">
                    {tweet.content}
                  </p>

                  {/* ハッシュタグ */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {tweet.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* リアクションバー */}
                  <div className="flex items-center gap-6 pt-2 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1.5 hover:text-cyan-500 transition-colors cursor-pointer">
                      <MessageCircle className="w-4 h-4" />
                      <span>{tweet.metrics.replies}</span>
                    </div>
                    <div className="flex items-center gap-1.5 hover:text-emerald-500 transition-colors cursor-pointer">
                      <Repeat2 className="w-4 h-4" />
                      <span>{tweet.metrics.retweets}</span>
                    </div>
                    <div className="flex items-center gap-1.5 hover:text-rose-500 transition-colors cursor-pointer">
                      <Heart className="w-4 h-4" />
                      <span>{tweet.metrics.likes}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ボトム CTA */}
            <div className="pt-4 text-center">
              <a
                href="https://x.com/hiroshifueri"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 dark:from-slate-900/90 dark:to-slate-900/90 text-white border border-slate-800 hover:border-cyan-500/50 text-xs sm:text-sm font-bold shadow-xl transition-all duration-300 group"
              >
                <svg className="w-4 h-4 fill-current text-cyan-400" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>X (旧Twitter) でリアルタイムの投稿を見る</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </Card>
        </div>

      </div>
    </section>
  );
};

export default TwitterTimelineSection;
