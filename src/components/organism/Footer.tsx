import { footerLinks } from "@/lib/constants/homepage";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components";

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
          <h3 className="font-semibold text-lg text-softPink-300 mb-2">
            Discover our website
          </h3>
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
      <div className="w-1/3">
        <div className="mb-6">
          <h3 className="text-softPink-300 font-semibold text-xl">
            Get
            <span className="text-zinc-100">20%</span>
            Off Discount Coupon
          </h3>
          <p className="text-sm text-zinc-500">{t("message")}</p>
        </div>

        <form className="flex items-center bg-zinc-600 rounded-full overflow-hidden">
          {/*============== Email input============ */}
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-zinc-400 focus:outline-none"
          />

          {/*============== Submit button ============*/}
          <button
            type="submit"
            className="flex cursor-pointer items-center justify-center gap-2 bg-maroon-50 text-maroon-700 px-5 py-2.5 text-sm font-medium rounded-full transition-colors hover:bg-maroon-100 dark:bg-softPink-300 dark:text-zinc-900 dark:hover:bg-softPink-400"
          >
            Subscribe
            <Icon name="ArrowRight" className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  )
}

