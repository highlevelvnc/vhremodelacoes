import type { Metadata } from "next";
import { SobreClient } from "./SobreClient";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Sobre Nós — VH Remodelações | 30 Anos a Construir Confiança",
  description:
    "História da VH Remodelações, empresa de construção civil em Sintra com 30+ anos de experiência. Conheça a nossa equipa e valores.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: "Sobre a VH Remodelações | 30 Anos a Construir Confiança",
    description:
      "Empresa de construção civil em Sintra com 30+ anos de experiência. Conheça a nossa história, equipa e valores.",
    url: "https://vhremodelacoes.pt/sobre",
    type: "website",
    locale: "pt_PT",
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: "https://vhremodelacoes.pt/sobre",
  name: "Sobre a VH Remodelações",
  inLanguage: "pt-PT",
  about: {
    "@type": "Organization",
    "@id": "https://vhremodelacoes.pt/#business",
    name: "VH Remodelações",
    foundingDate: "1995",
    description:
      "Empresa familiar de construção civil e remodelações fundada em Sintra, com mais de 30 anos de experiência.",
    url: "https://vhremodelacoes.pt",
    logo: "https://vhremodelacoes.pt/favicon.svg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Dr. Álvaro de Vasconcelos 8",
      addressLocality: "Sintra",
      postalCode: "2710-420",
      addressCountry: "PT",
    },
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={aboutPageSchema} />
      <SobreClient />
    </>
  );
}
