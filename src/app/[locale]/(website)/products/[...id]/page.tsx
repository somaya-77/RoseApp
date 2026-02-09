import ProductDetails from "@/components/templates/website/products/product-details";
import ProductReviews from "@/components/templates/website/products/product-review";
import RelatedProducts from "@/components/templates/website/products/related-products";
import React from "react";
// import ProductDetails from "./_components/product-details";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const {id} = await params
  return <>
    <ProductDetails id={id} />;

    {/* // TODO: pass a real data */}
    {/* Product's Reviews */}
    {/* <ProductReviews productId={id} rateAvg={3.5} rateCount={2} /> */}

    {/* Related Products */}
    {/* //TODO: pass real categoryId */}
    {/* <RelatedProducts categoryId={"673c46fd1159920171827c85"} /> */}
  </>
}