// The single marquee on the page. Real things natives say day to day,
// which is exactly what students learn. Motion = storytelling, not decoration.
// Freezes under prefers-reduced-motion (handled in index.css).

const phrases = [
  "No worries",
  "Let's catch up",
  "I'm on it",
  "Sounds good to me",
  "Hang on a sec",
  "I got you",
  "Long time no see",
  "It is what it is",
  "My bad",
  "Take it easy",
  "What's up?",
  "Catch you later",
];

const Item = ({ text }: { text: string }) => (
  <span className="flex items-center gap-7 whitespace-nowrap">
    <span className="font-display text-2xl font-semibold text-paper sm:text-3xl">
      {text}
    </span>
    <span className="text-2xl font-light text-gold/60 sm:text-3xl" aria-hidden="true">
      /
    </span>
  </span>
);

const SpokenMarquee = () => {
  return (
    <section className="overflow-hidden bg-ink py-12 sm:py-14">
      <div className="marquee-mask flex select-none">
        <div className="marquee-track flex shrink-0 items-center gap-7 pr-7">
          {phrases.map((p) => (
            <Item key={p} text={p} />
          ))}
        </div>
        <div className="marquee-track flex shrink-0 items-center gap-7 pr-7" aria-hidden="true">
          {phrases.map((p) => (
            <Item key={`${p}-2`} text={p} />
          ))}
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-xl px-6 text-center text-[0.95rem] text-paper/55">
        Expressões que americanos usam todo dia. É esse inglês que você aprende,
        não o do livro didático.
      </p>
    </section>
  );
};

export default SpokenMarquee;
