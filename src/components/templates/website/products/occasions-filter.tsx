"use client";

import { useTranslations } from "next-intl";
import { OccasionsCard, HeaderFilter } from "..";
import { Occasion, OccasionResponse } from "@/lib/types/occasion.type";
import { SKELETON_ITEMS_COUNT } from "@/lib/constants";
import InfiniteScroll from "react-infinite-scroll-component";
import { useOccasions } from "@/hooks/website/use-occasions.hook";
import OccasionsCardSkeleton from "../../skeletons/occasions-card.skeleton";

export default function OccasionsFilter() {
  //translations
  const t = useTranslations("products");

  //hooks
  const { occasions, activeOccasions, isLoading, error, hasNextPage, allOccasions, fetchNextPage } = useOccasions();

  // Initial loading state
  if (isLoading) {
    return (
      <div className="w-full">
        <div className="grid grid-cols-2 gap-2 mb-4">
          {Array.from({ length: SKELETON_ITEMS_COUNT }).map((_, index) => (
            <OccasionsCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  //Error state
  if (error) return <div>{t("occasions-error")}</div>;
console.log("allOccasions",allOccasions)
  return (
    <div>
      <HeaderFilter filter="occasion" />

      <InfiniteScroll
        height={296}
        dataLength={allOccasions.length}
        next={fetchNextPage}
        hasMore={hasNextPage ?? false}
        className="scrollbar-hide"
        loader={
          <div className="grid grid-cols-2 gap-2 mt-4">
            {Array.from({ length: SKELETON_ITEMS_COUNT }).map((_, index) => (
              <OccasionsCardSkeleton key={`loader-${index}`} />
            ))}
          </div>
        }
        endMessage={
          <p className="text-center py-2 text-sm text-gray-500">
            {t("end-of-occasions")}
          </p>
        }>
        <div className="grid grid-cols-2 gap-2  ">
          {allOccasions.map((occ: Occasion) => (
            <OccasionsCard
            key={occ._id}
              item={occ}
              isActive={activeOccasions.has(occ._id)}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}