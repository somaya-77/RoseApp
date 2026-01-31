

import { cn } from "@/lib/utils";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuGroup,
    Button,
    Icon
} from "@/components";
import { Notification } from "@/lib/types";

export default function NotificationItem({ item }: { item: Notification }) {

    return (
        <DropdownMenuItem
            key={item.id}
            className={cn(`flex justify-between items-start rounded-none px-4 py-3 border-b border-zinc-300 dark:border-zinc-600 ${!item.read
                ? "bg-zinc-200 dark:bg-zinc-600"
                : "dark:bg-zinc-900"
                }`)}
        >
            <div className="flex flex-col gap-1">
                <p className="text-md text-zinc-800 font-semibold dark:text-zinc-50">
                    {item.title}
                </p>
                <p className="text-sm text-zinc-500 line-clamp-3 dark:text-zinc-400">
                    {item.description}
                </p>
            </div>

            {/* sub menu */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Icon name="EllipsisVertical" className="text-zinc-400" />
                </DropdownMenuTrigger>

                {/* sub menu content*/}
                <DropdownMenuContent
                    className="w-44 dark:bg-zinc-700 border-none"
                    align="start"
                >
                    <DropdownMenuGroup className="py-2.5 text-zinc-800 text-sm dark:text-zinc-50">
                        <DropdownMenuItem className="hover:dark:bg-zinc-600 cursor-pointer">
                            <Icon name="Check" className="text-zinc-500 dark:text-zinc-400" />
                            Mark as read
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:dark:bg-zinc-600 cursor-pointer">
                            <Icon name="Trash2" className="text-maroon-600 dark:text-maroon-500" />
                            Delete notification
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </DropdownMenuItem>
    )
}