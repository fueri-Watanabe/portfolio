import { NextRequest, NextResponse } from "next/server";

export const revalidate = 86400; // 24時間サーバーキャッシュ

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get("url");

  if (!targetUrl) {
    return NextResponse.json({ imageUrl: null }, { status: 400 });
  }

  try {
    const res = await fetch(targetUrl, {
      next: { revalidate: 86400 },
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
      },
    });

    if (!res.ok) {
      return NextResponse.json({ imageUrl: null });
    }

    const html = await res.text();

    // og:image または twitter:image の抽出 (大文字小文字・属性順に対応)
    const ogMatch =
      html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) ||
      html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i) ||
      html.match(/<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i) ||
      html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image["']/i);

    let imageUrl = ogMatch ? ogMatch[1] : null;

    if (imageUrl) {
      // HTMLエスケープ文字列の解除
      imageUrl = imageUrl.replace(/&amp;/g, "&");

      // 相対パスを絶対URLへ変換
      if (imageUrl.startsWith("/")) {
        const parsed = new URL(targetUrl);
        imageUrl = `${parsed.origin}${imageUrl}`;
      } else if (!imageUrl.startsWith("http://") && !imageUrl.startsWith("https://")) {
        imageUrl = new URL(imageUrl, targetUrl).href;
      }
    }

    return NextResponse.json({ imageUrl });
  } catch (error) {
    console.error("OGP extraction error:", error);
    return NextResponse.json({ imageUrl: null });
  }
}
