import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { WA_BOOK } from "@/lib/whatsapp";

const steps = [
  { n: "01", title: "Mande uma mensagem", desc: "Pelo WhatsApp, me conte seu nível de inglês e o que você quer alcançar." },
  { n: "02", title: "Aula experimental", desc: "A gente conversa pra entender onde você está e por onde começar. Gratuita, sem compromisso." },
  { n: "03", title: "Plano sob medida", desc: "Você recebe um plano feito pra você e começamos a evoluir de forma consistente." },
  { n: "04", title: "Você fala, com confiança", desc: "Semana após semana, o inglês vira parte natural da sua vida. Não como obrigação, como ferramenta." },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="bg-ink px-5 py-20 text-paper sm:px-7 sm:py-24 md:px-10 md:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.05] tracking-tight text-paper">
            Quatro passos pra começar.
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-paper/65">
            Simples e sem burocracia. Em menos de 24h a sua primeira aula pode
            estar agendada.
          </p>
        </Reveal>

        {/* Connector line on lg+ */}
        <div className="relative mt-16 grid gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute inset-x-0 top-6 hidden h-px bg-gold/20 lg:block" />
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.1} className="relative">
              {/* Gold step circle on navy — mirrors the logo's gold/navy split */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold/60 bg-ink font-display text-[0.95rem] font-bold text-gold">
                {step.n}
              </div>
              <h3 className="mt-5 font-display text-[1.2rem] font-bold text-paper">
                {step.title}
              </h3>
              <p className="mt-2.5 text-[0.96rem] leading-relaxed text-paper/60">
                {step.desc}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14">
          <a
            href={WA_BOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-glow inline-flex items-center gap-2.5 rounded-full bg-whatsapp px-7 py-4 text-[1.02rem] font-semibold text-white transition-transform duration-150 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
            Agendar aula gratuita
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default HowItWorksSection;
