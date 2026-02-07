import { getToken } from "../manage-token";
import { ProductDetails } from "../types";


export async function getSimilarProductService(categoryId: string) {
    const token = await getToken();

    if (!token) {
        throw new Error("No token available")
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/products?category=${categoryId}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token.accessToken}`,
            "Content-Type": "application/json"
        },
    });

    const data: ApiResponse<ProductDetails> = await response.json();

    if ("error" in data) {
        throw new Error(data.error);
    }

    return data;
}