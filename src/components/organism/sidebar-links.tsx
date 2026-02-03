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

  const getStrippedPath = (path: string) => {
    return path.replace(/^\/(en|ar)/, "") || "/";
  };

  return (
    <div>
      {dashboardLinks.map((item, i) => {
        const { href, icon, label } = item;
        const cleanPathname = getStrippedPath(pathname);
        const cleanHref = getStrippedPath(href);

        const isActive =
          cleanHref === "/"
            ? cleanPathname === "/"
            : cleanPathname === cleanHref || cleanPathname.startsWith(cleanHref + "/");
            
// const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
        // const isActive =
        //   href === "/"
        //     ? pathname === "/" || pathname.startsWith("/dashboard")
        //     : pathname === href || pathname.startsWith(href + "/");


        console.log("pathname", pathname, isActive, href)
        return (
          <Link
            href={href}
            key={i}
            className={cn(
              "flex gap-2 text-lg font-bold items-center p-3 h-14 transition-colors rounded-md mb-4",
             isActive
                ? "bg-maroon-50 text-maroon-600 dark:bg-zinc-800 dark:text-softPink-400" 
                : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
            )}
          >
            <Icon
              size="13"
              name={icon}
              
            />
            <span
            >
              {label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
