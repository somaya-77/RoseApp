import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toReadableQueryString(query: string): string {
  return query.replace(/%5B/g, "[").replace(/%5D/g, "]");
}
