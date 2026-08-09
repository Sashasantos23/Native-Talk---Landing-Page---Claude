import { Reveal } from "@/components/Reveal";

const pillars = [
  {
    n: "01",
    title: "Vocabulário",
    desc: "As palavras e expressões que nativos realmente usam, não as do livro didático. Seu repertório cresce de forma natural e em contexto.",
  },
  {
    n: "02",
    title: "Pronúncia",
    desc: "Correção de sotaque com quem nasceu falando inglês. Feedback direto e honesto para você soar natural e ser entendido na hora.",
  },
  {
    n: "03",
    title: "Confiança",
    desc: "Segurança para falar em qualquer situação: viagem, reunião, entrevista ou conversa do dia a dia. Você vai querer falar mais.",
  },
];

const PillarsSection = () => {
  return (
    <section className="bg-background px-5 py-20 sm:px-7 sm:py-24 md:px-10 md:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.05] tracking-tight text-foreground">
            O inglês que abre portas.
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-muted-foreground">
            Três coisas mudam de verdade quando você treina conversação com uma
            nativa, aula após aula.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.1}
              className="flex flex-col bg-background p-7 sm:p-8"
            >
              <span className="font-display text-[2.6rem] font-extrabold leading-none text-flame">
                {p.n}
              </span>
              <h3 className="mt-5 font-display text-[1.5rem] font-bold text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
