import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { SelectProps } from "@/lib/types";

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, status = "default", children, ...props }, ref) => {
    const statusClasses = {
      default: "select",
      error: "error_select",
      disabled: "disabled_select",
    };

    return (
      <div className="relative w-full">
        <select
          ref={ref}
          className={cn(
            "flex h-11 w-full rounded-xl px-4 pr-10 bg-white text-sm border appearance-none cursor-pointer focus:outline-none",
            statusClasses[status],
            className
          )}
          disabled={status === "disabled" || props.disabled}
          {...props}
        >
          {children}
        </select>

        <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-zinc-400 dark:text-zinc-500">
          <ChevronDown className="h-5 w-5" />
        </span>
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select };