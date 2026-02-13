import { MetaData } from ".";

// PRODUCTS
export type ProductDetails = {
    _id: string;
    title: string;
    slug: string;
    description: string;
    imgCover: string;
    images: string[];
    price: number;
    priceAfterDiscount: number;
    quantity: number;
    sold: number;
    rateAvg: number;
    rateCount: number;
    isInWishlist: boolean;
    category: string;
};


// BEST SELLING PRODUCT
export type BestSellingProduct = {
    _id: string;
    title: string;
    slug: string;
    description: string;
    imgCover: string;
    images: string[];
    price: number;
    priceAfterDiscount: number;
    quantity: number;
    category: string;
    occasion: string;

    sold: number;
    rateAvg: number;
    rateCount: number;
};
export type BestSellingResponse = {
    products: BestSellingProduct[];
    metadata?: MetaData | undefined;
};

export type GetBestSellingParams = {
    filter?: string;
    occasion?: string;

    limit?: number;
}