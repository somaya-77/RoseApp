import { Testimonials } from "../types/testimonials.type";


export async function getTestimonialsService() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/testimonials`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data: ApiResponse<PaginationData<Testimonials>> = await response.json();

    if ("error" in data) {
        throw new Error(data.error);
    }

    return data;
}
