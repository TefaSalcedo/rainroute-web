import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RainRoute - Predicción de Lluvia en Ruta",
  description: "Evita la lluvia en tus desplazamientos diarios con RainRoute.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
