import { MetaData } from ".";

//  CATEGORIES
export type Category = {
    _id: string;
    name: string;
    productsCount: number;
    image: string;
};

export type Categories = {
    categories: Category[]
}

export type CategoriesResponse = {
    message: string;
    categories: Category[];
    metadata: MetaData;
};