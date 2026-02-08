"use client";

import { cn } from "@/lib/utils";
import {MainTitle} from "@/components";
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import { Occasion } from "@/lib/types/occasion.type";


export default function MostPopularHeader({
  occasions,
}: {  occasions: Occasion[]}) {
  //Navigation
  const router = useRouter();
console.log("occasions",occasions)
  const searchParams = useSearchParams();

  //translations
  const t = useTranslations("most-popular");

  const activeOccasion = searchParams.get("occasion");

  //get products upon occasion click function
  const handleOccasionClick = (occasionId: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (activeOccasion === occasionId) {
      params.delete("occasion");
    } else {
      params.set("occasion", occasionId);
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center justify-between mb-10">
      <MainTitle title={t("title")} />
      <ul className="flex gap-6">
        {occasions?.map((occasion) => (
          <li key={occasion._id}>
            <button
              onClick={() => handleOccasionClick(occasion._id)}
              //toggle active occasion class
              className={cn(
                "transition-colors",
                activeOccasion === occasion._id
                  ? "text-maroon-600 font-semibold"
                  : "text-zinc-700 hover:text-maroon-500",
              )}>
              {occasion.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
