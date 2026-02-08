import { occasion } from './../constants/homepage';
import { Result } from "@/lib/types";
import { allOccasionsService } from "@/lib/_services/all-occasion.service";
import { Occasion } from "../types/occasion.type";


export async function getAllOccasions(): Promise<Result<Occasion>> {
  try {
    const data = await allOccasionsService();
    const occasionData = data.occasions;
    console.log("all occ", occasionData, data)
    return { success: true, data: occasionData };
  } catch (error) {
    console.error("Error fetching best selling products:", error);
    return {
      success: false,
      error: "Failed to fetch best selling items",
      data: [],
    };
  }
}
