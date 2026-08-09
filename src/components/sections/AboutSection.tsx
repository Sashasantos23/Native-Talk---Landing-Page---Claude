import { motion } from "framer-motion";


const checks = [
  "Você aprende o inglês que americanos realmente falam — não o do livro didático",
  "Cada aula é feita para o SEU objetivo — viagem, trabalho ou dia a dia",
  "Você fala desde a primeira aula — sem esperar estar pronto",
  "Online de qualquer lugar do mundo, ou presencial em Americana-SP",
  "Horários que encaixam na sua rotina — sem burocracia",
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-card px-5 py-16 sm:px-7 sm:py-20 md:px-12 md:py-24 lg:px-16">
      <div className="mx-auto max-w-5xl grid gap-10 md:grid-cols-2 md:items-start">
        {/* LEFT: Photo + Quote */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >

          {/* Quote block */}
          <div className="rounded-2xl bg-navy border border-gold/20 p-6 sm:p-8">
            <div className="mb-3 inline-block h-[24px] w-10 overflow-hidden rounded shadow-sm">
              <svg viewBox="0 0 60 30" className="h-full w-full">
                {[0, 2, 4, 6, 8, 10, 12].map((i) => (
                  <rect key={`r${i}`} y={i * 2.307} width="60" height="2.307" fill="#B22234" />
                ))}
                {[1, 3, 5, 7, 9, 11].map((i) => (
                  <rect key={`w${i}`} y={i * 2.307} width="60" height="2.307" fill="#FFFFFF" />
                ))}
                <rect width="24" height="16" fill="#3C3B6E" />
              </svg>
            </div>
            <p className="font-serif text-base italic leading-relaxed text-white/90">
              "Cresci nos Estados Unidos e sei exatamente o inglês que você precisa para se comunicar com confiança no mundo real."
            </p>
            <p className="mt-3 text-[0.7rem] font-medium tracking-wide text-gold/70 sm:text-xs">
              — Sasha Wigginton · Native Mentor · NativeTalk · Americana, SP
            </p>
          </div>
        </motion.div>

        {/* RIGHT: Label, heading, bullets */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-red sm:mb-4 sm:text-[0.78rem]">
            Por que o NativeTalk?
          </p>
          <h2 className="mb-4 font-serif text-[clamp(1.8rem,4vw,3rem)] font-black leading-tight tracking-tight text-foreground sm:mb-5">
            Mais do que gramática.
            <br />
            Experiência real.
          </h2>
          <p className="mb-7 max-w-[560px] text-base font-light leading-relaxed text-muted-foreground sm:mb-9">
            Aqui você aprende o inglês que nativos realmente usam — expressões idiomáticas, sotaque autêntico, ritmo de fala e confiança para qualquer situação.
          </p>
          <ul className="flex flex-col gap-3 sm:gap-4">
            {checks.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-foreground/80 sm:gap-3.5">
                <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-red text-[0.6rem] font-bold text-white sm:h-[22px] sm:w-[22px] sm:text-[0.7rem]">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
