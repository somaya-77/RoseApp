import ProductDetails from "@/components/templates/website/products/product-details";
import ProductReviews from "@/components/templates/website/products/product-review";
import RelatedProducts from "@/components/templates/website/products/related-products";
import { SearchParams } from "@/lib/types";

// import ProductDetails from "./_components/product-details";

export default async function Page({ params, searchParams }: { params: Promise<{ id: string }>,searchParams:  Promise<{ category: string }>}) {
  const {id} = await params
  const paramsCategory = await searchParams; 
  const categoryId = paramsCategory.category;
  return <>
    <ProductDetails id={id} />

    {/* Product's Reviews */}
    <ProductReviews productId={id}  />

    {/* Related Products */}
    <RelatedProducts categoryId={categoryId}/>
  </>
}