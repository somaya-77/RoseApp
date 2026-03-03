'use client'

import Link from "next/link";
import { useSession } from "next-auth/react";
import { User } from "lucide-react";

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
    Icon,
    UserDropDown,
} from "@/components"
import { useTranslations } from "next-intl";
import LoginPopover from "../molecules/login-popover";
import { InitialDataProps } from "@/lib/types/props.type";

export default function InfoUser() {
// export default function InfoUser({ initialData }: InitialDataProps) {

    const t = useTranslations("auth")


    return (
        <HoverCard openDelay={100} closeDelay={40000}>
            <div className="inline-block cursor-pointer">
                {/* {!initialData?.user && (
                    <HoverCardTrigger asChild>
                        <Link href="/login" className="flex items-center gap-1 text-sm py-1">
                            <Icon name="User" className="h-5 w-5" />
                            {t("Login")}
                        </Link>
                    </HoverCardTrigger>
                )} */}
            </div>

            {/* {!initialData?.user && (
                <HoverCardContent align="start" className="w-100 p-0 shadow-2xl rounded-lg overflow-hidden">
                    <LoginPopover />
                </HoverCardContent>
            )} */}
        </HoverCard>
    )
}

