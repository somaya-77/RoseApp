"use client";

import Link from "next/link";
import { Icon } from "@/components";
import { usePathname } from "next/navigation";
// import { DataProps } from "@/lib/types/types";
// import { data } from "@/lib/constance/constance";
import { cn } from "@/lib/utils";

export default function SidebarLinks() {
  const pathname = usePathname();

  return
  return (
    <div>
      {data.map((item: DataProps) => {
        const { id, title, icon, path } = item;

        const isActive =
          path === "/"
            ? pathname === "/" || pathname.startsWith("/exams")
            : pathname === path || pathname.startsWith(path + "/");


        console.log("pathname", pathname, isActive, path)
        return (
          <Link
            href={path}
            key={id}
            className={cn(
              "flex gap-2 items-center p-3 h-14 transition-colors",
              isActive
                ? "text-primary bg-blue-100 border border-blue-500"
                : "text-gray-500 hover:bg-gray-100"
            )}
          >
            <Icon
              name={icon}
              className={cn(
                "mb-2",
                isActive ? "text-blue-500" : "text-gray-500"
              )}
            />
            <span
              className={cn(
                isActive ? "text-blue-500" : "text-gray-500"
              )}
            >
              {title}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
