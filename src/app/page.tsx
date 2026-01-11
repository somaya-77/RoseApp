
import HeroSection from "./(homepage)/_features/HeroSection";
import BenefitsSection from "./(homepage)/_features/BenefitsSection";
import OccasionsSection from "./(homepage)/_features/OccasionsSection";

export default function page() {
  return <div className="flex flex-col gap-10">
    <HeroSection />
    <OccasionsSection />
    <BenefitsSection />
  </div>;
}
