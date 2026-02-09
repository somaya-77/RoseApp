import CategoryItem from "./category-item";
import InfiniteScroll from "react-infinite-scroll-component";
import { FilterCategoryProps } from "@/lib/types/props.type";

export default function CategoryList({
  categories,
  selectedCategory,
  onSelect,
  fetchNextPage,
  hasNextPage,
  loadingLabel,
  endLabel,
}: FilterCategoryProps) {
  return (
    <InfiniteScroll
      height={199}
      dataLength={categories.length}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={<p className="text-xs text-center">{loadingLabel}</p>}
      endMessage={<p className="text-xs text-center">{endLabel}</p>}
      className="scrollbar-hide"
    >
      <div className="space-y-1">
        {categories.map((category) => (
          <CategoryItem
            key={category._id}
            category={category}
            isActive={selectedCategory === category.name}
            onClick={() => onSelect(category.name)}
          />
        ))}
      </div>
    </InfiniteScroll>
  );
}