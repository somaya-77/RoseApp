import ReviewSkeleton from "../website/products/review.skeleton";

export default function AllReviewsSkeleton() {
    return (
        <>
            {Array.from({ length: 1 }).map((_, index) => (
                <ReviewSkeleton key={index} />
            ))}
        </>
    )
}