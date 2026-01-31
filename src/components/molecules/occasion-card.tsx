import Image from "next/image";
import { cn } from "@/lib/utils";
import { IOccasionCardProps } from "@/lib/types/interface";
import { useTranslations } from "next-intl";

function OccasionCard ({ occasion, height, children }: IOccasionCardProps) {
    const t = useTranslations("home");
    return (
        <div
            className={cn("rounded-lg overflow-hidden relative w-full")}
            style={{ height: `${height}px` }}
        >
            {/* image */}
            <Image src={occasion.image} alt={occasion.title} fill
                className="object-cover" />
            {/* text overlay */}
            <div className='bg-black/20 absolute bottom-0 left-0 right-0 h-full'>
                <div className='absolute bottom-0 left-0 p-6'>
                    {/* badge */}
                    {occasion.badge && <p className="bg-maroon-200 text-white mb-2 rounded-full text-sm px-1 w-fit">{t(occasion.badge)}</p>}
                    {/* title */}
                    <p className='text-white font-semibold text-2xl leading-6'>{t(occasion.title)}</p>
                    {/* description */}
                    {occasion.description && <p className='text-white '>{t(occasion.description)}</p>}
                    {/* children */}
                    {children && <div className="mt-4">{children}</div>}
                </div>
            </div>
        </div>
    );
};

export default OccasionCard;
