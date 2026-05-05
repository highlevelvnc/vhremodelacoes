import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vhremodelacoes.pt";
  const lastModified = new Date();
  return [
    { url: base, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/servicos`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/galeria`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/sobre`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contacto`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacidade`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
