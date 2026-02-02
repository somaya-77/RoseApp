

import React, { Suspense } from "react";
import MostPopularHeader from "../most-pop-header";
import MostPopularList from "../most-pop-list";
import ProductCardSkeleton from "../product-card.skeleton";
import { SearchParamsProps } from "@/lib/types";
import { getAllOccasions } from "@/lib/api/website/get-all-occasions";



export default async function MostPopularIndex({
  searchParams,
}: SearchParamsProps) {
  const allOccasions = await getAllOccasions();
  console.log("allOccasions", allOccasions?.data)


  return (
    <div className="my-36">
      <MostPopularHeader occasions={allOccasions?.data} />
      {/* <Suspense fallback={<ProductCardSkeleton count={12} />}> */}
        <MostPopularList searchParams={searchParams} />
      {/* </Suspense> */}
    </div>
  );
}
