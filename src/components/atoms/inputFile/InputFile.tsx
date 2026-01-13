"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import LabelFileInput from "./LabelFileInput";
import { FileInputProps } from "@/lib/types/interface";

const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  ({ className, status = "default", id, ...props }, ref) => {
    const inputId = id || React.useId();
    const [fileName, setFileName] = React.useState<string>("");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        setFileName(files[0].name);
      } else {
        setFileName("");
      }
      props.onChange?.(e);
    };

    const statusStyles = {
      default: "file_input",
      error: "error_file_input",
      disabled: "disabled_file_input",
    };

    return (
      <div
        className={cn(
          "flex items-center w-full rounded-xl border bg-white transition-colors text-maroon-500 dark:text-zinc-400",
          statusStyles[status],
          status === "disabled" && "opacity-50",
          className
        )}
      >
        <input
          type="file"
          id={inputId}
          ref={ref}
          disabled={status === "disabled"}
          className="sr-only"
          onChange={handleFileChange}
          {...props}
        />
        <LabelFileInput inputId={inputId} fileName={fileName} status={status}   />
      </div>
    );
  }
);

FileInput.displayName = "FileInput";

export { FileInput };