"use server";

import { revalidateTag } from "next/cache";
import { AddReviewFields } from "../schemas/reviews.schema";
import { AddReview } from "../types/reviews.type";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export async function AddReviewAction(fields: {
    product: string;
    reset: AddReviewFields;
}) {
    const session = await getServerSession(authOptions);
    
    const token = session?.accessToken;

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