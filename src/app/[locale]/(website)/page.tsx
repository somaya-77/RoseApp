import { Suspense } from "react";
import { SearchParams } from "@/lib/types";
import MostPopularIndex from "@/components/templates/website/home/most-popular";
import ProductCardSkeleton from "@/components/templates/website/home/product-card.skeleton";
import { AboutSection, BenefitsSection, BestSelling, Companies, GallerySection, HeroSection, OccasionsSection, Testimonials } from "@/components/templates/website";

export default function Home({ searchParams }: SearchParams) {
  return (
    <div className="flex flex-col gap-12">
      <div className=" flex flex-col gap-8">
        {/* Hero section */}
        <HeroSection />

        {/* Occasion section */}
        <OccasionsSection />

        {/* Benefits section */}
        <BenefitsSection />

      </div>
        {/* Best Selling Section */}
        <BestSelling />
      {/* Most Popular Section */}
      <Suspense fallback={<ProductCardSkeleton count={12} />}>
        <MostPopularIndex searchParams={searchParams as { occasion?: string }} />
      </Suspense>

      {/* About Section */}
      <AboutSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Companies Section */}
      <Companies />

    </div>
  );
}
