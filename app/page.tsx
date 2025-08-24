import Hero from "@/components/home/Hero";
import Trust from "@/components/home/Trust";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import CaseHighlight from "@/components/home/CaseHighlight";
import TechStrip from "@/components/home/TechStrip";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <Process />
      <CaseHighlight />
      <TechStrip />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
