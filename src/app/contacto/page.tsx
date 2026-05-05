import type { Metadata } from "next";
import { ContactoClient } from "./ContactoClient";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contacto — Pedir Orçamento Grátis | VH Remodelações",
  description:
    "Contacte a VH Remodelações em Sintra. WhatsApp 936 569 642. Email obras@vinculos-harmoniosos.pt. Resposta em 24h. Orçamento grátis.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto | VH Remodelações Sintra",
    description:
      "Contacte a VH Remodelações em Sintra. Resposta em 24h. Orçamento grátis via WhatsApp.",
    url: "https://vhremodelacoes.pt/contacto",
    type: "website",
    locale: "pt_PT",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: "https://vhremodelacoes.pt/contacto",
  name: "Contacto VH Remodelações",
  inLanguage: "pt-PT",
  about: {
    "@type": "LocalBusiness",
    "@id": "https://vhremodelacoes.pt/#business",
    name: "VH Remodelações",
    telephone: "+351936569642",
    email: "obras@vinculos-harmoniosos.pt",
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
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+351936569642",
        contactType: "customer service",
        areaServed: "PT",
        availableLanguage: ["Portuguese"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+351926010809",
        contactType: "sales",
        areaServed: "PT",
        availableLanguage: ["Portuguese"],
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      <ContactoClient />
    </>
  );
}
