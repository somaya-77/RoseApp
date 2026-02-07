import { Categories, LimitProps } from "@/lib/types";

export async function getAllCategoriesService( params: LimitProps = {},) {
    const { page = 1, limit = 10 } = params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/categories?limit=${limit}&page=${page}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data: ApiResponse<PaginationData<Categories>> = await response.json();

    if ("error" in data) {
        throw new Error(data.error);
    }

    return data;
}
