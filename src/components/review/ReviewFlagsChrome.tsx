"use client";

import type { ReviewFlag } from "@/lib/review-flags";
import { useReviewFlags } from "@/components/review/ReviewFlagsContext";
import { PageReviewFlags } from "@/components/review/PageReviewFlags";
import { ReviewerNameBar } from "@/components/review/ReviewerNameBar";
import { ReviewToggle } from "@/components/review/ReviewToggle";

export function ReviewFlagsChrome({ flags }: { flags: ReviewFlag[] }) {
  const { featureEnabled, visible } = useReviewFlags();

  if (!featureEnabled) return null;

  return (
    <>
      <ReviewToggle />
      {visible ? (
        <>
          <ReviewerNameBar />
          <PageReviewFlags flags={flags} />
        </>
      ) : null}
    </>
  );
}
