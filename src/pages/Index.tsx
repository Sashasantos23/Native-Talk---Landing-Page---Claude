import { Instagram, MessageCircle } from "lucide-react";
import { NativeTalkLogo } from "@/components/NativeTalkLogo";
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import PainPointsSection from "@/components/sections/PainPointsSection";
import PillarsSection from "@/components/sections/PillarsSection";
import SpokenMarquee from "@/components/sections/SpokenMarquee";
import AboutSection from "@/components/sections/AboutSection";
import ModalitiesSection from "@/components/sections/ModalitiesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";
import { WA_BOOK, INSTAGRAM_URL } from "@/lib/whatsapp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <PainPointsSection />
      <PillarsSection />
      <SpokenMarquee />
      <AboutSection />
      <ModalitiesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />

      <footer className="border-t border-paper/10 bg-ink px-5 py-12 text-paper sm:px-7 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <NativeTalkLogo className="h-9" light />
            <p className="mt-4 text-[0.9rem] leading-relaxed text-paper/55">
              Inglês de conversação com americana nativa. Online e presencial em
              Americana-SP.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={WA_BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.92rem] font-medium text-paper/80 transition-colors hover:text-flame"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.25} />
              Agendar aula gratuita
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.92rem] font-medium text-paper/80 transition-colors hover:text-flame"
            >
              <Instagram className="h-4 w-4" strokeWidth={2.25} />
              @native_talkbr
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-paper/10 pt-6 text-[0.78rem] text-paper/40">
          © {new Date().getFullYear()} Native Talk · Sasha Wigginton · Americana, SP
        </div>
      </footer>
    </div>
  );
};

export default Index;
