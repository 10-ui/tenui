import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function lc(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
