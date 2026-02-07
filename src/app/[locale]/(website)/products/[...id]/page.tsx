import ProductDetails from "@/components/templates/website/products/product-details";
import ProductReviews from "@/components/templates/website/products/product-review";
import RelatedProducts from "@/components/templates/website/products/related-products";
import React from "react";
// import ProductDetails from "./_components/product-details";

export default function Page({ params }: { params: { id: string } }) {
  return <>
  <ProductDetails id={params.id} />;

   {/* // TODO: pass a real data */}
            {/* Product's Reviews */}
            <ProductReviews productId={params.id} rateAvg={3.5} rateCount={2} />

            {/* Related Products */}
            {/* //TODO: pass real categoryId */}
            <RelatedProducts categoryId={"673c46fd1159920171827c85"} />
  </>
}