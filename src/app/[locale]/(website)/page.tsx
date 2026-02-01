import { AboutSection, BenefitsSection, BestSelling, Companies, GallerySection, HeroSection, OccasionsSection, Testimonials } from "@/components/templates/website";
import MostPopularIndex from "@/components/templates/website/home/most-popular";

interface HomeProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Home({ searchParams }: HomeProps) {
  return (
    <>
      <div className="flex flex-col gap-16">
        {/* Hero section */}
        <HeroSection />

        {/* Occasion section */}
        <OccasionsSection />

        {/* Benefits section */}
        <BenefitsSection />

        {/* Best Selling Section */}
        <BestSelling />

        {/* Most Popular Section */}
        <MostPopularIndex searchParams={searchParams as { occasion?: string }} />


        {/* About Section */}
        <AboutSection />

        {/* Gallery Section */}
        <GallerySection />
        
        {/* Testimonials Section */}
        <Testimonials />

        {/* Companies Section */}
        <Companies />
      </div>
    </>
  );
}
