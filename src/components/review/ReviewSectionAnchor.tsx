"use client";

import { useReviewFlags } from "@/components/review/ReviewFlagsContext";
import { ReviewFlagAnchor } from "@/components/review/ReviewFlagAnchor";

type ReviewSectionAnchorProps = {
  flagIds?: string[];
  href?: string;
  children: React.ReactNode;
};

/** Wraps a page section so matching review flags show above it when review mode is on. */
export function ReviewSectionAnchor({ flagIds, href, children }: ReviewSectionAnchorProps) {
  const { featureEnabled, openFlags } = useReviewFlags();

  if (!featureEnabled) {
    return <>{children}</>;
  }

  return (
    <ReviewFlagAnchor flags={openFlags} flagIds={flagIds} href={href}>
      {children}
    </ReviewFlagAnchor>
  );
}
