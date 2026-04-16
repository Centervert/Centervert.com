import type { ScaleUpAgendaItem } from "@/lib/scale-up-events";

type Props = {
  items: ScaleUpAgendaItem[];
};

export function EventAgenda({ items }: Props) {
  return (
    <ol className="grid gap-5 md:grid-cols-2">
      {items.map((item) => (
        <li
          key={item.n}
          className="flex gap-5 rounded-2xl border border-cv-black/8 bg-white p-6 shadow-[var(--shadow-1)] md:p-8"
        >
          <span className="shrink-0 font-sans text-[1.75rem] font-bold leading-none text-evergreen md:text-[2rem]">
            {item.n}
          </span>
          <div>
            <h3 className="font-sans text-[1.15rem] font-semibold text-cv-black md:text-[1.25rem]">
              {item.title}
            </h3>
            <p className="mt-2 text-[14.5px] leading-relaxed text-cv-black/65">
              {item.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
