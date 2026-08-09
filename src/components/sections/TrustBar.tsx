const items = [
  { icon: "📍", text: "Americana – SP" },
  { icon: "💻", text: "Aulas Online" },
  { icon: "🗣️", text: "Foco em Conversação" },
  { icon: "🕐", text: "Horários Flexíveis" },
];

const TrustBar = () => {
  return (
    <div className="flex flex-col items-center gap-3 bg-red px-5 py-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6 sm:px-7 sm:py-5 md:gap-8 md:px-12 lg:gap-12 lg:px-16">
      {items.map((item) => (
        <span
          key={item.text}
          className="flex items-center gap-2 whitespace-nowrap text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-white sm:text-[0.82rem]"
        >
          <span>{item.icon}</span>
          {item.text}
        </span>
      ))}
    </div>
  );
};

export default TrustBar;
