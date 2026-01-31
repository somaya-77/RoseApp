import { footerLinks } from "@/lib/constants/homepage";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {

  const t = useTranslations("footer");
  return (
    <div className="flex items-start justify-between bg-zinc-900 dark:zinc-900 py-10 px-20">
      <div className="flex items-start gap-6">
        {/* logo */}
        <div>

          <Link href="/" className="">
            <Image
              src="/assets/brands/logo.png"
              alt="Logo"
              width={240}
              height={225}
            />
          </Link>
          <div className="text-center mt-4">
            <h4 className="text-softPink-300 text-lg font-semibold">Rose E-Commerce App</h4>
            <p className="text-zinc-100">All rights reserved | 2026</p>
          </div>
        </div>
        {/* links */}
        <ul>
          {footerLinks.map((link, index) => {

            return (
              <li key={index} className="text-zinc-100 hover:text-softPink-300 active:text-softPink-300 flex flex-col">
                <Link href={link.href}>{t(link.label)}</Link>
              </li>
            )
          })}
        </ul>
      </div>


      {/* discount */}
      <div>
        <h3 className="text-softPink-300 font-semibold text-xl">
          Get
          <span className="text-zinc-100">20%</span>
          Off Discount Coupon
        </h3>
        <p className="text-sm text-zinc-500">{t("message")}</p>
      </div>
    </div>
  )
}

