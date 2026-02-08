import { SearchParams } from "@/lib/types";
import { getProducts } from "@/lib/_services/all-products.service";
import { FiltersProducts, ProductGrid } from "@/components/templates/website";

export default async function ProductsPage({ searchParams }: SearchParams) {
 // CONSTANT
  const params = await searchParams;
  const initialPage = Number(params?.page ?? 1);
  const filters: Record<string, any> = {};

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      // If value is an array, take the first element
      if (key !== "page") {
        filters[key] = Array.isArray(value) ? value[0] : value;
      }
    });
  }

  // Fetch initial data from the server for SSR
  let initialData: any | null = null;
  // let initialData: ProductsResponse | null = null; 
  try {
    initialData = await getProducts(initialPage, 12, filters);
    // Fetch 12 products for the current page with filters
  } catch (err) {
    console.error("Failed to fetch products:", err);
    // Log error, but allow page to render without crashing
  }

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-start gap-8">
        {/* filters */}
        <div className="">
          <FiltersProducts />
        </div>
        {/* products */}
        <div className="flex-1">
          <ProductGrid
            initialPage={initialPage}
            initialData={initialData}
          />
        </div>
      </div>
    </>
  );
}