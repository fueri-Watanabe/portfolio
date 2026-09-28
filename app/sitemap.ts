import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fueri.jp";
  const now = new Date();

  return [
    { url: baseUrl, lastModified: now },
    { url: `${baseUrl}/about`, lastModified: now },
    { url: `${baseUrl}/process`, lastModified: now },
    { url: `${baseUrl}/partners`, lastModified: now },
  ];
}
