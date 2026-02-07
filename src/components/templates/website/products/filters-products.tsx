import {
    OccasionsFilter,
    ResetAllFilters,
    CategoryFilter,
    RatingFilter,
    PriceFilter,
} from "..";


export default function FiltersProducts() {

    return (
        <div className="flex flex-col gap-4">
            {/* CATEGORIES */}
            <CategoryFilter />
            {/* OCCASIONS */}
            <OccasionsFilter />
            {/* RATING */}
            <RatingFilter />
            {/* PRICE */}
            <PriceFilter />
            {/* RESET BUTTON */}
            <ResetAllFilters />
        </div>
    )
}