// src\app\layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import CustomCursor from "@/components/ui/CustomCursor";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://carlosdaniel.dev.br";

const title =
  "Carlos Daniel | Software, IA e Automação Industrial";

const description =
  "Desenvolvo sistemas, dashboards, automações e soluções com inteligência artificial e visão computacional para transformar problemas reais de indústria, qualidade e operação.";

const socialImage = `${siteUrl}/opengraph-image?v=cd3`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: title,
    template: "%s | Carlos Daniel",
  },

  description,

  applicationName: "Portfólio Carlos Daniel",

  authors: [
    {
      name: "Carlos Daniel",
      url: siteUrl,
    },
  ],

  creator: "Carlos Daniel",
  publisher: "Carlos Daniel",

  alternates: {
    canonical: "/",
  },

  keywords: [
    "Carlos Daniel",
    "Desenvolvedor Full Stack",
    "Desenvolvimento de Sistemas",
    "Software Industrial",
    "Inteligência Artificial",
    "Visão Computacional",
    "Automação Industrial",
    "Dashboards",
    "Next.js",
    "TypeScript",
    "Python",
    "OpenCV",
  ],

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Carlos Daniel",
    title,
    description,
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Carlos Daniel | Software, IA e Automação Industrial",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@carlosdaniel003",
    images: [socialImage],
  },

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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

        <Analytics />
      </body>
    </html>
  );
}