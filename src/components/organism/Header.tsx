
import Link from "next/link";
import Image from "next/image";
import { Notifications } from "../templates/website";
import { Icon, InfoUser, Location, NavBar, Searchbar } from "@/components";
import LanguageSwitcher from "../molecules/language-switcher";

export default function Header() {

  return (
    <header className="w-full bg-white shadow-sm dark:bg-zinc-800">
      {/* ==================== Top Header Section ==================== */}
      <div className="flex items-center justify-between px-9 py-4 gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/brands/logo.png"
            alt="Logo"
            width={85}
            height={80}
          />
        </Link>
{/* <ModeToggle /> */}
        {/* location */}
        <Location />
        {/* Search Bar */}
        <Searchbar />

        {/* User Actions */}
        <div className="flex items-center gap-2 text-gray-700 dark:text-zinc-50">
          <InfoUser />

          <div className="flex items-center gap-4 px-4 border-x border-zinc-200">
            <Icon name="Heart" className="h-5 w-5" />
            <Icon name="ShoppingCart" className="h-5 w-5" />
            <Notifications notificationCount={5} />
          </div>

          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>
      </div>

      <NavBar />
    </header>
  );
}
