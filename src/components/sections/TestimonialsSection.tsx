import { motion } from "framer-motion";
import ElegantDivider from "./ElegantDivider";
import { Star, Quote } from "lucide-react";
import rafaelPhoto from "@/assets/rafael-mendes.png";
import fernandaPhoto from "@/assets/fernanda-oliveira.jpeg";
import camilaPhoto from "@/assets/camila-rocha.jpeg";
import matheusPhoto from "@/assets/matheus-rafael.png";

const testimonials: { name: string; role: string; initials?: string; photo?: string; stars: number; text: string }[] = [
  {
    name: "Fernanda Oliveira",
    role: "Analista de Marketing · São Paulo",
    photo: fernandaPhoto,
    stars: 5,
    text: "Eu tinha um inglês de escola — sabia a gramática mas travava na hora de falar. Depois de 2 meses com a Sasha, fiz minha primeira reunião com cliente americano sem ler do papel. A diferença é que ela te ensina como os nativos realmente falam, não aquele inglês de livro.",
  },
  {
    name: "Rafael Mendes",
    role: "Engenheiro de Software · Campinas",
    photo: rafaelPhoto,
    stars: 5,
    text: "Passei em uma entrevista técnica em inglês para uma empresa dos EUA depois de 3 meses de aulas. A Sasha simulava entrevistas reais comigo, corrigia meu sotaque e me dava confiança. Nunca pensei que conseguiria — mas consegui.",
  },
  {
    name: "Camila Rocha",
    role: "Estudante de Medicina · Americana, SP",
    photo: camilaPhoto,
    stars: 5,
    text: "Fiz aulas presenciais na Americana e foi transformador. A Sasha é paciente, direta, e a aula voa. Em 4 meses eu já estava assistindo séries sem legenda e me comunicando com colegas estrangeiros no congresso. Vale cada centavo.",
  },
  {
    name: "Matheus Rafael",
    role: "Profissional · Europa",
    photo: matheusPhoto,
    stars: 5,
    text: "Nos conhecemos na escola de aviação em 2018, experimentei as aulas e foi a melhor professora de Inglês de toda minha vida! Depois no final de 2018 decidi viajar para Europa e desde então as portas de emprego sempre se abriram por conta da flexibilidade e facilidade da comunicação adquirida através das aulas com a Sasha!!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-navy px-5 py-16 sm:px-7 sm:py-20 md:px-12 md:py-24 lg:px-16">
      <ElegantDivider />
      <div className="mx-auto max-w-[1100px]">
        {/* Header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-gold sm:text-[0.75rem]">
            Depoimentos
          </p>
          <h2 className="font-serif text-[clamp(1.75rem,4vw,2.625rem)] font-bold leading-[1.15] text-cream">
            Alunos que destravaram
            <br />
            <em className="text-gold">o inglês de verdade.</em>
          </h2>
        </motion.div>

        {/* CHANGE 7 - 2x2 grid */}
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="relative flex flex-col gap-4 rounded-2xl bg-white/5 p-7 border-[1.5px] border-transparent transition-all duration-300 hover:border-gold hover:shadow-[0_0_28px_rgba(201,168,76,0.28),0_10px_36px_rgba(12,26,82,0.08)] hover:-translate-y-1 cursor-default"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Quote icon */}
              <div className="absolute right-6 top-5 opacity-[0.12]">
                <Quote size={36} className="text-gold" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} size={14} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="flex-1 text-base leading-[1.7] text-cream/85">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                {t.photo ? (
                  <img src={t.photo} alt={t.name} className="h-10 w-10 shrink-0 rounded-full object-cover border border-gold/40" />
                ) : (
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/20 text-xs font-semibold text-gold">
                    {t.initials}
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold text-cream">{t.name}</p>
                  <p className="text-xs text-cream/50">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom nudge */}
        <p className="mt-10 text-center text-sm text-cream/45">
          Resultados reais de alunos reais. Sua vez pode ser a próxima.
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
