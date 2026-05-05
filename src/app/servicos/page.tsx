import type { Metadata } from "next";
import { ServicosClient } from "./ServicosClient";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Serviços — Remodelações, Fachadas, Telhados | VH Remodelações Sintra",
  description:
    "Serviços completos de construção civil em Sintra: remodelações, fachadas, telhados, canalização, eletricidade, pinturas. 30+ anos de experiência. Orçamento grátis.",
  alternates: { canonical: "/servicos" },
  openGraph: {
    title: "Serviços | VH Remodelações Sintra",
    description:
      "Serviços completos de construção civil em Sintra: remodelações, fachadas, telhados, canalização, eletricidade, pinturas.",
    url: "https://vhremodelacoes.pt/servicos",
    type: "website",
    locale: "pt_PT",
  },
};

const provider = {
  "@type": "GeneralContractor",
  name: "VH Remodelações",
  url: "https://vhremodelacoes.pt",
  telephone: "+351936569642",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Dr. Álvaro de Vasconcelos 8",
    addressLocality: "Sintra",
    postalCode: "2710-420",
    addressCountry: "PT",
  },
};

const serviceList = [
  {
    name: "Remodelações de Interiores",
    description:
      "Transformamos espaços obsoletos em ambientes contemporâneos de alta performance, com optimização funcional e estética premium.",
    serviceType: "HomeRenovation",
  },
  {
    name: "Reabilitação de Fachadas",
    description:
      "Sistema ETICS (Capoto), limpeza técnica de pedra e revestimentos cerâmicos. Isolamento térmico superior e valorização do património.",
    serviceType: "FacadeRenovation",
  },
  {
    name: "Coberturas e Impermeabilização",
    description:
      "Membranas asfálticas de última geração e sistemas de drenagem inteligente para telhados tradicionais e coberturas planas.",
    serviceType: "Roofing",
  },
  {
    name: "Canalização e Redes de Água",
    description:
      "Projecto e instalação de redes de águas e esgotos, sistemas solares térmicos, com materiais de baixo ruído e alta resistência.",
    serviceType: "Plumbing",
  },
  {
    name: "Instalações Elétricas e Domótica",
    description:
      "Redes elétricas certificadas e sistemas de automação residencial para controlo de iluminação, climatização e segurança.",
    serviceType: "ElectricalServices",
  },
  {
    name: "Pinturas Técnicas e Decorativas",
    description:
      "Tintas premium, estuques venezianos e revestimentos texturizados de luxo com aplicação técnica para acabamentos impecáveis.",
    serviceType: "Painting",
  },
  {
    name: "Pavimentos e Revestimentos",
    description:
      "Soalho flutuante de madeira nobre, cerâmicos de grande formato e técnicas de nivelamento avançadas.",
    serviceType: "Flooring",
  },
  {
    name: "Drogaria VH e Suprimentos",
    description:
      "Ferramentas profissionais, produtos químicos de construção e consultoria técnica personalizada na nossa loja em Sintra.",
    serviceType: "BuildingSupplies",
  },
];

const servicesSchemas = serviceList.map((s) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.name,
  description: s.description,
  serviceType: s.serviceType,
  provider,
  areaServed: [
    { "@type": "City", name: "Sintra" },
    { "@type": "City", name: "Lisboa" },
    { "@type": "City", name: "Cascais" },
    { "@type": "Country", name: "Portugal" },
  ],
}));

export default function Page() {
  return (
    <>
      {servicesSchemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      <ServicosClient />
    </>
  );
}
