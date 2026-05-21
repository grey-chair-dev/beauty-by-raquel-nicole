"use client";

import type { ReviewFlag } from "@/lib/review-flags";
import { ReviewFlagsProvider } from "@/components/review/ReviewFlagsContext";
import { ReviewFlagsChrome } from "@/components/review/ReviewFlagsChrome";
import { PageAnythingElseReview } from "@/components/review/PageAnythingElseReview";

type ReviewShellClientProps = {
  children: React.ReactNode;
  featureEnabled: boolean;
  openFlags: ReviewFlag[];
};

export function ReviewShellClient({
  children,
  featureEnabled,
  openFlags,
}: ReviewShellClientProps) {
  return (
    <ReviewFlagsProvider featureEnabled={featureEnabled} openFlags={openFlags}>
      <ReviewFlagsChrome flags={openFlags} />
      {children}
      <PageAnythingElseReview flags={openFlags} />
    </ReviewFlagsProvider>
  );
}
