import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { WA_BOOK } from "@/lib/whatsapp";

const faqs = [
  { q: "Preciso ter algum nível de inglês?", a: "Não. Atendo desde iniciantes absolutos até alunos avançados que querem aperfeiçoar a fluência e o sotaque." },
  { q: "Como funciona o agendamento?", a: "Tudo pelo WhatsApp. Você escolhe o dia e horário que preferir e eu confirmo a disponibilidade rapidamente." },
  { q: "As aulas online são ao vivo?", a: "Sim, ao vivo e em tempo real. Não são vídeos gravados. É uma conversa de verdade, comigo." },
  { q: "Posso cancelar ou remarcar?", a: "Sim. Com aviso de no mínimo 24 horas você remarca sem custo adicional." },
  { q: "Que plataforma é usada online?", a: "Google Meet ou Zoom, como você preferir. Basta ter celular ou computador com câmera." },
  { q: "Quanto tempo leva para ver resultado?", a: "A maioria sente diferença na confiança já nas primeiras semanas. A fluência vem com prática consistente, e é isso que construímos juntos, aula após aula." },
];

const FaqSection = () => {
  return (
    <section id="faq" className="bg-background px-5 py-20 sm:px-7 sm:py-24 md:px-10 md:py-28 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.05] tracking-tight text-foreground">
            Antes de começar.
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item) => (
              <AccordionItem key={item.q} value={item.q} className="border-border">
                <AccordionTrigger className="gap-4 py-5 text-left font-display text-[1.08rem] font-bold text-foreground hover:no-underline [&[data-state=open]>svg]:text-flame">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[1rem] leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal delay={0.12} className="mt-10 text-center text-[0.96rem] text-muted-foreground">
          Ainda com dúvida?{" "}
          <a
            href={WA_BOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-flame-deep underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Me manda uma mensagem no WhatsApp
          </a>
          .
        </Reveal>
      </div>
    </section>
  );
};

export default FaqSection;
