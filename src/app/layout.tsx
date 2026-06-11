// src\app\layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/ui/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Carlos Daniel | Full Stack Developer",
  description:
    "Portfólio de Carlos Daniel: sistemas industriais, IA aplicada, visão computacional, automação e desenvolvimento full stack.",
  keywords: [
    "Carlos Daniel",
    "Full Stack Developer",
    "Portfólio",
    "IA",
    "Visão Computacional",
    "Automação Industrial",
    "Next.js",
    "Python",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
