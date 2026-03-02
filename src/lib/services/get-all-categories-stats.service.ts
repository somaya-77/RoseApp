
import getToken from "@/lib/utils/manage-token";
import { CategoriesStatisticsResponse } from "../types/dashboard.type";

export async function getCategoriesStatsService(): Promise<CategoriesStatisticsResponse> {
  const token = await getToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/statistics/categories`,
    {
      headers: {
        Authorization: `Bearer ${token?.accessToken}`,
      },
    },
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to fetch categories statistics");
  }
  const data: CategoriesStatisticsResponse = await response.json();

  return data;
}