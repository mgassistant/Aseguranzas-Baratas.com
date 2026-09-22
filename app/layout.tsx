import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aseguranzas-baratas.com"),
  title: {
    default: "Aseguranzas Baratas en California | Cotiza Seguro de Auto",
    template: "%s | Aseguranzas-Baratas.com"
  },
  description:
    "Compara opciones de seguro de auto económicas en California. Ayuda con responsabilidad civil, cobertura completa y SR-22. Atención en español.",
  keywords: [
    "aseguranzas baratas",
    "seguros de auto baratos",
    "seguro de carro barato",
    "SR-22 California",
    "aseguranza de carro",
    "seguro de auto en español"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Aseguranzas Baratas en California",
    description:
      "Cotiza opciones de seguro de auto económicas con atención en español.",
    url: "https://aseguranzas-baratas.com",
    siteName: "Aseguranzas-Baratas.com",
    locale: "es_US",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
