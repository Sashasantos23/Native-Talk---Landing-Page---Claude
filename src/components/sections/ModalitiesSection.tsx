import { Monitor, MapPin, Target } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const ModalitiesSection = () => {
  return (
    <section id="modalities" className="bg-background px-5 py-20 sm:px-7 sm:py-24 md:px-10 md:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.05] tracking-tight text-foreground">
            Do jeito que funciona pra você.
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-muted-foreground">
            Online ou presencial, a qualidade é a mesma. Você escolhe o formato
            que cabe na sua rotina.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {/* Online */}
          <Reveal className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft sm:p-8 md:col-span-3">
            <Monitor className="h-8 w-8 text-flame" strokeWidth={1.75} />
            <h3 className="mt-5 font-display text-[1.45rem] font-bold text-foreground">
              Aulas online
            </h3>
            <p className="mt-2.5 max-w-md text-[1rem] leading-relaxed text-muted-foreground">
              De qualquer lugar do mundo, via Google Meet ou Zoom, com a mesma
              dinâmica de uma aula presencial. Você economiza deslocamento e
              aprende no conforto de casa.
            </p>
            <span className="mt-6 inline-flex w-fit rounded-full bg-flame/10 px-3.5 py-1 text-[0.78rem] font-semibold text-flame-deep">
              Qualquer lugar do mundo
            </span>
          </Reveal>

          {/* Presencial */}
          <Reveal delay={0.1} className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft sm:p-8 md:col-span-2">
            <MapPin className="h-8 w-8 text-flame" strokeWidth={1.75} />
            <h3 className="mt-5 font-display text-[1.45rem] font-bold text-foreground">
              Presencial
            </h3>
            <p className="mt-2.5 text-[1rem] leading-relaxed text-muted-foreground">
              Para quem é da região e prefere o cara a cara. Mais espaço para
              prática e correção em tempo real.
            </p>
            <span className="mt-6 inline-flex w-fit rounded-full bg-flame/10 px-3.5 py-1 text-[0.78rem] font-semibold text-flame-deep">
              Americana, SP
            </span>
          </Reveal>

          {/* Objetivos (wide, dark tile) */}
          <Reveal delay={0.18} className="flex flex-col justify-between gap-6 rounded-2xl bg-ink p-7 text-paper sm:flex-row sm:items-center sm:p-9 md:col-span-5">
            <div className="max-w-xl">
              <Target className="h-8 w-8 text-flame" strokeWidth={1.75} />
              <h3 className="mt-5 font-display text-[1.6rem] font-bold text-paper">
                Inglês para o seu objetivo
              </h3>
              <p className="mt-2.5 text-[1rem] leading-relaxed text-paper/70">
                Viagem aos EUA, promoção no trabalho, entrevista em inglês. As
                aulas são desenhadas em torno do que você precisa alcançar, sem
                perder tempo com o que não importa.
              </p>
            </div>
            <span className="inline-flex w-fit shrink-0 rounded-full border border-paper/20 px-4 py-1.5 text-[0.8rem] font-semibold text-paper/85">
              100% personalizado
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ModalitiesSection;
