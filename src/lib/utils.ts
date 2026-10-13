import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Trims newly inserted text (typed or pasted) so the result fits in maxLength,
// instead of rejecting the whole change. Returns the number of removed characters.
export function limitInsertedText(previous: string, next: string, caret: number, maxLength: number) {
  const inserted = next.length - previous.length;
  const removed = Math.min(next.length - maxLength, inserted);
  if (removed <= 0) return { text: next, removed: 0 };
  return { text: next.slice(0, caret - removed) + next.slice(caret), removed };
}
