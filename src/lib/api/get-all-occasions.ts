import { Occasion, Result } from "@/lib/types";
import { allOccasionsService } from "@/lib/_services/all-occasion.service";


export async function getAllOccasions(): Promise<Result<Occasion>> {
  try {
    const data = await allOccasionsService();
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
