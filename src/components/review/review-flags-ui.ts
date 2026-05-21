import type { ReviewFlag } from "@/lib/review-flags";

export const reviewPriorityLabel: Record<ReviewFlag["priority"], string> = {
  high: "Answer soon",
  medium: "Important",
  low: "When you can",
};

export const reviewPriorityClass: Record<ReviewFlag["priority"], string> = {
  high: "bg-error-container text-on-error-container",
  medium: "bg-tertiary-container text-on-tertiary-container",
  low: "bg-surface-container-high text-on-surface-variant",
};
