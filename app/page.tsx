import Hero from "@/components/home/Hero";
import Trust from "@/components/home/Trust";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import CaseHighlight from "@/components/home/CaseHighlight";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";
import TestimonialsFull from "@/components/home/TestimonialsFull";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <Process />
      <CaseHighlight />
      <TestimonialsFull />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
