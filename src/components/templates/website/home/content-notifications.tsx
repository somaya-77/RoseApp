'use client'

import NotificationItem from "./notification-item";
import InfiniteScroll from "react-infinite-scroll-component";
import { UseNotificationsHook } from "@/hooks/website/use-notifications-hook";
import { DropdownMenuLabel } from "@/components/atoms/dropdown-menu";
import Icon from "@/components/atoms/icon";


export default function ContentNotification() {
    const { notifications, fetchMoreNotifications, hasMore } = UseNotificationsHook()

    return (
        <div
            id="notifications-scroll"
            className="max-h-80 overflow-auto scrollbar-hide scroll-smooth"
        >
            <DropdownMenuLabel className="flex justify-between border-b border-zinc-300 dark:border-zinc-600 dark:bg-zinc-700">
                <div
                    // disabled={notifications.length === 0}
                    className="text-zinc-800 p-0 text-xs font-semibold dark:text-zinc-50 flex items-center gap-2 cursor-pointer"
                >
                    <Icon name="BrushCleaning" className="text-zinc-500 dark:text-zinc-400" />
                    Clear all notifications
                </div>
                <div

                    // disabled={notifications.length === 0}
                    className="text-zinc-800 p-0 text-xs font-semibold dark:text-zinc-50 flex items-center gap-2 cursor-pointer"
                >
                    <Icon name="CheckCheck" className="text-zinc-500 dark:text-zinc-400" />
                    Mark all as read
                </div>
            </DropdownMenuLabel>
            {/* infinite scroll */}
            <InfiniteScroll
                dataLength={notifications.length}
                next={fetchMoreNotifications}
                hasMore={hasMore}
                loader={
                    <p className="text-center text-sm py-3 text-muted-foreground">
                        Loading...
                    </p>
                }
                endMessage={
                    <p className="text-center text-sm py-3 text-muted-foreground">
                        No more notifications
                    </p>
                }
                scrollableTarget="notifications-scroll"
            >
                {/* notification */}
                {notifications.map((item) => (
                    <NotificationItem item={item} />
                ))}
            </InfiniteScroll>
        </div>
    )
}