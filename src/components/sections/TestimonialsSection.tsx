import { Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import rafaelPhoto from "@/assets/rafael-mendes.png";
import fernandaPhoto from "@/assets/fernanda-oliveira.jpeg";
import camilaPhoto from "@/assets/camila-rocha.jpeg";
import matheusPhoto from "@/assets/matheus-rafael.png";

const featured = {
  name: "Matheus Rafael",
  role: "Profissional, Europa",
  photo: matheusPhoto,
  text: "Nos conhecemos na escola de aviação em 2018. Foi a melhor professora de inglês de toda a minha vida. Decidi viajar para a Europa e desde então as portas de emprego sempre se abriram por conta da facilidade de comunicação adquirida nas aulas com a Sasha.",
};

const rest = [
  {
    name: "Rafael Mendes",
    role: "Engenheiro de Software, Campinas",
    photo: rafaelPhoto,
    text: "Passei numa entrevista técnica em inglês para uma empresa dos EUA depois de 3 meses. A Sasha simulava entrevistas reais comigo e me dava confiança. Nunca pensei que conseguiria. Consegui.",
  },
  {
    name: "Fernanda Oliveira",
    role: "Analista de Marketing, São Paulo",
    photo: fernandaPhoto,
    text: "Depois de 2 meses, fiz minha primeira reunião com cliente americano sem ler do papel. Ela ensina como os nativos realmente falam.",
  },
  {
    name: "Camila Rocha",
    role: "Estudante de Medicina, Americana-SP",
    photo: camilaPhoto,
    text: "Em 4 meses eu já assistia séries sem legenda e conversava com colegas no congresso. A aula voa. Vale cada centavo.",
  },
];

// Gold stars — premium trust signal, matches brand palette
const Stars = () => (
  <div className="flex gap-0.5" aria-label="5 de 5 estrelas">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
    ))}
  </div>
);

const Author = ({
  name,
  role,
  photo,
}: {
  name: string;
  role: string;
  photo: string;
}) => (
  <div className="flex items-center gap-3">
    <img
      src={photo}
      alt={name}
      className="h-11 w-11 rounded-full object-cover ring-2 ring-border"
    />
    <div>
      <p className="text-[0.92rem] font-semibold text-foreground">{name}</p>
      <p className="text-[0.8rem] text-muted-foreground">{role}</p>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="bg-background px-5 py-20 sm:px-7 sm:py-24 md:px-10 md:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.05] tracking-tight text-foreground">
            Alunos que destravaram o inglês de verdade.
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-muted-foreground">
            Resultados reais de alunos reais. A sua vez pode ser a próxima.
          </p>
        </Reveal>

        {/* Featured — navy band on right mirrors brand dark surface */}
        <Reveal className="mt-12 grid overflow-hidden rounded-3xl border border-border shadow-lift md:grid-cols-[1.4fr_1fr]">
          <div className="bg-card p-8 sm:p-10">
            <Stars />
            <p className="mt-5 font-display text-[clamp(1.3rem,2.4vw,1.9rem)] font-semibold leading-snug tracking-tight text-foreground">
              &ldquo;{featured.text}&rdquo;
            </p>
            <div className="mt-7">
              <Author {...featured} />
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src={featured.photo}
              alt={featured.name}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </Reveal>

        {/* Three supporting cards */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.08}
              className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-7 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-gold/50"
            >
              <Stars />
              <p className="flex-1 text-[1rem] leading-relaxed text-foreground/85">
                &ldquo;{t.text}&rdquo;
              </p>
              <Author {...t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
