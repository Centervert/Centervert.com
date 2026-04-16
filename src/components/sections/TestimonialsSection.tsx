import { Section } from "@/components/ui/Section";
import { Eyebrow, Heading } from "@/components/ui/typography";
import {
  TestimonialCarousel,
  type Testimonial,
} from "@/components/marketing/TestimonialCarousel";

const testimonials: Testimonial[] = [
  {
    quote:
      "Centervert rebuilt three of our internal tools in the time our old vendor was still writing the proposal. And they answer the phone.",
    name: "Sarah C.",
    role: "VP Operations",
    company: "Greenville, SC",
    initials: "SC",
  },
  {
    quote:
      "We stopped juggling a dev shop, an IT provider, and an installer. One team, one invoice, one set of answers.",
    name: "Marcus T.",
    role: "Chief Operating Officer",
    company: "Upstate SC",
    initials: "MT",
  },
  {
    quote:
      "They planned the system before they sold us anything. The first IT company we have worked with that acted like a partner, not a salesperson.",
    name: "Rebecca J.",
    role: "Executive Director",
    company: "Greenville, SC",
    initials: "RJ",
  },
];

export function TestimonialsSection() {
  return (
    <Section tone="evergreen" padding="lg" ariaLabelledBy="testimonials-heading" className="isolate">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(at 10% 20%, rgba(192,255,0,0.18), transparent 55%), radial-gradient(at 90% 80%, rgba(36,84,255,0.25), transparent 55%)",
        }}
      />
      <div className="max-w-3xl">
        <Eyebrow className="text-white/50">In Their Words</Eyebrow>
        <Heading as="h2" size="display-lg" id="testimonials-heading" className="mt-5 text-white">
          After the handoff,{" "}
          <span className="text-white/40">they still picked up.</span>
        </Heading>
      </div>
      <div className="mt-14 md:mt-20">
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </Section>
  );
}
