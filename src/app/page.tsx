// src\app\page.tsx
import AboutMe from "@/components/sections/AboutMe";
import CaseStudies from "@/components/sections/CaseStudies";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import InteractiveBackground from "@/components/ui/InteractiveBackground";
import Loader from "@/components/ui/Loader";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <main className="relative min-h-screen isolate overflow-hidden bg-[color:var(--bg)] text-[color:var(--text)]">
      <Loader />
      <InteractiveBackground />

      <div className="relative z-10">
        <Hero />

        <SectionDivider index="01" title="Identidade técnica" />
        <AboutMe />

        <SectionDivider index="02" title="Projetos reais" />
        <CaseStudies />

        <SectionDivider index="03" title="Contato direto" />
        <Contact />
      </div>
    </main>
  );
}