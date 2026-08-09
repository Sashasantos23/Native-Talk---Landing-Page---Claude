import { motion } from "framer-motion";
import { BookOpen, Mic, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: BookOpen,
    title: "Vocabulário",
    desc: "Aprenda as palavras e expressões que nativos realmente usam — não aquelas do livro didático. Amplie seu repertório de forma natural e contextual.",
  },
  {
    icon: Mic,
    title: "Pronúncia",
    desc: "Corrija seu sotaque com quem nasceu falando inglês. Feedback direto e honesto de uma americana nativa para que você soe natural e seja entendido com facilidade.",
  },
  {
    icon: Sparkles,
    title: "Confiança",
    desc: "Ganhe segurança para falar inglês em qualquer situação — viagens, reuniões, entrevistas ou conversas do dia a dia. Você vai querer falar mais.",
  },
];

const PillarsSection = () => {
  const scrollToHowItWorks = () => {
    const el = document.getElementById("como-funciona");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-background px-5 py-16 sm:px-7 sm:py-20 md:px-12 lg:px-16">
      <motion.div
        className="mx-auto max-w-6xl text-center mb-10 sm:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-red sm:mb-4 sm:text-[0.78rem]">
          O que você desenvolve
        </p>
        <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] font-black leading-tight tracking-tight text-foreground">
          O inglês que abre portas.
        </h2>
      </motion.div>
      <div className="mx-auto grid max-w-6xl gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 [&>*:last-child]:md:col-span-2 [&>*:last-child]:md:max-w-[50%] [&>*:last-child]:md:mx-auto [&>*:last-child]:lg:col-span-1 [&>*:last-child]:lg:max-w-none [&>*:last-child]:lg:mx-0">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            className="rounded-2xl border-t-4 border-red bg-card p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(13,27,62,0.08)] sm:p-10 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-red/[0.08] sm:mb-6 sm:h-14 sm:w-14">
              <pillar.icon className="h-5 w-5 text-red sm:h-6 sm:w-6" />
            </div>
            <span
              className="mb-3 block font-serif text-[1.6rem] font-bold leading-tight text-foreground sm:text-[1.9rem]"
            >
              {pillar.title}
            </span>
            <p className="mb-4 text-base leading-relaxed text-muted-foreground">
              {pillar.desc}
            </p>
            {/* CHANGE 5 - CTA link */}
            <button
              onClick={scrollToHowItWorks}
              className="text-[0.8rem] font-semibold text-red transition-colors hover:text-foreground cursor-pointer bg-transparent border-none"
            >
              Ver como funciona →
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PillarsSection;
