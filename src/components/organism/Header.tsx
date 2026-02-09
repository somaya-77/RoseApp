import { DesktopHeader, PhoneHeader } from "..";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm dark:bg-zinc-800">
      
      {/* Phone Header*/}
      {/* <div className="block lg:hidden">
        <PhoneHeader />
      </div> */}

      {/* Desktop Header*/}
      {/* <div className="hidden lg:block"> */}
        <DesktopHeader />
      {/* </div> */}

    </header>
  );
}