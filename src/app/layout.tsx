import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ScrollProgress } from "@/components/ScrollProgress";
import { JsonLd } from "@/components/JsonLd";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vhremodelacoes.pt"),
  title: "VH Remodelações — Construção Civil e Remodelações em Portugal",
  description:
    "Especialistas em remodelações completas, pinturas, fachadas e construção civil em toda Portugal. Orçamento grátis via WhatsApp.",
  keywords: [
    "remodelações", "construção civil", "pinturas", "fachadas", "sintra", "portugal",
    "remodelação de interiores", "reabilitação de fachadas", "construção",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VH Remodelações — Construção Civil e Remodelações em Portugal",
    description: "Especialistas em remodelações completas, pinturas, fachadas e construção civil. Orçamento grátis via WhatsApp.",
    url: "https://vhremodelacoes.pt",
    type: "website",
    locale: "pt_PT",
    siteName: "VH Remodelações",
  },
  twitter: {
    card: "summary_large_image",
    title: "VH Remodelações — Construção Civil em Sintra",
    description:
      "30+ anos de experiência em remodelações e construção civil. Orçamento grátis via WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VH Remodelações",
  url: "https://vhremodelacoes.pt",
  logo: "https://vhremodelacoes.pt/favicon.svg",
  email: "obras@vinculos-harmoniosos.pt",
  telephone: "+351936569642",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Dr. Álvaro de Vasconcelos 8",
    addressLocality: "Sintra",
    postalCode: "2710-420",
    addressCountry: "PT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-surface text-on-surface font-[var(--font-inter)]">
        <JsonLd data={organizationSchema} />
        <LoadingScreen />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
