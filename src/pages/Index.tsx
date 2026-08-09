import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";

import TrustBar from "@/components/sections/TrustBar";
import PainPointsSection from "@/components/sections/PainPointsSection";
import PillarsSection from "@/components/sections/PillarsSection";
import AboutSection from "@/components/sections/AboutSection";

import ModalitiesSection from "@/components/sections/ModalitiesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PricingSection from "@/components/sections/PricingSection";
import FaqSection from "@/components/sections/FaqSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";
import { Instagram } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      
      <TrustBar />
      <PainPointsSection />
      <PillarsSection />
      <AboutSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <div className="bg-cream leading-[0] overflow-hidden">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="block w-full h-[40px] sm:h-[50px] md:h-[60px] fill-destructive"
        >
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,25 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
      <CtaSection />

      <footer className="flex flex-col items-center justify-between gap-4 bg-navy px-5 py-8 sm:px-7 sm:py-10 md:flex-row md:px-12 lg:px-16">
        <span className="flex items-center gap-1.5 font-serif text-lg font-black text-white sm:text-xl">
          Native
          <span className="inline-flex h-5 w-5 items-center justify-center overflow-hidden rounded-full border border-white/30 shadow-sm">
            <svg viewBox="0 0 60 60" className="h-full w-full">
              <clipPath id="footerCircle"><circle cx="30" cy="30" r="30"/></clipPath>
              <g clipPath="url(#footerCircle)">
                <rect width="60" height="60" fill="#3C3B6E"/>
                {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
                  <rect key={i} y={i * 4.615} width="60" height="4.615" fill={i % 2 === 0 ? "#B22234" : "#FFFFFF"} />
                ))}
                <rect width="24" height="32" fill="#3C3B6E"/>
              </g>
            </svg>
          </span>
          <span className="text-gold">Talk</span>
        </span>
        <p className="text-center text-[0.75rem] text-white/40 sm:text-[0.82rem]">
          © {new Date().getFullYear()} NativeTalk · Sasha Wigginton · Americana, SP · Inglês de Conversação com Americana Nativa
        </p>
        <div className="flex flex-col items-center gap-2 md:items-end">
          <a
            href="#preco"
            onClick={(e) => { e.preventDefault(); document.getElementById("preco")?.scrollIntoView({ behavior: "smooth" }); }}
            className="text-[0.8rem] font-medium text-gold/80 transition-colors hover:text-gold"
          >
            Agende sua aula experimental gratuita →
          </a>
           <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/native_talkbr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[0.75rem] font-medium text-white/70 transition-colors hover:text-gold sm:text-[0.82rem]"
            >
              <Instagram className="h-4 w-4" />
              @native_talkbr
            </a>
            <svg viewBox="0 0 190 100" className="h-[16px] w-6 overflow-hidden rounded-sm sm:h-[18px] sm:w-7">
              <rect width="190" height="100" fill="#B22234"/>
              {[7.7,15.4,23.1,30.8,38.5,46.2,53.8,61.5,69.2,76.9,84.6,92.3].map((y, i) => (
                <rect key={i} y={y} width="190" height="7.7" fill={i % 2 === 0 ? "#FFFFFF" : "#B22234"} />
              ))}
              <rect width="76" height="53.8" fill="#3C3B6E"/>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
