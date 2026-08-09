import { motion } from "framer-motion";

const painPoints = [
  { emoji: "😶", text: "Você entende tudo, mas na hora de responder a cabeça apaga." },
  { emoji: "😰", text: "Em reuniões ou viagens, você deixa os outros falar por você." },
  { emoji: "🏫", text: "Você já tentou várias escolas de inglês e cursos, mas nada virou fluência de verdade." },
  { emoji: "💼", text: "Sente que o inglês está te limitando profissionalmente — e isso incomoda." },
];

const PainPointsSection = () => {
  const scrollToHowItWorks = () => {
    const el = document.getElementById("como-funciona");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-background px-5 py-16 sm:px-7 sm:py-20 md:px-12 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <motion.div
          className="mb-10 text-center sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-red sm:mb-4 sm:text-[0.78rem]">
            Você não está sozinho
          </p>
          <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] font-black leading-tight tracking-tight text-foreground">
            A maioria dos alunos estudou por anos e ainda trava na hora de falar.
          </h2>
        </motion.div>

        <motion.p
          className="mb-10 text-center text-base leading-relaxed text-muted-foreground sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Você já investiu tempo, dinheiro e energia tentando aprender inglês. Mas nenhum método te treinou para o que realmente importa: abrir a boca e se comunicar com confiança. Esse é exatamente o ponto onde eu entro.
        </motion.p>

        <div className="flex flex-col gap-4 sm:gap-5">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 rounded-xl border-l-4 border-red bg-card px-5 py-4 sm:px-6 sm:py-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="text-xl sm:text-2xl">{point.emoji}</span>
              <p className="text-[0.95rem] leading-relaxed text-foreground sm:text-base">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CHANGE 4 - Bridge CTA */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-4 text-center sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-base font-semibold text-foreground">
            É exatamente isso que o NativeTalk resolve.
          </p>
          <button
            onClick={scrollToHowItWorks}
            className="inline-flex items-center gap-2 rounded-xl border border-foreground/20 bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-red hover:text-red cursor-pointer"
          >
            Ver como funciona →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPointsSection;
