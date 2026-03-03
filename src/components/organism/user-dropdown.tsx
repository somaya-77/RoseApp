"use client";

import {
  Settings,
  UserRound,
  ScrollText,
  ChevronDown,
  MapPinHouse,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@/components";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import LogOutButton from "../molecules/logout-button";
import { InitialDataProps } from "@/lib/types/props.type";
import useGetProfileData from "@/hooks/website/use-get-user-data";

export default function UserDropDown() {
// export default function UserDropDown({ initialData }: InitialDataProps) {
  const t = useTranslations("header");
  const { profileData: session } = useGetProfileData();
  const userData = session;
  // const userData = session || initialData;

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="font-sarabun">
          <p className="text-xs text-zinc-500 m-0 p-0 font-normal">
            {t("hello")}
          </p>
          <span className="text-maroon-700 dark:text-softPink-200 font-medium text-base capitalize">
            {userData?.user.firstName}
          </span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <ChevronDown className="cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuLabel>
                <p className="capitalize text-maroon-700 dark:text-softPink-200 font-semibold text-sm">
                  {userData?.user.firstName} {userData?.user.lastName}
                </p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-zinc-100" />

              <Link href={"/profile"}>
                <DropdownMenuItem className="cursor-pointer">
                  <UserRound />
                  {t("my-profile")}
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem>
                <MapPinHouse />
                {t("addresses")}
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ScrollText /> {t("orders")}
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="bg-zinc-100" />
            <DropdownMenuItem>
              <Settings /> {t("dashboard")}
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-zinc-100" />

            {/* separated button for reusability */}
            <LogOutButton />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
