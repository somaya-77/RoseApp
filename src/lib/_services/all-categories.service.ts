import { Categories } from "@/lib/types";

export async function getAllCategoriesService() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/categories`, {
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
