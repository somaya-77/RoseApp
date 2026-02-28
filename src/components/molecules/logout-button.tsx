"use client";

import React from "react";
import { Icon,DropdownMenuItem } from "@/components";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";

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