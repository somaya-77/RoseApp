"use client";

import Link from "next/link";
import { Icon } from "@/components";
import { usePathname } from "next/navigation";
// import { DataProps } from "@/lib/types/types";
// import { data } from "@/lib/constance/constance";
import { cn } from "@/lib/utils";
import { dashboardLinks } from "@/lib/constants/dashboard";

export default function SidebarLinks() {
  const pathname = usePathname();


  return (
    <div>
      {dashboardLinks.map((item, i) => {
        const { href, icon, label } = item;

        const isActive =
          href === "/"
            ? pathname === "/" || pathname.startsWith("/dashboard")
            : pathname === href || pathname.startsWith(href + "/");


        console.log("pathname", pathname, isActive, href)
        return (
          <Link
            href={href}
            key={i}
            className={cn(
              "flex gap-2 text-lg font-bold items-center p-3 h-14 transition-colors rounded-md mb-4",
              // isActive
              //   ?
              "text-maroon-600 bg-maroon-50"
              // : "text-zinc-800 dark:text-zinc-400"
            )}
          >
            <Icon
              size="13"
              name={icon}
              className={cn(
                // isActive
                //   ? 
                "text-maroon-600 bg-maroon-50"
                // : "text-zinc-800 dark:text-zinc-400"
              )}
            />
            <span
              className={cn(
                // isActive
                //   ? 
                "text-maroon-600 bg-maroon-50"
                // : "text-zinc-800 dark:text-zinc-400"
              )}
            >
              {label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
