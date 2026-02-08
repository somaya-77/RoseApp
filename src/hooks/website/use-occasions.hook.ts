"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { DEFAULT_OCCASIONS_LIMIT } from "@/lib/constants";
import { allOccasionsService } from "@/lib/_services/all-occasion.service";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { MetaData } from "@/lib/types";

export function useOccasions(limit: number = DEFAULT_OCCASIONS_LIMIT) {
  const occasionParams = useSearchParams();

  const { data: occasions, isLoading, hasNextPage, fetchNextPage, error } =
    useInfiniteQuery({
      queryKey: ["occasions", limit], queryFn: ({ pageParam }) =>
        allOccasionsService({ page: pageParam ?? 1, limit },
        ),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        if (!lastPage?.metadata) return undefined;

        const { currentPage, totalPages } = lastPage.metadata;

        if (!currentPage || !totalPages) return undefined;

        return currentPage < totalPages ? currentPage + 1 : undefined;
      },

      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
    });

  const allOccasions = useMemo(
    () => occasions?.pages?.flatMap((page) => page) ?? [],
    [occasions],
  );

  const activeOccasions = useMemo(
    () => new Set(occasionParams.getAll("occasion")),
    [occasionParams],
  );
  const hasOccasionFilter = useMemo(() => {
    const param = occasionParams.get("occasion");
    return Boolean(param?.trim());
  }, [occasionParams]);

  return {
    error,
    isLoading,
    occasions,
    hasNextPage,
    allOccasions,
    fetchNextPage,
    activeOccasions,
  };
}