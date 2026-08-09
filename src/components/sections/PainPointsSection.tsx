import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const pains = [
  "Você entende tudo, mas na hora de responder a cabeça apaga.",
  "Em reuniões ou viagens, você deixa os outros falarem por você.",
  "Já tentou apps, cursos e escolas, mas nada virou fluência de verdade.",
  "Sente que o inglês está te limitando no trabalho. E isso incomoda.",
];

const PainPointsSection = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="bg-background px-5 py-20 sm:px-7 sm:py-24 md:px-10 md:py-28 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        {/* Left: the message */}
        <div className="md:sticky md:top-28 md:self-start">
          <Reveal as="h2" className="font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-extrabold leading-[1.08] tracking-tight text-foreground">
            Você estudou por anos e ainda trava na hora de falar.
          </Reveal>
          <Reveal as="p" delay={0.08} className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-muted-foreground">
            Não é falta de esforço, e não é o seu caso ser perdido. Nenhum método
            te treinou no que importa de verdade: abrir a boca e se comunicar com
            confiança. É exatamente aí que eu entro.
          </Reveal>
          <Reveal delay={0.16}>
            <button
              onClick={() => scrollTo("como-funciona")}
              className="group mt-7 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-flame-deep transition-colors hover:text-foreground"
            >
              Ver como a Native Talk resolve
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out-quart group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>

        {/* Right: the pains */}
        <ul className="divide-y divide-border">
          {pains.map((pain, i) => (
            <Reveal as="li" key={pain} delay={i * 0.07} className="flex items-baseline gap-5 py-6 first:pt-0">
              <span className="font-display text-[1.05rem] font-bold tabular-nums text-flame">
                0{i + 1}
              </span>
              <p className="text-[1.15rem] font-medium leading-snug text-foreground/90 sm:text-[1.3rem]">
                {pain}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PainPointsSection;
