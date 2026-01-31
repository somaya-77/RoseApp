// import {SidebarLinks, Logo,UserInfo} from '@/components';

import Logo from "./logo";
import SidebarLinks from "./sidebar-links";
import UserInfo from "./user-info";


export default function Sidebar () {
  return (
    <aside className='fixed left-0 top-0 h-screen w-80 flex flex-col justify-between gap-12 bg-blue-50 p-8 z-50 '>
      <div className='flex flex-col gap-12'>
        <Logo />
        {/* <SidebarLinks /> */}
      </div>

      <div>
        <UserInfo />
      </div>
    </aside>
  )
}
