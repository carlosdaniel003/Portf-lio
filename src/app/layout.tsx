// src\app\layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CustomCursor from "@/components/ui/CustomCursor";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://carlosdaniel.dev.br"),
  title: {
    default: "Carlos Daniel | Full Stack Developer",
    template: "%s | Carlos Daniel",
  },
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
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
  lang="pt-BR"
  className="scroll-smooth"
  data-scroll-behavior="smooth"
  suppressHydrationWarning
>
      <body className={inter.className}>
        <CustomCursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
