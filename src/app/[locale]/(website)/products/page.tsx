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
      <div className="grid grid-cols-1 md:grid-col-3 lg:grid-cols-4 gap-8">
        {/* filters */}
        <div className="col-span-1">
          <FiltersProducts />
        </div>
        {/* products */}
        <div className="col-span-1 md:col-span-2 /lg:col-span-3">
          <ProductGrid
            initialPage={initialPage}
            initialData={initialData}
          />
        </div>
      </div>
    </>
  );
}