'use client'

import { OrderCard } from "..";
import { useState } from "react";
import { Icon } from "@/components";
import { useTranslations } from "next-intl";
import { OrderItem } from "@/lib/types/orders.type";


export default function OrderItems({ data }: { data: OrderItem[] }) {
    // translate
    const t = useTranslations("order");

    // state
    const [showAll, setShowAll] = useState(false);

    const visibleItems = showAll ? data : data.slice(0, 2);
    return (
        <>
            <h4 className="font-semibold px-8">{t("order_items")}:</h4>
            <ul className="">
                <div
                    className={`
                        relative overflow-hidden transition-all duration-500 ease-in-out
                        m-8 mt-2 bg-white dark:bg-zinc-700 p-4 rounded-lg grid md:grid-cols-2 gap-2
                        ${showAll ? "h-full" : "max-h-50"}
                    `}>
                    {data?.map((item) => (
                        <li key={item.id}>
                            <OrderCard item={item} t={t} />
                        </li>
                    ))}

                    {/* Fade inside second row */}
                    {(visibleItems && showAll === false && data.length > 2) && (
                        <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-linear-to-t from-white via-white/70 to-transparent dark:from-zinc-400 dark:via-zinc-400/70" />
                    )}

                    {/* Toggle */}
                    {data?.length > 2 && (
                        <button
                            onClick={() => setShowAll((prev) => !prev)}
                            className="mx-auto mb-3 absolute bottom-3 left-[48%] block text-xs font-medium text-red-700"
                        >
                            {showAll ? <div><p className="text-xs">{t("less")}</p> <Icon name="ChevronUp" className="mx-auto" size={16} /></div> : <div><p className="text-xs">{t("all")}</p> <Icon name="ChevronDown" className="mx-auto" size={16} /></div>}
                        </button>
                    )}
                </div>
            </ul>
        </>
    )
}
