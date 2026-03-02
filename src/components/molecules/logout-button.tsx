"use client";

import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import { Icon,DropdownMenuItem } from "@/components";

export default function LogOutButton() {
  const t = useTranslations("common");

  const handleSignOut = async () => {
    sessionStorage.removeItem("token");
    await signOut({ callbackUrl: "/" });
  };

  return (
    <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
      <Icon name="LogOut" /> {t("logout")}
    </DropdownMenuItem>
  );
}