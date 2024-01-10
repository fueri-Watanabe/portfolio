import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.PUBLIC_URL ?? "";
  const lastModified = new Date();

  const staticPaths = [
    {
      url: `${baseUrl}`,
      lastModified,
    },
  ];
  return staticPaths;
}
