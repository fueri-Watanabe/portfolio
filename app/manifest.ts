import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Web Developer fueri/Hiroshi Watanabe",
    short_name: "fueri/Hiroshi Watanabe",
    description: "Web Developer fueri/Hiroshi Watanabe",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
