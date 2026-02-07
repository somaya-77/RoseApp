"use client";

import { useMemo } from "react";
import { Category } from "@/lib/types/category.type";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { getAllCategoriesService } from "@/lib/_services/all-categories.service";


export function useCategories(limit: number = 6) {

  const router = useRouter();
  const searchParams = useSearchParams();

  const { data: categories, isLoading, error, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryFn: ({ pageParam }) =>
      getAllCategoriesService({
        page: pageParam,
        limit,
      }),
    initialPageParam: 1,
    queryKey: ["categories", limit],
    // 
    getNextPageParam: (lastPage) => {
      const { currentPage, totalPages } = lastPage.metadata;
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
    staleTime: 1000 * 60 * 5,
  });

  const selectedCategory = searchParams.get("category");

  const allCategories: Category[] = useMemo(
    () => categories?.pages.flatMap((p) => p.categories) ?? [],
    [categories],
  );
  // console.log("allCategories",categories)
  const updateCategory = (name?: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (name) params.set("category", name);
    else params.delete("category");

    router.replace(`?${params.toString()}`, { scroll: false });
  };


  return {
    error,
    isLoading,
    categories,
    hasNextPage,
    fetchNextPage,
    allCategories,
    updateCategory,
    selectedCategory,
  };
}