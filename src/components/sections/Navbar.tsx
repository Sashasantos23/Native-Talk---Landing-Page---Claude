import { useState, useEffect } from "react";
import { motion } from "framer-motion";


const WHATSAPP_URL =
  "https://wa.me/5519987681112?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+aula+experimental+gratuita!";

const navLinks = [
  { label: "Como funciona", id: "como-funciona" },
  { label: "Preço", id: "preco" },
  { label: "FAQ", id: "faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 transition-all duration-300 sm:px-7 md:px-12 lg:px-16 ${
        scrolled
          ? "bg-navy/95 shadow-lg backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Logo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-1.5 border-none bg-transparent font-serif text-xl font-black tracking-tight text-white sm:gap-2 sm:text-[1.6rem] cursor-pointer"
      >
        Native{" "}
        <span className="inline-flex h-5 w-5 items-center justify-center overflow-hidden rounded-full border border-white/30 shadow-sm sm:h-6 sm:w-6">
          <svg viewBox="0 0 60 60" className="h-full w-full">
            <clipPath id="navCircle">
              <circle cx="30" cy="30" r="30" />
            </clipPath>
            <g clipPath="url(#navCircle)">
              <rect width="60" height="60" fill="#3C3B6E" />
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <rect
                  key={i}
                  y={i * 4.615}
                  width="60"
                  height="4.615"
                  fill={i % 2 === 0 ? "#B22234" : "#FFFFFF"}
                />
              ))}
              <rect width="24" height="32" fill="#3C3B6E" />
            </g>
          </svg>
        </span>
        <span className="text-gold">Talk</span>
      </button>

      {/* Nav links — hidden on mobile */}
      <div className="hidden items-center gap-6 md:flex">
        {navLinks.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="nav-underline border-none bg-transparent text-[0.82rem] font-medium text-white/70 transition-colors hover:text-gold cursor-pointer"
          >
            {label}
          </button>
        ))}
      </div>

    </motion.nav>
  );
};

export default Navbar;
