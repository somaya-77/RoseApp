
import HeroSection from "./(homepage)/_comp/HeroSection";
import BenefitsSection from "./(homepage)/_comp/BenefitsSection";
import OccasionsSection from "./(homepage)/_comp/OccasionsSection";
import { ModeToggle } from "@/components/molecules/ModeToggle";
import { Button } from "@/components";

export default function page() {
  return <div className="flex flex-col gap-10">
    <div className="">
      <ModeToggle />
      <Button disabled>button</Button>
      <Button >button</Button>
      <Button>button</Button>
      <Button>button</Button>


      <Button variant="destructive">button</Button>
      <Button variant="ghost">button</Button>
      <Button variant="outline">button</Button>
      <Button variant="secondary">button</Button>
      <Button variant="subtle">button</Button>
    </div>

    <HeroSection />
    <OccasionsSection />
    <BenefitsSection />
  </div>;
}
