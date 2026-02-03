import { cn } from "@/lib/utils";
import { Icon } from "@/components";
import { totalData } from "@/lib/constants/dashboard";

export default function Total() {

    return (
        <>
            <ul className="grid grid-cols-2 h-60 gap-4">
                {totalData.map((Item, index) => {
                    const { bg, num, title, icon, text, pound } = Item;
                    return (
                        <li key={index} className={cn("flex flex-col justify-between rounded-lg p-4", bg)}>
                            <Icon name={icon} size="lg" className={text} />
                            <h3 className={cn("font-semibold text-xl", text)}>{num} <span className="font-medium text-sm">{pound}</span></h3>
                            <p className="font-semibold">{title}</p>
                        </li>
                    )
                })}
            </ul>

        </>
    )
}