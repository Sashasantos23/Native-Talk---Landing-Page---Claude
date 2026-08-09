import { motion } from "framer-motion";

const CtaSection = () => {
  return (
    <section className="relative overflow-hidden px-5 py-16 text-center sm:px-7 sm:py-20 md:px-12 md:py-24 lg:px-16 bg-destructive border-0 border-none border-destructive">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />
      
      <div className="relative mx-auto max-w-3xl">
        <motion.div
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold sm:text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          🟡 Vagas abertas esta semana — agenda limitada
        </motion.div>
        <motion.h2
          className="mb-3 font-serif text-[clamp(1.8rem,4vw,3.2rem)] font-black text-white sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}>
          Pronto(a) para falar inglês com uma nativa?
        </motion.h2>
        <motion.p
          className="mb-8 text-[0.95rem] font-light text-white/80 sm:mb-10 sm:text-[1.05rem]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}>
          Dê o primeiro passo agora. Atendo poucos alunos por semana para garantir atenção real a cada um. Sua primeira conversa pode mudar tudo.
        </motion.p>
        <motion.a
          href="https://wa.me/5519987681112?text=Hi%21%20I%27m%20interested%20in%20English%20classes%20with%20NativeTalk%21"
          target="_blank"
          rel="noopener noreferrer"
          className="wa-pulse inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:scale-105 sm:gap-3 sm:px-10 sm:py-5 sm:text-lg font-serif bg-whatsapp"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          
          <span className="text-lg sm:text-xl">💬</span>
          Quero destravar meu inglês agora!
        </motion.a>
      </div>
    </section>);

};

export default CtaSection;