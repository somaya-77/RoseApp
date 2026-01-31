'use client';

import { AuthLanguageSwitcher } from "@/components";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function AuthLayoutForm({
    children,
}: {
    children: React.ReactNode;
}) {
    const { theme } = useTheme();

    const separator =
        theme === "dark"
            ? "/assets/images/separator-1.png"
            : "/assets/images/separator-2.png";

    return (
        <div className="flex items-center justify-center h-full" >
            <div className="flex flex-col gap-6">
                <div className="">
                    {/* language switcher */}
                    <AuthLanguageSwitcher />
                </div>
                {/* top separator */}
                <div className="mx-auto">
                    <Image
                        src={separator}
                        alt="separator top"
                        height={45}
                        width={280}
                        className="object-contain"
                        priority
                    />
                </div>

                {/* content */}
                <div>
                    {children}
                </div>

                {/* bottom separator */}
                <div className="mx-auto">
                    <Image
                        src={separator}
                        alt="separator bottom"
                        height={45}
                        width={280}
                        className="object-contain rotate-180"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
