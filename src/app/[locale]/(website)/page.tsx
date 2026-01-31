import { AboutSection, BenefitsSection, Companies, GallerySection, HeroSection, OccasionsSection, Testimonials } from "@/components/templates/website";

interface HomeProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Home({ searchParams }: HomeProps) {
  return (
    <>
      <div className="flex flex-col gap-8">
        {/* Hero section */}
        <HeroSection />

        {/* Occasion section */}
        <OccasionsSection />

        {/* Benefits section */}
        <BenefitsSection />


        {/* Best Selling Section */}
        {/* <BestSellingIndex /> */}

        {/* Most Popular Section */}
        {/* <MostPopularIndex searchParams={searchParams as { occasion?: string }} /> */}


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
