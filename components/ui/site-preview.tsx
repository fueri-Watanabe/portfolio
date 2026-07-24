"use client";

import { useState, useEffect } from "react";
import { Globe, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SitePreviewProps {
  url?: string;
  fallbackImage?: string;
  alt: string;
  className?: string;
}

export function SitePreview({
  url,
  fallbackImage,
  alt,
  className,
}: SitePreviewProps) {
  const [ogImageUrl, setOgImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    if (!url) {
      if (fallbackImage) {
        setOgImageUrl(fallbackImage);
      } else {
        setHasError(true);
      }
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setHasError(false);

    // OGP 取得 API Route (/api/og?url=...) 呼び出し
    fetch(`/api/og?url=${encodeURIComponent(url)}`)
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted) return;
        if (data.imageUrl) {
          setOgImageUrl(data.imageUrl);
        } else if (fallbackImage) {
          setOgImageUrl(fallbackImage);
        } else {
          setHasError(true);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (!isMounted) return;
        if (fallbackImage) {
          setOgImageUrl(fallbackImage);
        } else {
          setHasError(true);
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [url, fallbackImage]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    // OGP 画像が失敗した場合、fallbackImage を試す
    if (ogImageUrl !== fallbackImage && fallbackImage) {
      setOgImageUrl(fallbackImage);
    } else {
      setHasError(true);
      setIsLoading(false);
    }
  };

  // ドメイン名抽出
  const getDomainName = (targetUrl?: string) => {
    if (!targetUrl) return "";
    try {
      return new URL(targetUrl).hostname.replace(/^www\./, "");
    } catch {
      return targetUrl;
    }
  };

  return (
    <div className={cn("relative w-full h-full bg-slate-900 overflow-hidden", className)}>
      {/* 1. ローディングスケルトン */}
      {isLoading && (
        <div className="absolute inset-0 bg-slate-800/80 backdrop-blur-sm animate-pulse flex flex-col items-center justify-center gap-2 z-10 text-slate-400">
          <Loader2 className="w-6 h-6 animate-spin text-cyan-400" />
          <span className="text-xs font-mono tracking-wider">Loading OGP Preview...</span>
        </div>
      )}

      {/* 2. OGP 動的アイキャッチ画像 */}
      {ogImageUrl && !hasError ? (
        <img
          src={ogImageUrl}
          alt={alt}
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={cn(
            "w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-105",
            isLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"
          )}
        />
      ) : (
        /* 3. エラー時代替ドメインプレースホルダー */
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-slate-400 gap-3 p-6 text-center select-none">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-inner">
            <Globe className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <span className="text-sm font-bold font-mono text-slate-200 block">
              {getDomainName(url) || alt}
            </span>
            <span className="text-[11px] text-slate-500 font-mono">
              Live Site Available
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
