import RelatedProductsCarousel from "./related-products-carousel";
import RelatedProductsContent from "./related-products-content";
import { useTranslations } from "next-intl";
import { Suspense } from "react";
import MainTitle from "@/components/atoms/main-title";
import { SingleCardSkeleton } from "../../skeletons/product-card.skeleton";


export default function RelatedProducts({categoryId}:{categoryId: string|null}) {
    // Translation
    const t = useTranslations("related-products");

    return (
        <div className="mb-108.25">
            {/* Title */}
            <MainTitle title={t("title")} />

            {/* Carousel */}
            <RelatedProductsCarousel>
                <Suspense
                    fallback={
                        <div className="flex gap-4">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <SingleCardSkeleton key={index} />
                            ))}
                        </div>
                    } >
                    <RelatedProductsContent categoryId={categoryId}/>
                </Suspense>
            </RelatedProductsCarousel>
        </div>
    )
}
