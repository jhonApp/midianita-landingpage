import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
// import { SocialProof } from "@/components/SocialProof";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { PricingSection } from "@/components/PricingSection";
// import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      {/* <SocialProof /> */}
      <FeaturesSection />
      <ComparisonSection />
      {/* <TestimonialsSection /> */}
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
