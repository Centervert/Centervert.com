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
    "Centervert helps businesses plan, build, implement, and support the systems they rely on to operate. AI, software, infrastructure, and managed services from one Greenville, SC team.",
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
