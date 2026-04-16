import { CheckCircle2 } from "lucide-react";

type Props = {
  items: string[];
};

export function EventWalkaway({ items }: Props) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-2xl border border-evergreen/15 bg-evergreen/[0.04] p-5"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-evergreen" />
          <p className="text-[15px] leading-relaxed text-cv-black/80">{item}</p>
        </li>
      ))}
    </ul>
  );
}
