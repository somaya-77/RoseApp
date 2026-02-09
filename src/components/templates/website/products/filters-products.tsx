import {
    OccasionsFilter,
    ResetAllFilters,
    CategoryFilter,
    RatingFilter,
    PriceFilter,
} from "..";


export default function FiltersProducts() {

    return (
        <div className="flex flex-col gap-6 border-r border-r-gray-100 pr-8">
            {/* CATEGORIES */}
            <CategoryFilter />
            <div className="border-b border-b-gray-100" />
            {/* OCCASIONS */}
            <OccasionsFilter />
            <div className="border-b border-b-gray-100" />
            {/* RATING */}
            <RatingFilter />
            <div className="border-b border-b-gray-100" />
            {/* PRICE */}
            <PriceFilter />
            <div className="border-b border-b-gray-100" />
            {/* RESET BUTTON */}
            <ResetAllFilters />
        </div>
    )
}