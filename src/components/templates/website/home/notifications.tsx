"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  EmptyNotifications,
  Badge,
  Button,
  Icon
} from "@/components";
import { UseNotificationsHook } from "@/hooks/website/use-notifications.hook";
import { ContentNotification } from "@/components/templates/website";


export default function Notifications({ notificationCount = 0 }: { notificationCount?: number }) {

  const { notifications } = UseNotificationsHook()

  return (
    <DropdownMenu>
      {/* trigger */}
      <DropdownMenuTrigger asChild>
        <div
          className="relative h-8 w-8 flex items-center justify-center rounded-full"
        >
          <Icon name="Bell" className="h-5 w-5" />

          {notificationCount > 0 && (
            <Badge
              className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs flex items-center justify-center rounded-full"
              variant={"primary"}
            >
              {notificationCount > 9 ? "9+" : notificationCount}
            </Badge>
          )}
          <span className="sr-only">Notifications</span>
        </div>
      </DropdownMenuTrigger>

      {/* content */}
      <DropdownMenuContent
        align="start"
        className="w-80 rounded-xl p-0 border-none"
      >
        {/* notification */}
        <DropdownMenuLabel className="text-white bg-softPink-200 text-xl px-4 py-3 dark:bg-soft-pink-200 dark:text-zinc-800">
          Notifications <span> ({notificationCount})</span>
        </DropdownMenuLabel>
        {/* second label */}
       

        {notifications.length === 0 ? (
        <EmptyNotifications />
        ) : (
          <ContentNotification />
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
