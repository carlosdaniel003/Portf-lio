import AboutMe from "@/components/sections/AboutMe";
import CaseStudies from "@/components/sections/CaseStudies";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import InteractiveBackground from "@/components/ui/InteractiveBackground";
import Loader from "@/components/ui/Loader";

export default function Home() {
  return (
    <main className="relative min-h-screen isolate overflow-hidden bg-[color:var(--bg)] text-[color:var(--text)]">
      <Loader />
      <InteractiveBackground />

      <div className="relative z-10">
        <Hero />
        <AboutMe />
        <CaseStudies />
        <Contact />
      </div>
    </main>
  );
}