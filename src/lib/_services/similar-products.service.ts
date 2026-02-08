import { getToken } from "../manage-token";
import { BestSellingResponse, ProductDetails } from "../types/product.type";


export async function getSimilarProductService(categoryId: string) {
    const token = await getToken();

    if (!token) {
        throw new Error("No token available")
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/products?category=${categoryId}`, {
        method: "GET",
        headers: {
            ...(token && {
                Authorization: `Bearer ${token}`,
            }),
        },
    });

    const data: ApiResponse<BestSellingResponse> = await response.json();

    if ("error" in data) {
        throw new Error(data.error);
    }

    return data;
}