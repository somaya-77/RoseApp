"use client";

import { usePathname } from "@/i18n/navigation";

import {LanguageSwitcher} from "@/components";

import { cn } from "@/lib/utils";

export default function AuthLanguageSwitcher() {
  const pathname = usePathname();

  const getMarginTop = () => {
    switch (true) {
      case pathname.includes("/register"):
        return "";
      default:
        return "";
    }
  };

  return (
    <LanguageSwitcher className={cn("ms-auto block", getMarginTop())} />
  );
}
