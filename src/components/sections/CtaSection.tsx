import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { VoiceWave } from "@/components/VoiceWave";
import { WA_BOOK } from "@/lib/whatsapp";

const CtaSection = () => {
  return (
    <section className="relative overflow-hidden bg-ink px-5 py-24 text-paper sm:px-7 sm:py-28 md:px-10 md:py-32 lg:px-12">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(110% 90% at 50% 0%, oklch(0.645 0.19 38 / 0.2), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-paper/15 bg-paper/[0.04] py-1.5 pl-3 pr-4 text-[0.8rem] font-medium text-paper/80">
          <VoiceWave className="h-3 w-7" />
          Vagas abertas esta semana
        </Reveal>

        <Reveal as="h2" delay={0.05} className="font-display text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.04] tracking-tight text-paper">
          Pronto pra <span className="ink-underline">falar</span> inglês com uma
          nativa?
        </Reveal>

        <Reveal as="p" delay={0.12} className="mx-auto mt-6 max-w-xl text-[1.05rem] leading-relaxed text-paper/70">
          Dê o primeiro passo agora. Atendo poucos alunos por semana pra garantir
          atenção real a cada um. Sua primeira conversa pode mudar tudo.
        </Reveal>

        <Reveal delay={0.2} className="mt-10">
          <a
            href={WA_BOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-glow inline-flex items-center gap-2.5 rounded-full bg-whatsapp px-8 py-4 text-[1.05rem] font-semibold text-white transition-transform duration-150 ease-out-quart hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
            Agendar aula gratuita
          </a>
          <p className="mt-5 text-[0.85rem] text-paper/50">
            Primeira aula gratuita. Sem cartão, sem compromisso.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default CtaSection;
