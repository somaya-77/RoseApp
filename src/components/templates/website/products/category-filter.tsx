
"use client";

import { HeaderFilter } from "..";
import CategoryList from "./category-list";
import { useTranslations } from "next-intl";
import { useCategories } from "@/hooks/website/use-category.hook";
import CategorySkeleton from "../../skeletons/category-filter.skeleton";

export default function CategoryFilter() {
  // HOOKS
  const { updateCategory, allCategories, isLoading, selectedCategory, error, fetchNextPage, hasNextPage } = useCategories(10);

  // CONSTANTS
  const t = useTranslations("products");

  if (isLoading) return <CategorySkeleton />;
  if (error) return <p className="text-sm text-red-600">{t("error")}</p>;

  return (
    <div>
      {/* header to do */}
      <HeaderFilter filter="category" />
      {/* categories list */}
      <CategoryList
        categories={allCategories}
        selectedCategory={selectedCategory}
        onSelect={updateCategory}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage ?? false}
        loadingLabel={t("loading")}
        endLabel={t("end-of-list")}
      />
    </div>
  );
}
