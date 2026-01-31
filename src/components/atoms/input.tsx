import * as React from "react";
import { cn } from "@/lib/utils";
import { InputProps } from "@/lib/types";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, status = "default", type = "text", ...props }, ref) => {
    const statusClasses = {
      default: "input",
      error: "error_input",
      disabled: "disabled_input",
    };

    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-11 w-full rounded-xl px-4 text-sm font-sarabun border placeholder:text-zinc-400 focus:outline-none ",
          statusClasses[status],
          className
        )}
        disabled={status === "disabled" || props.disabled}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };