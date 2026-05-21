"use client";

import type { ReviewFlag } from "@/lib/review-flags";
import { flagsForAnchor } from "@/lib/review-flags";
import { useReviewFlags } from "@/components/review/ReviewFlagsContext";
import { ReviewFlagGroupedList } from "@/components/review/ReviewFlagGroupedList";

type ReviewFlagAnchorProps = {
  flags: ReviewFlag[];
  href?: string;
  flagIds?: string[];
  children: React.ReactNode;
};

export function ReviewFlagAnchor({
  flags,
  href,
  flagIds,
  children,
}: ReviewFlagAnchorProps) {
  const { visible } = useReviewFlags();

  if (!visible) {
    return children;
  }

  const matched = flagsForAnchor(flags, { href, flagIds });
  if (matched.length === 0) {
    return children;
  }

  return (
    <>
      <ReviewFlagGroupedList flags={matched} compact />
      {children}
    </>
  );
}
