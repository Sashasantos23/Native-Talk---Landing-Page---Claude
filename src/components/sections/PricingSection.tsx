import { motion } from "framer-motion";
import { MessageCircle, Check } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5519987681112?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+aula+experimental+gratuita!";

const plan = {
  type: "Online / Presencial",
  flag: "🖥️ 📍",
  price: "100",
  tag: null,
  description:
    "Via Google Meet, Zoom — ou presencial em Americana, SP. A mesma qualidade e atenção de sempre, no formato que funciona melhor para você.",
  features: [
    "Aula 100% em inglês com professora nativa",
    "Google Meet, Zoom ou presencial",
    "Feedback personalizado a cada aula",
    "Horários flexíveis pelo WhatsApp",
    "Sem fidelidade obrigatória",
  ],
  cta: "Agendar aula gratuita",
};


const PricingSection = () => {
  return (
    <section id="preco" className="bg-card px-5 py-16 sm:px-7 sm:py-20 md:px-12 md:py-24 lg:px-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-red">
            Investimento
          </p>
          <h2 className="mb-4 font-serif text-[clamp(1.8rem,4vw,3rem)] font-black leading-tight text-foreground">
            Transparente e justo.
          </h2>
          <p className="mx-auto max-w-md text-base leading-relaxed text-muted-foreground">
            Escolha o formato que funciona melhor para você. Online ou presencial, a qualidade é a mesma.
          </p>
        </motion.div>

        {/* CHANGE 8 - Value framing line */}
        <motion.p
          className="mb-8 text-center text-[0.95rem] leading-relaxed text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Menos do que um curso online que você nunca termina — com atenção real, aula a aula.
        </motion.p>

        {/* Card */}
        <div className="flex justify-center">
          <motion.div
            className="flex w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-border shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Top banner */}
            <div className="bg-navy/95 px-6 py-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                  {plan.flag} {plan.type}
                </span>
                {plan.tag && (
                  <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy">
                    {plan.tag}
                  </span>
                )}
              </div>
              <div className="flex items-start gap-1">
                <span className="mt-2 text-xl font-semibold text-white">R$</span>
                <span className="font-serif text-6xl font-bold leading-none text-white">
                  {plan.price}
                </span>
              </div>
              <p className="mt-1 text-xs text-white/50">por hora · 60 minutos de aula</p>
              <p className="mt-3 text-sm leading-relaxed text-white/80">{plan.description}</p>
            </div>

            {/* Features */}
            <div className="flex flex-1 flex-col bg-cream px-6 py-5">
              <ul className="mb-6 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-[15px] text-muted-foreground">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red">
                      <Check size={8} className="text-white" strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Free trial CTA */}
              <div className="border-t border-gold/30 pt-5">
                <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.15em] text-red">
                  ✦ Primeira aula gratuita
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:brightness-110"
                >
                  <MessageCircle size={16} />
                  {plan.cta}
                </a>
                <p className="mt-2 text-center text-xs text-muted-foreground">
                  Sem cartão · Sem contrato · Cancele quando quiser
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom notes */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-xs leading-relaxed text-muted-foreground">
            💡 Não tem certeza qual formato escolher? Faça a aula experimental gratuita e decide depois.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground">
            Quer misturar os dois formatos? Sem problema —{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-red underline underline-offset-2 transition-colors duration-200 hover:text-foreground"
            >
              conversamos pelo WhatsApp.
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
