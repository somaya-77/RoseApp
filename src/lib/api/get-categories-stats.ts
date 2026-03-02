import { getCategoriesStatsService } from "../services/get-all-categories-stats.service";
import { CategoriesStatisticsResponse } from "../types/dashboard.type";


export default async function getCategoriesStatistics() {
  try {
    const data = await getCategoriesStatsService();
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error || "failed to fetch categories statistics ",
      data: { message: "", statistics: [] } as CategoriesStatisticsResponse,
    };
  }
}