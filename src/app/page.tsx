import AboutMe from "@/components/sections/AboutMe";
import CaseStudies from "@/components/sections/CaseStudies";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import InteractiveBackground from "@/components/ui/InteractiveBackground";
import Loader from "@/components/ui/Loader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <main className="relative min-h-screen isolate overflow-hidden bg-[color:var(--bg)] text-[color:var(--text)]">
      <Loader />
      <InteractiveBackground />

      <div className="relative z-10">
        <Hero />

        <SectionDivider index="01" title="Identidade técnica" />

        <ScrollReveal variant="up">
          <AboutMe />
        </ScrollReveal>

        <SectionDivider index="02" title="Projetos reais" />

        <ScrollReveal variant="scale">
          <CaseStudies />
        </ScrollReveal>

        <SectionDivider index="03" title="Contato direto" />

        <ScrollReveal variant="up">
          <Contact />
        </ScrollReveal>
      </div>
    </main>
  );
}