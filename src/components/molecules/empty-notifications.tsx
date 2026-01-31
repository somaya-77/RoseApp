import { BellOffIcon } from "lucide-react";
import React from "react";
import { DropdownMenuLabel } from "../atoms/dropdown-menu";
import Icon from "../atoms/icon";

export default function EmptyNotifications() {
  return (
    <div className="text-center text-zinc-300 dark:bg-zinc-700 dark:text-[#A1A1AA]">
      <DropdownMenuLabel className="flex justify-between border-b border-zinc-300 dark:border-zinc-600 dark:bg-zinc-700">
        <div
          // disabled={notifications.length === 0}
          className="text-zinc-800 p-0 text-xs font-semibold dark:text-zinc-400 flex items-center gap-2 cursor-pointer"
        >
          <Icon name="BrushCleaning" className="text-zinc-500 dark:text-zinc-400" />
          Clear all notifications
        </div>
        <div

          // disabled={notifications.length === 0}
          className="text-zinc-800 p-0 text-xs font-semibold dark:text-zinc-400 flex items-center gap-2 cursor-pointer"
        >
          <Icon name="CheckCheck" className="text-zinc-500 dark:text-zinc-400" />
          Mark all as read
        </div>
      </DropdownMenuLabel>
      <div className="h-52 flex flex-col items-center justify-center">
        <BellOffIcon strokeWidth={1} size={50} className="mx-auto" />
        <p className="text-sm">No notifications to display.</p>
      </div>
    </div>
  );
}
