import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/ui/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carlos Daniel | Full Stack Developer",
  description: "Sistemas Inteligentes e Automação Industrial",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} flex min-h-screen`}>
        <Sidebar />
        {/* Adiciona margem à esquerda para o sidebar em telas grandes */}
        <div className="flex-1 md:ml-64 relative">
          {children}
        </div>
      </body>
    </html>
  );
}