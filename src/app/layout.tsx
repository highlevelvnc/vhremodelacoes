import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";

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
  title: "VH Remodelacoes - Construcao Civil e Remodelacoes em Portugal",
  description:
    "Especialistas em remodelacoes completas, pinturas, fachadas e construcao civil em toda Portugal. Orcamento gratis via WhatsApp.",
  keywords: [
    "remodelacoes",
    "construcao civil",
    "pinturas",
    "fachadas",
    "sintra",
    "portugal",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-surface text-on-surface font-[var(--font-inter)]">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
