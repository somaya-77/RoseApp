import {Icon, SubTitle, Button} from "@/components";
import { aboutFeatures } from "@/lib/constants/homepage";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  // Translation
  const t = useTranslations("about");

  return (
    <section className="flex gap-20 mb-16 justify-center items-center">
      {/* Images */}
      <div className="flex gap-2">
        {/* Main Image with Decorative Border */}
        <div
          className="relative max-h-90.75 before:absolute before:-top-4 before:-start-4 before:-z-10 before:w-full before:rounded-tl-[3.125rem] before:rounded-tr-[7.5rem] before:rounded-b-[7.5rem]
           before:h-full before:border-4 before:border-maroon-600 before:rotate-3 dark:before:border-softPink-400"
        >
          <Image
            className="rounded-tl-[3.125rem] rounded-tr-[7.5rem] rounded-br-[7.5rem] rounded-bl-[7.5rem] w-full h-full object-cover"
            src="/assets/images/image8.png"
            alt="about"
            width={302}
            height={344}
          />
        </div>

        {/* Side Images */}
        <div className="flex flex-col gap-2 py-4">
          <Image
            className="rounded-full object-cover w-[12.063rem] h-[12.063rem]"
            src="/assets/images/image14.png"
            alt="about"
            width={193}
            height={193}
          />
          <Image
            className="rounded-tl-[3.125rem] rounded-tr-[6.25rem] rounded-br-[6.25rem] rounded-bl-[3.125rem] object-cover w-[12.063rem] h-36"
            src="/assets/images/image3.png"
            alt="about"
            width={193}
            height={144}
          />
        </div>
      </div>

      {/* Text */}
      <div className="py-5 max-w-2xl">
        <SubTitle title={t("title")} />

        <h2 className="font-bold text-3xl pb-2 pt-6 text-maroon-700 dark:text-softPink-200">
          {t.rich("header", {
            span: (chunk: any) => (
              <span className="text-softPink-500 dark:text-maroon-400">
                {chunk}
              </span>
            ),
          })}
        </h2>

        <p className="text-zinc-500 dark:text-zinc-400">{t("description")}</p>

        <Link href="/products">
          <Button className="my-6 bg-maroon-600 hover:bg-maroon-700 dark:bg-softPink-200 dark:text-zinc-800">
            {t("button")}
            <Icon name="ArrowRight" size={16} />
          </Button>
        </Link>

        <ul className="grid grid-cols-2 gap-6">
          {aboutFeatures.map((feature) => (
            <li
              key={feature.id}
              className="flex items-center gap-2 text-sm dark:text-zinc-50"
            >
              <Icon name="Check"
                className="text-maroon-700 dark:text-softPink-400"
                // size={20}
              />
              {t(feature.textKey)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
