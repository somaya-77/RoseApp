import { MetaData } from ".";

export type Occasion = {
    _id: string;
    name: string;
    slug: string;
    image: string;
    productsCount: number;
};

export type OccasionResponse = {
    metadata: MetaData;
    occasions: Occasion[];
};

export interface IOccasionsSection {
    image: string;
    badge?: string;
    description?: string;
    title: string;
};

export interface IOccasionCardProps {
    occasion: IOccasionsSection,
    height: number,
    children?: React.ReactNode
}