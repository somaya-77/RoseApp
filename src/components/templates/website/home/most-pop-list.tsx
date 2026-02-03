import { Link } from "@/i18n/navigation";
import BestSellingCard from "./best-selling-card";
import { getTranslations } from "next-intl/server";
import {EmptyProductState, Icon} from "@/components";
import { MostPopularListProps } from "@/lib/types/interface";
import { getBestSelling } from "@/lib/api/get-best-selling";


export default async function MostPopularList({
  searchParams,
}: MostPopularListProps) {
  const occasionId = searchParams?.occasion;

  const results = await getBestSelling({ occasion: occasionId, limit: 12 });

  //translations
  const t = await getTranslations("common");

  //Empty state
  if (results.data.length == 0) {
    return <EmptyProductState />;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-96">
        {results.data.map((result) => (
          <BestSellingCard data={result} key={result._id} />
        ))}
      </div>
      <Link
        className="text-maroon-700 font-medium w-full justify-end  relative inline-flex items-center gap-2 mt-14 hover:text-maroon-800 transition-colors"
        href={"/products"}>
        {t("view-more")}
        <Icon name="ArrowRight" className="w-5 h-5" />
      </Link>
    </>
  );
}
