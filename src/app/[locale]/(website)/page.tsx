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
      </div>

      {/* Best Selling Section */}
      {/* <BestSellingIndex /> */}

      {/* Most Popular Section */}
      {/* <MostPopularIndex searchParams={searchParams as { occasion?: string }} /> */}

      {/* Testimonials Section */}
      <Testimonials />

      {/* About Section */}
      <AboutSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Companies Section */}
      <Companies />
    </>
  );
}
