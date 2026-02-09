"use client";

import useProductDetails from "@/hooks/website/use-product-details.hook";
import ProductDetailsSkeleton from "../../skeletons/product-details.skeleton";
import ProductDetailsContent from "./product-details-content";

export default function ProductDetails({ id }: { id: string }) {
  //Hook
  const { isLoading, product, error } = useProductDetails(id);
  // Loading skeleton
  if (isLoading) return <ProductDetailsSkeleton />;

  // Error state
  if (error)
    return (
      <p className="flex justify-center mx-auto text-red-600 p-10">
        Error loading product details.
      </p>
    );

  return (<ProductDetailsContent product={product} />);
}