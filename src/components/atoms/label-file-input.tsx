import { cn } from '@/lib/utils'
import { Image, Upload } from 'lucide-react'


const LabelFileInput = ({ inputId, fileName, status }: { inputId: string; fileName: string; status: "default" | "error" | "disabled" }) => {
    return (
        <label
            htmlFor={inputId}
            className={cn(
                "flex flex-1 items-center justify-between cursor-pointer px-4 py-2.5 text-sm",
                status === "disabled" && "cursor-not-allowed pointer-events-none"
            )}
        >
            <span
                className={cn(
                    "flex items-center gap-2 text-sm truncate",
                    fileName
                        ? "text-blue-600 dark:text-blue-600"
                        : status === "default"
                            ? "text-maroon-500 hover:text-maroon-600 dark:text-zinc-400"
                            : status === "error"
                                ? "text-red-600 dark:text-zinc-400"
                                : "text-zinc-400 dark:text-zinc-400"
                )}
            >
                {fileName && <Image className="h-4 w-4 text-blue-600" />}
                {fileName || "No file selected"}
            </span>

            <span
                className={cn(
                    "flex items-center gap-2 text-sm font-medium transition-colors shrink-0",
                    status === "default"
                        ? "text-maroon-500 hover:text-maroon-600 dark:text-zinc-400"
                        : status === "error"
                            ? "text-red-600 dark:text-zinc-400"
                            : "text-zinc-400 dark:text-zinc-700 cursor-not-allowed"
                )}
            >
                <Upload className="h-4 w-4" />
                Upload file
            </span>
        </label>
    )
}

export default LabelFileInput
