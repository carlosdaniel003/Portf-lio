import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CustomCursor from "@/components/ui/CustomCursor";
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
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <CustomCursor />
        <Header />
        {children}
      </body>
    </html>
  );
}