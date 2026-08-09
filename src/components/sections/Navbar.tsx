import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { NativeTalkLogo } from "@/components/NativeTalkLogo";
import { WA_BOOK } from "@/lib/whatsapp";

const navLinks = [
  { label: "Como funciona", id: "como-funciona" },
  { label: "Modalidades", id: "modalities" },
  { label: "Preço", id: "preco" },
  { label: "FAQ", id: "faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-7 md:px-10 lg:px-12">
        {/* Logo — light variant on navy hero, brand variant once scrolled */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center focus-visible:outline-none"
          aria-label="Voltar ao topo"
        >
          <NativeTalkLogo
            className="h-8 sm:h-9"
            light={!scrolled}
          />
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`nav-underline text-[0.9rem] font-medium transition-colors ${
                scrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-paper/80 hover:text-paper"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <a
          href={WA_BOOK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-[0.85rem] font-semibold text-white shadow-soft transition-transform duration-150 hover:-translate-y-0.5 active:scale-[0.97] sm:px-5"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
          <span className="hidden sm:inline">Aula gratuita</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
