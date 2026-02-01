"use client";

import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "@/components";
import useCalculateMargins from "@/hooks/auth/use-calculate-margins";

export default function AuthLanguageSwitcher() {
  const { getMarginTop } = useCalculateMargins();

  return (
    <LanguageSwitcher className={cn("ms-auto block", getMarginTop())} />
  );
}
