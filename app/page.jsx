import FAQSection from "./components/Faqs";
import Features from "./components/Feature";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import PricingSection from "./components/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <PricingSection />
      <HowItWorks />
      <FAQSection />
    </>
  );
}
