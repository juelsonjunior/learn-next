import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aprendendo next js",
  description: "Treinando os primeiros coneitos de next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
