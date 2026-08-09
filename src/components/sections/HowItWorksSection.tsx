import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Mande uma mensagem", desc: "Entre em contato pelo WhatsApp e me conte seu nível de inglês e seus objetivos." },
  { num: "02", title: "Aula experimental", desc: "Conversamos para entender onde você está, o que trava, e por onde começar. Gratuita, sem compromisso." },
  { num: "03", title: "Aulas personalizadas", desc: "Você recebe um plano sob medida e começamos a evoluir de forma consistente e prazerosa." },
  { num: "04", title: "Você fala. Com confiança.", desc: "Semana após semana, sua confiança cresce e o inglês passa a fazer parte natural da sua vida — não como obrigação, mas como ferramenta." },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="relative overflow-hidden bg-navy px-5 py-16 sm:px-7 sm:py-20 md:px-12 md:py-24 lg:px-16">
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-gold sm:mb-4 sm:text-[0.78rem]">
            Como Funciona
          </p>
          <h2 className="mb-4 font-serif text-[clamp(1.8rem,4vw,3rem)] font-black leading-tight text-white sm:mb-5">
            Quatro passos para começar
          </h2>
          <p className="max-w-[560px] text-base font-light leading-relaxed text-white/60">
            Simples, rápido e sem burocracia. Em menos de 24h você pode ter sua primeira aula agendada.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-8 sm:mt-14 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="-mb-2.5 block font-serif text-[3.5rem] font-black leading-none text-gold/15 sm:text-[4.5rem]">
                {step.num}
              </span>
              <h4 className="mb-2 font-serif text-base font-bold text-white sm:mb-2.5 sm:text-lg">{step.title}</h4>
              <p className="text-base leading-relaxed text-white/55">{step.desc}</p>
            </motion.div>
          ))}
      </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
