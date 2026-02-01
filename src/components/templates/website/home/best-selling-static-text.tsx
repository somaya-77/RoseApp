import {Button, Icon} from "@/components";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import React from "react";

export default function BestSellingStaticText() {
  //translations
  const t = useTranslations("best-seller");

  return (
    <section className="max-w-72">
      <h4 className="uppercase text-softPink-500 font-medium mb-3 tracking-extra-wide">
        {t("title")}
      </h4>

      <h2 className="font-bold text-3xl text-maroon-700 capitalize">
        {t.rich("heading", {
          span: (chunks: React.ReactNode) => (
            <span className="text-softPink-500">{chunks}</span>
          ),
        })}
      </h2>

      <p className="mt-2 text-zinc-500">{t("paragraph")}</p>

    <Link href="/products">
          <Button className="my-6 bg-maroon-600 hover:bg-maroon-700 dark:bg-softPink-200 dark:text-zinc-800">
            {t("explore-gifts")}
            <Icon name="ArrowRight" size={16} />
          </Button>
        </Link>
    </section>
  );
}
