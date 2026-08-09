import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, ArrowDown } from "lucide-react";
import sashaPhoto from "@/assets/sasha-photo.png";
import { VoiceWave } from "@/components/VoiceWave";
import { WA_BOOK } from "@/lib/whatsapp";

const EASE = [0.16, 1, 0.3, 1] as const;

const HeroSection = () => {
  const reduce = useReducedMotion();
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setDrawn(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease: EASE },
  });

  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-ink text-paper">
      {/* Subtle red warmth from top-right — brand-accurate, not "AI purple" */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(100% 70% at 90% 0%, oklch(0.56 0.205 22 / 0.14), transparent 55%)",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 px-5 pb-16 pt-28 sm:px-7 md:grid-cols-[1.05fr_0.95fr] md:gap-8 md:px-10 md:pt-24 lg:px-12">
        {/* ── Text ── */}
        <div className="flex flex-col items-start">
          <motion.div
            {...rise(0.05)}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-paper/15 bg-paper/[0.04] py-1.5 pl-3 pr-4 text-[0.78rem] font-medium text-paper/80"
          >
            {/* Gold wave on navy */}
            <VoiceWave className="h-3 w-7" colorClass="bg-gold" />
            Conversação real, do jeito nativo
          </motion.div>

          <h1 className="font-display text-[clamp(2.4rem,6.4vw,4.6rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
            <motion.span className="block" {...rise(0.12)}>
              Você entende inglês.
            </motion.span>
            <motion.span className="block" {...rise(0.22)}>
              Só falta{" "}
              <span className={`ink-underline ink-underline--draw ${drawn ? "is-drawn" : ""}`}>
                falar
              </span>
              .
            </motion.span>
          </h1>

          <motion.p
            {...rise(0.34)}
            className="mt-6 max-w-[34rem] text-[1.02rem] leading-relaxed text-paper/70"
          >
            Aulas de conversação 1 a 1 com Sasha, americana nativa dos EUA. Você
            fala desde o primeiro dia, sem sotaque artificial e sem método
            engessado.
          </motion.p>

          <motion.div
            {...rise(0.44)}
            className="mt-9 flex w-full flex-col gap-3 lg:w-auto lg:flex-row lg:items-center"
          >
            <a
              href={WA_BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-glow inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-whatsapp px-7 py-4 text-[1.02rem] font-semibold text-white transition-transform duration-150 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
              Agendar aula gratuita
            </a>
            <a
              href="#como-funciona"
              className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-paper/20 px-6 py-4 text-[1.02rem] font-medium text-paper/90 transition-colors duration-200 hover:border-paper/40 hover:bg-paper/[0.04]"
            >
              Como funciona
              <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          <motion.p {...rise(0.54)} className="mt-5 text-[0.85rem] text-paper/45">
            Primeira aula gratuita. Sem cartão, sem compromisso.
          </motion.p>
        </div>

        {/* ── Photo ── */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          className="relative mx-auto w-full max-w-[24rem] md:mx-0 md:ml-auto"
        >
          <div className="relative overflow-hidden rounded-[1.75rem] border border-paper/10">
            <img
              src={sashaPhoto}
              alt="Sasha Wigginton, professora americana nativa da Native Talk"
              className="aspect-[4/5] w-full object-cover object-[50%_18%]"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/80 to-transparent" />
          </div>

          {/* Live name card — gold wave + gold border accent */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
            className="absolute -bottom-5 left-4 right-8 flex items-center gap-3 rounded-2xl border border-gold/30 bg-ink-soft/85 px-4 py-3 backdrop-blur-md sm:left-6"
          >
            <VoiceWave className="h-7 w-8 shrink-0" colorClass="bg-gold" />
            <div className="min-w-0">
              <p className="font-display text-[0.98rem] font-bold leading-tight text-paper">
                Sasha Wigginton
              </p>
              <p className="truncate text-[0.74rem] text-paper/55">
                Nativa dos EUA · Americana-SP &amp; online
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
