"use client";

import ProductCardSkeleton from "../../skeletons/product-card.skeleton";
import BestSellingCard from "../home/best-selling-card";
import { AppPagination } from "@/components/organism/pagination";
import { Props, useProductCardHook } from "@/hooks/website/use-product-card.hook";

export default function ProductGrid({ initialPage, initialData }: Props) {
  const { error, isLoading, products, totalPages, page, handlePageChange, isFetching } = useProductCardHook({ initialPage, initialData })

  if (error)
    return (
      <p className="text-center text-red-500">
        Failed to load products
      </p>
    );

  return (
    <div className="space-y-10">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 min-h-96">
        {isLoading
          ? Array.from({ length: 12 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))
          : products.map((product) => (
            <BestSellingCard
              key={product._id}
              data={product}
            // onWishlistToggle={() => toggleWishlist(product._id)}
            />
          ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center">
          <AppPagination
            page={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}

      {isFetching && !isLoading && (
        <div className="grid grid-cols-3 gap-6 opacity-60">
          {Array.from({ length: 4 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      )}
    </div>
  );
}