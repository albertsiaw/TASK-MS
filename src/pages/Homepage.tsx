import { useScrollReveal } from "./landing/components/useScrollReveal";
import Navbar from "./landing/components/Navbar";
import Hero from "./landing/components/Hero";
import About from "./landing/components/About";
import HowItWorks from "./landing/components/HowItWorks";
import TimerShowcase from "./landing/components/TimerShowcase";
import SplitSection from "./landing/components/SplitSection";
import Benefits from "./landing/components/Benefits";
import Pricing from "./landing/components/Pricing";
import Stats from "./landing/components/Stats";
import FAQ from "./landing/components/FAQ";
import CTA from "./landing/components/CTA";
import Footer from "./landing/components/Footer";


export default function TaskManagementLanding() {
  const rootRef = useScrollReveal(
    "header > div > div:first-child, .cdc-bento > div, section > div > span:first-child, " +
    ".cdc-split-card, .border-cdc-border, .cdc-plan, .rounded-3xl"
  );

  return (
    <div className="box-border m-0 p-0 font-inter text-ink bg-white antialiased overflow-x-hidden" ref={rootRef}>
      <Navbar />
      
        <div className="pt-[76px]">
          <Hero />       
          
          <div className="min-h-[100svh] flex flex-col justify-center">
            <About />
            <HowItWorks />
          </div>

          <div className="min-h-[100svh] flex flex-col justify-center">
            <TimerShowcase />
            <SplitSection />
          </div>

          <Benefits />
          <Pricing />
          
          <div className="min-h-[100svh] flex flex-col justify-center">
            <Stats />
            <FAQ />
            <CTA />
          </div>

          <Footer />
        </div>
      
    </div>
  );
}
