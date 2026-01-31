'use client'
import { useSession } from "next-auth/react"
import Link from "next/link";
import { Icon } from "@/components";


export default function InfoUser() {
    const session = useSession()
    const token = true;
    const user = session?.data?.user;
    const firstName = user?.email;
    console.log("session", session)
    return (
        <div>
            {token ?
                <div className="w-24 cursor-pointer flex justify-between items-center">
                    <div className="">
                        <p className="text-zinc-500 -mb-2.5">Hello</p>
                        <h3 className="text-softPink-200 flex gap-2">
                            {firstName}Somaya
                        </h3>
                    </div>
                    <Icon name="ChevronDown" className="text-zinc-500" />
                </div>
                :
                <Link href="/login" className="flex items-center gap-1 text-sm">
                    <Icon name="User" className="h-5 w-5" />
                    Login
                </Link>}
        </div>
    )
}