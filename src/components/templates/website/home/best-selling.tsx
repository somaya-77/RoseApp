import { Suspense } from "react";
import BestSellingStaticText from "./best-selling-static-text";
import BestSellingCarousel from "./best-selling-carousel";
import BestSellingCarouselSkeleton from "./best-selling-carousel.skeleton";

export default function BestSelling() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
      <div className="lg:shrink-0">
        <BestSellingStaticText />
      </div>
      <div className="flex-1 w-full min-w-0">
        <Suspense fallback={<BestSellingCarouselSkeleton />}>
          <BestSellingCarousel />
        </Suspense>
      </div>
    </div>
  );
}
