import type { Metadata } from "next";
import {
  Nav,
  Footer,
  Hero,
  LogoMarquee,
  LifecycleSection,
  CapabilitiesGrid,
  ProofSection,
  RealWorldDifferentiator,
  AITrainingCallout,
  TestimonialsSection,
  FAQSection,
  FinalCTA,
} from "@/components/sections";

export const metadata: Metadata = {
  title: {
    absolute:
      "Centervert | The systems your business runs on. One partner.",
  },
  description:
    "Software, infrastructure, automation, and managed support from one Greenville, SC team. Planning through rollout, with people who answer after go-live.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-smoke">
      <Nav overDark />
      <main>
        <Hero />
        <LogoMarquee />
        <LifecycleSection />
        <CapabilitiesGrid />
        <ProofSection />
        <RealWorldDifferentiator />
        <AITrainingCallout />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
