import { Status } from ".";
import { Category } from "./category.type";
import * as RPNInput from "react-phone-number-input";
import { Occasion } from "./occasion.type";

export type FilterCategoryProps = {
    categories: Category[];
    selectedCategory: string | null;
    onSelect: (name: string) => void;
    fetchNextPage: () => void;
    hasNextPage: boolean;
    loadingLabel: string;
    endLabel: string;
};

export type CountrySelectProps = {
    disabled?: boolean;
    value: RPNInput.Country;
    options: { label: string; value: RPNInput.Country | undefined }[];
    onChange: (country: RPNInput.Country) => void;
    status?: Status;
};

export interface SearchParamsProps {
    searchParams?: { occasion?: string };
}

export interface ParamsProps {
    params?: { locale: string };
}

export type LimitProps = {
    page?: number;
    limit?: number;
}

export type OccasionCardProps = {
    item: Occasion
    isActive: boolean;
};
export type PriceFilterForm = {
  priceFrom?: number;
  priceTo?: number;
};