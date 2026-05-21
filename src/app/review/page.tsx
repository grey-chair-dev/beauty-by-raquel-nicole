import type { Metadata } from "next";
import { ReviewGate } from "@/components/review/ReviewGate";
import { ReviewPage } from "@/components/review/ReviewPage";
import { getReviewFlags } from "@/lib/content";

export const metadata: Metadata = {
  title: "Questions for Raquel",
  description: "Internal content review checklist for Beauty by Raquel Nicole.",
  robots: { index: false, follow: false },
};

export default function ReviewRoutePage() {
  return (
    <ReviewGate>
      <ReviewPage review={getReviewFlags()} />
    </ReviewGate>
  );
}
