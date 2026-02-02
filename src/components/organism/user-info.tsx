'use client'

import { useSession } from "next-auth/react";
import { 
    // Avatar, AvatarFallback, AvatarImage,
    Icon } from "@/components";


export default function UserInfo() {
    const session = useSession()
    const user = session?.data?.user;
    return (
        <div className="flex items-center gap-2">
            {/* <Avatar className="border border-blue-500">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar> */}

            <div className="flex-1">
                <h3 className="">{user?.firstName}</h3>
                <p className=" text-sm">{user?.email}</p>
            </div>
            <div>
                <Icon className="" name="EllipsisVertical" />
            </div>
        </div>
    )
}

