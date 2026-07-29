import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import AboutSection from "@/components/home/AboutSection";
import TestimonialsFull from "@/components/home/TestimonialsFull";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";
import { StructuredData } from "@/components/seo/StructuredData";
import { orgSchema, websiteSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <StructuredData data={[orgSchema, websiteSchema]} />
      <Hero />
      <Services />
      <Process />
      <AboutSection />
      <TestimonialsFull />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
