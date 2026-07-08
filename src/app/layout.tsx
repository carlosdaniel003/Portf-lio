// src/app/layout.tsx

import type {
  Metadata,
  Viewport,
} from "next";
import type { ReactNode } from "react";

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
  weight: ["400", "500", "600", "700"],
});

const siteUrl =
  "https://carlosdaniel.dev.br";

const title =
  "Carlos Daniel | Portfólio de Software, IA e Eletrônica";

const description =
  "Portfólio profissional de Carlos Daniel com projetos em sistemas, software industrial, dashboards, inteligência artificial, visão computacional, eletrônica e automação.";

const socialImage =
  `${siteUrl}/opengraph-image?v=cd4`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: title,
    template: "%s | Carlos Daniel",
  },

  description,
  applicationName:
    "Portfólio Profissional Carlos Daniel",

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
    "Portfólio profissional",
    "Técnico em Eletrônica",
    "Desenvolvedor de Sistemas",
    "Desenvolvedor Full Stack",
    "Software Industrial",
    "Inteligência Artificial",
    "Visão Computacional",
    "Automação Industrial",
    "Dashboards",
    "Next.js",
    "TypeScript",
    "Python",
    "OpenCV",
    "Manaus",
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
          "Portfólio profissional de Carlos Daniel — Software, IA e Eletrônica",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#12343a",
  colorScheme: "dark",
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
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
