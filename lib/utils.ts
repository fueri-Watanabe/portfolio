import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Classnames merger combining clsx and tailwind-merge.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
