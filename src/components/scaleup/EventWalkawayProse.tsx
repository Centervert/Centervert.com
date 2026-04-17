import { InlineBoldText } from "./InlineBoldText";

type Props = {
  paragraphs: string[];
};

/**
 * Marketing walkaway: bordered block with prose paragraphs (not checklists).
 */
export function EventWalkawayProse({ paragraphs }: Props) {
  return (
    <div className="mx-auto max-w-3xl border-l-[3px] border-evergreen bg-evergreen/[0.04] px-6 py-7 md:px-9 md:py-8">
      {paragraphs.map((p, i) => (
        <p
          key={i}
          className="text-[17px] leading-[1.75] text-cv-black/75 last:mb-0 [&+&]:mt-4"
        >
          <InlineBoldText text={p} />
        </p>
      ))}
    </div>
  );
}
