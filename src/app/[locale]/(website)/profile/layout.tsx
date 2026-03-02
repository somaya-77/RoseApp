import { AccountSideBar } from "@/components/templates/website";
import React from "react";


export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Side Bar */}
      <AccountSideBar />

      {children}
    </>
  );
}
