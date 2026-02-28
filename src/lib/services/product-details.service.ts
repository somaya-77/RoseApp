import { ProductDetails } from "../types/product.type";


export async function getProductDetails(id: string): Promise<ProductDetails> {
  // Fetch product details by ID
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const payload: ApiResponse<{ product: ProductDetails }> =
    await response.json();

  if ("error" in payload) {
    throw new Error(payload.error);
  }
  return payload.product;
}