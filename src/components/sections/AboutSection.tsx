import { Check } from "lucide-react";
import sashaPhoto from "@/assets/sasha-blue-shirt.jpg";
import { Reveal } from "@/components/Reveal";
import { VoiceWave } from "@/components/VoiceWave";

const checks = [
  "O inglês que americanos realmente falam, não o do livro didático",
  "Cada aula feita para o SEU objetivo: viagem, trabalho ou dia a dia",
  "Você fala desde a primeira aula, sem esperar estar pronto",
  "Online de qualquer lugar, ou presencial em Americana-SP",
  "Horários que encaixam na sua rotina, sem burocracia",
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-paper-2 px-5 py-20 sm:px-7 sm:py-24 md:px-10 md:py-28 lg:px-12">
      <div className="mx-auto max-w-5xl">
        {/* Pull quote */}
        <Reveal className="max-w-3xl">
          <p className="font-display text-[clamp(1.6rem,3.4vw,2.6rem)] font-bold leading-[1.16] tracking-tight text-foreground">
            &ldquo;Cresci nos Estados Unidos e sei exatamente o inglês que você
            precisa para se comunicar com confiança no mundo real.&rdquo;
          </p>
          <div className="mt-6 flex items-center gap-3">
            <VoiceWave className="h-6 w-7" />
            <span className="text-[0.9rem] font-semibold text-foreground">
              Sasha Wigginton
            </span>
            <span className="text-[0.9rem] text-muted-foreground">
              Native English Mentor
            </span>
          </div>
        </Reveal>

        {/* Photo + checklist */}
        <div className="mt-14 grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
          <Reveal className="overflow-hidden rounded-[1.5rem] border border-border">
            <img
              src={sashaPhoto}
              alt="Sasha Wigginton dando aula de conversação"
              className="aspect-[4/3] w-full object-cover object-top md:aspect-[4/5]"
            />
          </Reveal>

          <div>
            <Reveal as="h2" className="font-display text-[clamp(1.7rem,3vw,2.4rem)] font-extrabold leading-tight tracking-tight text-foreground">
              Mais do que gramática.
              <br />
              Experiência real.
            </Reveal>
            <ul className="mt-8 flex flex-col gap-4">
              {checks.map((item, i) => (
                <Reveal as="li" key={item} delay={i * 0.06} className="flex items-start gap-3.5">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-flame" strokeWidth={2.75} />
                  <span className="text-[1.02rem] leading-relaxed text-foreground/85">
                    {item}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
