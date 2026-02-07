"use client";

import { Icon } from "@/components";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function ResetFilter({ filter }: { filter: string }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleClearFilter = () => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete(filter);

        const newUrl = params.toString()
            ? `${pathname}?${params.toString()}`
            : pathname;

        router.replace(newUrl);
    };

    return (
        <button className="text-red-600 flex items-center gap-1 p-1 cursor-pointer hover:bg-red-50/80 transition-all" onClick={handleClearFilter}>
            <Icon name="X" />
            <span>Reset</span>
        </button>
    );
}
