'use client'

import Image from "next/image";
import { cn } from "@/lib/utils";
// import { IOccasionCardProps } from "@/lib/types";
import { useLocale, useTranslations } from "next-intl";
import { Badge } from "@/components";
import { IOccasionCardProps } from "@/lib/types/occasion.type";


export default function OccasionCard ({ occasion, height, children }: IOccasionCardProps) {
    const t = useTranslations("home");
     const locale = useLocale();
     
    return (
        <div
            className={cn("rounded-lg overflow-hidden relative w-full col-span-6 md:col-span-3 lg:col-span-2 ",height === 440 ? "h-110" : "h-67.5" )}
        >
            {/* image */}
            <Image src={occasion.image} alt={t(occasion.title)} fill
                className="object-cover" />
            {/* text overlay */}
            <div className='bg-black/20 absolute bottom-0 left-0 right-0 h-full'>
                <div className={cn('absolute  bottom-0 p-6', locale === "ar"? "right-0" : "left-0" )}>
                    {/* badge */}
                    
                    {occasion.badge && <Badge variant="primary">{t(occasion.badge)}</Badge>}
                    {/* title */}
                    <p className='text-white font-semibold text-2xl leading-6'>{t(occasion.title)}</p>
                    {/* description */}
                    {occasion.description && <p className='text-white'>{t(occasion.description)}</p>}
                    {/* children */}
                    {children && <div className="mt-4">{children}</div>}
                </div>
            </div>
        </div>
    );
};

