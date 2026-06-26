// src\app\layout.tsx
import type {
  Metadata,
  Viewport,
} from "next";

import {
  IBM_Plex_Mono,
  Manrope,
  Space_Grotesk,
} from "next/font/google";

import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

import CustomCursor from "@/components/ui/CustomCursor";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

import "./globals.css";

/*
 * ============================================================
 * FONTES DA NOVA IDENTIDADE
 * ============================================================
 *
 * Space Grotesk:
 * títulos editoriais e chamadas de alto impacto.
 *
 * Manrope:
 * textos, navegação, botões e interface.
 *
 * IBM Plex Mono:
 * etiquetas técnicas, números, códigos e metadados.
 */

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
  weight: [
    "400",
    "500",
    "600",
    "700",
  ],
});

/*
 * ============================================================
 * IDENTIDADE E SEO
 * ============================================================
 */

const siteUrl =
  "https://carlosdaniel.dev.br";

const title =
  "Carlos Daniel | Software, IA e Automação Industrial";

const description =
  "Desenvolvo sistemas, dashboards, automações e soluções com inteligência artificial e visão computacional para transformar problemas reais de indústria, qualidade e operação.";

const socialImage =
  `${siteUrl}/opengraph-image?v=cd3`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: title,
    template: "%s | Carlos Daniel",
  },

  description,

  applicationName:
    "Portfólio Carlos Daniel",

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
        alt:
          "Carlos Daniel — Software, IA e Automação Industrial",
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
    apple: "/favicon.svg",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

/*
 * Cor usada também pela barra superior
 * dos navegadores mobile.
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#12343a",
  colorScheme: "dark",
};

/*
 * ============================================================
 * INICIALIZAÇÃO TEMPORÁRIA DO TEMA
 * ============================================================
 *
 * O ThemeToggle atual ainda salva:
 *
 * portfolio-theme = "dark" | "light"
 *
 * Na nova identidade:
 *
 * dark  → tema principal verde
 * light → tema principal azul
 *
 * Este script é executado antes da hidratação para evitar
 * que a página pisque verde antes de carregar o tema salvo.
 *
 * Depois de atualizarmos ThemeToggle.tsx, essa ponte será
 * substituída por:
 *
 * portfolio-accent-theme = "green" | "blue"
 */

const themeInitializationScript = `
  (() => {
    try {
      const storedTheme =
        window.localStorage.getItem("portfolio-theme");

      document.documentElement.classList.toggle(
        "light",
        storedTheme === "light"
      );
    } catch {
      document.documentElement.classList.remove("light");
    }
  })();
`;

/*
 * ============================================================
 * ROOT LAYOUT
 * ============================================================
 */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVariables = [
    spaceGrotesk.variable,
    manrope.variable,
    ibmPlexMono.variable,
    "scroll-smooth",
  ].join(" ");

  return (
    <html
      lang="pt-BR"
      className={fontVariables}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        <Script
          id="portfolio-theme-initialization"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: themeInitializationScript,
          }}
        />

        <CustomCursor />

        <Header />

        {children}

        <Footer />

        <Analytics />
      </body>
    </html>
  );
}