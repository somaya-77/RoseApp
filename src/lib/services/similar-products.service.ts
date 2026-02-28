import { authOptions } from "@/auth";
import { BestSellingResponse } from "../types/product.type";
import { getServerSession } from "next-auth";


export async function getSimilarProductService(categoryId: string | null) {
const session = await getServerSession(authOptions);
    
    const token = session?.accessToken;
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