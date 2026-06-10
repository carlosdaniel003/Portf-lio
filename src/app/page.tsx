import CaseStudies from "@/components/sections/CaseStudies";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Stack from "@/components/sections/Stack";
import Loader from "@/components/ui/Loader";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[color:var(--bg)] text-[color:var(--text)]">
      <Loader />
      <Hero />
      <Services />
      <CaseStudies />
      <Stack />
      <Contact />
    </main>
  );
}
