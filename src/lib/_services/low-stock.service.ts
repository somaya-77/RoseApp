
import { authOptions } from "@/auth";
import { Categories } from "@/lib/types";
import { getServerSession } from "next-auth/next";


export async function getLowStockService() {
const session = await getServerSession(authOptions);    
const token = session?.accessToken;
console.log("authsss",  token)
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/inventory/reports/low-stock`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${session?.accessToken}`
        },
    });

    const data: ApiResponse<PaginationData<Categories>> = await response.json();

    if ("error" in data) {
        console.log("Server rejected you because:", data);
        // throw new Error(data.error);
    }

    return data;
}
