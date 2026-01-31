'use client'

import React, { Suspense } from "react";
import MostPopularHeader from "../most-pop-header";
import MostPopularList from "../most-pop-list";
import ProductCardSkeleton from "../product-card.skeleton";
import { useAllOccasions } from "@/lib/query/website-query/home";


interface MostPopularIndexProps {
  searchParams?: { occasion?: string };
}

export default function MostPopularIndex({
  searchParams,
}: MostPopularIndexProps) {
  const allOccasions = useAllOccasions();
console.log("allOccasions", allOccasions?.data)


  return (
    <div className="my-36">
      <MostPopularHeader occasions={allOccasions?.data?.occasions} />
      {/* <Suspense fallback={<ProductCardSkeleton count={12} />}>
        <MostPopularList searchParams={searchParams} />
      </Suspense> */}
    </div>
  );
}
