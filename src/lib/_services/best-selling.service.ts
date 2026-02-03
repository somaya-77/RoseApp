import { BestSellingProduct, BestSellingResponse, GetBestSellingParams } from "@/lib/types";

export async function bestSellingService(
  params?: GetBestSellingParams
): Promise<BestSellingProduct[]> {
  const url = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/products`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, String(value));
      }
    });
  }

  const response = await fetch(url.toString(), {});

  const data: BestSellingResponse = await response.json();
  return data.products;
}
