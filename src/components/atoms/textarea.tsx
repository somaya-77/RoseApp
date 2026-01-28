import * as React from "react";
import { cn } from "@/lib/utils";
import { TextareaProps } from "@/lib/types/interface";

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, status = "default", ...props }, ref) => {
    const statusStyles = {
      default: "textarea",
      error: "error_textarea",
      disabled: "disabled_textarea",
    };

    return (
      <textarea
        ref={ref}
        disabled={status === "disabled"}
        className={cn(
          "flex min-h-37.5 w-full rounded-xl p-4 bg-white text-sm font-sarabun border placeholder:text-zinc-400 focus:outline-none focus:border",
          statusStyles[status],
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };