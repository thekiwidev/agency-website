import Hero from "@/components/home/Hero";
import Trust from "@/components/home/Trust";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import CaseHighlight from "@/components/home/CaseHighlight";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";
import TestimonialsFull from "@/components/home/TestimonialsFull";
import { StructuredData } from "@/components/seo/StructuredData";
import { orgSchema, websiteSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <StructuredData data={[orgSchema, websiteSchema]} />
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
