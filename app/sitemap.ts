import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    {
      url: "https://fueri.jp",
      lastModified: new Date(),
    },
  ];
  return staticPaths;
}
