"use client";

import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/constants/homepage";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

export default function NavBar() {
  const pathname = usePathname();
  const locale = useLocale();     // en

const normalizedPath = pathname.replace(`/${locale}`, "") || "/";

  return (
      <nav className="flex justify-center bg-maroon-700 text-zinc-50 dark:bg-softPink-200 dark:text-zinc-800">
        <ul className="flex items-center text-sm">
          {navLinks.map((link) => {
            const isActive = normalizedPath === link.href;
            
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center justify-center gap-2 px-3 py-3 text-base font-medium font-primary relative",
                    isActive
                      ? "text-softPink-200 dark:text-maroon-800 after:absolute after:left-0 after:bottom-0 after:h-1 after:rounded-full after:w-full after:bg-softPink-300 dark:after:bg-maroon-800"
                      : "text-zinc-50 dark:text-zinc-800 hover:text-softPink-100 dark:hover:text-maroon-700",
                  )}>
                  {link.icon}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
  )
}

