// REVIEWS
export type Reviews = {
    reviews: Review[],
}

export type Review = {
    _id: string,
    rating: number,
    title: string,
    comment: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    user: ReviewUser
    product: ReviewProduct
}

type ReviewUser = {
    _id: string;
    firstName: string;
    lastName: string;
    photo: string;
};

type ReviewProduct = {
    _id: string,
    title: string,
    imgCover: string,
    id: string,
}

export type AddReview = {
    review: Review,
    message: string,
}