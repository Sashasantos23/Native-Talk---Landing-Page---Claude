import { motion } from "framer-motion";

const faqs = [
  { q: "Preciso ter algum nível de inglês?", a: "Não! Atendo desde iniciantes absolutos até alunos avançados que querem aperfeiçoar a fluência e o sotaque." },
  { q: "Como funciona o agendamento?", a: "Tudo pelo WhatsApp. Você escolhe o dia e horário que preferir, e eu confirmo a disponibilidade rapidamente." },
  { q: "As aulas online são ao vivo?", a: "Sim, são aulas ao vivo, em tempo real. Não são vídeos gravados — é uma conversa verdadeira comigo." },
  { q: "Posso cancelar ou remarcar?", a: "Sim, com aviso prévio de no mínimo 24 horas é possível remarcar sem custo adicional." },
  { q: "Que plataforma é usada online?", a: "Google Meet ou Zoom, de acordo com a sua preferência. Basta ter celular ou computador com câmera." },
  { q: "Quanto tempo leva para ver resultado?", a: "A maioria dos alunos sente diferença na confiança já nas primeiras semanas. A fluência vem com prática consistente — e é exatamente isso que construímos juntos, aula a aula." },
];

const WHATSAPP_URL = "https://wa.me/5519987681112";

const FaqSection = () => {
  return (
    <section id="faq" className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-red">
            Dúvidas Frequentes
          </span>
          <h2 className="font-serif text-4xl font-bold leading-tight text-navy md:text-5xl">
            Antes de começar
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqs.map((item, i) => (
            <motion.div
              key={item.q}
              className="rounded-xl border-l-4 border-red bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <p className="mb-2 text-sm font-semibold leading-snug text-navy">
                {item.q}
              </p>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CHANGE 9 - WhatsApp nudge */}
        <motion.p
          className="mt-8 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Ainda com dúvida?{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-red underline underline-offset-2 transition-colors hover:text-foreground"
          >
            Me manda uma mensagem no WhatsApp →
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default FaqSection;
