import type { Metadata } from "next";
import { PrivacidadeClient } from "./PrivacidadeClient";

export const metadata: Metadata = {
  title: "Política de Privacidade | VH Remodelações",
  description:
    "Política de privacidade da VH Remodelações em conformidade com o RGPD.",
  alternates: { canonical: "/privacidade" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Política de Privacidade | VH Remodelações",
    description:
      "Política de privacidade da VH Remodelações em conformidade com o RGPD.",
    url: "https://vhremodelacoes.pt/privacidade",
    type: "website",
    locale: "pt_PT",
  },
};

export default function Page() {
  return <PrivacidadeClient />;
}
