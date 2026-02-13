import ProductDetails from "@/components/templates/website/products/product-details";
import ProductReviews from "@/components/templates/website/products/product-review";
import RelatedProducts from "@/components/templates/website/products/related-products";
import { SearchParams } from "@/lib/types";
import React from "react";
// import ProductDetails from "./_components/product-details";

export default async function Page({ params, searchParams }: { params: Promise<{ id: string }>,searchParams:  Promise<{ category: string }>}) {
  const {id} = await params
  const sParams = await searchParams; 
  const categoryId = sParams.category;
  return <>
    <ProductDetails id={id} />

    {/* Product's Reviews */}
    <ProductReviews productId={id}  />

    {/* Related Products */}
    <RelatedProducts categoryId={categoryId}/>
  </>
}