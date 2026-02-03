import { Occasion, OccasionResponse } from "@/lib/types";

export async function allOccasionsService(): Promise<Occasion[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/occasions?limit=4`);

  const data: OccasionResponse = await response.json();
  return data.occasions;
}
