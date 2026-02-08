import { getProducts } from "@/lib/_services/all-products.service";
import { BestSellingResponse, ProductDetails } from "@/lib/types/product.type";
import { useQuery } from "@tanstack/react-query";

interface ProductsParams {
  page: number; // Current page number for pagination
  limit?: number; // Number of products per page (optional, default will be set)
  filters?: Record<string, any>; // Optional filters to apply (e.g., category, brand, price)
  initialData?: BestSellingResponse; // Optional initial data for SSR or prefetching
//   initialData?: ProductsResponse; // Optional initial data for SSR or prefetching
}
// Custom hook to fetch products using React Query
export function useProducts({
  page,
  limit = 12, // Default limit to 12 products per page
  filters = {}, // Default filters is an empty object
  initialData,
}: ProductsParams) {
  const productData = useQuery<BestSellingResponse>({
//   const productData = useQuery<ProductsResponse>({
    // Unique key for caching: depends on page number and filters
    queryKey: ["products", page, filters],
    queryFn: () => getProducts(page, limit, filters),
    initialData,
    // Data to show while loading new query (keeps old data visible)
    placeholderData: (previousData) => previousData,
  });
  return productData;
}