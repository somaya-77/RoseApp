import { bestSellingService } from "@/lib/_services/best-selling.service";
import {  BestSellingProduct, GetBestSellingParams, Result } from "@/lib/types";



export async function getBestSelling(params?: GetBestSellingParams,): Promise<Result<BestSellingProduct>> {
  try {
    const data = await bestSellingService(params);
    return { success: true, data };
  } catch (error) {
    console.error("Error fetching best selling products:", error);
    return {
      success: false,
      error: "Failed to fetch best selling items",
      data: [],
    };
  }
}
