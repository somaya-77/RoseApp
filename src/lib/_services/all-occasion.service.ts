import { Occasion, OccasionResponse } from "../types/occasion.type";
import { LimitProps } from "../types/props.type";



export async function allOccasionsService(  params: LimitProps = {},): Promise<OccasionResponse> {
    const { page = 1, limit = 10 } = params;
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/occasions?page=${page}&limit=${limit}`);

  const data: OccasionResponse = await response.json();
  return data;
}
