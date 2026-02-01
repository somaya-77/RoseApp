'use client'

import Link from "next/link";
import { useSession } from "next-auth/react"
import { Icon } from "@/components";


export default function InfoUser() {
    const session = useSession()
    const token = session?.data?.accessToken;
    const user = session?.data?.user;
    const firstName = user?.firstName;
    console.log("session", session)
    return (
        <div>
            {!token ?
                <Link href="/login" className="flex items-center gap-1 text-sm">
                    <Icon name="User" className="h-5 w-5" />
                    Login
                </Link>
                :
                <div className="w-24 cursor-pointer flex justify-between items-center">
                    <div className="">
                        <p className="text-zinc-500 -mb-2.5">Hello</p>
                        <h3 className="text-maroon-600 dark:text-softPink-200 flex gap-2">
                            {firstName}
                        </h3>
                    </div>
                    <Icon name="ChevronDown" className="text-zinc-500" />
                </div>
            }
        </div>
    )
}