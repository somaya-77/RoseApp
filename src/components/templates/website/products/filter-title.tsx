"use client";

import { Button } from "@/components";
// import { toReadableQueryString } from "@/lib/utils/query-string";
import { useRouter } from "@/i18n/navigation";
import { toReadableQueryString } from "@/lib/utils";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { HeaderFilter } from "..";

type FilterTypeProps = {
  title: string;
  resetFn?: () => void;
  isFilterSelected: boolean;
  paramsToReset?: string[];
};

export default function FilterTitle({
  title,
  resetFn,
  paramsToReset = [],
  isFilterSelected,
}: FilterTypeProps) {
  //translations
  const t = useTranslations("common");

  //hooks
  const searchParams = useSearchParams();
  //navigation
  const router = useRouter();

  const handleReset = () => {
    resetFn?.();
    const params = new URLSearchParams(searchParams.toString());

    // Delete all specified parameters
    paramsToReset.forEach((param) => params.delete(param));

    router.push(`?${toReadableQueryString(params.toString())}`, {
      scroll: false,
    });
  };
  return (
    <div className="flex justify-between items-center">
      {/* Filter Title */}
      
      {/* Reset Button */}
      {/* {isFilterSelected && (
        <Button
          onClick={handleReset}
          variant={"ghost"}
          className="text-red-600 hover:bg-transparent p-0 font-normal mt-2">
          <X width={15} height={15} />
          {t("reset")}
        </Button>
      )} */}
    </div>
  );
}