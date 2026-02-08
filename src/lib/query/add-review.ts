"use server";

import { revalidateTag } from "next/cache";
import { AddReviewFields } from "../schemas/reviews.schema";
import { getToken } from "../manage-token";
import { AddReview } from "../types/reviews.type";

export async function AddReviewAction(fields: {
    product: string;
    reset: AddReviewFields;
}) {
    const token = await getToken();

    if (!token) {
        throw new Error("No token available")
    }
    // Send POST request to add review endpoint
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/reviews`, {
        method: "POST",
        body: JSON.stringify({
            product: fields.product,
            comment: fields.reset.comment,
            title: fields.reset.title,
            rating: fields.reset.rating,
        }),
        headers: {
            // Authorization: `Bearer ${token.accessToken}`,
            "Content-Type": "application/json"
        },
    });

    const payload: ApiResponse<AddReview> = await response.json();

    // revalidateTag("reviews");

    return payload;
}