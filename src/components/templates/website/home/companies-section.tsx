import { companiesFeatures } from "@/lib/constants/homepage";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function CompaniesSection() {
  // Translation
  const t = useTranslations("companies");

  return (
    <section className="bg-maroon-50 rounded-2xl py-10 text-center mb-72 dark:bg-zinc-700">
      {/* Section Title */}
      <h2 className="text-4xl text-maroon-700 font-bold dark:text-softPink-200">
        {t.rich("header", {
          span: (chunk) => (
            <span className="text-softPink-500 dark:text-maroon-400">
              {chunk}
            </span>
          ),
        })}
      </h2>

      {/* Company Logos */}
      <div className="flex justify-around items-center mt-10">
        {companiesFeatures.map((company) => (
          <Image
            key={company.id}
            src={company.logo}
            alt={company.name}
            width={146}
            height={51}
          />
        ))}
      </div>
    </section>
  );
}
