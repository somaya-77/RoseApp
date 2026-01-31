"use client";

import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { Button } from "@/components";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher ({ className }: { className?: string }) {
  // Translation
  const locale = useLocale();

  // Navigation
  const router = useRouter();
  const pathname = usePathname();

  // Functions
  function switchLanguage() {
    router.push(
      {
        pathname,
        query: Object.fromEntries(
          new URLSearchParams(location.search).entries(),
        ),
      },
      {
        locale: locale == "ar" ? "en" : "ar",
      },
    );
  }

  return (
    <Button
      onClick={switchLanguage}
      variant={"ghost"}
      className={cn(
        "text-zinc-700 dark:text-zinc-50 rounded-none cursor-pointer shadow-none",
        //  locale == "ar" ? "ltr" : "rtl",
        className,
      )}>
      {locale == "ar" ? "English" : "العربية"}
    </Button>
  );
};

