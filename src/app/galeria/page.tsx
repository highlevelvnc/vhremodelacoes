import type { Metadata } from "next";
import { GaleriaClient } from "./GaleriaClient";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Galeria — Portfólio de Obras VH Remodelações em Sintra",
  description:
    "Mais de 60 fotos de obras concluídas em Sintra e região: fachadas, interiores, construção. Veja o nosso portefólio profissional.",
  alternates: { canonical: "/galeria" },
  openGraph: {
    title: "Galeria | Portfólio VH Remodelações",
    description:
      "Mais de 60 fotos de obras concluídas em Sintra e região: fachadas, interiores e construção.",
    url: "https://vhremodelacoes.pt/galeria",
    type: "website",
    locale: "pt_PT",
  },
};

const base = "https://vhremodelacoes.pt";

function buildAssociatedMedia() {
  const items: { contentUrl: string; caption: string }[] = [];
  for (let i = 1; i <= 22; i++) {
    items.push({
      contentUrl: `${base}/fachadas/fachada-${String(i).padStart(2, "0")}.jpg`,
      caption: `Reabilitação de fachada — obra VH ${String(i).padStart(2, "0")}`,
    });
  }
  for (let i = 1; i <= 9; i++) {
    items.push({
      contentUrl: `${base}/construcao/construcao-${String(i).padStart(2, "0")}.jpg`,
      caption: `Construção civil — obra VH ${String(i).padStart(2, "0")}`,
    });
  }
  for (let i = 1; i <= 13; i++) {
    items.push({
      contentUrl: `${base}/interiores/interior-${String(i).padStart(2, "0")}.jpg`,
      caption: `Remodelação de interior — obra VH ${String(i).padStart(2, "0")}`,
    });
  }
  for (let i = 1; i <= 20; i++) {
    items.push({
      contentUrl: `${base}/servicos/servico-${String(i).padStart(2, "0")}.jpg`,
      caption: `Serviço VH ${String(i).padStart(2, "0")}`,
    });
  }
  return items;
}

const imageGallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Portfólio de Obras VH Remodelações",
  description:
    "Galeria de fachadas, interiores, construção e serviços executados pela VH Remodelações em Sintra e região.",
  url: `${base}/galeria`,
  inLanguage: "pt-PT",
  isPartOf: { "@type": "WebSite", name: "VH Remodelações", url: base },
  associatedMedia: buildAssociatedMedia().map((item) => ({
    "@type": "ImageObject",
    contentUrl: item.contentUrl,
    url: item.contentUrl,
    caption: item.caption,
    creditText: "VH Remodelações",
  })),
};

export default function Page() {
  return (
    <>
      <JsonLd data={imageGallerySchema} />
      <GaleriaClient />
    </>
  );
}
