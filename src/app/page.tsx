import type { Metadata } from "next";
import { HomeClient } from "./HomeClient";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "VH Remodelações — Construção Civil e Remodelações em Sintra",
  description:
    "Especialistas em remodelações, pinturas, fachadas, telhados e construção civil em Sintra e toda Portugal. 30+ anos de experiência. Orçamento grátis via WhatsApp.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "VH Remodelações — Construção Civil em Sintra",
    description:
      "30+ anos de experiência em remodelações e construção civil. Orçamento grátis via WhatsApp.",
    url: "https://vhremodelacoes.pt",
    type: "website",
    locale: "pt_PT",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "GeneralContractor"],
  "@id": "https://vhremodelacoes.pt/#business",
  name: "VH Remodelações",
  description:
    "Empresa de construção civil e remodelações em Sintra com 30+ anos de experiência.",
  url: "https://vhremodelacoes.pt",
  telephone: "+351936569642",
  email: "obras@vinculos-harmoniosos.pt",
  priceRange: "€€",
  image: "https://vhremodelacoes.pt/fachadas/fachada-03.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Dr. Álvaro de Vasconcelos 8",
    addressLocality: "Sintra",
    postalCode: "2710-420",
    addressCountry: "PT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.7976,
    longitude: -9.3917,
  },
  areaServed: [
    { "@type": "City", name: "Sintra" },
    { "@type": "City", name: "Lisboa" },
    { "@type": "City", name: "Cascais" },
    { "@type": "Country", name: "Portugal" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qual é a zona de atuação da VH Remodelações?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atuamos em Sintra, Lisboa, Cascais e em toda Portugal continental.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo demora uma remodelação completa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Uma remodelação completa de apartamento T2 demora em média 6 a 10 semanas, dependendo do nível de intervenção e materiais escolhidos.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona o pedido de orçamento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Envia-nos uma mensagem via WhatsApp com o que pretende. Em 24h respondemos para agendar uma visita técnica gratuita ao local.",
      },
    },
    {
      "@type": "Question",
      name: "Têm alvará de construção?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, somos uma empresa licenciada com alvará de construção e seguro de obra ativo, conforme a legislação portuguesa.",
      },
    },
    {
      "@type": "Question",
      name: "O IVA está incluído nos orçamentos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Os nossos orçamentos podem incluir IVA a 6% para reabilitação de habitação ou 23% para construção nova, conforme a natureza da obra e a aplicação da Verba 2.27 do CIVA.",
      },
    },
    {
      "@type": "Question",
      name: "Garantia das obras realizadas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Todas as nossas obras têm garantia legal de 5 anos sobre elementos estruturais e 2 anos sobre acabamentos, conforme o Decreto-Lei nº 67/2003.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />
      <HomeClient />
    </>
  );
}
