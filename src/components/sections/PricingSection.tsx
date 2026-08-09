import { MessageCircle, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { waLink, WA_BOOK } from "@/lib/whatsapp";

const plans = [
  {
    type: "Online",
    price: "100",
    tag: "Mais popular",
    highlight: true,
    description: "Via Google Meet ou Zoom. Mesma qualidade da aula presencial, no conforto da sua casa.",
    features: [
      "Aula 100% em inglês com professora nativa",
      "Feedback personalizado a cada aula",
      "Horários flexíveis pelo WhatsApp",
      "Sem fidelidade obrigatória",
    ],
    cta: "Agendar aula online",
    href: waLink("Oi Sasha! Quero agendar minha aula online experimental gratuita."),
  },
  {
    type: "Presencial",
    price: "115",
    tag: "Americana, SP",
    highlight: false,
    description: "Para quem é da região e prefere o cara a cara. Mais espaço para prática e correção em tempo real.",
    features: [
      "Aula 100% em inglês com professora nativa",
      "Correção e feedback imediatos",
      "Horários flexíveis pelo WhatsApp",
      "Sem fidelidade obrigatória",
    ],
    cta: "Agendar aula presencial",
    href: waLink("Oi Sasha! Quero agendar minha aula presencial experimental gratuita em Americana."),
  },
];

const PricingSection = () => {
  return (
    <section id="preco" className="bg-paper-2 px-5 py-20 sm:px-7 sm:py-24 md:px-10 md:py-28 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.05] tracking-tight text-foreground">
            Transparente e justo.
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-muted-foreground">
            Menos do que um curso online que você nunca termina, com atenção real
            aula após aula. A primeira é por nossa conta.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {plans.map((plan, i) => (
            <Reveal
              key={plan.type}
              delay={i * 0.1}
              className={`flex flex-col rounded-3xl bg-card p-8 sm:p-9 ${
                plan.highlight
                  ? "border-2 border-gold shadow-lift"
                  : "border border-border shadow-soft"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-[1.25rem] font-bold text-foreground">
                  {plan.type}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-[0.74rem] font-semibold ${
                    plan.highlight
                      ? "bg-gold text-ink font-bold"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {plan.tag}
                </span>
              </div>

              <div className="mt-5 flex items-end gap-1.5">
                <span className="mb-1.5 font-display text-lg font-semibold text-muted-foreground">R$</span>
                <span className="font-display text-[3.6rem] font-extrabold leading-none tracking-tight text-foreground">
                  {plan.price}
                </span>
                <span className="mb-2 text-[0.9rem] text-muted-foreground">/ hora</span>
              </div>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-muted-foreground">
                {plan.description}
              </p>

              <ul className="mt-7 flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[0.96rem] text-foreground/85">
                    <Check className="mt-0.5 h-[1.1rem] w-[1.1rem] shrink-0 text-flame" strokeWidth={2.75} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-whatsapp px-6 py-3.5 text-[0.98rem] font-semibold text-white transition-transform duration-150 ease-out-quart hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <MessageCircle className="h-[1.15rem] w-[1.15rem]" strokeWidth={2.5} />
                {plan.cta}
              </a>
              <p className="mt-3 text-center text-[0.8rem] text-muted-foreground">
                Primeira aula gratuita. Sem cartão, sem contrato.
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-8 text-center text-[0.95rem] text-muted-foreground">
          Quer misturar os dois formatos? Sem problema,{" "}
          <a
            href={WA_BOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-flame-deep underline underline-offset-4 transition-colors hover:text-foreground"
          >
            a gente conversa pelo WhatsApp
          </a>
          .
        </Reveal>
      </div>
    </section>
  );
};

export default PricingSection;
