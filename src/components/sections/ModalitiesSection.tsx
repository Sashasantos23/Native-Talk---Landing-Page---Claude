import { Monitor, Users, Target } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: Monitor,
    title: "Aulas Online",
    desc: "De qualquer lugar do mundo! Via Google Meet ou Zoom, com a mesma dinâmica e atenção de uma aula presencial. Economize deslocamento e aprenda no conforto da sua casa.",
    tag: "Qualquer Lugar do Mundo",
  },
  {
    icon: Users,
    title: "Presencial – Americana, SP",
    desc: "Para quem mora na região e prefere o contato cara a cara. Aulas imersivas, com mais espaço para prática e correção em tempo real no ambiente ideal para aprendizado.",
    tag: "Americana – SP",
  },
  {
    icon: Target,
    title: "Inglês para Objetivos",
    desc: "Viagem aos EUA? Promoção no trabalho? Entrevista de emprego em inglês? Aulas focadas no que você realmente precisa alcançar, sem perder tempo com o que não importa.",
    tag: "Personalizado",
  },
];

const ModalitiesSection = () => {
  return (
    <section id="modalities" className="bg-background px-5 py-16 sm:px-7 sm:py-20 md:px-12 md:py-24 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-10 text-center sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-red sm:mb-4 sm:text-[0.78rem]">
            Formato das Aulas
          </p>
          <h2 className="mb-4 font-serif text-[clamp(1.8rem,4vw,3rem)] font-black leading-tight text-foreground sm:mb-5">
            Do jeito que funciona para você
          </h2>
          <p className="mx-auto max-w-[560px] text-base font-light leading-relaxed text-muted-foreground">
            Escolha a modalidade que melhor se adapta à sua rotina. Online ou presencial, a qualidade é a mesma.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(13,27,62,0.1)] sm:p-8 md:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="absolute left-0 top-0 h-full w-1 rounded-l bg-red" />
              <card.icon className="mb-4 h-8 w-8 text-red sm:mb-5 sm:h-10 sm:w-10" />
              <h3 className="mb-2 font-serif text-lg font-bold text-foreground sm:mb-3 sm:text-xl">{card.title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground">{card.desc}</p>
              <span className="mt-4 inline-block rounded-full bg-red/[0.08] px-3.5 py-1 text-[0.7rem] font-semibold tracking-wide text-red sm:mt-5 sm:text-[0.75rem]">
                {card.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModalitiesSection;
