import { MapPin, Video, MessagesSquare, CalendarClock, Star } from "lucide-react";

const facts = [
  { icon: MapPin, text: "Americana, SP" },
  { icon: Video, text: "Aulas online" },
  { icon: MessagesSquare, text: "Foco em conversação" },
  { icon: CalendarClock, text: "Horários flexíveis" },
];

const TrustBar = () => {
  return (
    <div className="border-b border-border bg-paper-2">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-3 px-5 py-4 sm:flex-row sm:flex-wrap sm:justify-center sm:px-7 md:px-10 lg:px-12">
        {facts.map(({ icon: Icon, text }) => (
          <span
            key={text}
            className="inline-flex items-center gap-2 text-[0.82rem] font-medium text-foreground/75"
          >
            <Icon className="h-[1.05rem] w-[1.05rem] text-flame" strokeWidth={2} />
            {text}
          </span>
        ))}

        <span className="hidden h-4 w-px bg-border sm:inline-block" />

        <span className="inline-flex items-center gap-2 text-[0.82rem] font-medium text-foreground/75">
          <span className="flex" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-[0.95rem] w-[0.95rem] fill-gold text-gold" />
            ))}
          </span>
          +500 alunos atendidos
        </span>
      </div>
    </div>
  );
};

export default TrustBar;
