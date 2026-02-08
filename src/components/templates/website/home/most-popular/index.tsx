import MostPopularList from "../most-pop-list";
import MostPopularHeader from "../most-pop-header";
import { getAllOccasions } from "@/lib/api/get-all-occasions";
import { SearchParamsProps } from "@/lib/types/props.type";



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
