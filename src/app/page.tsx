// C:\Users\u s u á r i o\Documents\Portfólio\src\app\page.tsx
// O que é: O entrypoint principal da página.
// O que fiz de novo: Inseri o componente <Loader /> para a introdução fluída.

import Hero from "@/components/sections/Hero";
import CaseStudies from "@/components/sections/CaseStudies";
import Loader from "@/components/ui/Loader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Loader />
      <Hero />
      <CaseStudies />
    </main>
  );
}