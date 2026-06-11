import AboutMe from "@/components/sections/AboutMe";
import CaseStudies from "@/components/sections/CaseStudies";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Loader from "@/components/ui/Loader";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[color:var(--bg)] text-[color:var(--text)]">
      <Loader />
      <Hero />
      <AboutMe />
      <CaseStudies />
      <Contact />
    </main>
  );
}