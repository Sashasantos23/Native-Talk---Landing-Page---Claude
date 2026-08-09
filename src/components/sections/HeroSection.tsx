import { motion } from "framer-motion";
import sashaPhoto from "@/assets/sasha-hero-cutout.png";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-navy">
      {/* Stars pattern via CSS */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
      
      {/* Red stripes accent */}
      <div
        className="absolute right-0 top-0 h-full w-1.5 opacity-60"
        style={{
          background: "repeating-linear-gradient(180deg, hsl(var(--red)) 0px, hsl(var(--red)) 48px, transparent 48px, transparent 96px)"
        }} />
      

      <div className="relative z-10 flex flex-1 flex-col md:flex-row md:items-center md:gap-8 lg:gap-12">
        {/* Text content */}
        <div className="flex flex-1 flex-col items-start justify-center px-5 pb-12 pt-24 sm:px-7 sm:pt-28 md:px-12 md:py-20 md:pt-32 lg:px-16">

          <motion.h1
            className="mb-5 font-serif text-[clamp(2rem,7vw,5rem)] font-black leading-[1.08] tracking-tight text-white sm:mb-7"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            
            Você sabe inglês.{" "}
            <br />
            <em className="shimmer-gold">Só não consegue</em>
            <br />
            <em className="shimmer-gold">falar ainda.</em>
          </motion.h1>

          <motion.p
            className="mb-3 max-w-[520px] text-base font-light leading-relaxed text-white/70 sm:mb-4 sm:text-[16px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}>Aulas de conversação com uma americana nativa dos EUA — sem sotaque artificial, sem método engessado. Inglês do jeito que é falado no dia a dia.
          </motion.p>

          {/* CHANGE 2 - Result line */}
          <motion.p
            className="mb-8 text-[0.85rem] font-medium text-gold/80 sm:mb-10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32 }}>
            A maioria dos alunos sente diferença nas primeiras semanas.
          </motion.p>

          {/* CHANGE 1 - CTA buttons above the fold */}
          <motion.div
            className="mb-6 flex w-full flex-col gap-3 sm:mb-8 sm:w-auto sm:flex-row sm:gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}>
            
            <a
              href="https://wa.me/5519987681112?text=Hi%21%20I%27m%20interested%20in%20English%20classes%20with%20NativeTalk%21"
              target="_blank"
              rel="noopener noreferrer"
              className="wa-pulse inline-flex items-center justify-center gap-2.5 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:scale-105 sm:px-8 sm:py-4 sm:text-base">
              
              <span className="text-lg sm:text-xl">💬</span> Agendar pelo WhatsApp
            </a>
            <a
              href="#modalities"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/25 bg-transparent px-6 py-3.5 text-sm font-medium text-white transition-all hover:border-gold hover:bg-gold/[0.08] sm:px-8 sm:py-4 sm:text-base">
              
              Ver modalidades ↓
            </a>
          </motion.div>

          {/* CHANGE 3 - Social proof strip */}
          <motion.div
            className="mb-8 flex flex-wrap items-center gap-1.5 sm:mb-12"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.38 }}>
            <span className="text-[0.8rem] text-gold/70">★★★★★</span>
            <span className="text-[0.8rem] text-gold/60">+500 alunos atendidos · Resultados reais</span>
          </motion.div>

          <motion.p
            className="max-w-[520px] border-l-2 border-gold pl-4 text-sm font-light leading-relaxed text-white/55"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}>
            Se você entende inglês mas trava na hora de falar, você não está sozinho — e esse bloqueio tem solução.
          </motion.p>
        </div>

        {/* Photo */}
        <motion.div
          className="flex flex-col items-center px-5 pb-32 sm:px-7 md:items-end md:pb-0 md:pr-12 lg:pr-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl bg-gold/20 blur-2xl" />
            <div className="relative h-80 w-64 overflow-hidden rounded-2xl border-2 border-gold shadow-2xl sm:h-96 sm:w-72 md:h-[480px] md:w-[360px] lg:h-[560px] lg:w-[420px]">
              {/* subtle navy depth behind the cut-out subject */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 35%, hsl(var(--navy) / 0.15) 0%, hsl(var(--navy) / 0.75) 75%), inset 0 0 60px hsl(var(--navy))"
                }} />
              <img
                src={sashaPhoto}
                alt="Sasha Wigginton – Professora NativeTalk"
                className="relative h-full w-full object-contain object-bottom drop-shadow-[0_12px_30px_rgba(0,0,0,0.45)]" />
            </div>
          </div>
          <div className="mt-4 text-center md:text-right">
            <p className="font-serif text-2xl font-bold text-white sm:text-3xl md:text-4xl">Sasha Wigginton</p>
            <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-gold sm:px-4 sm:py-2 sm:text-[0.78rem] shadow-md">
              ★Native English Mentor★
            </div>
          </div>

        </motion.div>
      </div>

    </section>);

};

export default HeroSection;
