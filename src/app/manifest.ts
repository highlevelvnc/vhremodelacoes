import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VH Remodelações",
    short_name: "VH",
    description:
      "VH Remodelações — empresa de construção civil e remodelações em Sintra com 30+ anos de experiência. Pinturas, fachadas, telhados e obras chave-na-mão em toda Portugal.",
    start_url: "/",
    display: "standalone",
    background_color: "#041329",
    theme_color: "#8a0110",
    lang: "pt-PT",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
