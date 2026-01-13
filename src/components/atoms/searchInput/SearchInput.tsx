import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideSearch } from "lucide-react";
import { SearchInputProps, Status } from "@/lib/types";

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, status = "default", type = "text", ...props }, ref) => {
    const statusClasses: Record<Status, string> = {
      default: "search_input",
      error: "error_search_input",
      disabled: "disabled_search_input",
    };

    return (
      <div className="relative w-full">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500">
          <LucideSearch className="h-4 w-4" />
        </span>

        <input
          ref={ref}
          type={type}
          className={cn(
            "flex h-11 w-full rounded-xl border bg-white px-4 pl-10 text-sm placeholder:text-zinc-400 focus:outline-none",
            statusClasses[status],
            className
          )}
          disabled={status === "disabled" || props.disabled}
          {...props}
        />
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";

export { SearchInput };